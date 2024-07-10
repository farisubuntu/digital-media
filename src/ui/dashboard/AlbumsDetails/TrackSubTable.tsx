import Link from "next/link";
import type { Track } from "@prisma/client";
import { getTracksLength, getAlbumTracks } from "@/lib/utils";

export default async function TrackSubTable({ albumId }: { albumId: number }) {
  const tracks: Track[] | null = await getAlbumTracks(albumId);
  const tracksLength = await getTracksLength(albumId);
  return (
    <>
      <td className="px-6 py-2 w-1/8">{tracksLength}</td>
      <td className="px-6 py-2 w-3/8">
        <Link
          href={`/dashboard/tracks/${albumId}/view-tracks`}
          className="text-white hover:underline"
        >
          View Tracks
        </Link>
      </td>
    </>
  );
}
