import { StatCardInterface, Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import StatCard from "@/ui/dashboard/StatCard/StatCard";

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
  return [
    {
      title: "Total Invoices",
      value: 0,
    },
    {
      title: "Total Customers",
      value: 0,
    },
    {
      title: "Total Employees",
      value: 0,
    },
    {
      title: "Total Albums",
      value: 0,
    },
    {
      title: "Total Tracks",
      value: 0,
    },
    {
      title: "Total Genres",
      value: 0,
    },

    {
      title: "Total Playlists",
      value: 0,
    },
  ];
}
export default async function DashboardPage() {
  const data = await getData();

  return (
    <>
      <div className="flex flex-col">
        <Nav breadcrumbs={breadcrumbs} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex bg-green-900  text-white border rounded-xl"
            >
              <StatCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
