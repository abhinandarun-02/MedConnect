import { Doctor } from "@prisma/client";
import { redirect } from "next/navigation";

import {db} from "@/lib/db";
import Booking from "./_components/booking";
import About from "./_components/about";

const page = async ({
  params,
}: {
  params: { lang: string; username: string };
}) => {
  const doctor: Doctor | null = await db.doctor.findUnique({
    where: { username: params.username },
  });

  if (!doctor) redirect("/dashboard");
  return (
    <div className="px-24 py-12">
      <div className="flex flex-col xl:flex-row gap-4">
        <About {...doctor} />
        <Booking {...doctor}/>
      </div>
    </div>
  );
};

export default page;
