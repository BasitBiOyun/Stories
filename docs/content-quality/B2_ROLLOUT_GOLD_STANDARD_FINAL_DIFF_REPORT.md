# B2 Rollout Gold Standard — Final Diff Report

Branch: `agent/b2-rollout-gold`

Base milestone: `agent/b1-rollout-gold`

Status: **SOURCE IMPLEMENTATION COMPLETE — LOCAL EXECUTION / TYPECHECK / BUILD / PDF VISUAL GATES PENDING**

This report records the complete B2 Gold source rollout for the currently registered B2 books in English and Arabic.

## 1. Executive summary

B2 Gold has been applied to:

- Adam B2 — English + Arabic
- Abraham B2 — English + Arabic
- Moses B2 — English + Arabic
- Mecca B2 — English + Arabic
- Yunus Emre B2 — English + Arabic

Total: **5 books / 10 effective B2 variants**.

The rollout changes only derived-learning and support layers. The final branch diff against the B1 milestone contains **no canonical B2 `pages.ts` change**.

Protected canonical fields remain outside the rollout write scope:

- story prose/content
- chapter id/type/title/order/boundaries
- image
- audioUrl
- animatedWords
- syncPoints
- timedChunks
- hotspot id/x/y coordinates

Derived layers changed where needed:

- Quick Challenges / chapter exercises
- assessment pages
- vocabulary and glossary
- hotspot explanatory copy where safety/attribution requires it
- Teacher Guides
- Self-Study Guides
- guide metadata
- validators
- PDF print tooling
- rollout documentation

## 2. B2 cognitive shift — before → after → why

### Before

Across the B2 baseline, many chapter questions were still dominated by direct detail retrieval: names, isolated facts, quotation attribution, or simple one-step recall. Some assessment pages had fewer questions than the active contract, thin feedback, or mixed activities where the product needed a stable objective Review/Final set.

### After

Gold chapter and assessment material emphasizes:

- evidence-based inference
- cause and consequence
- motivation and character development
- comparison and contrast
- evaluating how a chapter supports an interpretation
- chronology and development across longer narratives
- distinguishing direct statement, source attribution, inference, and reflection
- nuanced vocabulary in context
- synthesis across chapters

### Why

This matches the active `CONTENT_QUALITY_SPEC.md` B2 profile. B2 should challenge the learner to explain and justify, not merely retrieve.

## 3. Quick Challenge runtime reconciliation

The quality specification recommends 3–5 items for a B2 Quick Challenge.

However, the current `StoryPage.tsx` runtime exposes only `page.exercises[0]` on both mobile and desktop.

Therefore the Gold rollout deliberately uses:

- **one visible, high-value B2 Quick Challenge per canonical story chapter**
- evidence/inference/comparison/cause/evaluation where the chapter supports it
- meaningful explanation
- useful correct feedback
- useful retry feedback that sends the learner back to the text

The rollout does not create hidden learning activities that the current UI cannot expose.

The shared factory was also hardened so it cannot accidentally select an unscored reflection activity as the visible Gold Quick Challenge when an objective MC/TF item is required.

## 4. Cross-book assessment contract

Active contract:

- Review Challenge = **8 objective questions**
- Final Challenge = **10 objective questions**
- Knowledge Check = **8 objective questions when the canonical book already has a dedicated Knowledge page**

Canonical page identity wins over template uniformity.

Abraham B2 has no dedicated Knowledge page: pages 1–35 are narrative chapters, page 36 is References, page 37 Review, pages 38–39 Glossary, and page 40 Final. Gold therefore preserves page 36 as References and does **not** invent or retype a page merely to create a Knowledge Check.

### Effective assessment matrix

| Book | Story chapters | Knowledge | Vocabulary page | Review | Final | Glossary |
|---|---:|---:|---:|---:|---:|---:|
| Moses B2 | 24 | 8 | 10 pairs | 8 | 10 | >=18 + >=18 |
| Adam B2 | 17 | 8 | — | 8 | 10 | >=18 + >=18 |
| Abraham B2 | 35 | No canonical K page | — | 8 | 10 | >=18 + >=18 |
| Mecca B2 | 17 | 8 | — | 8 | 10 | >=18 + >=18 |
| Yunus Emre B2 | 13 | 8 | 10 pairs | 8 | 10 | >=18 + >=18 |

The same structural targets are applied to English and Arabic where the corresponding canonical page exists.

## 5. Shared B2 Gold infrastructure

Added:

- `src/data/b2GoldFactory.ts`
- `src/data/b2GoldGuides.ts`

### Factory responsibilities

The shared factory now handles:

- canonical-safe page overlays
- objective-only visible Quick Challenge selection
- deterministic MC option rotation
- meaningful correct/incorrect feedback
- Knowledge 8 where a canonical Knowledge page exists
- Review 8
- Final 10
- Vocabulary 10 where a canonical vocabulary page exists
- chapter Word Note normalization using reviewed definitions already present in the book
- two >=18-entry glossary sections

