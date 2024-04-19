export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server";

import {db} from "@/lib/db";
import { auth } from "@clerk/nextjs";

export async function GET(req: NextRequest) {
  try {
    const {userId} = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!userId) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const user = await db.user.findUnique({
      where: { id: userId },
      include: { Patient: true },
    });

    if (!user?.Patient) {
      return new NextResponse("Patient not found", { status: 404 });
    }

    return NextResponse.json(user?.Patient);
  } catch (error) {
    console.log("[USER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
