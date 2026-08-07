import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import type { Exercise, PageData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-golden-chapter');
const ASSETS = path.join(OUTPUT, 'assets');
const IMAGE_DIR = path.join(ASSETS, 'images');
const FONT_DIR = path.join(ASSETS, 'fonts');
const CHAPTER_ID = 2;

type Language = 'en' | 'ar';

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightFirstOccurrence = (content: string, words: string[]): string => {
  let html = escapeHtml(content);
  for (const originalWord of words) {
    const escapedWord = escapeHtml(originalWord);
    const pattern = new RegExp(escapeRegExp(escapedWord), 'iu');
    html = html.replace(pattern, `<mark class="vocab-highlight">${escapedWord}</mark>`);
  }
  return html;
};

const paragraphize = (page: PageData): string => {
  const words = (page.vocabulary ?? []).map((item) => item.word);
  return page.content
    .split(/\n\s*\n/g)
    .map((paragraph) => `<p>${highlightFirstOccurrence(paragraph.trim(), words)}</p>`)
    .join('\n');
};

const normalizeOption = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object' && 'text' in value) {
    return String((value as { text?: string }).text ?? '');
  }
  return String(value ?? '');
};

const renderExerciseBody = (exercise: Exercise, language: Language): string => {
  if (exercise.type === 'true-false') {
    const labels = language === 'ar' ? ['صحيح', 'خطأ'] : ['TRUE', 'FALSE'];
    return `<div class="answer-row">${labels.map((label) => `<span class="print-option"><i></i>${escapeHtml(label)}</span>`).join('')}</div>`;
  }

  if (exercise.type === 'multiple-choice') {
    return `<div class="answer-row answer-row-mc">${(exercise.options ?? []).map((option, index) => `<span class="print-option"><i></i><b>${String.fromCharCode(65 + index)}</b>${escapeHtml(normalizeOption(option))}</span>`).join('')}</div>`;
  }

  return '<div class="writing-line"></div>';
};

const renderWordNotes = (page: PageData, language: Language): string => {
  const title = language === 'ar' ? 'كلمات مهمة' : 'Word Notes';
  return `<section class="word-notes">
    <div class="word-notes-title">${escapeHtml(title)}</div>
    <div class="word-notes-list">
      ${(page.vocabulary ?? []).map((item) => `<div class="word-note"><strong>${escapeHtml(item.word)}</strong><span>${escapeHtml(item.definition)}</span></div>`).join('')}
    </div>
  </section>`;
};

const renderQuickChallenge = (page: PageData, language: Language): string => {
  const exercise = page.exercises?.[0];
  if (!exercise) return '';
  const label = language === 'ar' ? 'تحدٍّ سريع' : 'Quick Challenge';
  const fallbackInstruction = language === 'ar' ? 'أجب عن السؤال.' : 'Answer the question.';
  return `<aside class="quick-challenge">
    <div class="quick-title">${escapeHtml(label)}</div>
    <div class="quick-content">
      <h3>${escapeHtml(exercise.title || label)}</h3>
      <p class="quick-instruction">${escapeHtml(exercise.instructions || fallbackInstruction)}</p>
      <p class="quick-question">${escapeHtml(exercise.question || exercise.fillBlanksText || '')}</p>
      ${renderExerciseBody(exercise, language)}
    </div>
  </aside>`;
};

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

const prepareAssets = async (page: PageData): Promise<string> => {
  await mkdir(IMAGE_DIR, { recursive: true });
  await mkdir(FONT_DIR, { recursive: true });

  const imageName = 'chapter-02.png';
  await download(page.image, path.join(IMAGE_DIR, imageName));

  const poppinsBase = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
  await Promise.all([
    download(`${poppinsBase}/Poppins-Regular.ttf`, path.join(FONT_DIR, 'Poppins-Regular.ttf')),
    download(`${poppinsBase}/Poppins-SemiBold.ttf`, path.join(FONT_DIR, 'Poppins-SemiBold.ttf')),
    download(`${poppinsBase}/Poppins-Bold.ttf`, path.join(FONT_DIR, 'Poppins-Bold.ttf')),
    copyFile(path.join(ROOT, 'public/Arakom-Regular.ttf'), path.join(FONT_DIR, 'Arakom-Regular.ttf')),
    copyFile(path.join(ROOT, 'public/Arakom-Bold.ttf'), path.join(FONT_DIR, 'Arakom-Bold.ttf')),
  ]);

  return `assets/images/${imageName}`;
};

const renderHtml = (language: Language, page: PageData, imagePath: string): string => {
  const isArabic = language === 'ar';
  const chapterLabel = isArabic ? 'الفصل 2' : 'CHAPTER 2';
  const preRead = isArabic
    ? 'انظر إلى الصورة. ما الذي تتوقع أن تتعلمه في هذا الفصل؟'
    : 'Look at the image. What do you think you will learn in this chapter?';

  return `<!doctype html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(page.title)} — A2 Golden Page</title>
  <link rel="stylesheet" href="a2-golden.css" />
</head>
<body class="lang-${language}">
  <article class="golden-chapter${isArabic ? ' golden-chapter-rtl' : ''}">
    <header class="chapter-header">
      <div class="chapter-heading-copy">
        <div class="chapter-eyebrow">${escapeHtml(chapterLabel)}</div>
        <h1>${escapeHtml(page.title)}</h1>
      </div>
      <div class="level-marker">A2</div>
    </header>

    <figure class="chapter-image">
      <img src="${escapeHtml(imagePath)}" alt="" />
      <figcaption>${escapeHtml(preRead)}</figcaption>
    </figure>

    <section class="story-text">
      ${paragraphize(page)}
    </section>

    ${renderWordNotes(page, language)}
    ${renderQuickChallenge(page, language)}
  </article>
</body>
</html>`;
};

const findChapter = (pages: PageData[]): PageData => {
  const page = pages.find((item) => item.id === CHAPTER_ID && item.type === 'story');
  if (!page) throw new Error(`Adam A2 chapter ${CHAPTER_ID} not found.`);
  return page;
};

const main = async (): Promise<void> => {
  await mkdir(OUTPUT, { recursive: true });
  const enPage = findChapter(adamA2Pages);
  const arPage = findChapter(adamA2PagesAr);
  const imagePath = await prepareAssets(enPage);

  await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-golden.css'), path.join(OUTPUT, 'a2-golden.css'));
  await writeFile(path.join(OUTPUT, 'adam-a2-en-golden.html'), renderHtml('en', enPage, imagePath));
  await writeFile(path.join(OUTPUT, 'adam-a2-ar-golden.html'), renderHtml('ar', arPage, imagePath));
  await writeFile(path.join(OUTPUT, 'README.txt'), [
    'A2 Golden Chapter Pilot',
    'Source: Adam A2 Chapter 2, English and Arabic canonical repository data.',
    'Target: exactly one A4 page per language at approved A2 readability sizes.',
    'No story, audio, synchronization, exercise, or vocabulary source content is modified.',
  ].join('\n'));
};

await main();
