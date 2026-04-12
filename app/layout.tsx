import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { FooterWordmark } from "@/components/Decoration";
import { Starfield } from "@/components/Starfield";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Paige" }, { name: "Anselm" }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    site: site.twitter,
    creator: site.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.contact.primary,
    sameAs: site.social.map((s) => s.href),
    description: site.description,
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${plexMono.variable}`}>
      <body className="min-h-screen font-mono text-[15px] leading-relaxed">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Starfield />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-[var(--ink)] focus:text-[var(--paper)] focus:px-3 focus:py-2 focus:z-50"
        >
          Skip to content
        </a>

        {/* Header — deliberately asymmetric, tiny mono caption meets a big mark */}
        <header className="px-6 sm:px-10 pt-8 pb-6">
          <div className="mx-auto max-w-[1400px] flex items-start justify-between gap-6">
            <Link href="/" className="group flex items-baseline gap-3" aria-label={`${site.name} home`}>
              <span className="font-display text-5xl sm:text-6xl leading-none text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                m
              </span>
              <span className="hidden sm:flex flex-col pb-2 leading-tight">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
                  makerlab · est. 2006
                </span>
                <span className="mt-1 font-display italic text-[13px] text-[var(--ink)]/70 group-hover:text-[var(--accent)] transition-colors">
                  Go on, be curious.
                </span>
              </span>
            </Link>
            <nav aria-label="Primary" className="pt-3">
              <ul className="flex gap-6 text-[11px] uppercase tracking-[0.18em]">
                {site.nav.map((item, i) => (
                  <li key={item.href} className="flex items-center gap-6">
                    {i > 0 && <span aria-hidden className="text-[var(--ink)]/30">/</span>}
                    <Link
                      href={item.href}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main id="main" className="flex-1">{children}</main>

        {/* Footer — edition/colophon style */}
        <footer className="mt-32 border-t border-[var(--ink)]/15 overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px] uppercase tracking-[0.18em] text-[var(--ink)]/70">
            <div>
              <p className="text-[var(--ink)]">Makerlab</p>
              <p className="mt-1 normal-case tracking-normal font-display italic text-[13px] text-[var(--ink)]/60">
                Go on, be curious.
              </p>
            </div>
            <div className="md:text-center">
              <p>{site.contact.primary}</p>
              <p className="mt-1">San Francisco · Internet</p>
            </div>
            <div className="md:text-right">
              <ul className="flex md:justify-end gap-5">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3">© {new Date().getFullYear()} · Edition {new Date().getFullYear() - 2005}</p>
            </div>
          </div>

          {/* Oversized rainbow-gradient wordmark */}
          <FooterWordmark />
        </footer>
      </body>
    </html>
  );
}
