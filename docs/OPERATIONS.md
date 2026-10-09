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
1. Cloud Build → Triggers → Create: source `kitapkomisyonukonya/Stories`, event "Push to a branch", branch `^prod$`, configuration file `cloudbuild.prod.yaml`, same service account as the preview trigger.
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

## The content panel
`/panel` is the library's management panel (docs/CONTENT.md). It opens the app itself: a click on
any text, exercise, word note, picture or hotspot opens it for editing, and the change shows in the
app at once. Pictures and recordings are uploaded or re-narrated there, Places & People cards,
book names and visibility, the team and new books too. It works in two ways:

- **Preview link only** (no `PANEL_TEAM`): sent only to a browser that opened `?gizli=<PREVIEW_KEY>`
  once. It only reads; a changed file can be downloaded. Not served at all without `PREVIEW_KEY`.
- **Team panel** (`PANEL_TEAM` set): Google sign-in; the server lets in only the team. The owners
  in `PANEL_TEAM` keep their role and cannot be removed from the panel; everyone else is added, changed and removed in the panel
  ("Ekip"), stored in Storage `panel-state/team.json`. So a later admin never needs this setting.

Settings on the Cloud Run service (never in the repository):

| Variable | What it holds |
|---|---|
| `PANEL_TEAM` | JSON of the owners: `{"name@example.com": "admin"}`. Roles: `admin` (approves and publishes), `editor`, `teacher` (change any book), `translator` (translations only), `viewer` (reads only). |
| `PANEL_GITHUB_TOKEN` | From Secret Manager. A fine-grained token for this repository only: Contents read/write, Pull requests read/write, Actions read. Without it the team can sign in and read, not save. |
| `PANEL_BASE_BRANCH` | Where published changes go, `preview` by default. |
| `PANEL_RELEASE_BRANCH` | Optional, e.g. `prod`: shows "go live" in the panel, which moves that branch to the tested preview. |
| `PANEL_REPO`, `PANEL_BUCKET` | The repository and the Storage bucket, with the current ones as defaults. |

How a change travels: Save → the change goes to the person's own basket (branch
`panel/sepet-<id>` with a pull request) and the tests run on it; nothing is built yet. An admin
looks at the basket in "Onay bekleyenler" and publishes it: the whole basket becomes **one** commit
on the preview (one build), named after what changed, who made it and who approved it. Pictures and
recordings wait in Storage `panel-uploads/` and replace the book's files only when published.
"Geçmiş" lists every published change and puts its undo in a basket. Every action is also written
to the service log as `[Panel] ...`.

New books: the panel reads the Word file in the browser and pushes its text (never the .docx) to a
`panel/yeni-kitap-*` branch. That push starts `.github/workflows/yeni-kitap.yml`, where Claude
writes the hidden book by `.github/yeni-kitap/talimat.md` and the checks run on the result. It
needs the repository secret `CLAUDE_CODE_OAUTH_TOKEN` (made once with `claude setup-token`).

Local trial without GitHub or Storage: `PANEL_DEMO=1 node deploy/server.mjs` after a build (never
on Cloud Run): everything is kept in memory.

Firebase needs, once: Authentication → Sign-in method → Google switched on, and the app's address
added under Authentication → Settings → Authorized domains. Storage rules must keep `panel-state/`
closed (publish `storage.rules`).

## Firebase Storage
- Rules live in `storage.rules`. Reading and listing are public (the app lists chapter folders); writing from browsers is closed. `tts-state/` is private.
- Publish after a change: `npx firebase-tools deploy --only storage` (logged in with an owner account), or paste the file into Firebase console → Storage → Rules.
- The Firebase web API key in `src/lib/firebase.ts` is public by design. Limit it in GCP console → APIs & Services → Credentials: API restrictions to Cloud Storage for Firebase, Identity Toolkit API and Token Service API (the panel's sign-in needs the last two), and HTTP referrers to the app's own addresses.
- Many chapter pictures at once (a redrawn book): put each picture on R2 at `media-queue/<storage path>`, list it in `media/image_requests.json` with its SHA-256 and the Storage file it replaces, and push to `preview`. The build's `image-requests` step replaces the files in place (same name, new download token, like a panel publish); pictures already in place are skipped. Single pictures still go through the panel.
- App Check is not on yet. Turning on enforcement before the app sends App Check tokens would stop every picture and audio file, so it needs an app change first (reCAPTCHA Enterprise key + `initializeAppCheck`).

## Dependencies
- Dependabot (`.github/dependabot.yml`) opens weekly update PRs against `platform-v2`.
- `npm audit --omit=dev` must stay at 0. Only `@firebase/app` and `@firebase/storage` are used from Firebase; do not add the `firebase` meta package back (it brings Firestore and gRPC).

## Content checks in every build
`npm run build` runs `validate:content` (the shape of every book and guide file) and
`validate:rules` (the house rules for English text), as well as the older vocabulary and exercise
validators. `npm run report:content` prints what the library holds today.

## Security checks before a release
Tools are installed per session with `bash /mnt/project-files/araclar/kur.sh` (project files):
- `npm audit --omit=dev`
- `detect-secrets scan` over `src deploy scripts` and the git history
- `semgrep scan --config <semgrep-rules>/javascript --config <semgrep-rules>/typescript --metrics=off src deploy`
