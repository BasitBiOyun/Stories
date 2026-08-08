# Moses B2 English — Gold Pilot Audit

Branch: `agent/b2-rollout-gold`

Status: **source pilot implemented; local execution gate pending**

Canonical source:

`src/data/moses/b2/en/pages.ts`

The pilot does not rewrite canonical story prose, page order, image/audio fields, sync data, animated words, or hotspot geometry.

## 1. Why Moses B2 was selected

Moses provides the cleanest B1→B2 comparison because the B1 rollout already established a manually curated reference. B2 is also substantially longer, so it is the best early stress test for assessment depth, guide alignment, and future PDF pagination.

## 2. Before: structural audit

The pre-Gold Moses B2 English book had:

- **24 canonical story chapters**
- **20 Teacher Guide sections**
- **20 chapter-level Self-Study sections**
- whole-book Self-Study text stating “You will study 20 chapters”
- Knowledge Check: **6** true/false items
- Vocabulary Challenge: **6** pairs
- Master Glossary: **12 + 12** entries
- Review page: a mixed sequencing / drag-drop / reflection / quiz-game collection, not the required 8-objective Review Challenge
- Final Challenge page: present but **no dedicated questions**
- many chapter Quick Challenges based on direct-detail recall

The 20 guide sections were not random missing chapters. They matched the later canonical story sequence: the old guide’s Chapter 1 corresponded to canonical story page 5, and its Chapter 20 corresponded to canonical story page 24. Four historical/context-setting chapters had been added to the canonical book without equivalent guide sections being inserted.

## 3. Canonical sequence preserved

The Gold overlay keeps all 24 story pages in their existing order and preserves protected fields.

No canonical `pages.ts` edit was made.

Guide work therefore adapts the derived guide layer to the current canonical book, not the reverse.

## 4. Chapter Quick Challenges — before → after

### Chapters 1–4: historical trivia → B2 source/evidence reading

Examples:

**Chapter 1 — Historical Background**

Before:

> Who was the ancestor that the Children of Israel originated from?

After:

> Why did Egyptian rulers begin to see the growing Israelite community as a political threat?

Reason: the new item asks learners to connect population growth with rulers’ fear of a future ruling class, rather than retrieving one proper name.

**Chapter 2 — Egypt and the Nile**

Before:

> Which pharaoh is believed to have oppressed the Israelites by forcing them to build the huge temple?

After:

> Which statement best reflects the chapter’s level of certainty about the Exodus and the Pharaoh who drowned?

Reason: the canonical chapter explicitly uses “according to the sources”, “most sources”, “probably”, and “the exact date ... is unknown”. A B2 exercise should preserve and test that historical caution rather than make a disputed reconstruction sound certain.

**Chapter 3 — The Pharaoh’s Authority**

Before:

> Who famously described Egypt as “the gift of the Nile”?

After:

> How does the chapter connect control of the Nile with Pharaoh’s political authority?

Reason: the important B2 relationship is resource control → infrastructure → manpower → administration → centralized authority, not quotation-name recall.

**Chapter 4 — The Baby in the Water**

Before:

> What does the name “Mûsâ” mean in the Coptic language?

After:

> Why is water presented as an important connecting image in this chapter?

Reason: the chapter itself connects Moses’s survival through the Nile with the later salvation of his people at the Red Sea. The Gold item tests motif/foreshadowing rather than traditional etymological trivia.

### Chapters 5–24: recall → cause, inference, comparison, evaluation

All 24 story chapters now have one visible B2 multiple-choice Quick Challenge because the current StoryPage runtime exposes only `page.exercises[0]`.

Examples of the new demand:

- Ch5: fear of losing power → oppression
- Ch6: manpower/economic pressure → policy change
- Ch7: Asiye’s compassion contrasted with Pharaoh’s coercive power
- Ch8: palace privilege vs Israelite identity/justice
- Ch9: what immediate repentance reveals about character
- Ch10: what repeated conflict reveals about the quarrelsome Israelite and Moses’s caution
- Ch11: why the warning becomes a genuine decision-point
- Ch12: infer character from helping others while personally exhausted
- Ch13: isolation → safe/harmonious household
- Ch14: ten years in Midian as preparation before mission
- Ch15: why attention is focused on the ordinary staff before the sign
- Ch16: how signs connect to responsibility/mission
- Ch17: continuity of the monotheistic prophetic message
- Ch18: Pharaoh’s use of Moses’s palace upbringing as a rhetorical power strategy
- Ch19: why dialogue moves to demonstrable signs after threat and rejection
- Ch20: political purpose of the public magician contest
- Ch21: why expert recognition by the magicians is a severe defeat for Pharaoh’s narrative
- Ch22: panic vs trust at the Red Sea
- Ch23: arrogance shaping Pharaoh’s interpretation even after evidence
- Ch24: freedom from oppression vs continuing need for guidance and responsibility

Every new item includes an explanation and a retry direction that sends the learner back to the relevant evidence.

## 5. Answer-position hygiene

Options are deterministically rotated while preserving the correct answer.

Static distribution check:

- 24 Quick Challenges: **8 / 8 / 8** across positions 1–3
- Knowledge Check: **3 / 3 / 2**
- Review Challenge: **3 / 3 / 2**
- Final Challenge: **4 / 3 / 3**

This prevents the legacy pattern where correct answers often appeared in the same position.

## 6. Knowledge / Vocabulary / Glossary / Review / Final

### Knowledge Check

Before: 6 true/false items.

