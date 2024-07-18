import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import { getAllInvoices, prismaClient } from "@/lib/utils";
import Link from "next/link";
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
    label: "Invoices",
    href: "/dashboard/invoices",
    active: true,
  },
];

async function getCustomerFullName(id: number) {
  const customer = await prismaClient.customer.findUnique({
    where: {
      CustomerId: id,
    },
  });
  const fullName = `${customer?.FirstName} ${customer?.LastName}`;

  return fullName;
}

export default async function InvoicesPage() {
  const invoices = await getAllInvoices();

  return (
    <div className="flex flex-col w-full mr-2">
      <Nav breadcrumbs={breadcrumbs} />
      <Suspense fallback={<Loading />}>
        <div className="table-wrapper">
          <table className="w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th
                  scope="col"
                  className="px-2 py-3 text-left uppercase tracking-wider"
                >
                  No./ID.
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left uppercase tracking-wider"
                >
                  Billing Countery
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left uppercase tracking-wider"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left uppercase tracking-wider"
                >
                  Customer
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {invoices.map((invoice) => (
                <tr key={invoice.InvoiceId}>
                  <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                    {invoice.InvoiceId}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                    {invoice.BillingCountry}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                    {invoice.Total.toString()}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
                    <Link
                      href={`/dashboard/customers/${invoice.CustomerId}`}
                      className="text-white bg-green-600 p-2 rounded-xl hover:bg-indigo-900"
                    >
                      {getCustomerFullName(invoice.CustomerId)} ...
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    <Link
                      href={`/dashboard/invoices/${invoice.InvoiceId}`}
                      className="text-white bg-green-600 p-2 rounded-xl hover:bg-indigo-900"
                    >
                      Invoice Details
                    </Link>
                    <Link
                      href="#"
                      className="ml-2 text-white bg-red-600 p-2 rounded-xl hover:text-white-900 hover:bg-blue-900"
                    >
                      Delete Invoice
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
