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
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

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

const renderQuestion = (exercise: Exercise, questionNumber: number, language: Language): string => {
  const isArabic = language === 'ar';
  const number = isArabic ? ['١','٢','٣','٤','٥','٦','٧','٨','٩','١٠'][questionNumber - 1] : String(questionNumber);
  const options = exercise.type === 'true-false'
    ? [isArabic ? 'صحيح' : 'TRUE', isArabic ? 'خطأ' : 'FALSE']
    : (exercise.options ?? []);
  const letters = isArabic ? ['أ','ب','ج','د'] : ['A','B','C','D'];

  return `<section class="final-question">
    <div class="final-question-number">${escapeHtml(number)}</div>
    <div class="final-question-copy">
      <h2>${escapeHtml(exercise.question || exercise.instructions || '')}</h2>
      <div class="final-options${exercise.type === 'true-false' ? ' final-options-tf' : ''}">
        ${options.map((option, index) => `<div class="final-option"><b>${escapeHtml(letters[index] ?? String(index + 1))}</b><span>${escapeHtml(option)}</span></div>`).join('')}
      </div>
    </div>
  </section>`;
};

const renderQuestionPage = (page: PageData, questions: Exercise[], language: Language, startNumber: number): string => {
  const isArabic = language === 'ar';
  const endNumber = startNumber + questions.length - 1;
  const arabicRange = startNumber === 1 ? '١–٥' : '٦–١٠';
  const rangeLabel = isArabic ? `الأسئلة ${arabicRange}` : `QUESTIONS ${startNumber}–${endNumber}`;
  return `<article class="challenge-question-page${isArabic ? ' challenge-question-page-rtl' : ''}">
    <header class="final-page-header"><div><div class="final-page-eyebrow">${escapeHtml(rangeLabel)}</div><h1>${escapeHtml(page.title)}</h1><p>${escapeHtml(isArabic ? 'استرجع المعلومات من القصة. عد إلى الفصول إذا احتجت إلى مساعدة.' : 'Recall the information from the story. Return to the chapters if you need help.')}</p></div><div class="final-level-marker">A2</div></header>
    <div class="final-question-list">${questions.map((exercise, index) => renderQuestion(exercise, startNumber + index, language)).join('')}</div>
  </article>`;
};

const renderDocument = (page: PageData, language: Language, imagePath: string): string => {
  const isArabic = language === 'ar';
  const questions = objectiveQuestions(page);
  const questionPages = [questions.slice(0, 5), questions.slice(5, 10)]
    .filter((chunk) => chunk.length)
    .map((chunk, index) => renderQuestionPage(page, chunk, language, index === 0 ? 1 : 6))
    .join('');

  return `<!doctype html><html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"/><title>${escapeHtml(page.title)}</title><link rel="stylesheet" href="a2-final-challenge-shell.css"/></head><body class="lang-${language}">
  <article class="challenge-opener${isArabic ? ' challenge-opener-rtl' : ''}">
    <div class="challenge-band"></div>
    <header class="challenge-header"><div class="challenge-eyebrow">${escapeHtml(isArabic ? 'نهاية الرحلة' : 'END-OF-STORY CHALLENGE')}</div><h1>${escapeHtml(page.title)}</h1><p>${escapeHtml(page.content)}</p></header>
    <figure class="challenge-image"><img src="${escapeHtml(imagePath)}" alt=""/></figure>
    <section class="student-fields"><div><strong>${escapeHtml(isArabic ? 'الاسم' : 'Name')}</strong><span></span></div><div><strong>${escapeHtml(isArabic ? 'التاريخ' : 'Date')}</strong><span></span></div></section>
    <div class="level-mark">A2</div>
  </article>${questionPages}</body></html>`;
};

await mkdir(FONT_DIR, { recursive: true });
await mkdir(IMAGE_DIR, { recursive: true });
const finalEn = findFinal(adamA2BookDataEn.pages);
const finalAr = findFinal(adamA2BookDataAr.pages);
const coverImage = adamA2BookDataEn.pages.find((page) => page.id === 1 && page.type === 'story')?.image;
if (!coverImage) throw new Error('Adam A2 chapter 1 cover artwork is missing.');
const imagePath = 'assets/images/adam-cover.png';
await download(coverImage, path.join(OUTPUT, imagePath));

const poppins = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
await Promise.all([
  download(`${poppins}/Poppins-Regular.ttf`, path.join(FONT_DIR, 'Poppins-Regular.ttf')),
  download(`${poppins}/Poppins-SemiBold.ttf`, path.join(FONT_DIR, 'Poppins-SemiBold.ttf')),
  download(`${poppins}/Poppins-Bold.ttf`, path.join(FONT_DIR, 'Poppins-Bold.ttf')),
  copyFile(path.join(ROOT, 'public/Arakom-Regular.ttf'), path.join(FONT_DIR, 'Arakom-Regular.ttf')),
  copyFile(path.join(ROOT, 'public/Arakom-Bold.ttf'), path.join(FONT_DIR, 'Arakom-Bold.ttf')),
]);
await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-final-challenge-shell.css'), path.join(OUTPUT, 'a2-final-challenge-shell.css'));
await writeFile(path.join(OUTPUT, 'adam-a2-en-final-challenge.html'), renderDocument(finalEn, 'en', imagePath));
await writeFile(path.join(OUTPUT, 'adam-a2-ar-final-challenge.html'), renderDocument(finalAr, 'ar', imagePath));
