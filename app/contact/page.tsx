import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Makerlab. Email ${site.contact.primary} or reach out to one of us directly.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="px-6 sm:px-10 pt-12 pb-24">
      <div className="mx-auto max-w-[1400px]">
        <header className="grid grid-cols-12 gap-6 mb-16">
          <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60 md:pt-4">
            Correspondence
          </p>
          <h1 className="col-span-12 md:col-span-10 font-display text-[15vw] md:text-[12vw] lg:text-[11rem] leading-[0.85] tracking-[-0.03em]">
            <span className="italic">Hello,</span>
            <br />
            come find us.
          </h1>
        </header>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60 mb-3">
              General inquiries
            </p>
            <a
              href={`mailto:${site.contact.primary}`}
              className="font-display text-4xl sm:text-5xl tracking-tight hover:text-[var(--accent)] hover:italic transition-[color,font-style] block"
            >
              {site.contact.primary}
            </a>
            <a
              href={`mailto:${site.contact.alias}`}
              className="mt-2 inline-block font-display text-2xl text-[var(--ink)]/60 hover:text-[var(--accent)]"
            >
              {site.contact.alias}
            </a>
            <p className="mt-6 text-[13px] text-[var(--ink)]/70 max-w-xs">
              Goes to all of us. Pitches, collaborations, wild ideas, weird
              questions — all welcome.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {site.contact.people.map((person, i) => (
              <a
                key={person.email}
                href={`mailto:${person.email}`}
                className="tilt-hover border border-[var(--ink)]/20 p-6 sm:p-8 bg-[var(--paper)] hover:bg-[var(--paper-deep)] transition-colors"
                style={{ transform: i % 2 === 0 ? "rotate(-0.3deg)" : "rotate(0.3deg)" }}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/50">
                  {String(i + 1).padStart(2, "0")} / Individual
                </p>
                <p className="mt-6 font-display text-4xl tracking-tight">
                  {person.name}
                </p>
                <p className="mt-4 font-mono text-[13px] text-[var(--ink)]/70">
                  {person.email}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-[var(--ink)]/15 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
            Elsewhere
          </p>
          <ul className="col-span-12 md:col-span-10 flex flex-wrap gap-x-8 gap-y-3 font-display text-3xl">
            {site.social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent)] hover:italic transition-[color,font-style]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
