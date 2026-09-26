# Language Focus rewrite brief (shared by all worker agents)

Repo: /home/user/Stories (branch preview). Do NOT commit, push, stash or reset. Other agents are editing OTHER books at the same time: never touch files outside your scope, and never revert changes you did not make.

## What you are doing
Rewrite the per-chapter Language Focus sets (`languageFocusExercises`) of ONE book in ONE language. Almost every current activity is a `matching` of "chapter expression ⇒ label describing its job". We want variety and better pedagogy, NOT removal of matching. A finished pilot exists: Abraham B1 (`src/data/abraham/b1/en/languageFocus*.ts`, `src/data/abraham/b1/ar/languageFocus*.ts`). Read it first and match its quality, tone and structure.

## Read first
1. docs/MANUAL_CONTENT_AUTHORING_STANDARD.md — binding. Story text is locked. English material is grounded in the English story; Arabic material independently in the Arabic story.
2. Your book's chapter texts: `src/data/<folder>/<level>/<lang>/pages.ts` (`content` of each story page). Also check `src/data/<folder>/<level>/index.ts` (and pages.ts) to see exactly how Language Focus is assembled; for some books part of it is defined outside languageFocus*.ts — edit it where it actually lives.
3. The prior audit for your book (advice only; verify against the text): docs/language-focus/audit/ (per-book audit tables; use your level + language section).
4. src/types.ts (Exercise, FormChoiceItem, ErrorCorrectionItem, TransformationItem), src/lib/exerciseScoring.ts, src/components/exercises/LanguageItemExercises.tsx, scripts/validation/validateExerciseStructure.ts.
5. The teacher guide of your book/language (teacherGuide.ts): keep each chapter's language targets consistent with its grammar focus.

## Pedagogy: Türkiye Yüzyılı Maarif Modeli
- English (upper levels): grammar is learned inductively — discovery / consciousness-raising in meaningful context — not by rule presentation.
- Arabic: holistic / semi-inductive — language met in natural flow and meaning first, then learners notice the function of structures in that context; nahw/sarf and i'rab are practised in meaningful context, not as abstract rules.
- Every chapter set follows NOTICE → BUILD → USE (A2 wording: LOOK → PRACTISE → USE):
  - Slot 1 NOTICE: real chapter sentences; learner discovers what a form does (drag-drop sorting into 2–3 groups, contextual multiple-choice, true-false about meaning, or matching only where it is genuinely best). Rule wording goes in `explanation` (shown after answering).
  - Middle slot(s) BUILD: controlled practice of the same targets in context: choose-form, word-bank, error-correction, transformation, sentence-building, sequencing, fill-blanks, multiple-choice.
  - Last slot USE: keep the chapter's existing reflection exercise (lightly adjust wording only if it refers to a removed activity).
- KEEP the number of activities each chapter has now (3 or 4; some chapters may have 5). Keep each chapter's language targets; change the interaction; fix errors.

