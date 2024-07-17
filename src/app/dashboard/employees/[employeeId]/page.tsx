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

        <h1 className="text-3xl font-bold underline">Customers</h1>
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
  );
}
