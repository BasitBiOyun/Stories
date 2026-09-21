# Manual Content Authoring Standard

This document is the single pedagogical authoring standard for Stories across A2, B1 and B2.

## Core principle

**Structure by code. Learning content by hand.**

Code may lock page order, activity counts, supported exercise types, guide headings and UI behaviour. Code must not generate, rewrite, paraphrase, upgrade or “goldify” pedagogical content.

Every story is read manually. Quick Challenges, whole-book assessments, Vocabulary Challenge content, Language Review content, Final Challenge content, Teacher Guide content and Self-Study Guide content are written manually from that story.

Once a book is reviewed and approved, its learning content is locked and changes only through an explicit manual edit.

---

## 1. Story source is locked

Story prose is the source of truth.

Do not silently rewrite, simplify, correct, merge, split, reorder or paraphrase story text while working on exercises, guides, UI, hotspots, Word Notes or assessment.

Suspected language, historical, cultural or religious errors are reported separately. Story prose changes only after explicit approval.

English learning material is grounded in the English story. Arabic learning material is grounded independently in the Arabic story.

Hotspots and Word Notes must come from the same chapter they support. They must not invent new facts or unsupported interpretations.

---

## 2. One source of truth per book

The target book structure is direct and readable. Avoid chains of generated, overridden or progressively transformed pedagogical files.

Preferred shape:

```text
story/<book>/<level>/
  story.en.ts
  story.ar.ts
  exercises.en.ts
  exercises.ar.ts
  teacherGuide.en.ts
  teacherGuide.ar.ts
  selfStudyGuide.en.ts
  selfStudyGuide.ar.ts
  metadata.ts
  index.ts
```

Equivalent grouping is allowed when it improves readability, but each piece of learning content must have one obvious authored source.

No pedagogical content generator may overwrite approved manual material at runtime.

---

## 3. Supported exercise types

The shared UI may render these authored types:

- Multiple Choice
- True / False
- Matching
- Fill in the Blank
- Tap & Reveal
- Sequencing
- Reflection
- Quiz Game

An exercise type is chosen because it fits the learning point, not because a quota needs filling.

### Tap & Reveal rule

Tap & Reveal is **Quick Challenge only**.

Across one complete book, use Tap & Reveal **once or at most twice**.

Tap & Reveal must never appear in Knowledge Check, Language Review or Final Challenge.

---

## 4. Assessment roles must stay separate

The project intentionally contains several assessment moments. They are not duplicates; each has a different job.

### Quick Challenge

Purpose: check the most important idea immediately after one chapter.

- exactly 1 per chapter
- manually authored from that chapter
- short and focused
- may use Tap & Reveal, subject to the 1–2 per-book limit

### Knowledge Check

Purpose: check clear whole-book comprehension after reading.

- 8 questions
- broad chapter coverage
- direct but meaningful comprehension
- avoid trivia unless the fact genuinely matters to the story

### Vocabulary Challenge

Purpose: check important meaning-bearing story vocabulary in context.

- A2: 6 reviewed pairs
- B1: 10 reviewed pairs
- B2: 10 reviewed pairs
- every word and every meaning must be unique
- definitions must distinguish the words; two different words must not share an indistinguishable answer

### Language Review

Purpose: revisit and actively use the language patterns developed across the whole book. It is a language workshop, not another story-comprehension test.

- A2 learner-facing language must stay short and concrete. The progression is **Look → Practice → Use**.
- B1 and B2 use **Notice → Build → Use**.
- Review grammar patterns, connectors, tense/aspect, modality, communicative functions and discourse relationships that actually appear in the book.
- Story sentences may anchor a language point, but the task target must be the language itself rather than retrieval of a micro-fact.
- Select exercise types according to the language goal. Do not force a fixed legacy activity sequence.
- Finish with productive transfer where learners use reviewed language in a new, non-story context.
- Do not repeat Knowledge Check or Final Challenge questions under a different wording.

### Final Challenge

Purpose: demonstrate whole-book mastery through a third, independent assessment set.

- exactly 10 scored activities
- no Tap & Reveal
- no unscored Reflection
- maximum 2 questions from any one chapter
- broad coverage of the book’s important learning
- question type must suit the learning point

Locked 10-question distribution:

- 3 Multiple Choice
- 2 True / False
- 2 Matching
- 2 Fill in the Blank
- 1 Sequencing

This distribution applies to A2, B1 and B2. The cognitive demand changes by level; the structural mix remains stable.

---

## 5. No-repeat rule across assessments

Quick Challenge, Knowledge Check, Language Review and Final Challenge are separate authored sets.

Do not reuse the same question.

Do not ask the same micro-fact repeatedly with cosmetic wording changes.

The same major theme may reappear only when the learner is doing something genuinely different with it.

Example:

- Knowledge Check: `Who did the dervishes share with?`
- Language Review: a Chapter 2 language pattern or communicative function, practised for form, meaning and use
- Final Challenge: a different relationship, comparison or application from Chapter 2

Before approval, manually compare all four assessment layers for repetition.

---

## 6. Question-writing rules

Every question is written after reading the relevant chapter.

