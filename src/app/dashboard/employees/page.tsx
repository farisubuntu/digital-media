import { Breadcrumb, NavigationMenu } from "@/lib/definitiions";
import Nav from "@/ui/Nav/Nav";
import { getEmployees } from "@/lib/utils/getTables";
import Employees from "@/ui/dashboard/Employees/Employees";

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
    href: "/dashboard/customers",
    active: true,
  },
];

export const metadata = {
  title: "Customers",
};

export default async function EmployeesPage() {
  const employeesData = await getEmployees();

  return (
    <>
      <div className="flex flex-col">
        <Nav breadcrumbs={breadcrumbs} />
        <Employees employees={employeesData} />
      </div>
    </>
  );
}
