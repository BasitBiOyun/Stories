# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS_COMPLETE
nextTask: START_EXERCISE_SYSTEM_AUDIT_ON_NEXT_RUN

## Completed chapters
- Chapters 1–14 English Language Focus: COMPLETE
- Chapters 1–14 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 14 via the Part11 fallback

## Chapter 14 English decisions
- Read the full Chapter 14 English story and the current Quick Challenge before authoring.
- Kept the Quick Challenge focused on the final story content: Abraham and Ishmael building the Ka’ba together and the closing message that Allah is unique and has no partner.
- Language Focus deliberately does not ask learners to retrieve or repeat those two Quick Challenge answers.
- Language Focus targets are grounded in Chapter 14 language:
  - `During that time` for locating events inside a period
  - `several times` for repeated past action
  - `to + verb` for purpose
  - `ask + person + to + verb` for a task/request
  - `will + verb` for future action and willingness/promise
  - `for sure` for certainty
  - `after + past event` for sequence
  - `still + present verb` for continuation to the present
  - `one of + plural group` for identifying one member of a larger group
- Productive work asks learners to create a new shared-task situation using Chapter 14 language rather than retelling the Ka’ba scene or the final message.

## Chapter 14 Arabic decisions
- Read the full Arabic Chapter 14 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `في ذلك الوقت` for locating an event in time
  - `كان + مضارع` with `عدة مرات` for repeated past action
  - `لِـ + فعل/مصدر` for purpose
  - `أمر + شخص + أن + فعل` for assigning a task/command
  - `سوف/سـ + مضارع` for future action and willingness
  - `بالتأكيد` for certainty
  - `بعد أن + فعل ماضٍ` for sequence
  - `لا يزال + مضارع` for continuation to the present
  - `منهم` for identifying one person from a larger group
- Productive work uses Arabic-native frames for time, purpose, task, future commitment, certainty and continuation rather than translated English sentence frames.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–13.
- Used contextual noticing, meaning/function matching, controlled interpretation, and short meaningful production rather than isolated grammar-rule drilling.
- English and Arabic were authored independently from their own story texts.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because Chapter 14 remained within the already established A2 contextual/function-first alignment.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart11.ts` — created with Chapter 14 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart11.ts` — created with Chapter 14 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part11 imports/fallbacks so Chapter 14 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated to the hard phase handoff

## Validation
- Re-fetched the Chapter 14 English Language Focus from `preview` and confirmed four activities are present and grounded in Chapter 14 language.
- Re-fetched the Chapter 14 Arabic Language Focus from `preview` and confirmed four activities are present and independently grounded in the Arabic text.
- Re-fetched `src/data/abraham/a2/index.ts` and confirmed the Part11 fallback is active in both English and Arabic builders.
- Chapter 14 Quick Challenges were read in both languages and the Language Focus does not duplicate their building/final-message comprehension task.
- Current wiring commit before this checkpoint update: `e1d2d90bc07459968acb537152af37e813a2190e`.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commits
- Chapter 14 English Language Focus: `e8142fcfcd9c08553272579e910c072620f13823`
- Chapter 14 Arabic Language Focus: `4fea247c8ee6f292262710c72625277d96de9b2b`
- Chapter 14 wiring: `e1d2d90bc07459968acb537152af37e813a2190e`

## Next task
- START_EXERCISE_SYSTEM_AUDIT_ON_NEXT_RUN
- The next run may enter Phase 2 and audit the remaining Abraham A2 English and Arabic exercise system, then build the dedicated cumulative Language Review and separate Final Challenge architecture.
- Do not perform any Phase 2 work in the run that completed Chapter 14.

## Unresolved issues
- None for Chapter 14 Language Focus.
