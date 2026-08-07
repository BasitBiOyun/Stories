import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'artifacts/adam-a2-en-gold-master');
const RENDERS = path.join(OUT, 'rendered');

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: 'inherit',
    shell: false,
    env: { ...process.env, ...(options.env || {}) },
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed with status ${result.status}`);
  }
};

const capture = (command, args) => {
  const result = spawnSync(command, args, { cwd: ROOT, encoding: 'utf8', shell: false });
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed: ${result.stderr}`);
  return result.stdout;
};

const pageCount = (pdf) => {
  const info = capture('pdfinfo', [pdf]);
  const match = info.match(/^Pages:\s+(\d+)/m);
  if (!match) throw new Error(`Could not read page count for ${pdf}`);
  return Number(match[1]);
};

const renderPdf = (pdf, dir) => {
  mkdirSync(dir, { recursive: true });
  run('pdftoppm', ['-png', '-r', '150', pdf, path.join(dir, 'page')]);
};

const vivlio = (input, output) => {
  run('npx', ['--yes', '@vivliostyle/cli@11.1.0', 'build', input, '--size', 'A4', '--output', output]);
};

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
mkdirSync(RENDERS, { recursive: true });

console.log('\n[1/8] Validate finalized Adam A2 English learning data');
run('npx', ['tsx', 'scripts/validation/validateAdamA2Learning.ts']);

console.log('\n[2/8] Build publication HTML from finalized BookData');
run('npx', ['tsx', 'scripts/pdf-pilot/buildA2FrontMatter.ts']);
for (const [ids, output] of [
  ['1,2', 'artifacts/a2-chapter-1-2'],
  ['3,4', 'artifacts/a2-chapter-3-4'],
  ['5,6', 'artifacts/a2-chapter-5-6'],
  ['7,8', 'artifacts/a2-chapter-7-8'],
  ['9,10', 'artifacts/a2-chapter-9-10'],
]) {
  run('npx', ['tsx', 'scripts/pdf-pilot/buildA2ChapterSample.ts'], { env: { A2_CHAPTER_IDS: ids, A2_OUTPUT_DIR: output } });
}
run('npx', ['tsx', 'scripts/pdf-pilot/buildA2ReviewPages.ts']);
run('npx', ['tsx', 'scripts/pdf-pilot/buildA2FinalReview.ts']);
run('npx', ['tsx', 'scripts/pdf-pilot/buildA2Glossary.ts']);
run('npx', ['tsx', 'scripts/pdf-pilot/buildA2FinalChallengeShell.ts']);
run('npx', ['tsx', 'scripts/pdf-pilot/buildA2AnswerKey.ts']);
run('npx', ['tsx', 'scripts/pdf-pilot/buildA2TeacherGuideGold.ts']);
run('npx', ['tsx', 'scripts/pdf-pilot/buildA2SelfStudyGuideGold.ts']);

console.log('\n[3/8] Render student-book sections with pinned Vivliostyle');
const studentParts = [
  ['artifacts/a2-front-matter/adam-a2-en-front-matter.html', path.join(OUT, '01-front-matter.pdf')],
  ['artifacts/a2-chapter-1-2/adam-a2-en.html', path.join(OUT, '02-chapters-1-2.pdf')],
  ['artifacts/a2-chapter-3-4/adam-a2-en.html', path.join(OUT, '03-chapters-3-4.pdf')],
  ['artifacts/a2-chapter-5-6/adam-a2-en.html', path.join(OUT, '04-chapters-5-6.pdf')],
  ['artifacts/a2-chapter-7-8/adam-a2-en.html', path.join(OUT, '05-chapters-7-8.pdf')],
  ['artifacts/a2-chapter-9-10/adam-a2-en.html', path.join(OUT, '06-chapters-9-10.pdf')],
  ['artifacts/a2-review-pages/adam-a2-en-review.html', path.join(OUT, '07-knowledge-vocabulary.pdf')],
  ['artifacts/a2-final-review/adam-a2-en-final-review.html', path.join(OUT, '08-final-review.pdf')],
  ['artifacts/a2-glossary/adam-a2-en-glossary.html', path.join(OUT, '09-master-glossary.pdf')],
  ['artifacts/a2-final-challenge-shell/adam-a2-en-final-challenge.html', path.join(OUT, '10-final-challenge.pdf')],
  ['artifacts/a2-answer-key/adam-a2-en-answer-key.html', path.join(OUT, '11-answer-key.pdf')],
];
for (const [html, pdf] of studentParts) vivlio(html, pdf);

console.log('\n[4/8] Merge final Student Book');
const studentBook = path.join(OUT, 'Adam_A2_English_Student_Book_Gold_Master.pdf');
run('pdfunite', [...studentParts.map(([, pdf]) => pdf), studentBook]);

