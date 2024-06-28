"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

import Search from "@/ui/Search";
import { usePathname } from "next/navigation";


const menuItems = [
  { name: "Chinook Dashboard", link: "/chinook/dashboard" },
  { name: "Blog", link: "/blog", disabled: true },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full flex items-center px-1 py-2">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="w-8 h-8"
          />
        </div>
        <Link href="/chinook/dashboard" className="text-2xl mx-2">
          Chinook Digital Media
        </Link>
        <ul className="flex">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`p-2 ${
                pathname === item.link
                  ? "text-yellow-400 bg-black"
                  : "text-white"
              }`}
            >
              <Link href={item.link} className="p-2">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <Search />
        </div>
      </div>
    </>
  );
}
