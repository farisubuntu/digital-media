import CustomerDetails from "@/ui/dashboard/CustomerDetails/CustomerDetails";
import { getCustomerDetails } from "@/lib/utils";
import Nav from "@/ui/dashboard/Nav/Nav";
import { Breadcrumb } from "@/lib/definitiions";
import { customers } from "@prisma/client";
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
  const data = await fetch(
    `http://localhost:3000/api/customers/${params.customerId}`
  );

  console.log("DATA: ", data);
  if (!data) return notFound();
  console.log(data);
  if (data)
    return (
      <div className="flex flex-col">
        <Suspense fallback={<Loading />}>
          <div className="flex justify-between items-center">
            <Nav breadcrumbs={breadcrumbs} />
            <h1 className="text-3xl bg-green-900 p-1 italic border rounded-xl my-4 mx-2 text-white">
              {data?.FirstName} {data?.LastName}
            </h1>
          </div>
          <CustomerDetails customer={data} />
        </Suspense>
      </div>
    );
}
