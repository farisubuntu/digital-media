import TopNav from "@/ui/dashboard/TopNav/TopNav";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TopNav />
      </Suspense>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
