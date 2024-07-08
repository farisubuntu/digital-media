import { invoices } from "@prisma/client";
import { getInvoiceItems } from "@/lib/utils";
import InvoiceCardItem from "./InvoiceItemRow";

export default async function InvoiceCard({ Invoice }: { Invoice: invoices }) {
  const invoiceItems = await getInvoiceItems(Invoice.InvoiceId);
  return (
    <>
      <div className="bg-slate-700 hover:cursor-pointer hover:bg-blue-500 my-3">
        <details className="mb-2 w-full">
          <summary className="p-4 rounded-lg cursor-pointer shadow-md mb-4 flex flex-col border border-3-black hover:text-brown-500">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">
                Invoice # {Invoice.InvoiceId}
              </h1>
              <p className="text-lg">
                Date: {Invoice.InvoiceDate.toISOString().slice(0, 10)}
              </p>
              <p className="text-lg">Total: ${Invoice.Total.toString()}</p>
            </div>
          </summary>
          <div className="flex flex-col">
            <table className="w-full divide-y divide-gray-400 overflow-x-auto">
              <thead className="bg-blue-500 text-xl">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
                  >
                    Invoice ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
                  >
                    Track ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Unit Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Sub Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-blue-800 divide-y divide-gray-400">
                {invoiceItems.map((item) => (
                  <InvoiceCardItem key={item.InvoiceId} item={item} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center bg-white text-blue-800 divide-y divide-gray-400 p-3">
            <div className="flex justify-between w-full">
              <p className="text-xl m-2">
                <span className="text-green-800 px-2">Billing Address:</span>{" "}
                {Invoice.BillingAddress}
              </p>
              <p className="text-xl m-2">
                <span className="text-green-800 px-2">Billing City:</span>{" "}
                {Invoice.BillingCity}
              </p>

              <p className="text-xl m-2">
                <span className="text-green-800 px-2">Billing State:</span>{" "}
                {Invoice.BillingState}
              </p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-xl m-2">
                <span className="text-green-800 px-2">Billing Country:</span>{" "}
                {Invoice.BillingCountry}
              </p>

              <p className="text-xl m-2">
                <span className="text-green-800 px-2">
                  Billing Postal Code:
                </span>{" "}
                {Invoice.BillingPostalCode}
              </p>
              <h1 className="text-2xl m-2 bg-gray-300 px-2">
                <span className="text-green-800 px-2">Total:</span> $
                {Invoice.Total.toString()}
              </h1>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
