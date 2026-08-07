import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn } from '../../src/data/adam/a2';
import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import type { PageData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-glossary');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');

type Language = 'en' | 'ar';

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const glossaryPages = (pages: PageData[]): PageData[] => {
  const result = [14, 15].map((id) => pages.find((page) => page.id === id && page.type === 'glossary'));
  if (result.some((page) => !page)) throw new Error('Adam A2 glossary pages 14-15 not found.');
  return result as PageData[];
};

const renderGlossaryPage = (page: PageData, language: Language, index: number): string => {
  const isArabic = language === 'ar';
  const words = page.vocabulary ?? [];
  const partLabel = isArabic ? `الجزء ${index === 0 ? 'الأول' : 'الثاني'}` : `PART ${index + 1}`;
  const tip = isArabic
    ? 'استخدم هذه الصفحة للمراجعة السريعة. غطِّ المعنى وحاول تذكّره بنفسك.'
    : 'Use this page for quick review. Cover the meaning and try to remember it yourself.';

  return `<article class="glossary-page${isArabic ? ' glossary-rtl' : ''}">
    <header class="glossary-header">
      <div>
        <div class="glossary-eyebrow">${escapeHtml(isArabic ? 'مراجعة المفردات' : 'VOCABULARY REFERENCE')} • ${escapeHtml(partLabel)}</div>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.content)}</p>
      </div>
      <div class="level-marker">A2</div>
    </header>

    <aside class="glossary-tip">${escapeHtml(tip)}</aside>

    <section class="glossary-grid">
      ${words.map((entry, wordIndex) => `<div class="glossary-entry">
        <span class="entry-number">${isArabic ? ['١','٢','٣','٤','٥','٦','٧','٨','٩','١٠','١١','١٢'][wordIndex] : wordIndex + 1}</span>
        <div><strong>${escapeHtml(entry.word)}</strong><p>${escapeHtml(entry.definition)}</p></div>
      </div>`).join('\n')}
    </section>

    <footer class="glossary-memory">
      <strong>${escapeHtml(isArabic ? 'ثلاث كلمات أريد مراجعتها مرة أخرى:' : 'Three words I want to review again:')}</strong>
      <span></span><span></span><span></span>
    </footer>
  </article>`;
};

const renderDocument = (pages: PageData[], language: Language): string => {
  const selected = glossaryPages(pages);
  const isArabic = language === 'ar';
  return `<!doctype html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head><meta charset="utf-8" /><title>Adam A2 Master Glossary</title><link rel="stylesheet" href="a2-glossary.css" /></head>
<body class="lang-${language}">
${selected.map((page, index) => renderGlossaryPage(page, language, index)).join('\n')}
</body></html>`;
};

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

await mkdir(FONT_DIR, { recursive: true });
const poppins = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
await Promise.all([
  download(`${poppins}/Poppins-Regular.ttf`, path.join(FONT_DIR, 'Poppins-Regular.ttf')),
  download(`${poppins}/Poppins-SemiBold.ttf`, path.join(FONT_DIR, 'Poppins-SemiBold.ttf')),
  download(`${poppins}/Poppins-Bold.ttf`, path.join(FONT_DIR, 'Poppins-Bold.ttf')),
  copyFile(path.join(ROOT, 'public/Arakom-Regular.ttf'), path.join(FONT_DIR, 'Arakom-Regular.ttf')),
  copyFile(path.join(ROOT, 'public/Arakom-Bold.ttf'), path.join(FONT_DIR, 'Arakom-Bold.ttf')),
]);

await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-glossary.css'), path.join(OUTPUT, 'a2-glossary.css'));
await writeFile(path.join(OUTPUT, 'adam-a2-en-glossary.html'), renderDocument(adamA2BookDataEn.pages, 'en'));
await writeFile(path.join(OUTPUT, 'adam-a2-ar-glossary.html'), renderDocument(adamA2PagesAr, 'ar'));
await writeFile(path.join(OUTPUT, 'README.txt'), [
  'Adam A2 Master Glossary print pilot: source pages 14 and 15.',
  'English uses the finalized learning BookData, including the reviewed A2 vocabulary and complete late-chapter coverage.',
  'Arabic continues to use its own canonical source data pending Phase 3.',
  'The PDF changes presentation only.',
].join('\n'));