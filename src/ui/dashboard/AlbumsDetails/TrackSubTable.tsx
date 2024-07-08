import React from "react";
import { getTracksLength, getAlbumTracks } from "@/lib/utils";

export default async function TrackSubTable({ albumId }: { albumId: number }) {
  const tracks = await getAlbumTracks(albumId);
  const tracksLength = await getTracksLength(albumId);
  return (
    <>
      <td className="px-6 py-2 w-1/8">
        {tracksLength}
      </td>
    </>
  );
}
