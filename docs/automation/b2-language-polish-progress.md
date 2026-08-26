# B2 Language Polish Progress

currentBook: Abraham B2
phase: LANGUAGE_FOCUS
nextTask: CHAPTER_2_LANGUAGE_FOCUS
completedBooks:
- Adam B2

## Abraham B2 progress
- Story chapters: 35
- Current book path: `src/data/abraham/b2`
- English Language Focus completed: Chapter 1
- Arabic Language Focus completed: Chapter 1
- Next chapter: Chapter 2

## Abraham B2 Chapter 1 English decisions
- Read the full English Chapter 1 story and the active Quick Challenge before authoring.
- Kept the Quick Challenge focused on why Abraham is presented as a connecting figure; Language Focus does not retest that comprehension point.
- Language Focus is grounded in the chapter’s own discourse and grammar:
  - `is presented as` for source/viewpoint framing
  - `means that` for definition and reformulation
  - `also` for additive discourse development
  - active vs passive information focus in `The Qur’an presents...`, `was given...`, and `was not given...`
  - paragraph-level organisation from framing → definition → addition → elaboration
- Productive work asks learners to transfer these discourse tools to a new non-story explanation rather than retell Abraham’s genealogy.

## Abraham B2 Chapter 1 Arabic decisions
- Read the full Arabic Chapter 1 independently and designed its Language Focus from the Arabic wording rather than translating the English activities.
- Arabic-native targets include:
  - `يُقدَّم ... بوصفه` for framing a description and keeping its source visible
  - `تعني أن` for explaining an abstract concept
  - `وهو أيضًا` for additive discourse development
  - `أُطلِقَ على... / لم يُمنح...` for passive information focus
  - `ويعرض القرآن الكريم بالتفصيل كيف...` for moving from general presentation to elaboration
- Productive work requires a coherent Arabic paragraph using framing, definition, addition and passive focus for real discourse purposes.

## Files added in this run
- `src/data/abraham/b2/en/languageFocusChapter1.ts`
- `src/data/abraham/b2/ar/languageFocusChapter1.ts`
- `src/data/abraham/b2/en/languageFocus.ts`
- `src/data/abraham/b2/ar/languageFocus.ts`

## Files updated in this run
- `src/data/abraham/b2/index.ts`
- `docs/automation/b2-language-polish-progress.md`

## Abraham B2 Chapter 1 commits
- English Chapter 1 Language Focus: `7b5784e1e86b3d8f66fbb56f58775107562fe034`
- Arabic Chapter 1 Language Focus: `dbf8c66605aa3407f72b8547132f6b5f237eaf30`
- English aggregator: `12a7a4bd11ed7d379b92dced72e6620fbb715656`
- Arabic aggregator: `57a348410dbf3635a311dddadb04b0e60a22acfa`
- Active Abraham B2 wiring: `f80f908f129b95f54e78f45505aa4f07645dc5e6`

## Current validation
- Re-fetched the English Chapter 1 Language Focus from `preview` and confirmed four B2 activities are present.
- Re-fetched the Arabic Chapter 1 Language Focus from `preview` and confirmed four independently authored Arabic activities are present.
- Re-fetched `src/data/abraham/b2/index.ts` after the write and confirmed both English and Arabic story pages preserve the existing Quick Challenge in `exercises` while attaching Language Focus separately through `languageFocusExercises` when available.
- Chapter 1 English and Arabic Quick Challenges were read before authoring; the new Language Focus does not duplicate their connecting-figure comprehension question.
- Story prose was not changed.
- Knowledge Check, Retrieval Review, Vocabulary Challenge, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No B1/A2 or shared/global file was edited.
- No executable typecheck/build/CI runner was used, so no typecheck/build/CI pass is claimed.

## Next task
- Chapter 2 only: read the full Abraham B2 English and Arabic Chapter 2 story texts and their active Quick Challenges independently, then author Chapter 2 Language Focus in both languages.
- Do not start Chapter 3 in the same run.

## Unresolved issues
- None identified for Abraham B2 Chapter 1.
