# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–15 English Language Focus: COMPLETE
- Chapters 1–15 Arabic Language Focus: COMPLETE
- Chapter 16: PENDING

## Chapter 15 English decisions
- Read the full English Chapter 15 story and its current Quick Challenge before authoring.
- The Quick Challenge already asks what Allah told Moses to do at the sea, so Language Focus does not retest the `Hit the sea with his stick` comprehension answer.
- Language Focus targets are grounded in the chapter language: `in front of / behind` for position, `Calm down!` as a direct imperative, `will + verb` for reassurance/future help, completed past change, `became + noun phrase` for a new state, `could + verb` for past ability, `make + object` for creation/result, `go to + place`, `in + place`, `between + plural noun`, and adverbial manner with `safely`.
- Productive transfer uses a new everyday route/safety situation rather than retelling the sea scene.

## Chapter 15 Arabic decisions
- Read the full Arabic Chapter 15 independently and designed its Language Focus from the Arabic wording rather than translating the English activities.
- The Arabic Quick Challenge already asks about the command to strike the sea, so Language Focus instead targets the Arabic language system around the scene: `أمام / خلف + ضمير` for position, the imperative `اهدؤوا`, future reassurance with `سـ + فعل مضارع`, direct command plus instrument with `بـ`, completed change with past verbs, `أصبح + خبر` for a new state, location with `في`, movement with a past verb, manner with `بأمان`, and position with `بين + اسم جمع`.
- Productive work uses an Arabic-native route/safety situation instead of story retelling.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart11.ts` — created with Chapter 15 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart11.ts` — created with Chapter 15 Arabic Language Focus.
- `src/data/moses/a2/index.ts` — added Part11 imports and English/Arabic fallback wiring.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Re-fetched the full English and Arabic Chapter 15 story texts from `preview` before authoring.
- Read the current English and Arabic Chapter 15 Quick Challenges and confirmed Language Focus does not duplicate the command-to-strike-the-sea comprehension question.
- Re-fetched `src/data/moses/a2/en/languageFocusPart11.ts` after creation and confirmed four Chapter 15 English activities are present.
- Re-fetched `src/data/moses/a2/ar/languageFocusPart11.ts` after creation and confirmed four independently authored Arabic activities are present.
- Re-fetched `src/data/moses/a2/index.ts` and confirmed Part11 imports and fallback wiring are active for both English and Arabic builders.
- Story prose was not changed.
- Quick Challenge source content, Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because no executable runner was available through the connected GitHub file actions in this run.

## Commits
- Chapter 15 English Language Focus: `1f821aa3e977251db955dd6731d84dc05fa8c923`
- Chapter 15 Arabic Language Focus: `b9f11bcf592f8fdd2aa0ac3c6a373f5c573fd873`
- Chapter 15 active wiring: `c4e2486e077c5079fb018c612092b72946dfeae2`

## Exact next task
- Chapter 16 only.
- Read the full English and Arabic Chapter 16 story texts and their current Quick Challenges.
- Manually author Chapter 16 Language Focus in both languages from their respective texts.
- Because Chapter 16 is the final story chapter, after completing and verifying it set `phase: LANGUAGE_FOCUS_COMPLETE` and `nextTask: BUILD_LANGUAGE_REVIEW_ON_NEXT_RUN`, then STOP. Do not build Language Review in the same run.

## Unresolved issues
- None identified for Chapter 15.
