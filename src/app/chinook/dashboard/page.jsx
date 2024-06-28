import {
  customersIcon,
  employeesIcon,
  invoicesIcon,
  playlistsIcon,
  albumsIcon,
  artistsIcon,
} from "@/assets/chinhook";

import { getInvoicesTotal, getInvoicesCount } from "@/lib/utils";
import InfoCard from "@/ui/dashboard/InfoCard/InfoCard";

// ########################
// # Cards data
// ########################

const cardsInfo = [
  {
    iconSrc: employeesIcon,
    title: `Teams Members`,
    value: 10,
    link: "/chinook/dashboard/employees",
  },
  {
    iconSrc: invoicesIcon,
    title: `Invoices - ${await getInvoicesCount()}`,
    value: getInvoicesTotal(),
    link: "/chinook/dashboard/invoices",
  },
  {
    iconSrc: customersIcon,
    title: "Customers",
    value: 10,
    link: "/chinook/dashboard/customers",
  },
  {
    iconSrc: playlistsIcon,
    title: "Playlists",
    value: 10,
    link: "/chinook/dashboard/playlists",
  },
  {
    iconSrc: albumsIcon,
    title: "Albums",
    value: 10,
    link: "/chinook/dashboard/albums",
  },
  {
    iconSrc: artistsIcon,
    title: "Artists",
    value: 10,
    link: "/chinook/dashboard/artists",
  },
];

export default function DashboardHomePage() {
  return (
    <>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-8">
        {cardsInfo.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </>
  );
}
