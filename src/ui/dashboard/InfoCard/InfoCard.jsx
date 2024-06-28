import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function InfoCard({ iconSrc, title, value, link }) {
  // console.log("iconSrc", iconSrc);
  return (
    <Link href={link}>
      <div className="flex items-center  bg-white border rounded-lg shadow px-2 hover:invert py-2">
        <div>
          <Image src={iconSrc} alt="icon" width={60} height={60} className="bg-inherit" />
        </div>
        <div className="px-4 text-blue-800 text-center">
          <h3 className="text-md tracking-wider">{title}</h3>
          <p className="text-3xl center text-red-600">{value}</p>
        </div>
      </div>
    </Link>
  );
}
