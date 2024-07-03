import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Media Co. - Dashboard",
  description: "Generated in ❤️ by Faris",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">{children}</div>
    </>
  );
}
