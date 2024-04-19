import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import { Suspense } from "react";
import { db } from "@/lib/db";

export const revalidate = 0;

export default function Doctors() {
  return (
    <div
      className={cn(
        "w-full grow rounded-lg bg-secondary border-border border p-4 drop-shadow-sm 2xl:max-w-[800px]"
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Top Doctors</h1>
        <Link href="dashboard/doctors">
          <Button
            variant={"link"}
            className="text-base font-medium text-blue-500"
          >
            View All
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
      <Suspense fallback="loading...">
        <DoctorList />
      </Suspense>
    </div>
  );
}

async function DoctorList() {
  const doctors = await db.doctor.findMany({
    take: 8,
  });

  return (
    <div className="mt-4 grid xl:basis-[55%]  grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
      {doctors.map((doctor) => (
        <Link
          key={doctor.id}
          href={`dashboard/doctors/${doctor.username}`}
          className="group flex h-32 w-full items-center justify-between gap-6 rounded-md  p-4 shadow-sm bg-slate-50  border border-border md:max-w-[400px]"
        >
          <div className="m mx-0  my-auto h-[72px] w-[72px] overflow-hidden rounded-full">
            {doctor.image && (
              <UserAvatar
                name={doctor.name}
                image={doctor.image}
                className="h-full w-full overflow-hidden"
              />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium">{doctor.name}</h2>
            <h3 className="text-sm font-normal text-zinc-500">
              {doctor.speciality}
            </h3>
            <div className="flex flex-wrap items-center gap-2 font-extralight text-zinc-600">
              <Star className="h-4 w-4 fill-zinc-600 hover:fill-yellow-400" />
              <p>{doctor.rating}</p>
              <p className="align-middle font-bold">.</p>
              <p>{doctor.reviews}+ Reviews</p>
            </div>
          </div>
          <ArrowRight className="mb-2 h-5 w-5 self-end group-hover:scale-125 group-hover:text-blue-500" />
        </Link>
      ))}
    </div>
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
