# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–5 English Language Focus: COMPLETE
- Chapters 1–5 Arabic Language Focus: COMPLETE
- Chapters 6–16: PENDING

## Chapter 5 English decisions
- Read the full Chapter 5 English story and its current Quick Challenge before authoring.
- Kept Quick Challenge focused on the event sequence that returned baby Moses to his mother; Language Focus does not ask learners to retrieve that sequence again.
- Targets are grounded in Chapter 5 language: `take care of` / `look after` for care; `grow up` for development; `become + noun/adjective phrase` for change of state; `always` for a regular or continuing quality; `because + clause` for giving a reason; and `was/were + verb-ing` contrasted with simple past for background action and a new event.
- Productive transfer asks learners to describe a new helpful person using care, change, habit and reason language rather than retelling Moses's story.

## Chapter 5 Arabic decisions
- Read the full Arabic Chapter 5 independently and designed from its own text rather than translating the English activity.
- Kept the Arabic Quick Challenge focused on the return-to-mother sequence; Language Focus works with language function instead of repeating that comprehension task.
- Targets are grounded in the Arabic chapter: `اعتنى بـ` for care; `نشأ` for growth/development; `أصبح + اسم/صفة` for change of state; `دائمًا` for a regular or continuing quality; `لأن + جملة` for reason; and `كان + فعل مضارع` with a following past verb such as `رأى` for background action and a new event.
- Productive transfer uses Arabic-native frames to describe a new helpful person and situation.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart3.ts` — added Chapter 5 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart3.ts` — added Chapter 5 Arabic Language Focus.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Chapter 5 full English and Arabic story texts were read from `preview`.
- Chapter 5 English and Arabic Quick Challenges were read; the new Language Focus does not duplicate their return-to-mother sequencing task.
- Re-fetched both Part3 files after writing and confirmed Chapter 5 contains four manually authored activities in each language.
- Existing `src/data/moses/a2/index.ts` already resolves Language Focus through the Part3 records for both English and Arabic, so no wiring edit was required in this run.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 5 English Language Focus: `4f7bf7588ede1ed6c344b62e10ee377ffa9bf9c2`
- Chapter 5 Arabic Language Focus: `a5c735be5e02740561d3274ee3afdcdb7e52daaa`

## Next task
- Chapter 6 only: read the full English and Arabic Chapter 6 texts and their Quick Challenges, then manually author Chapter 6 Language Focus in both languages.
- Do not start Chapter 7 in the same run.

## Unresolved issues
- None identified for Chapter 5.
