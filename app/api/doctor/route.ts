export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'

export async function GET(req: NextRequest) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 403 })
    }

    let speciality = req.nextUrl.searchParams.get('speciality')

    const language = req.nextUrl.searchParams.get('language')
    const appointment = req.nextUrl.searchParams.get('appointment')
    const gender = req.nextUrl.searchParams.get('gender')

    const doctors = await db.doctor.findMany({
      where: {
        speciality: speciality ? { equals: speciality } : undefined,
        gender: gender ? { equals: gender } : undefined,
      },
    })

    return NextResponse.json(doctors)
  } catch (error) {
    console.log('[DOCTOR_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
