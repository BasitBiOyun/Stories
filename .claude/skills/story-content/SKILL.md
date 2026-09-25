---
name: story-content
description: Review or edit Stories learning content, exercises, assessments, Word Notes, Teacher Guides, Self-Study Guides, or chapter-specific pedagogy.
disable-model-invocation: true
---

Task: $ARGUMENTS

1. Read `docs/MANUAL_CONTENT_AUTHORING_STANDARD.md`.
2. Read the complete relevant story in the target language, then reread the affected chapter(s).
3. Find the direct authored source. Do not extend Blueprint/Gold or add a pedagogical generator.
4. Preserve locked story prose, chapter order, references, narration, and timing unless the user explicitly asks to change them.
5. Author learning content manually from the story. Do not fabricate facts, resources, UI features, worksheets, or unsupported interpretations.
6. If changing assessments, compare Quick Challenge, Knowledge Check, Retrieval Review Quiz Game, and Final Challenge for repeated questions or repeated micro-facts.
7. If changing Teacher Guide or Self-Study Guide content, make every chapter-specific item genuinely useful for that chapter. Do not copy generic prose across chapters.
8. If visual/PDF guide work is involved, read `docs/GUIDE_VISUAL_STANDARD.md`.
9. Run the narrowest relevant validation. Use `npm run validate` and `npm run build` when the change affects content integrity or production output.
10. Finish with a short summary of changed files, checks run, and any unresolved issue.