console.log('\n[5/8] Render Teacher Guide and Self-Study Guide');
const teacherPdf = path.join(OUT, 'Adam_A2_English_Teacher_Guide_Gold_Master.pdf');
const selfPdf = path.join(OUT, 'Adam_A2_English_Self_Study_Guide_Gold_Master.pdf');
vivlio('artifacts/a2-teacher-guide-gold/adam-a2-en-teacher-guide.html', teacherPdf);
vivlio('artifacts/a2-self-study-guide-gold/adam-a2-en-self-study-guide.html', selfPdf);

console.log('\n[6/8] Verify publication page contracts');
const counts = {
  studentBook: pageCount(studentBook),
  teacherGuide: pageCount(teacherPdf),
  selfStudyGuide: pageCount(selfPdf),
  frontMatter: pageCount(path.join(OUT, '01-front-matter.pdf')),
  chapterPairs: studentParts.slice(1, 6).map(([, pdf]) => pageCount(pdf)),
  knowledgeVocabulary: pageCount(path.join(OUT, '07-knowledge-vocabulary.pdf')),
  finalReview: pageCount(path.join(OUT, '08-final-review.pdf')),
  glossary: pageCount(path.join(OUT, '09-master-glossary.pdf')),
  finalChallenge: pageCount(path.join(OUT, '10-final-challenge.pdf')),
  answerKey: pageCount(path.join(OUT, '11-answer-key.pdf')),
};

if (counts.frontMatter !== 3) throw new Error(`Front matter must be 3 pages; found ${counts.frontMatter}.`);
if (counts.chapterPairs.some((count) => count !== 2)) throw new Error(`Each chapter pair must be 2 pages; found ${counts.chapterPairs.join(', ')}.`);
if (counts.knowledgeVocabulary !== 2) throw new Error(`Knowledge/Vocabulary section must be 2 pages; found ${counts.knowledgeVocabulary}.`);
if (counts.finalReview !== 4) throw new Error(`Final Review must be 4 pages; found ${counts.finalReview}.`);
if (counts.glossary !== 2) throw new Error(`Master Glossary must be 2 pages; found ${counts.glossary}.`);
if (counts.finalChallenge !== 3) throw new Error(`Final Challenge must be opener + 5 + 5 = 3 pages; found ${counts.finalChallenge}.`);
if (counts.answerKey !== 2) throw new Error(`Answer Key must be 2 pages; found ${counts.answerKey}.`);
if (counts.studentBook !== 26) throw new Error(`Student Book gold master must be 26 pages; found ${counts.studentBook}.`);
if (counts.teacherGuide < 13) throw new Error(`Teacher Guide looks incomplete: ${counts.teacherGuide} pages.`);
if (counts.selfStudyGuide < 13) throw new Error(`Self-Study Guide looks incomplete: ${counts.selfStudyGuide} pages.`);

console.log('\n[7/8] Render every final PDF page to PNG for visual inspection');
renderPdf(studentBook, path.join(RENDERS, 'student-book'));
renderPdf(teacherPdf, path.join(RENDERS, 'teacher-guide'));
renderPdf(selfPdf, path.join(RENDERS, 'self-study-guide'));

console.log('\n[8/8] Write gold-master manifest');
const manifest = {
  generatedAt: new Date().toISOString(),
  engine: '@vivliostyle/cli@11.1.0',
  canonicalBoundary: 'Story prose, chapter identity/order, images, audio references, hotspots, narration sync and timed chunks are read-only.',
  contentSource: 'adamA2BookDataEn finalized derived-content layer',
  contracts: {
    chapters: 10,
    knowledgeCheckQuestions: 8,
    reviewChallengeQuestions: 8,
    finalChallengeQuestions: 10,
    finalChallengePrintSplit: '5 + 5',
  },
  pageCounts: counts,
  finalFiles: {
    studentBook: path.relative(ROOT, studentBook),
    teacherGuide: path.relative(ROOT, teacherPdf),
    selfStudyGuide: path.relative(ROOT, selfPdf),
  },
  visualEvidence: path.relative(ROOT, RENDERS),
};
writeFileSync(path.join(OUT, 'gold-master-manifest.json'), JSON.stringify(manifest, null, 2));
writeFileSync(path.join(OUT, 'README.txt'), [
  'Adam A2 English PDF Gold Master',
  '',
  'This build is intentionally local and does not require GitHub Actions.',
  'It validates finalized content, builds PDFs with pinned Vivliostyle 11.1.0, merges the Student Book,',
  'checks section page-count contracts, and renders every final page to PNG for visual inspection.',
  '',
  `Student Book pages: ${counts.studentBook}`,
  `Teacher Guide pages: ${counts.teacherGuide}`,
  `Self-Study Guide pages: ${counts.selfStudyGuide}`,
].join('\n'));

console.log('\nAdam A2 English PDF Gold Master: PASS');
console.log(JSON.stringify(counts, null, 2));