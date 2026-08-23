# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapters 2–16: PENDING

## Chapter 1 English decisions
- Read the full Chapter 1 English story and its current Quick Challenge before authoring.
- Kept Quick Challenge focused on the contrast between Pharaoh and the Children of Israel; Language Focus does not ask learners to retrieve that same comprehension answer.
- Language Focus targets are grounded in the actual Chapter 1 text:
  - `was / were` for identity, role, qualities and past relationships
  - `believed / thought` for reporting belief and ideas
  - `did not + base verb` for negative past belief/thought
  - `because of + noun` for cause and result
- Productive work transfers these patterns to a short new A2 contrast rather than retelling the chapter.

## Chapter 1 Arabic decisions
- Read the full Arabic Chapter 1 independently and designed the Arabic Language Focus from its own text rather than translating the English tasks.
- Language Focus targets are grounded in the Arabic chapter:
  - `كان / كانوا` for past identity, role, qualities and relationships
  - `يؤمن / يعتقد` for belief and thought
  - `لم + فعل مضارع` for negation in past meaning
  - `بسبب + اسم` for expressing cause
- Productive work asks learners to describe and explain a new simple contrast using the Arabic-native patterns.

## Files changed
- `src/data/moses/a2/en/languageFocus.ts` — created with Chapter 1 English Language Focus
- `src/data/moses/a2/ar/languageFocus.ts` — created with Chapter 1 Arabic Language Focus
- `src/data/moses/a2/index.ts` — added book-local Language Focus imports and conditional chapter wiring
- `docs/automation/moses-a2-language-polish-progress.md` — created

## Validation
- Re-fetched the English Language Focus from `preview`; four Chapter 1 activities are present.
- Re-fetched the Arabic Language Focus from `preview`; four independently authored Chapter 1 activities are present.
- The active Moses A2 index was updated to attach `languageFocusExercises` only when a chapter has authored Language Focus data, leaving later chapters unchanged until their own run.
- Existing Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide and Self Study Guide content was not rewritten in this run.
- Canonical story prose was not changed.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 1 English Language Focus: `8266b66f16fd443ced9245173e3527ab4539b4a9`
- Chapter 1 Arabic Language Focus: `1035056d31b7f3bc604e562a0ccad08737a562ae`
- Chapter 1 active wiring: `3f9f7cd8cae85ccc180cec660ba258bdcc557dfc`

## Next task
- Chapter 2 only: read the full English and Arabic Chapter 2 texts and their Quick Challenges, then manually author Chapter 2 Language Focus in both languages.
- Do not start Chapter 3 in the same run.

## Unresolved issues
- None identified for Chapter 1.
