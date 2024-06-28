import { prisma } from "@/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const res = await prisma.artists.findUnique({
    where: {
      ArtistId: Number(params.artistId),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
