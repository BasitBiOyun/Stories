# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 2
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE

## Chapter 1 English decisions
- Read the full English Introduction and the active Chapter 1 Quick Challenge before authoring.
- Kept the Quick Challenge role separate: it already tests the chapter's good-versus-evil framing, so Language Focus does not retest that interpretation.
- Language Focus targets are grounded in the chapter's actual discourse:
  - source-grounding with `Based on ...` / `According to ...`
  - passive voice as information focus (`was created`, `is told`, `is portrayed`)
  - representation language (`is portrayed as`)
  - contrast and correction with `not ... but ...`, `rather than`, `as opposed to`, and explicit difference
  - meaning-preserving reformulation without strengthening the source
- Productive work requires a coherent 4–6 sentence explanatory paragraph using source-grounding, deliberate information focus and contrast rather than isolated grammar manipulation.

## Chapter 1 Arabic decisions
- Read the full Arabic Introduction independently and authored from the Arabic text rather than translating the English activities.
- Kept the Arabic Quick Challenge role separate; Language Focus does not retest the final good-versus-evil interpretation.
- Arabic-native targets include:
  - source-grounding with `وفقًا لـ` / `استنادًا إلى`
  - المبني للمجهول to foreground event/topic (`خُلِق`, `تُذكر`, `يوصف`)
  - representation wording rather than unqualified assertion
  - contrast/correction with `ليس... بل...`, `أكثر من كونه...`, explicit difference and opposition
  - cohesive reformulation that preserves the source's original distinction
- Productive work asks for a 4–6 sentence Arabic explanatory paragraph with source, focus and contrast controlled deliberately.

## TYMM / B2 alignment
- Verified current official TYMM B2 guidance during this run.
- The official B2 guidance explicitly requires target grammatical items to be found in contextual texts and then selected/used accurately, efficiently and naturally in contextual oral/written activities.
- Chapter 1 therefore uses contextual noticing -> discourse-function analysis -> meaning-preserving reformulation -> coherent production, rather than decontextualized rule drills.

## Files added
- `src/data/adam/b2/en/languageFocus.ts`
- `src/data/adam/b2/ar/languageFocus.ts`

## Files updated
- `src/data/adam/b2/index.ts` — added book-local Language Focus imports and active `languageFocusExercises` wiring for story pages.
- `docs/automation/b2-language-polish-progress.md` — initialized.

## Validation performed
- Re-fetched both new Language Focus files from `preview` and confirmed four activities exist in each language.
- Re-fetched `src/data/adam/b2/index.ts` after the concurrent-safe write and confirmed the English/Arabic Language Focus imports and `languageFocusExercises` attachment are active.
- Confirmed the existing active Quick Challenge for Chapter 1 remains the only `exercises` item on the story page; Language Focus is attached separately through the dedicated page field.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, existing review/final layers, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 1 English Language Focus: `0232f84978fe0089643f424152f96b99e4858b13`
- Chapter 1 Arabic Language Focus: `be8547a010390d6c08ebdc9b19575a225af6fafd`
- Chapter 1 active wiring: `eab64f62373de6a8bc821cad87c840eee0972fab`

## Next task
- Adam B2 Chapter 2 only.
- Read the full English and Arabic Chapter 2 texts and their active Quick Challenges, then manually author Chapter 2 Language Focus in both languages.
- Do not start Chapter 3 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 1 Language Focus.
