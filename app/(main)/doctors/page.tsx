import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { BadgeCheck, CircleDollarSign, Star, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const revalidate = 0

export default async function DoctorsPage() {
  const doctors = await db.doctor.findMany({
    include: { user: true },
  })
  return (
    <div className="m-8">
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex w-full gap-6 rounded-2xl bg-white p-4"
          >
            <div className="space-y-2">
              {doctor.user?.imageUrl && (
                <Image
                  src={doctor.user.imageUrl}
                  width={600}
                  height={600}
                  className="h-[150px] w-[150px]"
                  alt="Doctor Image"
                />
              )}
              <Button variant="outline">
                <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
              </Button>
            </div>

            <div className="max-w-[600px]">
              <h3 className="text-2xl font-semibold">{doctor.user.name}</h3>
              <div className="flex flex-wrap items-center gap-2 font-extralight text-yellow-400">
                <Star className="h-4 w-4 fill-yellow-400" />
                <p>{doctor.rating}</p>
                <p className="align-middle font-bold">.</p>
                <p>{doctor.noOfReviews}+ Reviews</p>
              </div>
              <div>{doctor.bio.substring(0, 300) + '...'}</div>
            </div>

            <div className="mx-8 flex w-full grow flex-col justify-center gap-1">
              <div className="flex items-center gap-1">
                <ThumbsUp />
                <h3 className="whitespace-nowrap">
                  98% ({doctor.noOfReviews} Votes)
                </h3>
              </div>
              <div className="flex gap-1">
                <BadgeCheck />
                <h3 className="">Medical registration verified</h3>
              </div>
              <div className="flex gap-1">
                <CircleDollarSign />
                <h3>₹499</h3>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-2">
                  <Button variant="outline">
                    <Link href="#">Online Consulation</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-[#235fe6] text-white hover:bg-[#4278f6]"
                  >
                    <Link href="#">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
