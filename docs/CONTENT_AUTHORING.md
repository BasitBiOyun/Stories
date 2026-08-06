# Content Authoring Workflow

## Input contract

A new source arrives chapter by chapter. The supplied story text is authoritative.

During ingestion:

- do not rewrite sentences
- do not correct wording silently
- do not merge or split chapters
- do not reorder paragraphs
- do not alter approved narration
- preserve titles, quotations, names, references, and level designation

Any suspected source problem is reported separately and remains unchanged until the content authority approves a revision.

## Processing sequence

1. Add the exact chapter text to the correct language and CEFR module.
2. Assign stable page and chapter ids.
3. Connect the existing image and audio paths through the manifest.
4. Generate derived vocabulary and exercises from the unchanged chapter.
5. Prepare teacher and self-study guide sections linked to the same chapter identity.
6. Run structural, guide, and canonical validation.
7. Conduct human language, pedagogy, historical, and religious review.

## Exercise standards

The target Final Challenge sizes are:

- A2: 8 questions
- B1: 9 questions
- B2: 10 questions

A2 emphasizes direct comprehension, sequence, concrete vocabulary, and short sentences. B1 adds cause/result, motivation, contextual vocabulary, and short production. B2 requires inference, comparison, evaluation, synthesis, evidence, and nuanced vocabulary.

The machine-readable policy is in `src/core/content/exercisePolicy.ts`.

## Guide standard

Each guide must identify its story, level, language, version, and review status. Chapter-linked sections must state objectives, activities, differentiation, and assessment. Existing guides remain unchanged during the technical refactor; the validator reports alignment warnings for the later content-quality phase.
