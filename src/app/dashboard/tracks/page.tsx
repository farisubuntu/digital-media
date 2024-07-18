import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import { getAllTracks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { Track } from "@prisma/client";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

const breadcrumbs: Breadcrumb[] = [
  {
    label: "Home",
    href: "/",
    active: false,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    active: false,
  },
  {
    label: "Tracks",
    href: "/dashboard/tracks",
    active: true,
  },
];

export default async function TracksPage() {
  const tracksData: Track[] = await getAllTracks();
  // console.log(tracksData);

  return (
    <>
      <div className="flex flex-col w-full mr-2">
        <Nav breadcrumbs={breadcrumbs} />
        <Suspense fallback={<Loading />}>
          <div className="table-wrapper">
            <table className="w-full divide-y divide-gray-200 overflow-x-auto">
              <thead className="bg-blue-600 text-white sticky top-0">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left uppercase tracking-wider"
                  >
                    Composer
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left uppercase tracking-wider"
                  >
                    Album
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left uppercase tracking-wider"
                  >
                    Media Type
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left uppercase tracking-wider"
                  >
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y-2 divide-gray-200">
                {tracksData.map((track) => (
                  <tr key={track.TrackId}>
                    <td className="px-2 py-3 text-left">{track?.Name}</td>
                    <td className="px-2 py-3 text-left">{track?.Composer}</td>
                    <td className="px-2 py-3 text-left">{track?.AlbumId}</td>
                    <td className="px-2 py-3 text-left">
                      {track?.MediaTypeId}
                    </td>
                    <td className="px-2 py-3 text-left">{track?.GenreId}</td>
                    <td className="px-2 py-3 text-left">
                      {track?.Milliseconds}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Suspense>
      </div>
    </>
  );
}
