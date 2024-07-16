import Image from "next/image";

export default async function EmployeeDetails({ employee }: { employee: any }) {
  const employeeData = employee;

  return (
    <>
      <div className="flex space-x-4 bg-slate-800">
        <div className="w-1/4">
          <Image
            src={employeeData.ImageURL}
            className="rounded-full"
            width={400}
            height={500}
            alt={employeeData?.FirstName}
          />
        </div>
        <div className="w-3/4">
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-300">
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-200 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium ">Name</dt>
                <dd className=" sm:col-span-2">
                  {employeeData.FirstName} {employeeData?.LastName}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Department/Title</dt>
                <dd className=" sm:col-span-2">{employeeData?.Title}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Hire Date</dt>
                <dd className=" sm:col-span-2">{employeeData.HireDate}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Address</dt>
                <dd className=" sm:col-span-2">{employeeData?.Address}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Country</dt>
                <dd className=" sm:col-span-2">{employeeData?.Country}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Phone</dt>
                <dd className=" sm:col-span-2">{employeeData?.Phone}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Email</dt>
                <dd className=" sm:col-span-2">{employeeData?.Email}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">ReportsTo</dt>
                <dd className=" sm:col-span-2">{employeeData?.ReportsTo}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
