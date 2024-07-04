import Link from "next/link";
import { StatCardInterface } from "@/lib/definitiions";

export default async function StatCard({ item }: { item: StatCardInterface }) {
  return (
    <>
      <div className="bg-blue-900 p-2 text-white">
        <dl className="flex items-center border rounded-lg space-x-2 text-center">
          <dt className="text-white">{item.icon && item.icon}</dt>
          <div className="flex flex-col items-center gap-2 p-2">
            <dt className="order-last text-lg font-medium">{item.title}</dt>
            <dd className="text-4xl font-extrabold md:text-5x">
              {item.value}
            </dd>
          </div>
        </dl>
   </div>
    </>
  );
}
