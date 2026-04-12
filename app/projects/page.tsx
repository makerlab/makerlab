import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Index",
  description:
    "The full index of Makerlab projects — tools, games, simulations, hardware, wearables, and places we've built since 2006.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="px-6 sm:px-10 pt-12 pb-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="grid grid-cols-12 gap-6 mb-16">
          <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60 md:pt-4">
            The full index
          </p>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-display text-[14vw] md:text-[11vw] lg:text-[10rem] leading-[0.88] tracking-[-0.03em]">
              <span className="italic">Almost</span> Everything.
              <br />
              Roughly chronological.
            </h1>
            <p className="mt-8 max-w-xl text-[var(--ink)]/75">
              Some live, some archived, some embarrassing in retrospect. We
              keep them all. It's the record.
            </p>
          </div>
        </header>

        {/* Numbered editorial table */}
        <ol className="border-t border-[var(--ink)]/20">
          {projects.map((p, i) => (
            <li key={p.slug} className="border-b border-[var(--ink)]/15 group">
              <Link
                href={`/projects/${p.slug}`}
                className="grid grid-cols-12 gap-3 sm:gap-4 items-start py-6 sm:py-8 hover:bg-[var(--paper-deep)] transition-colors px-2 -mx-2"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink)]/50 pt-3">
                  № {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight group-hover:text-[var(--accent)] group-hover:italic transition-[color,font-style] duration-300">
                    {p.name}
                  </h2>
                  {p.year && (
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink)]/45">
                      {p.year}
                    </p>
                  )}
                  <p
                    className={
                      p.leadIn
                        ? "mt-3 font-display-tight text-[15px] sm:text-[16px] leading-[1.55] text-[var(--ink)]/80"
                        : "mt-2 text-[13px] text-[var(--ink)]/70"
                    }
                  >
                    {p.leadIn ?? p.tagline}
                  </p>
                </div>
                <div className="hidden md:block col-span-3 text-[11px] text-[var(--ink)]/60 pt-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="mr-2 uppercase tracking-[0.12em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="hidden md:block col-span-3 pt-2">
                  <div className="relative aspect-[5/3] overflow-hidden rounded-[2px] border border-[var(--ink)]/10 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
