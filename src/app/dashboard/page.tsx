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



const statCardItems: StatCardInterface[] = [
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

export default function DashboardPage() {
  return (
    <div className="p-2 my-3 md:my-1">
      <Nav breadcrumbs={breadcrumbs} />
      <div className="flex space-x-4">
        {statCardItems.map((statCardItem, index) => (
          <div key={index}>
            <StatCard item={statCardItem} />
          </div>
        ))}
        <div className="flex w-full justify-center items-center">
          charts here
        </div>
      </div>
    </div>
  );
}
