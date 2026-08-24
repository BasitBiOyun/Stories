# Moses A2 Language Polish Progress

phase: LANGUAGE_REVIEW_COMPLETE
nextTask: START_FINAL_EXERCISE_AUDIT_ON_NEXT_RUN

## Completed components
- Chapters 1–16 English Language Focus: COMPLETE
- Chapters 1–16 Arabic Language Focus: COMPLETE
- English cumulative Language Review: COMPLETE
- Arabic cumulative Language Review: COMPLETE
- Active page 21 Language Review wiring in English and Arabic: COMPLETE

## Language Review decisions
- Replaced the old page-21 Final Review role with a dedicated cumulative Language Review layer.
- Language Review consolidates grammar patterns and communicative functions taught across the sixteen chapter Language Focus sections rather than retesting story comprehension.
- English review recycles past/background action, reason/result, sequence, ability/inability, necessity, intention/decision/purpose, future/time, commands and reported instructions, change/state, place/movement, questions/comparison, and short narrative organisation.
- Arabic review was authored independently from Arabic chapter language and recycles `كان + فعل مضارع`, `لأن / لذلك`, sequencing, `استطاع / لم يستطع`, `يستطيع / لا يستطيع`, `يجب أن`, `بحاجة إلى`, `أراد أن`, `قرر أن`, purpose with `لـ`, future with `سـ / سوف`, direct imperatives, `أخبر ... أن`, `أمر ... أن`, `قال لـ`, change with `أصبح / تحول إلى / جعل / زاد`, place/movement, question and comparison patterns.
- Both reviews end with meaningful productive transfer to a new everyday situation rather than retelling Moses's story.
- Literal `[blank]` syntax is preserved in the fill-blank activity.
- Quick Challenge, Knowledge Check, Vocabulary Challenge and Final Challenge content were not audited or rewritten in this run.
- Story prose was not changed.

## Files added in this run
- `src/data/moses/a2/en/languageReview.ts`
- `src/data/moses/a2/ar/languageReview.ts`

## Files updated in this run
- `src/data/moses/a2/index.ts`
- `docs/automation/moses-a2-language-polish-progress.md`

## Wiring
- Page 21 English title/content is now `Language Review` and uses `mosesA2LanguageReviewExercises`.
- Page 21 Arabic title/content is now `مراجعة اللغة` and uses `mosesA2LanguageReviewExercisesAr`.
- Old Final Review exports are no longer imported or attached by the active Moses A2 index.
- Page 22 remains the separate Final Challenge and was not modified in this phase.

## Validation performed
- Re-fetched the English Language Review from `preview` and confirmed 10 cumulative activities are present, including matching, fill-blank, sequencing and productive reflection.
- Re-fetched the Arabic Language Review from `preview` and confirmed the independently authored cumulative review is present.
- Re-fetched `src/data/moses/a2/index.ts` after concurrent-safe writes and confirmed the new Language Review imports are active.
- Story prose and other books were not changed.
- No typecheck/build/CI pass is claimed because no executable runner was available through the connected GitHub file actions in this run.

## Commits
- English Language Review: `e3891ad73ac5c1532da59f00a5e4146c850fb286`
- Arabic Language Review: `290db23ee110acf997cd61b25f9cbeb57ec7af12`
- Active Language Review wiring: `79cc10f363c5aea79b7a656f32ade2fee8fa8bbd`

## Exact next task
- Run PHASE 3 only: audit Moses A2 English and Arabic Quick Challenges, Knowledge Check, Vocabulary Challenge, Final Challenge and active Moses-A2-local wiring.
- Preserve role separation: Quick Challenge = chapter comprehension, Language Focus = chapter-specific language use, Language Review = cumulative grammar/function consolidation, Final Challenge = independent whole-story mastery.
- Fix only justified Moses-A2-local issues. Do not change story prose.

## Unresolved issues
- None identified in the Language Review layer.
- Build/typecheck remains unverified only because no executable runner was available in this run.
