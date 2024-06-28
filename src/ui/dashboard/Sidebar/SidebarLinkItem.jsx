"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function ItemComponent({ Icon, title, link }) {
  const pathname = usePathname();
  return (
    <li
      className={`${
        link === pathname
          ? "text-yellow-400 bg-black"
          : "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
      }`}
    >
      <div className="px-2">
        <Icon />
      </div>
      <Link href={link} className="p-2">
        {title}
      </Link>
    </li>
  );
}

export default function SidebarLinkItem({ icon, title, link }) {
  const Item = ItemComponent({ icon, title, link });
  return <Item />;
}