- Correct answer must be directly supported by the story.
- Do not strengthen the source claim. `what they had` must not become `all they had`.
- Distractors should represent plausible misunderstandings where possible.
- Avoid cartoonishly wrong distractors that make the answer obvious.
- Avoid random dates, names or trivia when a more meaningful learning point is available.
- Matching requires unique left concepts and unique right answers.
- Matching must create a real distinction; do not map two different concepts to the same response.
- Fill-in-the-blank should test meaningful story language, not arbitrary spelling.
- Sequencing is used only when order matters.
- True / False statements should test understanding, not trick wording.
- Question type follows the learning point. Never invent a bad matching or sequencing task just to use the format.

---

## 7. Level expectations

The structure stays stable; the thinking demand changes.

### A2

Core demand: **understand, notice, connect and express simply.**

Prefer:

- explicit comprehension
- clear sequence
- concrete cause/result
- simple comparison
- key vocabulary in context
- one clear relationship or lesson
- short controlled language

Avoid unsupported abstraction and trivia-heavy testing.

### B1

Core demand: **explain, relate, infer and support.**

Prefer:

- main idea
- cause/result
- motivation
- comparison
- text-supported inference
- claim + evidence + short explanation
- relationships across nearby events or ideas

Questions should require more than simple retrieval while remaining clearly grounded in the story.

### B2

Core demand: **analyse, evaluate, qualify and synthesise.**

Prefer:

- evidence selection
- comparison of explanations
- inference from evidence
- cause and consequence
- turning points
- evidence vs interpretation
- qualified claims
- synthesis across chapters when appropriate

Higher-level thinking must still remain traceable to story evidence. Do not manufacture complexity that the source cannot support.

---

## 8. Teacher Guide template

Only the **heading structure** is locked. The content under every heading is written manually for that chapter.

Each chapter uses:

1. Learning Objectives
2. Pedagogy & Approach
3. Prior Knowledge
4. Anticipated Misconceptions
5. Grammar Focus
6. Pronunciation Focus
7. Before Reading
8. During Reading
9. After Reading
10. Lesson Flow
11. Discussion Questions
12. Interactive Use
13. Differentiation
   - Support
   - Fast Finishers
14. Formative Assessment
15. Expected Responses
16. Transfer Task
17. Exit Ticket / Teacher Reflection

Rules:

- No generic paragraph repeated across chapters.
- Lesson Flow must respond to the actual chapter content.
- Misconceptions must be plausible for that specific chapter.
- Interactive Use may reference only UI elements that actually exist.
- Do not invent worksheets, resources or activities that are not supplied.
- Teacher language may be professional, but instructions must be usable in a real lesson.

---

## 9. Self-Study Guide template

Only the **heading structure** is locked. Every chapter’s learner instructions are written manually.

Each chapter uses:

1. Chapter Goals
2. What to Notice
3. Read / Listen
4. Find the Answer in the Story
5. Vocabulary in Context
6. Quick Challenge
7. If You Get It Wrong
8. Check Yourself
9. Use What You Learned
10. Reflection

Rules:

- No generic study paragraph copied across chapters.
- Learner language must match the CEFR level.
- A2 instructions should use especially simple, short language.
- The study path should follow the chapter’s real difficulty and learning point.
- Wrong-answer support should direct the learner back to the relevant story evidence, then ask them to try again.

---

## 10. Manual authoring workflow

For every book:

1. Read the complete story in the target language.
2. Read each chapter again individually.
3. Identify the chapter’s main event, important fact/relationship, useful vocabulary, language opportunity, value/meaning where supported, and likely learner misconception.
4. Manually write one Quick Challenge per chapter.
5. Manually write the 8-question Knowledge Check.
6. Manually select and define the Vocabulary Challenge set.
7. Manually write the cumulative Language Review as a staged language workshop appropriate to the CEFR level.
8. Manually write the independent 10-item Final Challenge using the locked distribution.
9. Compare Quick / Knowledge / Language Review / Final and remove repeated micro-facts.
10. Manually write every Teacher Guide chapter.
11. Manually write every Self-Study Guide chapter.
12. Review English and Arabic independently against their own source texts.
13. Test all interactions in the UI.
14. Human-review the complete learner journey.
15. Mark the book approved/locked only when the material is satisfactory.

---

## 11. What code is allowed to lock

Code may enforce or provide UI for:

- page order
- activity count
- question count
- allowed exercise types
- Final Challenge type distribution
- Tap & Reveal location and 1–2 per-book maximum
- guide heading order
- IDs and navigation
- scoring behaviour
- basic rendering safety

Code must not decide:

- what the important learning point is
- what question to ask
- what the correct answer means
- what distractors to write
- what vocabulary is important
- what pedagogy a chapter needs
- what misconception a learner may have
- what Teacher Guide or Self-Study Guide prose should say

Those are manual authoring decisions.

---

## 12. Approval and lock

When a book is approved:

- story source is locked
- exercises are locked
- Teacher Guide is locked
- Self-Study Guide is locked

A later global engine or template change must not rewrite approved book content.

Approved content changes only through an intentional manual edit and review.

---

## Final rule

**The application owns the structure. The author owns the learning.**
