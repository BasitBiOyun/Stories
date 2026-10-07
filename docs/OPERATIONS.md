# Operations

How the app is built, deployed and kept safe. Keep this file true when any of it changes.

## Branches and environments

| Branch | What happens on push | Address |
|---|---|---|
| `preview` | `cloudbuild.preview.yaml`: narration queues, build, deploy to Cloud Run `stories-preview` | the preview address given to reviewers |
| `prod` | `cloudbuild.prod.yaml`: build and deploy to Cloud Run `stories-prod` (no narration, no Storage changes) | the live address (once set up) |
| any other branch (e.g. `platform-v2`) | nothing: both build files stop at their first step | none |

Work that is not ready for reviewers is done on `platform-v2` and merged into `preview` when it is. A release to the live service is a merge from `preview` into `prod`.

### Setting up `prod` (once, GCP console)
1. Cloud Build → Triggers → Create: source `BasitBiOyun/Stories`, event "Push to a branch", branch `^prod$`, configuration file `cloudbuild.prod.yaml`, same service account as the preview trigger.
2. Create the `prod` branch from `preview` on GitHub. The first push creates the `stories-prod` service.
3. Optional: map the custom domain to `stories-prod` (Cloud Run → Manage custom domains).

Check the preview trigger's branch filter is `^preview$`. Even if it is not, `cloudbuild.preview.yaml` skips every step on other branches.

## Server security (`deploy/server.mjs`)
- Every response: `X-Content-Type-Options`, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`.
- Pages also get a `Content-Security-Policy`. If the app starts loading something from a new host (a font, a video site, an API), add that host to `contentSecurityPolicy` or the browser will block it.
- The app may be framed only by itself and by `*.eba.gov.tr` / `*.meb.gov.tr` (`frame-ancestors`).
- `/media-image` makes WebP copies at fixed widths (480, 800, 1200, 1600, 2000) of pictures in our own bucket only, and at most 60 new conversions per minute per visitor; over the limit the original picture is sent instead.

## Unpublished books
Books in `hiddenStoryCatalog` (`src/core/content/storyCatalog.ts`) are built into `assets/hidden-*.js`.
- Without `PREVIEW_KEY`: those files are served like any other (the books are only hidden from menus). Preview link: `?gizli=1#/<storyId>/<level>/1`.
- With `PREVIEW_KEY` set on the Cloud Run service (Edit & deploy new revision → Variables): the files are sent only to a browser that opened `?gizli=<PREVIEW_KEY>#/<storyId>/<level>/1` once (it keeps a cookie for 30 days). Anyone else gets a 404, so unpublished texts cannot be downloaded.
- Places & People cards of hidden books are still in the shared files; only the story, exercises and guides are protected.

## Firebase Storage
- Rules live in `storage.rules`. Reading and listing are public (the app lists chapter folders); writing from browsers is closed. `tts-state/` is private.
- Publish after a change: `npx firebase-tools deploy --only storage` (logged in with an owner account), or paste the file into Firebase console → Storage → Rules.
- App Check is not on yet. Turning on enforcement before the app sends App Check tokens would stop every picture and audio file, so it needs an app change first (reCAPTCHA Enterprise key + `initializeAppCheck`).

## Dependencies
- Dependabot (`.github/dependabot.yml`) opens weekly update PRs against `platform-v2`.
- `npm audit --omit=dev` must stay at 0. Only `@firebase/app` and `@firebase/storage` are used from Firebase; do not add the `firebase` meta package back (it brings Firestore and gRPC).

## Security checks before a release
Tools are installed per session with `bash /mnt/project-files/araclar/kur.sh` (project files):
- `npm audit --omit=dev`
- `detect-secrets scan` over `src deploy scripts` and the git history
- `semgrep scan --config <semgrep-rules>/javascript --config <semgrep-rules>/typescript --metrics=off src deploy`
