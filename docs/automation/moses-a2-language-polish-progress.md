# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–14 English Language Focus: COMPLETE
- Chapters 1–14 Arabic Language Focus: COMPLETE
- Chapters 15–16: PENDING

## Chapter 14 English decisions
- Read the full Chapter 14 English story and its current Quick Challenge before authoring.
- The Quick Challenge already asks why Moses’s people had to leave Egypt secretly at night, so Language Focus does not retest that comprehension reason.
- Language Focus targets come directly from Chapter 14 language: direct imperatives, `get ready for + noun`, planned departure language, `must + verb` for obligation/necessity, `will + verb` for future action, time expressions such as `at night`, `could not + verb` for past inability, adverbs such as `quickly/slowly`, and `when + past event` to connect events in time.
- Productive transfer uses a new class/family trip situation so learners apply instruction, obligation, planning, time and movement language without retelling the night journey.

## Chapter 14 Arabic decisions
- Read the full Arabic Chapter 14 independently and designed its Language Focus from the Arabic wording rather than translating the English activities.
- The Arabic Quick Challenge already asks why the group left secretly at night, so Language Focus instead targets the Arabic language system of the chapter: plural/direct imperatives such as `عاملوهم / اخرج / استعدوا`, `استعدّ لـ`, `دعا + شخص`, future with `سـ + فعل مضارع`, obligation with `على + شخص + أن + فعل`, necessity with `يجب أن + فعل`, `لم يستطع + ...` for past inability, manner/speed with `بسرعة / ببطء`, and `عندما + فعل ماض` for time connection.
- Productive work uses an Arabic-native travel-planning situation rather than retelling the story scene.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart10.ts` — added Chapter 14 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart10.ts` — added Chapter 14 Arabic Language Focus.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Wiring
- No new `index.ts` edit was needed in this run.
- The existing active Part10 fallback wiring in `src/data/moses/a2/index.ts` already resolves any page id present in `mosesA2LanguageFocusExercisesPart10` / `mosesA2LanguageFocusExercisesPart10Ar`, so adding page id 14 to those records makes Chapter 14 active without a shared or additional wiring change.

## Validation
- Re-fetched the full Chapter 14 English and Arabic story texts from `preview` before authoring.
- Read the current English and Arabic Chapter 14 Quick Challenges and confirmed Language Focus does not duplicate their secrecy/escape comprehension question.
- Re-fetched `src/data/moses/a2/en/languageFocusPart10.ts` after the write and confirmed four Chapter 14 English activities are present.
- Re-fetched `src/data/moses/a2/ar/languageFocusPart10.ts` after the write and confirmed four independently authored Arabic activities are present.
- Re-fetched `src/data/moses/a2/index.ts` and confirmed Part10 imports are already active for both languages.
- Story prose was not changed.
- Quick Challenge source content, Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because no executable runner was available through the connected GitHub file actions in this run.

## Commits
- Chapter 14 English Language Focus: `8941b971bebec05c304f88453e5188c93c21d6cc`
- Chapter 14 Arabic Language Focus: `23dfcaa5adec8148891b55d77b497f0a17728532`
- Current preview commit after the content writes: `23dfcaa5adec8148891b55d77b497f0a17728532`

## Exact next task
- Chapter 15 only.
- Read the full English and Arabic Chapter 15 story texts and their current Quick Challenges.
- Manually author Chapter 15 Language Focus in both languages from their respective texts.
- Do not start Chapter 16 in the same run.

## Unresolved issues
- None identified for Chapter 14.
