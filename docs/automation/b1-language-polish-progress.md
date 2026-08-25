# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 4
nextTask: READ_ADAM_B1_CHAPTER_4_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapter 1 English Language Focus: COMPLETE
- Adam B1 Chapter 1 Arabic Language Focus: COMPLETE
- Adam B1 Chapter 2 English Language Focus: COMPLETE
- Adam B1 Chapter 2 Arabic Language Focus: COMPLETE
- Adam B1 Chapter 3 English Language Focus: COMPLETE
- Adam B1 Chapter 3 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE

## Chapter 3 English pedagogical targets
- Reporting viewpoints with `thought that` and `believed` while keeping character judgment separate from narrator voice.
- Contrasting responses with `but` and `however`.
- Comparing value/status with `better than` and `more ... than`.
- Giving reasons with `because`.
- Showing inability to recognize or accept an idea with `couldn’t ... that`.
- Adding an effect/result with `which made ...`.
- Expressing that a quality does not originate from something with `did not come from`.
- Short connected B1 production that reports two viewpoints, gives a reason, makes a comparison, and signals a contrasting conclusion in a new situation rather than retelling Chapter 3.

## Chapter 3 Arabic pedagogical targets
- نقل وجهات النظر باستعمال `اعتقد أن` و`يرى أن` و`يعتقد أن` مع الفصل بين رأي الشخصية وصوت الراوي.
- بناء الاستثناء والمخالفة باستعمال `إلا` و`ومع ذلك`.
- المقارنة في القيمة أو المكانة باستعمال `أفضل من` و`أهم من`.
- تقديم السبب باستعمال `لأنه`.
- التعبير عن العجز عن الإدراك أو القبول باستعمال `لم يستطع أن ...`.
- إضافة النتيجة باستعمال `مما جعله ...`.
- نفي مصدر القيمة باستعمال `لا تأتي ... من`.
- إنتاج عربي B1 قصير مترابط ينقل رأيين ويذكر سببًا ويجري مقارنة ثم يقدم موقفًا مخالفًا في سياق جديد.

## Quick Challenge separation
- Chapter 3 Quick Challenge was read in both languages before authoring.
- The Quick Challenge asks why Iblis’s judgment is presented as wrong and tests the chapter’s content-level contrast between material origin and Adam’s knowledge.
- The new Language Focus does not ask learners to retrieve that conclusion. It uses the chapter language to analyze reported viewpoint, contrast, comparison, reason, limitation, result and source/origin relations, then transfers those patterns to a new context.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocusPart2.ts` — created with four manually authored Chapter 3 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocusPart2.ts` — created with four independently authored Chapter 3 Arabic Language Focus activities.
- `src/data/adam/b1/index.ts` — added book-local merging of the continuation Language Focus records so Chapter 3 renders in English and Arabic.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 4.

## Latest commits
- Chapter 3 English Language Focus: `877a7b555cb784f4bd4b6bd5bc0dcffb9e0df5ea`
- Chapter 3 Arabic Language Focus: `a166bb2677eb8c575fa52e4c0e2f490b294ba200`
- Chapter 3 local wiring: `36d1f349140380b18765f9cce8f4a794d2464056`

## Previous commits
- Chapter 2 English Language Focus: `92146ec6ef2789302092e3e88756ebe4ea0d9dd6`
- Chapter 2 Arabic Language Focus: `87a501c32ec54ca8deb16cc2e3946f307e3793b7`
- Chapter 1 English Language Focus: `904927f9d5bf94448902402927750f25e66e57e9`
- Chapter 1 Arabic Language Focus: `bfca1626b4410af4b6b2fc7941a07394b50f5a37`
- Initial Adam B1 local wiring: `cb6dd9ffbe1014f55b7fa2696ce5beca5a70087d`

## Validation actually performed
- Read the full Adam B1 Chapter 3 English story text and full Arabic Chapter 3 story text from `preview` before authoring.
- Read the existing Chapter 3 Quick Challenge in both languages and kept Language Focus distinct from its comprehension role.
- Re-fetched `src/data/adam/b1/en/languageFocusPart2.ts` from `preview` and confirmed four Chapter 3 English activities are present.
- Re-fetched `src/data/adam/b1/ar/languageFocusPart2.ts` from `preview` and confirmed four independently authored Chapter 3 Arabic activities are present.
- Re-fetched `src/data/adam/b1/index.ts` from `preview` and confirmed the base and continuation Language Focus records are merged and supplied to the existing generic chapter wiring in both languages.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 3.
