# Stories Quality & Alignment Standard v2

This is the Ministry/Gold pedagogical quality contract for Stories.

The project is aligned explicitly with the Türkiye Yüzyılı Maarif Modeli (TYMM) while keeping a stable universal learning core so that curriculum-code changes do not invalidate the pedagogy.

## Core architecture

`story evidence -> universal learning outcome -> TYMM/CEFR alignment -> learning experience -> assessment evidence -> diagnostic feedback -> reinforcement/transfer -> Teacher Guide -> Self-Study Guide`

TYMM is the official alignment layer. Universal learning outcomes are the durable pedagogical layer. CEFR is the international language-level reference for A2, B1 and B2.

A TYMM code never owns the assessment. The learning outcome owns the assessment; the current TYMM mapping can therefore be updated later without rewriting the underlying evidence, question or feedback.

## Migration rule

Legacy v1 blueprints remain runtime-compatible.

A book opts into the strict quality gate by declaring:

```ts
qualityContractVersion: '2.0'
```

From that moment the blueprint cannot compile unless every chapter satisfies the v2 contract. This allows books to be migrated one at a time without weakening the live application.

A legacy book can be technically valid while still not being Ministry/Gold-ready. Gold status requires v2 migration plus human pedagogical review.

## Chapter Learning Map

Every v2 chapter requires explicit learning outcomes. Each outcome must contain:

- bilingual objective
- observable success criteria
- at least one stable universal competency
- CEFR alignment at the book level
- TYMM alignment with at least one direct alignment
- official TYMM code and official Turkish label
- direct official reference URL
- bilingual rationale
- bilingual observable learner behaviour

The chapter must also define explicit language targets. Reading, listening/viewing, speaking, writing, vocabulary, grammar and pronunciation are selected only when genuinely activated by that chapter.

## TYMM alignment policy

Alignment strength is one of:

- `direct`: the learner visibly performs the referenced skill/component in the learning task
- `supporting`: the component meaningfully supports learning but is not the main assessed construct

Every learning outcome requires at least one direct TYMM alignment. Attractive but unobservable thematic associations are not valid alignment.

Supported TYMM domains are:

- programme learning outcomes
- foreign-language field skills
- foreign-language supporting skills
- conceptual skills
- cross-curricular field skills
- dispositions
- social-emotional learning
- literacy
- values

Official source references must point to `https://tymm.meb.gov.tr/...`.

Primary TYMM foreign-language references include:

- YDAB1 Dinleme/İzleme-Anlamlandırma
- YDAB2 Okuma-Anlamlandırma
- YDAB3 Konuşma-Anlatma
- YDAB4 Yazma-Anlatma
- YDDB1 Dil Bilgisi Seçme-Kullanma
- YDDB2 Sözcük Seçme-Kullanma
- YDDB3 Sesletim Seçme-Kullanma

Reference: https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri

## CEFR alignment policy

CEFR alignment records:

- exact project level: A2, B1 or B2
- communication mode: reception, production, interaction or mediation
- CEFR scale/category reference
- bilingual project-specific can-do statement
- rationale
- direct Council of Europe source URL

Official source references must point to the Council of Europe (`coe.int`). The project does not present an adapted can-do statement as a verbatim official CEFR descriptor.

Primary reference: https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors

## Stable universal competency layer

The internal competency layer is curriculum-independent and includes, when relevant:

- explicit comprehension
- main idea
- sequencing
- cause/effect reasoning
- character and motivation
- comparison
- inference from evidence
- evidence selection/use
- evidence vs interpretation
- claim qualification
- synthesis
- vocabulary/grammar/pronunciation in context
- spoken/written communication
- mediation of meaning
- reflection/self-regulation
- transfer/application

This is the durable pedagogical backbone. TYMM and CEFR mappings sit on top of it.

## Constructive alignment gate

Every assessable chain must be connected:

`learning outcome -> same-chapter evidence -> assessment item -> success evidence -> misconception target -> diagnostic feedback`

The validator rejects a v2 item when:

- its learning outcome is missing
- its evidence point is not linked to that same outcome
- assessment quality metadata is missing
- purpose or success evidence is missing
- misconception targets are missing
- authored feedback is missing
- runtime feedback differs from the authored feedback contract
- EN/AR exercise types diverge

