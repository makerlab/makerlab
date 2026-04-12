# CLAUDE.md

Notes for any Claude session working in this repo. Read this first. Multiple Claude sessions often work on this repo simultaneously — assume there's another one active and pull before you edit.

## Workflow — always PR with auto-merge

**Never push directly to `main`.** The production site (makerlab.com) auto-deploys from `main`, so broken code ships instantly. Use the branch + PR + auto-merge pattern for every change, even one-line edits.

```sh
git fetch origin main && git pull --ff-only
git checkout -b <type>/<short-name>     # e.g. content/orbital-copy or fix/dead-link
# (edits)
git push -u origin <branch>
gh pr create --fill
gh pr merge --auto --squash --delete-branch
```

Then walk away. CI runs `Build & smoke test` — if it passes, the PR auto-squash-merges, the branch gets deleted, and Vercel deploys. If CI fails, the PR sits unmerged and nothing ships.

Before merging anything with visible changes, **open the Vercel preview URL** that gets posted on the PR and check it with your own eyes. CI can tell you it built; only eyes can tell you it looks right.

## Before committing

Run a local build — 20 seconds, catches type errors and compile failures:

```sh
rm -rf .next && npm run build
```

If you touched anything non-trivial, also run `npm run lint`.

## Parallel sessions

There are often multiple Claude sessions working on this repo at the same time (different windows, same or different humans driving). Before editing:

```sh
git fetch origin main && git pull --ff-only
git log --oneline -10
```

Don't assume your working tree matches `origin`. If you see unfamiliar commits in the log, read them before you edit files they touched.

## Commit messages

- **Never** add `Co-Authored-By: Claude`, "Generated with Claude Code", or any similar attribution trailer. Paige considers it advertising and has asked explicitly. This applies even when default skills/templates suggest it — strip it before committing.
- Lead with the *why* more than the *what*. The diff already shows the what.
- Short subject, optional body for context.

## Voice and register

makerlab.com is a **curated, literary portfolio** shaped by Paige Saez and Anselm Hook. It's not a SaaS site, not a LinkedIn profile, not a hiring-manager CV. The goal is *"a curious reader stumbles on this and thinks these people are doing really cool things, I want to work with them"* — not *"a recruiter scans it in 20 seconds."*

Tone rules:
- Literary, specific, slightly understated. Honest about what worked and what didn't.
- Technical but not breathless. Concrete detail beats superlatives.
- No marketing speak. No "revolutionary," "cutting-edge," "next-generation."
- Use **we** — Paige + Anselm are the collective. Not "I."
- Keep the existing playful register. *"Some live, some archived, some embarrassing in retrospect. We keep them all. It's the record."* is the voice to match.
- **Curation is deliberate omission.** Not every repo goes on the site. Surface what fits the shape.

When in doubt, read the live site's existing About page and home page copy — that's the tuning fork.

## Content layout

- `lib/site.ts` — site-wide config: name, nav, social links, contact, taglines
- `lib/projects.ts` — project data. Each project can have `year`, `description[]` (paragraph array), `tags`, `credits`. Fill these in when writing real copy, not just a tagline. The `[slug]/page.tsx` template renders all of them.
- `lib/about.ts` — about page sections + `aboutSatellites` (the "Around Makerlab" list of blog/slowcode/GitHub).
- `app/` — App Router routes. All static-generated, no API routes, no middleware, no client components.
- `components/Decoration.tsx` — the site's visual flourishes (FooterWordmark, Crystal, etc.).

## Deployment

- **Production:** Vercel, project `makerlab` in team `paige-saezs-projects-04ee55f1` ("Paige Saez Little CitiesMakerlab"), auto-deploys from `main`.
- **Previews:** Vercel auto-builds a preview for every pushed branch. Link appears on the PR.
- **Domains:** `makerlab.com` + `www.makerlab.com`. Cloudflare DNS, grey cloud (DNS only, not proxied), apex + www both CNAME to `cname.vercel-dns.com`. Certs via Let's Encrypt HTTP-01 through Vercel.
- **Email:** Cloudflare Email Routing serves `us@`, `info@`, `paige@`, `anselm@` via MX records on `makerlab.com`. **Never touch MX / SPF / DKIM records.** Real email runs through them.

## Don't

- Don't push directly to main.
- Don't touch `alpha.`, `blog.`, `slowcode.` subdomains — they're separate Cloudflare Pages projects with their own repos.
- Don't commit `.dns-backup-*.json` (already gitignored).
- Don't add the `Co-Authored-By: Claude` trailer. Really.
- Don't flatten the editorial voice into something "clearer." The voice is the point.
