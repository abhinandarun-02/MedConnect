import React from "react";
import { Sidebar } from "./_components/sidebar";
import { DoctorCard } from "./_components/card";
import {db} from "@/lib/db";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    speciality: string | null;
    page: string | null;
    gender: string | null;
    language: string | null;
    appointmentType: string | null;
  };
}) => {
  const { speciality: specialtiyCode, gender: genderCode } = searchParams;

  const specialityMap = new Map([
    ["all", undefined],
    ["der", "Dermatology"],
    ["ort", "Orthopedics"],
    ["neu", "Neurology"],
    ["gas", "Gastroenterology"],
    ["ped", "Pediatrics"],
    ["psy", "Psychology"],
    ["uro", "Urology"],
    ["nep", "Nephrology"],
    ["ent", "ENT"],
    ["car", "Cardiology"],
  ]);

  const genderMap = new Map([
    ["all", undefined],
    ["male", "Male"],
    ["female", "Female"],
    ["other", "Other"],
  ]);

  const speciality = specialtiyCode
    ? specialityMap.get(specialtiyCode)
    : undefined;

  const gender = genderCode ? genderMap.get(genderCode) : undefined;

  const doctors = await db.doctor.findMany({
    where: {
      speciality: speciality ? { equals: speciality } : undefined,
      AND: { gender: gender ? { equals: gender } : undefined },
    },
  });

  return (
    <section className="px-8 py-12">
      <div className="flex gap-4 relative">
        <Sidebar />
        <div className="w-full space-y-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor = {doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
