import { createClient } from "@libsql/client";

// export const tursoClient = createClient({
//   url: process.env.NEXT_PUBLIC_DB_FILE as string,
//   syncUrl:
//     process.env.NEXT_PUBLIC_TURSO_DATABASE_URL as string || "libsql://chinook-farisubuntu.turso.io",
//   authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN,
//   syncInterval: 60,
// });

export const tursoClient = createClient({
  url: "file:src/lib/chinook.db",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjA4MjIyNDksImlkIjoiNTBlMDhkMTItNGVhOS00YjViLThjOTItZGNhNGIyZDIxMDY4In0.bsz1PqI37pcU9SemBiD1XxmQloAhHsVh9K1TEjxuJ1GNLVl3P0G5w34b6E4_0jg088NvojLN5soSJ9wrQ0ESCg",
  syncInterval: 120,
  syncUrl: "libsql://chinook-farisubuntu.turso.io",
});
