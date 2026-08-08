import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { BookData, Exercise, PageData } from '../../src/types';
import { adamB2BookDataEn, adamB2BookDataAr } from '../../src/data/adam/b2';
import { abrahamB2BookDataEn, abrahamB2BookDataAr } from '../../src/data/abraham/b2';
import { mosesB2BookDataEn, mosesB2BookDataAr } from '../../src/data/moses/b2';
import { meccaB2BookDataEn, meccaB2BookDataAr } from '../../src/data/mecca/b2';
import { yunusEmreB2BookDataEn, yunusEmreB2BookDataAr } from '../../src/data/yunusEmre/b2';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));

type Language = 'en' | 'ar';
type BookKey = 'adam' | 'abraham' | 'moses' | 'mecca' | 'yunus';
type Note = { word: string; definition: string };
type BookConfig = {
  slug: string;
  pair: Record<Language, BookData>;
  collection: Record<Language, string>;
  runningBook: Record<Language, string>;
};

const BOOKS: Record<BookKey, BookConfig> = {
  adam: {
    slug: 'adam-b2', pair: { en: adamB2BookDataEn, ar: adamB2BookDataAr },
    collection: { en: 'STORIES OF THE PROPHETS', ar: 'قصص الأنبياء' }, runningBook: { en: 'ADAM • B2', ar: 'آدم • B2' },
  },
  abraham: {
    slug: 'abraham-b2', pair: { en: abrahamB2BookDataEn, ar: abrahamB2BookDataAr },
    collection: { en: 'STORIES OF THE PROPHETS', ar: 'قصص الأنبياء' }, runningBook: { en: 'ABRAHAM • B2', ar: 'إبراهيم • B2' },
  },
  moses: {
    slug: 'moses-b2', pair: { en: mosesB2BookDataEn, ar: mosesB2BookDataAr },
    collection: { en: 'STORIES OF THE PROPHETS', ar: 'قصص الأنبياء' }, runningBook: { en: 'MOSES • B2', ar: 'موسى • B2' },
  },
  mecca: {
    slug: 'mecca-b2', pair: { en: meccaB2BookDataEn, ar: meccaB2BookDataAr },
    collection: { en: 'ISLAMIC HISTORY & CIVILIZATION', ar: 'التاريخ والحضارة الإسلامية' }, runningBook: { en: 'MECCA • B2', ar: 'مكة • B2' },
  },
  yunus: {
    slug: 'yunus-emre-b2', pair: { en: yunusEmreB2BookDataEn, ar: yunusEmreB2BookDataAr },
    collection: { en: 'TURKISH-ISLAMIC HERITAGE', ar: 'التراث التركي الإسلامي' }, runningBook: { en: 'YUNUS EMRE • B2', ar: 'يونس إمره • B2' },
  },
};

const requestedBook = (process.env.B2_BOOK || 'moses').trim().toLowerCase() as BookKey;
if (!(requestedBook in BOOKS)) throw new Error(`B2_BOOK must be one of: ${Object.keys(BOOKS).join(', ')}`);
const config = BOOKS[requestedBook];

const languageSetting = (process.env.B2_LANGUAGE || 'both').trim().toLowerCase();
if (!['en', 'ar', 'both'].includes(languageSetting)) throw new Error('B2_LANGUAGE must be en, ar, or both.');
const languages: Language[] = languageSetting === 'both' ? ['en', 'ar'] : [languageSetting as Language];

const OUTPUT_RELATIVE = process.env.B2_OUTPUT_DIR?.trim() || `artifacts/b2-print-sample/${config.slug}`;
const OUTPUT = path.resolve(ROOT, OUTPUT_RELATIVE);
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');
const RENDER_DIR = path.join(OUTPUT, 'rendered');

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const storyPages = (book: BookData): PageData[] => book.pages.filter((page) => page.type === 'story' && page.id <= 100)
  .filter((page) => !/references|المراجع/i.test(page.title));

const parseChapterIds = (book: BookData): number[] => {
  const available = storyPages(book).map((page) => page.id);
  const raw = (process.env.B2_CHAPTER_IDS || 'all').trim().toLowerCase();
  if (raw === 'all') return available;
  const requested = raw.split(',').map((value) => Number.parseInt(value.trim(), 10)).filter((value) => Number.isInteger(value) && value > 0);
  if (!requested.length) throw new Error('B2_CHAPTER_IDS must be all or a comma-separated list of chapter ids.');
  const missing = requested.filter((id) => !available.includes(id));
  if (missing.length) throw new Error(`Unknown B2 chapter id(s): ${missing.join(', ')}`);
  return requested;
};

const chapterNotes = (page: PageData): Note[] => {
  const seen = new Set<string>();
  const notes: Note[] = [];
  for (const entry of page.vocabulary ?? []) {
    const key = entry.word.toLocaleLowerCase();
    if (!entry.word.trim() || !entry.definition.trim() || seen.has(key)) continue;
    seen.add(key);
    notes.push({ word: entry.word, definition: entry.definition });
  }
  return notes.slice(0, 7);
};

