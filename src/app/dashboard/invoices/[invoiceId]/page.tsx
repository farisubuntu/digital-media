import { Breadcrumb } from "@/lib/definitiions";
import { getInvoiceDetails } from "@/lib/utils";
import { invoices, invoice_items } from "@prisma/client";

export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  const data = await getInvoiceDetails(params.invoiceId);
  const invoiceData = data?.invoiceData;
  const itemsData = data?.itemsData;
  console.log("invoiceData", invoiceData);
  console.log("itemsData", itemsData);
  return <div>InvoicePage</div>;
}
