#!/usr/bin/env bash
# Uploads the rebuilt book PDFs in public/pdfs/books/ to the Cloudflare R2 bucket the app links to
# (README, "Book PDFs"). Usage: bash scripts/r2/upload-pdfs.sh [file.pdf ...]  (default: every PDF there)
# Needs a Cloudflare API token with R2 edit rights on the account: CLOUDFLARE_API_TOKEN, or a proxy that
# adds it (as in the Claude cloud environment).
set -euo pipefail
ACCOUNT=0ce6476c2bfced681b210fe72389c9dd
BUCKET=from-language-to-culture
API="https://api.cloudflare.com/client/v4/accounts/$ACCOUNT/r2/buckets/$BUCKET/objects"
AUTH=()
[ -n "${CLOUDFLARE_API_TOKEN:-}" ] && AUTH=(-H "Authorization: Bearer $CLOUDFLARE_API_TOKEN")
cd "$(dirname "$0")/../.."
files=("$@")
[ ${#files[@]} -eq 0 ] && files=(public/pdfs/books/*.pdf)
failed=0
for f in "${files[@]}"; do
  key="books/$(basename "$f")"
  code=$(curl -sS -o /dev/null -w '%{http_code}' -X PUT "$API/$key" "${AUTH[@]}" \
    -H 'Content-Type: application/pdf' --data-binary @"$f")
  if [ "$code" = 200 ]; then echo "ok   $key"; else echo "FAIL $key ($code)"; failed=$((failed + 1)); fi
done
[ "$failed" -eq 0 ] || { echo "$failed upload(s) failed"; exit 1; }
