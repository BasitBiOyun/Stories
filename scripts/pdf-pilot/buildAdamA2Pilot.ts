import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import type { Exercise, PageData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/pdf-pilot');
const ASSETS = path.join(OUTPUT, 'assets');
const IMAGE_DIR = path.join(ASSETS, 'images');
const FONT_DIR = path.join(ASSETS, 'fonts');
const SELECTED_CHAPTERS = [1, 5, 8] as const;

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const paragraphize = (content: string): string => content
  .split(/\n\s*\n/g)
  .map((paragraph) => `<p>${escapeHtml(paragraph.trim())}</p>`)
  .join('\n');

const normalizeOption = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object' && 'text' in value) return String((value as { text?: string }).text ?? '');
  return String(value ?? '');
};

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

const ensureAssets = async (pages: PageData[]): Promise<Map<number, string>> => {
  await mkdir(IMAGE_DIR, { recursive: true });
  await mkdir(FONT_DIR, { recursive: true });

  const imageMap = new Map<number, string>();
  for (const page of pages) {
    if (!SELECTED_CHAPTERS.includes(page.id as (typeof SELECTED_CHAPTERS)[number])) continue;
    const ext = page.image.toLowerCase().includes('.png') ? 'png' : 'jpg';
    const fileName = `chapter-${String(page.id).padStart(2, '0')}.${ext}`;
    const target = path.join(IMAGE_DIR, fileName);
    await download(page.image, target);
    imageMap.set(page.id, `assets/images/${fileName}`);
  }

  const poppinsBase = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
  await Promise.all([
    download(`${poppinsBase}/Poppins-Regular.ttf`, path.join(FONT_DIR, 'Poppins-Regular.ttf')),
    download(`${poppinsBase}/Poppins-SemiBold.ttf`, path.join(FONT_DIR, 'Poppins-SemiBold.ttf')),
    download(`${poppinsBase}/Poppins-Bold.ttf`, path.join(FONT_DIR, 'Poppins-Bold.ttf')),
    copyFile(path.join(ROOT, 'public/Arakom-Regular.ttf'), path.join(FONT_DIR, 'Arakom-Regular.ttf')),
    copyFile(path.join(ROOT, 'public/Arakom-Bold.ttf'), path.join(FONT_DIR, 'Arakom-Bold.ttf')),
  ]);

  return imageMap;
};

const renderTrueFalse = (exercise: Exercise, language: 'en' | 'ar'): string => {
  const labels = language === 'ar' ? ['صحيح', 'خطأ'] : ['TRUE', 'FALSE'];
  return `<div class="binary-options">
    ${labels.map((label) => `<div class="answer-choice"><span class="choice-box"></span>${escapeHtml(label)}</div>`).join('')}
  </div>`;
};

