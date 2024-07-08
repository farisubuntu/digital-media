import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import { getAllAlbums, getTracksLength } from "@/lib/utils";
import { notFound } from "next/navigation";

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
  const albums = await getAllAlbums();
  if (!albums) {
    notFound();
  }

  return (
    <>
      <Nav breadcrumbs={breadcrumbs} />
      <table className="w-full divide-y divide-gray-200 overflow-x-auto">
        <div className="flex flex-col">
          <div className="text-white bg-blue-500 md:w-1/12 ml-2 md:[writing-mode:vertical-lr] text-inherit">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-4">
                  ID
                </th>
                <th scope="col" className="px-6 py-4">
                  Title
                </th>
                <th scope="col" className="px-6 py-4">
                  Artist ID
                </th>
                <th scope="col" className="px-6 py-4">
                  Tracks Count
                </th>
              </tr>
            </thead>
          </div>
          <tbody>
            <div className="flex flex-col bg-white text-green-600">
              {albums.map((album) => (
                <tr key={album.AlbumId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {album.AlbumId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{album.Title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {album.ArtistId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getTracksLength(album.AlbumId).toString()}
                  </td>
                </tr>
              ))}
            </div>
          </tbody>
        </div>
      </table>
    </>
  );
}
