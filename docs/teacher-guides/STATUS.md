# Teacher Guide rewrite — status

Brief for workers: `TG_BRIEF.md`. Tools: `tools/dumpChapters.mts`, `tools/checkGuide.mts`.

## Done
- Yunus Emre B1 EN + AR (pilot): grammarFocus aligned with the current Language Focus and verbatim story examples (Targets / Notice / Build / Likely errors / Use); Arabic guide rewritten natively with Arabic targets and Turkish-learner pronunciation notes; chapter-specific lesson flows; metadata approach (EN inductive, AR holistic semi-inductive); book-grounded Global Citizenship and Appendices; circular Word Note definitions fixed.

## Shared UI fixes made with the pilot
- Teacher Guide: duplicate "Lesson Prep Mode" button in the chapter navigator removed; the header "Lesson Prep" button is now visible on mobile (icon only). Per-chapter "Prep" buttons stay.
- Lesson Flow now splits Arabic plans on «؛» as well as «;» (before, every Arabic plan showed as one block).
- Grammar Focus and Pronunciation Focus keep line breaks.
- Arabic UI strings of the tips tab no longer tell Arabic teachers to use classroom English (Arabic target language, Turkish as L1); "Story Acting" became "Freeze-Frames" with a rule not to portray prophets or re-enact violence.

## To do (one worker per variant or book)
Adam A2/B1/B2, Abraham A2/B1/B2, Moses A2/B1/B2, Mecca A2/B1/B2, Yunus Emre A2/B2 — EN and AR each.

## Follow-ups (not in this pass)
- The Teacher Guide component still contains hard-coded, English-only fallback texts per book (exit tickets, mini projects, reflective prompts, global citizenship). Once every guide supplies `appendices` and `globalCitizenship`, the fallbacks can be deleted.
- Generic tabs (Curriculum Alignment, Teaching Approach, Kinesthetic, Home Connection, Quick Checklist) are shared by all books and levels; they could be made level- and language-aware.
