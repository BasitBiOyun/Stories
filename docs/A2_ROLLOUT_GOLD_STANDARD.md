# A2 Rollout Gold Standard

This contract applies to all current A2 books: Adam, Abraham, Mecca/Bilal, Moses, and Yunus Emre, in English and Arabic. Adam A2 remains the reference Gold Master for the learning and print system.

## Canonical boundary

The following story-source fields are read-only during rollout:

- story prose and paragraph order
- chapter id, type, title, subtitle and order
- story image reference
- audio reference
- animated-word source list
- sync points and timed chunks

Derived learning material may be improved. Hotspot **copy** is explicitly reviewed in this rollout, but hotspot id and coordinates remain fixed.

## A2 learning contract

- Every story chapter keeps one chapter Quick Challenge.
- Every story chapter has at least 3 useful Word Notes entries with non-empty definitions.
- Vocabulary Challenge contains exactly 6 reviewed story words.
- Knowledge Check contains exactly 8 objective questions.
- Review Challenge contains exactly 8 objective questions, alongside the book's supported review/reflection activities.
- Final Challenge contains exactly 10 objective multiple-choice / true-false questions.
- Master Glossary is 12 + 12 selected words.
- Teacher Guide has one chapter-specific section for every story chapter.
- Self-Study Guide has one chapter-specific section for every story chapter.
- Teacher Guide must not claim worksheets or external resources that are not actually supplied.

## Grades 5–6 learner language

English A2 Self-Study material is written for Grades 5–6 EFL learners around CEFR A2.

Prefer: **look, listen, read, find, check, say, write, try, remember, word, sentence, answer, story, chapter, fact**.

Avoid learner-facing academic jargon such as: reinforcement, retrieval, recap, cognitive load, differentiation, assessment evidence, factual sequencing, whole-story recall, and *find the evidence*.

Use **find the answer sentence → read again → try again** after a mistake.

## Hotspot policy

Every hotspot must pass all three checks:

### 1. A2 readability
- one short title
- one short, concrete description
- usually one sentence
- English descriptions normally no more than 28 words
- avoid decorative or vague trivia when a key chapter idea can be shown instead

### 2. Islamic-values and attribution safety
- never imply that Yunus Emre, Bilal ibn Rabah, or another non-prophet is a prophet
- do not turn metaphorical, mystical, or character-reported material into an objective creed statement
- use framing such as **the chapter says**, **Yunus says**, or **in the story** where attribution matters
- miracles are attributed to Allah when the chapter does so
- do not glorify cruelty, torture, slavery, or punishment
- scenes involving harm use calm, non-graphic wording
- do not add religious or historical facts that are absent from the canonical chapter

### 3. Chapter-critical information
- hotspots should reinforce the chapter's main event, relationship, decision, belief, consequence, or value
- replace duplicate hotspots with complementary key information where possible
- remove unsupported embellishment or symbolism when the chapter itself does not state it
- preserve hotspot ids and x/y coordinates so approved images and interaction placement remain unchanged

## Adam hotspot correction

Adam A2 previously treated hotspot text as fully protected together with image geometry. The rollout now separates these concerns: canonical hotspot ids and x/y coordinates remain protected, while title/description copy is a derived learning layer. This allowed decorative or unsupported lines such as **The Light — Symbolizes Adam’s knowledge** to be replaced by short, chapter-grounded information without changing the image or interaction position.

## Metadata accuracy

Book titles must identify the actual subject accurately. In particular:

- Yunus Emre A2 is not labelled as a prophet story.
- Bilal/Mecca A2 is titled around Bilal ibn Rabah and Mecca rather than implying Bilal is a prophet.

## PDF compatibility

Finalized A2 BookData remains compatible with the shared production PDF generator, which processes every PageData type. The approved Adam A2 Vivliostyle Gold Master remains the print-layout visual reference for A2 materials, including the Phosphor guide icon and guide-layout rules documented in `GUIDE_VISUAL_STANDARD.md`.

## Validation

Run locally without GitHub Actions:

```bash
npm run validate:adam-a2-learning
npm run validate:a2-rollout
```

Together, the validators cover all five A2 books in English and Arabic. They check protected canonical fields, hotspot id/coordinate safety and reviewed copy, Word Notes, Vocabulary Challenge, 8/8/10 review contracts, 12+12 glossary, guide chapter coverage, A2 learner language, EN–AR structural parity, and corrected non-prophet metadata.
