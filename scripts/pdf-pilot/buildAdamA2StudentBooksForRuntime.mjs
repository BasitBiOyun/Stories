import { mkdirSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const ROOT = process.cwd();
const OUTPUT = path.resolve(ROOT, process.env.PUBLICATION_OUT || 'artifacts/runtime-publications');
const WORK = path.join(OUTPUT, '.work');
const TSX = path.join(ROOT, 'node_modules/.bin/tsx');
const EN_PDF = 'Adam_A2_English_Student_Book_Gold.pdf';
const AR_PDF = 'Adam_A2_Arabic_Student_Book_Gold.pdf';

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: 'inherit',
    shell: false,
    env: { ...process.env, ...(options.env || {}) },
  });
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed with status ${result.status}`);
};

const vivlio = (input, output) => run('vivliostyle', ['build', input, '--size', 'A4', '--output', output]);

// PUBLICATION_OUT may be a directory created/chowned by the container build.
// Do not unlink the directory itself: its parent can be root-owned even when
// the publication directory is writable by the Vivliostyle user.
mkdirSync(OUTPUT, { recursive: true });
rmSync(WORK, { recursive: true, force: true });
rmSync(path.join(OUTPUT, EN_PDF), { force: true });
rmSync(path.join(OUTPUT, AR_PDF), { force: true });
mkdirSync(WORK, { recursive: true });

console.log('[Adam A2 static PDFs] Validate learning-source structure');
run(TSX, ['scripts/validation/validateAdamA2Learning.ts']);

console.log('[Adam A2 static PDFs] Build shared HTML sources');
run(TSX, ['scripts/pdf-pilot/buildA2FrontMatter.ts']);
for (const [ids, output] of [
  ['1,2', 'artifacts/a2-chapter-1-2'],
  ['3,4', 'artifacts/a2-chapter-3-4'],
  ['5,6', 'artifacts/a2-chapter-5-6'],
  ['7,8', 'artifacts/a2-chapter-7-8'],
  ['9,10', 'artifacts/a2-chapter-9-10'],
]) {
  run(TSX, ['scripts/pdf-pilot/buildA2ChapterSample.ts'], { env: { A2_CHAPTER_IDS: ids, A2_OUTPUT_DIR: output } });
}
run(TSX, ['scripts/pdf-pilot/buildA2ReviewPages.ts']);
run(TSX, ['scripts/pdf-pilot/buildA2FinalReview.ts']);
run(TSX, ['scripts/pdf-pilot/buildA2Glossary.ts']);
run(TSX, ['scripts/pdf-pilot/buildA2FinalChallengeShell.ts']);
run(TSX, ['scripts/pdf-pilot/buildA2AnswerKey.ts']);

const sectionFiles = (language) => [
  `artifacts/a2-front-matter/adam-a2-${language}-front-matter.html`,
  `artifacts/a2-chapter-1-2/adam-a2-${language}.html`,
  `artifacts/a2-chapter-3-4/adam-a2-${language}.html`,
  `artifacts/a2-chapter-5-6/adam-a2-${language}.html`,
  `artifacts/a2-chapter-7-8/adam-a2-${language}.html`,
  `artifacts/a2-chapter-9-10/adam-a2-${language}.html`,
  `artifacts/a2-review-pages/adam-a2-${language}-review.html`,
  `artifacts/a2-final-review/adam-a2-${language}-final-review.html`,
  `artifacts/a2-glossary/adam-a2-${language}-glossary.html`,
  `artifacts/a2-final-challenge-shell/adam-a2-${language}-final-challenge.html`,
  `artifacts/a2-answer-key/adam-a2-${language}-answer-key.html`,
];

const buildBook = (language, outputName) => {
  console.log(`[Adam A2 static PDFs] Render ${language.toUpperCase()} student book`);
  const parts = sectionFiles(language).map((html, index) => {
    const pdf = path.join(WORK, `${language}-${String(index + 1).padStart(2, '0')}.pdf`);
    vivlio(html, pdf);
    return pdf;
  });
  const finalPdf = path.join(OUTPUT, outputName);
  run('pdfunite', [...parts, finalPdf]);
  console.log(`[Adam A2 static PDFs] Ready: ${finalPdf}`);
};

buildBook('en', EN_PDF);
buildBook('ar', AR_PDF);

rmSync(WORK, { recursive: true, force: true });
console.log('[Adam A2 static PDFs] PASS - two ready student books');
