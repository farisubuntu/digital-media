"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TopBreadcrumb() {
  const pathname = usePathname();

  return (
    <div className="flex justify-start bg-slate-800 italic">
      <Link href={pathname} className="text-lg mx-2">
        {pathname}
      </Link>
    </div>
  );
}
