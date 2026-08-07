import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import type { PageData } from '../../src/types';

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

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

const renderDocument = (page: PageData, language: Language, imagePath: string): string => {
  const isArabic = language === 'ar';
  const eyebrow = isArabic ? 'نهاية الرحلة' : 'END-OF-STORY CHALLENGE';
  const nameLabel = isArabic ? 'الاسم' : 'Name';
  const dateLabel = isArabic ? 'التاريخ' : 'Date';

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

    <figure class="challenge-image"><img src="${escapeHtml(imagePath)}" alt="" /></figure>

    <section class="student-fields">
      <div><strong>${escapeHtml(nameLabel)}</strong><span></span></div>
      <div><strong>${escapeHtml(dateLabel)}</strong><span></span></div>
    </section>

    <div class="level-mark">A2</div>
  </article>
</body>
</html>`;
};

await mkdir(FONT_DIR, { recursive: true });
await mkdir(IMAGE_DIR, { recursive: true });
const finalEn = findFinal(adamA2Pages);
const finalAr = findFinal(adamA2PagesAr);
if (!finalEn.image) throw new Error('Final Challenge image reference is missing.');
const imagePath = 'assets/images/final-challenge.png';
await download(finalEn.image, path.join(OUTPUT, imagePath));

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
await writeFile(path.join(OUTPUT, 'README.txt'), [
  'Adam A2 Final Challenge section-opener print pilot.',
  'The current page 16 source contains title, intro text, and image but no question array.',
  'No production questions are invented by the PDF layer.',
  'When approved Final Challenge questions are added to canonical derived-learning data, question pages can follow this opener automatically.',
].join('\n'));
