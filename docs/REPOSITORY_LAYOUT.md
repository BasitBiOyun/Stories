# Repository Layout

Production source is concentrated in a small set of top-level areas:

- `src/` — application, book registry and book data
- `public/` — static assets required by the app
- `scripts/validation/` — technical build/media diagnostics only
- `docs/MANUAL_CONTENT_AUTHORING_STANDARD.md` — single pedagogical authoring standard
- `docs/GUIDE_VISUAL_STANDARD.md` — guide visual/UI rules
- `deploy/` — Cloud Run server
- `Dockerfile` and `cloudbuild.preview.yaml` — preview/production image and deployment pipeline

## Target book layout

The preferred book/level layout is direct and manually authored:

```text
src/data/<story>/<level>/
  story.en.ts
  story.ar.ts
  exercises.en.ts
  exercises.ar.ts
  teacherGuide.en.ts
  teacherGuide.ar.ts
  selfStudyGuide.en.ts
  selfStudyGuide.ar.ts
  metadata.ts
  index.ts
```

Equivalent grouping is acceptable when it improves readability, but each learning surface must have one obvious source of truth.

## Learning files

Reviewed exercises, language work and guides live with their book/level source files. Shared learning modules exist only for active cross-book policy, validation, page roles, source pairing, guide assembly and UI finalization.

Legacy Blueprint/Gold layers have been removed. Do not recreate parallel generated-learning layers.

## Story protection

Story source remains locked. Pedagogical cleanup must not rewrite story prose unless a separate explicit story correction is approved.
