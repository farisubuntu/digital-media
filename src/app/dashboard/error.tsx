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
      <h2 className="text-center">
        Dashboard Error Route (/dashboard/loading.tsx) : Something went wrong!
      </h2>
      <div className="text-xl border border-2xl">
        <div>
          <span className="text-green bg-slate-800">Pathname: </span>
          {pathname}
        </div>
        <div>
          <span className="text-green bg-slate-800">Error digest:</span>
          {error.digest}
        </div>
        <div>
          <span className="text-white bg-slate-800">
            Error message:
          </span>
           {error.message}
        </div>
        <div>
          <span className="text-white bg-slate-800">
            Error name:
          </span>
           {error.name}
        </div>
        <div>
          <span className="text-white bg-slate-800">
            Error stack:
          </span>
           {error.stack}
        </div>
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
