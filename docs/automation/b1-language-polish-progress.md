# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 12
nextTask: READ_ADAM_B1_CHAPTER_12_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapters 1–11 English Language Focus: COMPLETE
- Adam B1 Chapters 1–11 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE through Chapter 11

## Chapter 11 English pedagogical targets
- `because + clause` to explain the reason for an outcome.
- Direct `will` for a strong threat/intention contrasted with `won't + verb` for refusal of a future action.
- Supporting a refusal with connected reasons.
- Completed past action followed by evaluation with a superlative expression.
- `I don't know what I should + verb` as an embedded question expressing uncertainty about the next action.
- `started + -ing` to describe the beginning of a developing process.
- `show + person + the way to + verb` for guidance.
- Comparative `worse than` and `cannot + verb` for self-evaluation and inability.
- Short coherent B1 production moving from a difficult choice to reaction, uncertainty, guidance, and a better next step.

## Chapter 11 Arabic pedagogical targets
- `لأنّ + جملة` لبيان سبب النتيجة.
- `لَـ...نَّ` للتعبير عن تهديد أو نية مؤكدة، في مقابل `لن + مضارع` لرفض فعل مستقبلي.
- ربط الموقف بأسباب داعمة له داخل الكلام المباشر.
- `لقد + الماضي` لتأكيد فعل وقع وانتهى.
- `أسوأ` و`أفعل من` للتقييم والمقارنة.
- `لا أعرف ماذا + فعل` للتعبير عن الحيرة في الخطوة التالية.
- `بدأ + مضارع` لبداية عملية متطورة.
- `أراه/علّمه طريقة + مصدر/فعل` للتعبير عن الإرشاد.
- `لا أعرف كيف + فعل` للتعبير عن عدم معرفة الطريقة.
- إنتاج عربي B1 قصير مترابط ينتقل من الخطأ إلى رد الفعل والحيرة ثم الخطوة التالية.

## Quick Challenge separation
- Chapter 11 Quick Challenge was read in both languages before authoring.
- The Quick Challenge already asks learners to sequence the event chain from the accepted offering through the killing, panic, and the raven.
- The Language Focus does not ask learners to reproduce that sequence. It focuses on cause, threat/refusal, uncertainty, process, guidance, comparison, inability, and regret language, then transfers those patterns to new situations.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocusPart10.ts` — created with four manually authored Chapter 11 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocusPart10.ts` — created with four independently authored Chapter 11 Arabic Language Focus activities.
- `src/data/adam/b1/index.ts` — added Part10 imports/merging so Chapter 11 Language Focus renders in English and Arabic.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 12.

## Latest commits
- Chapter 11 English Language Focus: `9529c4286c37ab4b4615bdcd623b2ee8655460e7`
- Chapter 11 Arabic Language Focus: `fc17b686367297e6e55d43adeb3b088b1ff1d662`
- Chapter 11 local wiring: `9617dfa44602379bdda21a8dd4d07fe6312eea46`

## Validation actually performed
- Read the full Adam B1 Chapter 11 English story text and full Arabic Chapter 11 story text from `preview` before authoring.
- Read the existing Chapter 11 Quick Challenge in both languages and kept Language Focus distinct from its sequencing/comprehension role.
- Re-fetched the new English Chapter 11 Language Focus from `preview` and confirmed four activities are present and grounded in the chapter language.
- Re-fetched the new Arabic Chapter 11 Language Focus from `preview` and confirmed the independently authored Arabic activities are present and grounded in the Arabic text.
- Re-fetched the active Adam B1 index after the concurrent-safe wiring write and confirmed Part10 is imported and merged for English and Arabic.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 11.
