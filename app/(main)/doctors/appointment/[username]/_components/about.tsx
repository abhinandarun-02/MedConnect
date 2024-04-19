import { Briefcase, Clock, Crown, ShieldCheck, Video } from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Doctor } from "@prisma/client";

const About = (doctor: Doctor) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <Image
          src={doctor.image || ""}
          width={100}
          height={100}
          alt={doctor.name}
          className="rounded-lg"
        />
        <span className="font-semibold text-2xl text-primary-background-600">
          {doctor.name}
        </span>

        <span className="text-card-foreground text-sm">
          Urologist | Consultant|Prostate |King&apos;s College Hospital |
          University College Hospital | The Royal Marsden | South East England
        </span>

        <div className="text-[13px] font-medium flex gap-2 text-sm mt-4">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5" />
            <p>{doctor.experience} YEARS OF EXPERIENCE</p>
          </div>
          {doctor.verified && (
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 fill-green-500" />
              <p>VERIFIED PROFILE</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center lg:justify-start">
        <Card className="w-full bg-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-medium justify-center md:justify-start">
              Quick Call
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-nowrap">
            <>
              <div className="flex gap-2 justify-center md:justify-start">
                <div className="flex gap-2 items-center">
                  <Video className="text-card-dark w-6" />
                  <span>1:1 Call</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Clock className="text-card-dark w-5" />
                  <span>30 Min</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-2xl font-medium text-center md:text-start">₹ 500</span>
                <div className="flex flex-col md:flex-row items-center">
                  <span className="text-primary max-sm:text-center">Get (15% OFF) 425</span>
                  <Link
                    href="#"
                    className={buttonVariants({ variant: "link" }) + " p-0"}
                  >
                    <Crown />
                    Go Pro now
                  </Link>
                </div>
              </div>
            </>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default About;