const highlightParagraph = (text: string, notes: Note[], matched: Set<string>): string => {
  const patterns = notes.map((note) => note.word).filter(Boolean).sort((a, b) => b.length - a.length);
  if (!patterns.length) return escapeHtml(text);
  const regex = new RegExp(patterns.map(escapeRegExp).join('|'), 'giu');
  let cursor = 0;
  let output = '';
  for (const match of text.matchAll(regex)) {
    const index = match.index ?? 0;
    const raw = match[0];
    output += escapeHtml(text.slice(cursor, index));
    const key = notes.find((note) => note.word.localeCompare(raw, undefined, { sensitivity: 'base' }) === 0)?.word.toLocaleLowerCase();
    if (key && !matched.has(key)) {
      matched.add(key);
      output += `<span class="vocab-highlight">${escapeHtml(raw)}</span>`;
    } else output += escapeHtml(raw);
    cursor = index + raw.length;
  }
  output += escapeHtml(text.slice(cursor));
  return output;
};

const highlightStory = (page: PageData, notes: Note[]): { html: string; used: Note[] } => {
  const matched = new Set<string>();
  const parts = page.content.split(/(\[POEM\][\s\S]*?\[\/POEM\])/g).filter(Boolean);
  const html = parts.map((part) => {
    const poem = part.match(/^\[POEM\]([\s\S]*?)\[\/POEM\]$/);
    if (poem) return `<div class="poem-block">${poem[1].trim().split(/\n/).map((line) => highlightParagraph(line, notes, matched)).join('<br />')}</div>`;
    return part.split(/\n\s*\n/g).filter((paragraph) => paragraph.trim()).map((paragraph) => `<p>${highlightParagraph(paragraph.trim(), notes, matched)}</p>`).join('\n');
  }).join('\n');
  return { html, used: notes.filter((note) => matched.has(note.word.toLocaleLowerCase())) };
};

const exerciseBody = (exercise: Exercise, language: Language): string => {
  if (exercise.type === 'true-false') {
    const labels = language === 'ar' ? ['صحيح', 'خطأ'] : ['TRUE', 'FALSE'];
    return `<div class="answer-row">${labels.map((label) => `<span class="print-option"><i></i>${escapeHtml(label)}</span>`).join('')}</div>`;
  }
  if (exercise.type === 'multiple-choice') {
    return `<div class="answer-row answer-row-mc">${(exercise.options ?? []).map((option, index) => `<span class="print-option"><i></i><b>${String.fromCharCode(65 + index)}</b>${escapeHtml(option)}</span>`).join('')}</div>`;
  }
  return '<div class="writing-line"></div><div class="writing-line"></div>';
};

const wordNotes = (notes: Note[], language: Language): string => {
  if (!notes.length) return '';
  const label = language === 'ar' ? 'كلمات مهمة' : 'Word Notes';
  const densityClass = notes.length >= 5 ? ' word-notes-dense' : '';
  return `<section class="word-notes${densityClass}"><div class="section-label word-notes-label">${escapeHtml(label)}</div><div class="word-notes-list">${notes.map((note) => `<div class="word-note"><strong>${escapeHtml(note.word)}</strong><span>${escapeHtml(note.definition)}</span></div>`).join('')}</div></section>`;
};

const quickChallenge = (page: PageData, language: Language): string => {
  const exercise = page.exercises?.[0];
  if (!exercise) return '';
  const label = language === 'ar' ? 'تحدٍّ سريع' : 'Quick Challenge';
  return `<aside class="quick-challenge"><div class="section-label quick-label">${escapeHtml(label)}</div><div class="quick-content"><h3>${escapeHtml(exercise.title || label)}</h3><p class="quick-instruction">${escapeHtml(exercise.instructions || '')}</p><p class="quick-question">${escapeHtml(exercise.question || '')}</p>${exerciseBody(exercise, language)}</div></aside>`;
};

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

const prepareFonts = async (): Promise<void> => {
  await mkdir(FONT_DIR, { recursive: true });
  const poppins = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
  await Promise.all([
    download(`${poppins}/Poppins-Regular.ttf`, path.join(FONT_DIR, 'Poppins-Regular.ttf')),
    download(`${poppins}/Poppins-SemiBold.ttf`, path.join(FONT_DIR, 'Poppins-SemiBold.ttf')),
    download(`${poppins}/Poppins-Bold.ttf`, path.join(FONT_DIR, 'Poppins-Bold.ttf')),
    copyFile(path.join(ROOT, 'public/Arakom-Regular.ttf'), path.join(FONT_DIR, 'Arakom-Regular.ttf')),
    copyFile(path.join(ROOT, 'public/Arakom-Bold.ttf'), path.join(FONT_DIR, 'Arakom-Bold.ttf')),
  ]);
};

