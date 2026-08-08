# B2 Rollout Gold Standard

Status: **B2 rollout started on `agent/b2-rollout-gold`**.

Base branch: `agent/b1-rollout-gold`.

The B2 branch is intentionally stacked on the B1 source milestone because `main` has not yet absorbed the A2/B1 Gold rollout. No work in this branch should be merged directly to stale `main` without integrating the earlier milestones first.

## 1. Canonical-content lock

The active `src/data/.../b2/.../pages.ts` file is the canonical application source.

For every B2 story chapter, rollout work must preserve:

- story `content`
- chapter `id`, `type`, `title`, boundaries, and order
- `image`
- `audioUrl`
- hotspot `id`, `x`, and `y`
- `animatedWords`
- `syncPoints`
- `timedChunks`

Hotspot title/description, vocabulary, exercises, guides, assessment pages, and metadata are derived learning content and may be improved only when the canonical chapter supports the change.

## 2. B2 is not B1 with longer text

B2 learning material should regularly require:

- evidence-based inference
- comparison across events or chapters
- evaluation of choices and consequences
- chronology/development across a longer narrative
- nuanced vocabulary and meaning in context
- distinguishing stated fact from interpretation
- synthesis across several chapters
- justified short explanations
- identifying credible misunderstandings rather than absurd distractors

Direct recall remains useful for reinforcement, but it must not dominate the book.

## 3. B2 assessment contract

The active repository quality specification requires:

- Review Challenge: **8 objective questions**
- Final Challenge: **10 objective questions**

The rollout also uses:

- Knowledge Check: **8 objective questions**
- dedicated Final Challenge set rather than an empty/random fallback
- broad whole-book coverage
- explanation and useful retry feedback for every scored item
- stable answer-position balance for multiple-choice sets

## 4. Chapter Quick Challenge runtime constraint

`CONTENT_QUALITY_SPEC.md` recommends 3–5 items for B2 chapter Quick Challenges.

The current `StoryPage.tsx` runtime exposes only `page.exercises[0]` on mobile and desktop. Therefore the current B2 rollout uses **one visible, high-value B2 Quick Challenge per chapter** rather than silently authoring hidden exercises.

The visible item should prioritize inference, cause/result, comparison, evaluation, context, or evidence when supported by the chapter.

A future multi-item StoryPage UI can expand the chapter activity count without changing canonical story prose.

## 5. Vocabulary and glossary

B2 vocabulary should prioritize nuanced, academic, historical, and topic-specific language actually supported by the application data.

Working target:

- **5–7** useful Word Notes per story chapter when defensible definitions already exist
- safety floor: **4** when the chapter does not contain enough reviewed definitions
- no invented definition merely to meet a count
- **10** Vocabulary in Context pairs when a dedicated page exists
- two balanced Master Glossary sections with **at least 18 reviewed entries each**

## 6. Historical/religious attribution safety

B2 texts sometimes contain source attributions, traditional reports, historical reconstruction, literary interpretation, or Sûfî/metaphorical framing.

Derived learning material must distinguish:

- what the canonical chapter explicitly states
- what the chapter attributes to sources or a named person
- what is a text-supported interpretation
- what is open reflection

Do not make a disputed historical reconstruction more certain in a hotspot, question, explanation, Teacher Guide, or Self-Study Guide than the canonical chapter itself makes it.

For Yunus Emre, literary/Sûfî claims require explicit chapter/Yunus attribution framing in newly authored learning copy.

For Mecca/Bilal and other oppression narratives, do not increase graphic detail in derived copy.

## 7. Teacher Guide contract

Every story chapter must have one aligned Teacher Guide section.

A finalized section should contain:

- realistic timing
- at least three measurable objectives
- B2 reading/analysis purpose
- usable lesson sequence
- discussion questions
- differentiation/support
- assessment evidence
- guidance for the visible Quick Challenge

Unsupported worksheet/handout/resource claims must be removed unless the resource actually exists.

Guide chapter numbers/titles must align with the active canonical B2 story sequence.

## 8. Self-Study Guide contract

Every story chapter must have one learner-facing Self-Study section aligned to the active canonical sequence.

B2 independent study should include:

- preview and prediction
- read/listen/reread
- annotation and evidence finding
- vocabulary in context
- cause/consequence or comparison
- summary and paragraph writing
- inference/evaluation
- reflection clearly separated from factual recall
- retry/reread route after a weak answer

Whole-book student-guide text must describe the actual number and sequence of canonical chapters.

## 9. B2 PDF inheritance

B2 inherits the validated A2/B1 print system rather than introducing a third visual language:

- A4 portrait
- current Gold safe margins
- exact 4:5 chapter image
- single-flow story prose
- Word Notes after prose
- Quick Challenge after Word Notes
- no answer leakage
- no story-font reduction below 12 pt simply to force one page
- intentional two-page chapter fallback when needed

B2 is expected to use the two-page fallback more often than B1 because the canonical prose is generally longer.

## 10. Moses B2 English pilot

Moses B2 English is the first B2 reference pilot.

Initial source audit found:

- 24 canonical story chapters
- 20 Teacher Guide chapter sections
- 20 chapter-level Self-Study sections
- whole-book Self-Study text says the learner will study 20 chapters
- Knowledge Check = 6 questions
- Vocabulary Challenge = 6 pairs
- Master Glossary = 12 + 12 entries
- Review page exists but requires Gold audit
- Final Challenge page exists but currently has no dedicated questions
- many chapter Quick Challenges are direct-detail recall rather than B2 inference/evaluation
- several historical reconstructions are explicitly qualified in canonical prose and must not be strengthened by derived learning copy

The pilot must resolve these mismatches without modifying canonical story prose.

## 11. Validation strategy

B2 rollout will add a dedicated validator before the pilot is labelled complete.

Required gates once implemented:

```bash
npm run validate:b2-rollout
npm run typecheck
npm run build
```

Representative B2 PDFs must then be rendered to PNG and visually inspected for long-chapter pagination, clipping, RTL, poem/quotation handling, Word Notes placement, and Quick Challenge flow.

GitHub Actions are not required and must not be triggered merely for rollout validation.

## 12. Deployment rule

`agent/b2-rollout-gold` is a source-development branch only.

- do not merge directly to stale `main`
- do not update `production`
- do not deploy from this branch
- do not trigger GitHub Actions without explicit user approval
