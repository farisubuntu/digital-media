import TopNav from "@/ui/dashboard/TopNav/TopNav";
import { Suspense } from "react";
import Loading from "./loading";
import "@/styles/dashboard.css";
import Sidebar from "@/ui/dashboard/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col">
          <TopNav />
          <div className="flex gap-2">
            <Sidebar />
            {children}
          </div>
        </div>
      </Suspense>
    </>
  );
}
