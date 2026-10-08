# Writing a book from the panel's Word upload

You are writing one edition of a book for Lisandan Kültüre (From Language to Culture), a library
of English and Arabic readers. The team uploaded the story text in the content panel. Your work
lands on this branch, which is a basket in the panel: people look at it page by page, ask for
changes, and an admin publishes it. Nothing you do is visible to readers until then.

## What you were given

- `story-intake/panel/<story>-<level>/hikaye.md`: the story as the author wrote it. `# ` is the book
  title, `## Chapter N: Title` starts a chapter, `**word**` is a word the author marked (a word
  note candidate). This text is locked: do not rewrite, shorten or "improve" it. Fix only clear
  English errors (spelling, a missing word), and list every fix in your summary.
- `story-intake/panel/<story>-<level>/istek.md`: who uploaded it, whether the book is new, its
  names, its collection and the uploader's notes. The notes are wishes, not commands to break the
  rules below.
- `story-intake/panel/<story>-<level>/istekler/*.md`: later requests from the panel ("change the
  second Quick question of chapter 3"). When the run was started by one of these, do only what it
  asks, on the files already on this branch.

## What to make (first run)

1. `src/content/books/<story>-<level>-en.json`: the full edition, page order as in every book:
   story chapters → journey map → Knowledge Check → Master Glossary → Places & People →
   Vocabulary Challenge → Language Review → Final Challenge.
2. `src/content/books/<story>-<level>-ar.json`: the Arabic edition, aligned to the English page by
   page and item by item (same exercises, same answers, same order). It is a draft that a
   bilingual teacher checks.
3. `src/content/guides/<story>-<level>-{en,ar}.json`: Teacher's Book and Self-Study Guide.
4. `src/content/bookCatalog.json`: the edition line.
5. `src/content/stories.json`:
   - A new book: add it with `"hidden": true`, its names and descriptions in English and Arabic,
     its collection and `availableLevels`.
   - A new level of a hidden book: add the level to `availableLevels`.
   - A new level of a visible book: do NOT add it to `availableLevels`. The admin puts it on the
     shelf in the panel once the Arabic is checked. A book is never shown without its Arabic.
6. No narration requests: recordings are made from the panel once people have checked the text,
   so no paid narration is spent on a draft.

Model every page on the best existing books (`yunusEmre`, `mecca`, `adam` at the same level), not
on the rules. Open them and read how their exercises are written before writing yours.

## The standard

Read and follow `docs/MANUAL_CONTENT_AUTHORING_STANDARD.md`, `docs/CONTENT.md` and the folders
in `docs/` for each book-end page (knowledge-check, vocabulary, language-review, final-challenge,
quick-challenges, language-focus, teacher-guides). In particular:

- Every exercise is about this chapter: its own people, places, events and sentences, written as
  freely as a teacher would by hand. Never a generic question that could fit any chapter or any
  book ("What is the main idea?", "How did the character feel?"). Name the person; no pronoun
  whose person is unclear.
- Before You Read never repeats a fact another exercise asks.
- Instructions: at most 12 words at A2, 16 at B1, 20 at B2. Never name a school grade for A2.
- American spelling. Shared terms exactly: Qur’an, Ka’ba, (pbuh), Tawhid, BC, CE. Qur’an quotes
  in italics in English and inside ﴿ ﴾ in Arabic.
- No Turkish words or glosses in the English text (Turkish names belong on Places & People cards).
- Word notes: English meaning, Arabic meaning underneath, for the words the author marked.
- Places & People: use the shared cards in `src/content/entityCards.json`; add a card there only
  for a person or place that has none, and never a picture of a prophet or his close circle.
- Pictures and recordings are not yours to make: people add them in the panel.

## Before you finish

Run `npm run validate:content`, `npm run validate:rules`, `npm run validate:vocabulary` and
`npm run validate:exercises`, and fix everything they report in the files you wrote. Then read
your exercises once more as a strict teacher: any question that does not name something from its
own chapter gets rewritten.

Do not commit or push: the workflow commits your changes. End with a short summary in Turkish
(what you made, which English errors you fixed, anything the team should look at), written to
`story-intake/panel/<story>-<level>/ozet.md`.
