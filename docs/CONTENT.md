# Content

Where the library lives and how it is changed.

## The files

| What | Where |
|---|---|
| One edition (story, level, language) | `src/content/books/<story>-<level>-<language>.json` |
| Its Teacher's Book and Self-Study Guide | `src/content/guides/<story>-<level>-<language>.json` |
| Which books exist, their names and descriptions, which are unpublished | `src/content/stories.json` |
| Which editions exist | `src/content/bookCatalog.json` |
| Which interface languages exist, their direction, digits and font | `src/content/languages.json` |
| The house rules, shared by the build and the panel | `src/content/rules.ts` |

A book file holds the pages as the reader sees them: chapters with their text, pictures and audio,
the activities on each page, the journey map, and the book-end pages. Places & People cards are not
in the book file: they come from the shared catalogue when the book opens, so correcting a card
corrects every book.

Nothing else in the app decides what a book contains. A new book is a file here plus its cover
picture; a new level is a line in `bookCatalog.json`.

## Changing a text

1. Open the content panel (see below), or edit the JSON file directly.
2. `npm run validate:content` checks the shape, `npm run validate:rules` checks the house rules.
   Both run in `npm run build`, so a broken or non-standard text cannot ship.
3. Commit the changed file. The change is reviewed and reversible like any other change.

If the English wording of a chapter changes, its narration has to be made again: add that chapter
to `tts/requests.json` (see `docs/OPERATIONS.md`).

## The house rules, checked automatically

- Shared terms: Qur’an, Ka’ba, (pbuh), Tawhid, CE — always written the same way.
- American spelling (color, honor, center, organize …).
- Instruction length: at most 12 words at A2, 16 at B1, 20 at B2, not counting the list of answers.
- A sequencing card says who it is about, because it is read on its own after shuffling.

Everything else — whether a text is right for the level, whether an exercise teaches what it
should, whether a picture fits — is read by people. The rules only catch what a machine can be
sure of.

## The content panel

`/panel` lists every edition, opens a book page by page, lets the text and the activity
instructions be changed, and shows which house rules the page breaks while they are typed.

With a team list on the server, people sign in with Google and press **Send proposal**: the change
becomes a pull request named after them, the tests run on it, and only an admin approves it (it then
goes live with the next build) or rejects it. A change that adds a house-rule finding cannot be sent.
Translators change translations only; viewers only read. Without a team list the panel opens from
the preview link and gives the changed file to download instead. Setup: docs/OPERATIONS.md.

Changing text after an English edit still needs the narration queue (`tts/requests.json`) by hand.

## Seeing what the library holds

`npm run report:content` prints every edition with its chapters, words, activities, pictures,
narration and guide parts, and says where narration is still missing.
