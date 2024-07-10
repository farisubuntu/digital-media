import type { Invice_Item } from "@prisma/client";

export default function InvoiceItemRow({ item }: { item: Invice_Item }) {
  const subTotal = Number(item.UnitPrice) * item.Quantity;
  return (
    <>
      <td
        scope="col"
        className="px-6 py-3 text-left  font-medium uppercase tracking-wider"
      >
        {item.InvoiceLineId.toString()}
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
    </>
  );
}
