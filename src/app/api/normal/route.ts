import { tursoClient } from "@/lib/turso";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const result = await tursoClient.execute("SELECT * FROM Customer");
  return new Response(JSON.stringify(result.rows));
}
