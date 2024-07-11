import { Breadcrumb } from "@/lib/definitiions";
import Nav from "@/ui/dashboard/Nav/Nav";
import { getAllTracks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { Track } from "@prisma/client";


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
    label: "Tracks",
    href: "/dashboard/tracks",
    active: true,
  },
];

export default function TracksPage() {
  return (
    <>
    <div className="flex flex-col">

      <Nav breadcrumbs={breadcrumbs} />

      </div>
    </>
  );
}
