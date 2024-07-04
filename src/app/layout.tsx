import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Script from "next/script";
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
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>

       </body>
    </html>
  );
}
