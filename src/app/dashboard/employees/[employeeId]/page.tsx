import EmployeeDetails from "@/ui/dashboard/CustomerDetails/CustomerDetails";
import { getCustomerDetails, getEmployeeDetails } from "@/lib/utils";
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
    label: "Employees",
    href: "/dashboard/employees",
    active: true,
  },
];

export default async function EmployeePage({
  params,
}: {
  params: { employeeId: string | number };
}) {
  const employeeData = await getEmployeeDetails(params.employeeId);

  // console.log("DATA: ", data);
  if (!employeeData) return notFound();
  // console.log(employeeData);
  if (employeeData)
    return (
      <div className="flex flex-col">
        <Nav breadcrumbs={breadcrumbs} />
        <Suspense fallback={<Loading />}>
          <div className="flex justify-between items-center">
            
            <h1 className="text-3xl bg-green-900 p-1 italic border rounded-xl my-4 mx-2 text-white">
              {employeeData?.FirstName} {employeeData?.LastName}
            </h1>
          </div>
          <EmployeeDetails customer={employeeData} />
        </Suspense>
      </div>
    );
}
