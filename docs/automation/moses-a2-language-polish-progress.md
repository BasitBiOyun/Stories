# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–13 English Language Focus: COMPLETE
- Chapters 1–13 Arabic Language Focus: COMPLETE
- Chapters 14–16: PENDING

## Chapter 13 English decisions
- Read the full Chapter 13 English story and its current Quick Challenge before authoring.
- The Quick Challenge already compares the magicians’ belief with Pharaoh’s rejection, so Language Focus does not retest that comprehension contrast.
- Language Focus targets come directly from Chapter 13 language: `invite + person + to + place`, `come with + noun`, past continuous `were + -ing`, `put down + object`, direct imperatives, the past form `threw`, `turn into` for transformation, adverbs such as `quickly`, `still + negative verb` for an unchanged situation, `because` for reason, `continue to + verb`, and the time expression `day and night`.
- Productive transfer uses a new classroom demonstration/game/experiment situation so learners apply arrival, command, change, reason and continuation language without retelling the magicians scene.

## Chapter 13 Arabic decisions
- Read the full Arabic Chapter 13 independently and designed its Language Focus from the Arabic wording rather than translating the English activities.
- The Arabic Quick Challenge already compares the response of the magicians with Pharaoh’s response, so Language Focus instead targets the Arabic language system of the chapter: `دعا + شخص + إلى + مكان`, arrival/accompaniment wording, `كان + فعل مضارع` for an ongoing past action, `وضع + مفعول + على + مكان`, the imperative `ألق`, past execution with `ألقى`, `تحول إلى`, `سرعان ما + فعل`, past negation with `لم + فعل مضارع`, `لأن` for reason, `استمر في + مصدر`, and `ليلًا ونهارًا` for repeated/ongoing action.
- Productive work uses an Arabic-native classroom/game/activity situation rather than retelling the story scene.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart10.ts` — created with Chapter 13 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart10.ts` — created with Chapter 13 Arabic Language Focus.
- `src/data/moses/a2/index.ts` — added Moses-A2-local Part10 imports and active English/Arabic fallback wiring.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Re-fetched `src/data/moses/a2/en/languageFocusPart10.ts` from `preview` and confirmed four Chapter 13 English activities are present and grounded in the chapter text.
- Re-fetched `src/data/moses/a2/ar/languageFocusPart10.ts` from `preview` and confirmed four independently authored Arabic activities are present and grounded in the Arabic chapter text.
- Re-fetched `src/data/moses/a2/index.ts` after the wiring commit and confirmed both Part10 imports are present.
- Confirmed the English fallback chain includes `mosesA2LanguageFocusExercisesPart10[page.id]`.
- Confirmed the Arabic fallback chain includes `mosesA2LanguageFocusExercisesPart10Ar[page.id]`.
- Story prose was not changed.
- Quick Challenge source content, Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because no executable runner was available through the connected GitHub actions in this run.

## Commits
- Chapter 13 English Language Focus: `c1f328c40d358e985a903c8ed2b9b595a6f87384`
- Chapter 13 Arabic Language Focus: `b9f5737e78c7da426c3fa664ca60561dd8ce73b5`
- Chapter 13 active wiring: `0132032a7cbf009682325ff5693405bda75ed90e`

## Exact next task
- Chapter 14 only.
- Read the full English and Arabic Chapter 14 story texts and their current Quick Challenges.
- Manually author Chapter 14 Language Focus in both languages from their respective texts.
- Do not start Chapter 15 in the same run.

## Unresolved issues
- None identified for Chapter 13.
