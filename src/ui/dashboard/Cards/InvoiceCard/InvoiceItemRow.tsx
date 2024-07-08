import { invoice_items } from "@prisma/client";

export default function InvoiceItemRow({
  item,

}: {
  item: invoice_items;

}) {
  const subTotal = Number(item.UnitPrice) * item.Quantity;
  return (
    <tr className="md:text-lg">
      <td
        scope="col"
        className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
      >
        {item.InvoiceId.toString()}
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
      >
        {item.TrackId.toString()}
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
      >
        $ {item.UnitPrice.toString()}
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
      >
        {item.Quantity.toString()}
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
      >
       $ {subTotal.toString()}
      </td>
    </tr>
  );
}
