import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import TopNav from "@/ui/dashboard/TopNav/TopNav";

export const metadata: Metadata = {
  title: "Digital Media Dashboard",
  description: "Digital Media Company",
};

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TopNav />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </main>
  );
}