const prepareImages = async (book: BookData, ids: number[], language: Language): Promise<Map<number, string>> => {
  const dir = path.join(OUTPUT, `assets/${language}/images`);
  await mkdir(dir, { recursive: true });
  const map = new Map<number, string>();
  for (const id of ids) {
    const page = book.pages.find((item) => item.id === id && item.type === 'story');
    if (!page?.image) throw new Error(`${config.slug} ${language}: missing chapter ${id} image.`);
    const name = `chapter-${String(id).padStart(2, '0')}.png`;
    await download(page.image, path.join(dir, name));
    map.set(id, `assets/${language}/images/${name}`);
  }
  return map;
};

const chapterHtml = (page: PageData, language: Language, imagePath: string): string => {
  const highlighted = highlightStory(page, chapterNotes(page));
  const chapterLabel = language === 'ar' ? `الفصل ${page.id}` : `CHAPTER ${page.id}`;
  const side = page.id % 2 === 1 ? 'image-start' : 'image-end';
  return `<article class="golden-chapter${language === 'ar' ? ' golden-chapter-rtl' : ''}" data-chapter="${page.id}"><header class="chapter-header"><div><div class="chapter-eyebrow">${escapeHtml(chapterLabel)}</div><h1>${escapeHtml(page.title)}</h1></div><div class="level-marker">B2</div></header><section class="story-text"><figure class="chapter-image ${side}"><img src="${escapeHtml(imagePath)}" alt="" /></figure>${highlighted.html}</section>${wordNotes(highlighted.used, language)}${quickChallenge(page, language)}</article>`;
};

const documentHtml = (book: BookData, ids: number[], language: Language, imageMap: Map<number, string>): string => {
  const selected = ids.map((id) => {
    const page = book.pages.find((candidate) => candidate.id === id && candidate.type === 'story');
    if (!page) throw new Error(`${config.slug} ${language}: chapter ${id} not found.`);
    return page;
  });
  return `<!doctype html><html lang="${language}" dir="${language === 'ar' ? 'rtl' : 'ltr'}"><head><meta charset="utf-8" /><title>${escapeHtml(config.runningBook[language])} Print Sample</title><link rel="stylesheet" href="b2-sample.css" /></head><body class="lang-${language}"><div class="running-meta"><span class="running-collection">${escapeHtml(config.collection[language])}</span><span class="running-book">${escapeHtml(config.runningBook[language])}</span></div>${selected.map((page) => chapterHtml(page, language, imageMap.get(page.id)!)).join('\n')}</body></html>`;
};

const run = (command: string, args: string[]): void => {
  const result = spawnSync(command, args, { cwd: ROOT, stdio: 'inherit', shell: false });
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed with status ${result.status}`);
};

await rm(OUTPUT, { recursive: true, force: true });
await mkdir(OUTPUT, { recursive: true });
await mkdir(RENDER_DIR, { recursive: true });
await prepareFonts();
await copyFile(path.join(SCRIPT_DIR, 'b2-sample.css'), path.join(OUTPUT, 'b2-sample.css'));

for (const language of languages) {
  const book = config.pair[language];
  const ids = parseChapterIds(book);
  const images = await prepareImages(book, ids, language);
  const htmlPath = path.join(OUTPUT, `${config.slug}-${language}.html`);
  const pdfPath = path.join(OUTPUT, `${config.slug}-${language}.pdf`);
  const renderPath = path.join(RENDER_DIR, language);
  await mkdir(renderPath, { recursive: true });
  await writeFile(htmlPath, documentHtml(book, ids, language, images));
  run('npx', ['--yes', '@vivliostyle/cli@11.1.0', 'build', htmlPath, '--size', 'A4', '--output', pdfPath]);
  run('pdftoppm', ['-png', '-r', '160', pdfPath, path.join(renderPath, 'page')]);
}

await writeFile(path.join(OUTPUT, 'README.txt'), [
  `B2 Gold print stress test: ${config.slug}`,
  `Languages: ${languages.join(', ')}`,
  `Chapter selection: ${process.env.B2_CHAPTER_IDS || 'all'}`,
  '',
  'Renderer: @vivliostyle/cli@11.1.0',
  'Geometry inherits the A2/B1 Gold system: A4, 14 mm side/top margins, 15 mm bottom, 64 x 80 mm 4:5 image.',
  'English story body remains 12.7 pt; Arabic remains 14 pt. Never shrink below the approved readability floor to force one page.',
  'Long B2 chapters may and should continue onto a second A4 page.',
  'Word Notes are rendered only for vocabulary entries actually matched in the story prose.',
  'Only the currently visible page.exercises[0] Quick Challenge is rendered, matching StoryPage runtime behavior.',
  'Correct answers and feedback are not printed in the learner-facing chapter sample.',
  'Rendered PNGs are written under rendered/en and rendered/ar for visual QA.',
].join('\n'));

console.log(`B2 chapter PDF sample built: ${path.relative(ROOT, OUTPUT)}`);
