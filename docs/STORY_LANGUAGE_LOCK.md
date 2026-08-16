# Story Language Lock

This is the permanent source-language rule for story hotspots and Word Notes across A2, B1 and B2.

## Source of truth

English material is grounded in the English chapter and Arabic material independently in the Arabic chapter. A normal hotspot or Word Note must not borrow wording/facts from another chapter or from the other language version.

## Hotspots

Hotspot titles stay short and chapter-anchored. Normal descriptions use direct same-chapter wording rather than newly invented interpretation. Do not add symbolism, moral commentary, historical/religious claims or harder academic paraphrase unless the exact idea is already in the chapter or is an explicitly reviewed narrow exception.

Hotspot ids and coordinates are structural UI data and must not drift during source cleanup.

## Word Notes

Every runtime Word Note word/phrase must occur in the same chapter. Select useful level-appropriate items from actual chapter language; do not create related synonyms or abstract labels just to increase vocabulary count.

The Blueprint owns the final runtime Word Note list. Glossaries derive from those final chapter targets.

## Runtime enforcement

Source protection is implemented through the level/source utilities including `storyHotspotSourceLock.ts`, `a2HotspotSourceLock.ts`, the A2/B1/B2 highlight standards and the story-language locks. The level Blueprint validators verify raw/source/runtime protected fields, prose-attested Word Notes and EN/AR parity.

Run the current gate with:

```bash
npm run validate
```

All 15 current level-books are migrated; there is no staged legacy rollout list to maintain.

## Canonical protection

Hotspot/highlight cleanup never authorizes a story-prose rewrite. Canonical prose, chapter identity/order, images, narration and timing data are protected unless a separate explicit source correction is approved.
