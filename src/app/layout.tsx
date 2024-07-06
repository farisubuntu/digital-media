import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Media",
  description: "Digital Media Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-slate-600 text-white text-sm">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
