import { createClient } from "@libsql/client";

// export const tursoClient = createClient({
//   url: process.env.NEXT_PUBLIC_DB_FILE as string,
//   syncUrl:
//     process.env.NEXT_PUBLIC_TURSO_DATABASE_URL as string || "libsql://chinook-farisubuntu.turso.io",
//   authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN,
//   syncInterval: 60,
// });

export const tursoClient = createClient({
  url: "file:./src/lib/chinook.db",
  syncInterval: 60,
  authToken: process.env.TURSO_AUTH_TOKEN as string,
  syncUrl: "libsql://chinook-farisubuntu.turso.io",
});
