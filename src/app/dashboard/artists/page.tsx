import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import { getAllArtists } from "@/lib/utils";
import { notFound } from "next/navigation";
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
    label: "Artists",
    href: "/dashboard/artists",
    active: true,
  },
];

export default async function ArtistsPage() {
  const artists = await getAllArtists();
  if (!artists) {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col">
        <Nav breadcrumbs={breadcrumbs} />
        <Suspense fallback={<Loading />}>
          <div className="table-wrapper">
            <table className="divide-y divide-gray-200 overflow-x-auto">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Artist Name
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Artist ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {artists.map((artist) => (
                  <tr key={artist.ArtistId}>
                    <td className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      {artist.Name}
                    </td>
                    <td className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      {artist.ArtistId}
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
