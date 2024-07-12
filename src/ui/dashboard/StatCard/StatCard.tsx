import Link from "next/link";
import { StatCardInterface } from "@/lib/definitiions";

export default async function StatCard({ item }: { item: StatCardInterface }) {
  return (
    <>

        <dl className="flex w-full border rounded-lg sm:text-2xl md:justify-center">
          <dt className="text-white">{item?.icon}</dt>
          <div className="flex flex-col items-center gap-2">
            <dt className="order-last xs:text-sm sm:text-md md:text-lg lg:text-xl font-medium">{item.title}</dt>
            <dd className="lg:text-4xl  md:text-2xl sm:text-xl  font-extrabold md:text-5x">
              {item.value}
            </dd>
          </div>
        </dl>
 
    </>
  );
}
