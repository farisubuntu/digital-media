import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
import { getAllEmployees } from "@/lib/utils";

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

export default async function EmployeesPage() {
  const employees = await getAllEmployees();
  console.log(employees[0]);
  return (
    <div className="flex flex-col">
      <Nav breadcrumbs={breadcrumbs} />
      <div>
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Country
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {employees.map((employee) => (
              <tr key={employee.EmployeeId}>
                <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                  {employee.FirstName} {employee.LastName}
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                  {employee.Title}
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                  {employee.Email}
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                  {employee.State}
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                  {employee.Phone}
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                  {employee.Country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    href={`/dashboard/employees/${employee.EmployeeId}`}
                    className="text-white bg-green-600 p-2 rounded-xl hover:bg-indigo-900"
                  >
                    Details
                  </Link>
                  <Link
                    href="#"
                    className="ml-2 text-white bg-red-600 p-2 rounded-xl hover:text-white-900 hover:bg-blue-900"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
