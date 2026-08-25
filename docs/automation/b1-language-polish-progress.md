# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 10
nextTask: READ_ADAM_B1_CHAPTER_10_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapters 1–9 English Language Focus: COMPLETE
- Adam B1 Chapters 1–9 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE through Chapter 9

## Chapter 9 English pedagogical targets
- `At that time` to locate a situation at a particular stage in the past.
- `After ... when ...` to connect a later event with a time clause.
- `became + noun/complement` to show a change of role or state.
- `never stopped + -ing` to show continuation over time.
- `start + -ing` and `teach + person + to + verb` for beginning and directing instruction.
- `to + verb` after an action to express purpose.
- `want to + verb` and `make + person + base verb` for intention and influence.
- Short coherent B1 production combining time, role change, teaching, purpose, continuation and a general-result if-clause in a new context.

## Chapter 9 Arabic pedagogical targets
- `في ذلك الوقت` لتحديد مرحلة معينة في الماضي.
- `بعد ... عندما ...` لربط حدث لاحق بجملة زمنية.
- `أصبح + خبر` لبيان تغير في الحال أو الدور.
- `استمر في + مصدر/فعل` لبيان استمرار الفعل.
- `بدأ + فعل` لبيان بداية فعل مستمر أو متكرر.
- `علّم + شخصاً + شيئاً/أن...` للتعبير عن توجيه الآخرين.
- `على + ضمير + أن + فعل` للتعبير عن ضرورة أو توجيه.
- اللام مع الفعل لبيان الغرض.
- `طلب من... أن...` للتوجيه المباشر.
- إنتاج عربي B1 قصير مترابط يربط الزمن والدور الجديد وبداية التوجيه والضرورة والغرض في سياق جديد.

## Quick Challenge separation
- Chapter 9 Quick Challenge was read in both languages before authoring.
- The Quick Challenge directly asks why messengers and sacred texts are sent and tests the content-level purpose of guidance.
- The Language Focus does not ask learners to retrieve that answer. It focuses on how the chapter organizes time, marks role change and continuation, expresses teaching/direction and purpose, and transfers those patterns to a new situation.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocusPart8.ts` — created with four manually authored Chapter 9 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocusPart8.ts` — created with four independently authored Chapter 9 Arabic Language Focus activities.
- `src/data/adam/b1/index.ts` — added Part8 imports/merging so Chapter 9 Language Focus renders in English and Arabic.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 10.

## Latest commits
- Chapter 9 English Language Focus: `5e0088b9db79c39163ef2a259342d8718b7e98df`
- Chapter 9 Arabic Language Focus: `8b6a7fb3dc7a1a0f260ec77230dd59395e6ce898`
- Chapter 9 local wiring: `8a548d5e01d6726f7625ee0458cc4c5293c42937`

## Validation actually performed
- Read the full Adam B1 Chapter 9 English story text and full Arabic Chapter 9 story text from `preview` before authoring.
- Read the existing Chapter 9 Quick Challenge in both languages and kept Language Focus distinct from its comprehension role.
- Re-fetched both new Language Focus files from `preview` after creation and confirmed four activities are present in each language.
- Re-fetched the active Adam B1 index after the concurrent-safe wiring write and confirmed Part8 is imported and merged for English and Arabic.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 9.
