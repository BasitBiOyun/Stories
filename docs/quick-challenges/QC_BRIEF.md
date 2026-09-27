# Quick Challenge rewrite brief (shared by all worker agents)

Repo: /home/user/Stories (branch `preview`). Do NOT commit, push, stash or reset. Other agents edit OTHER books at the same time: never touch files outside your scope and never revert changes you did not make.

## Goal
Improve the Quick Challenge of every story chapter of ONE book, in English and Arabic, to the standard of the finished pilot: **Mecca A2** — `src/data/mecca/a2/en/exercises.ts` and `src/data/mecca/a2/ar/exercises.ts` (`meccaA2QuickChallenges`, `meccaA2QuickChallengesAr`). Read the pilot first.

## Fixed decisions (do not change)
- **Exactly one Quick Challenge per chapter, one question.** It is a short check that must not interrupt the reading. Never add questions, never use multi-question formats (`quiz-game`, several `questionItems`).
- **Story text and audio stay unchanged.** Do not edit `content`, titles or audio. If the text has an error, write the question so that it does not depend on the wrong wording, and report the error.
- Keep each chapter's existing Quick Challenge `id` (saved progress depends on it) and the export names.

## Where the Quick Challenges live
It differs per book. Start from `src/data/<folder>/<level>/index.ts` and follow how `exercises` is set on story pages (for example a `…QuickChallenges` record in `en/exercises.ts`, a `…Polished` override, or a record inside `pages.ts`). Edit the object that the app actually uses; if a `…Polished` or override object replaces a chapter, edit it there. See what learners get with:
`npx tsx docs/quick-challenges/tools/dumpQuickChallenges.mts <story> <LEVEL> <en|ar>`
and read the chapter text with
`npx tsx docs/teacher-guides/tools/dumpChapters.mts <story> <LEVEL> <en|ar> [from] [to]`
(story ids: `adam`, `ibrahim` for Abraham, `musa` for Moses, `mecca`, `yunusEmre`; LEVEL `A2` | `B1` | `B2`).

## What a good Quick Challenge is
1. **Scored types only:** `multiple-choice` (3 options, B2 may use 4), `true-false`, `matching` (3–4 pairs, with `matchingHeadings: { left, right }` that fit the question), `sequencing` (4–5 items). No `tap-reveal`, `reflection` or other unscored types. Use `drag-drop` only if it clearly fits.
2. **Variety across the book:** at least three types. `multiple-choice` may be the majority, but never the same type in more than three chapters in a row.
3. **One clear target per chapter:** the chapter's key event or idea, a cause (why?), an order of events, a person's feeling or decision, or a careful detail (a number, a place, who did what). At least a few chapters per book ask "why" or need a small inference.
4. **Level:**
   - A2: short, concrete question wording; literal understanding plus simple why and sequence questions.
   - B1: add inference, cause and effect, and relationships between ideas.
   - B2: add the writer's stance, evidence versus interpretation, what a source claims, and the purpose of a paragraph. Stay one clear question.
5. **Distractors:** plausible and taken from the story (a real person, place, number or event applied to the wrong situation), never absurd, never a joke. They must not be too hard: avoid partly true options, double negatives and trick wording. Exactly one defensible answer.
6. **Nothing guessable without reading:** no shared keyword between a question and only its answer, and no matching pair that repeats a word from its partner (for example "Human value" with "…less valuable").
7. **Feedback (required, both):**
   - `correct`: one short sentence that says why the answer is right, tied to the text. Do not write only "Correct."
   - `incorrect`: where to look (paragraph or beginning/middle/end) and what to look for. Do not give the answer.
   - `explanation`: the evidence, quoting the chapter where useful.
8. **TYMM:** a short, formative, text-based check that gives useful feedback and, where the chapter supports it, touches a value (justice, patience, honesty, respect …) through the story, not through preaching.

## Hard rules
- Quotations from the chapter are verbatim in that language (… allowed).
- Qur'anic verses, hadiths, prayers and poem lines are never gapped, cut into items, "corrected" or rewritten. Learners may be asked what they mean or who says them.
- The Arabic Quick Challenge is written from the Arabic chapter text in correct MSA. Use tashkeel where it helps reading. Do not copy a slip from the story into a question.
- Violence and captivity are asked about factually and calmly; never ask learners to imagine or describe suffering.
- Keep instructions short and in the book's language and level (Arabic UI text in Arabic).

## Checks before you finish
- `npx tsc --noEmit` (errors only in other books' files = another agent mid-edit; ignore them and re-run later).
- `npm run validate:exercises` — your book must pass.
- Re-run the dump tool for both languages and read every question as a learner: one defensible answer, fair distractors, feedback helpful.
- If a teacher guide or self-study guide of your book quotes an old Quick Challenge (question text or answer), update that sentence.

## Final reply (max ~250 words)
Per language: type distribution before → after, the main problems fixed (wrong facts, weak distractors, unscored types), any story-text errors noticed (report only), anything uncertain.
