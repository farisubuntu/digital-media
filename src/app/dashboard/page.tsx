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
    active: true,
  },
];

export default function DashboardPage() {
  return (
    <>
      <Nav breadcrumbs={breadcrumbs} />
    </>
  );
}
