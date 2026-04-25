import type { Metadata } from "next";
import Link from "next/link";
import { siteName } from "./seo";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex min-h-[80vh] max-w-[900px] flex-col items-start justify-center">
        <p className="mb-5 text-sm uppercase tracking-[0.28em] text-gold">
          {siteName}
        </p>
        <h1 className="font-serif text-5xl font-light leading-none sm:text-7xl">
          This page has slipped out of frame.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-foreground/65 sm:text-lg">
          The page you are looking for is not available. Head back to the main
          story and continue from there.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex bg-gold px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-gold-light"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
