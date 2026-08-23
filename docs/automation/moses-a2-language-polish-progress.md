# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–4 English Language Focus: COMPLETE
- Chapters 1–4 Arabic Language Focus: COMPLETE
- Chapters 5–16: PENDING

## Chapter 4 English decisions
- Read the full Chapter 4 English story and its current Quick Challenge before authoring.
- Kept Quick Challenge focused on the comprehension contrast between Queen Asiye and her husband; Language Focus uses the chapter language for broader communicative work rather than asking that answer again.
- Targets: simple-past action chains and movement/place language; `different from` and `be + adjective` for contrast/description; `will + base verb` for a future decision or expectation; direct imperative for a command.
- Productive transfer asks learners to create a new helpful plan using description, contrast, a future decision and a safe instruction rather than retelling the palace scene.

## Chapter 4 Arabic decisions
- Read the full Arabic Chapter 4 independently and designed from its own text rather than translating the English activity.
- Targets: past action/movement with `إلى`; `مختلف عن` for contrast; `كان/كانت + صفة` for past description; `سـ + فعل مضارع` for future decision/expectation; plural imperative through `ابحثوا`.
- Productive transfer uses a new helping situation and Arabic-native frames.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart3.ts` — created with Chapter 4 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart3.ts` — created with Chapter 4 Arabic Language Focus.
- `src/data/moses/a2/index.ts` — added book-local Part3 imports/fallbacks so Chapter 4 Language Focus renders in both languages.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Chapter 4 full English and Arabic story texts were read from `preview`.
- Chapter 4 English and Arabic Quick Challenges were read; Language Focus does not simply duplicate their comprehension question.
- Part3 files were created successfully on `preview` with four manually authored activities in each language.
- Re-fetched `src/data/moses/a2/index.ts` immediately before the wiring write and preserved all unrelated/book-local existing support logic; the active builders now fall back through Part3 after the existing Language Focus records.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 4 English Language Focus: `fbe20a58f728ec64ea8eb992aaf03d878443dac2`
- Chapter 4 Arabic Language Focus: `846db219a1c8faebcb4181d7a9075ee5ee19072e`
- Chapter 4 wiring: `16863f55ddc93df7e861f6ba9f7821c5ea645910`

## Next task
- Chapter 5 only: read the full English and Arabic Chapter 5 texts and their Quick Challenges, then manually author Chapter 5 Language Focus in both languages.
- Do not start Chapter 6 in the same run.

## Unresolved issues
- None identified for Chapter 4.
