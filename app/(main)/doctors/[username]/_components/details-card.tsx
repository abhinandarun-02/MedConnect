import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Doctor } from "@prisma/client";
import { Star } from "lucide-react";
import Link from "next/link";

const DetailsCard = (doctor: Doctor) => {
  return (
    <Card className="w-[420px] py-4 absolute right-24">
      <CardContent>
        <div className="space-y-4">
          <div className="w-full flex flex-col bg-accent rounded-lg p-2 gap-2">
            <div className="flex basis-full flex-wrap">
              <div className="basis-1/2">
                <span className="text-4xl font-medium">{doctor.rating}</span>
              </div>
              <div className="flex flex-col w-full basis-0 flex-grow">
                <div className="flex justify-center">
                  <Star className="fill-yellow-500" />
                  <Star className="fill-yellow-500" />
                  <Star className="fill-yellow-500" />
                  <Star className="fill-yellow-500" />
                  <Star />
                </div>
                <span className="text-sm text-center">Patient Trust score</span>
              </div>
            </div>
            <div className="flex w-full text-sm">
              <div className="flex gap-1 items-center w-full flex-grow-1">
                <span className="text-card-dark font-medium">
                  {doctor.reviews}
                </span>
                <span>Patient Reviews</span>
              </div>
              <div className="flex gap-1 items-center justify-center w-full flex-grow-1">
                <span className="text-card-dark font-medium">
                  {doctor.endorsements}
                </span>
                <span>Peer Endrosments</span>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <div className="w-full flex justify-between items-center">
              <span className="text-card-foreground font-bold text-[13px]">
                RECENT PATIENT REVIEW
              </span>
              <span className="text-gray-400 text-xs">13 Jan 2024</span>
            </div>
            <p className="text-gray-500 text-sm">
              Very clear explanation before and during procedure, enabling me to
              understand what I saw on screen. Helpful, friendly and reassuring:
              I could not have wished for more!
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link
          href={`appointment/${doctor.username}`}
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          Book Appointment
        </Link>
        <Button className="w-full">Contact</Button>
      </CardFooter>
    </Card>
  );
};

export default DetailsCard;
