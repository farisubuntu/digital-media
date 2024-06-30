import Link from "next/link";
import Image from "next/image";

export default function InfoCard({ iconSrc, title, value, link }) {
  // console.log("iconSrc", iconSrc);
  return (
    <Link
      href={link}
      className="flex flex-col border rounded-lg shadow mx-2 my-2 hover:bg-blue-700 hover:text-white transition-colors duration-200"
    >
      <Image
        src={iconSrc}
        alt="Icon"
        width={50}
        height={50}
        className="w-12 h-12 mx-auto my-4 bg-inverted"
      />
      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
        {title}
      </dd>
      <dt className="text-lg font-semibold leading-6 ">{value}</dt>
    </Link>
  );
}
