# Language Review rewrite brief (shared by all worker agents)

Repo: /home/user/Stories (branch `claude/yunus-emre-a2-language-review-h27mqw`). Do NOT commit, push, stash or reset. Other agents edit OTHER books at the same time: never touch files outside your scope and never revert changes you did not make.

## Goal
Rewrite the book-level **Language Review** (the one page with `type: 'exercises'`, title "Language Review" / «مراجعة اللغة») of ONE book, in English and Arabic, to the standard of the approved pilot: **Yunus Emre A2** — `yunusA2LanguageReviewExercises` in `src/data/yunusEmre/a2/en/exercises.ts` and `yunusA2LanguageReviewExercisesAr` in `src/data/yunusEmre/a2/ar/exercises.ts`. Read both completely first and match their quality, tone and structure. The user approved this pilot as the system for all books.

## Read first
1. The pilot (both languages).
2. `docs/MANUAL_CONTENT_AUTHORING_STANDARD.md` §4 (Language Review), §5 (no repeats), §6, §7 — binding. Story text is locked.
3. `docs/language-focus/REWRITE_BRIEF.md` — the pedagogy (TYMM), level calibration, hard rules and schema reminders apply here too.
4. Your book's chapters with their CURRENT Language Focus: `npx tsx docs/teacher-guides/tools/dumpChapters.mts <story> <LEVEL> <en|ar>` (registry ids: adam, ibrahim = Abraham, musa = Moses, mecca, yunusEmre). Redirect it to a file in your scratch directory and read that file; do not print everything into your context at once.
5. The teacher guide metadata `grammarSequence` of your book (`teacherGuide.ts`, both languages): the book's language targets, chapter by chapter.
6. The current Language Review: `npx tsx docs/language-review/tools/checkReview.mts <storyId> <LEVEL> --dump` (registry ids: adam, ibrahim = Abraham, musa = Moses, mecca, yunusEmre). Find where the exported array the app actually uses lives by following `src/data/<folder>/<level>/index.ts` (some books define a Language Review array twice; edit the one index.ts imports, and leave the other untouched). Also read the Knowledge Check and Final Challenge of your book so you do not repeat their questions.

## What a Language Review is
A cumulative language workshop for the whole book: it revisits the language patterns the chapters' Language Focus developed, links them ACROSS chapters, and ends with transfer into the learner's own world. It is not a comprehension test: the target of every item is the language (form, meaning, use), and the story sentence is only the anchor.

The UI splits the items into three stages by count (first ≈30% Look/Notice, last ≈25% Use, the rest Practise/Build) and locks each stage until the previous one is done. So the number of items fixes the stages:
- **A2: exactly 9 items → 3 Look / 4 Practise / 2 Use.** Titles start with `Look:` / `Practise:` / `Use:` (AR `انظر:` / `تدرّب:` / `استخدم:`).
- **B1 and B2: exactly 10 items → 3 Notice / 4 Build / 3 Use.** Titles start with `Notice:` / `Build:` / `Use:` (AR `لاحظ:` / `ابنِ:` / `استخدم:`).

Stage content:
- **Look / Notice (items 1–3):** real sentences from DIFFERENT chapters; the learner discovers what a form does (drag-drop sorting into 2–3 groups, contextual multiple-choice, true-false about meaning, at most one matching). The rule goes into `explanation`, shown after answering.
- **Practise / Build (4 items):** controlled practice of the reviewed targets in the book's own sentences, mixing chapters: word-bank, choose-form, error-correction, sentence-building, transformation, sequencing (only where order is the language point), fill-blanks, multiple-choice.
- **Use (A2: 2 items, B1/B2: 3 items):** NOT from the story. First one (B1/B2: first two) is a controlled task in a new, everyday context from the learners' world (school, family, town), written by you, e.g. a short text with word-bank gaps, choose-form, error-correction or transformation of new sentences. The last item is a `reflection` with 4 `discussionPrompts` (sentence frames that name the reviewed forms; modes Individual/Pair), an `explanation` that is a short model answer, `feedback.correct` = a self-check list of the forms, `feedback.incorrect: ''`. Ids of these items end in `-new-context` (numbered, e.g. `-8-new-context`, `-9-new-context`) and `-transfer`.

Coverage: choose 5–7 of the book's most important language strands from `grammarSequence` + Language Focus (tense/aspect, linkers of reason/result/contrast, modality, verb patterns, quantity/frequency, reported speech, conditionals, passive, relative clauses, stance/hedging at B2 …). Each Look/Practise item combines evidence from at least two chapters where that is natural. Spread the anchors over the whole book (beginning, middle, end).

