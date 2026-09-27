# Teacher Guide rewrite brief (shared by all worker agents)

Repo: /home/user/Stories (branch `preview`). Do NOT commit, push, stash or reset. Other agents edit OTHER books at the same time: never touch files outside your scope and never revert changes you did not make.

## Goal
Bring the teacher guide of ONE book (in the language(s) you are given) to the quality of the finished pilot: **Yunus Emre B1** — `src/data/yunusEmre/b1/en/teacherGuide.ts` and `src/data/yunusEmre/b1/ar/teacherGuide.ts`. Read both pilot files completely before you start and match their depth, tone and structure. The target is top-class, world-class material for Turkish state-school teachers working under the Türkiye Yüzyılı Maarif Modeli (TYMM).

## Your scope
- `src/data/<folder>/<level>/<lang>/teacherGuide.ts` (chapter sections + metadata). Keep every export name and the module shape.
- You MAY correct a clearly wrong or circular Word Note `definition` in the same book's `pages.ts` (for example «الغضب: شعور قوي بالانفعال والغضب»). Change only the `definition` string, everywhere it occurs. Never change story text, titles, exercises or anything else in `pages.ts`.
- Do not edit components, Language Focus, exercises, self-study guides or other books.

## Read first
1. The pilot (both languages) — the model for every field.
2. `docs/MANUAL_CONTENT_AUTHORING_STANDARD.md` — binding. Story text is locked.
3. Your book's chapters, hotspots, word notes and the CURRENT Language Focus of every chapter:
   `npx tsx docs/teacher-guides/tools/dumpChapters.mts <story> <LEVEL> <en|ar> [from] [to]`
   (story ids: adam, abraham, moses, mecca, yunusEmre; LEVEL: A2 | B1 | B2). The Language Focus was rewritten recently; the old guide often quotes activities or forms that no longer exist.

## What to rewrite in every chapter section
Keep `chapter`, `timing` and the overall structure. Rewrite or correct:
- **objectives**: keep the content objectives; make the language objective name the chapter's real Language Focus targets (discover/notice …).
- **pedagogy**: concrete teacher moves in 3–4 sentences (what the teacher does, what learners do), plus how grammar is discovered in this chapter. No vague metalanguage.
- **grammarFocus**: lines separated by `\n`, exactly like the pilot:
  `Targets: …` / `Notice (Activity n): …` / `Build (Activities n–m): …` / `Likely errors: …` / `Use (Activity n): …`
  (Arabic: `الأهداف:` / `لاحظ (النشاط …):` / `ابنِ (…):` / `أخطاء متوقعة:` / `استعمل (…):`).
  Every target must be practised in that chapter's CURRENT Language Focus, and every quoted example must be verbatim from that chapter's text in that language (… allowed). Activity numbers follow the real order of the chapter's activities. The Notice line gives the teacher the one or two meaning questions that let learners discover the rule before it is named.
- **pronunciationFocus**: lines separated by `\n`; chapter-specific (see the language notes below).
- **beforeReading / duringReading / afterReading**: chapter-specific; afterReading names the real Language Focus steps.
- **lessonPlan**: chapter-specific and varied from chapter to chapter (hooks, card sorts, timelines, jigsaw, think-pair-share, gallery check, stations, freeze-frames without prophets or violence …). Concrete: what the teacher does and what learners produce. Format rules (the UI depends on them):
  - steps separated by `;` (English) or `؛` (Arabic); every step starts with a time range `a–b` (en dash);
  - minutes run from 0 to 40 without gaps; a two-lesson plan starts the second lesson with `; Lesson 2 (40 min): 0–…` / `؛ الحصة الثانية (40 د): 0–…`;
  - no `;`/`؛` inside a step (use `/` or `,`), and never a number followed by a full stop and a space (`1. `), which the UI treats as numbering.
- **discussionPoints, interactiveTips, differentiation, formativeAssessment, expectedResponses, transferTask, teacherReflection, assessmentTools**: check each against the text; fix wrong facts, wrong hotspot names (use the real hotspot titles from the dump) and references to activities that no longer exist; make frames match the new Language Focus.
- Keep `extraResources` links.

