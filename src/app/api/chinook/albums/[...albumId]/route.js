import { prisma } from "@/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const res = await prisma.albums.findUnique({
    where: {
      AlbumId: Number(params.albumId),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
