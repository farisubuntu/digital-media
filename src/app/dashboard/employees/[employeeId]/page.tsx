<<<<<<< HEAD
import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/Nav/Nav";
import Link from "next/link";
import EmployeeDetails from "@/ui/dashboard/Employees/EmployeeDetails";
import CustomerDetails from "@/ui/dashboard/Customers/CustomerDetails";
import { getEmployee, getEmployeeCustomers } from "@/lib/utils/employeeUtils";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

async function getEmployeeDetails(id: number) {
  const employeeDataPromise = getEmployee(id);
  const employeeCustomersDataPromise = getEmployeeCustomers(id);

  const [employeeData, employeeCustomersData] = await Promise.all([
    employeeDataPromise,
    employeeCustomersDataPromise,
  ]);
  return { employeeData, employeeCustomersData };
}
=======
import EmployeeDetails from "@/ui/dashboard/EmployeeDetails/EmployeeDetails";
import { getCustomerDetails, getEmployeeDetails } from "@/lib/utils";
import Nav from "@/ui/dashboard/Nav/Nav";
import { Breadcrumb } from "@/lib/definitiions";
import type { Employee } from "@prisma/client";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { notFound } from "next/navigation";

>>>>>>> vercel-prisma
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
<<<<<<< HEAD
    active: false,
  },
];
export default async function EmployeeDetailsPage({ params }: any) {
  const { employeeData, employeeCustomersData } = await getEmployeeDetails(
    Number(params.employeeId)
  );

  console.log("################# employeeData #################");
  console.log(`############## ${Date.now().toString()} ##############`);
  console.log("###################################################");
  console.log("employeeData", employeeData);
  console.log("################# employeeCustomersData #################");
  console.log(`############## ${Date.now().toString()} ##############`);
  console.log("###################################################");
  console.log("employeeCustomersData", employeeCustomersData);

  return (
    <>
      <div className="flex flex-col gap-3">
        <Nav breadcrumbs={breadcrumbs} />
        <Suspense fallback={<Loading />}>
          <EmployeeDetails employee={employeeData} />
        </Suspense>

        <h1 className="text-3xl font-bold underline">
          Customers - {getEmployeeCustomers.length > 0 && getEmployeeCustomers.length}
        </h1>
        <Suspense fallback={<Loading />}>
          {employeeCustomersData !== null &&
          employeeCustomersData.length > 0 ? (
            employeeCustomersData.map((customerRow: any) => (
              <div key={customerRow.CustomerId} className="even:bg-slate-500">
                <CustomerDetails customer={customerRow} />
              </div>
            ))
          ) : (
            <div>No customers found</div>
          )}
        </Suspense>
      </div>
    </>
=======
    active: true,
  },
];

export default async function EmployeePage({
  params,
}: {
  params: { employeeId: string | any };
}) {
  const employeeData: Employee | null = await getEmployeeDetails(
    params.employeeId
  );
const teams=await getEmployeeDetails(employeeData?.ReportsTo);

// console.log("DATA: ", teams);
  if (!employeeData) return notFound();
  // console.log(employeeData);

  return (
    <div className="flex flex-col">
      <Nav breadcrumbs={breadcrumbs} />
      <Suspense fallback={<Loading />}>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl bg-green-900 p-1 italic border rounded-xl my-4 mx-2 text-white">
            {employeeData?.FirstName} {employeeData?.LastName}
          </h1>
        </div>
        <EmployeeDetails employee={employeeData} />
      
      </Suspense>
    </div>
>>>>>>> vercel-prisma
  );
}