## Level calibration
- **A2:** as the pilot. Short, concrete instructions; minimal metalanguage; strong support (2–3 options, word-bank with 2 distractors, 2-group sort, 4–5 chunk sentence-building). Use texts of 4–5 short sentences.
- **B1:** explain/relate/infer: contextual choice, linker word-bank, targeted error correction, supported transformation (1–3 items, all natural answers listed), sentence combining. Use: a new-context text (6–8 sentences) and a transformation or error-correction on new sentences; final writing of 5–6 connected sentences.
- **B2:** analyse/qualify: transformation and sentence combining, error correction (incl. overclaims), stance/hedging/evidence-vs-interpretation sorting, nuance multiple-choice ("which version keeps the writer's stance?"), collocation word-bank. Use: a new-context paragraph and a rewriting/hedging task on new sentences; final writing of a short argued paragraph (6–8 sentences) with a stated position, evidence and a qualification.

## Hard rules (see also the Language Focus brief)
- Every story sentence/phrase/source is VERBATIM from the chapter text in that language (… to shorten). Error-correction = a verbatim sentence with exactly ONE introduced typical learner error; `error` is an exact substring. Transformation `source` verbatim; list all natural `answers`.
- Qur'anic verses, hadiths, prayers, prophets' prayers or sacred statements (even paraphrased), and poem lines: never gapped, cut into chips, corrected or rewritten. They may only be read, sorted, matched to meanings, or asked about.
- Exactly one defensible answer per item and per gap. In word-banks check every chip in every gap: no other chip may also fit (grammar AND meaning). Distractors are plausible learner errors, never absurd.
- No item reveals another item's answer (shorten with …). Explanations are shown after answering: an earlier item's explanation must not give a later item's answer. Only a `-new-context` item may reuse words the earlier items taught.
- At most ONE matching (with `matchingHeadings`, 3–5 pairs, rights not guessable by shared words). No type twice in a row. No `tap-reveal`, no `quiz-game`.
- Do not repeat a Knowledge Check, Final Challenge or Quick Challenge question; the same sentence may reappear only with a genuinely different, language-focused task. Avoid copying a Language Focus item one-to-one (same sentence + same gap); the review recombines.
- New-context texts: natural, correct, level-appropriate, culturally at home in a Turkish school; values (respect, responsibility, honesty, helpfulness, patience …) come through the situation, not through preaching; no religious claims or invented facts about the book's people.
- Arabic is written natively from the Arabic story, never translated from the English review; correct MSA and i'rab; full tashkeel on the tested forms and on new-context texts; Arabic-specific targets (case after إنّ/كان/ليس/لكنّ, أن/لن + منصوب, لم + مجزوم, agreement incl. non-human plurals, dual, passive, مصدر, حال, تمييز, فـ vs ثمّ, verbs with fixed prepositions, اسم التفضيل …) as practised in that book's Arabic Language Focus. Word-bank and sentence-building chips are scored EXACTLY (tashkeel counts); typed transformation answers ignore tashkeel, so test case endings with choose-form/error-correction. Do not copy a story-text slip into an item; write the correct form (the verbatim check ignores tashkeel) and report the slip.
- Keep the export names and module shape (index.ts imports them). New ids: `<prefix>-language-review-<n>-<slug>` (English) and the book's Arabic prefix pattern, numbered 1…9 or 1…10 in order, unique in the book.
- Edit ONLY the Language Review array(s) of your book. Do not touch story text, Language Focus, Quick Challenge, Knowledge Check, Final Challenge, vocabulary, guides or components.

## Checks before you finish
- `npx tsx docs/language-review/tools/checkReview.mts <storyId> <LEVEL>` must end with `OK` (it checks stages, types, verbatim quotes and answer reveals).
- `npx tsc --noEmit` (errors only in other books' files = another agent mid-edit; re-run later) and `npm run validate:exercises` (your book must pass).
- Re-read every item as a learner and as a teacher of that language: one defensible answer, natural language, right level, no reveal, the explanation confirms the rule the learner just found.

## Final reply (max ~300 words)
Per language: the new item list (stage, type, target, chapters used), what was wrong in the old review (unsupported quotes, label matchings, stage problems …), story-text slips noticed (report only), anything uncertain.
