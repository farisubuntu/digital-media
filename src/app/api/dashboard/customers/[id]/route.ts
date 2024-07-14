import { tursoClient } from "@/lib/turso";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const data = await tursoClient.execute(
    `SELECT * FROM Customer WHERE id = ${id}`
  );
  return NextResponse.json(data);
}
