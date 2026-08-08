# B1 Rollout Manifest

Branch: `agent/b1-rollout-gold`

Base: `agent/a2-rollout-gold`

## Rollout scope

| Book | EN | AR | Story chapters | Gold layer | Notes |
|---|---|---|---:|---|---|
| Adam B1 | implemented | implemented | 12 | `src/data/adam/b1/gold.ts` | existing analytical chapter material retained; assessment/glossary/guide contract normalized |
| Abraham B1 | implemented | implemented | 13 | `src/data/abraham/b1/gold.ts` | existing B1 reasoning questions retained as chapter-grounded source bank |
| Moses B1 | implemented | implemented | 13 | `src/data/moses/b1/gold.ts`, `goldFinal.ts`, `rollout.ts` | English is manually curated reference pilot; Arabic uses common rollout contract |
| Mecca B1 | implemented | implemented | 15 | `src/data/mecca/b1/gold.ts` | historical/social material remains source-grounded; no canonical prose changes |
| Yunus Emre B1 | implemented | implemented | 13 | `src/data/yunusEmre/b1/gold.ts` | derived learning copy uses explicit attribution framing for Sûfî/metaphorical ideas |

## Shared contract

Every finalized B1 language variant targets:

- exactly one Quick Challenge per story chapter
- Knowledge Check: 8 objective questions
- Review Challenge: 8 objective questions
- Final Challenge: 10 dedicated objective questions
- chapter Word Notes: target 4–5; safety floor 3 when no defensible additional definition exists
- Vocabulary in Context: 10 pairs where the page exists
- two balanced Master Glossary sections with at least 18 reviewed items each
- one Teacher Guide section per story chapter
- one Self-Study Guide section per story chapter
- no unsupported Teacher Guide worksheet/link/resource claims

## Canonical lock

The rollout does not intentionally modify canonical story files. Finalized overlays must preserve story:

- id/type/title/order
- prose/content
- image
- audio URL
- animated words
- sync points
- timed chunks
- hotspot ids and coordinates

Derived learning content is allowed to differ.

## Validation gate

Primary local command:

```bash
npm run validate:b1-rollout
```

Release-quality gate:

```bash
npm run validate:b1-rollout
npm run typecheck
npm run build
```

GitHub Actions are intentionally not required for this rollout.

## PDF status

B1 inherits the fixed A2 print design system. The approved pagination policy is readability-first: a long B1 chapter may flow to a second A4 page at the same readable body size instead of shrinking canonical prose.

A Moses B1 fit sample already demonstrated that representative short/medium/long B1 chapters fit the inherited geometry without requiring a new visual design.

The rollout now also includes a shared EN/AR B1 chapter renderer:

- `scripts/pdf-pilot/buildB1ChapterSample.ts`
- `scripts/pdf-pilot/b1-sample.css`
- `docs/B1_PRINT_DESIGN_SYSTEM.md`
- npm command: `pdf:b1-sample`

It accepts `B1_BOOK`, `B1_LANGUAGE`, and `B1_CHAPTER_IDS`, reads effective finalized BookData, renders with pinned Vivliostyle 11.1.0, and writes PNG renders for visual QA. The renderer keeps the A2 Gold safe area, readable body-size floor, exact 4:5 image treatment, Word Notes flow, and print-native Quick Challenge conversion.

Full assembled Student Book / Teacher Guide / Self-Study Guide masters for every B1 book remain a publication build step after the common content/type/build gate is executed locally. They do not require another content rewrite.

## Merge readiness definition

B1 is ready to merge only when all of the following are true:

1. `validate:b1-rollout` passes.
2. TypeScript typecheck passes.
3. Production build passes.
4. Representative B1 PDF pages are visually checked for clipping, overlap, broken image ratio, answer leakage, and bad page breaks.
5. No canonical story diff is present outside the derived rollout layer.
