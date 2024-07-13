import type { Metadata } from "next";
import "@/styles/globals.css";
import Sidebar from "@/ui/dashboard/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Digital Media",
  description: "Digital Media Company",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6">{children}</div>
      </div>
    </>
  );
}
