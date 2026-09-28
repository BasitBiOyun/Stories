/**
 * Checks the live Final Challenge of one book (both languages) as FinalChallenge.tsx loads it.
 * - exactly 10 scored items in the locked mix of docs/MANUAL_CONTENT_AUTHORING_STANDARD.md §4:
 *   3 multiple-choice, 2 true-false, 2 matching, 2 fill-blanks, 1 sequencing (no reflection)
 * - FinalChallenge.tsx shows options in source order, so the correct option must move around
 *   (not all at one letter) and must not be much longer than the distractors; true-false answers mixed
 * - sequencing: the UI starts from the reversed source list, which must not already be the answer
 * - matching: unique left and right sides; fill-blanks: one [blank] and at least one accepted answer
 * - feedback is more than a bare "Correct." / «صحيح.» and the incorrect feedback is not empty
 * - quotes “…” / «…» in question, explanation, feedback and item texts occur in the story text
 * - no item repeats a Quick Challenge or Knowledge Check question (word overlap of question + answer)
 * - no more than 2 items name the same chapter in their explanation (a rough coverage check;
 *   the whole-book sequencing item is left out of this count)
 * Usage: npx tsx docs/final-challenge/tools/checkFinalChallenge.mts <story> <A2|B1|B2>
 * story ids: adam, ibrahim (Abraham), musa (Moses), mecca, yunusEmre
 */
import { getBookDefinition } from '../../../src/core/content/bookRegistry';
import type { Exercise } from '../../../src/types';

