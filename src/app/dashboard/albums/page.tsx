import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import { getAllAlbums, getArtistName } from "@/lib/utils";
import { notFound } from "next/navigation";
import TrackSubTable from "@/ui/dashboard/AlbumsDetails/TrackSubTable";

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
    label: "Albums",
    href: "/dashboard/artists",
    active: true,
  },
];

export default async function Album({
  params,
}: {
  params: { albumId: string };
}) {
  const data = await getAllAlbums();
  if (!data) {
    notFound();
  }

  return (
    <>
      <Nav breadcrumbs={breadcrumbs} />
      <div className="flex flex-col">
        <table className="divide-y divide-gray-200 overflow-x-auto text-center">
          <thead className="bg-blue-600 text-white sticky top-0">
            <tr className="text-left">
              <th scope="col" className="px-6 py-2 w-1/8">
                ID
              </th>
              <th scope="col" className="px-6 py-2 w-3/8">
                Title
              </th>
              <th scope="col" className="px-6 py-2 w-3/8">
                Artist
              </th>
              <th scope="col" className="px-6 py-2 w-1/8">
                Tracks Count
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((album) => (
              <tr key={album.AlbumId} className="text-left">
                <td scope="col" className="px-6 py-4 w-1/8">
                  {album.AlbumId}
                </td>
                <td scope="col" className="px-6 py-4 w-3/8">
                  {album.Title}
                </td>
                <td scope="col" className="px-6 py-4 w-3/8">
                  {album.artists.Name}
                </td>

                {<TrackSubTable albumId={album.AlbumId} />}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
