# B1 Language Polish Progress

currentBook: Yunus Emre B1
bookPath: `src/data/yunusEmre/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 3
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
- Mecca/Bilal B1
nextTask: BUILD_YUNUS_EMRE_B1_CHAPTER_3_LANGUAGE_FOCUS_ON_NEXT_RUN

## Completed books
- Adam B1: COMPLETE under the new Language Focus architecture.
- Abraham B1: COMPLETE under the new Language Focus architecture.
- Moses B1: COMPLETE under the new Language Focus architecture.
- Mecca/Bilal B1: COMPLETE under the new Language Focus architecture.

## Current book progress
- Chapter 1: COMPLETE
  - EN Language Focus: COMPLETE
  - AR Language Focus: COMPLETE
- Chapter 2: COMPLETE
  - EN Language Focus: COMPLETE
  - AR Language Focus: COMPLETE
- Chapters 3–13: not yet processed under this Language Focus pass.

## Chapter 1 pedagogical targets/functions
### English
- Definition and characteristic aim with `a person who...` and `aims to...`.
- Method/means with `by + -ing`.
- Parallel moral-principle listing with repeated `-ing` forms.
- Negative/limiting meaning with `without + -ing` and `not + -ing`.
- Adding a second identity with `in addition to being...`.
- Identifying information with a relative clause (`which he used`).
- Contribution/result with `helped develop...` and reputation with `is known as...`.
- Short connected B1 production combining definition, method, parallel principles, contribution, and reputation.

### Arabic
- Native definition and aim patterns: `هو الشخص الذي...` and `يسعى إلى...`.
- Means/path with `بـ + مصدر` as used in `باتباع...`.
- Parallel nominal patterns in the moral list: `السعي / التحلي / العطاء / فعل الخير / عدم إعطاء...`.
- Natural exclusion/negative meanings with `دون / بلا / عدم`.
- Adding identity with `بالإضافة إلى كونه...`.
- Early-group description with `من أوائل من...` and identification with `الذي/التي...`.
- Contribution and reputation with `ساعد في...` and `يعرف بأنه...`.
- Short connected Arabic B1 production using these relationships naturally rather than translating English grammar labels.

## Chapter 2 pedagogical targets/functions
### English
- Cause/reason with `due to + noun phrase` and causal explanation in context.
- Balanced evaluation with `not too... but also not too... either`.
- Combining qualities with `combine... with...`.
- Enabling effect with `help + object + verb`.
- Continuing influence with `still`.
- Historical/evidential stance with `According to historical sources...`, `Some sources say that...`, and approximate dating with `around...`.
- Shared-time comparison with `the same era as...`.
- Adding a second learning context with `But ... also...`.
- Explaining a place/function through a relative clause (`which was a place where...`) and passive focus (`was taught`).
- Guidance/authority with `under the guidance of...`.
- Short connected B1 production combining balanced evaluation, cause/effect, cautious source reporting, and two learning/experience contexts.

### Arabic
- السبب بـ`بسبب...`.
- التقييم المتوازن بـ`ليس... وليس... أيضًا`.
- الجمع بين ميزتين بـ`تجمع بين... و...`.
- بيان التسهيل والأثر بـ`تساعد... على...`، والاستمرار بـ`لا تزال...`.
- الإسناد إلى المصادر بـ`وفقًا للمصادر التاريخية...` و`تذكر بعض المصادر أن...`.
- التقريب الزمني بـ`حوالي...` وربط الأشخاص في زمن مشترك بـ`العصر نفسه الذي...`.
- إضافة مسار تعلم ثانٍ بـ`ولكنه... أيضًا` دون إلغاء الأول.
- وصف التكية ووظيفتها بجملة `وهي مكان...`، وبيان الإرشاد بـ`تحت إرشاد...`.
- إنتاج عربي B1 قصير ومترابط يجمع التقييم والسبب والأثر والحذر في نقل المصدر ومسارين للتعلم بصورة طبيعية مستقلة عن تصنيفات الإنجليزية.

## Files changed in this run
- `src/data/yunusEmre/b1/en/languageFocus.ts` — added Chapter 2 EN Language Focus.
- `src/data/yunusEmre/b1/ar/languageFocus.ts` — added Chapter 2 AR Language Focus.
- `docs/automation/b1-language-polish-progress.md`

## Validation actually performed
- Re-read the checkpoint from `preview` at run start and confirmed `currentBook: Yunus Emre B1`, `phase: LANGUAGE_FOCUS`, `nextChapter: 2`.
- Read the full English Chapter 2 story text from `src/data/yunusEmre/b1/en/pages.ts`.
- Read the full Arabic Chapter 2 story text independently from `src/data/yunusEmre/b1/ar/pages.ts`.
- Read the English and Arabic Chapter 2 Quick Challenges and avoided turning Language Focus into another question about why Yunus Emre's language was widely understood.
- Inspected the existing Yunus Emre B1 Chapter 1 Language Focus architecture and active `index.ts` wiring only as needed for conventions.
- Confirmed `index.ts` already attaches `languageFocusExercises` by chapter key, so no Chapter 2 wiring edit was required.
- Re-fetched each target Language Focus file immediately before its write and used the current `preview` blob SHA.
- Re-fetched and verified both updated Chapter 2 Language Focus sections from `preview` after writing.
- Re-fetched this checkpoint immediately before its write.
- Story prose was not edited.
- No A2, B2, completed B1 book, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- Build/typecheck/CI was not run.

## Current commit SHA available before checkpoint write
- `c0f90039cbe7ece0334622ebe749bac1e334f6c4`

## Exact next run
- Start only if this checkpoint still says `currentBook: Yunus Emre B1`, `phase: LANGUAGE_FOCUS`, `nextChapter: 3`.
- Work on Chapter 3 only.
- Read the full English and Arabic Chapter 3 story text independently and both Quick Challenges.
- Build only Chapter 3 English and Arabic Language Focus plus minimal Yunus Emre B1-local wiring if genuinely required.
- Update this checkpoint and stop without starting Chapter 4.

## Unresolved issues
- No Chapter 2 blocker identified.
- Build/typecheck remains unverified.
