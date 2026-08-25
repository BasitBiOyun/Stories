# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 8
nextTask: READ_ADAM_B1_CHAPTER_8_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapters 1–7 English Language Focus: COMPLETE
- Adam B1 Chapters 1–7 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE through Chapter 7

## Chapter 7 English pedagogical targets
- `not on purpose` to distinguish an unintentional action from a deliberate one.
- `be sad about + noun` to describe an emotional response to a past action.
- `learn from + noun` to express a lesson taken from experience.
- `decide never to + verb` to express a strong future commitment.
- direct speech and `reply` to present a spoken exchange inside the narrative.
- `but` to qualify or contrast an idea within a response.
- `want + person + to + verb` to express a desired action by another person.
- `because + clause` to explain cause.
- `on the other hand` to organize a shift to a contrasting perspective.
- `to + verb` for purpose in `put them on earth to live there` and `gave them everything to rule on earth`.
- `would + verb` to describe expected future actions from a past narrative viewpoint.
- `make + object + adjective` in `make everything better` to express caused change.
- Short connected B1 production that explains an unintentional mistake, response, learning, reason, decision and a useful next responsibility in a new context.

## Chapter 7 Arabic pedagogical targets
- `لم يكن متعمداً` لنفي القصد وبيان أن الفعل غير مقصود.
- `حزن على + اسم` لوصف الشعور بعد الخطأ.
- `تعلّم من + اسم` للتعبير عن تحويل التجربة إلى درس.
- `صمّم على عدم + مصدر` للتعبير عن قرار قوي يمنع تكرار الفعل.
- `طلب من + شخص + أن + فعل` للتعبير عن طلب موجّه إلى طرف آخر.
- `اعترف بأن + جملة` مع النفي في `لم يعترف أبداً بأنه كان مخطئاً` لبيان رفض الإقرار.
- `من ناحية أخرى` للانتقال إلى موقف أو مسار مقابل.
- `لأنه + جملة` للتعبير عن السبب.
- `بين ... وبين ...` لتنظيم المقارنة بين مجموعتين متقابلتين.
- اللام مع المصدر في `لإدارة الحياة` للتعبير عن الغرض.
- الانتقال السردي من `أهبطهما إلى الأرض` إلى وصف الدور الجديد في `كانا خليفتين في الأرض`.
- إنتاج عربي B1 قصير مترابط يشرح خطأً غير متعمد، والندم، والتعلم، والسبب، والقرار، والغرض في سياق جديد.

## Quick Challenge separation
- Chapter 7 Quick Challenge was read in both languages before authoring.
- The Quick Challenge directly tests the content-level contrast between Adam and Eve's repentance and Iblis's refusal to admit wrongdoing because of arrogance.
- The Language Focus does not ask learners to retrieve that contrast. It analyzes intention, emotional response, learning, commitment, request/acknowledgment structures, cause and discourse contrast, purpose, expected future responsibility, and transfer to a new repair-and-responsibility situation.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocusPart6.ts` — created with four manually authored Chapter 7 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocusPart6.ts` — created with four independently authored Chapter 7 Arabic Language Focus activities.
- `src/data/adam/b1/index.ts` — added Part6 imports/merging so Chapter 7 Language Focus renders in English and Arabic.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 8.

## Latest commits
- Chapter 7 English Language Focus: `62b006a65a2bec7a4e8308833f039b9ff347efa9`
- Chapter 7 Arabic Language Focus: `310d81a34fbce1c7c1ab6769e9c107e8b7ccb6fe`
- Chapter 7 local wiring: `d1b926a76dbc8a3fee5c1be3b91ea14a6d997120`

## Validation actually performed
- Read the full Adam B1 Chapter 7 English story text and full Arabic Chapter 7 story text from `preview` before authoring.
- Read the existing Chapter 7 Quick Challenge in both languages and kept Language Focus distinct from its comprehension role.
- Re-fetched the active Adam B1 index immediately before the concurrent-safe wiring write and updated it from the fresh SHA.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 7.
