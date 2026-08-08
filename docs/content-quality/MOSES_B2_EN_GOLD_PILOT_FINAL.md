# Moses B2 English — Gold Pilot Final

Branch: `agent/b2-rollout-gold`

Status: **source pilot complete; local execution gate pending**

Canonical source remains `src/data/moses/b2/en/pages.ts`.

No canonical story page was edited by this pilot.

## Final pilot scope

The pilot now provides an effective Gold layer for all **24 canonical Moses B2 English story chapters**.

Protected fields remain read-only:

- page id/type/title/order
- story prose
- image
- audioUrl
- animatedWords
- syncPoints
- timedChunks
- hotspot id/x/y geometry

Derived learning content is supplied through the Gold layer.

## Learning changes

### Quick Challenges

Before: many chapter items were direct-detail recall.

After: all 24 chapters use one visible B2 multiple-choice Quick Challenge centred on evidence, inference, cause/result, comparison, interpretation, or evaluation where the canonical chapter supports it.

The one-item chapter count is an explicit runtime compromise: current `StoryPage.tsx` exposes only `page.exercises[0]`. The source quality specification recommends 3–5 B2 items, but authoring hidden exercises would not benefit learners.

Every Gold Quick Challenge includes:

- three plausible options
- one valid answer
- explanation
- evidence-oriented retry feedback
- deterministic answer-position rotation

Static answer-position distribution is balanced **8 / 8 / 8** across the 24 chapter Quick Challenges.

### Knowledge / Review / Final

Before:

- Knowledge Check = 6 true/false
- Review = mixed activity collection, not the required objective set
- Final Challenge = no dedicated questions

After:

- Knowledge Check = **8 objective questions**
- Review Challenge = **8 objective questions**
- Final Challenge = **10 dedicated objective questions**

The questions sample the whole narrative rather than only the closing chapters.

### Vocabulary and glossary

- chapter Word Notes: reviewed 4–7 safety range, targeting 5–7 when defensible definitions already exist
- Vocabulary Challenge: **10 pairs**
- Master Glossary: **18 + 18 minimum**
- no definition is invented solely to satisfy a count

## Guide audit — important correction

The original B2 guide layer contained 20 sections while the canonical book now contains 24 story pages.

The first Gold implementation inserted four historical sections and shifted the old twenty guide labels by +4. A second semantic audit found that this was not sufficiently safe: some canonical page titles and current prose boundaries do not line up cleanly with the older guide’s assumptions. A mechanically shifted guide could therefore have the correct chapter number/title while teaching evidence that actually belongs to a neighbouring page.

The final pilot does **not** rely on that blind remap.

### Teacher Guide final state

All 24 Teacher Guide sections are generated from:

1. the actual canonical page,
2. that page’s current vocabulary,
3. the approved Gold evidence/analysis question for the same page.

Each section now contains:

- 55-minute lesson structure
- four measurable B2 objectives
- evidence-first pedagogy
- B2 relationship/evidence language
- page vocabulary pronunciation focus
- before/during/after reading sequence
- three chapter-aligned discussion prompts
- fast-finisher extension
- struggling-learner claim/evidence frame
- Quick Challenge retry/reread guidance
- formative rubric and exit evidence

Unsupported worksheet/resource claims are absent.

### Self-Study Guide final state

All 24 chapter-level Self-Study sections use the same canonical page + Gold evidence focus.

The independent routine requires:

- preview
- first read for gist
- second read for evidence
- contextual Word Notes
- Quick Challenge
- reread/retry after a weak answer
- claim-evidence-explanation writing
- explicit separation of text-based interpretation from open reflection

The long-form learner guide now states **24 chapters** and reaches Chapter 24.

A follow-up audit also found that the structured/card Self-Study UI still contained the legacy phrase `Review 20 chapters`. The final Gold layer changes this to `Review 24 chapters`, and a dedicated validator now guards both the long-form and structured guide surfaces.

## Historical/religious safety

The pilot preserves the qualification level of the canonical text instead of silently increasing certainty.

Key example: Chapter 2 asks learners to notice the canonical phrases indicating historical uncertainty about the Exodus chronology and Pharaoh identification. The derived question explicitly tests the difference between probability and certainty.

No canonical historical or religious claim is rewritten in place.

## Validation added

`npm run validate:b2-pilot` now runs:

1. `validateMosesB2GoldPilot.ts`
2. `validateMosesB2StudentGuide.ts`

Static contracts cover:

- canonical story-field preservation
- hotspot geometry preservation
- 24 visible chapter Quick Challenges
- valid objective structure and answer balance
- Word Notes range/duplicates
- Knowledge 8
- Vocabulary 10
- Glossary >=18 + >=18
- Review 8
- Final 10
- Teacher Guide 24
- Self-Study Guide 24
- exact chapter-label parity
- no unsupported Teacher Guide resources
- 24-chapter long-form learner guide
- 24-chapter structured learner-guide UI
- Teacher/Self-Study evidence focus aligned to the same Gold Quick Challenge question
- historical uncertainty preserved

## Repository diff safety

Compared with `agent/b1-rollout-gold`, the B2 pilot branch adds only B2 Gold overlays, validators, documentation, package-script wiring, and Moses B2 index wiring.

`src/data/moses/b2/en/pages.ts` is **not** in the changed-file list.

## Runtime status

The GitHub connector cannot execute the private repository npm gate, and GitHub Actions were deliberately not triggered.

Required local gate:

```bash
npm run validate:b2-pilot
npm run typecheck
npm run build
```

Until those commands execute successfully, the correct status is:

**Moses B2 English source pilot complete — runtime/build verification pending.**

## Next rollout step

After the local pilot gate passes:

1. Moses B2 Arabic parity
2. Adam B2
3. Abraham B2
4. Mecca B2 with sensitive-content review
5. Yunus Emre B2 with explicit attribution framing
6. full `validate:b2-rollout`
7. B2 PDF stress test and visual pagination QA

No merge to stale `main`, no production deployment, and no GitHub Actions run are part of this pilot milestone.
