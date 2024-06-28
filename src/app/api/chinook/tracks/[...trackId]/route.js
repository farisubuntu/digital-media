import { prisma } from "@/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const res = await prisma.tracks.findUnique({
    where: {
      TrackId: Number(params.trackId),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
