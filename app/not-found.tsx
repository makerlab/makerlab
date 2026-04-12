import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mis-filed",
  description:
    "The page you're looking for has been moved, renamed, or was never there to begin with. Everything gets mis-filed eventually.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="px-6 sm:px-10 pt-20 pb-32">
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
            Errata
          </p>
        </div>
        <div className="col-span-12 md:col-span-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            404 / page not found
          </p>
          <h1 className="mt-4 font-display text-[18vw] md:text-[14vw] lg:text-[13rem] leading-[0.85] tracking-[-0.03em]">
            <span className="italic">Mis-</span>
            <br />
            filed.
          </h1>
          <p className="mt-8 max-w-xl text-[var(--ink)]/75 text-[15px] leading-relaxed">
            The page you're looking for has been moved, renamed, or was never
            there to begin with. Everything gets mis-filed eventually. We'll
            find it together.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block text-[11px] uppercase tracking-[0.2em] border-b border-[var(--ink)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            ← Return to the index
          </Link>
        </div>
      </div>
    </section>
  );
}
