import { Briefcase, Clock, Crown, ShieldCheck, Video } from 'lucide-react'
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Doctor } from '@prisma/client'

const About = (doctor: Doctor) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <Image
          src={doctor.image || ''}
          width={100}
          height={100}
          alt={doctor.name}
          className="rounded-lg"
        />
        <span className="text-2xl font-semibold text-primary-background-600">
          {doctor.name}
        </span>

        <span className="text-sm text-card-foreground">
          Urologist | Consultant|Prostate |King&apos;s College Hospital |
          University College Hospital | The Royal Marsden | South East England
        </span>

        <div className="mt-4 flex gap-2 text-[13px] text-sm font-medium">
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
            <CardTitle className="flex items-center justify-center gap-2 font-medium md:justify-start">
              Quick Call
            </CardTitle>
          </CardHeader>
          <CardContent className="text-nowrap space-y-4">
            <>
              <div className="flex justify-center gap-2 md:justify-start">
                <div className="flex items-center gap-2">
                  <Video className="w-6 text-card-dark" />
                  <span>1:1 Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 text-card-dark" />
                  <span>30 Min</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <span className="text-center text-2xl font-medium md:text-start">
                  ₹ 500
                </span>
              </div>
            </>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default About
