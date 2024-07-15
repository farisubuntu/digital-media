
import Image from "next/image";

export default async function EmployeeDetails({ employee }: { employee: any }) {
  console.log("EMPLOYEE: ", employee);
  

  return (
    <>
      <>
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-1/3">
              <Image
                src={employee?.ImageURL}
                width={100}
                height={100}
                alt={employee?.FirstName}
              />
            </div>
            <div className="w-2/3">
              <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-200">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Name</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {employee.FirstName} {employee?.LastName}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">
                      Department/Title
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {employee?.Title}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Hire Date</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {employee.HireDate}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Address</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {employee?.Address}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Country</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {employee?.Country}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Phone</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {employee?.Phone}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Email</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {employee?.Email}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">ReportsTo</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {employee?.ReportsTo}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
      
        </div>
      </>
    </>
  );
}
