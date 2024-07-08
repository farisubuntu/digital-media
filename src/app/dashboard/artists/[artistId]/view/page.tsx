import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import { getAllArtists } from "@/lib/utils";
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
    <Nav breadcrumbs={breadcrumbs} />
    <table className="w-full divide-y divide-gray-200 overflow-x-auto">
    <div className="flex flex-col">
      <div className="text-white bg-blue-500 md:w-1/12 ml-2 md:[writing-mode:vertical-lr] text-inherit">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
          >
          Artist Name...
          </th>
        </tr>
      </thead>
      </div>
      {
        artists.map((artist) =>  (
          <div className="flex flex-col bg-white text-green-600">
            <tbody>
              <tr>
                <td>{artist.Name}</td>
                <td>
                  
                </td>
                <td>{artist.ArtistId}</td>
              </tr>
            </tbody>
          </div>
          ))
        
      }
    </div>
  </table>
  </>

  );
}
