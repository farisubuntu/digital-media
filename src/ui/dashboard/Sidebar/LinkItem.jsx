"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function SidebarLinkItem({ iconClassName, name, link }) {
  const pathname = usePathname();

  return (
    <li
      className={`${
        pathname === link ? "text-yellow-400 bg-black" : "text-white"
      } px-2`}
    >
      <div className="flex items-center">
        <span className={`${iconClassName} p-2 `}></span>
        <Link href={link} className="p-2">
          {name}
        </Link>
      </div>
    </li>
  );
}
