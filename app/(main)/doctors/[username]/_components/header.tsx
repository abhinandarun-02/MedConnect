import { Badge } from "@/components/ui/badge";
import { Doctor } from "@prisma/client";
import { Briefcase, Languages, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import DetailsCard from "./details-card";

const Header = (doctor: Doctor) => {
  return (
    <div className="bg-secondary p-12">
      <div className="flex justify-between">
        <div className="flex gap-8 h-full">
          <div className="flex mt-1">
            <Image
              className="rounded-lg h-48 w-48"
              src={doctor.image || ""}
              alt={doctor.name}
              width={320}
              height={320}
            />
          </div>
          <div className="flex flex-col gap-1 py-2">
            <span className="font-semibold text-3xl text-card-dark">
              {doctor.name}
            </span>
            <div className="flex gap-2 items-center text-lg">
              <div>
                <p className="text-card-dark font-medium text-lg">
                  {doctor.speciality}
                </p>
              </div>
              <div className="flex items-center">
                <MapPin />
                <p className="text-base">{doctor.location}</p>
              </div>
            </div>
            <div className="text-[13px] font-medium flex gap-8 text-sm mt-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                <p>{doctor.experience} YEARS OF EXPERIENCE</p>
              </div>
              {doctor.verified && (
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 fill-green-500" />
                  <p>VERIFIED PROFILE</p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Languages className="ml-1 h-5 w-5" />
              <div className="flex gap-0.5">
                {doctor.languages.map((language, index) => (
                  <Badge
                    key={index}
                    className="bg-card-dark text-white px-4 text-xs"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DetailsCard {...doctor}/>
      </div>
    </div>
  );
};

export default Header;
