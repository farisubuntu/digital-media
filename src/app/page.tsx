import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import Link from "next/link";
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
      <h2>
        <Link href="/dashboard">Dashboard</Link>
      </h2>
      <h2>
        <Link href="/blog">Blog</Link>
      </h2>
    </>
  );
}
