import { getBookDefinition } from '/home/user/Stories/src/core/content/bookRegistry';
import type { Exercise } from '/home/user/Stories/src/types';

const [story, level] = process.argv.slice(2);
const def = getBookDefinition(story, level as any)!;
const pair = await def.load();
const strip = (s: string) => s.normalize('NFKC').replace(/[ً-ٰٟ]/g, '').replace(/[“”"«»‘’'.,!?؟،؛:;()…]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

/** Visible text of an exercise, excluding the gaps. */
const shownText = (e: Exercise): string[] => {
  const out: string[] = [];
  e.formChoices?.forEach(f => out.push(f.sentence));
  e.errorItems?.forEach(f => out.push(f.sentence.replace(f.error, ' ')));
  e.transformItems?.forEach(f => { out.push(f.source); out.push(f.frame); });
  if (e.fillBlanksText) out.push(e.fillBlanksText);
  e.options?.forEach(o => out.push(o));
  e.dragDropGroups?.forEach(g => out.push(...g.items));
  e.sequencingItems?.forEach(s => out.push(s.text));
  e.matchingPairs?.forEach(p => out.push(p.left, p.right));
  return out;
};
/** Answers the learner must supply, with the sentence they belong to. */
const answers = (e: Exercise): { answer: string; own: string; source?: string }[] => {
  const out: { answer: string; own: string; source?: string }[] = [];
  e.formChoices?.forEach(f => out.push({ answer: f.options[f.answer], own: f.sentence }));
  e.errorItems?.forEach(f => out.push({ answer: f.options[f.answer], own: f.sentence }));
  e.transformItems?.forEach(f => out.push({ answer: f.answers[0], own: f.frame, source: f.source }));
  if (e.type === 'word-bank' && Array.isArray(e.correctAnswer)) e.correctAnswer.forEach((a: string) => out.push({ answer: a, own: e.fillBlanksText ?? '' }));
  if (e.type === 'fill-blanks') (Array.isArray(e.correctAnswer) ? e.correctAnswer : [e.correctAnswer]).forEach((a: string) => out.push({ answer: String(a), own: e.fillBlanksText ?? '' }));
  return out;
};

for (const lang of ['en', 'ar'] as const) {
  const pages = pair[lang].pages.filter(p => p.languageFocusExercises?.length);
  const totals: Record<string, number> = {};
  let chaptersWithMatching = 0; const issues: string[] = []; let prevSeq = '';
  for (const page of pages) {
    const ex = page.languageFocusExercises!;
    const seq = ex.map(e => e.type).join('>');
    ex.forEach(e => { totals[e.type] = (totals[e.type] ?? 0) + 1; });
    const m = ex.filter(e => e.type === 'matching').length;
    if (m) chaptersWithMatching++;
    if (m > 1) issues.push(`ch${page.id}: ${m} matchings`);
    ex.forEach((e, i) => { if (i && ex[i - 1].type === e.type) issues.push(`ch${page.id}: ${e.type} twice in a row`); });
    if (seq === prevSeq) issues.push(`ch${page.id}: same sequence as previous chapter (${seq})`);
    prevSeq = seq;
    // answer reveals: an answer (≥2 words or ≥6 chars) visible in another item/activity text of the chapter
    ex.forEach(e => answers(e).forEach(({ answer, own, source }) => {
      const a = strip(answer); if (a.length < 6 && a.split(' ').length < 2) return;
      ex.forEach((other, otherIndex) => { if (other.type === 'reflection' || (otherIndex === 0 && other !== e)) return; shownText(other).forEach(t => {
        if (t === own || t === source) return;
        const st = strip(t); if (st.length < a.length + 4) return;
        if (st.includes(a)) issues.push(`ch${page.id}: answer "${answer}" (${e.id}) is visible in ${other.id}: "${t.slice(0, 90)}"`);
      }); });
    }));
  }
  const n = Object.values(totals).reduce((x, y) => x + y, 0);
  console.log(`\n### ${story} ${level} ${lang.toUpperCase()} — ${pages.length} chapters, ${n} activities, chapters with matching ${chaptersWithMatching}/${pages.length}`);
  console.log('   types:', Object.entries(totals).sort((a, b) => b[1] - a[1]).map(([t, c]) => `${t} ${c}`).join(', '));
  console.log('   first types:', Object.entries(pages.reduce((acc: Record<string, number>, p) => { const t = p.languageFocusExercises![0].type; acc[t] = (acc[t] ?? 0) + 1; return acc; }, {})).map(([t, c]) => `${t} ${c}`).join(', '));
  issues.forEach(i => console.log('   !', i));
}
