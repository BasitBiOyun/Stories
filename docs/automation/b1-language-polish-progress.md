# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 11
nextTask: READ_ADAM_B1_CHAPTER_11_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapters 1–10 English Language Focus: COMPLETE
- Adam B1 Chapters 1–10 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE through Chapter 10

## Chapter 10 English pedagogical targets
- `grow up to be + complement` to show development into a later state.
- `when + past clause` with `became + role` to connect time with a change of role.
- Past simple action chains to describe regular work associated with a role.
- `to + verb` for purpose together with `had to + verb` for past obligation.
- `but`, `while`, and `however` to organize contrast between people, actions, and viewpoints.
- `didn't care to + verb` to express lack of concern or intention.
- `... is + -ing ...` to move from a specific example to a general principle.
- Short coherent B1 production comparing two people responding differently to the same task.

## Chapter 10 Arabic pedagogical targets
- `كبر ... وأصبح ...` لبيان الانتقال إلى مرحلة أو حالة جديدة.
- `لما + فعل` مع `أصبح + خبر` لربط الزمن بتغيّر الدور.
- `كان + مضارع` لوصف عمل متكرر أو معتاد مرتبط بالدور.
- اللام الدالة على الغرض مع `كان عليه/عليهما أن + فعل` للتعبير عن الغرض والواجب في الماضي.
- `أما ... فـ` و`لكن` و`بينما` لتنظيم المقابلة بين الأشخاص والأفعال.
- `لم يهتم بـ...` للتعبير عن غياب العناية أو الاهتمام.
- `... هو أن + فعل` للانتقال من المثال الخاص إلى مبدأ عام.
- إنتاج عربي B1 قصير مترابط يقارن بين استجابتين لمهمة مشتركة.

## Quick Challenge separation
- Chapter 10 Quick Challenge was read in both languages before authoring.
- The Quick Challenge already asks what Habil's and Qabil's offerings reveal about intention and quality.
- The Language Focus does not ask learners to retrieve or compare the two offerings as content. It focuses on growth, role change, habitual work, purpose, obligation, contrast, and expressing a general principle, then transfers those patterns to a new situation.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocusPart9.ts` — created with four manually authored Chapter 10 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocusPart9.ts` — created with four independently authored Chapter 10 Arabic Language Focus activities.
- `src/data/adam/b1/index.ts` — added Part9 imports/merging so Chapter 10 Language Focus renders in English and Arabic.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 11.

## Latest commits
- Chapter 10 English Language Focus: `91e033f0bc4f6047ed3faee6136f0564df591788`
- Chapter 10 Arabic Language Focus: `d223b474e981f0657ce5c2f6f2e81c1d31ff0fcc`
- Chapter 10 local wiring: `2dc5695e0990d57eea2e4c29115527a004dbecc1`

## Validation actually performed
- Read the full Adam B1 Chapter 10 English story text and full Arabic Chapter 10 story text from `preview` before authoring.
- Read the existing Chapter 10 Quick Challenge in both languages and kept Language Focus distinct from its comprehension role.
- Re-fetched both new Language Focus files from `preview` after creation and confirmed four activities are present in each language.
- Re-fetched the active Adam B1 index after the concurrent-safe wiring write and confirmed Part9 is imported and merged for English and Arabic.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 10.
