import { prisma } from "@/connect";

import { NextResponse } from "next/server";

export async function GET() {
  const res = await prisma.albums.findMany();

  return NextResponse.json(res, { status: 200 });
}
