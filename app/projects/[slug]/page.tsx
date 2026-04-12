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
    <article className="px-6 sm:px-10 pt-8 pb-24" style={{ overflowX: "clip" }}>
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
            {project.year && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
                {project.year}
              </p>
            )}
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/40">
              {project.tags.join(" · ")}
            </p>
          </div>
          <div className="col-span-12 md:col-span-10">
            {/* Gradient № then title on the same line. Number leads,
                title follows with a small negative left margin pulling
                it into the collision zone. Flex row with nowrap and
                flex: 0 0 auto on the number keeps it at full size, so
                on wider project names the title bleeds off the right
                edge of the container — <article> has overflow-x: clip
                so this doesn't produce a horizontal scrollbar. */}
            <div className="relative flex items-baseline whitespace-nowrap">
              <span
                aria-hidden
                className="font-display select-none pointer-events-none"
                style={{
                  flex: "0 0 auto",
                  fontSize: "clamp(7rem, 17vw, 14rem)",
                  fontStyle: "italic",
                  fontVariationSettings:
                    '"opsz" 144, "SOFT" 100, "WONK" 1',
                  letterSpacing: "-0.025em",
                  lineHeight: 0.85,
                  background:
                    "linear-gradient(95deg, #ff6a1a 0%, #ffa52b 14%, #d4c32a 28%, #8fc520 44%, #3cbf1a 62%, #14c9a0 82%, #10b8c9 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  paddingRight: "0.22em",
                }}
              >
                №{String(index + 1).padStart(2, "0")}
              </span>
              <h1
                className="relative z-10 italic font-display text-[13vw] md:text-[10vw] lg:text-[9rem] leading-[0.85] tracking-[-0.03em]"
                style={{ marginLeft: "-0.04em" }}
              >
                {project.name}
              </h1>
            </div>
            <p className="mt-8 max-w-2xl text-xl sm:text-2xl font-display-tight text-[var(--ink)]/80 leading-snug">
              {project.tagline}
            </p>
          </div>
        </header>

        {/* Content row — image is now inset inside the text column at
            the top, rather than a full-width hero above the body. It
            sits at the same column width as the description, so it
            reads like an editorial figure embedded in an article
            rather than a banner. */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="hidden md:block col-span-2" />
          <div className="col-span-12 md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-[var(--ink)]/15 bg-[var(--paper-deep)] mb-10">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
                priority
              />
            </div>

            <div className="text-[16px] text-[var(--ink)]/85 leading-[1.7] font-display-tight">
              {project.description && project.description.length > 0 ? (
                <div className="space-y-5">
                  {project.description.map((para, i) => (
                    <p key={i} className={i === 0 ? "dropcap" : undefined}>
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="italic text-[var(--ink)]/60">
                  {project.tagline}
                </p>
              )}
              {project.credits && (
                <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-[var(--ink)]/55">
                  {project.credits}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-2 md:col-start-10 flex flex-col gap-3 text-[11px] uppercase tracking-[0.18em]">
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
