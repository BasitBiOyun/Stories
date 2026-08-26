# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 6
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_6_LANGUAGE_FOCUS

## Completed books
### Adam B1
- Chapters 1–12 English Language Focus: COMPLETE
- Chapters 1–12 Arabic Language Focus: COMPLETE
- Cumulative English Language Review: COMPLETE
- Cumulative Arabic Language Review: COMPLETE
- Final exercise-system audit: COMPLETE
- Final Challenge role separation: COMPLETE
- Active polished exercise-system wiring: COMPLETE
- Story prose unchanged.

### Abraham B1
- Chapters 1–13 English Language Focus: COMPLETE
- Chapters 1–13 Arabic Language Focus: COMPLETE
- Cumulative English Language Review: COMPLETE
- Cumulative Arabic Language Review: COMPLETE
- Quick Challenge audit: COMPLETE
- Knowledge Check audit: COMPLETE
- Vocabulary Challenge audit: COMPLETE
- Final Challenge audit: COMPLETE
- Final Challenge role separation: COMPLETE
- Active polished exercise-system wiring: COMPLETE
- Story prose unchanged.

## Moses B1 progress
### Chapters 1–5
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 5 English pedagogical targets
- Ongoing narrative background through `while Moses was walking in the bazaar`.
- Event entry through simple past in `he saw two men fighting`.
- Sudden development through `Suddenly`.
- Later repeated setting through `The next day ... again`.
- Contrast between people through `one ... while the other ...`.
- Identifying description through the relative clause `the same man ... who Moses helped the day before`.
- Inference/judgment through `Moses understood that ...` rather than treating the judgment as a directly observed fact.
- Negative contrast through `quarrelsome ... not a peaceable man`.
- Direct communicative force through `Help me!`, `Forgive me!`, `I have wronged myself`, and the future-oriented challenge `Are you going to kill me too?`.
- Productive transfer: a five-sentence non-story B1 mini-narrative combining background, sudden action, relative identification, inference, and a future-oriented question.
- Chapter 5 Quick Challenge already tests accidental action versus Moses’s regret and request for forgiveness; Language Focus therefore does not retest that comprehension distinction.

### Chapter 5 Arabic pedagogical targets
- Background through `وبينما كان موسى يمْشي في السوق`.
- Event entry through past narration in `رأى رجليْن يتشاجران`.
- Sudden development through `وفجأة` and forward movement through `فـ`.
- Later repeated setting through `وفي اليوم التالي ... مرّة أخْرى`.
- Parallel contrast through `أحدهما ... والآخر ...`.
- Identifying description through `الرجل نفسه ... الّذي ساعده موسى في اليوم السابق`.
- Inference through `فعرَف موسى أنّ ...`.
- Evaluative contrast through `كثير الخِصام، وليس رجلًا مُسالِمًا`.
- Direct speech functions through `ساعدْني!`, `اِغْفِرْ لي!`, `لقد ظلمتُ نفسي`, and the future-oriented confrontational question `هل ستقتُلني أنا أيضًا؟`.
- Productive transfer: a five-sentence Arabic mini-narrative combining background, surprise, relative description, inference, and a future question.
- Arabic activities were authored independently from the Arabic text rather than mechanically translated from English.

## Files changed in this run
- `src/data/moses/b1/en/languageFocusChapter5.ts` — added Chapter 5 English Language Focus.
- `src/data/moses/b1/ar/languageFocusChapter5.ts` — added Chapter 5 Arabic Language Focus.
- `src/data/moses/b1/index.ts` — merged Chapter 5 maps into the active English and Arabic Language Focus maps while preserving Chapters 1–4 and separate `languageFocusExercises` UI wiring.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 6.

## Validation actually performed
- Read the full English Chapter 5 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 5 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 5 Quick Challenges before authoring.
- Confirmed the Quick Challenge tests the distinction between the accidental event and Moses’s regret/forgiveness response, while Language Focus targets narrative construction, identification, inference and communicative force instead.
- Re-fetched both new Chapter 5 Language Focus files from `preview` after creation and confirmed four activities are present in each language.
- Re-fetched `src/data/moses/b1/index.ts` after the wiring write and confirmed Chapter 5 is merged into both active maps while Chapters 1–4 remain preserved.
- Confirmed active story pages still place Quick Challenge in `exercises` and Language Focus in `languageFocusExercises`.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 5 English Language Focus: `21dd073bb0c2bbe326a1494a19b4ef8763041ab4`
- Chapter 5 Arabic Language Focus: `41c3be9b5ad4f334b0985c6b30c5c852e956e5f1`
- Chapter 5 active wiring: `6e0ef5e830f3eec077f0e91141d56c5b94f50086`

## Exact next run
- Work on Moses B1 Chapter 6 only.
- Read the full English and Arabic Chapter 6 story texts independently.
- Read the existing Chapter 6 Quick Challenges in both languages.
- Author Chapter 6 English and Arabic Language Focus only.
- Preserve Chapters 1–5 wiring and do not start Chapter 7 in the same run.

## Unresolved issues
- None identified for Moses B1 Chapter 5.
- Build/typecheck remains unverified because no executable runner was used.
