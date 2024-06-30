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

export async function DELETE(req, { params }) {
  const res = await prisma.invoices.delete({
    where: {
      InvoiceId: Number(params.invoiceId),
    },
  });
  
  return NextResponse.json(res, { status: 200 });
}

// PATCH/PUT: Update an existing resource

export async function PATCH(req, { params }) {
  const body = await req.json();
  console.log(body);
  // const res = await prisma.invoices.update({
  //   where: {
  //     InvoiceId: Number(params.invoiceId),
  //   },
  //   data: body,
  // });
  // return NextResponse.json(res, { status: 200 });
}