const renderMultipleChoice = (exercise: Exercise): string => {
  const options = (exercise.options ?? []).map(normalizeOption);
  return `<div class="mc-options">
    ${options.map((option, index) => `<div class="answer-choice"><span class="choice-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></div>`).join('')}
  </div>`;
};

const renderMatching = (exercise: Exercise, language: 'en' | 'ar'): string => {
  const groups = exercise.dragDropGroups ?? [];
  if (!groups.length) return '<div class="write-line"></div>';
  return `<div class="matching-grid">
    ${groups.map((group) => `<section class="match-group">
      <h4>${escapeHtml(group.group)}</h4>
      <div class="trait-bank">${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
      <div class="write-line"></div>
    </section>`).join('')}
  </div>
  <p class="print-note">${language === 'ar' ? 'اكتب أو صِل الكلمات بالمجموعة الصحيحة.' : 'Write or draw lines to match each quality with the correct person.'}</p>`;
};

const renderExerciseBody = (exercise: Exercise, language: 'en' | 'ar'): string => {
  switch (exercise.type) {
    case 'true-false': return renderTrueFalse(exercise, language);
    case 'multiple-choice': return renderMultipleChoice(exercise);
    case 'drag-drop':
    case 'matching': return renderMatching(exercise, language);
    default: return '<div class="write-lines"><span></span><span></span></div>';
  }
};

const renderQuickChallenge = (page: PageData, language: 'en' | 'ar'): string => {
  const exercise = page.exercises?.[0];
  if (!exercise) return '';
  const heading = language === 'ar' ? 'تحدٍّ سريع' : 'Quick Challenge';
  const instruction = exercise.instructions || (language === 'ar' ? 'أجب عن السؤال.' : 'Answer the question.');
  return `<aside class="quick-challenge" aria-label="${escapeHtml(heading)}">
    <div class="challenge-label"><span class="challenge-icon">✓</span><span>${escapeHtml(heading)}</span></div>
    <div class="challenge-copy">
      <h3>${escapeHtml(exercise.title || heading)}</h3>
      <p class="instructions">${escapeHtml(instruction)}</p>
      <p class="question">${escapeHtml(exercise.question || exercise.fillBlanksText || '')}</p>
      ${renderExerciseBody(exercise, language)}
    </div>
  </aside>`;
};

const chapterLengthClass = (page: PageData): string => {
  const chars = page.content.replace(/\s+/g, ' ').length;
  if (chars > 1050) return 'chapter-page dense';
  if (chars > 760) return 'chapter-page compact';
  return 'chapter-page';
};

const renderChapter = (
  page: PageData,
  imagePath: string,
  language: 'en' | 'ar',
  sequence: number,
): string => {
  const chapterLabel = language === 'ar' ? `الفصل ${sequence}` : `CHAPTER ${sequence}`;
  const quick = renderQuickChallenge(page, language);
  return `<article class="${chapterLengthClass(page)}${language === 'ar' ? ' rtl-chapter' : ''}" data-chapter="${page.id}">
    <header class="chapter-heading">
      <div>
        <p class="eyebrow">${escapeHtml(chapterLabel)}</p>
        <h2>${escapeHtml(page.title)}</h2>
      </div>
      <span class="level-badge">A2</span>
    </header>
    <figure class="chapter-visual">
      <img src="${escapeHtml(imagePath)}" alt="" />
      <figcaption>${language === 'ar' ? 'انظر إلى الصورة وتوقّع موضوع الفصل قبل القراءة.' : 'Look at the image. What do you think this chapter is about?'}</figcaption>
    </figure>
    <section class="chapter-text">${paragraphize(page.content)}</section>
    ${quick}
  </article>`;
};

const renderCover = (language: 'en' | 'ar', coverImage: string): string => {
  const isArabic = language === 'ar';
  const title = isArabic ? 'قصة النبي آدم' : 'The Story of Prophet Adam';
  const collection = isArabic ? 'قصص الأنبياء' : 'STORIES OF THE PROPHETS';
  const subtitle = isArabic ? 'قارئ متدرّج للقراءة والتفكير والتعلّم' : 'A GRADED READER FOR READING, THINKING AND LEARNING';
  const feature = isArabic ? 'اقرأ • استمع • فكّر • تدرّب' : 'READ • LISTEN • THINK • PRACTICE';
  return `<section class="cover-page">
    <div class="cover-pattern" aria-hidden="true"></div>
    <div class="cover-topline">${escapeHtml(collection)}</div>
    <div class="cover-art"><img src="${escapeHtml(coverImage)}" alt="" /></div>
    <div class="cover-copy">
      <span class="cover-level">A2</span>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(subtitle)}</p>
    </div>
    <div class="cover-feature">${escapeHtml(feature)}</div>
  </section>`;
};

const renderHtml = (
  language: 'en' | 'ar',
  pages: PageData[],
  imageMap: Map<number, string>,
): string => {
  const selected = SELECTED_CHAPTERS.map((id) => pages.find((page) => page.id === id && page.type === 'story'))
    .filter((page): page is PageData => Boolean(page));
  if (selected.length !== SELECTED_CHAPTERS.length) {
    throw new Error(`Missing selected ${language} chapter pages.`);
  }
  const title = language === 'ar' ? 'قصة النبي آدم - نموذج PDF' : 'The Story of Prophet Adam - PDF Pilot';
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const coverImage = imageMap.get(selected[0].id);
  if (!coverImage) throw new Error('Cover image is unavailable.');

  return `<!doctype html>
<html lang="${language}" dir="${dir}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <link rel="stylesheet" href="pilot.css" />
</head>
<body class="lang-${language}">
  ${renderCover(language, coverImage)}
  ${selected.map((page, index) => {
    const imagePath = imageMap.get(page.id);
    if (!imagePath) throw new Error(`Image unavailable for chapter ${page.id}`);
    return renderChapter(page, imagePath, language, index + 1);
  }).join('\n')}
</body>
</html>`;
};

const main = async (): Promise<void> => {
  await mkdir(OUTPUT, { recursive: true });
  const allSelected = adamA2Pages.filter((page) => SELECTED_CHAPTERS.includes(page.id as (typeof SELECTED_CHAPTERS)[number]));
  const imageMap = await ensureAssets(allSelected);
  await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'pilot.css'), path.join(OUTPUT, 'pilot.css'));
  await writeFile(path.join(OUTPUT, 'adam-a2-en-pilot.html'), renderHtml('en', adamA2Pages, imageMap));
  await writeFile(path.join(OUTPUT, 'adam-a2-ar-pilot.html'), renderHtml('ar', adamA2PagesAr, imageMap));
  await writeFile(path.join(OUTPUT, 'README.txt'), [
    'Adam A2 Vivliostyle pilot',
    'Pages: cover + chapters 1, 5 and 8',
    'Canonical story text and existing chapter exercise data are read directly from the repository.',
    'The pilot changes presentation only.',
  ].join('\n'));
  console.log(`Pilot HTML written to ${OUTPUT}`);
};

await main();
