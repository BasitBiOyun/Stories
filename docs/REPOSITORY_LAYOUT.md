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

## Legacy files

Existing `learningBlueprint`, `gold`, `Gold*`, `finalPedagogy`, guide-polish and similar runtime files are legacy migration debt where a current book still imports them.

Do not create new layers of this kind.

When a story/level is manually reviewed, flatten its approved exercises and guides into direct authored files, update its `index.ts` to load those files directly, then delete the now-unused Blueprint/Gold files for that book.

## Story protection

Story source remains locked. Pedagogical cleanup must not rewrite story prose unless a separate explicit story correction is approved.
