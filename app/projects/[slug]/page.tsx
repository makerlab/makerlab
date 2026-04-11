import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} · ${site.name}`,
      description: project.tagline,
      url: `${site.url}/projects/${project.slug}`,
      images: [{ url: project.image, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · ${site.name}`,
      description: project.tagline,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.tagline,
    url: `${site.url}/projects/${project.slug}`,
    image: `${site.url}${project.image}`,
    creator: { "@type": "Organization", name: site.name, url: site.url },
    keywords: project.tags.join(", "),
    ...(project.href ? { sameAs: [project.href] } : {}),
  };

  return (
    <article className="px-6 sm:px-10 pt-8 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-[1400px]">
        <nav className="mb-10 text-[11px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
          <Link href="/projects" className="hover:text-[var(--accent)]">
            ← Back to index
          </Link>
        </nav>

        <header className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
              № {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/40">
              {project.tags.join(" · ")}
            </p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-display text-[16vw] md:text-[12vw] lg:text-[11rem] leading-[0.85] tracking-[-0.03em]">
              <span className="italic">{project.name.split(" ")[0]}</span>
              {project.name.split(" ").length > 1 && (
                <>
                  <br />
                  {project.name.split(" ").slice(1).join(" ")}
                </>
              )}
            </h1>
            <p className="mt-8 max-w-2xl text-xl sm:text-2xl font-display-tight text-[var(--ink)]/80 leading-snug">
              {project.tagline}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-[var(--ink)]/15 bg-[var(--paper-deep)]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="hidden md:block col-span-2" />
          <div className="col-span-12 md:col-span-6 text-[15px] text-[var(--ink)]/80 leading-relaxed">
            <p>
              {project.tagline} Visit the project to see more, try it, or read
              the source where one is available.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col gap-3 text-[11px] uppercase tracking-[0.18em]">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="border-b border-[var(--ink)] pb-2 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                → Visit project
              </a>
            ) : (
              <p className="border-b border-[var(--ink)]/30 pb-2 text-[var(--ink)]/50">
                No live home
              </p>
            )}
            {project.sponsor && project.sponsorUrl && (
              <a
                href={project.sponsorUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--ink)]/60 hover:text-[var(--accent)] normal-case tracking-normal text-[12px]"
              >
                By {project.sponsor}
              </a>
            )}
          </div>
        </div>

        {/* Prev / Next */}
        <nav
          className="mt-24 pt-8 border-t border-[var(--ink)]/15 grid grid-cols-2 gap-6"
          aria-label="Project navigation"
        >
          <Link
            href={`/projects/${prev.slug}`}
            className="group"
            aria-label={`Previous project: ${prev.name}`}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/50">
              ← Previous
            </p>
            <p className="mt-2 font-display text-2xl sm:text-3xl tracking-tight group-hover:text-[var(--accent)] group-hover:italic transition-[color,font-style]">
              {prev.name}
            </p>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group text-right"
            aria-label={`Next project: ${next.name}`}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/50">
              Next →
            </p>
            <p className="mt-2 font-display text-2xl sm:text-3xl tracking-tight group-hover:text-[var(--accent)] group-hover:italic transition-[color,font-style]">
              {next.name}
            </p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
