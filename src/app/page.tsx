import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";

const breadcrumbs: Breadcrumb[] = [
  {
    label: "Home",
    href: "/",
    active: true,
  },

  
];
export default function Home() {
  return (
    <>

      <Nav breadcrumbs={breadcrumbs} />
    </>
  );
}
