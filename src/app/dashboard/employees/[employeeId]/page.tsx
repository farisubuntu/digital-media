import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/Nav/Nav";
import Link from "next/link";
import EmployeeDetails from "@/ui/dashboard/Employees/EmployeeDetails";
import { getEmployee, getEmployeeCustomers } from "@/lib/utils/employeeUtils";
import CustomerDetails from "@/ui/dashboard/Customers/CustomerDetails";

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
  {
    label: "Employee Details",
    href: "/dashboard/employees/[employeeId]/page",
    active: true,
  },
];
export default async function EmployeeDetailsPage({ params }: any) {
  const employeeId = Number(params.employeeId);
  const employeeData = await getEmployee(employeeId);
  
  const employeeCustomersData = await getEmployeeCustomers(employeeId);

  console.log("employeeCustomersData", employeeCustomersData);




  return (
    <>
      <div className="flex flex-col">
        {/* <Nav breadcrumbs={breadcrumbs} /> */}

        <EmployeeDetails employee={employeeData} />
        {employeeCustomersData !== null && employeeCustomersData.length > 0 ? (
          employeeCustomersData.map((customerRow: any) => (
            <div key={customerRow.CustomerId}>
              <CustomerDetails customer={customerRow} />
            </div>
          ))
        ) : (
          <div>No customers found</div>
        )}
      </div>
    </>
  );
}
