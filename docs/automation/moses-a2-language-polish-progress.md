# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS_COMPLETE
nextTask: BUILD_LANGUAGE_REVIEW_ON_NEXT_RUN

## Completed chapters
- Chapters 1–16 English Language Focus: COMPLETE
- Chapters 1–16 Arabic Language Focus: COMPLETE

## Chapter 16 English decisions
- Read the full Chapter 16 English story and its current Quick Challenge before authoring.
- The Quick Challenge already asks learners to confirm the final lesson directly, so Language Focus does not retest that comprehension answer.
- Chapter 16 Language Focus instead targets language grounded in the text: `behind` and `in the middle of` for position, `when + clause` for event time, `in the end` for final result, `say to + person` for introducing direct speech, the imperative `Look!`, `tell + object + to + verb` for reporting an instruction/claim, past result language, and lesson frames such as `The story tells us that...`, `It shows that...`, `no one can + verb`, and `only + person/thing + has...`.
- Productive transfer asks learners to use these frames in a new everyday story rather than retelling Pharaoh's final scene.

## Chapter 16 Arabic decisions
- Read the full Arabic Chapter 16 independently and designed its Language Focus from the Arabic wording rather than translating the English activities.
- The Arabic Quick Challenge already states the final lesson, so Language Focus focuses on the language system around the scene and lesson expression instead of asking for that answer again.
- Targets include `من وراء + ضمير`, `في وسط + مكان`, `عندما + جملة`, `في النهاية`, `قال لـ + شخص`, the imperative `انظروا`, `أمر + مفعول به + أن + فعل`, past-result language, and lesson frames such as `القصة تحمل دروسًا`, `تخبرنا أن`, `تبيّن لنا أن`, and `وحده + صاحب...` for restriction/exclusivity.
- Productive transfer uses a new Arabic everyday story with place/time, reported speech, result and a simple lesson.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart11.ts` — added Chapter 16 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart11.ts` — added Chapter 16 Arabic Language Focus.
- `docs/automation/moses-a2-language-polish-progress.md` — updated for the hard phase handoff.

## Wiring
- No `src/data/moses/a2/index.ts` edit was required in this run.
- Existing Part11 imports/fallbacks already attach both English and Arabic Chapter 16 Language Focus arrays automatically by page id.

## Validation
- Read the full current English Chapter 16 story from `preview`.
- Read the full current Arabic Chapter 16 story from `preview` independently.
- Read the current English and Arabic Chapter 16 Quick Challenges and confirmed Language Focus does not duplicate their final-lesson comprehension check.
- Re-fetched `src/data/moses/a2/en/languageFocusPart11.ts` after update and confirmed Chapter 16 activities are present.
- Re-fetched `src/data/moses/a2/ar/languageFocusPart11.ts` after update and confirmed the independently authored Arabic Chapter 16 activities are present.
- Re-fetched `src/data/moses/a2/index.ts` during this run and confirmed Part11 is already included in both English and Arabic Language Focus fallback chains.
- Story prose was not changed.
- Quick Challenge source content, Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because no executable runner was available through the connected GitHub file actions in this run.

## Commits
- Chapter 16 English Language Focus: `31b06896956421cc3e93fcaec32543e1a7013ec5`
- Chapter 16 Arabic Language Focus: `9095464a0afefbfcccec2caf763dbeeca56ec1b0`

## Exact next task
- BUILD LANGUAGE REVIEW ONLY in the next run.
- Use the actual Language Focus taught across Chapters 1–16 to create cumulative English and Arabic Language Reviews.
- Do not audit or modify Quick Challenges, Knowledge Check, Vocabulary Challenge or Final Challenge in that run.
- When Language Review is complete, set `phase: LANGUAGE_REVIEW_COMPLETE` and `nextTask: START_FINAL_EXERCISE_AUDIT_ON_NEXT_RUN`, then STOP.

## Unresolved issues
- None identified for Chapter 16 or the active Chapter 16 Language Focus wiring.
