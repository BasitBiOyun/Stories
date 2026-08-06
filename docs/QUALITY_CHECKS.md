# Quality Checks

One command runs the complete local structural gate:

```bash
npm run quality
```

## Canonical validation

Hashes and identities of story pages are compared with `scripts/validation/canonical-baseline.json`. Technical work fails when story text, chapter identity/order, or narration references change.

## Content validation

Checks include:

- duplicate registry entries
- missing or duplicate page ids
- missing titles and invalid content types
- invalid hotspot coordinates
- duplicate exercise ids
- missing answers or feedback
- English/Arabic story-page alignment warnings
- level-specific Final Challenge target warnings

## Guide validation

Checks include:

- missing chapter labels
- duplicate labels
- missing objectives, lesson plans, or discussion prompts
- guide/story page count differences
- level metadata mismatches

Guide mismatches are initially reported as warnings so existing books continue to build. They will be resolved during the dedicated derived-content quality phase.

## Browser regression validation

The single GitHub workflow also runs the production build in Chromium and checks:

- password gate behavior
- all 15 story and CEFR-level combinations
- English and Arabic switching
- forward and backward page navigation
- first-page narration availability and media response
- existing standalone exercise pages
- book PDF generation
- teacher and self-study guide overlays and PDFs
- mobile reader navigation
- pixel comparison against the current `main` interface

Books that do not yet contain a standalone exercise page are reported as derived-content warnings rather than technical runtime failures. Those gaps belong to the later educational-quality phase.

## CI policy

The repository uses one workflow file: `.github/workflows/quality.yml`. It runs installation, production dependency audit, canonical validation, content validation, guide validation, typecheck, production build, bundle budget, runtime checks, and visual regression evidence generation.
