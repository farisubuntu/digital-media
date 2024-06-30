import {
  customersIcon,
  employeesIcon,
  invoicesIcon,
  playlistsIcon,
  albumsIcon,
  artistsIcon,
} from "@/assets/chinhook";

import {
  getInvoicesTotal,
  getInvoicesCount,
  getCustomersCount,
  getEmployeesCount,
  getPlaylistsCount,
  getAlbumsCount,
  getArtistsCount,
} from "@/lib/utils";
import InfoCard from "@/ui/dashboard/InfoCard/InfoCard";

// ########################
// # Cards data
// ########################

const cardsInfo = [
  {
    iconSrc: employeesIcon,
    title: `Teams Members`,
    value: await getEmployeesCount(),
    link: "/chinook/dashboard/employees",
  },
  {
    iconSrc: invoicesIcon,
    title: `Invoices - ${await getInvoicesCount()}`,
    value: await getInvoicesTotal(),
    link: "/chinook/dashboard/invoices",
  },
  {
    iconSrc: customersIcon,
    title: "Customers",
    value: await getCustomersCount(),
    link: "/chinook/dashboard/customers",
  },
  {
    iconSrc: playlistsIcon,
    title: "Playlists",
    value: await getPlaylistsCount(),
    link: "/chinook/dashboard/playlists",
  },
  {
    iconSrc: albumsIcon,
    title: "Albums",
    value: await getAlbumsCount(),
    link: "/chinook/dashboard/albums",
  },
  {
    iconSrc: artistsIcon,
    title: "Artists",
    value: await getArtistsCount(),
    link: "/chinook/dashboard/artists",
  },
];

export default async function DashboardHomePage() {
  
  return (
    <>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-8">
        {cardsInfo.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
      <div className="text-lg my-3">
        <hr />
      </div>
    </>
  );
}
