import React from "react";
import { notFound } from "next/navigation";
import { getTracksInAlbum } from "@/lib/utils";
import { tracks } from "@prisma/client";

export default async function ViewTracksPage({
  params,
}: {
  params: { albumId: string };
}) {
  // console.log(params.albumId);
  const tracks: tracks[] = await getTracksInAlbum(params.albumId);
  if (!tracks) {
    notFound();
  }

  return (
    <>
      <div className="flex bg-blue-600 text-white sticky top-0">
        <div className="w-1/6">Name</div>
        <div className="w-4/6">Composer</div>
        <div className="w-1/6">Bytes</div>
      </div>
      <div className="flex flex-col">
        {tracks.map((track) => (
          <div key={track.TrackId} className="flex">
            <div className="w-1/6">{track.Name}</div>
            <div className="w-4/6">{track.Composer}</div>
            <div className="w-1/6">{track.Bytes}</div>
          </div>
        ))}
      </div>
    </>
  );
}
