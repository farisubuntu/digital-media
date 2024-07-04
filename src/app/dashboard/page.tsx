import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import StatCard from "@/ui/dashboard/StatCard/StatCard";
import { StatCardInterface } from "@/lib/definitiions";

import {
  getInvoicesTotal,
  getCustomersCount,
  getEmployeesCount,
} from "@/lib/utils";
import {
  CurrencyPoundIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

let statCardItems: StatCardInterface[];

const fetchData = async () => {
  statCardItems = [
    {
      title: "Total Customers",
      icon: <UserGroupIcon className="size-12" />,
      value: await getCustomersCount(),
    },
    {
      title: "Total Employees",
      icon: <UserPlusIcon className="size-12" />,
      value: await getEmployeesCount(),
    },
    {
      title: "Total Invoices",
      icon: <CurrencyPoundIcon className="size-12" />,
      value: await getInvoicesTotal(),
    },
  ];
};

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
  await fetchData();
  return (
    <>
      <Nav breadcrumbs={breadcrumbs} />
      <div className="px-1">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex flex-col md:flex-row">
            {statCardItems.map((statCardItem, index) => (
              <div key={index} className="w-full">
                <StatCard item={statCardItem}  />
              </div>
            ))}
          </div>
          <div className="flex sm:text-xl">
            charts here
          </div>
        </div>
      </div>
    </>
  );
}
