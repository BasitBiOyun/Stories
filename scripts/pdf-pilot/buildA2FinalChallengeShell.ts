import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn, adamA2BookDataAr } from '../../src/data/adam/a2';
import type { Exercise, PageData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-final-challenge-shell');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');
const IMAGE_DIR = path.join(OUTPUT, 'assets/images');

type Language = 'en' | 'ar';

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const findFinal = (pages: PageData[]): PageData => {
  const page = pages.find((item) => item.id === 16 && item.type === 'final-challenge');
  if (!page) throw new Error('Adam A2 Final Challenge page not found.');
  return page;
};

const objectiveQuestions = (page: PageData): Exercise[] => (page.exercises ?? []).filter(
  (exercise) => exercise.type === 'multiple-choice' || exercise.type === 'true-false',
);

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

const tryDownload = async (url: string | undefined, target: string): Promise<boolean> => {
  if (!url) return false;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Final Challenge source image is unavailable (${response.status}); using print-only decoration.`);
      return false;
    }
    await writeFile(target, Buffer.from(await response.arrayBuffer()));
    return true;
  } catch (error) {
    console.warn('Final Challenge source image could not be downloaded; using print-only decoration.', error);
    return false;
  }
};

const renderQuestion = (exercise: Exercise, questionNumber: number, language: Language): string => {
  const isArabic = language === 'ar';
  const number = isArabic
    ? ['١','٢','٣','٤','٥','٦','٧','٨','٩','١٠'][questionNumber - 1]
    : String(questionNumber);

  const options = exercise.type === 'true-false'
    ? [isArabic ? 'صحيح' : 'True', isArabic ? 'خطأ' : 'False']
    : (exercise.options ?? []);

  return `<section class="final-question">
    <div class="final-question-number">${number}</div>
    <div class="final-question-copy">
      <h2>${escapeHtml(exercise.question || exercise.instructions || '')}</h2>
      <div class="final-options${exercise.type === 'true-false' ? ' final-options-tf' : ''}">
        ${options.map((option, index) => `<div class="final-option"><i></i><b>${exercise.type === 'true-false' ? '' : String.fromCharCode(65 + index)}</b><span>${escapeHtml(option)}</span></div>`).join('')}
      </div>
    </div>
  </section>`;
};

const renderQuestionPage = (page: PageData, questions: Exercise[], language: Language, startNumber: number): string => {
  const isArabic = language === 'ar';
  const rangeLabel = isArabic
    ? `الأسئلة ${startNumber === 1 ? '١–٥' : '٦–١٠'}`
    : `QUESTIONS ${startNumber}–${startNumber + 4}`;

  return `<article class="challenge-question-page${isArabic ? ' challenge-question-page-rtl' : ''}">
    <header class="final-page-header">
      <div>
        <div class="final-page-eyebrow">${escapeHtml(rangeLabel)}</div>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(isArabic ? 'استرجع المعلومات من القصة. عد إلى الفصول إذا احتجت إلى مساعدة.' : 'Recall the information from the story. Return to the chapters if you need help.')}</p>
      </div>
      <div class="final-level-marker">A2</div>
    </header>
    <div class="final-question-list">
      ${questions.map((exercise, index) => renderQuestion(exercise, startNumber + index, language)).join('\n')}
    </div>
  </article>`;
};

const renderDocument = (page: PageData, language: Language, imagePath: string | null): string => {
  const isArabic = language === 'ar';
  const eyebrow = isArabic ? 'نهاية الرحلة' : 'END-OF-STORY CHALLENGE';
  const nameLabel = isArabic ? 'الاسم' : 'Name';
  const dateLabel = isArabic ? 'التاريخ' : 'Date';
  const visual = imagePath
    ? `<figure class="challenge-image"><img src="${escapeHtml(imagePath)}" alt="" /></figure>`
    : `<div class="challenge-visual-fallback" aria-hidden="true"><span></span><span></span><span></span></div>`;
  const questions = objectiveQuestions(page);

  if (questions.length !== 0 && questions.length !== 10) {
    throw new Error(`Final Challenge must contain exactly 10 objective questions; found ${questions.length}.`);
  }

  const questionPages = questions.length === 10
    ? `${renderQuestionPage(page, questions.slice(0, 5), language, 1)}\n${renderQuestionPage(page, questions.slice(5, 10), language, 6)}`
    : '';

  return `<!doctype html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head><meta charset="utf-8" /><title>${escapeHtml(page.title)}</title><link rel="stylesheet" href="a2-final-challenge-shell.css" /></head>
<body class="lang-${language}">
  <article class="challenge-opener${isArabic ? ' challenge-opener-rtl' : ''}">
    <div class="challenge-band"></div>
    <header class="challenge-header">
      <div class="challenge-eyebrow">${escapeHtml(eyebrow)}</div>
      <h1>${escapeHtml(page.title)}</h1>
      <p>${escapeHtml(page.content)}</p>
    </header>

    ${visual}

    <section class="student-fields">
      <div><strong>${escapeHtml(nameLabel)}</strong><span></span></div>
      <div><strong>${escapeHtml(dateLabel)}</strong><span></span></div>
    </section>

    <div class="level-mark">A2</div>
  </article>
  ${questionPages}
</body>
</html>`;
};

await mkdir(FONT_DIR, { recursive: true });
await mkdir(IMAGE_DIR, { recursive: true });
const finalEn = findFinal(adamA2BookDataEn.pages);
const finalAr = findFinal(adamA2BookDataAr.pages);
const imagePath = 'assets/images/final-challenge.png';
const hasSourceImage = await tryDownload(finalEn.image, path.join(OUTPUT, imagePath));
const resolvedImagePath = hasSourceImage ? imagePath : null;

const poppins = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
await Promise.all([
  download(`${poppins}/Poppins-Regular.ttf`, path.join(FONT_DIR, 'Poppins-Regular.ttf')),
  download(`${poppins}/Poppins-SemiBold.ttf`, path.join(FONT_DIR, 'Poppins-SemiBold.ttf')),
  download(`${poppins}/Poppins-Bold.ttf`, path.join(FONT_DIR, 'Poppins-Bold.ttf')),
  copyFile(path.join(ROOT, 'public/Arakom-Regular.ttf'), path.join(FONT_DIR, 'Arakom-Regular.ttf')),
  copyFile(path.join(ROOT, 'public/Arakom-Bold.ttf'), path.join(FONT_DIR, 'Arakom-Bold.ttf')),
]);

await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-final-challenge-shell.css'), path.join(OUTPUT, 'a2-final-challenge-shell.css'));
await writeFile(path.join(OUTPUT, 'adam-a2-en-final-challenge.html'), renderDocument(finalEn, 'en', resolvedImagePath));
await writeFile(path.join(OUTPUT, 'adam-a2-ar-final-challenge.html'), renderDocument(finalAr, 'ar', resolvedImagePath));

const enCount = objectiveQuestions(finalEn).length;
const arCount = objectiveQuestions(finalAr).length;
await writeFile(path.join(OUTPUT, 'README.txt'), [
  'Adam A2 Final Challenge print contract.',
  'Approved question contract: exactly 10 objective questions, rendered 5 + 5 on two A4 question pages after the opener.',
  `Current English objective-question count: ${enCount}.`,
  `Current Arabic objective-question count: ${arCount}.`,
  hasSourceImage
    ? 'The current source image was rendered without modification.'
    : 'The current source image reference is unavailable, so the PDF uses non-content print decoration rather than substituting another story image.',
  'If a language has no approved Final Challenge questions yet, only the opener is rendered for that language.',
  'No production questions are invented by the PDF layer.',
].join('\n'));
