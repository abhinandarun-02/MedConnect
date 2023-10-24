import { db } from '@/lib/db'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const DoctorPage = async ({ params }: { params: { doctorId: string } }) => {
  const doctor = await db.doctor.findUnique({
    where: { userId: params.doctorId },
    include: { user: true },
  })

  if (!doctor) redirect('/doctors')

  return (
    <div>
      <div className="flex w-full">
        <div className="m-4 flex h-[calc(100vh-32px)] w-full  flex-col items-center rounded-2xl bg-white py-2">
          {doctor.user?.imageUrl && (
            <Image
              src={doctor.user.imageUrl}
              width={1000}
              height={1000}
              alt="Doctor's Photo"
              className="mt-[5vh] h-[200px] w-[200px] rounded-[15%]"
            />
          )}

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="my-3 text-2xl font-bold">{doctor.user.name}</h2>
            <div className="flex h-7 w-32 items-center justify-center rounded-3xl bg-[#feeec5] font-semibold text-[#f1b523]">
              <Star className="fill-[#f1b523]" />
              <div className="p-2 text-center text-2xl ">{doctor.rating}</div>
            </div>
            <h3 className="px-12 py-[3vh] text-start text-[#c1c2c4]">
              {doctor.bio}
            </h3>
            <h3>&#128077; 98% ({doctor.noOfReviews} Votes)</h3>
            <h3>Medical registration verified</h3>
            <a href="#">
              <u>Share Your Feedback</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorPage
