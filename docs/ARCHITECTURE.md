# Architecture

## Objectives

- Preserve the current interface and reading flow.
- Keep canonical chapter text and narration immutable.
- Load only the selected story-level bundle.
- Add books without adding story-specific React state or Firebase code.
- Keep the current frontend-only deployment model.

## Runtime flow

1. `HomePage` returns a story id and CEFR level.
2. `useBookBundle` finds one entry in `bookRegistry`.
3. The registry dynamically imports only that level module.
4. `storageAssetLoader` resolves optional media from the compatibility manifest.
5. Resolved media is applied to cloned view models; canonical `BookData` objects are never mutated.
6. `App.tsx` renders the same existing reader components.

## Content layers

### Canonical layer

Protected fields on story pages:

- page id and order
- story page type
- title and subtitle
- chapter content
- narration URL references

### Derived learning layer

Reviewable and replaceable without touching canonical text:

- exercises and feedback
- vocabulary definitions and activities
- Quick Challenges and Final Challenges
- teacher and self-study guides
- achievement and summary presentation

## Storage layer

Storage manifests preserve all current folders as compatibility candidates. The resolver tries candidates in order, caches results, and returns chapter-number maps. No Storage migration is required for this refactor.

## Future institutional integration

Progress and identity are deliberately not coupled to Firebase Auth or Firestore. An EBA/e-Devlet adapter can be introduced later without changing the book content model.
