import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import InvoiceTable from "@/ui/dashboard/InvoiceDetails/InvoiceTable";
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
export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string | number };
}) {
  return (
    <>
      <Nav breadcrumbs={breadcrumbs} />
      <Suspense fallback={<Loading />}>
        <InvoiceTable invoiceId={params.invoiceId} />
      </Suspense>
    </>
  );
}
