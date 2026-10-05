/**
 * Prints, for one book and language, every story chapter with its text, hotspot titles,
 * word notes and Language Focus activities (types, items, answers, explanations).
 * Usage: npx tsx docs/teacher-guides/tools/dumpChapters.mts <story> <LEVEL> <en|ar> [fromChapter] [toChapter]
 * Example: npx tsx docs/teacher-guides/tools/dumpChapters.mts abraham B1 ar 1 4
 */
import { getBookDefinition } from '../../../src/core/content/bookRegistry';

const [story, level, lang, from = '0', to = '999'] = process.argv.slice(2);
const def = getBookDefinition(story, level as never);
if (!def) throw new Error(`Unknown book ${story} ${level}`);
const book = (await def.load())[lang as 'en' | 'ar'];

for (const page of book.pages) {
  if (!page.languageFocusExercises || page.id < +from || page.id > +to) continue;
  console.log(`\n===== CH ${page.id} ${page.title}`);
  console.log(String(page.content).replace(/<[^>]+>/g, ''));
  console.log('HOTSPOTS:', JSON.stringify((page as { hotspots?: { title?: string }[] }).hotspots?.map(h => h.title)));
  console.log('WORD NOTES:', (page.vocabulary ?? []).map(v => `${v.word} = ${v.definition}`).join(' | '));
  console.log('--- LANGUAGE FOCUS');
  for (const e of page.languageFocusExercises) {
    console.log(`-- [${e.type}] ${e.title} | ${e.instructions}\n   Q: ${e.question ?? ''}`);
    e.matchingPairs?.forEach(p => console.log(`   ${p.left} => ${p.right}`));
    e.options?.forEach((o, i) => console.log(`   ${i === e.correctAnswer ? '*' : ' '} ${o}`));
    e.dragDropGroups?.forEach(g => console.log(`   [${g.group}] ${g.items.join(' | ')}`));
    e.formChoices?.forEach(f => console.log(`   ${f.sentence}  {${f.options.map((o, i) => (i === f.answer ? '*' + o : o)).join(' / ')}}`));
    e.errorItems?.forEach(f => console.log(`   ${f.sentence}  ERR<${f.error}> {${f.options.map((o, i) => (i === f.answer ? '*' + o : o)).join(' / ')}}`));
    e.transformItems?.forEach(f => console.log(`   SRC: ${f.source}\n   FRAME: ${f.frame}  ANS: ${f.answers.join(' | ')}`));
    if (e.type === 'word-bank') console.log(`   ${e.fillBlanksText}\n   BANK: ${e.wordBank?.join(' | ')}  ANS: ${JSON.stringify(e.correctAnswer)}`);
    else if (e.fillBlanksText) console.log(`   ${e.fillBlanksText}  ANS: ${JSON.stringify(e.correctAnswer)}`);
    if (e.sentenceChunks) console.log(`   CHUNKS: ${e.sentenceChunks.join(' | ')}`);
    if (e.sequencingItems) console.log(`   SEQ: ${e.sequencingItems.map(s => s.text).join(' | ')}`);
    if (e.type === 'true-false') console.log(`   ANS: ${e.correctAnswer}`);
    console.log(`   EXPL: ${e.explanation}`);
  }
}
