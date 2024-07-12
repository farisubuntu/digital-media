import { createClient } from "@libsql/client";

export const tursoClient = createClient({
  url: "file:./chinook.db",
  syncUrl:
    process.env.TURSO_DATABASE_URL || "libsql://chinook-farisubuntu.turso.io",
  authToken: process.env.TURSO_AUTH_TOKEN,
  syncInterval: 60,
});
