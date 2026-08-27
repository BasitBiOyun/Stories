# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 13
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_13_LANGUAGE_FOCUS

## Completed books
### Adam B1
- Chapters 1–12 English Language Focus: COMPLETE
- Chapters 1–12 Arabic Language Focus: COMPLETE
- Cumulative English Language Review: COMPLETE
- Cumulative Arabic Language Review: COMPLETE
- Final exercise-system audit: COMPLETE
- Final Challenge role separation: COMPLETE
- Active polished exercise-system wiring: COMPLETE
- Story prose unchanged.

### Abraham B1
- Chapters 1–13 English Language Focus: COMPLETE
- Chapters 1–13 Arabic Language Focus: COMPLETE
- Cumulative English Language Review: COMPLETE
- Cumulative Arabic Language Review: COMPLETE
- Final exercise-system audit: COMPLETE
- Final Challenge role separation: COMPLETE
- Active polished exercise-system wiring: COMPLETE
- Story prose unchanged.

## Moses B1 progress
### Chapters 1–12
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 12 English pedagogical targets
- Direct instruction through `Get ready for the journey.`
- Planned future movement through `We are going away from Egypt` and `We will leave at night`.
- Strong obligation and avoidance through `must keep it secret` and `Nobody should see us`.
- Inability and consequence through `could not walk fast` + `got tired very quickly` → `That’s why the caravan moved slowly`.
- Narrative trigger and pursuit through `When the Pharaoh noticed...`, army preparation and `managed to catch up with them`.
- Time/location shift through `When the sun rose, the caravan reached the Red Sea`.
- Reassurance and future guidance through `Calm down! Allah is with us and will show us the way to safety.`
- Productive transfer: five connected non-story sentences combining instruction, obligation, inability, result, time/pursuit and reassurance.
- Chapter 12 Quick Challenge already tests Moses’s leadership response to panic; Language Focus therefore trains how instruction, obligation, limitation, sequence and reassurance are expressed rather than retesting the comprehension answer.

### Chapter 12 Arabic pedagogical targets
- Direct imperative through `اِسْتَعِدّوا للرِّحْلة`.
- Planned future through `سنُغادر` / `سنخرُج`.
- Obligation through `عليكم أن...` and avoidance through `لا ينبغي أن...`.
- Inability → consequence through `لم يستطع...` + `تعبوا سريعًا` → `لذلك كانت القافلة تسير ببطء`.
- Narrative trigger and pursuit through `وعندما علِم فرعون...` followed by `أعدّ جيشه` and `لحق بهم`.
- Time/location shift through `وعندما أشرقت الشمس... وصلت القافلة إلى البحر الأحمر`.
- Reassurance and future guidance through `اِهْدَؤُوا! إنّ الله معنا، وسيُرينا طريق النجاة`.
- Productive transfer: five connected Arabic sentences using command, obligation/avoidance, inability, result, time and reassurance.
- Arabic activities were designed independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/moses/b1/en/languageFocusChapter12.ts` — added Chapter 12 English Language Focus.
- `src/data/moses/b1/ar/languageFocusChapter12.ts` — added Chapter 12 Arabic Language Focus.
- `src/data/moses/b1/index.ts` — merged Chapter 12 into the active English and Arabic Language Focus maps while preserving Chapters 1–11 and separate `languageFocusExercises` UI wiring.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 13.

## Validation actually performed
- Read the full English Chapter 12 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 12 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 12 Quick Challenges before authoring.
- Confirmed Quick Challenge tests Moses’s reassurance/leadership when the people panic, while Language Focus targets planning, obligation, inability/result, time/pursuit and the language form of reassurance.
- Re-fetched both new Chapter 12 Language Focus files from `preview` and confirmed four activities are present in each language.
- Re-fetched `src/data/moses/b1/index.ts` after the wiring write and confirmed Chapter 12 is merged into both active maps while Chapters 1–11 remain preserved.
- Confirmed active story pages still place Quick Challenge in `exercises` and Language Focus in `languageFocusExercises`.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 12 English Language Focus: `7fa99c3e29fafc5e4f31059716fbcba61ded0123`
- Chapter 12 Arabic Language Focus: `b71593805d66fda669185fb651a3047fb12dc333`
- Chapter 12 active wiring: `c3b13dceab42a173926682841016900fb63f9683`

## Exact next run
- Work on Moses B1 Chapter 13 only.
- Read the full English and Arabic Chapter 13 story texts independently.
- Read the existing Chapter 13 Quick Challenges in both languages.
- Author Chapter 13 English and Arabic Language Focus only.
- Preserve Chapters 1–12 wiring.
- Because Chapter 13 is the last story chapter, if both language sets are completed successfully, stop the run after validation and set `phase: LANGUAGE_FOCUS_COMPLETE`, `nextTask: BUILD_LANGUAGE_REVIEW_ON_NEXT_RUN`.

## Unresolved issues
- None identified for Moses B1 Chapter 12.
- Build/typecheck remains unverified because no executable runner was used.
