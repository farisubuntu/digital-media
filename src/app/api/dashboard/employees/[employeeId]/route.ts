import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const employeeId = searchParams.get("employeeId");
  redirect(`/dashboard/employees/${employeeId}`);

  return NextResponse.json({ success: true });
}
