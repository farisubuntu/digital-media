import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import { getAllCustomers } from "@/lib/utils";

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

export default async function CustomersPage() {
  const customers = await getAllCustomers();
  console.log(customers);

  return (
    <div className="flex flex-col">
      <Nav breadcrumbs={breadcrumbs} />
      <div>{JSON.stringify(customers, null, 2)}</div>
    </div>
  );
}
