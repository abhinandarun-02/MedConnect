import { UserAvatar } from '@/components/UserAvatar'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'

import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { doctors } from '@/data/doctors'
import { Suspense } from 'react'

export default function Doctors() {
  return (
    <div
      className={cn(
        'w-full grow rounded-2xl bg-card p-6 pb-12 drop-shadow-sm 2xl:max-w-[800px]'
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Top Doctors</h1>
        <Button
          variant={'link'}
          className="text-base font-medium text-blue-500"
        >
          View All
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      <Suspense fallback="loading...">
        <DoctorList />
      </Suspense>
    </div>
  )
}

function DoctorList() {
  return (
    <div className="mt-4 grid w-full grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
      {doctors.slice(0, 4).map((doctor) => (
        <Link
          key={doctor.id}
          href=""
          className="group flex h-32 w-full items-center justify-between gap-6 rounded-md bg-muted p-4 shadow-sm hover:bg-muted md:max-w-[400px]"
        >
          <div className="m mx-0  my-auto h-[72px] w-[72px] overflow-hidden rounded-full">
            <UserAvatar
              name={doctor.name}
              image={doctor.image}
              className="h-full w-full overflow-hidden transition delay-300 duration-500 ease-in-out group-hover:scale-125"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium">{doctor.name}</h2>
            <h3 className="text-sm font-normal text-zinc-500">
              {doctor.speciality}
            </h3>
            <div className="flex items-center gap-2 font-extralight text-zinc-600">
              <Star className="h-4 w-4 hover:fill-yellow-400" />
              <p>5.0</p>
              <p className="align-middle font-bold">.</p>
              <p>{doctor.noOfReviews}+ Reviews</p>
            </div>
          </div>
          <ArrowRight className="mb-2 h-5 w-5 self-end group-hover:scale-125 group-hover:text-blue-500" />
        </Link>
      ))}
    </div>
  )
}
