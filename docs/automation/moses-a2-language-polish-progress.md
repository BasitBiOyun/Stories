# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–7 English Language Focus: COMPLETE
- Chapters 1–7 Arabic Language Focus: COMPLETE
- Chapters 8–16: PENDING

## Chapter 7 English decisions
- Read the full Chapter 7 English story and its current Quick Challenge before authoring.
- Kept the Quick Challenge focused on why Midian was safer than Egypt; Language Focus does not ask learners to retrieve that answer again.
- Targets are grounded in Chapter 7 language: simple past journey actions (`left`, `travelled`, `arrived`); sequencing with `after + time`; the useful chunk `arrive at + place`; condition-result language in `tired and thirsty, so ...`; `look for + noun`; scene-setting with `there were`; past continuous in `were watering` / `were sitting`; and present continuous inside the direct question `Why are you sitting ...?`.
- Productive transfer asks learners to describe a new safe arrival scene using time, need, search and ongoing-action language rather than retelling Moses’s journey.

## Chapter 7 Arabic decisions
- Read the full Arabic Chapter 7 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Kept the Arabic Quick Challenge focused on why Midian was safer; Language Focus instead works with journey sequencing, need-result, searching, scene-setting and ongoing actions.
- Targets are grounded in the Arabic chapter: past journey verbs such as `غادر / سافر / وصل`; sequencing with `بعد + مدة`; `وصل إلى + مكان`; condition-result with `كان موسى متعبًا وعطشان` + `لذلك`; `بحث عن + اسم`; scene-setting with `كان هناك`; ongoing past scene description with `كانوا + فعل مضارع`; location with `بعيدًا عن`; and dual/direct-question language in `الفتاتان` / `لماذا تجلسان ...؟`.
- Productive transfer uses Arabic-native frames in a new safe arrival scene rather than mechanically mirroring the English output.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart4.ts` — added Chapter 7 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart4.ts` — added Chapter 7 Arabic Language Focus.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Chapter 7 full English and Arabic story texts were read from `preview`.
- Chapter 7 English and Arabic Quick Challenges were read; the new Language Focus does not duplicate their Midian-safety comprehension question.
- Re-fetched both Part4 files after writing and confirmed four manually authored Chapter 7 activities are present in each language.
- Existing `src/data/moses/a2/index.ts` already imports Part4 and uses it in both English and Arabic Language Focus fallback chains, so no wiring edit was required in this run.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 7 English Language Focus: `841792349fe72ecffdb113fdd232999467096a4f`
- Chapter 7 Arabic Language Focus: `86ac4504429f04a44bcfbc2062258a1b5ad26b43`

## Next task
- Chapter 8 only: read the full English and Arabic Chapter 8 texts and their Quick Challenges, then manually author Chapter 8 Language Focus in both languages.
- Do not start Chapter 9 in the same run.

## Unresolved issues
- None identified for Chapter 7.