## Metadata (per language)
- `subtitle`, `approachDesc`, `grammarApproach`, `grammarSequence` (one line per chapter = the real targets), `languageFocus` notes, `readingFramework`: as in the pilot. `approachDesc` is the one field the UI shows for the approach, so it must state the Maarif approach clearly (English: inductive; Arabic: holistic, semi-inductive).
- `sensitiveNotes`: include the rule that Qur'anic verses, prophetic sayings, prayers and poem lines are read, explained and matched to meanings but never gapped, corrected or rewritten; keep book-specific notes.
- ADD `globalCitizenship` { title, description, themes[{title, description}] (3–4, each tied to a chapter), actions[] (3) } and `appendices` { exitTicket[3], miniProject{title, desc}, reflectivePrompt{title, desc} } written in the guide's language and grounded ONLY in this book. Without them the UI shows hard-coded fallback texts that are in English even in Arabic guides and sometimes cite legends that are not in the book.
- Never add legends, events, dates or biographical details that are not in this book's text.

## Pedagogy (TYMM)
- Every chapter: meaning first (listen, read, evidence) → Quick Challenge → Language Focus (Notice → Build → Use; A2 wording Look → Practise → Use) → connected production about the learners' own world → exit ticket.
- English (TYMM YDAB1–4): grammar is discovered inductively from the story sentence; the rule is confirmed only after learners formulate it.
- Arabic: holistic, semi-inductive: meaning in natural flow → noticing the function in context → nahw/sarf/i'rab practised in meaningful sentences → use. Include model reading (audio or teacher) and controlled reading aloud (القراءة الجهرية المضبوطة) of target sentences.

## Level calibration
- A2: short, concrete steps, minimal metalanguage, more oral rehearsal, strong frames; grammarFocus still has the same five lines but in plain words; pronunciation focuses on word stress/sounds and a few chunks.
- B1: as in the pilot.
- B2: analysis, stance, hedging, evidence vs interpretation; more learner-led discussion and extended writing; keep the plan realistic for 40 minutes.

## Language-specific requirements
- English guide: pronunciationFocus = chunking and pauses in the chapter's key sentences, contrastive stress, weak forms, -ed/-s endings where relevant, and 4–6 hard words from the chapter with stress in capitals (e.g. hu-MIL-i-ty). Check every stress mark.
- Arabic guide: written natively, never translated from the English guide. grammarFocus names Arabic targets (case after إنّ/كان/ليس/لكنّ, أن/لن + منصوب, لم + مجزوم, agreement incl. non-human plurals, dual, passive and نائب الفاعل, مصدر, حال, تمييز, إضافة, فـ vs ثمّ, verbs with fixed prepositions, اسم التفضيل, الممنوع من الصرف …) exactly as practised in the chapter's Arabic Language Focus. pronunciationFocus = sounds that are hard for Turkish learners in this chapter's words (ح/ه، ع/ء، ق/ك، ص/س، ض/د، ط/ت، ظ/ز، ذ/ز، ث/س), sun/moon lām, همزة الوصل, shadda, tanwīn, pausal forms, harakāt that change meaning (يُدَرَّسُ/يُدَرِّسُ), tafkhīm/tarqīq of lafẓ al-jalāla where it occurs, and 4–6 Arabic–Turkish shared words from the chapter, noting meaning shifts where they exist (vücut/وجود, ittifak/اتفاق). Arabic must be correct MSA; use tashkeel on the forms being taught. If the story text has a slip, write the correct form in the guide, tell the teacher to read the correct form aloud, and report the slip.

## Checks before you finish
- `npx tsc --noEmit` (errors only in other books' files = another agent mid-edit; ignore and re-run later).
- `npx tsx docs/teacher-guides/tools/checkGuide.mts src/data/<folder>/<level>/<lang>/teacherGuide.ts` must end with `OK`.
- Re-read every chapter as the teacher who will use it tomorrow: is each step doable in a Turkish classroom of 30+ learners in the time given? Is every quote verbatim and every fact in the text? Does every grammar target exist in that chapter's Language Focus?

## Final reply (max ~300 words)
Per language: what changed (compact), factual or hotspot errors fixed, Word Note definitions changed, story-text slips noticed (report only), anything uncertain.
