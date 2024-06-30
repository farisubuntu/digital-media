import Link from "next/link";
import { prisma } from "@/connect";


export default async function Home() {
  // await updateInvoicesDates();

  return (
    <h1 className="text-3xl font-bold py-4 italic">
      Go to{" "}
      <Link className="text-blue-500" href="/chinook">
        Chinook Digital Media Page
      </Link>
    </h1>
  );
}
