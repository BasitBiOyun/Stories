/**
 * Prints the Quick Challenge (page.exercises[0]) of every story chapter for one book and language.
 * Usage: npx tsx docs/quick-challenges/tools/dumpQuickChallenges.mts <story> <LEVEL> <en|ar>
 * Story ids: adam, ibrahim (Abraham), musa (Moses), mecca, yunusEmre.
 */
import { getBookDefinition } from '../../../src/core/content/bookRegistry';

const [story, level, lang] = process.argv.slice(2);
const def = getBookDefinition(story, level as never);
if (!def) throw new Error(`Unknown book ${story} ${level}`);
const book = (await def.load())[lang as 'en' | 'ar'];
const types: Record<string, number> = {};
for (const p of book.pages) {
  if (!p.languageFocusExercises) continue;
  const e = p.exercises?.[0];
  console.log(`\n===== CH ${p.id} ${p.title}`);
  if (!e) { console.log('   (no quick challenge)'); continue; }
  types[e.type] = (types[e.type] ?? 0) + 1;
  console.log(`-- id=${e.id} [${e.type}] ${e.title ?? ''} | ${e.instructions ?? ''}\n   Q: ${e.question ?? ''}`);
  e.options?.forEach((o, i) => console.log(`   ${i === e.correctAnswer ? '*' : ' '} ${o}`));
  e.matchingPairs?.forEach(m => console.log(`   ${m.left} => ${m.right}`));
  e.sequencingItems?.forEach(s => console.log(`   SEQ ${s.id}: ${s.text}`));
  e.dragDropGroups?.forEach(g => console.log(`   [${g.group}] ${g.items.join(' | ')}`));
  e.tapRevealItems?.forEach(t => console.log(`   TAP ${t.question} -> ${t.answer}`));
  e.quizQuestions?.forEach(q => console.log(`   QQ ${q.question} {${q.options.map(o => (o.isCorrect ? '*' : '') + o.text).join(' / ')}}`));
  if (e.fillBlanksText) console.log(`   ${e.fillBlanksText} ANS ${JSON.stringify(e.correctAnswer)}`);
  if (e.type === 'true-false') console.log(`   ANS ${e.correctAnswer}`);
  console.log(`   EXPL: ${e.explanation ?? ''}\n   FB: ${JSON.stringify(e.feedback ?? {})}`);
}
console.log('\nTYPES:', JSON.stringify(types));
