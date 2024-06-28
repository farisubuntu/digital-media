import type { Metadata } from "next";
import Navbar from "@/ui/dashboard/Navbar/Navbar";


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
   <div className="w-full flex space-x-4 border-b-2  p-2 bg-slate-700"><Navbar /></div>
   {children}
   </>
  );
}
