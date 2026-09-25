# Stories project instructions

## Scope and work style
- Work only on the user's requested scope.
- Inspect the relevant files before making claims or edits.
- Search by path, symbol, component, or book first. Do not scan the whole repository unless the task truly requires it.
- Reuse existing architecture and patterns. Make the smallest correct change.
- Do not refactor unrelated code, add speculative abstractions, or add dependencies unless required.
- Do not create temporary reports, helper docs, or scratch files unless requested. Remove temporary files before finishing.
- For small, clear tasks, implement directly. For broad or risky changes, inspect first and make a short plan.
- Do not use agent teams. Use a subagent only when an isolated investigation would otherwise flood the main context.
- Keep working responses concise.

## Project architecture
- React 19 + TypeScript + Vite.
- Firebase/Storage provides media through compatibility manifests.
- Production is a Vite build served by the Cloud Run runtime.
- `src/` contains the application and book data.
- `public/` contains static assets.
- `scripts/validation/` contains technical validation and media diagnostics.
- Older Blueprint/Gold layers are migration debt. Do not extend them or create new pedagogical generation layers.
- Target direction: locked story + manually authored learning content -> shared renderer.

## Protected content
- Story prose, chapter identity/order, approved references, narration, and timing data are protected source material.
- Never silently rewrite, simplify, paraphrase, merge, split, reorder, or "improve" protected story text.
- Learning content is manually authored. Code may structure and render it, but must not generate or rewrite it.
- Before editing exercises, assessments, Word Notes, Teacher Guides, or Self-Study Guides, read the relevant story/chapter and `docs/MANUAL_CONTENT_AUTHORING_STANDARD.md`.
- Do not load the manual authoring standard for unrelated frontend, styling, infrastructure, or bug-fix work.
- For Teacher Guide or Self-Study Guide visual/PDF work, also read `docs/GUIDE_VISUAL_STANDARD.md`.
- Review English and Arabic independently against their own story source.
- Approved content changes only through an intentional manual edit.

## Validation
Use the narrowest meaningful checks for the change:
- `npm run typecheck` for TypeScript/code changes.
- `npm run validate` when content, registry, bundle integrity, or deploy checks are relevant.
- `npm run build` when the change can affect production build/runtime.
Technical checks do not replace manual pedagogical review.

## Context efficiency
- Open only files needed for the task.
- Do not repeatedly reread unchanged files.
- Do not load large docs, generated output, media inventories, or asset trees unless they are relevant.
- Prefer one focused investigation and one focused implementation pass over repeated broad exploration.
