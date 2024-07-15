import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/Nav/Nav";
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
    <h1 className="text-3xl font-bold underline">Home Page</h1>
    </>
  );
}
