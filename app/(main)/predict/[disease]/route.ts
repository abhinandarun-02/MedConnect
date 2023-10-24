import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { disease: string } }
) {
  try {
    if (!params.disease) {
      return new NextResponse('Disease name is required', { status: 400 })
    }

    const disease = await db.diseases.findMany({
      where: {
        disease: params.disease,
      },
    })

    return NextResponse.json(disease)
  } catch (error) {
    console.log('[Disease_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
