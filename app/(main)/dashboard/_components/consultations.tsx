import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Calendar, Clock, MoreHorizontal } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {db} from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Consultations() {
  return (
    <div className="grow rounded-xl bg-secondary w-full xl:basis-[45%] max-w-[450px]">
      <div className="flex justify-between p-6">
        <div className="text-base font-semibold">Upcoming Consulations</div>
        <Button variant="ghost" className="m-0 h-fit p-0 hover:bg-white">
          <MoreHorizontal className="text-muted-foreground" />
        </Button>
      </div>
      <Separator orientation="horizontal" />
      <ConsultationList />
    </div>
  );
}

async function ConsultationList() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  const patient = await db.patient.findUnique({
    where: { userId: user.id },
  });
  const consultations = await db.appointment.findMany({
    where: { patientId: patient?.id, completed: false, isPaid:true },
    include: { doctor: true },
    take: 3,
    orderBy: { date: 'asc' }, // Sort by date in ascending order
  });

  return (
    <>
      {consultations.map((consultation) => (
        <div key={consultation.id}>
          <div className="space-y-4 p-4">
            <div className="flex xl:px-12 items-center justify-between  gap-10  ">
              <div className="m mx-0  my-auto h-14 w-14 overflow-hidden rounded-full">
                <UserAvatar
                  name={consultation.doctor.name}
                  image={consultation.doctor.image || ""}
                  className="h-full w-full overflow-hidden transition delay-300 duration-500 ease-in-out group-hover:scale-125"
                />
              </div>
              <div>
                <h4 className="font-medium">{consultation.doctor.name}</h4>
                <h5 className="text-sm text-muted-foreground">
                  {consultation.doctor.speciality}
                </h5>
              </div>
            </div>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{consultation.date.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                <span>{consultation.slot}</span>
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <Button variant="outline">Cancel</Button>
              <Link href={`dashboard/doctors/${consultation.doctor.username}`} className={cn(buttonVariants({variant:"default"}))}>View Profile</Link>
            </div>
          </div>
          <Separator />
        </div>
      ))}
    </>
  );
}

const UserAvatar = ({
  image,
  name,
  className,
}: {
  image: string;
  name: string;
  className?: string;
}) => {
  return (
    <Avatar
      className={cn(
        "bg-blackA3 inline-flex h-[45px] w-[45px] cursor-pointer select-none items-center justify-center overflow-hidden rounded-full align-middle",
        className
      )}
    >
      <AvatarImage
        className="h-full w-full rounded-[inherit] object-cover"
        src={image}
        alt={name}
      />
      <AvatarFallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        JD
      </AvatarFallback>
    </Avatar>
  );
};
