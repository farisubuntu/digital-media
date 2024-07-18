import CustomerDetails from "@/ui/dashboard/CustomerDetails/CustomerDetails";
import { getCustomerDetails, getAllCustomers } from "@/lib/utils";
import Nav from "@/ui/dashboard/Nav/Nav";
import { Breadcrumb } from "@/lib/definitiions";
import type { Customer } from "@prisma/client";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { notFound } from "next/navigation";

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
  params: { customerId: string | any };
}) {
  const customerData: Customer | null = await getCustomerDetails(
    params.customerId
  );

  // console.log("DATA: ", data);
  if (!customerData) return notFound();
  console.log(customerData);
  if (customerData)
    return (
      <div className="flex flex-col">
        <Nav breadcrumbs={breadcrumbs} />
        <Suspense fallback={<Loading />}>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl bg-green-900 p-1 italic border rounded-xl my-4 mx-2 text-white">
              {customerData?.FirstName} {customerData?.LastName}
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <CustomerDetails customerInfo={customerData} />
          </div>
        </Suspense>
      </div>
    );
}
