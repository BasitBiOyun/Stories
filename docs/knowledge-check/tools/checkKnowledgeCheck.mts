/**
 * Checks the live Knowledge Check of one book (both languages) as the UI loads it.
 * - exactly 8 items, only multiple-choice and true-false (the only types KnowledgeCheck.tsx shows)
 * - the correct option moves around on screen (every letter used at least once), true-false answers are mixed.
 *   The UI rotates options by a hash of the item id (presentMultipleChoice), so the letter the learner
 *   sees is computed here the same way; the source order alone says nothing about it
 * - the correct option is not given away by being much longer than the distractors
 * - feedback is more than a bare "Correct." / «صحيح.» and the incorrect feedback is not empty
 * - quotes “…” / «…» in question and explanation occur in the story text
 * - no item repeats a Quick Challenge or Final Challenge question (word overlap of question + answer)
 * - A2 Arabic questions and options carry full tashkeel (the A2 Arabic story is fully vocalised)
 * Usage: npx tsx docs/knowledge-check/tools/checkKnowledgeCheck.mts <story> <A2|B1|B2> [--dump]
 * story ids: adam, ibrahim (Abraham), musa (Moses), mecca, yunusEmre
 */
import { getBookDefinition } from '../../../src/core/content/bookRegistry';
import type { Exercise } from '../../../src/types';
import { presentMultipleChoice } from '../../../src/lib/exercisePresentation';

const [story, level, flag] = process.argv.slice(2);
const pair = await getBookDefinition(story, level as never)!.load();
const norm = (s: string) => s.normalize('NFKC').replace(/[​-‏‪-‮⁦-⁩]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/[ً-ْٰـ]/g, '').replace(/[’‘`]/g, "'").replace(/[“”"«»]/g, '').replace(/[.,!?;:،؛؟()\-–—]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const STOP = new Set('the a an of to in and or was were is are he she it his her they their them did do does what why how who which that this with for on at by from as be not no had has have after before when into about story chapter book في من على إلى الى عن أن ان ما ماذا لماذا كيف هل كان كانت ثم و لا لم هو هي التي الذي بعد قبل عند'.split(' '));
const words = (s: string) => new Set(norm(s).split(' ').filter(w => w.length > 2 && !STOP.has(w)));
const overlap = (a: Set<string>, b: Set<string>) => { let n = 0; a.forEach(w => { if (b.has(w)) n++; }); return n / Math.max(1, Math.min(a.size, b.size)); };
const key = (e: Exercise) => {
  const parts = [e.question ?? ''];
  if (e.type === 'multiple-choice' && typeof e.correctAnswer === 'number') parts.push(e.options?.[e.correctAnswer] ?? '');
  if (e.type === 'matching' && e.correctAnswer && typeof e.correctAnswer === 'object') parts.push(...Object.entries(e.correctAnswer as Record<string, string>).flat());
  e.sequencingItems?.forEach(s => parts.push(s.text));
  if (e.fillBlanksText) parts.push(e.fillBlanksText);
  return parts.join(' ');
};

let problems = 0;
for (const lang of ['en', 'ar'] as const) {
  const book = pair[lang];
  const stories = book.pages.filter(p => p.type === 'story');
  const text = norm(stories.map(p => String(p.content)).join(' \n '));
  const kc = book.pages.find(p => p.type === 'quiz')?.exercises ?? [];
  const others: { id: string; e: Exercise }[] = [
    ...stories.flatMap(p => (p.exercises ?? []).map(e => ({ id: `QC ${p.id}`, e }))),
    ...(book.pages.find(p => p.type === 'final-challenge')?.exercises ?? []).map((e, i) => ({ id: `FC ${i + 1}`, e })),
  ];
  const issue = (s: string) => { problems++; console.log('   ! ' + s); };
  console.log(`\n## ${story} ${level} ${lang.toUpperCase()} — ${kc.length} items`);
  const shownAt = (e: Exercise) => presentMultipleChoice(e).findIndex(o => o.originalIndex === e.correctAnswer);
  kc.forEach((e, i) => console.log(`   ${i + 1}. ${e.type} [${e.type === 'true-false' ? String(e.correctAnswer) : 'ABCD'[shownAt(e)] + ' on screen'}] ${e.question}`));
  if (kc.length !== 8) issue(`${kc.length} items, expected 8`);
  const ids = new Set<string>();
  const mcPos = new Set<number>(); let mcCount = 0, optionCount = 0; const tf = new Set<boolean>();
  for (const e of kc) {
    if (ids.has(e.id)) issue(`duplicate id ${e.id}`); ids.add(e.id);
    if (e.type !== 'multiple-choice' && e.type !== 'true-false') { issue(`${e.id}: type ${e.type} is not shown by KnowledgeCheck`); continue; }
    if (e.type === 'true-false') tf.add(e.correctAnswer as boolean);
    if (e.type === 'multiple-choice') {
      const opts = e.options ?? []; const c = e.correctAnswer as number;
      mcCount++; optionCount = Math.max(optionCount, opts.length); mcPos.add(shownAt(e));
      const others = opts.filter((_, i) => i !== c).map(o => o.length);
      if (opts[c].length > 1.3 * Math.max(...others)) issue(`${e.id}: correct option is much longer than the distractors`);
      if (new Set(opts.map(norm)).size !== opts.length) issue(`${e.id}: duplicate options`);
    }
    const fc = e.feedback?.correct ?? '';
    if (norm(fc).split(' ').length < 4) issue(`${e.id}: bare correct feedback “${fc}”`);
    if (!e.feedback?.incorrect?.trim()) issue(`${e.id}: empty incorrect feedback`);
    if (!e.explanation?.trim()) issue(`${e.id}: no explanation`);
    for (const q of `${e.question ?? ''} ${e.explanation ?? ''}`.matchAll(/[“«]([^”»]{12,})[”»]/g))
      for (const part of q[1].split(/…|\.\.\./).map(norm).filter(x => x.split(' ').length >= 3)) if (!text.includes(part)) issue(`${e.id}: quote not in story text: “${part.slice(0, 90)}”`);
    const mine = words(key(e));
    for (const o of others) { const r = overlap(mine, words(key(o.e))); if (r >= 0.6) issue(`${e.id}: close to ${o.id} (${Math.round(r * 100)}% word overlap): ${o.e.question}`); }
    if (lang === 'ar' && level === 'A2') for (const s of [e.question ?? '', ...(e.options ?? [])]) {
      const letters = (s.match(/[ء-ي]/g) ?? []).length, marks = (s.match(/[ً-ْ]/g) ?? []).length;
      if (letters > 6 && marks / letters < 0.4) issue(`${e.id}: little tashkeel in “${s.slice(0, 40)}”`);
    }
  }
  for (let i = 0; i < optionCount; i++) if (mcCount >= optionCount && !mcPos.has(i)) issue(`no multiple-choice answer is shown as ${'ABCD'[i]}`);
  if (tf.size === 1 && kc.filter(e => e.type === 'true-false').length > 1) issue(`every true-false answer is ${[...tf][0]}`);
  if (flag === '--dump') console.log(JSON.stringify(kc, null, 1));
}
console.log(problems ? `\n${problems} problem(s)` : '\nOK');
