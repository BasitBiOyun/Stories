# Repository Layout

Production source is intentionally concentrated in a small set of top-level areas:

- `src/` — application, book registry, canonical/source layers and Learning Blueprints
- `public/` — static assets required by the app/publication pipeline
- `scripts/validation/` — active Blueprint, media, canonical and bundle checks
- `scripts/pdf-pilot/` — active Adam A2 runtime publication builders; despite the historical folder name, the Docker image currently depends on this subset
- `docs/` — current architecture, authoring, quality, storage and print standards
- `deploy/` — Cloud Run server
- `Dockerfile` and `cloudbuild.preview.yaml` — preview/production image and deployment pipeline

Root-level story copies, migration reports, one-off comparison/alignment scripts, old Gold rollout files and internal pilot skill folders are not part of the application architecture and should not be reintroduced.

Raw story source remains under each `src/data/<story>/<level>/<language>/` module. Reviewed source locks and manual `learningBlueprint.ts` files sit beside the corresponding book-level runtime entrypoint.
