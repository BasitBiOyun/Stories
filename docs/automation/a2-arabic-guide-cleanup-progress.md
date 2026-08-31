# A2 Arabic Guide Cleanup Progress

phase: CLEANUP
currentBook: Adam A2
status: PARTIAL

## Files inspected
- `src/data/adam/a2/ar/teacherGuide.ts`
- `src/data/adam/a2/ar/selfStudyGuide.ts`

## Completed this run
- `src/data/adam/a2/ar/teacherGuide.ts` cleaned and committed.
- User-visible English assessment/interface labels were replaced with natural Arabic, including Quick Challenge, Knowledge Check, Retrieval Review, Vocabulary Challenge, Review Quiz, Final Challenge, Tap & Reveal, hotspot, Review and Final references.
- English grammar labels used as explanatory prose were localized, including Simple Past and First Conditional.
- Necessary English target-language examples and forms were intentionally retained where they are the object of English learning, including example sentences, vocabulary/pronunciation targets, connectors such as because/but/so, and forms such as should, will/won’t and be going to.

## Remaining work in current book
- Clean `src/data/adam/a2/ar/selfStudyGuide.ts` using the same rule set.
- Re-inspect both Adam A2 Arabic guide files after the Self-Study Guide cleanup, then mark Adam A2 COMPLETE if no unintended English prose remains.

## Files changed
- `src/data/adam/a2/ar/teacherGuide.ts`
- `docs/automation/a2-arabic-guide-cleanup-progress.md`

## Commit
- Teacher Guide commit: `d92b85cc33b7f32eab8cf75c50304de33a55c4c8`

nextTask: RESUME_ADAM_A2_SELF_STUDY_GUIDE
