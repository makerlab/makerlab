# Ops

Short runbook for keeping makerlab.com sturdy.

## CI

`.github/workflows/ci.yml` runs on every push to `main` and every PR targeting `main`. It does two things:

1. `npm ci && next build` — catches type errors, build failures, broken imports.
2. `bash scripts/smoke.sh` — boots `next start`, curls every route, asserts:
   - HTTP status (200 for real routes, 404 for unknown)
   - `<title>` matches the per-page template
   - Canonical links present where expected
   - JSON-LD present on home and project pages
   - `sitemap.xml` contains `https://makerlab.com` + project routes
   - `robots.txt` points at the sitemap

Run smoke locally with `npm run smoke` (after `npm run build`).

## Dependabot

`.github/dependabot.yml` opens weekly PRs for npm + github-actions updates. Groups `next`/`react`/`@types/react*` together so they bump in sync. If a Dependabot PR has green CI, it's safe to merge — the smoke test covers regressions.

## Branch protection — **you need to click this**

Code can't enforce this for you; it's a GitHub repo setting. **Go do it once:**

1. Open https://github.com/makerlab/makerlab/settings/branches
2. Click **Add branch ruleset** (or legacy **Add rule**)
3. Branch name pattern: `main`
4. Enable:
   - [x] **Require a pull request before merging**
     - [x] Require approvals → **1** (you or Anselm)
     - [x] Dismiss stale PR approvals when new commits are pushed
   - [x] **Require status checks to pass before merging**
     - [x] Require branches to be up to date before merging
     - Add status check: `Build & smoke test`
   - [x] **Require conversation resolution before merging**
   - [x] **Block force pushes**
5. Save

After this, `git push origin main` directly from a local branch will be rejected. The only way to land code on `main` is via a PR with green CI.

## What to do when CI fails on a Dependabot PR

1. Read the failure — usually `smoke.sh` or `next build`
2. If `next build` fails → the new dep version broke compilation. Pin the old version in `package.json` and comment why.
3. If `smoke.sh` fails on a content check → likely a React/Next SSR behavior change; inspect the route and update the smoke check or fix the regression.
4. If CI is flaky (e.g. the server doesn't come up in 30s) → bump the retry loop in `scripts/smoke.sh`.

## Deploying

Vercel auto-deploys `main` to production. There's nothing to click. Previews happen automatically for every PR.
