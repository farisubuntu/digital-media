import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { menuItems } from "@/ui/dashboard/Navbar/links";
import Search from "@/ui/Search";

export default function Navbar() {
  return (
    <>
      <div className="w-full flex items-center">
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
            <li key={item.name} className="border-2 mx-2 rounded hover:bg-black hover:text-yellow-400 italic text-2xl">
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
