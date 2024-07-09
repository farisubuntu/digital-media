import { NextResponse } from "next/server";
import { prismaClient } from "@/lib/utils";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await prismaClient.customers.findUnique({
    where: {
      CustomerId: Number(params.id),
    },
  });
  if (!data) {
    return NextResponse.json("No customer found");
  }
  return NextResponse.json(data, { status: 200 });
}
