# Story Language Lock

This rule is the permanent source-language gate for story-page hotspots and highlighted words.

## Source of truth

For every story page, the only language source for hotspots and highlighted words is that exact chapter's `content` field in the same language.

English must be validated against the English chapter. Arabic must be validated independently against the Arabic chapter. Do not create English material and translate it into Arabic as a shortcut.

## Hotspot rules

1. A hotspot title must use words that already appear in the same chapter.
2. A hotspot description must be a short extract from the same chapter or a very small paraphrase using essentially the same vocabulary.
3. A hotspot must not add symbolism, interpretation, moral commentary, academic explanation, or new factual information that the chapter itself does not state.
4. A hotspot must never borrow language or facts from another chapter.
5. Prefer concrete visual anchors from the chapter: a person, place, object, action, or directly stated event.
6. The hotspot's job is to connect what the learner sees in the illustration to what the learner has just read. It is not a mini teacher note.

Examples of unsupported interpretive language include words such as `symbolizes`, `represents`, `reflects`, `demonstrates`, `emphasizes`, `signifies`, and equivalent Arabic wording when those expressions are not already in the chapter.

## Highlight rules

The UI highlights both `vocabulary[].word` and `animatedWords[]`, so both are covered by this lock.

1. Every highlighted item must actually occur in the same chapter.
2. No cross-chapter highlighted word is allowed.
3. Do not invent a synonym, derived academic term, phrasal verb, or abstract label merely because it is related to the chapter.
4. The chapter is already graded by level; highlighted words must be selected from that chapter's own language so the level does not drift upward.
5. A2 is for middle-school learners and must prioritize concrete, useful, accessible items from the text. B1 remains accessible to roughly grades 8–10. B2 may use the more advanced language that genuinely appears in its own chapter.
6. Keep the highlight set selective rather than marking every difficult expression.

## Automatic validation

Run:

```bash
npm run validate:story-language-lock
```

It is also part of the repository-wide:

```bash
npm run validate
```

The validator checks:

- hotspot titles are anchored to words in the same chapter;
- hotspot descriptions remain lexically close to the same chapter;
- unsupported interpretive language is rejected;
- `vocabulary[].word` occurs in the same chapter;
- `animatedWords[]` occurs in the same chapter;
- highlight density stays bounded by level;
- English and Arabic are checked independently;
- new/unclassified books cannot bypass the lock.

## Staged migration safety

The 15 existing level-books predate this rule and contain known violations. They are therefore frozen by the exact Git blob SHA of both their English and Arabic `pages.ts` files.

A frozen legacy source file cannot be edited casually. To migrate a book:

1. Fix the English and Arabic story pages according to this document.
2. Run the strict Story Language Lock locally.
3. Add that `storyId:level` key to `lockedStoryLanguageBooks` in `scripts/validation/storyLanguageLockPolicy.ts` in the same change.
4. The book is then permanently governed by strict validation instead of the legacy SHA freeze.

Migration order for the current rollout:

1. A2: all five books, English + Arabic.
2. B1: all five books, English + Arabic.
3. B2: all five books, English + Arabic.
4. Final 30-variant audit.

New books are not permitted to enter the legacy list. They must be added directly as locked books and pass strict validation from their first commit.

## Canonical content protection

This lock does not authorize editing canonical story prose, chapter order, images, audio, sync/timing data, or other locked story assets. Its purpose is to constrain derived hotspot/highlight material to the canonical chapter language.
