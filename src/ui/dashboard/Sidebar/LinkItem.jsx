"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function SidebarLinkItem({ iconClassName, name, link }) {
  const pathname = usePathname();

  return (
    <li
      className={`${
        pathname === link ? "text-yellow-400 bg-black" : "text-white"
      } `}
    >
      <div className="flex">
        <span className={`${iconClassName}`}></span>
        <Link href={link} className="p-2">
          {name}
        </Link>
      </div>
    </li>
  );
}
