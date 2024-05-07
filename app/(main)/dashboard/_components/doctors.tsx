import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

import { Suspense } from 'react'
import { db } from '@/lib/db'
import DoctorCard from '@/components/doctor-card'

export const revalidate = 0

export default function Doctors() {
  return (
    <div
      className={cn(
        'w-full grow rounded-lg border border-border bg-secondary p-4 drop-shadow-sm 2xl:max-w-[800px]'
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Top Doctors</h1>
        <Link href="dashboard/doctors">
          <Button
            variant={'link'}
            className="text-base font-medium text-blue-500"
          >
            View All
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
      <Suspense fallback="loading...">
        <DoctorList />
      </Suspense>
    </div>
  )
}

async function DoctorList() {
  const doctors = await db.doctor.findMany({
    take: 8,
  })

  return (
    <div className="mt-4 grid grid-cols-1  justify-items-center gap-4 lg:grid-cols-2 xl:basis-[55%]">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  )
}

const UserAvatar = ({
  image,
  name,
  className,
}: {
  image: string
  name: string
  className?: string
}) => {
  return (
    <Avatar
      className={cn(
        'bg-blackA3 inline-flex h-[45px] w-[45px] cursor-pointer select-none items-center justify-center overflow-hidden rounded-full align-middle',
        className
      )}
    >
      <AvatarImage
        className="h-full w-full rounded-[inherit] object-cover"
        src={image}
        alt={name}
      />
      <AvatarFallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        JD
      </AvatarFallback>
    </Avatar>
  )
}
