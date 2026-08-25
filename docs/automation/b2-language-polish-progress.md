# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 3
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE

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

## Chapter 2 English decisions
- Read the full English Chapter 2 text and the active Quick Challenge before authoring.
- Kept Language Focus separate from the Quick Challenge, which already tests the chapter's shared-origin/equality conclusion.
- Targets are grounded in the chapter's explanatory discourse:
  - discourse progression from terminology -> clarification -> example/evidence -> conclusion
  - defining/relational clauses such as `which is ...` and `from which ...`
  - passive voice for information focus (`was created`, `are used`, `have been created`)
  - explicit logical relations with `As an example`, `so`, `therefore`, and `due to`
  - meaning-preserving synthesis that keeps the relation among earth/water/clay and the supporting verse intact
- Productive work asks for a 5–7 sentence evidence-to-conclusion paragraph with a relative clause, deliberate passive focus, an example marker and a genuine conclusion marker.

## Chapter 2 Arabic decisions
- Read the full Arabic Chapter 2 independently and read its active Arabic Quick Challenge.
- Did not translate the English activities mechanically.
- Preserved source qualification in the Arabic opening: `تشير بعض المصادر الإسلامية إلى أن...` is treated as attributed/qualified information and is never strengthened into an absolute historical fact.
- Arabic-native targets include:
  - source attribution and degree of certainty
  - المبني للمجهول as information focus (`خُلِق`, `ذُكرت`)
  - explanatory cohesion with `وتستعمل هذه التعابير...`
  - evidence progression through a Qur'anic example and a second cited source
  - result/synthesis markers `وهكذا` and `بناء على ذلك`
  - reformulation that preserves both qualification and logical sequence
- Productive work asks for a 5–7 sentence Arabic paragraph moving from attributed source to explanation, evidence and supported conclusion.

## TYMM / B2 alignment
- Current B2 architecture follows contextual noticing/discovery -> analysis of meaning/function/discourse effect -> accurate contextual selection/reformulation -> coherent spoken/written production.
- Grammar is treated as a resource for constructing meaning and discourse, not as isolated transformation practice.
- Chapter 2 moves above single-sentence manipulation by requiring learners to follow and reproduce an explanatory evidence-to-conclusion chain.

## Files added
- `src/data/adam/b2/en/languageFocus.ts`
- `src/data/adam/b2/ar/languageFocus.ts`

## Files updated
- `src/data/adam/b2/en/languageFocus.ts` — added Chapter 2 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — added Chapter 2 Arabic Language Focus.
- `src/data/adam/b2/index.ts` — existing generic book-local Language Focus wiring remains active for any chapter present in the Language Focus records; no Chapter-2-specific index write was required.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 3.

## Validation performed
- Confirmed the current `src/data/adam/b2/index.ts` imports both Language Focus records and attaches `languageFocusExercises[page.id]` separately from the active Quick Challenge `exercises` field for every story page.
- Confirmed Chapter 2 English and Arabic each received four Language Focus activities.
- Confirmed the active Quick Challenge remains separate and Language Focus does not retest its human-equality conclusion.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, review/final layers, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 1 English Language Focus: `0232f84978fe0089643f424152f96b99e4858b13`
- Chapter 1 Arabic Language Focus: `be8547a010390d6c08ebdc9b19575a225af6fafd`
- Chapter 1 active wiring: `eab64f62373de6a8bc821cad87c840eee0972fab`
- Chapter 2 English Language Focus: `1082d225023bcf537d9d136257e300d647b2f77b`
- Chapter 2 Arabic Language Focus: `b3aa10a33e7eb9f2c2b72051c592609020bb6b30`

## Next task
- Adam B2 Chapter 3 only.
- Read the full English and Arabic Chapter 3 texts and their active Quick Challenges, then manually author Chapter 3 Language Focus in both languages.
- Do not start Chapter 4 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 2 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
