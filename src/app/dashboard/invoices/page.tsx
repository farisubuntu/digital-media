import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
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

export default function InvoicesPage() {
  return (
    <>
      <Nav breadcrumbs={breadcrumbs} />
    </>
  );
}
