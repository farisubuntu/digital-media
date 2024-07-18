import type { Customer } from "@prisma/client";


export default function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-200">
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white-900">First Name</dt>
          <dd className="text-white-700 sm:col-span-2">{customer.FirstName}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Last Name</dt>
          <dd className="text-white sm:col-span-2">{customer.LastName}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Email</dt>
          <dd className="text-white sm:col-span-2">{customer.Email}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Phone</dt>
          <dd className="text-white sm:col-span-2">{customer?.Phone}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Country</dt>
          <dd className="text-white sm:col-span-2">{customer?.Country}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Company</dt>
          <dd className="text-white sm:col-span-2">{customer?.Company}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Address</dt>
          <dd className="text-white sm:col-span-2">{customer?.Address}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">City</dt>
          <dd className="text-white sm:col-span-2">{customer?.City}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">State</dt>
          <dd className="text-white sm:col-span-2">{customer?.State}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-blue-500 sm:grid-cols-3 sm:gap-4">
          <dt className="font-bold text-white">Fax</dt>
          <dd className="text-white sm:col-span-2">{customer?.Fax}</dd>
        </div>
      </dl>
    </div>
  );
}
