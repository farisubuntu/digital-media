import { prisma } from "@/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const res = await prisma.playlists.findUnique({
    where: {
      PlaylistId: Number(params.playlistId),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