Generic feedback such as `Correct!` is upgraded with the actual evidence/explanation rather than left as a non-teaching response.

### Guide builder responsibilities

The guide builder creates one Teacher Guide and one Self-Study Guide section from each actual canonical story page and its effective Gold Quick Challenge.

This directly prevents stale guide-number mapping from drifting away from the real story sequence.

## 6. Moses B2 — major before → after changes

### Before

- 24 canonical story chapters
- Teacher Guide = 20 sections
- Self-Study Guide = 20 sections
- structured/long-form learner copy still described 20 chapters
- Knowledge Check = 6
- Vocabulary Challenge = 6 pairs
- Glossary = 12 + 12
- Review structure did not provide the stable 8-objective contract
- Final page existed without a dedicated 10-question set
- many chapter questions were direct recall

### After

- Teacher Guide = 24/24
- Self-Study Guide = 24/24
- whole-book guide = 24 canonical chapters
- Knowledge = 8
- Vocabulary = 10
- Glossary >=18 + >=18
- Review = 8 objective
- Final = 10 dedicated objective
- 24 evidence/reasoning Quick Challenges

### Historical safety

Chapter 2 preserves the canonical uncertainty around Exodus chronology and Pharaoh identification. The derived material retains wording equivalent to:

- according to sources
- most sources
- probably
- exact date unknown

It does not turn the chapter’s historical reconstruction into certainty.

## 7. Adam B2 — major before → after changes

### Before

- 17 story chapters
- Teacher Guide only 3 broad thematic sections
- Knowledge = 6
- mixed Review page
- Glossary = 12 + 12
- Final had 10 questions but feedback was often extremely thin
- many chapter exercises were recall-oriented

### After

- 17 evidence-based B2 Quick Challenges per language
- Teacher Guide = 17/17
- Self-Study Guide = 17/17
- Knowledge = 8
- Review = 8 objective
- Final = 10 objective with explanation/retry support
- Glossary >=18 + >=18

### Source-framing corrections

Examples:

- estimated early human chronology remains source-attributed rather than presented as a Qur’anic date
- the canonical statement that the Qur’an does not identify the forbidden tree remains explicit
- later scholarly interpretation is kept separate from direct Qur’anic detail
- Satan is not framed as an equal rival to Allah; the chapter’s focus on his enmity toward Adam/humanity is retained

## 8. Abraham B2 — major before → after changes

### Canonical structure preserved

- 35 narrative chapters
- page 36 References
- page 37 Review
- pages 38–39 Glossary
- page 40 Final

Page 36 remains exactly the canonical References page.

### Gold changes

- Teacher Guide = 35/35
- Self-Study Guide = 35/35
- Review = 8 objective
- Final = 10 objective
- Glossary >=18 + >=18
- no invented Knowledge page

### Targeted corrections

Important examples include:

- Chapter 1: legacy question asked for a reason behind `halîlullah` that Chapter 1 itself did not establish; Gold tests what the chapter actually states
- Chapter 4: birthplace/date language preserves different views and source attribution
- Chapter 5: Nimrod/birth reports remain attributed narrations rather than uncontested facts
- Chapter 31: legacy question still focused on Jurhum settlement although the canonical page had moved to Abraham’s dream/sacrifice test; Gold now follows the actual page content
- sacrifice/historical-practice material remains framed as what the chapter presents rather than being broadened into new claims

## 9. Mecca B2 — major before → after changes

Gold shifts the book from isolated factual retrieval toward systems reasoning across:

- geography
- imperial rivalry
- pilgrimage
- trade routes
- credit/usury
- social class
- tribal protection
- women’s varying social status
- slavery
- poetry/public influence
- religious life
- Quraysh power
- opposition to Islam

### Sensitive-content rule

Derived materials do not amplify suffering.

For chapters discussing slavery, persecution, vulnerable believers, boycott, hunger, or violence, Gold focuses on:

- vulnerability and protection
- dignity
- justice
- structural inequality
- political/economic pressure
- causes and consequences

The Chapter 15 validator specifically rejects reintroduction of graphic physical/starvation detail into the new exercise copy when structural explanation is sufficient.

Chapter 10 also protects the canonical nuance that women’s social position was not uniform and varied by class/status/tribe.

The final interpretive contrast is explicitly framed as `According to the chapter / وفقاً للفصل`.

## 10. Yunus Emre B2 — major before → after changes

### Canonical structure

- 13 narrative chapters
- page 14 References preserved
- page 15 Knowledge
- page 16 Vocabulary
- pages 17–18 Glossary
- page 19 Review
- page 20 Final

### Gold changes

- Knowledge = 8
- Vocabulary = 10
- Review = 8
- Final = 10
- Glossary >=18 + >=18
- Teacher Guide = 13/13
- Self-Study Guide = 13/13

### Attribution safety

Newly authored derived copy explicitly attributes Sûfî/literary/metaphorical interpretation.

This includes:

