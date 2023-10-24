import { UserAvatar } from '@/components/UserAvatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { consultations } from '@/data/consultations'
import { Calendar, Clock, MoreHorizontal } from 'lucide-react'
import React from 'react'

export default function Consultations() {
  return (
    <div className="grow rounded-xl bg-white">
      <div className="flex justify-between p-6">
        <div className="text-base font-semibold">Upcoming Consulations</div>
        <Button variant="ghost" className="m-0 h-fit p-0 hover:bg-white">
          <MoreHorizontal className="text-muted-foreground" />
        </Button>
      </div>
      <Separator orientation="horizontal" />
      <ConsultationList />
    </div>
  )
}

function ConsultationList() {
  return (
    <>
      {consultations.map((consultation) => (
        <div key={consultation.id}>
          <div className="space-y-4 p-4">
            <div className="flex items-center justify-center  gap-10  ">
              <div className="m mx-0  my-auto h-14 w-14 overflow-hidden rounded-full">
                <UserAvatar
                  name={consultation.doctorName}
                  image={consultation.image}
                  className="h-full w-full overflow-hidden transition delay-300 duration-500 ease-in-out group-hover:scale-125"
                />
              </div>
              <div>
                <h4 className="font-medium">{consultation.doctorName}</h4>
                <h5 className="text-sm text-muted-foreground">
                  {consultation.speciality}
                </h5>
              </div>
            </div>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{consultation.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                <span>{consultation.slot}</span>
              </div>
            </div>
            <div className="flex justify-around">
              <Button variant="outline">Cancel</Button>
              <Button variant="default">Reschedule</Button>
            </div>
          </div>
          <Separator />
        </div>
      ))}
    </>
  )
}
