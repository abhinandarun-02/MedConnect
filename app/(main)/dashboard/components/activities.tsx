import { UserAvatar } from '@/components/UserAvatar'
import { Button } from '@/components/ui/button'
import { activites } from '@/data/activities'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import React from 'react'

export default function RecentActivities() {
  return (
    <div className="rounded-2xl ">
      <div className="flex items-center justify-between ">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <Button
          variant={'link'}
          className="text-base font-medium text-blue-500"
        >
          View All
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex flex-col">
        {activites.map((activity) => (
          <div
            key={activity.id}
            className="flex w-full items-center gap-4 rounded-xl bg-white p-2"
          >
            <div className="m mx-0  my-auto aspect-square h-14 w-14 rounded-full">
              <UserAvatar
                name={activity.doctorName}
                image={activity.image}
                className="h-full w-full transition delay-300 duration-500 ease-in-out group-hover:scale-125"
              />
            </div>
            <div>
              <h3 className="whitespace-nowrap text-lg ">
                {activity.doctorName}
              </h3>
              <h4 className="text-muted-foreground">{activity.date}</h4>
            </div>
            <div>
              <p className="max-w-3/4 text-zinc-700">{activity.content}</p>
            </div>
            <Button variant="ghost" className="m-0 h-fit p-0 hover:bg-white">
              <MoreHorizontal className="text-muted-foreground" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
