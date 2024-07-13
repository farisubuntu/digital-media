import { StatCardInterface, Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import StatCard from "@/ui/dashboard/StatCard/StatCard";
import Link from "next/link";
import { Suspense } from "react";
import { fetchCardData } from "@/lib/utils/counts";

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
  console.log(cards);
  return (
    <>
      <div className="flex flex-col">
        <Nav breadcrumbs={breadcrumbs} />
        <div className="flex flex-col gap-2 h-screen">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {cards.map((item, index) => (
              <div
                key={index}
                className="flex bg-green-900 text-white border rounded-xl"
              >
                <StatCard item={item} />
              </div>
            ))}
          </div>
          <div className="flex border-2 p-2">right side</div>
        </div>
      </div>
    </>
  );
}
