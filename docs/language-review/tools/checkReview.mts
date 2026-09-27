/**
 * Checks the live Language Review of one book (both languages) as the UI loads it.
 * - stage split (the UI derives Look/Notice, Practise/Build, Use from the item count)
 * - types, matching count, the same type twice in a row
 * - every story sentence (drag-drop items, matching lefts, choose-form / error-correction /
 *   word-bank sentences with the correct answer put back, sentence-building, sequencing,
 *   transformation sources, quotes “…” / «…» in question and explanation) occurs in the story text
 *   (items whose id ends in -new-context or -transfer are not from the story and are skipped;
 *   quotes containing “+” are pattern formulas, not quotations)
 * - an answer the learner must supply that is visible in another item (a -new-context item may
 *   reuse words the earlier items taught: that is the point of transfer)
 * Usage: npx tsx docs/language-review/tools/checkReview.mts <story> <A2|B1|B2> [--dump]
 * story ids: adam, ibrahim (Abraham), musa (Moses), mecca, yunusEmre
 */
import { getBookDefinition } from '../../../src/core/content/bookRegistry';
import type { Exercise } from '../../../src/types';

const [story, level, flag] = process.argv.slice(2);
const pair = await getBookDefinition(story, level as never)!.load();
const norm = (s: string) => s.normalize('NFKC').replace(/[​-‏‪-‮⁦-⁩]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/[ً-ْٰـ]/g, '').replace(/[’‘`]/g, "'").replace(/[“”"«»]/g, '').replace(/[.,!?;:،؛؟()\-–—]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

const answers = (e: Exercise): { answer: string; own: string }[] => {
  const out: { answer: string; own: string }[] = [];
  e.formChoices?.forEach(f => out.push({ answer: f.options[f.answer], own: f.sentence }));
  e.errorItems?.forEach(f => out.push({ answer: f.options[f.answer], own: f.sentence }));
  e.transformItems?.forEach(f => out.push({ answer: f.answers[0], own: f.frame }));
  if ((e.type === 'word-bank' || e.type === 'fill-blanks') && e.correctAnswer != null) (Array.isArray(e.correctAnswer) ? e.correctAnswer : [e.correctAnswer]).forEach((a: unknown) => out.push({ answer: String(a), own: e.fillBlanksText ?? '' }));
  return out;
};
const shown = (e: Exercise): string[] => {
  const out: string[] = [e.question ?? ''];
  e.formChoices?.forEach(f => out.push(f.sentence));
  e.errorItems?.forEach(f => out.push(f.sentence.replace(f.error, ' ')));
  e.transformItems?.forEach(f => out.push(f.source, f.frame));
  if (e.fillBlanksText) out.push(e.fillBlanksText);
  e.options?.forEach(o => out.push(o));
  e.dragDropGroups?.forEach(g => out.push(...g.items));
  e.sequencingItems?.forEach(s => out.push(s.text));
  e.matchingPairs?.forEach(p => out.push(p.left, p.right));
  return out;
};

let problems = 0;
for (const lang of ['en', 'ar'] as const) {
  const book = pair[lang];
  const text = norm(book.pages.filter(p => p.type === 'story').map(p => String(p.content)).join(' \n '));
  const review = book.pages.find(p => p.type === 'exercises');
  if (!review?.exercises?.length) { console.log(`! ${lang}: no Language Review`); problems++; continue; }
  const ex = review.exercises;
  const n = ex.length;
  const look = Math.max(2, Math.round(n * 0.3)), use = Math.max(2, Math.round(n * 0.25));
  console.log(`\n## ${story} ${level} ${lang.toUpperCase()} — ${n} items | stages ${look} / ${n - look - use} / ${use}`);
  ex.forEach((e, i) => console.log(`   ${i + 1}. [${i < look ? 'look' : i < n - use ? 'build' : 'use'}] ${e.type} — ${e.title}`));
  const issue = (s: string) => { problems++; console.log('   ! ' + s); };
  const m = ex.filter(e => e.type === 'matching').length;
  if (m > 1) issue(`${m} matchings`);
  ex.forEach((e, i) => { if (i && ex[i - 1].type === e.type) issue(`${e.type} twice in a row (item ${i + 1})`); });
  if (ex[n - 1].type !== 'reflection') issue('last item is not a reflection');
  const check = (id: string, s: string) => {
    for (const part of s.split(/…|\.\.\./).map(norm).filter(x => x.split(' ').length >= 3)) if (!text.includes(part)) issue(`${id}: not in story text: “${part.slice(0, 90)}”`);
  };
  for (const e of ex) {
    if (/-(new-context|transfer)$/.test(e.id) || e.type === 'reflection') continue;
    e.dragDropGroups?.forEach(g => g.items.forEach(i => check(e.id, i)));
    e.matchingPairs?.forEach(p => check(e.id, p.left));
    e.sequencingItems?.forEach(s => check(e.id, s.text));
    e.transformItems?.forEach(f => check(e.id, f.source));
    e.formChoices?.forEach(f => check(e.id, f.sentence.replace('[choice]', f.options[f.answer])));
    e.errorItems?.forEach(f => check(e.id, f.sentence.replace(f.error, f.options[f.answer])));
    if (e.sentenceChunks) check(e.id, e.sentenceChunks.join(' '));
    if (e.fillBlanksText && e.correctAnswer != null) { let t = e.fillBlanksText; (Array.isArray(e.correctAnswer) ? e.correctAnswer : [e.correctAnswer]).forEach((a: unknown) => { t = t.replace('[blank]', String(a)); }); check(e.id, t); }
    for (const q of `${e.question ?? ''} ${e.explanation ?? ''}`.matchAll(/[“«]([^”»]{12,})[”»]/g)) if (!q[1].includes('+')) check(e.id + ' (quote)', q[1]);
  }
  ex.filter(e => !/-new-context$/.test(e.id)).forEach(e => answers(e).forEach(({ answer, own }) => {
    const a = norm(answer); if (a.length < 6 && a.split(' ').length < 2) return;
    ex.forEach(other => { if (other === e || other.type === 'reflection') return; shown(other).forEach(t => { if (t !== own && norm(t).includes(a)) issue(`answer “${answer}” (${e.id}) is visible in ${other.id}`); }); });
  }));
  if (flag === '--dump') console.log(JSON.stringify(ex, null, 1));
}
console.log(problems ? `\n${problems} problem(s)` : '\nOK');
