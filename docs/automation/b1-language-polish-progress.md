# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 3
nextTask: READ_ADAM_B1_CHAPTER_3_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapter 1 English Language Focus: COMPLETE
- Adam B1 Chapter 1 Arabic Language Focus: COMPLETE
- Adam B1 Chapter 2 English Language Focus: COMPLETE
- Adam B1 Chapter 2 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE

## Chapter 2 English pedagogical targets
- Cause-result relationships with `That’s why` and `so`.
- Adding source/origin detail with repeated `from` phrases.
- Reporting information with `said that` and introducing words to listeners with `told`.
- Sequencing within quoted instruction using `after` and recognizing the following imperative.
- Expressing purpose with `to + verb`.
- Moving narration forward with `later`.
- Comparing degree/amount with `more ... than`.
- Short connected B1 production that combines reporting, cause-result, purpose, and comparison in a new learning context rather than retelling Chapter 2.

## Chapter 2 Arabic pedagogical targets
- بناء علاقة السبب والنتيجة باستعمال `ولهذا السبب` و`ولذلك`.
- إضافة تفاصيل المصدر والأصل بتراكيب `من ... من ...`.
- نقل القول باستعمال `قال ... إن ...` وتمهيد الكلام الموجّه باستعمال `قال ... لـ`.
- ترتيب ما يسبق الأمر باستعمال `بعد أن` والتعرف إلى صيغة الأمر للجماعة مثل `أظهروا`.
- التعبير عن الغاية باستعمال `لكي + فعل`.
- دفع السرد إلى مرحلة لاحقة باستعمال `ثم`.
- المقارنة في المقدار باستعمال `أكثر من`.
- إنتاج عربي B1 قصير مترابط يجمع النقل والسبب والنتيجة والغاية والمقارنة في موقف تعلم جديد.

## Quick Challenge separation
- Chapter 2 Quick Challenge was read in both languages before authoring.
- The Quick Challenge tests the content links `soil from different lands → different skin colors` and `life/intellect → learning and understanding`.
- The new Language Focus does not ask learners to retrieve those pairings. It uses language from the same chapter to analyze cause-result, reporting, command framing, purpose, sequence and comparison, then transfers those patterns to a new context.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocus.ts` — added four manually authored Chapter 2 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocus.ts` — added four independently authored Chapter 2 Arabic Language Focus activities.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 3.

## Latest commits
- Chapter 2 English Language Focus: `92146ec6ef2789302092e3e88756ebe4ea0d9dd6`
- Chapter 2 Arabic Language Focus: `87a501c32ec54ca8deb16cc2e3946f307e3793b7`

## Previous Chapter 1 commits
- English Language Focus: `904927f9d5bf94448902402927750f25e66e57e9`
- Arabic Language Focus: `bfca1626b4410af4b6b2fc7941a07394b50f5a37`
- Adam B1 local wiring: `cb6dd9ffbe1014f55b7fa2696ce5beca5a70087d`

## Validation actually performed
- Read the full Adam B1 Chapter 2 English story text and full Arabic story text from `preview` before authoring.
- Read the existing Chapter 2 Quick Challenge in both languages and kept Language Focus distinct from its comprehension role.
- Re-fetched `src/data/adam/b1/en/languageFocus.ts` from `preview` and confirmed four Chapter 2 activities are present after the write.
- Re-fetched `src/data/adam/b1/ar/languageFocus.ts` from `preview` and confirmed the independently authored Arabic Chapter 2 set is present after the write.
- Re-fetched `src/data/adam/b1/index.ts` and confirmed its generic book-local wiring automatically attaches `languageFocus[page.id]` for Chapter 2 in both languages, so no further index edit was needed.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 2.
