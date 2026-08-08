# B2 Rollout Manifest

Branch: `agent/b2-rollout-gold`

Status: **all current B2 EN+AR source rollouts implemented; runtime/typecheck/build/PDF visual gates pending**.

Base: `agent/b1-rollout-gold`.

## Shared rules

- canonical `pages.ts` story prose and protected runtime fields stay read-only
- one visible B2 Quick Challenge per current StoryPage runtime
- Review = 8 objective
- Final = 10 objective
- Knowledge = 8 where a dedicated canonical Knowledge page exists
- no page is invented/retyped to force a Knowledge Check
- two Master Glossary sections target >=18 reviewed entries each
- Vocabulary Challenge = 10 pairs where a dedicated canonical vocabulary page exists
- Teacher Guide and Self-Study Guide map directly to actual canonical story pages
- EN/AR use equivalent learning objectives but are grounded independently in their own canonical text

## Book matrix

| Book | EN | AR | Story contract | Assessment contract | Guide contract | Special safeguards |
|---|---|---|---|---|---|---|
| Moses B2 | Gold | Gold | 24 story chapters | K8 / V10 / R8 / F10 | Teacher 24 / Self 24 | Exodus chronology/Pharaoh historical caution |
| Adam B2 | Gold | Gold | 17 story chapters | K8 / R8 / F10 | Teacher 17 / Self 17 | source attribution for chronology; forbidden-tree limits |
| Abraham B2 | Gold | Gold | 35 narrative chapters + References 36 | R8 / F10; no invented K page | Teacher 35 / Self 35 | birthplace/date uncertainty; narrations; chapter-grounded claims |
| Mecca B2 | Gold | Gold | 17 story chapters | K8 / R8 / F10 | Teacher 17 / Self 17 | slavery/oppression/boycott non-graphic handling; status nuance |
| Yunus Emre B2 | Gold | Gold | 13 narrative chapters + References 14 | K8 / V10 / R8 / F10 | Teacher 13 / Self 13 | Sûfî/metaphorical attribution across hotspots/exercises/guides/glossary |

## Shared source files

- `src/data/b2GoldFactory.ts`
- `src/data/b2GoldGuides.ts`

## Moses B2

Gold files include:

- `src/data/moses/b2/goldLearning.ts`
- `src/data/moses/b2/goldLearningAr.ts`
- `src/data/moses/b2/goldGuideFinal.ts`
- `src/data/moses/b2/goldGuideFinalAr.ts`
- `src/data/moses/b2/gold.ts`
- `src/data/moses/b2/index.ts`

Validators:

- `scripts/validation/validateMosesB2GoldPilot.ts`
- `scripts/validation/validateMosesB2StudentGuide.ts`
- `scripts/validation/validateMosesB2GoldArabic.ts`

## Adam B2

Gold files:

- `src/data/adam/b2/gold.ts`
- `src/data/adam/b2/goldAr.ts`
- `src/data/adam/b2/index.ts`

Validators:

- `scripts/validation/validateAdamB2Gold.ts`
- `scripts/validation/validateAdamB2GoldArabic.ts`

## Abraham B2

Gold files:

- `src/data/abraham/b2/gold.ts`
- `src/data/abraham/b2/goldAr.ts`
- `src/data/abraham/b2/index.ts`

Validators:

- `scripts/validation/validateAbrahamB2Gold.ts`
- `scripts/validation/validateAbrahamB2GoldArabic.ts`

Canonical structural exception:

- page 36 is References and is preserved
- there is no dedicated Knowledge page
- Gold does not insert/retype a page to create one

## Mecca B2

Gold files:

- `src/data/mecca/b2/gold.ts`
- `src/data/mecca/b2/goldAr.ts`
- `src/data/mecca/b2/index.ts`

Validators:

- `scripts/validation/validateMeccaB2Gold.ts`
- `scripts/validation/validateMeccaB2GoldArabic.ts`

Sensitive-content validator rules prevent derived Chapter 15 exercise copy from amplifying graphic physical-abuse/starvation details when structural discussion of vulnerability, protection, boycott, and pressure is sufficient.

## Yunus Emre B2

Gold files:

- `src/data/yunusEmre/b2/gold.ts`
- `src/data/yunusEmre/b2/goldAr.ts`
- `src/data/yunusEmre/b2/goldAttribution.ts`
- `src/data/yunusEmre/b2/index.ts`

Validator:

- `scripts/validation/validateYunusB2Gold.ts`

Attribution is applied to:

- effective hotspot descriptions
- B2 Quick Challenge questions/explanations
- assessment items sourced from those questions
- Teacher/Self-Study guidance
- interpretive Sûfî glossary/Word Note definitions

## Full validation command

```bash
npm run validate:b2-rollout
```

This runs Moses, Adam, Abraham, Mecca, and Yunus B2 validators.

The global `npm run validate` chain now includes B2 rollout validation.

## Print tooling

- `docs/B2_PRINT_DESIGN_SYSTEM.md`
- `scripts/pdf-pilot/b2-sample.css`
- `scripts/pdf-pilot/buildB2ChapterSample.ts`
- package command: `npm run pdf:b2-sample`

The renderer supports all five books, EN/AR/both, selected chapter ids or all chapters, and outputs PDF + PNG pages for visual QA.

## Remaining release gates

The connector environment has not executed the local commands. Required real-checkout gate:

```bash
npm run validate:b2-rollout
npm run typecheck
npm run build
```

Representative B2 PDF samples must also be rendered and visually inspected.

GitHub Actions are not needed for these gates and must not be triggered without explicit approval.

## Merge/deployment rule

This branch is not production.

- do not deploy
- do not update `production`
- do not merge B2 directly into stale `main`
- integrate the earlier A2/B1 milestones in the correct order first
