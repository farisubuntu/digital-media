"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function SidebarLinkItem({ name, link }) {
  const pathname = usePathname();

  return (
    <li
      className={`${
        pathname === link ? "text-yellow-400" : "text-white"
      } border-2 mx-2 rounded hover:bg-black hover:text-yellow-400 italic text-2xl`}
    >
      <Link href={link} className="p-2">
        {name}
      </Link>
    </li>
  );
}
