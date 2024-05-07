import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { UserAvatar } from './UserAvatar'
import { Doctor } from '@prisma/client'

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Link
      key={doctor.id}
      href={`doctors/${doctor.username}`}
      className="group flex h-32 w-full items-center justify-between gap-6 rounded-md  border border-border bg-slate-50  p-4 shadow-sm md:max-w-[400px]"
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
  )
}

export default DoctorCard
