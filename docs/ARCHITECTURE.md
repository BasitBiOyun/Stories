# Architecture

## Runtime

1. The UI selects a story and CEFR level.
2. `bookRegistry` loads that book module.
3. The book module supplies approved story pages and manually authored learning material.
4. Shared UI components render story pages, exercises, Teacher Guide and Self-Study Guide.
5. Storage manifests resolve published media without rewriting book content.

## Content boundary

Canonical story prose, chapter identity/order, approved references, narration and timing data are protected.

Derived learning material is manually authored from the story:

- Quick Challenges
- Knowledge Check
- Vocabulary Challenge
- Retrieval Review
- Final Challenge
- Teacher Guide
- Self-Study Guide

The authoritative pedagogical rules are in `MANUAL_CONTENT_AUTHORING_STANDARD.md`.

## Shared code boundary

Shared code owns structure and presentation only. It may define or render:

- page/navigation structure
- supported interaction types
- fixed activity/question counts
- scoring behaviour
- guide heading structure
- technical UI behaviour

Shared code must not decide or generate the learning point, question wording, answer, distractors, vocabulary importance, chapter pedagogy, misconceptions or guide prose.

## Legacy migration

Some current books still use older Blueprint/Gold compilation layers at runtime. They remain temporarily only because those books have not yet been flattened into direct authored files.

These layers are migration debt. Do not extend them or use them for new authoring. As each book/level receives its final manual review, move the approved output into direct source files and remove that book’s Blueprint/Gold transforms.

Target direction:

`locked story + manual exercises + manual Teacher Guide + manual Self-Study Guide -> shared renderer`

not:

`story -> generator -> Gold transform -> quality transform -> override -> runtime`

## Deployment

The production artifact is a Vite build served by the Node runtime in `deploy/server.mjs` inside Cloud Run.

Deployment checks are technical only: TypeScript, production build and bundle integrity. Pedagogical approval is a manual authoring/review decision.

## Storage and future integrations

Firebase Storage remains the media source through compatibility manifests. Learner identity/progress is not coupled to the content model, so future institutional adapters can be added without rewriting books.
