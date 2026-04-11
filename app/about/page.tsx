import type { Metadata } from "next";
import { aboutSections, aboutSatellites } from "@/lib/about";
import { Crystal } from "@/components/Decoration";

export const metadata: Metadata = {
  title: "About",
  description:
    "Makerlab is a full stack interactive design and build collective. Open, process-focused, conversational, community-first.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="px-6 sm:px-10 pt-12 pb-24">
      <div className="mx-auto max-w-[1400px]">
        <header className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60 md:pt-4">
            <p>About</p>
            <Crystal
              variant="point"
              className="hidden md:block w-8 h-12 mt-10 text-[var(--accent)] rotate-[3deg]"
            />
          </div>
          <h1 className="col-span-12 md:col-span-10 font-display text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.88] tracking-[-0.03em]">
            A loose confederation
            <br />
            of <span className="italic">makers</span>,
            <br />
            <span className="squiggle">thinkers</span>, and tinkerers.
          </h1>
        </header>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 md:sticky md:top-10 md:self-start">
            <ul className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60 space-y-2">
              {aboutSections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#${s.heading.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")} · {s.heading}
                  </a>
                </li>
              ))}
              <li>
                <a href="#around-makerlab" className="hover:text-[var(--accent)]">
                  {String(aboutSections.length + 1).padStart(2, "0")} · Around Makerlab
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-8 space-y-14">
            {aboutSections.map((s, i) => {
              const id = s.heading.toLowerCase().replace(/\s+/g, "-");
              return (
                <section key={s.heading} id={id} className="scroll-mt-24">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/40 mb-2">
                    § {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-4xl sm:text-5xl tracking-tight mb-4">
                    {s.heading}
                  </h2>
                  <p className={`text-[17px] leading-[1.65] text-[var(--ink)]/80 ${i === 0 ? "dropcap" : ""}`}>
                    {s.body}
                  </p>
                </section>
              );
            })}

            {/* Around Makerlab — satellite sites */}
            <section id="around-makerlab" className="scroll-mt-24 pt-6 border-t border-[var(--ink)]/15">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/40 mb-2">
                § {String(aboutSections.length + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight mb-6">
                Around Makerlab
              </h2>
              <p className="text-[17px] leading-[1.65] text-[var(--ink)]/80 mb-8">
                Makerlab isn't just the studio — it's a small constellation of
                places where we think out loud.
              </p>
              <ul className="divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/15">
                {aboutSatellites.map((s) => (
                  <li key={s.url} className="group">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="grid grid-cols-12 gap-4 items-baseline py-6 hover:bg-[var(--paper-deep)] transition-colors px-2 -mx-2"
                    >
                      <span className="col-span-12 sm:col-span-3 font-display text-2xl sm:text-3xl tracking-tight group-hover:text-[var(--accent)] group-hover:italic transition-[color,font-style] duration-300">
                        {s.label}
                      </span>
                      <span className="col-span-12 sm:col-span-8 text-[15px] text-[var(--ink)]/75 leading-relaxed">
                        {s.desc}
                      </span>
                      <span className="hidden sm:block sm:col-span-1 text-right font-mono text-[11px] text-[var(--ink)]/40 group-hover:text-[var(--accent)] transition-colors">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
