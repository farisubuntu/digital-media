import { Breadcrumb , StatCardInterface} from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import StatCard from "@/ui/dashboard/StatCard/StatCard";
import {  } from "@/lib/definitiions";
import PlaylistIcon from "@/ui/Icons/playlist-icon";
import {
  getInvoicesTotal,
  getCustomersCount,
  getEmployeesCount,
  getArtistsCount,
  getAlbumsCount,
  getPlaylistsCount,
} from "@/lib/utils";
import {
  CurrencyPoundIcon,
  UserGroupIcon,
  UserPlusIcon,
  MusicalNoteIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";


async function fetchData() {
  const statCardItems: StatCardInterface[] = [
    {
      title: "Total Customers",
      icon: <UserGroupIcon className="size-12" />,
      value: Number(await getCustomersCount()),
    },
    {
      title: "Total Employees",
      icon: <UserPlusIcon className="size-12" />,
      value: Number(await getEmployeesCount()),
    },
    {
      title: "Total Invoices",
      icon: <CurrencyPoundIcon className="size-12" />,
      value: Number(await getInvoicesTotal()).toFixed(2),
    },
    {
      title: "Artists Count",
      icon: <MusicalNoteIcon className="size-12" />,
      value: Number(await getArtistsCount()),
    },
    {
      title: "Albums Count",
      icon: <QueueListIcon className="size-12" />,
      value: Number(await getAlbumsCount()),
    },
    {
      title:"Playlists Count",
      icon: <PlaylistIcon size={48} />,
      value: Number(await getPlaylistsCount()),

    }
  ];

  return statCardItems;
}

const breadcrumbs: Breadcrumb[] = [
  {
    label: "Home",
    href: "/",
    active: false,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    active: true,
  },
];

export default async function DashboardPage() {
  const statCardItems = await fetchData();
  return (
    <>
      <Nav breadcrumbs={breadcrumbs} />
      <div className="px-1">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex flex-col md:flex-row">
            {statCardItems.map((statCardItem, index) => (
              <div key={index} className="w-full">
                <StatCard item={statCardItem} />
              </div>
            ))}
          </div>
          <div className="flex sm:text-xl">charts here</div>
        </div>
      </div>
    </>
  );
}
