"use client";

import {
  Bars3Icon,
  UserGroupIcon,
  UserPlusIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Bars3Icon,
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
  {
    label: "Employees",
    href: "/dashboard/employees",
    icon: UserPlusIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <nav className="">
        <ul className="flex flex-col gap-2">
          {links.map((link, index) => (
            <li
              key={index}
              
            >
              <Link
                href={link.href}
                className={`flex gap-2 px-2 py-1 border rounded-lg ${
                  pathname === link.href
                    ? "bg-green-900 text-white"
                    : "bg-inherit text-inherit"
                } `}
              >
                <link.icon className="h-6 w-6" />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
