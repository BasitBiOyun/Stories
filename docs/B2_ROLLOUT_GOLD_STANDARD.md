# B2 Rollout Gold Standard

Status: **source rollout complete on `agent/b2-rollout-gold`; runtime execution gate pending**.

Base branch: `agent/b1-rollout-gold`.

The B2 branch is intentionally stacked on the B1 source milestone because `main` has not yet absorbed the A2/B1 Gold rollout. Do not merge this branch directly to stale `main` without first integrating the earlier milestones.

## 1. Canonical-content lock

The active `src/data/.../b2/.../pages.ts` file is the canonical application source.

For every B2 story chapter, rollout work preserves:

- story `content`
- chapter `id`, `type`, `title`, boundaries, and order
- `image`
- `audioUrl`
- hotspot `id`, `x`, and `y`
- `animatedWords`
- `syncPoints`
- `timedChunks`

Hotspot title/description, vocabulary, exercises, guides, assessment content, and metadata are derived learning material and may be improved only when supported by the corresponding canonical book/language.

No canonical story page may be retyped, inserted, removed, or reordered merely to satisfy a derived-learning template.

## 2. B2 cognitive standard

B2 is not B1 with longer prose. Gold learning material regularly uses:

- evidence-based inference
- cause/consequence
- comparison across events or ideas
- evaluation of choices and interpretations
- chronology and development
- nuanced vocabulary in context
- distinguishing fact, attribution, inference, and reflection
- synthesis across chapters
- justified short explanations
- credible distractors representing plausible misunderstandings

Direct recall remains useful for reinforcement but does not dominate the Gold set.

## 3. Assessment contract

The repository quality specification requires:

- Review Challenge: **8 objective questions**
- Final Challenge: **10 objective questions**

Where the canonical page structure already contains a dedicated Knowledge Check page, Gold also standardizes it to:

- Knowledge Check: **8 objective questions**

Where a canonical Knowledge page does **not** exist, the rollout does not create or retype a page to force one. Abraham B2 is the current example: pages 1–35 are narrative chapters, page 36 is canonical References, page 37 is Review, pages 38–39 are Glossary, and page 40 is Final. Page 36 therefore stays References and Abraham uses Review 8 + Final 10 without an invented Knowledge page.

Other assessment rules:

- dedicated Final Challenge questions rather than empty/random fallback
- broad whole-book coverage
- explanation and useful retry feedback for every scored item
- deterministic answer-position rotation for MC sets
- wrong/weak answers point the learner back to relevant evidence

## 4. Quick Challenge runtime reconciliation

`CONTENT_QUALITY_SPEC.md` recommends 3–5 B2 Quick Challenge items per chapter.

Current `StoryPage.tsx` exposes only `page.exercises[0]` on mobile and desktop. The present rollout therefore uses **one visible high-value B2 Quick Challenge per story chapter** rather than authoring hidden exercises the learner cannot reach.

The visible question prioritizes inference, cause/result, comparison, evaluation, source framing, context, or evidence where supported by the chapter.

A later multi-item StoryPage UI may increase the visible count without touching canonical prose.

## 5. Shared B2 implementation

Common rollout code:

- `src/data/b2GoldFactory.ts`
- `src/data/b2GoldGuides.ts`

The factory provides:

- canonical-safe page overlays
- one visible Quick Challenge per current runtime
- Review 8 / Final 10 and Knowledge 8 when a dedicated page exists
- deterministic MC option rotation
- vocabulary normalization using reviewed definitions already present in the book
- 10 Vocabulary-in-Context pairs where a dedicated vocabulary page exists
- two Master Glossary sections targeting at least 18 reviewed entries each

The guide builder creates one Teacher Guide and one Self-Study section directly from each effective canonical story page and its actual Gold Quick Challenge. This avoids stale chapter-number remapping.

## 6. Vocabulary and glossary

B2 vocabulary prioritizes nuanced, academic, historical, literary, and topic-specific language actually supported by application data.

Working rule:

- target 4–7 useful Word Notes per chapter where reviewed definitions are available
- a lower count may remain when the canonical book has no defensible reviewed addition
- never fabricate a dictionary definition merely to meet a quota
- 10 vocabulary pairs where the canonical book has a dedicated vocabulary page
- two balanced Master Glossary sections with at least 18 reviewed entries each

Important print/application rule: highlighted/animated vocabulary must use definitions from approved application data; the PDF renderer must not invent definitions.

## 7. Historical/religious/cultural safeguards

Derived material distinguishes:

- what the canonical chapter explicitly states
- what the chapter attributes to sources, a narration, a scholar, a named person, or a theory
- what is a text-supported interpretation
- what is open reflection

Do not make historical reconstruction more certain than the canonical text. Phrases such as `some sources`, `according to another narration`, `probably`, `widely accepted view`, and `exact date unknown` remain meaningful in B2 questions and explanations.