## Level calibration
- A2: short, concrete, very clear instructions; minimal metalanguage; recognition with strong support (choose-form with 2–3 options, word-bank, simple 2-group drag-drop, short sentence-building, true-false, simple matching of base↔past or word↔meaning). Matching may stay in about half of the chapters (never in every chapter, never always in slot 1).
- B1: explain/relate/infer; contextual choice, word-bank of linkers, supported transformation, targeted error correction, sequencing where order matters. At most ONE matching per chapter and in no more than ~40% of chapters; only where it is really the best interaction (word/phrase ↔ plain paraphrase, form ↔ form, verb ↔ its fixed preposition).
- B2: analyse/qualify; transformation and sentence combining, error correction (incl. overclaims), stance/hedging/evidence-vs-interpretation sorting, nuance multiple-choice ("which version keeps the writer's stance?"), collocation word-bank. At most ONE matching per chapter and in roughly 25–40% of chapters (keep the best ones: term↔definition, analogy mapping, Qur'anic lines ↔ meaning).

## Hard rules
- Every quoted sentence/phrase/source must be VERBATIM from that chapter's `content` in your language (… allowed to shorten). Error-correction = a verbatim chapter sentence with exactly ONE introduced, typical learner error in the target form. Transformation `source` verbatim; list all natural accepted `answers`.
- NEVER alter, cut into chips, "correct" or gap Qur'anic verses/quotations; they may only be read, sorted, matched to meanings or asked about.
- No item may reveal another item's answer: within an activity and across the activities of the same chapter, do not show a sentence in full if another item asks the learner to supply part of it. Shorten with … instead.
- Exactly one defensible answer per item; distractors are plausible learner errors or meanings, never absurd or word-salad.
- Option order does not matter (the UI shuffles options/items); still, do not always put the answer first.
- Vary types across chapters: no two consecutive chapters with the identical type sequence; no type twice in a row within a chapter; avoid starting most chapters with the same type.
- Kept matchings get `matchingHeadings` (EN e.g. { left: 'From the chapter', right: 'Meaning' }; AR e.g. { left: 'من الفصل', right: 'المعنى' }). Matching needs unique lefts and unique rights, 3–5 pairs, rights that are not guessable from shared keywords.
- Keep the existing exercise `id`s of each chapter's slots (reuse them in slot order) so learners' saved progress is kept. Keep every export name and module shape (index.ts imports them). Do not touch Language Review, Quick Challenge, Knowledge Check, Final Challenge, guides, or story text.
- Learner-facing text: instructions, titles, questions, explanations and `feedback.correct`/`feedback.incorrect` (both required) in the book's language, at the book's level. Incorrect feedback sends the learner back to the chapter evidence.
- Arabic: correct MSA and i'rab in every correct option; full tashkeel on the forms being tested; Arabic-specific targets where English-style targets do not transfer (case after إنّ/كان/ليس/ما زال/لكنّ, أن/لن + منصوب, لم + مجزوم, agreement, dual, passive, مصدر, حال, فـ vs ثمّ, verb + fixed preposition). Standard terminology, sparingly.

## Schema reminders
- choose-form: `formChoices: [{ sentence: '... [choice] ...', options: [...], answer: index }]` — exactly one [choice] per sentence, 2–3 items.
- word-bank: `fillBlanksText` with 2–4 `[blank]`, `wordBank` = answers + at least one distractor, `correctAnswer` = answers in blank order.
- error-correction: `errorItems: [{ sentence, error (exact substring of sentence), options, answer }]`, 1–3 items.
- transformation: `transformItems: [{ source, frame (exactly one [blank]), answers: [...] }]`, 1–3 items (answers compared ignoring case, punctuation and Arabic tashkeel).
- sentence-building: `sentenceChunks` in the correct order (4–7 chunks); optional `correctAnswer` = other accepted orders (arrays of exactly the same chunks).
- drag-drop: `dragDropGroups` + matching `correctAnswer` object; sequencing: `sequencingItems` + `correctAnswer` id order; multiple-choice: `options` + index; true-false: boolean.
- `correctAnswer` must be present on every exercise (null where the type does not use it).

## Checks before you finish
- `npx tsc --noEmit` passes for your files (if errors appear only in files outside your scope, another agent is mid-edit: ignore them and re-run later).
- `npm run validate:exercises`: your book's line must PASS (other books' failures are not yours).
- Write a script in a scratch directory outside the repo (not in the repo) that checks every quoted sentence/source/error sentence (with the correct option substituted back) occurs in the chapter text (normalise quotes, whitespace, punctuation; for Arabic also remove tashkeel; … = gap). Fix mismatches.
- Re-read every item as a learner and as a teacher of the language: one defensible answer, natural language, level-appropriate, no item reveals another.

## Final reply (max ~400 words)
Per chapter: new type sequence + language target(s) (compact); data problems fixed; story-text errors noticed (report only); anything uncertain.

## Added during the run
- Word-bank and sentence-building answers are chosen chips and are scored EXACTLY (tashkeel counts). Typed transformation answers ignore tashkeel, so test case endings with choose-form or error-correction, not transformation.
- If the story text has a clear slip (e.g. sukun before «ال» where a kasra is needed, wrong agreement), do not copy the slip into a learning item: write the correct form in the item (the verbatim check ignores tashkeel) and report the slip. Never change the story text.
