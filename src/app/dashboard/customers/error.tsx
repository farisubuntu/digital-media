"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function Error({
  
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Customer ID ({pathname})route: Something went wrong!</h2>
      <div className="text-3xl border border-2xl">
        <div>Error digest: {error.digest}</div>
        <div>Error message: {error.message}</div>
        <div>Error name: {error.name}</div>
        <div>Error stack: {error.stack}</div>
      </div>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the dashboard route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
