import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import {db} from "@/lib/db";
import { Appointment } from "@prisma/client";

export async function POST(req: Request) {
  const { doctorId, patientId, date, slot, appUrl } = await req.json();

  if (!doctorId) {
    return new NextResponse("Doctor id is required", { status: 400 });
  }

  if (!patientId) {
    return new NextResponse("Patient id is required", { status: 400 });
  }

  if (!date) {
    return new NextResponse("Date is required", { status: 400 });
  }

  if (!slot) {
    return new NextResponse("Slot is required", { status: 400 });
  }

  if (!appUrl) {
    return new NextResponse("App url is required", { status: 400 });
  }

  const doctor = await db.doctor.findUnique({ where: { id: doctorId } });
  const patient = await db.patient.findUnique({
    where: { id: patientId },
  });

  if (!doctor) {
    return new NextResponse("Doctor not found", { status: 404 });
  }

  if (!patient) {
    return new NextResponse("Patient not found", { status: 404 });
  }

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    {
      quantity: 1,
      price_data: {
        currency: "INR",
        product_data: {
          name: "Consultation",
        },
        unit_amount: 500 * 100,
      },
    },
  ];

  const appointment: Appointment = await db.appointment.create({
    data: {
      doctorId: doctor.id,
      patientId: patient.id,
      date: date,
      slot: slot,
      amount: 500,
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${appUrl}/dashboard?success=1`,
    cancel_url: `${appUrl}/dashboard?canceled=1`,
    metadata: {
      appointmentId: appointment.id,
    },
  });

  return NextResponse.json({ url: session.url });
}
