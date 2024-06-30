import type { Metadata } from "next";
import Sidebar from "@/ui/dashboard/Sidebar/Sidebar";
import Navbar from "@/ui/dashboard/Navbar/Navbar";
import { Suspense } from "react";
import TopBreadcrumb from "@/ui/dashboard/TopBreadcrumb/TopBreadcrumb";
export const metadata: Metadata = {
  title: "Chinook Digital Media - Home",
  description: "Chinook Digital Media Page",
};

// TODO: add breadcrumb
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-slate-950 to-slate-800">
        <Navbar />
        <div className="dashboardPage w-full flex">
          <div className="flex-1/5">
            <Sidebar />
          </div>
          <div className="w-full flex-4/5 mx-2 my-2">
            <TopBreadcrumb />
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
