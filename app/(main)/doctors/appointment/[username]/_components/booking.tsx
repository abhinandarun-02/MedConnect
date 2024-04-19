"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CalendarCheck, Edit } from "lucide-react";
import { useUser } from "@clerk/nextjs";

import { useState } from "react";
import axios from "axios";
import { Doctor, Patient, User } from "@prisma/client";
import { toast } from "@/components/ui/use-toast";
import { useOrigin } from "@/lib/hooks/use-origin";
import { ToastAction } from "@/components/ui/toast";

const Booking = (doctor: Doctor) => {
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string>("");
  const [step, setStep] = useState<"booking" | "payment">("booking");

  const {user} = useUser();

  const origin = useOrigin();

  const onCheckout = async () => {
    try {
      const patient = await axios.get<Patient>(`${origin}/api/user`, {
        params: { userId: user?.id },
      });
      if (!patient.data) throw new Error("User not found");

      const response = await axios.post(
        `${origin}/api/checkout`,
        {
          doctorId: doctor.id,
          patientId: patient.data.id,
          slot: slot,
          date: date,
          appUrl: origin,
        }
      );
      window.location = response.data.url;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error occurred during checkout",
      })
      console.error("Error occurred during checkout:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <Card className="max-w-[580px] w-full py-8">
        {step === "booking" ? (
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              fromDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
              toDate={new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000)}
              className="border rounded-lg"
            />
            <div className="mt-4">
              <span>Pick a Time</span>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {[
                  "9:00 AM",
                  "9:30 AM",
                  "10:00 AM",
                  "10:30 AM",
                  "6:00 PM",
                  "6:30 PM",
                  "7:00 PM",
                  "7:30 PM",
                ].map((time) => (
                  <Slot
                    key={time}
                    time={time}
                    slot={slot}
                    date={date}
                    setSlot={setSlot}
                  />
                ))}
              </div>
              <Button
                size="lg"
                className="w-full mt-4"
                disabled={!slot || !date}
                onClick={() => {
                  setStep("payment");
                }}
              >
                Book Consultation
              </Button>
            </div>
          </CardContent>
        ) : (
          <>
            <CardContent className="w-full">
              <div className="w-full flex flex-col gap-6">
                <div className="w-full flex justify-between px-3 py-2 rounded-sm bg-[#e3f6e9] border border-[#05c165] text-[#035e32] items-center">
                  <div className="flex">
                    <CalendarCheck className="h-4 w-4" />
                    <span className="ml-4 text-sm font-medium">
                      {date?.toDateString() + ", " + slot}
                    </span>
                  </div>
                  <Edit
                    className="h-4 w-4 cursor-pointer"
                    onClick={() => setStep("booking")}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    type="name"
                    id="name"
                    placeholder="Full Name"
                    value={user?.fullName || ""}
                    disabled
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="test@email.com"
                    value={user?.emailAddresses[0].emailAddress || ""}
                    disabled
                    className="cursor-default"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
              <Button
                size="lg"
                className="w-full border"
                variant="secondary"
                onClick={() => setStep("booking")}
              >
                Back
              </Button>
              <Button size="lg" className="w-full" onClick={onCheckout}>
                Pay ₹ 500
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};

export default Booking;

const Slot = ({
  time,
  slot,
  date,
  setSlot,
}: {
  time: string;
  slot: string;
  date: Date | undefined;
  setSlot: (slot: string) => void;
}) => {
  return (
    <div
      className={cn(
        " cursor-pointer py-2 bg-card text-card-foreground font-medium border border-border rounded-lg flex justify-center text-[13px] text-center hover:border-primary",
        slot === time ? "bg-secondary border-primary" : "",
        !date
          ? "text-muted-foreground bg-gray-100 border-gray-500 hover:border-gray-500 cursor-default"
          : ""
      )}
      onClick={() => {
        if (date) setSlot(time);
      }}
    >
      <div className="flex flex-col">
        <span>{time}</span>

        <span>IST</span>
      </div>
    </div>
  );
};
