import { redirect } from "next/navigation";

import {db} from "@/lib/db";
import { Doctor } from "@prisma/client";
import Header from "./_components/header";


const DoctorPage = async ({
  params,
}: {
  params: { lang: string; username: string };
}) => {
  const doctor: Doctor | null = await db.doctor.findUnique({
    where: { username: params.username },
  });

  if (!doctor) redirect("/dashboard");

  return (
    <div className="relative min-h-screen">
      <div>
        <Header {...doctor} />
      </div>
    </div>
  );
};

export default DoctorPage;
