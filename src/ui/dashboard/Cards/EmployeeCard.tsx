import type { Employee } from "@prisma/client";
import { getEmployeeDetails } from "@/lib/utils";

export default async function EmployeeCard({
  employee,
}: {
  employee: Employee;
}) {
  return (
    <div className="rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-200">
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">First Name</dt>
          <dd className="text-white sm:col-span-2">{employee?.FirstName}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Last Name</dt>
          <dd className="text-white sm:col-span-2">{employee?.LastName}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Department Title </dt>
          <dd className="text-white sm:col-span-2">
            {employee.Title || "N/A"}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Email</dt>
          <dd className="text-white sm:col-span-2">
            {employee.Email || "N/A"}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Phone</dt>
          <dd className="text-white sm:col-span-2">
            {employee.Phone || "N/A"}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Country</dt>
          <dd className="text-white sm:col-span-2">
            {employee.Country || "N/A"}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Address</dt>
          <dd className="text-white sm:col-span-2">
            {employee.Address || "N/A"}
          </dd>
        </div>
      </dl>
    </div>
  );
}
