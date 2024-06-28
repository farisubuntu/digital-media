import type { Metadata } from "next";
import Sidebar from "@/ui/dashboard/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Chinook Digital Media - Home",
  description: "Chinook Digital Media Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="dashboardPage w-full flex">
        <div className="flex-1/5">
          <Sidebar />
        </div>
        <div className="w-full flex-4/5 mx-2 my-2">{children}</div>
      </div>
    </>
  );
}