Every v2 learning outcome must have both chapter evidence and at least one assessment.

## Assessment integrity

In addition to existing one-learning-point/one-assessment and question-diversity rules, v2 mechanically rejects:

- duplicate multiple-choice option text
- an invalid multiple-choice answer index
- duplicate matching left values
- duplicate matching right values
- matching sets with fewer than two pairs
- fill-blank exercises without `[blank]`
- EN/AR exercise-type mismatch

This specifically prevents ambiguous matching patterns such as two different left-side concepts mapping to the same right-side response.

Semantic quality still requires human review: a validator cannot determine whether a distractor is educationally intelligent or whether a TYMM mapping is genuinely defensible.

## Feedback contract

Generic feedback is not v2-compliant.

Each assessment requires authored feedback in both languages:

- correct feedback must confirm the reasoning and explain the evidence connection
- incorrect feedback must diagnose the likely misunderstanding and redirect the learner without merely revealing the answer
- an authoring rationale must explain why the feedback repairs the target misconception

The user-facing runtime feedback must be the exact feedback approved in the assessment quality contract.

## Teacher Guide contract

Every v2 Teacher Guide chapter, in both English and Arabic, must explicitly cover all chapter learning outcomes and include:

- objectives
- prior knowledge
- anticipated misconceptions
- pre-reading
- while-reading
- post-reading
- expected learner responses
- formative assessment
- transfer task
- teacher reflection prompt

Existing lesson-plan, discussion, differentiation, assessment and language-focus fields remain available. The new fields prevent a generic reusable skeleton from being accepted as Gold quality.

A Teacher Guide passes the human quality review only when an experienced teacher can use it to improve the lesson without inventing missing pedagogy.

## Self-Study Guide contract

Every v2 Self-Study Guide chapter, in both languages, must cover all chapter outcomes and contain:

- objectives
- at least six explicit study-sequence steps
- at least two self-check prompts
- misconception/repair strategy
- transfer task
- reflection prompt

The intended learning flow is:

`orient -> predict -> read/listen -> notice -> find evidence -> check -> repair -> retrieve -> produce -> reflect`

The exact sequence can vary by chapter and level; it must not become an empty template.

## Level expectations

### A2

Core demand: understand, notice, connect and express simply.

Use explicit comprehension, sequence, concrete cause/effect, key vocabulary in context and short controlled production. Avoid unsupported abstraction and trivia-only assessment.

### B1

Core demand: explain, relate, infer and support.

Use main idea, cause/result, motivation, comparison, text-supported inference and claim -> evidence -> explanation.

### B2

Core demand: analyse, evaluate, qualify and synthesise.

Use evidence selection, evidence vs interpretation, comparison of explanations, source/qualification awareness, inference and evidence -> interpretation -> qualification.

The level policy remains in `src/data/learningLevelPolicy.ts`; v2 quality metadata makes the intended cognitive demand explicit per assessment.

## Human review remains mandatory

The validator verifies structure, traceability and mechanical integrity. It cannot certify semantic truth by itself.

Human review must still answer:

- Is this truly the chapter's most important learning?
- Is the TYMM mapping defensible rather than decorative?
- Is the CEFR demand appropriate?
- Does the question actually measure the declared outcome?
- Are distractors plausible misconceptions rather than nonsense?
- Does feedback improve the learner's next attempt?
- Are Teacher/Self-Study Guides genuinely chapter-specific?
- Does the complete book form a coherent learning progression?

## Gold / Ministry-ready release gate

A book can be considered a Gold candidate only after:

1. source integrity
2. EN/AR semantic parity
3. v2 Learning Map validation
4. TYMM alignment review
5. CEFR level review
6. assessment-quality review
7. semantic-duplication review
8. distractor review
9. feedback review
10. vocabulary curation
11. Teacher Guide review
12. Self-Study Guide review
13. historical/religious/source-discipline review where applicable
14. runtime QA
15. final human pedagogical approval

Passing TypeScript or automated validators is necessary but never sufficient for Ministry-ready status.
