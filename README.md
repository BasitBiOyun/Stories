# Stories — Interactive Language and Values Library

Stories is a frontend-first interactive educational library prepared for classroom and self-study use. It presents graded English and Arabic storybooks at A2, B1, and B2 levels with narration, visuals, vocabulary support, exercises, teacher guides, self-study guides, PDF export, and achievement feedback.

The current delivery model does not require learner accounts or a database. Firebase Storage is used only for published media assets. Future institutional integrations such as EBA or e-Devlet are intentionally outside the current architecture.

## Non-negotiable content rule

Canonical story text, chapter titles and boundaries, chapter order, and published narration audio are protected. Technical refactors must not change them. Exercises, vocabulary activities, Quick Challenges, Final Challenges, guide alignment, and achievement presentation are derived learning materials and are reviewed separately.

See [`docs/CONTENT_IMMUTABILITY.md`](docs/CONTENT_IMMUTABILITY.md).

## Requirements

- Node.js 22
- npm 10+
- Access to the configured Firebase Storage project for media loading

## Commands

```bash
npm ci
npm run dev
npm run typecheck
npm run validate
npm run build
npm run quality
```

`npm run quality` is the single local gate used by the GitHub workflow. It verifies canonical content, content structure, guide structure, TypeScript, and the production build.

## Architecture

```text
src/
  core/
    content/          Registry, contracts, exercise standards
    storage/          Firebase Storage manifests and resolver
  hooks/              Generic book-loading orchestration
  data/               Canonical and derived book data
  components/         Existing user-facing components
scripts/
  validation/         Automated content and guide checks
docs/                 Authoring and architecture documentation
```

Each story-level module is loaded dynamically through the book registry. The application no longer needs story-specific imports, state variables, or Firebase fetch functions in `App.tsx`.

## Adding a future book

1. Add the story pages, exercises, teacher guide, and self-study guide under `src/data/<story>/<level>/<language>/`.
2. Keep the supplied chapter text exactly as approved.
3. Add one lazy registry entry in `src/core/content/bookRegistry.ts`.
4. Add existing Storage folder candidates in `src/core/storage/storageManifests.ts`.
5. Run `npm run quality`.
6. Submit exercise and guide quality changes separately from canonical text ingestion.

Detailed instructions are in [`docs/CONTENT_AUTHORING.md`](docs/CONTENT_AUTHORING.md).

## Deployment

The app is a Vite static frontend. No server process is required for the current version. Firebase web configuration is public client configuration; access control for media is governed by Firebase rules and project settings rather than secrecy of the client API key.
