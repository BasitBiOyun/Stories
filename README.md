# Stories — Interactive Language and Values Library

Stories is an English/Arabic A2, B1 and B2 interactive educational library for classroom and self-study use. It includes narration, visuals, Word Notes, exercises, Teacher Guides and Self-Study Guides.

## Canonical content rule

Story prose, chapter identity/order, approved quotations/references, narration and timing data are protected source material. Technical or learning-system work must not silently rewrite them. See `docs/CONTENT_IMMUTABILITY.md`.

## Learning architecture

All current story-level books use the same reviewed pipeline:

`raw story pages -> source locks -> manual Learning Blueprint -> shared Blueprint compiler -> runtime pages/guides`

The Blueprint owns objectives, evidence, vocabulary targets, authored assessment items and guide pedagogy. The shared engine owns placement, counts, EN/AR parity and structural validation.

## Commands

```bash
npm ci
npm run dev
npm run validate
npm run build
```

Level gates are also available separately as `validate:a2`, `validate:b1` and `validate:b2`.

## Repository

- `src/`: production application and book data
- `src/data/*Blueprint*`: shared learning architecture
- `scripts/validation/`: active validation and diagnostics
- `docs/`: current architecture, authoring and quality standards
- `deploy/`: Cloud Run runtime server
- `Dockerfile`: validated production image build
- `cloudbuild.preview.yaml`: `preview` branch Cloud Build -> Cloud Run deployment

## Adding a book

1. Add approved raw EN/AR story pages without rewriting canonical prose.
2. Add source-lock/highlight configuration.
3. Author a manual A2/B1/B2 Learning Blueprint from the actual story evidence.
4. Register the book and media paths.
5. Add the book to the appropriate level Blueprint validator.
6. Run `npm run validate` and `npm run build`.

## PDF status

The previous PDF generation/publication implementation has been retired. PDF download controls remain visible in the application but are temporarily locked until a new publication system is designed from scratch.

## Preview deployment

The `preview` branch is connected to Cloud Build through `cloudbuild.preview.yaml`. The Docker image runs the full repository validation gate before the Vite production build and deploys the resulting runtime image to the `stories-preview` Cloud Run service.
