/**
 * Checks the V2 extras of every book: Before you read, I can, example answers and group tasks.
 * Usage: npx tsx docs/teacher-guides/tools/checkV2.mts
 */
import { getBookDefinition } from '../../../src/core/content/bookRegistry';

const books: [string, string][] = [
  ['adam', 'A2'], ['adam', 'B1'], ['adam', 'B2'], ['ibrahim', 'A2'], ['ibrahim', 'B1'], ['ibrahim', 'B2'],
  ['musa', 'A2'], ['musa', 'B1'], ['musa', 'B2'], ['mecca', 'A2'], ['mecca', 'B1'], ['mecca', 'B2'],
  ['yunusEmre', 'A2'], ['yunusEmre', 'B1'], ['yunusEmre', 'B2'], ['ibnJubayr', 'A2'],
];
const strip = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ');
const banned = /\b(speaks?|acts?|plays?|playing|pretends?|becomes?|is)\s+(as\s+)?(Adam|Abraham|Ibrahim|Moses|Musa|Pharaoh|Nimrod|Bilal|Abu Bakr|Yunus|Taptuk|Muhammad|Eve|Hawwa|Habil|Qabil|the Prophet)\b/i;
let problems = 0;
const flag = (msg: string) => { problems += 1; console.log('  ✗', msg); };

for (const [story, level] of books) {
  const def = getBookDefinition(story, level as never);
  if (!def) { flag(`${story} ${level}: not found`); continue; }
  const both = await def.load();
  for (const lang of ['en', 'ar'] as const) {
    const book = both[lang];
    if (!book) continue;
    const chapters = book.pages.filter(p => p.type === 'story' && p.languageFocusExercises?.length);
    let byr = 0, ican = 0, prompts = 0, examples = 0, tasks = 0;
    for (const page of chapters) {
      const text = strip(String(page.content));
      if (page.beforeYouRead) {
        byr += 1;
        const b = page.beforeYouRead;
        if (b.options.length !== 3 || b.answer < 0 || b.answer > 2) flag(`${story} ${level} ${lang} ch${page.id}: bad options`);
        if (b.quote && !text.includes(b.quote.replace(/\s+/g, ' '))) flag(`${story} ${level} ${lang} ch${page.id}: BYR quote not in text`);
      } else flag(`${story} ${level} ${lang} ch${page.id}: no Before you read`);
      if (page.iCan?.length === 3) ican += 1; else flag(`${story} ${level} ${lang} ch${page.id}: iCan ${page.iCan?.length ?? 0}`);
      for (const ex of page.languageFocusExercises ?? []) for (const p of ex.discussionPrompts ?? []) { prompts += 1; if (p.example?.trim()) examples += 1; }
      if (page.groupTask) {
        tasks += 1;
        // Safety notes such as "Nobody speaks as …" are fine; only a role or step that casts a story person is flagged.
        const all = JSON.stringify(page.groupTask).split(/(?<=[.;!?])\s+|","/).filter(part => !/\b(nobody|no one|never|not)\b/i.test(part)).join(' ');
        if (banned.test(all)) flag(`${story} ${level} ${lang} ch${page.id}: task may have a learner play a story person`);
      }
    }
    for (const page of book.pages.filter(p => p.type === 'exercises')) for (const ex of page.exercises ?? []) for (const p of ex.discussionPrompts ?? []) { prompts += 1; if (p.example?.trim()) examples += 1; }
    if (examples !== prompts) flag(`${story} ${level} ${lang}: ${prompts - examples} prompts without example`);
    if (tasks !== 3) flag(`${story} ${level} ${lang}: ${tasks} group tasks`);
    console.log(`${story} ${level} ${lang}: ${chapters.length} chapters, BYR ${byr}, I can ${ican}, examples ${examples}/${prompts}, tasks ${tasks}`);
  }
}
console.log(problems ? `\n${problems} problem(s)` : '\nAll V2 checks passed.');
