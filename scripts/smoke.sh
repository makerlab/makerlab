#!/usr/bin/env bash
#
# Smoke test — boots `next start`, hits every route, and checks that the
# HTML contains the things we care about: right titles, canonical links,
# JSON-LD, sitemap, robots. Catches route breakage and SEO regressions
# without needing Playwright or a headless browser.
#
# Content-agnostic on purpose: this file must not grep for specific
# project names, project slugs, or editable marketing copy. If a future
# content edit renames or removes a project, smoke MUST still pass. It
# pulls a real project route from /sitemap.xml at runtime for the
# project-detail check so it stays slug-independent.
#
# Run locally: `npm run build && bash scripts/smoke.sh`
# CI runs this after `next build`.

set -euo pipefail

PORT="${PORT:-3000}"
BASE="http://localhost:$PORT"

# -- boot next start in background ------------------------------------------
echo "→ starting next on :$PORT"
npx --no-install next start -p "$PORT" >/tmp/next-start.log 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null || true' EXIT

# wait up to 30s for the server to respond
ready=0
for _ in $(seq 1 30); do
  if curl -sf "$BASE" >/dev/null 2>&1; then
    ready=1
    break
  fi
  sleep 1
done
if [ "$ready" -ne 1 ]; then
  echo "✗ server never came up on $BASE"
  echo "--- next start log ---"
  cat /tmp/next-start.log || true
  exit 1
fi
echo "✓ server ready"

# -- helpers ----------------------------------------------------------------
FAIL=0
fail() {
  echo "✗ $1"
  FAIL=1
}

check_status() {
  local path="$1" expected="$2"
  local actual
  actual=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$path")
  if [ "$actual" = "$expected" ]; then
    echo "✓ $path → $expected"
  else
    fail "$path → expected $expected, got $actual"
  fi
}

check_contains() {
  # NB: we write to a tmpfile instead of `body=$(curl ...)` because bash
  # command substitution truncates at NUL bytes, which Next's inlined
  # font/CSS data contains. That bit us — the captured body was ~268
  # bytes short and missed content downstream of the first NUL.
  #
  # Second arg is curl flag ('-sf' or '-s'). -f fails on non-2xx, which
  # we want for normal routes; 404/error pages use -s to still read body.
  local path="$1" needle="$2" label="${3:-$needle}" curl_flags="${4:--sf}"
  local tmpfile
  tmpfile=$(mktemp)
  curl "$curl_flags" "$BASE$path" >"$tmpfile" 2>/dev/null || true
  if grep -qF -- "$needle" "$tmpfile"; then
    echo "✓ $path contains: $label"
  else
    fail "$path missing: $label"
  fi
  rm -f "$tmpfile"
}

# -- routes -----------------------------------------------------------------
echo
echo "→ home"
check_status / 200
check_contains / '<title>Makerlab' 'title'
check_contains / 'rel="canonical"' 'canonical'
check_contains / '"@type":"Organization"' 'Organization JSON-LD'

echo
echo "→ projects index"
check_status /projects 200
check_contains /projects '<title>Index' 'title'
# Structural check: the index must contain at least one project link.
# Doesn't care which projects exist, just that the list renders.
check_contains /projects 'href="/projects/' 'project links present'

echo
echo "→ project detail (first slug pulled from sitemap)"
# Pull a real project route from the sitemap so we don't hardcode any
# slug. If projects get renamed or removed, this still finds a valid
# one to test.
PROJECT_PATH=$(curl -sf "$BASE/sitemap.xml" \
  | grep -oE '/projects/[a-z0-9-]+' \
  | head -1 || true)
if [ -z "$PROJECT_PATH" ]; then
  fail "no project routes found in sitemap"
else
  echo "  (using $PROJECT_PATH)"
  check_status "$PROJECT_PATH" 200
  # Title template is "${project.name} · Makerlab" so every project page
  # should end with "· Makerlab</title>" regardless of name.
  check_contains "$PROJECT_PATH" '· Makerlab</title>' 'title template'
  check_contains "$PROJECT_PATH" '"@type":"CreativeWork"' 'CreativeWork JSON-LD'
fi

echo
echo "→ about"
check_status /about 200
check_contains /about '<title>About' 'title'
check_contains /about 'rel="canonical"' 'canonical'

echo
echo "→ contact"
check_status /contact 200
check_contains /contact '<title>Contact' 'title'
check_contains /contact 'us@makerlab.com' 'primary email'

echo
echo "→ SEO artifacts"
check_status /sitemap.xml 200
check_contains /sitemap.xml 'https://makerlab.com' 'sitemap host'
# Assert the sitemap has at least one project route, without naming it.
check_contains /sitemap.xml '/projects/' 'sitemap includes project routes'
check_status /robots.txt 200
check_contains /robots.txt 'Sitemap: https://makerlab.com' 'robots points at sitemap'

echo
echo "→ 404"
check_status /this-route-does-not-exist-abc123 404
# 404 page returns non-2xx so check_contains needs -s (not -sf).
check_contains /this-route-does-not-exist-abc123 'Mis-filed' '404 title' '-s'

echo
if [ "$FAIL" -ne 0 ]; then
  echo "✗ SMOKE FAILED"
  exit 1
fi
echo "✓ SMOKE OK — all routes and SEO artifacts present"
