import { Breadcrumb } from "@/lib/definitiions";
import Link from "next/link";

export default function Nav({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="italic my-2 mx-2">
      <ol className="flex w-full text-sm px-1">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={breadcrumb.active ? "bg-green-900 px-2 rounded-lg text-white" : ""}
          >
            <Link href={breadcrumb.href} className="hover:underline">{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-2 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
