# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE

## Chapter 2 English decisions
- Read the full Chapter 2 English story and its current Quick Challenge before authoring.
- Kept Quick Challenge focused on comprehension of the father’s Mardukh explanation; Language Focus does not ask the same comprehension question again.
- Language Focus targets are grounded in Chapter 2 language:
  - `used to + base verb`, `sometimes`, and `One day` to distinguish repeated past habits from specific story events
  - `Why ...?`, `What is ...?`, identification statements, and `because ...` for asking and explaining
  - `tell + person + not to + base verb` for reporting a negative instruction
  - `bigger than` for a simple comparison, integrated into a short productive speaking/writing task
- Productive task requires learners to ask, compare and explain rather than reproduce the Quick Challenge answer.

## Chapter 2 Arabic decisions
- Read the full Arabic Chapter 2 independently and designed the Arabic Language Focus from its own forms rather than translating the English activities mechanically.
- Language Focus targets are grounded in the Arabic chapter:
  - `كان + الفعل المضارع` for repeated past habits/actions contrasted with `في يوم من الأيام` for a specific event
  - `لماذا ...؟`, `ما هذا ...؟`, `إنه ...`, and `لأنّ ...` for asking, identifying and explaining
  - `قال لابنه ألّا + فعل` for reporting a negative instruction/prohibition
  - `أكبر من` for comparison, integrated into a short productive dialogue task
- Productive task asks the learner to use a question, comparison and reason without repeating the Quick Challenge answer.

## Quality/alignment decisions
- Compared Chapter 2 design with the completed Adam A2 chapter-specific Language Focus architecture on `preview` while keeping Abraham-specific targets.
- Checked the current official Türkiye Yüzyılı Maarif Modeli A2 English programme entry and retained a contextual, function-first sequence: notice chapter language, identify communicative function, reconstruct controlled language, then use it meaningfully.
- No rigid template or blueprint was used to generate the chapter activities.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocus.ts` — added Chapter 2 only
- `src/data/abraham/a2/ar/languageFocus.ts` — added Chapter 2 only
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Confirmed the active `preview` index already wires any chapter-specific entries from the English and Arabic Language Focus records, so no new index change was necessary for Chapter 2.
- Re-fetched the English and Arabic Chapter 2 Language Focus blocks after writing and confirmed both are present on `preview`.
- Story prose was not changed.
- Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Chapter 2 English Language Focus commit: `d981f46a44d33727160f34e27fb394ede4d1f1c1`
- Chapter 2 Arabic Language Focus/content head before this checkpoint: `d270a2c4777a03d595abe6e3493d9fd091261b4b`

## Next task
- Chapter 3 only: read the full English and Arabic Chapter 3 texts and their Quick Challenges, then manually author Chapter 3 Language Focus in both languages.
- Do not start Chapter 4 in the same run.

## Unresolved issues
- None for Chapter 2.
