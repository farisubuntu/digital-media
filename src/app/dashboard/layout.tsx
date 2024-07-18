<<<<<<< HEAD
import type { Metadata } from "next";
import "@/styles/globals.css";
import Sidebar from "@/ui/dashboard/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Digital Media",
  description: "Digital Media Company",
};
=======
import TopNav from "@/ui/dashboard/TopNav/TopNav";
import { Suspense } from "react";
import Loading from "./loading";
import "@/styles/dashboard.css";
import Sidebar from "@/ui/dashboard/Sidebar/Sidebar";
>>>>>>> vercel-prisma

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
<<<<<<< HEAD
      <div className="flex">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6">{children}</div>
      </div>
=======

        <div className="flex flex-col">
          <TopNav />
          <div className="flex gap-2">
            <Sidebar />
            {children}
          </div>
        </div>

>>>>>>> vercel-prisma
    </>
  );
}
