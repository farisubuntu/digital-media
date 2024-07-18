<<<<<<< HEAD
import { StatCardInterface, Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/Nav/Nav";
import StatCard from "@/ui/dashboard/StatCard/StatCard";
import Link from "next/link";
import { Suspense } from "react";
import { fetchCardData } from "@/lib/utils/counts";
import Loading from "@/app/dashboard/loading";
=======
import { Breadcrumb, StatCardInterface } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import StatCard from "@/ui/dashboard/StatCard/StatCard";
import {} from "@/lib/definitiions";
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
      title: "Playlists Count",
      icon: <PlaylistIcon size={48} />,
      value: Number(await getPlaylistsCount()),
    },
  ];

  return statCardItems;
}
>>>>>>> vercel-prisma

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

async function getData(): Promise<StatCardInterface[]> {
  const data = await fetchCardData();
  const cards: StatCardInterface[] = [
    {
      title: "Revenue",
      value: data.invoiceTotal,
    },
    {
      title: "Invoices",
      value: data.invoiceCount,
    },
    {
      title: "Customers",
      value: data.customerCount,
    },
    {
      title: "Employees",
      value: data.employeeCount,
    },
    {
      title: "Albums",
      value: data.albumCount,
    },
    {
      title: "Tracks",
      value: data.trackCount,
    },
    {
      title: "Genres",
      value: data.genreCount,
    },

    {
      title: "Playlists",
      value: data.playlistCount,
    },
  ];

  return cards;
}
export default async function DashboardPage() {
  const cards: StatCardInterface[] = await getData();
  // console.log(cards);
  return (
    <>
<<<<<<< HEAD


          <Suspense fallback={<Loading />}>
            <div className="flex flex-col gap-2 justify-around">
              <Nav breadcrumbs={breadcrumbs} />
              <div className="flex flex-col gap-2">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                  {cards.map((item, index) => (
                    <div
                      key={index}
                      className="flex bg-green-900 text-white border rounded-xl"
                    >
                      <div className="w-full">
                        <StatCard item={item} />
                      </div>
                    </div>
                  ))}
                </div>
=======
      <div className="flex flex-col gap-2">
        <Nav breadcrumbs={breadcrumbs} />
        <div className="px-1">
          <div className="flex flex-wrap gap-2">
            {statCardItems.map((statCardItem, index) => (
              <div key={index} className="">
                <StatCard item={statCardItem} />
>>>>>>> vercel-prisma
              </div>
            </div>
          </Suspense>
  
  
    </>
  );
}
