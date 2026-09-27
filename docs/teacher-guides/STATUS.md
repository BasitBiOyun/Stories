# Teacher Guide rewrite — status

Brief for workers: `TG_BRIEF.md`. Tools: `tools/dumpChapters.mts`, `tools/checkGuide.mts`.

## Done
- Yunus Emre B1 EN + AR (pilot): grammarFocus aligned with the current Language Focus and verbatim story examples (Targets / Notice / Build / Likely errors / Use); Arabic guide rewritten natively with Arabic targets and Turkish-learner pronunciation notes; chapter-specific lesson flows; metadata approach (EN inductive, AR holistic semi-inductive); book-grounded Global Citizenship and Appendices; circular Word Note definitions fixed.

## Shared UI fixes made with the pilot
- Teacher Guide: duplicate "Lesson Prep Mode" button in the chapter navigator removed; the header "Lesson Prep" button is now visible on mobile (icon only). Per-chapter "Prep" buttons stay.
- Lesson Flow now splits Arabic plans on «؛» as well as «;» (before, every Arabic plan showed as one block).
- Grammar Focus and Pronunciation Focus keep line breaks.
- Arabic UI strings of the tips tab no longer tell Arabic teachers to use classroom English (Arabic target language, Turkish as L1); "Story Acting" became "Freeze-Frames" with a rule not to portray prophets or re-enact violence.

- All other variants rewritten by workers and reviewed (checkGuide OK, typecheck, spot reads): Adam A2/B1/B2, Abraham A2/B1, Abraham B2 EN, Moses A2/B1/B2, Mecca A2/B1/B2, Yunus Emre A2/B2 — EN and AR.

## In progress
- Abraham B2 AR (worker re-run after a session-limit stop).

## Other fixes found during the pass
- Moses B2 EN and Abraham B2 EN: hotspot and Word Note titles were cut off ("espotism.", "ffspring") because lower-casing "İ" changed string length; fixed in `findEnglishSurface`.
- Language Focus items that gapped sacred speech were replaced with narrator sentences: Moses B1 AR ch9, Moses A2 EN ch3, Abraham B1 EN ch11 (prayer). Abraham A2 AR ch7 no longer copies the slip «آلِهَتِنَا».
- Moses A2 / Mecca A2 self-study guides copied teacher notes; learners now see only the targets line.
- Many circular or wrong Word Note definitions fixed (EN and AR), e.g. Moses B2 AR «سخرية», «أغرقنا», «رعي»; Adam B1 AR «الحسد» (described غبطة); Abraham B1 AR «عاديًّا» (meant the opposite).

## Needs a decision (story text is locked)
- Moses B1 EN ch11: "bowed down in front of Moses" — the Arabic says «فسجدوا لله»; theologically the prostration is to Allah.
- Abraham A2 EN ch14: Abraham called Muhammad's "great-grandfather"; Arabic says «أحفاد» (descendants).
- Mecca A2 AR ch2: interest called «فَيْضًا» (abundance); the term is «الرِّبا».
- Adam A2 AR Quick Challenge ch2 gaps a paraphrase of Allah's command («أظهروا [blank] لآدم»).
- Mecca B2 AR Quick Challenges 3 and 17 are loosely tied to the text wording.
- Chapter titles that announce events of the next chapter (Abraham B2, Moses B2): the guides warn teachers.

## Follow-ups (not in this pass)
- The Teacher Guide component still contains hard-coded, English-only fallback texts per book (exit tickets, mini projects, reflective prompts, global citizenship). Once every guide supplies `appendices` and `globalCitizenship`, the fallbacks can be deleted.
- Generic tabs (Curriculum Alignment, Teaching Approach, Kinesthetic, Home Connection, Quick Checklist) are shared by all books and levels; they could be made level- and language-aware.
