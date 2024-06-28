import { prisma } from "@/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const res = await prisma.customers.findUnique({
    where: {
      CustomerId: Number(params.customerId),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
