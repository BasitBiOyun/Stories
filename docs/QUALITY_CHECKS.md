# Quality Checks

One command runs the complete gate:

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

## CI policy

The repository uses one workflow file: `.github/workflows/quality.yml`. It runs install, canonical validation, content validation, guide validation, typecheck, and build.
