import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

/**
 * Stable last-modified date. Bump this when the site's content changes
 * meaningfully and we want to signal crawlers to re-index. Previously this
 * was `new Date()` at request time, which made every crawl see "modified
 * right now" for every URL — Google reads that as suspicious churn and
 * de-prioritizes the sitemap. A static, deliberately-updated date is the
 * honest signal.
 */
const LAST_MODIFIED = new Date("2026-04-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projects`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.6 },
  ];
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "yearly",
    priority: 0.7,
  }));
  return [...staticRoutes, ...projectRoutes];
}