After: **8 objective B2 questions** sampled across the canonical narrative and focused on evidence/relationships rather than only detail recall.

### Vocabulary Challenge

Before: 6 pairs.

After: **10 reviewed word/meaning pairs** drawn from effective chapter Word Notes.

### Chapter Word Notes

The Gold layer preserves existing chapter vocabulary and may supplement it only with definitions already present in the book/shared application vocabulary.

Working target: 5–7 useful items; validator safety floor: 4.

No new dictionary definition is invented solely to fill a count.

### Master Glossary

Before: **12 + 12**.

After: **at least 18 + 18**, deduplicated and sourced from effective chapter vocabulary.

### Review Challenge

Before: mixed sequencing, drag-drop, reflection, and quiz-game material.

After: **8 dedicated objective B2 questions** for the scored Review Challenge contract.

The legacy mixed activities remain useful as design/reference material, but the effective Gold review page now gives the product a stable objective assessment set.

### Final Challenge

Before: final-challenge page existed but contained no exercises.

After: **10 dedicated objective questions** covering the whole story.

This activates the application’s stable dedicated Final Challenge path instead of relying on an empty/random fallback.

## 7. Teacher Guide — 20 → 24 chapters

### Before

The Teacher Guide had 20 strong B2 sections, starting with “Chapter 1: The Pharaoh’s Command”. In the current canonical book that content belongs to story page 5.

Every section also contained `extraResources.worksheets` labels although those worksheet files are not supplied in the repository.

### After

- 4 new Teacher Guide sections added for canonical Chapters 1–4.
- Existing 20 strong sections retained and remapped to canonical Chapters 5–24.
- Effective chapter labels now use the actual canonical chapter id + title.
- Unsupported `extraResources` claims removed.
- Existing pedagogy, grammar, pronunciation, discussion, differentiation, assessment, kinesthetic, and citizenship material retained where it already aligns with the corresponding canonical chapter.
- Each remapped section receives an explicit reminder to use the visible Quick Challenge as evidence-based reinforcement and send learners back to the text after an incorrect answer.

The new first four Teacher Guide sections emphasize:

1. historical background as cause/effect rather than trivia
2. historical caution and hedging
3. systems thinking: resources, labor, administration, authority
4. motif/foreshadowing and source framing

Teacher Guide metadata is also updated so the extended plan covers **24 lessons**, not 20.

## 8. Self-Study Guide — 20 → 24 chapters

### Before

The chapter-level Self-Study array had 20 sections aligned to the old sequence.

The whole-book learner guide explicitly said:

> You will study 20 chapters

and its Chapter-by-Chapter Study Focus ended at the old Chapter 20.

### After

- 4 new independent-study sections added for canonical Chapters 1–4.
- Existing 20 sections retained and remapped to canonical Chapters 5–24.
- The whole-book chapter list is regenerated from the 24 canonical story titles.
- Chapter-by-Chapter Study Focus is extended to Chapters 1–24; the old rich focus material is retained but shifted to the correct canonical numbers/titles.
- Student guide metadata records 24 chapter study sessions plus whole-book review.

The strong existing B2 study methodology is intentionally retained:

- preview
- first reading for gist
- second reading with annotation
- evidence marking
- Word Notes in context
- cause/consequence
- comparison/contrast
- summary writing
- reflection
- retry after feedback
- B2 linking language

## 9. Historical/religious safety decisions

The B2 pilot deliberately does not “correct” canonical prose in place.

Instead, newly authored learning material preserves the chapter’s own qualification level.

Most important example: Chapter 2 does not convert “probably Ramses II / exact date unknown” into a definite historical claim.

Likewise, traditional reports or interpretations in the canonical story are not expanded into stronger new claims merely to create harder questions.

## 10. Validator

Added:

`scripts/validation/validateMosesB2GoldPilot.ts`

Run with:

```bash
npm run validate:b2-pilot
```

The validator checks:

- 24 canonical story pages preserved
- protected story fields unchanged
- hotspot id/x/y unchanged
- one visible Quick Challenge per story chapter
- objective structure, explanations, retry feedback, and answer balance
- Word Notes count/duplicates
- Knowledge = 8
- Vocabulary = 10
- Glossary >= 18 + >= 18
- Review = 8
- Final = 10
- Teacher Guide = 24 and exact chapter-label alignment
- Self-Study = 24 and exact chapter-label alignment
- unsupported Teacher Guide resources absent
- whole-book learner guide says 24, not 20
- extended Teacher Guide plan covers 24 chapters
- historical-caution exercise remains present

The pilot command is intentionally **not yet added to the global `npm run validate` chain** while B2 is still a pilot. It becomes part of the full validation chain after the complete B2 rollout is established.

## 11. Runtime status

Source implementation is complete for the Moses B2 English pilot.

The following commands have **not** been executed in this connector-only environment:

```bash
npm run validate:b2-pilot
npm run typecheck
npm run build
```

Do not label the pilot runtime-verified until those commands pass in a real checkout.

GitHub Actions were not triggered.

## 12. Next B2 rollout step

After the Moses B2 English pilot is accepted:

1. apply the accepted B2 contract to Moses Arabic
2. roll out Adam B2
3. roll out Abraham B2
4. roll out Mecca B2 with sensitive-content review
5. roll out Yunus Emre B2 with attribution-safe derived copy and corrected metadata
6. add full B2 validator to the global validation chain
7. stress-test long B2 chapters in the inherited PDF system using intentional two-page fallback where needed
