import { prisma } from "@/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const res = await prisma.employees.findUnique({
    where: {
      EmployeeId: Number(params.employeeId),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
