import type { Metadata } from "next";
import { aboutSections } from "@/lib/about";

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
          <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60 md:pt-4">
            About
          </p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
