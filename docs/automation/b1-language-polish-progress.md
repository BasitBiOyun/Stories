# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 5
nextTask: READ_ADAM_B1_CHAPTER_5_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapter 1 English Language Focus: COMPLETE
- Adam B1 Chapter 1 Arabic Language Focus: COMPLETE
- Adam B1 Chapter 2 English Language Focus: COMPLETE
- Adam B1 Chapter 2 Arabic Language Focus: COMPLETE
- Adam B1 Chapter 3 English Language Focus: COMPLETE
- Adam B1 Chapter 3 Arabic Language Focus: COMPLETE
- Adam B1 Chapter 4 English Language Focus: COMPLETE
- Adam B1 Chapter 4 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE

## Chapter 4 English pedagogical targets
- `continue + -ing` for an action or claim that persists.
- `get + adjective` for a change into an emotional state.
- `want + object + to ...` for a desired or undesired outcome involving another person.
- `because of + noun phrase` for reason without a full clause.
- `thought ...` for keeping an interpretation inside the character’s viewpoint.
- `wait for a chance to ...` for opportunity and purpose.
- `keep + object + away from ...` for prevention/separation.
- `just like ...` for similarity.
- `tell + object + to ...` for reported advice/warning.
- Short connected B1 production combining continuation, reason, purpose and warning in a new situation rather than retelling Chapter 4.

## Chapter 4 Arabic pedagogical targets
- `استمر في + المصدر` لبيان استمرار فعل أو موقف.
- وصف الحالة الشعورية ثم الموقف الناتج مباشرة.
- `لم يرد أن ...` للتعبير عن نتيجة غير مرغوبة.
- `بسبب + اسم` لتقديم سبب مختصر.
- `ظن أن ...` لنقل تفسير الشخصية من غير تحويله إلى حقيقة يقررها الراوي.
- `فرصة لـ...` لربط الفرصة بالغرض.
- `كما حدث له` للمقارنة بين حالتين.
- `قال ... إن` لنقل معلومة أو تحذير بطريقة غير مباشرة.
- `أمره أن ...` لنقل توجيه أو أمر.
- إنتاج عربي B1 قصير مترابط يجمع الاستمرار والسبب والغرض والتحذير في سياق جديد.

## Quick Challenge separation
- Chapter 4 Quick Challenge was read in both languages before authoring.
- The Quick Challenge tests the content-level fact that Iblis blamed Adam and looked for a chance to lead him away from Allah’s kindness.
- The Language Focus does not ask learners to retrieve that conclusion. It analyzes continuation, emotional state, desire, reason, viewpoint, purpose, prevention/similarity and reported warning, then transfers those patterns to a new context.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocusPart3.ts` — created with four manually authored Chapter 4 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocusPart3.ts` — created with four independently authored Chapter 4 Arabic Language Focus activities.
- `src/data/adam/b1/index.ts` — added Part3 imports/merging so Chapter 4 Language Focus renders in English and Arabic.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 5.

## Latest commits
- Chapter 4 English Language Focus: `765c984f786eb696525428375f1c9c50318fa8d6`
- Chapter 4 Arabic Language Focus: `7337836e9b90c83c7f1787922a60f66b52ab8f90`
- Chapter 4 local wiring: `6f78cf0af653bfcc26262a580b5a9dadcd647f63`

## Validation actually performed
- Read the full Adam B1 Chapter 4 English story text and full Arabic Chapter 4 story text from `preview` before authoring.
- Read the existing Chapter 4 Quick Challenge in both languages and kept Language Focus distinct from its comprehension role.
- Re-fetched `src/data/adam/b1/en/languageFocusPart3.ts` from `preview` and confirmed four Chapter 4 English activities are present.
- Re-fetched `src/data/adam/b1/ar/languageFocusPart3.ts` from `preview` and confirmed four independently authored Chapter 4 Arabic activities are present.
- Re-fetched `src/data/adam/b1/index.ts` from `preview` and confirmed Part3 records are merged into active English and Arabic Language Focus wiring.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 4.
