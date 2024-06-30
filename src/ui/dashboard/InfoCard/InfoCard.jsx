import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function InfoCard({ iconSrc, title, value, link }) {
  // console.log("iconSrc", iconSrc);
  return (
    <Link
      href={link}
      className="animate-background inline-block bg-white from-green-500 via-red-500 to-yellow-500 bg-[length:_400%_400%] p-0.5 hover:bg-gradient-to-r"
    >
      <div className="flex items-center  bg-white border rounded-lg shadow px-2  py-2">
        <div className="border-r-2 px-2">
          <Image
            src={iconSrc}
            alt="icon"
            width={40}
            height={40}
            className="bg-inherit"
          />
        </div>
        <div className="px-4 text-blue-800 text-center">
          <h3 className="text-md tracking-wider">{title}</h3>
          <p className="text-3xl center text-red-600">{value}</p>
        </div>
      </div>
    </Link>
  );
}
