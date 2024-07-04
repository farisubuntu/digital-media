import TopNav from "@/ui/dashboard/TopNav/TopNav";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
 
        <TopNav />
  
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
