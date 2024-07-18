import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import { getAllArtists, getAlbums } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { Artist, Album } from "@prisma/client";

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
    label: "Artists",
    href: "/dashboard/artists",
    active: true,
  },
];
interface ArtistsAndAlbums {
  artist: Artist;
  albums: Album[];
}
async function fetchData() {
  const artistsAndAlbums: ArtistsAndAlbums[] = [];
  const artists = await getAllArtists();
  for (const artist of artists) {
    const albums = await getAlbums(artist.ArtistId);
    artistsAndAlbums.push({ artist, albums });
  }

  return artistsAndAlbums;
}

function Albums({ albums }: { albums: Album[] }) {
  return (
    <div className="flex flex-col gap-2">
      {albums.length > 0 ? (
        albums.map((album) => (
          <div key={album.AlbumId} className="underline italic">
            <Link href={`/dashboard/albums/${album.AlbumId}`}>
              {album.Title}
            </Link>
          </div>
        ))
      ) : (
        <div className="text-gray-400 italic">
          No albums found
        </div>
      )}
    </div>
  );
}
export default async function ArtistsPage() {
  const artistsAndAlbums = await fetchData();

  return (
    <div className="flex flex-col w-full mr-2">
      <Nav breadcrumbs={breadcrumbs} />
      <Suspense fallback={<Loading />}>
        <div className="table-wrapper">
          <table className="w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th
                  scope="col"
                  className="px-2 py-3 text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left"
                >
                  Albums
                </th>
              </tr>
            </thead>
            <tbody className="bg-white  divide-y-2 divide-gray-200">
              {artistsAndAlbums.map((artistAndAlbums: ArtistsAndAlbums) => (
                <tr key={artistAndAlbums.artist.ArtistId}>
                  <td className="px-2 py-4">
                    <Link
                      href={`/dashboard/artists/${artistAndAlbums.artist.ArtistId}`}
                    >
                      {artistAndAlbums.artist.Name}
                    </Link>
                  </td>
                  <td className="px-2 py-4">
                    <Albums albums={artistAndAlbums.albums} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Suspense>
    </div>
  );
}
