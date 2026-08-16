# Architecture

## Runtime

1. The UI selects a story and CEFR level.
2. `bookRegistry` dynamically loads that level module.
3. The book module starts from protected raw EN/AR pages.
4. Source locks ground hotspots and Word Notes in same-chapter prose.
5. A reviewed manual Learning Blueprint supplies objectives, evidence, authored assessments and guides.
6. The level Blueprint system compiles Quick, Knowledge, Vocabulary (where present), Review, Glossary and Final surfaces with EN/AR parity.
7. Storage manifests resolve published media without mutating canonical book data.

## Content boundary

Canonical story prose, chapter identity/order, approved references, narration and timing data are protected. Exercises, vocabulary support and guides are derived learning material, but every factual or interpretive claim must remain traceable to the relevant chapter.

## Shared learning system

A2, B1 and B2 use the same Blueprint compiler with level policies in `learningLevelPolicy.ts`. Manual authoring decides what is taught; the engine only validates and places reviewed material.

## Deployment

The production artifact is a Vite build served by the Node runtime in `deploy/server.mjs` inside Cloud Run. The Docker build runs `npm run validate` before `npm run build`. The preview branch is deployed by Google Cloud Build using `cloudbuild.preview.yaml`.

## Storage and future integrations

Firebase Storage remains the media source through compatibility manifests. Learner identity/progress is not coupled to the content model, so future institutional adapters can be added without rewriting books.
