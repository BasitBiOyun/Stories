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

The B1 content layer inherits the fixed A2 print design system. The approved pagination policy is readability-first: a long B1 chapter may flow to a second A4 page at the same readable body size instead of shrinking canonical prose.

A Moses B1 fit sample has already demonstrated that representative short/medium/long B1 chapters fit the inherited system without requiring a new visual design. Full per-book PDF master generation remains a local publication/build gate, not a content rewrite step.

## Merge readiness definition

B1 is ready to merge only when all of the following are true:

1. `validate:b1-rollout` passes.
2. TypeScript typecheck passes.
3. Production build passes.
4. Representative B1 PDF pages are visually checked for clipping, overlap, broken image ratio, answer leakage, and bad page breaks.
5. No canonical story diff is present outside the derived rollout layer.
