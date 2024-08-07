import type { Invoice, Invice_Item } from "@prisma/client";
import { getInvoiceItems, getInvoice } from "@/lib/utils";
import InvoiceItemRow from "@/ui/dashboard/Cards/InvoiceCard/InvoiceItemRow";

async function getInvoiceTotal({
  invoiceItems,
}: {
  invoiceItems: Invice_Item[];
}) {
  const invoiceTotal = invoiceItems.reduce(
    (total, item) => total + Number(item.UnitPrice) * item.Quantity,
    0
  );
  return invoiceTotal;
}
export default async function InvoiceTable({ invoiceId }: { invoiceId: any }) {
  const invoiceData = await getInvoice(invoiceId);
  const itemsData = await getInvoiceItems(invoiceId);
  const invoiceTotal = await getInvoiceTotal({ invoiceItems: itemsData });
  return (
    <>
      <div className="flex flex-col">
        <table className="w-full divide-y divide-gray-400 overflow-x-auto">
          <thead className="bg-blue-500 text-xl">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
              >
              LineIn
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
            {itemsData.map((item) => (
              <tr key={item.InvoiceId}>
                <InvoiceItemRow item={item} />
              </tr>
            ))}
            <tr className="md:text-lg">
              <td
                colSpan={3}
                scope="row"
                className="px-6 py-3 font-medium uppercase tracking-wider bg-blue-600 text-white text-center text-xl"
              >
                Total
              </td>
              <td
                colSpan={2}
                scope="row"
                className="px-6 py-3 font-medium uppercase tracking-wider text-green-800 text-center text-2xl"
              >
                $ {invoiceTotal.toString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
