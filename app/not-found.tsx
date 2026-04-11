import Link from "next/link";
import { Crystal } from "@/components/Decoration";

export default function NotFound() {
  return (
    <section className="px-6 sm:px-10 pt-20 pb-32">
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
            Errata
          </p>
          <Crystal
            variant="point"
            className="hidden md:block w-10 h-14 mt-8 text-[var(--accent)] rotate-180"
          />
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
