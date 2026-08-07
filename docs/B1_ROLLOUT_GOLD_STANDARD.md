# B1 Rollout Gold Standard

Status: Pilot established with **Moses B1 English** on `agent/b1-rollout-gold`.

## 1. Canonical-content lock

The active `src/data/.../pages.ts` file remains the canonical source.

For every B1 story chapter, rollout work must preserve:

- story `content`
- chapter `id`, `type`, `title`, and boundaries/order
- `image`
- `audioUrl`
- hotspot `id`, `x`, and `y`
- `animatedWords`
- `syncPoints`
- `timedChunks`

DOCX/source files may be used for reference only. They do not override active application data.

## 2. What B1 rollout may improve

Derived learning content may be revised when supported by the canonical chapter:

- chapter Word Notes / vocabulary
- hotspot title and description copy
- chapter Quick Challenge
- Knowledge Check
- Vocabulary in Context
- Master Glossary
- Review Challenge
- Final Challenge
- Teacher Guide
- Self-Study Guide
- learner/teacher metadata

No new religious or historical claim may be introduced merely to make an activity more interesting.

## 3. B1 cognitive level

B1 must not be A2 with harder words.

A B1 learner should regularly work with:

- cause and effect
- sequencing across several events
- character motivation supported by evidence
- contrast and comparison
- meaning from context
- simple inference
- short summaries and explanations
- identifying the sentence or event that supports an answer

Questions can still test important facts, but a rollout dominated by literal true/false recall is not B1 Gold quality.

## 4. Moses B1 English pilot contract

The pilot uses 13 story chapters and establishes these learning-material targets:

- one chapter-specific Quick Challenge per story chapter
- Quick Challenge feedback sends a wrong answer back to relevant story evidence
- 4–5 useful B1 Word Notes items per story chapter
- Knowledge Check: **8 objective questions**
- Vocabulary in Context: **10 reviewed pairs**
- Master Glossary: two reasonably balanced sections
- Review Challenge: **8 objective questions**
- Final Challenge: **10 dedicated objective questions** covering the whole story
- Teacher Guide: one section per story chapter
- Self-Study Guide: one section per story chapter

The 8/8/10 count is retained for product consistency, but the cognitive demand is deliberately higher than A2: more cause/effect, comparison, evidence, and inference.

## 5. Hotspot standard

Every hotspot is checked for:

1. B1 language suitability
2. importance to the current chapter
3. support in the canonical chapter
4. religious/historical attribution safety

Coordinates are protected. Copy is changed only when the existing text fails one of these checks.

For the Moses B1 English pilot, the existing hotspot copy was found sufficiently chapter-grounded, so coordinates and copy were retained rather than rewritten for the sake of producing a diff.

## 6. Teacher Guide standard

Teacher Guide sections should be professional, chapter-specific, and immediately usable.

They may include:

- measurable objectives
- pedagogy and language focus
- a realistic lesson sequence
- discussion prompts
- differentiation
- assessment/exit-ticket ideas
- use of existing interactive features

They must not claim that a worksheet, handout, link, or resource exists unless that resource is actually supplied in the repository or explicitly identified as something the teacher should create.

The Moses B1 pilot retained the already strong chapter-specific guide and removed unsupported worksheet/resource claims.

## 7. Self-Study Guide standard

Self-Study material is learner-facing, not a shortened Teacher Guide.

It should tell the learner what to do in concrete steps: read/listen, notice vocabulary, return to evidence, summarize, and reflect. Pedagogical jargon should be avoided.

The existing Moses B1 English Self-Study Guide already follows this pattern closely and was retained after audit.

## 8. Validation

Run:

```bash
npm run validate:b1-rollout
npm run typecheck
npm run build
```

The B1 rollout validator must fail if protected story fields or hotspot coordinates change, assessment counts drift, chapter-guide parity breaks, vocabulary becomes empty/thin, or unsupported Teacher Guide resources are reintroduced.

## 9. Pilot implementation

Moses B1 English is implemented through `src/data/moses/b1/gold.ts` rather than rewriting canonical story prose.

This overlay currently improves:

- 13 chapter Quick Challenges
- chapter vocabulary selection/definitions
- Knowledge Check
- Vocabulary in Context
- Master Glossary source set
- Review Challenge
- dedicated Final Challenge
- Teacher Guide resource hygiene

Arabic is intentionally not modified by this English pilot. Once the pilot is accepted as the B1 reference, the same contract can be applied to Moses B1 Arabic and the remaining B1 books without translating unsupported material or altering canonical story fields.