### Yunus Emre

Sûfî, mystical, literary, and metaphorical claims must remain explicitly attributed to Yunus Emre, a poem, a named theory, or the chapter. This applies to newly authored:

- hotspot descriptions
- Quick Challenges
- assessment questions/explanations
- Teacher Guide
- Self-Study Guide
- interpretive glossary definitions

Do not convert concepts such as vahdet-i vücut or the heart as “the throne of the Lord” into unqualified creed statements.

### Mecca / oppression narratives

Do not amplify graphic detail involving slavery, physical abuse, hunger, boycott, warfare, or vulnerable people. Derived material should focus on:

- dignity
- justice
- vulnerability/protection
- social/economic structure
- causes and consequences
- the chapter’s stated message

Suffering must not become game-like or shock-value distractor content.

## 8. Teacher Guide contract

Every canonical story chapter has one aligned Teacher Guide section.

A finalized section contains:

- realistic timing
- at least three measurable objectives
- B2 reading/analysis purpose
- usable lesson sequence
- discussion prompts
- differentiation/support
- formative assessment evidence
- explicit Quick Challenge reread/retry guidance

Unsupported worksheet/handout/resource claims are removed unless the resource actually exists.

## 9. Self-Study Guide contract

Every canonical story chapter has one learner-facing Self-Study section aligned to the same page.

The independent routine includes:

- preview/prediction
- read or listen for gist
- reread and annotate
- evidence finding
- vocabulary in context
- cause/consequence or comparison
- summary/paragraph writing
- inference/evaluation
- reflection separated from factual recall
- retry/reread after a weak or incorrect answer

Whole-book structured and long-form guide copy must state the actual canonical chapter count and actual assessment structure.

## 10. Book-specific rollout contracts

### Moses B2 — EN + AR

- 24 story chapters
- legacy Teacher/Self-Study 20 → 24
- Knowledge 6 → 8
- Vocabulary 6 → 10
- Glossary 12+12 → >=18+18
- Review → 8 objective
- Final empty → 10 dedicated objective
- historical-caution guard on Exodus chronology/Pharaoh identification

### Adam B2 — EN + AR

- 17 story chapters
- legacy Teacher Guide 3 broad sections → 17 chapter sections
- Knowledge 6 → 8
- Review → 8 objective
- Glossary 12+12 → >=18+18
- Final → 10 evidence-supported objective
- source-framing safeguards for estimated chronology and the unidentified forbidden tree

### Abraham B2 — EN + AR

- 35 narrative chapters
- page 36 References preserved exactly
- no dedicated Knowledge page invented
- Review 8
- Glossary >=18+18
- Final 10
- Teacher/Self-Study 35/35
- safeguards for birthplace/date uncertainty, attributed narrations, and chapter-specific historical/religious framing

### Mecca B2 — EN + AR

- 17 story chapters
- Knowledge 8 / Review 8 / Final 10
- Glossary >=18+18
- Teacher/Self-Study 17/17
- systems-level questions across geography, trade, class, tribal protection, religion, and power
- non-graphic safeguards for slavery/oppression/boycott material
- women’s social position represented as varied by class/status as the chapter states

### Yunus Emre B2 — EN + AR

- 13 narrative chapters
- page 14 References preserved
- Knowledge 8 / Vocabulary 10 / Review 8 / Final 10
- Glossary >=18+18
- Teacher/Self-Study 13/13
- explicit attribution across hotspot/exercise/guide/interpretive glossary copy
- historical violence discussed through consequence rather than graphic amplification

## 11. B2 PDF inheritance

B2 inherits the A2/B1 Gold print language:

- A4 portrait
- Gold safe margins
- 4:5 chapter image
- single-flow story prose
- Word Notes after prose
- Quick Challenge after Word Notes
- no answer leakage
- no story-font reduction below 12 pt simply to force one page
- intentional continuation page when content exceeds the safe page area

B2 is expected to require continuation pages more often than B1. More pages are preferable to smaller type.

Representative long chapters must be rendered to PNG and visually inspected for clipping, RTL behavior, poem/quotation handling, Word Notes placement, and Quick Challenge flow before release.

## 12. Validation gate

Full source validator:

```bash
npm run validate:b2-rollout
```

Release gate:

```bash
npm run validate:b2-rollout
npm run typecheck
npm run build
```

The B2 rollout is not runtime-verified until these commands pass in a real repository checkout.

GitHub Actions are not required for this gate and must not be triggered merely for rollout validation.

## 13. Deployment rule

`agent/b2-rollout-gold` is a source-development branch only.

- do not merge directly to stale `main`
- do not update `production`
- do not deploy from this branch
- do not trigger GitHub Actions without explicit user approval
