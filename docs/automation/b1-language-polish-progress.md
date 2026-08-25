# B1 Language Polish Progress

currentBook: Adam B1
bookPath: `src/data/adam/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 12
nextChapter: 9
nextTask: READ_ADAM_B1_CHAPTER_9_EN_AR_AND_BUILD_LANGUAGE_FOCUS

## Completed chapters
- Adam B1 Chapters 1–8 English Language Focus: COMPLETE
- Adam B1 Chapters 1–8 Arabic Language Focus: COMPLETE
- Adam B1 local runtime wiring for available Language Focus chapters: COMPLETE through Chapter 8

## Chapter 8 English pedagogical targets
- `would + verb` to express expected future actions viewed from an earlier point in the narrative.
- `had to + verb` to express necessity in a past situation.
- `to + verb` in `to survive` / `to keep themselves alive` to express purpose.
- `In addition` to add a related responsibility or difficulty.
- `with + noun` in `with clothes and weapons` to express means/tools.
- `because + clause` to explain motive or cause.
- `for + period` to express duration.
- `both ... and ...` / coordinated contrast in `good and difficult times` to present contrasting experiences within one life period.
- Short connected B1 production combining expected role, necessity, purpose, addition, means, cause and duration in a new context.

## Chapter 8 Arabic pedagogical targets
- السين مع المضارع في `سيزرعان` / `سيربيان` للتعبير عن أفعال متوقعة في المستقبل من داخل سياق السرد.
- `كان عليه أن + فعل` للتعبير عن ضرورة في موقف ماضٍ.
- `من أجل + مصدر` في `من أجل البقاء` للتعبير عن الغرض.
- `كما` لإضافة ضرورة مرتبطة بما قبلها.
- الباء في `بالملابس والأسلحة` لبيان الوسيلة أو الأداة.
- اللام مع الفعل في `ليبعد الناس` لبيان الغرض أو المقصد.
- `لسنوات طويلة` لبيان المدة.
- `أيام جيدة وسيئة` لتقديم خبرتين متقابلتين داخل وصف واحد للحياة.
- إنتاج عربي B1 قصير مترابط يربط الدور المتوقع والضرورة والغرض والإضافة والوسيلة والسبب في سياق جديد.

## Quick Challenge separation
- Chapter 8 Quick Challenge was read in both languages before authoring.
- The Quick Challenge directly tests the content-level responsibilities of life on earth: work, protection of nature, care for the weak and survival.
- The Language Focus does not ask learners to retrieve or list those responsibilities. It analyzes how the chapter expresses expected future action, past necessity, purpose, addition, means, cause, duration and contrast, then transfers those relationships to a new situation.

## Files changed in latest run
- `src/data/adam/b1/en/languageFocusPart7.ts` — created with four manually authored Chapter 8 English Language Focus activities.
- `src/data/adam/b1/ar/languageFocusPart7.ts` — created with four independently authored Chapter 8 Arabic Language Focus activities.
- `src/data/adam/b1/index.ts` — added Part7 imports/merging so Chapter 8 Language Focus renders in English and Arabic.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 9.

## Latest commits
- Chapter 8 English Language Focus: `20bac43dd3773c47886590991900358cb40f49df`
- Chapter 8 Arabic Language Focus: `4f3a1958930e74651e033ed43ac1555b6a3a8ffc`
- Chapter 8 local wiring: `cfb86b0aa49feedf635fffc19cb3ad11775de615`

## Validation actually performed
- Read the full Adam B1 Chapter 8 English story text and full Arabic Chapter 8 story text from `preview` before authoring.
- Read the existing Chapter 8 Quick Challenge in both languages and kept Language Focus distinct from its comprehension role.
- Re-fetched both new Language Focus files from `preview` after creation and confirmed four activities are present in each language.
- Re-fetched the active Adam B1 index after the concurrent-safe wiring write and confirmed Part7 is imported and merged for English and Arabic.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide files were changed.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Unresolved issues
- None for Adam B1 Chapter 8.
