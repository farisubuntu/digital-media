<<<<<<< HEAD
"use client"; // Error components must be Client Components

import { useEffect } from "react";
=======
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
>>>>>>> vercel-prisma

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
<<<<<<< HEAD
  useEffect(() => {
    // Log the error to an error reporting service
=======
  const pathname = usePathname();

  useEffect(() => {
    // Optionally log the error to an error reporting service
>>>>>>> vercel-prisma
    console.error(error);
  }, [error]);

  return (
<<<<<<< HEAD
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <p>{error.digest}</p>
      <p>Something went wrong</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
=======
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
>>>>>>> vercel-prisma
          () => reset()
        }
      >
        Try again
      </button>
<<<<<<< HEAD
    </div>
=======
    </main>
>>>>>>> vercel-prisma
  );
}
