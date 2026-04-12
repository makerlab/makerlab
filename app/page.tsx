import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Sparkle } from "@/components/Decoration";

const marqueeWords = [
  "weird",
  "delightful",
  "open",
  "playful",
  "rigorous",
  "ambitious",
  "handmade",
  "collaborative",
  "strange",
  "useful",
  "beautiful",
];

export default function HomePage() {
  return (
    <>
      {/* Hero — huge editorial statement, asymmetric */}
      <section className="px-6 sm:px-10 pt-12 pb-20">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-1 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60 md:pt-6">
            <p>Vol. 01</p>
            <p className="mt-1">Issue {new Date().getFullYear() - 2005}</p>
          </div>
          <div className="col-span-12 md:col-span-11">
            <h1 className="font-display text-[13vw] md:text-[10vw] lg:text-[9rem] leading-[0.88] tracking-[-0.03em] text-[var(--ink)]">
              A studio of
              <br />
              humans making
              <br />
              <span className="italic">strange</span>{" "}
              <span className="squiggle">beautiful</span>
              <br />
              useful things.
              <Sparkle
                className="inline-block w-[0.7em] h-[0.7em] ml-[0.1em] -mt-[0.25em] align-middle text-[var(--accent)]"
              />
            </h1>
            <div className="mt-10 grid grid-cols-12 gap-6">
              <p className="col-span-12 md:col-span-6 md:col-start-5 text-[15px] text-[var(--ink)]/80 leading-relaxed">
                Makerlab is the long collaboration of Paige Saez and Anselm
                Hook. Twenty years in, we're still building strange things
                — civic simulations, conversational agents, place-based
                games, art installations, hardware, and the quiet tools
                underneath other people's work.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em]">
              <Link
                href="/projects"
                className="border-b border-[var(--ink)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                → See the work
              </Link>
              <Link
                href="/contact"
                className="border-b border-[var(--ink)]/30 pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                Say hello
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ribbon — delightful */}
      <section
        aria-hidden
        className="border-y border-[var(--ink)]/15 py-5 bg-[var(--paper-deep)] overflow-hidden"
      >
        <div className="marquee-track flex gap-10 text-[var(--ink)] font-display text-5xl sm:text-6xl whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className={i % 3 === 1 ? "italic" : ""}>{w}</span>
              <span aria-hidden className="text-[var(--accent)]">✺</span>
            </span>
          ))}
        </div>
      </section>

      {/* Selected index — not a card grid; an editorial list with hover reveal */}
      <section
        aria-labelledby="selected-heading"
        className="px-6 sm:px-10 pt-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <header className="grid grid-cols-12 gap-6 mb-10">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60 md:pt-2">
              § 01 — Selected
            </p>
            <h2
              id="selected-heading"
              className="col-span-12 md:col-span-10 font-display text-5xl md:text-6xl tracking-tight"
            >
              An incomplete index of things we've made.
            </h2>
          </header>

          <ol className="divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/15">
            {projects.slice(0, 8).map((p, i) => (
              <li key={p.slug} className="group">
                <Link
                  href={`/projects/${p.slug}`}
                  className="grid grid-cols-12 gap-4 items-center py-6 sm:py-7 hover:bg-[var(--paper-deep)] transition-colors px-2 -mx-2"
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-[var(--ink)]/50">
                    № {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 md:col-span-5 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight group-hover:text-[var(--accent)] group-hover:italic transition-[color,font-style] duration-300">
                    {p.name}
                  </span>
                  <span className="col-span-12 md:col-span-4 text-[13px] text-[var(--ink)]/70">
                    {p.tagline}
                  </span>
                  <span className="hidden md:block md:col-span-2 text-right font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink)]/50">
                    {p.tags.slice(0, 2).join(" · ")}
                    <br />
                    <span className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                      → view
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex justify-end">
            <Link
              href="/projects"
              className="text-[11px] uppercase tracking-[0.2em] border-b border-[var(--ink)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              The full index →
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial mission blurb with a dropcap */}
      <section className="px-6 sm:px-10 pt-32">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
            § 02 — Colophon
          </p>
          <div className="col-span-12 md:col-span-8">
            <p className="dropcap font-display-tight text-[22px] md:text-[26px] leading-[1.4] text-[var(--ink)]">
              We believe in open code, open data, and open participation. We'd
              rather ship a scrappy thing that teaches us something than polish
              a pitch deck. We think process is the real product. We like
              playing games, making meals together, and pulling people from
              different disciplines into the same room. If that sounds like
              your kind of trouble —{" "}
              <Link href="/contact" className="squiggle">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
