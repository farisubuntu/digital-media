import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import { getAllEmployees } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Employee } from "@prisma/client";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

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

export default async function EmployeePage() {
  const allEmployees: Employee[] | null = await getAllEmployees();
  if (!allEmployees) return notFound();

  return (
    <div className="flex flex-col">
      <Nav breadcrumbs={breadcrumbs} />
      <Suspense fallback={<Loading />}>
        <div className="table-wrapper">
          <table className="w-full divide-y divide-gray-200 overflow-x-auto">
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
                  Phone
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
                  Department / Job Title
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Country
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allEmployees.map((employee) => (
                <tr key={employee.EmployeeId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={employee.ImageURL}
                          alt="avatar"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {employee.FirstName} {employee.LastName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee?.Email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {employee.Phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {employee?.Country}
                    </span>
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
      </Suspense>
    </div>
  );
}
