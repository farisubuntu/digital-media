import { tursoClient } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await tursoClient.execute("SELECT * FROM Customer");
  return NextResponse.json(data);
}
