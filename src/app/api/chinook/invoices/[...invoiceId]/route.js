import { prisma } from "@/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const res = await prisma.invoices.findUnique({
    where: {
      InvoiceId: Number(params.invoiceId),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