- hotspot descriptions
- Quick Challenge questions/explanations
- assessment items
- Teacher Guide
- Self-Study Guide
- interpretive Word Note / glossary definitions

Protected areas include concepts such as:

- vahdet-i vücut
- true/absolute reality
- unity/multiple existence
- divine love
- mystical/Sûfî concepts
- the heart metaphor
- intellect in Yunus’s presentation

The intended framing is equivalent to:

- `According to the chapter...`
- `In Yunus Emre’s thought...`
- `The chapter presents...`

and Arabic equivalents.

This prevents a literary or mystical metaphor from being silently converted into an unqualified creed statement.

Historical Mongol-era violence is also handled through political/social consequences in derived activities rather than graphic amplification.

## 11. Teacher Guide changes across B2

Effective Gold Teacher Guide coverage:

| Book | EN | AR |
|---|---:|---:|
| Moses | 24 | 24 |
| Adam | 17 | 17 |
| Abraham | 35 | 35 |
| Mecca | 17 | 17 |
| Yunus Emre | 13 | 13 |

Each chapter section now has:

- canonical chapter label alignment
- realistic lesson timing
- measurable B2 objectives
- evidence-first reading purpose
- lesson sequence
- discussion prompts
- differentiation
- formative/exit evidence
- explicit Quick Challenge reread/retry use

Unsupported worksheet/resource claims are not carried into the Gold layer.

## 12. Self-Study Guide changes across B2

Effective Gold Self-Study coverage matches the Teacher Guide counts above.

The common independent-learning routine now requires:

1. preview title/image/Word Notes
2. read/listen for gist
3. reread for evidence
4. infer vocabulary from context before checking the note
5. identify cause/comparison/turning point/interpretation
6. complete Quick Challenge
7. after a wrong or uncertain response, return to the relevant paragraph
8. retry
9. write claim → evidence → explanation
10. separate personal/value reflection from factual/textual answers

Whole-book guide copy now reflects the actual canonical structure of each book instead of stale chapter counts.

## 13. Cross-book feedback guard

Added:

`scripts/validation/validateB2GoldCrossBook.ts`

The guard loads all 10 B2 EN/AR effective variants and verifies objective items have:

- a real question
- an explanation
- useful correct feedback
- useful incorrect feedback
- valid MC/TF answer structure

This closes a final legacy-quality gap where an exercise could contain a strong explanation but still show the learner only `Correct!` after a correct answer.

## 14. Validation commands

Per-book gates:

```bash
npm run validate:b2-pilot
npm run validate:b2-adam
npm run validate:b2-abraham
npm run validate:b2-mecca
npm run validate:b2-yunus
npm run validate:b2-crossbook
```

Full B2 gate:

```bash
npm run validate:b2-rollout
```

The global `npm run validate` chain now includes the complete B2 rollout.

## 15. PDF system

B2 inherits A2/B1 Gold print geometry rather than introducing another design language.

Added:

- `docs/B2_PRINT_DESIGN_SYSTEM.md`
- `scripts/pdf-pilot/b2-sample.css`
- `scripts/pdf-pilot/buildB2ChapterSample.ts`
- `npm run pdf:b2-sample`

The generic renderer supports:

```bash
B2_BOOK=adam|abraham|moses|mecca|yunus
B2_LANGUAGE=en|ar|both
B2_CHAPTER_IDS=1,5,13   # or all
```

Key print rules:

- A4 portrait
- 14 mm top/side margins, 15 mm bottom
- 64 × 80 mm exact 4:5 image
- 12.7 pt English story body
- 14 pt Arabic story body
- single-flow prose
- Word Notes then Quick Challenge
- no answer leakage
- long chapters intentionally continue onto later pages instead of shrinking below the readability floor

Representative PDF samples must still be rendered and visually inspected in a real checkout.

## 16. Branch diff status

Latest checked compare before this final report was written:

- base: `agent/b1-rollout-gold`
- head: `agent/b2-rollout-gold`
- status: ahead
- ahead: **66 commits**
- behind: **0**
- changed files: **41**
- canonical B2 `pages.ts` files in changed-file list: **0**

This report itself adds one further documentation commit; final branch numbers should therefore be re-read when closing the milestone.

## 17. Runtime status — do not overclaim

The source rollout is complete, but this connector-only environment has not executed:

```bash
npm ci
npm run validate:b2-rollout
npm run typecheck
npm run build
```

Nor has the new B2 PDF renderer been run against the real checkout and visually inspected.

Therefore the correct status is:

**B2 EN+AR source rollout complete; runtime/typecheck/build/PDF visual verification pending.**

Do not label the B2 branch merge-ready until those local gates pass.

## 18. GitHub Actions / production rule

The rollout does not require GitHub Actions.

- no Actions should be triggered merely to validate this content work
- do not deploy B2 from this branch
- do not update `production`
- do not merge B2 directly into stale `main`

Safe milestone order remains:

1. integrate/confirm A2 Gold
2. integrate/confirm B1 Gold
3. run B2 local gates
4. integrate validated B2 milestone
