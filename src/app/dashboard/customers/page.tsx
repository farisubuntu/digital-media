import React from "react";
import { Breadcrumb, NavigationMenu } from "@/lib/definitiions";
import Nav from "@/ui/Nav/Nav";
import Customers from "@/ui/dashboard/Customers/Customers";
import { Customer } from "@/lib/definitiions";
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
  const result = await fetch("http://localhost:3000/api/dashboard/customers");

  const data = await result.json();

  // const customersData = data;
  // console.log(Array.from(data.rows));

  // console.log(customersData);
  return (
    <>
      <div className="flex flex-col">
        <Nav breadcrumbs={breadcrumbs} />
        <Customers customers={data.rows} />
      </div>
    </>
  );
}
