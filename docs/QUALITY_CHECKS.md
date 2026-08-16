# Quality Checks

The repository-wide source gate is:

```bash
npm run validate
```

It runs the complete A2, B1 and B2 Blueprint validators followed by TypeScript typecheck.

## Level validators

- `npm run validate:a2` — all five A2 books in EN/AR
- `npm run validate:b1` — all five B1 books in EN/AR
- `npm run validate:b2` — all five B2 books in EN/AR

The level validators enforce chapter counts, source protection, same-chapter evidence, Blueprint-owned Word Notes and Quick Challenges, stage counts, duplicate-learning-point guards, Tap-Reveal policy, EN/AR parity, guide timing/content and book-specific safeguards.

## Build

`npm run build` creates the Vite production bundle. `npm run validate:bundle` is available after a build for the initial JavaScript budget check.

The Docker image runs `npm run validate && npm run build` before producing the runtime image. A failing Blueprint validator or typecheck therefore blocks Cloud Run deployment.

## Preview CI/CD

There is no GitHub Actions quality workflow. Preview deployment is handled by the external Google Cloud Build trigger for the `preview` branch using `cloudbuild.preview.yaml`. Cloud Build builds the Docker image, pushes it to Artifact Registry and deploys `stories-preview` to Cloud Run.

## Other active diagnostics

- `npm run audit:media`
- `npm run diagnose:b2-highlight-pairs`
- `npm run canonical:generate` only when intentionally refreshing the canonical baseline
