# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 2
nextTask: READ_ADAM_B1_CHAPTER_2_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed in this run
- Adam B1 Chapter 1 English Language Focus: COMPLETE
- Adam B1 Chapter 1 Arabic Language Focus: COMPLETE
- Adam B1 Chapter 1 local runtime wiring: COMPLETE

## Chapter 1 English pedagogical targets
- Distinguishing source commentary in the present from past story narration.
- Future viewed from a past narrative point with `was going to` and `would`.
- Event sequencing with `after + past clause`.
- Reporting information and decisions with `told ... that` and `said ... decided to`.
- Marking the beginning of an action/state with `began to`.
- Short connected B1 production that shifts time perspective coherently rather than producing isolated sentences.

## Chapter 1 Arabic pedagogical targets
- التمييز بين المضارع عند عرض المصدر والماضي عند سرد الأحداث.
- نقل الخبر والقرار بتراكيب `أخبر ... أنه` و`قال إنه`.
- التعبير عن المستقبل من داخل إطار ماضٍ باستعمال `كان ... سيـ`.
- ترتيب الأحداث باستعمال `بعد أن`.
- التعبير عن الإمكان باستعمال `يمكننا أن`.
- استعمال الفاء لربط السبب أو الموقف بالنتيجة/رد الفعل.
- إنتاج عربي قصير مترابط يحافظ على العلاقات الزمنية والدلالية.

## Quick Challenge separation
- Read the existing Chapter 1 Quick Challenge in both languages.
- Quick Challenge asks what role Allah says will be placed on earth (`ruler/khalifa`).
- New Language Focus does not retest that comprehension fact; it works on time perspective, reporting, sequencing, future-from-the-past and connected language use.

## Files changed
- `src/data/adam/b1/en/languageFocus.ts` — created for Chapter 1 English Language Focus.
- `src/data/adam/b1/ar/languageFocus.ts` — created independently for Chapter 1 Arabic Language Focus.
- `src/data/adam/b1/index.ts` — book-local wiring added so story pages can receive `languageFocusExercises` without altering existing Quick Challenges or final pages.
- `docs/automation/b1-language-polish-progress.md` — initialized.

## Commits
- English Language Focus: `904927f9d5bf94448902402927750f25e66e57e9`
- Arabic Language Focus: `bfca1626b4410af4b6b2fc7941a07394b50f5a37`
- Adam B1 local wiring: `cb6dd9ffbe1014f55b7fa2696ce5beca5a70087d`

## Validation actually performed
- Re-fetched `src/data/adam/b1/en/languageFocus.ts` from `preview` and confirmed four Chapter 1 activities are present.
- Re-fetched `src/data/adam/b1/ar/languageFocus.ts` from `preview` and confirmed four independently authored Arabic Chapter 1 activities are present.
- Re-fetched `src/data/adam/b1/index.ts` from `preview` and confirmed English and Arabic `languageFocusExercises` are attached only when present, while existing Quick Challenge, Knowledge Check, Review, Vocabulary and Final Challenge wiring remains in place.
- Full Chapter 1 English and Arabic story texts and their existing Quick Challenges were read before authoring.
- Story prose was not changed.
- No B2, A2, shared/global, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 1.
