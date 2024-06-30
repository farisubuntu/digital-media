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
import StatCard from "@/ui/dashboard/StatCard/StatCard";

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
    <div className="w-full h-full">
      <div className="bg-gray-900 rounded-lg mx-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {cardsInfo.map((card, index) => (
                <StatCard key={index} {...card} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
