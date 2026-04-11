# makerlab.com

The Makerlab studio site. Next.js 15 (App Router) + TypeScript + Tailwind, deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

Runs at http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/` — routes (home, projects, about, contact, 404, sitemap, robots, OG image)
- `app/projects/[slug]/` — per-project pages, statically generated
- `lib/site.ts` — site-wide config (name, description, URL, nav, contact, social)
- `lib/projects.ts` — projects data — edit here to add/remove/update projects
- `lib/about.ts` — about-page copy
- `public/assets/` — project thumbnails

## Editing content

- **Add or change a project:** edit `lib/projects.ts`. Drop a new image in `public/assets/` and reference it by path.
- **Update about copy:** edit `lib/about.ts`.
- **Change site metadata, nav, contact, social:** edit `lib/site.ts`.

## SEO

- Per-page metadata via Next's `metadata` API.
- `app/sitemap.ts` generates `/sitemap.xml` including every project page.
- `app/robots.ts` generates `/robots.txt`.
- JSON-LD `Organization` on every page + per-project `CreativeWork`.
- Auto-generated Open Graph image at `/opengraph-image` (edit `app/opengraph-image.tsx`).

## Deploy

Push to a branch connected to Vercel — it auto-detects Next.js. No `vercel.json` needed.