const [story, level] = process.argv.slice(2);
const pair = await getBookDefinition(story, level as never)!.load();
const norm = (s: string) => s.normalize('NFKC').replace(/[​-‏‪-‮⁦-⁩]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/[ً-ْٰـ]/g, '').replace(/[’‘`]/g, "'").replace(/[“”"«»﴾﴿]/g, '').replace(/[.,!?;:،؛؟()\-–—]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const STOP = new Set('the a an of to in and or was were is are he she it his her they their them did do does what why how who which that this with for on at by from as be not no had has have after before when into about story chapter book في من على إلى الى عن أن ان ما ماذا لماذا كيف هل كان كانت ثم و لا لم هو هي التي الذي بعد قبل عند'.split(' '));
const words = (s: string) => new Set(norm(s).split(' ').filter(w => w.length > 2 && !STOP.has(w)));
// long whole-book items (sequencing, matching) share many words with any short item, so they are compared by the larger set
const overlap = (a: Set<string>, b: Set<string>, wide = false) => { let n = 0; a.forEach(w => { if (b.has(w)) n++; }); return n / Math.max(1, wide ? Math.max(a.size, b.size) : Math.min(a.size, b.size)); };
const key = (e: Exercise) => {
  const parts = [e.question ?? ''];
  if (e.type === 'multiple-choice' && typeof e.correctAnswer === 'number') parts.push(e.options?.[e.correctAnswer] ?? '');
  if (e.type === 'matching' && e.correctAnswer && typeof e.correctAnswer === 'object') parts.push(...Object.entries(e.correctAnswer as Record<string, string>).flat());
  e.sequencingItems?.forEach(s => parts.push(s.text));
  if (e.fillBlanksText) parts.push(e.fillBlanksText);
  return parts.join(' ');
};
const MIX: Record<string, number> = { 'multiple-choice': 3, 'true-false': 2, matching: 2, 'fill-blanks': 2, sequencing: 1 };
const EN_NUM = 'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'.split(' ');

let problems = 0;
for (const lang of ['en', 'ar'] as const) {
  const book = pair[lang];
  const stories = book.pages.filter(p => p.type === 'story');
  const text = norm(stories.map(p => String(p.content)).join(' \n '));
  const fc = book.pages.find(p => p.type === 'final-challenge')?.exercises ?? [];
  const others: { id: string; e: Exercise }[] = [
    ...stories.flatMap(p => (p.exercises ?? []).map(e => ({ id: `QC ${p.id}`, e }))),
    ...(book.pages.find(p => p.type === 'quiz')?.exercises ?? []).map((e, i) => ({ id: `KC ${i + 1}`, e })),
  ];
  const issue = (s: string) => { problems++; console.log('   ! ' + s); };
  console.log(`\n## ${story} ${level} ${lang.toUpperCase()} — ${fc.length} items`);
  fc.forEach((e, i) => console.log(`   ${i + 1}. ${e.type} [${e.type === 'multiple-choice' ? 'ABCD'[e.correctAnswer as number] : e.type === 'true-false' ? String(e.correctAnswer) : '-'}] ${e.question}`));
  const counts: Record<string, number> = {};
  fc.forEach(e => { counts[e.type] = (counts[e.type] ?? 0) + 1; });
  for (const [t, n] of Object.entries(MIX)) if ((counts[t] ?? 0) !== n) issue(`${counts[t] ?? 0} × ${t}, expected ${n}`);
  for (const t of Object.keys(counts)) if (!(t in MIX)) issue(`${counts[t]} × ${t} is outside the locked mix`);
  const ids = new Set<string>(); const mcPos = new Set<number>(); const tf = new Set<boolean>();
  const chapterUse = new Map<number, number>();
  for (const e of fc) {
    if (ids.has(e.id)) issue(`duplicate id ${e.id}`); ids.add(e.id);
    if (e.type === 'true-false') tf.add(e.correctAnswer as boolean);
    if (e.type === 'multiple-choice') {
      const opts = e.options ?? []; const c = e.correctAnswer as number;
      mcPos.add(c);
      const rest = opts.filter((_, i) => i !== c).map(o => o.length);
      if (opts[c].length > 1.3 * Math.max(...rest)) issue(`${e.id}: correct option is much longer than the distractors`);
      if (new Set(opts.map(norm)).size !== opts.length) issue(`${e.id}: duplicate options`);
    }
    if (e.type === 'sequencing') {
      const src = (e.sequencingItems ?? []).map(s => s.id);
      const answer = Array.isArray(e.correctAnswer) ? e.correctAnswer.map(String) : src;
      if ([...src].reverse().join() === answer.join()) issue(`${e.id}: the starting (reversed) order is already the answer`);
    }
    if (e.type === 'matching') {
      const pairs = e.matchingPairs ?? [];
      if (new Set(pairs.map(p => p.left)).size !== pairs.length || new Set(pairs.map(p => p.right)).size !== pairs.length) issue(`${e.id}: matching sides are not unique`);
      const ca = e.correctAnswer as Record<string, string>;
      if (!pairs.every(p => ca?.[p.left] === p.right)) issue(`${e.id}: correctAnswer does not match matchingPairs`);
    }
    if (e.type === 'fill-blanks') {
      if ((e.fillBlanksText ?? '').split('[blank]').length !== 2) issue(`${e.id}: expected exactly one [blank]`);
      const acc = Array.isArray(e.correctAnswer) ? e.correctAnswer : [e.correctAnswer];
      if (!acc.length || !String(acc[0] ?? '').trim()) issue(`${e.id}: no accepted answer`);
      else if (!text.includes(norm((e.fillBlanksText ?? '').replace('[blank]', String(acc[0]))))) issue(`${e.id}: completed sentence not found in story text`);
    }
    const fcText = e.feedback?.correct ?? '';
    if (norm(fcText).split(' ').length < 4) issue(`${e.id}: bare correct feedback “${fcText}”`);
    if (!e.feedback?.incorrect?.trim()) issue(`${e.id}: empty incorrect feedback`);
    if (!e.explanation?.trim()) issue(`${e.id}: no explanation`);
    const quoted = [e.question, e.explanation, e.feedback?.correct, e.feedback?.incorrect, ...(e.sequencingItems ?? []).map(s => s.text), ...(e.matchingPairs ?? []).map(p => p.left)].join(' ');
    for (const q of quoted.matchAll(/[“«]([^”»]{12,})[”»]/g))
      for (const part of q[1].split(/…|\.\.\./).map(norm).filter(x => x.split(' ').length >= 3)) if (!text.includes(part)) issue(`${e.id}: quote not in story text: “${part.slice(0, 90)}”`);
    const mine = words(key(e));
    for (const o of others) { const r = overlap(mine, words(key(o.e)), e.type === 'sequencing' || e.type === 'matching'); if (r >= 0.6) issue(`${e.id}: close to ${o.id} (${Math.round(r * 100)}% word overlap): ${o.e.question}`); }
    if (lang === 'en' && e.type !== 'sequencing') {
      const named = new Set<number>();
      for (const m of (e.explanation ?? '').matchAll(/Chapters? (\d+)(?:[–-](\d+))?/g)) for (let n = +m[1]; n <= +(m[2] ?? m[1]); n++) named.add(n);
      for (const m of (e.explanation ?? '').matchAll(/Chapter (\w+)/gi)) { const n = EN_NUM.indexOf(m[1].toLowerCase()); if (n >= 0) named.add(n + 1); }
      named.forEach(n => chapterUse.set(n, (chapterUse.get(n) ?? 0) + 1));
    }
  }
  if (mcPos.size === 1 && (counts['multiple-choice'] ?? 0) > 1) issue(`every multiple-choice answer is at ${'ABCD'[[...mcPos][0]]}`);
  if (tf.size === 1 && (counts['true-false'] ?? 0) > 1) issue(`every true-false answer is ${[...tf][0]}`);
  if (lang === 'en') {
    for (const [n, c] of chapterUse) if (c > 2) console.log(`   ~ Chapter ${n} is named in ${c} explanations (standard: max 2 questions per chapter; check by hand)`);
    const missing = stories.map(p => p.id as number).filter(n => !chapterUse.has(n));
    if (missing.length) console.log(`   ~ chapters not named in any explanation: ${missing.join(', ')}`);
  }
}
console.log(problems ? `\n${problems} problem(s)` : '\nOK');
