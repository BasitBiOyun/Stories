# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–13 English Language Focus: COMPLETE
- Chapters 1–13 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 13 via the Part10 fallback

## Chapter 13 English decisions
- Read the full Chapter 13 English story and the current Quick Challenge before authoring.
- Kept the Quick Challenge focused on the cause-result chain `Zamzam appears → more people come → Mecca is built`; Language Focus does not ask learners to reconstruct that sequence.
- Language Focus targets are grounded in Chapter 13 language:
  - `was/were + -ing` for actions already in progress in the past
  - `suddenly + past simple` for an unexpected new event
  - `when + past simple` for linking a completed event to a reaction
  - `then` for sequencing the next action
  - `give + object + to + person` for transfer
  - `so + adjective` for degree
  - imperatives for direct commands/instructions
  - `become + adjective` for change of state
  - `still + present form` for a situation continuing now
  - `because + clause` versus `because of + noun` for reasons
- Productive work asks learners to create a short sudden-change situation using background, event, reaction, result and reason language rather than retelling the Zamzam-to-Mecca sequence.

## Chapter 13 Arabic decisions
- Read the full Arabic Chapter 13 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `كان + مضارع` for ongoing background actions in the past
  - `فجأة` for an unexpected new event
  - `لما + فعل ماضٍ` for linking an event to a reaction
  - `ثم` for moving to the next action
  - `أعطى + الشيء + لـ + شخص` for transfer
  - `جدًّا` for strengthening degree
  - فعل الأمر for direct commands/instructions
  - `صار + صفة` for change of state
  - `إلى اليوم` for continuation until the present
  - `لأن + جملة` versus `بسبب + اسم` for reasons
- Productive work uses Arabic-native frames for background, sudden change, reaction, result and reason rather than translated English sentence frames.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–12.
- Used contextual noticing, meaning/function matching, controlled interpretation, and short meaningful production rather than isolated grammar-rule drilling.
- English and Arabic were authored independently from their own story texts.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because Chapter 13 remained within the already established A2 contextual/function-first alignment.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart10.ts` — created with Chapter 13 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart10.ts` — created with Chapter 13 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part10 imports/fallbacks so Chapter 13 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the Chapter 13 English Language Focus from `preview` and confirmed four activities are present and grounded in Chapter 13 language.
- Re-fetched the Chapter 13 Arabic Language Focus from `preview` and confirmed four activities are present and independently grounded in the Arabic text.
- Re-fetched `src/data/abraham/a2/index.ts` and confirmed the Part10 fallback is active in both English and Arabic builders.
- Chapter 13 Quick Challenges were read in both languages and the Language Focus does not duplicate their Zamzam-to-Mecca sequencing task.
- Current wiring commit before this checkpoint update: `5b9fa383577633d0f9d8eba8300b60f4fc6c6276`.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commits
- Chapter 13 English Language Focus: `13ac209fe10ff7536e473b1ea0f8346aa718959b`
- Chapter 13 Arabic Language Focus: `c0d42e77bffc1aeb2deb7aa0554fa8853ac0dc43`
- Chapter 13 wiring: `5b9fa383577633d0f9d8eba8300b60f4fc6c6276`

## Next task
- Chapter 14 only: read the full English and Arabic Chapter 14 texts and their Quick Challenges, then manually author Chapter 14 Language Focus in both languages.
- When Chapter 14 is complete in both languages, STOP that run after verification and set `phase: LANGUAGE_FOCUS_COMPLETE` with `nextTask: START_EXERCISE_SYSTEM_AUDIT_ON_NEXT_RUN`.
- Do not start the exercise-system audit in the same run that completes Chapter 14.

## Unresolved issues
- None for Chapter 13.
