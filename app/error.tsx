"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex min-h-[80vh] max-w-[900px] flex-col items-start justify-center">
        <p className="mb-5 text-sm uppercase tracking-[0.28em] text-gold">
          Something went wrong
        </p>
        <h1 className="font-serif text-5xl font-light leading-none sm:text-7xl">
          The page needs another take.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-foreground/65 sm:text-lg">
          Please try again. If this keeps happening, the enquiry details in the
          footer are still available when you return home.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="bg-gold px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-gold-light"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-foreground/20 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
