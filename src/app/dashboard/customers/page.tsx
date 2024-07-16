

import { Breadcrumb, NavigationMenu } from "@/lib/definitiions";
import Nav from "@/ui/Nav/Nav";
import { getCustomers } from "@/lib/utils/getTables";
import Customers from "@/ui/dashboard/Customers/Customers";

const breadcrumbs: Breadcrumb[] = [
  {
    label: "Home",
    href: "/",
    active: false,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    active: false,
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    active: true,
  },
];

export const metadata = {
  title: "Customers",
};

export default async function CustomersPage() {
  const result = await getCustomers();
  const customersData = result;
  const row = customersData[0];
  console.log("row", row[12]);
  return (
    <>
      <div className="flex flex-col">
        <Nav breadcrumbs={breadcrumbs} />
        <Customers customers={customersData} />
      </div>
    </>
  );
}
