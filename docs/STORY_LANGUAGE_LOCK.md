# Story Language Lock

This rule is the permanent source-language gate for story-page hotspots and highlighted words.

## Source of truth

For every story page, the only normal language source for hotspots and highlighted words is that exact chapter's `content` field in the same language.

English must be validated against the English chapter. Arabic must be validated independently against the Arabic chapter. Do not create English material and translate it into Arabic as a shortcut.

## Hotspot rules

These rules apply to A2, B1, and B2.

1. A normal hotspot description must be a short direct extract from the same chapter. Do not rewrite a clear source sentence into a new sentence merely to sound more polished.
2. A hotspot title must be short and chapter-anchored. Prefer roughly one to four words that occur as a phrase in the same chapter.
3. Do not introduce passive constructions, relative clauses, abstract labels, academic phrasing, harder vocabulary, symbolism, interpretation, moral commentary, or new factual information that the chapter itself does not use or state.
4. A hotspot must never borrow language or facts from another chapter.
5. Prefer concrete visual anchors from the chapter: a person, place, object, action, or directly stated event.
6. Prefer one short source sentence. Do not join separate chapter sentences into a newly written explanation when one existing sentence is enough.
7. The hotspot's job is to connect what the learner sees in the illustration to what the learner has just read. It is not a mini teacher note.
8. English and Arabic hotspot copy are sourced independently from their own chapters. English hotspot wording must never be translated into Arabic as a shortcut.

Examples of unsupported interpretive language include words such as `symbolizes`, `represents`, `reflects`, `demonstrates`, `emphasizes`, `signifies`, and equivalent Arabic wording when those expressions are not already in the chapter.

### Level handling

The source rule is the same at every level; only the amount of language may grow modestly with the level.

- A2: keep the hotspot especially short and concrete. The A2 runtime uses `src/data/a2HotspotSourceLock.ts` as an additional source gate.
- B1: normal descriptions are direct chapter extracts, with a maximum target length of 34 words. Runtime BookData uses the shared `src/data/storyHotspotSourceLock.ts` gate.
- B2: normal descriptions follow the same direct-extract rule, with a maximum target length of 42 words. The same shared gate is the required B2 mechanism when B2 rollout is applied.

### Place-name exception

A city, region, river, mountain, or similar place name may receive a short level-appropriate factual clarification even when the exact clarification is not written in the chapter, but only as a deliberately reviewed named exception.

This exception is narrow:

1. The place name itself must be anchored to the same chapter.
2. The clarification must be short, factual, neutral, and appropriate for the book's CEFR level.
3. It must be explicitly registered in the central source-lock configuration; do not use the exception to reopen general paraphrasing.
4. If no reviewed place exception exists, the normal direct-source rule applies.

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

- hotspot titles are anchored to the same chapter and remain short;
- normal hotspot descriptions are direct extracts from the same chapter;
- unsupported interpretive language is rejected;
- `vocabulary[].word` occurs in the same chapter;
- `animatedWords[]` occurs in the same chapter;
- highlight density stays bounded by level;
- English and Arabic are checked independently;
- new/unclassified books cannot bypass the lock.

A2 additionally uses its approved runtime source map. B1 and B2 use the shared source-lock mechanism so derived hotspot cleanup cannot silently drift back into paraphrase later.

## Staged migration safety

The 15 existing level-books predate this rule and contain known violations. They were migrated in stages and are governed by `lockedStoryLanguageBooks` once promoted.

Migration order for the current rollout:

1. A2: all five books, English + Arabic.
2. B1: all five books, English + Arabic.
3. B2: all five books, English + Arabic.
4. Final 30-variant audit.

New books are not permitted to enter the legacy list. They must be added directly as locked books and pass strict validation from their first commit.

## Canonical content protection

Canonical story prose, chapter order, images, audio, sync/timing data, and other locked story assets are not normal editing surfaces.

Only an unmistakable non-semantic defect may be corrected after explicit approval: for example a clear typo, a missing possessive, a plainly wrong word order, broken quotation punctuation, or repeated accidental whitespace. Such a correction must not add, remove, reinterpret, simplify, or expand story meaning. Any mirrored timed-text string affected by that exact correction should be kept consistent without changing timing values.

Hotspot/highlight cleanup by itself never authorizes a prose rewrite.
