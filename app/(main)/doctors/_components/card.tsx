import Image from 'next/image'
import { Briefcase, Languages, MapPin, ShieldCheck, Star } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Doctor } from '@prisma/client'

export const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <div className="card flex w-full border border-border px-6 py-3.5 text-card-foreground">
      <div className="about w-full basis-2/3">
        <div className="flex h-full items-center gap-4">
          <div className="mt-1 flex">
            <Link href={`doctors/${doctor.username}`}>
              <Image
                className="h-36 w-36 rounded-lg transition-all duration-300 hover:scale-105"
                src={doctor.image || ''}
                alt={doctor.name}
                width={320}
                height={320}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link href={`doctors/${doctor.username}`}>
              <span className="cursor-pointer text-2xl font-semibold text-card-dark">
                {doctor.name}
              </span>
            </Link>
            <div className="flex items-center gap-2 text-lg">
              <div>
                <p className="font-medium text-card-dark">
                  {doctor.speciality}
                </p>
              </div>
              <div className="flex items-center">
                <MapPin />
                <p className="text-base">{doctor.location}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-[13px] text-sm font-medium">
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
              <div className="flex items-center gap-3">
                <Languages className="ml-1 h-4 w-4" />
                <div className="flex gap-0.5">
                  {doctor.languages.map((language, index) => (
                    <Badge key={index} className="bg-card-dark text-white">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details flex basis-1/3 flex-col gap-2">
        <div className="flex w-full flex-col gap-2 rounded-lg bg-accent p-2">
          <div className="flex basis-full flex-wrap">
            <div className="basis-1/2">
              <span className="text-4xl font-medium">{doctor.rating}</span>
            </div>
            <div className="flex w-full flex-grow basis-0 flex-col">
              <div className="flex justify-center">
                <Star className="fill-yellow-500" />
                <Star className="fill-yellow-500" />
                <Star className="fill-yellow-500" />
                <Star className="fill-yellow-500" />
                <Star />
              </div>
              <span className="text-center text-sm">Patient Trust score</span>
            </div>
          </div>
          <div className="flex w-full text-sm">
            <div className="flex-grow-1 flex w-full items-center gap-1">
              <span className="font-medium text-card-dark">
                {doctor.reviews}
              </span>
              <span>Patient Reviews</span>
            </div>
            <div className="flex-grow-1 flex w-full items-center justify-center gap-1">
              <span className="font-medium text-card-dark">
                {doctor.endorsements}
              </span>
              <span>Peer Endrosments</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={`doctors/appointment/${doctor.username}`}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            Book Appointment
          </Link>
          <Link
            href={`doctors/${doctor.username}`}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
