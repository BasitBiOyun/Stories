/**
 * Structural checks for one teacher guide file:
 * - how the Lesson Flow splits into steps (the UI splits on ";" and "؛", or on "1. " numbering),
 * - numbered patterns that would break that split,
 * - whether the minutes in each lesson run from 0 to 40.
 * Usage: npx tsx docs/teacher-guides/tools/checkGuide.mts src/data/<story>/<level>/<lang>/teacherGuide.ts
 */
import path from 'node:path';

const file = path.resolve(process.argv[2]);
const mod = await import(file) as Record<string, unknown>;
type Section = { chapter: string; lessonPlan: string; grammarFocus?: string; pronunciationFocus?: string };
const sections = Object.values(mod).find(v => Array.isArray(v) && (v as Section[])[0]?.chapter) as Section[];
const meta = Object.values(mod).find(v => v && typeof v === 'object' && !Array.isArray(v) && 'title' in (v as object)) as Record<string, unknown> | undefined;

let problems = 0;
for (const s of sections) {
  const plan = s.lessonPlan.replace(/\s+/g, ' ').trim();
  if (/\b\d+\.\s/.test(plan)) { problems++; console.log(`! ${s.chapter}: "N. " pattern in lessonPlan (the UI would split on it)`); }
  const steps = plan.split(/\s*[;؛]\s*/).filter(Boolean);
  // Each step starts with "a–b"; a step may be prefixed with "Lesson 2 (40 min):" / "الحصة الثانية (40 د):".
  const lessons: number[][][] = [[]];
  for (const step of steps) {
    const prefixed = /^(Lesson|الحصة)\s/.test(step);
    const body = step.replace(/^(?:Lesson|الحصة)[^:]*:\s*/, '');
    const m = body.match(/^(\d+)–(\d+)/);
    if (prefixed && lessons[lessons.length - 1].length) lessons.push([]);
    if (m) lessons[lessons.length - 1].push([+m[1], +m[2]]);
    else { problems++; console.log(`! ${s.chapter}: step without a leading time range: "${step.slice(0, 50)}"`); }
  }
  for (const ranges of lessons) {
    if (!ranges.length) continue;
    const gaps = ranges.slice(1).filter((r, i) => r[0] !== ranges[i][1]);
    if (ranges[0][0] !== 0 || ranges[ranges.length - 1][1] !== 40 || gaps.length) {
      problems++; console.log(`! ${s.chapter}: minutes do not run 0→40 without gaps: ${ranges.map(r => r.join('–')).join(', ')}`);
    }
  }
  if (!s.grammarFocus?.includes('\n')) console.log(`  ${s.chapter}: grammarFocus is a single line (pilot uses Targets / Notice / Build / Likely errors / Use lines)`);
  console.log(`  ${s.chapter}: ${steps.length} lesson-flow steps`);
}
for (const key of ['globalCitizenship', 'appendices']) if (!meta?.[key]) { problems++; console.log(`! metadata.${key} missing (the UI then shows hard-coded fallback text)`); }
console.log(problems ? `\n${problems} problem(s)` : '\nOK');
