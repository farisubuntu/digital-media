import CustomerDetails from "@/ui/dashboard/CustomerDetails/CustomerDetails";
import { getCustomerDetails } from "@/lib/utils";
import Nav from "@/ui/dashboard/Nav/Nav";
import { Breadcrumb } from "@/lib/definitiions";
import { customers } from "@prisma/client";

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

export default async function CustomerPage({
  params,
}: {
  params: { customerId: string };
}) {
  const data = await getCustomerDetails(params.customerId);

  if (breadcrumbs.length < 4) {
    breadcrumbs.push({
      label: `${data?.FirstName} ${data?.LastName}`,
      href: "/dashboard/customers/" + params.customerId?.toString(),
      active: false,
    });
  }
  return (
    <div className="flex flex-col">
      <Nav breadcrumbs={breadcrumbs} />
      <CustomerDetails customer={data} />
    </div>
  );
}
