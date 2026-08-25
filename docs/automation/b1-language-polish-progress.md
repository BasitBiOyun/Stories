# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 6
nextTask: READ_ADAM_B1_CHAPTER_6_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapters 1–5 English Language Focus: COMPLETE
- Adam B1 Chapters 1–5 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE through Chapter 5

## Chapter 5 English pedagogical targets
- `start to + verb` for the beginning of a new state or feeling.
- `begin + -ing` for the beginning of an activity or situation.
- `called + name` for identifying a person by name.
- `to be + role` for intended role/purpose in context.
- `more + adjective + than ...` for comparison.
- `can + verb` for ability/possibility.
- `ask + object + not to + verb` for a reported negative instruction.
- `when + clause` for background time.
- an `-ing` phrase such as `pretending to be ...` for manner/simultaneous action.
- `if + past ... would + verb` for the condition-result relationship inside the reported claim.
- Short connected B1 production using beginning, restriction, comparison and condition-result in a new situation rather than retelling Chapter 5.

## Chapter 5 Arabic pedagogical targets
- `شعر بـ...` لوصف حالة شعورية.
- الفاء لربط ما يلي بما قبله بوصفه نتيجة في السياق.
- `بدأ + فعل مضارع` لبيان بداية نشاط أو وضع جديد.
- `اسمها ...` للتعريف بالشخص عن طريق الاسم.
- `أفعل + مما ...` للمقارنة.
- `يمكن...` للتعبير عن الإمكان أو القدرة.
- `طلب من + شخص + ألا + فعل` لنقل توجيه سلبي.
- `بينما كان ...` لبناء الخلفية الزمنية.
- `قال إن ...` لنقل قول أو ادعاء.
- `إذا ...` لربط الشرط بالنتيجة، مع `لن + فعل` لنفي نتيجة مستقبلية داخل القول المنقول.
- إنتاج عربي B1 قصير مترابط يجمع بداية الحالة والتوجيه والشرط والنتيجة في سياق جديد.

## Quick Challenge separation
- Chapter 5 Quick Challenge was read in both languages before authoring.
- The Quick Challenge tests the content-level strategy that Iblis approached Adam and Eve as if he were a friend and made a false promise.
- The Language Focus does not ask learners to retrieve that answer. It analyzes beginnings, comparison, negative instruction, time/background, manner/reported claim and condition-result relationships, then transfers them to a new context.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocusPart4.ts` — created with four manually authored Chapter 5 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocusPart4.ts` — created with four independently authored Chapter 5 Arabic Language Focus activities.
- `src/data/adam/b1/index.ts` — added Part4 imports/merging so Chapter 5 Language Focus renders in English and Arabic.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 6.

## Latest commits
- Chapter 5 English Language Focus: `489f30ed1e7f0bbc6de8db716a3d3c30119118f8`
- Chapter 5 Arabic Language Focus: `3e17784d4bb923d81f9e70e5aaa87ac0562c6597`
- Chapter 5 local wiring: `99db3f516b84e0944cc6d543d3eacab7b6343284`

## Validation actually performed
- Read the full Adam B1 Chapter 5 English story text and full Arabic Chapter 5 story text from `preview` before authoring.
- Read the existing Chapter 5 Quick Challenge in both languages and kept Language Focus distinct from its comprehension role.
- Re-fetched the active Adam B1 index before the concurrent-safe wiring write and updated it from the fresh SHA.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 5.
