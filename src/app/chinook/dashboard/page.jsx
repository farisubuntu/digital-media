import {
  customersIcon,
  employeesIcon,
  invoicesIcon,
  playlistsIcon,
} from "@/assets/chinhook";

import InfoCard from "@/ui/dashboard/InfoCard/InfoCard";

const cardsInfo = [
  {
    iconSrc: employeesIcon,
    title: "Employees",
    value: 10,
    link: "/chinook/dashboard/employees",
  },
  {
    iconSrc: invoicesIcon,
    title: "Invoices",
    value: 10,
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
