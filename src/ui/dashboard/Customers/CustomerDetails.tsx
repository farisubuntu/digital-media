import Image from "next/image";

export default function CustomerDetails({ customer }: { customer: any }) {
  console.log("CUSTOMER: ", customer);
  return (
    <>
      <div className="flex">
        <div className="w-1/3">
          <Image
            src={customer.ImageURL}
            width={100}
            height={100}
            alt={customer.FirstName}
          />
        </div>
        <div className="w-2/3">
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-200">
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Name</dt>
                <dd className="sm:col-span-2">
                  {customer.FirstName} {customer.LastName}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Company</dt>
                <dd className=" sm:col-span-2">{customer?.Company === null ? "N/A" : customer?.Company}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Address</dt>
                <dd className=" sm:col-span-2">{customer?.Address}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:text-black even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Phone</dt>
                <dd className=" sm:col-span-2">{customer?.Phone}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 text-white even:bg-gray-50 even:text-black sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Email</dt>
                <dd className=" sm:col-span-2">{customer?.Email}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
