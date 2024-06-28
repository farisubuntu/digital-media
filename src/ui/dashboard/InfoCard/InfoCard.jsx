import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function InfoCard({ iconSrc, title, value, link }) {
  // console.log("iconSrc", iconSrc);
  return (
    <Link href={link}>
      <div className="flex items-center bg-white border rounded-sm  shadow px-2 hover:invert">
        <div>
          <Image src={iconSrc} alt="icon" width={50} height={50} className="bg-inherit" />
        </div>
        <div className="px-4 text-blue-800">
          <h3 className="text-md tracking-wider">{title}</h3>
          <p className="text-3xl">{value}</p>
        </div>
      </div>
    </Link>
  );
}
