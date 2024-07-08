import TopNav from "@/ui/dashboard/TopNav/TopNav";
import { Suspense } from "react";
import Loading from "./loading";
import "@styles/dashboard.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TopNav />
        {children}
      </Suspense>
    </>
  );
}
