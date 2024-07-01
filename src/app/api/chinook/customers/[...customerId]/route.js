import { prisma } from "@/connect";
import { NextResponse } from "next/server";

export async function GET({ params }) {
  const res = await prisma.customers.findUnique({
    where: {
      CustomerId: Number(params.customerId),
    },
    include: {
      invoices: true,
      employees: true,
    },
  });
  return NextResponse.json(res, { status: 200 });
}
