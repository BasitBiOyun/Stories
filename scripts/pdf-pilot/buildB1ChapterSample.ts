import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { BookData, Exercise, PageData } from '../../src/types';
import { fallbackDefinitions, arabicAnimatedDefinitions } from '../../src/data/fallbackVocab';
import { adamB1BookDataEn, adamB1BookDataAr } from '../../src/data/adam/b1';
import { abrahamB1BookDataEn, abrahamB1BookDataAr } from '../../src/data/abraham/b1';
import { mosesB1BookDataEn, mosesB1BookDataAr } from '../../src/data/moses/b1';
import { meccaB1BookDataEn, meccaB1BookDataAr } from '../../src/data/mecca/b1';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from '../../src/data/yunusEmre/b1';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));

type Language = 'en' | 'ar';
type BookKey = 'adam' | 'abraham' | 'moses' | 'mecca' | 'yunus';
type Note = { key: string; declared: string; display: string; definition: string };

type BookConfig = {
  slug: string;
  pair: Record<Language, BookData>;
  collection: Record<Language, string>;
  runningBook: Record<Language, string>;
};

const BOOKS: Record<BookKey, BookConfig> = {
  adam: {
    slug: 'adam-b1',
    pair: { en: adamB1BookDataEn, ar: adamB1BookDataAr },
    collection: { en: 'STORIES OF THE PROPHETS', ar: 'قصص الأنبياء' },
    runningBook: { en: 'ADAM • B1', ar: 'آدم • B1' },
  },
  abraham: {
    slug: 'abraham-b1',
    pair: { en: abrahamB1BookDataEn, ar: abrahamB1BookDataAr },
    collection: { en: 'STORIES OF THE PROPHETS', ar: 'قصص الأنبياء' },
    runningBook: { en: 'ABRAHAM • B1', ar: 'إبراهيم • B1' },
  },
  moses: {
    slug: 'moses-b1',
    pair: { en: mosesB1BookDataEn, ar: mosesB1BookDataAr },
    collection: { en: 'STORIES OF THE PROPHETS', ar: 'قصص الأنبياء' },
    runningBook: { en: 'MOSES • B1', ar: 'موسى • B1' },
  },
  mecca: {
    slug: 'mecca-b1',
    pair: { en: meccaB1BookDataEn, ar: meccaB1BookDataAr },
    collection: { en: 'ISLAMIC HISTORY & CIVILIZATION', ar: 'التاريخ والحضارة الإسلامية' },
    runningBook: { en: 'MECCA • B1', ar: 'مكة • B1' },
  },
  yunus: {
    slug: 'yunus-emre-b1',
    pair: { en: yunusEmreB1BookDataEn, ar: yunusEmreB1BookDataAr },
    collection: { en: 'TURKISH-ISLAMIC HERITAGE', ar: 'التراث التركي الإسلامي' },
    runningBook: { en: 'YUNUS EMRE • B1', ar: 'يونس إمره • B1' },
  },
};

const requestedBook = (process.env.B1_BOOK || 'moses').trim().toLowerCase() as BookKey;
if (!(requestedBook in BOOKS)) {
  throw new Error(`B1_BOOK must be one of: ${Object.keys(BOOKS).join(', ')}`);
}
const config = BOOKS[requestedBook];

const languageSetting = (process.env.B1_LANGUAGE || 'both').trim().toLowerCase();
if (!['en', 'ar', 'both'].includes(languageSetting)) {
  throw new Error('B1_LANGUAGE must be en, ar, or both.');
}
const languages: Language[] = languageSetting === 'both' ? ['en', 'ar'] : [languageSetting as Language];

const OUTPUT_RELATIVE = process.env.B1_OUTPUT_DIR?.trim() || `artifacts/b1-print-sample/${config.slug}`;
const OUTPUT = path.resolve(ROOT, OUTPUT_RELATIVE);
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');
const RENDER_DIR = path.join(OUTPUT, 'rendered');

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const clean = (value: string): string => value
  .replace(/[.,!?;:\"'“”‘’`()]/g, '')
  .toLowerCase()
  .trim();

const normalizeArabic = (value: string): string => value
  .replace(/[\u064B-\u0652]/g, '')
  .replace(/[أإآ]/g, 'ا')
  .replace(/ة/g, 'ه')
  .replace(/ى/g, 'ي');

const keyOf = (value: string, language: Language): string => {
  const cleaned = clean(value);
  return language === 'ar' ? normalizeArabic(cleaned) : cleaned;
};

const englishForms = (value: string): string[] => {
  const base = clean(value);
  if (!base || base.includes(' ')) return [base];
  const forms = new Set([base, `${base}s`, `${base}es`]);
  if (base.endsWith('y')) forms.add(`${base.slice(0, -1)}ies`);
  return [...forms].filter(Boolean);
};

const storyPages = (book: BookData): PageData[] => book.pages.filter((page) => page.type === 'story');

const parseChapterIds = (book: BookData): number[] => {
  const available = storyPages(book).map((page) => page.id);
  const raw = (process.env.B1_CHAPTER_IDS || 'all').trim().toLowerCase();
  if (raw === 'all') return available;
  const requested = raw
    .split(',')
    .map((value) => Number.parseInt(value.trim(), 10))
    .filter((value) => Number.isInteger(value) && value > 0);
  if (!requested.length) throw new Error('B1_CHAPTER_IDS must be all or a comma-separated list of chapter ids.');
  const missing = requested.filter((id) => !available.includes(id));
  if (missing.length) throw new Error(`Unknown B1 chapter id(s): ${missing.join(', ')}`);
  return requested;
};

const makeBookDefinitionMap = (pages: PageData[], language: Language): Map<string, string> => {
  const map = new Map<string, string>();
  pages.forEach((page) => page.vocabulary?.forEach((entry) => {
    const key = keyOf(entry.word, language);
    if (key && !map.has(key)) map.set(key, entry.definition);
  }));
  return map;
};

const makeFallbackMap = (language: Language): Map<string, string> => {
  const source = language === 'ar' ? arabicAnimatedDefinitions : fallbackDefinitions;
  return new Map(Object.entries(source).map(([word, definition]) => [keyOf(word, language), String(definition)]));
};

const chapterNotes = (
  page: PageData,
  previousPages: PageData[],
  allPages: PageData[],
  language: Language,
): Note[] => {
  const seen = new Set<string>();
  previousPages.forEach((previous) => {
    previous.vocabulary?.forEach((entry) => seen.add(keyOf(entry.word, language)));
    previous.animatedWords?.forEach((word) => seen.add(keyOf(word, language)));
  });

  const bookDefinitions = makeBookDefinitionMap(allPages, language);
  const fallback = makeFallbackMap(language);
  const current = new Map((page.vocabulary ?? []).map((entry) => [keyOf(entry.word, language), entry.definition]));
  const notes = new Map<string, Note>();
  const declared = [
    ...(page.vocabulary ?? []).map((entry) => entry.word),
    ...(page.animatedWords ?? []),
  ];

  declared.forEach((word) => {
    const key = keyOf(word, language);
    if (!key || seen.has(key) || notes.has(key)) return;
    const definition = current.get(key)
      ?? bookDefinitions.get(key)
      ?? fallback.get(key)
      ?? (language === 'ar' ? 'كلمة مهمة في هذا الفصل.' : 'A key word in this chapter.');
    notes.set(key, { key, declared: word, display: word, definition });
  });
  return [...notes.values()];
};

const highlightSegment = (
  text: string,
  notes: Note[],
  language: Language,
  matched: Set<string>,
): string => {
  const variantToNote = new Map<string, Note>();
  const rawPatterns: string[] = [];
  notes.forEach((note) => {
    if (language === 'ar') {
      const raw = clean(note.declared);
      rawPatterns.push(raw);
      variantToNote.set(keyOf(raw, language), note);
    } else {
      englishForms(note.declared).forEach((form) => {
        rawPatterns.push(form);
        variantToNote.set(form, note);
      });
    }
  });
  const patterns = [...new Set(rawPatterns)].filter(Boolean).sort((a, b) => b.length - a.length);
  if (!patterns.length) return escapeHtml(text);
  const regex = language === 'en'
    ? new RegExp(`\\b(?:${patterns.map(escapeRegExp).join('|')})\\b`, 'giu')
    : new RegExp(`(?:${patterns.map(escapeRegExp).join('|')})`, 'gu');

  let cursor = 0;
  let output = '';
  regex.lastIndex = 0;
  for (const match of text.matchAll(regex)) {
    const raw = match[0];
    const index = match.index ?? 0;
    const noteKey = language === 'ar' ? keyOf(raw, language) : clean(raw);
    const note = variantToNote.get(noteKey);
    output += escapeHtml(text.slice(cursor, index));
    if (note && !matched.has(note.key)) {
      matched.add(note.key);
      note.display = raw;
      output += `<span class="vocab-highlight">${escapeHtml(raw)}</span>`;
    } else {
      output += escapeHtml(raw);
    }
    cursor = index + raw.length;
  }
  output += escapeHtml(text.slice(cursor));
  return output;
};

const highlightStory = (page: PageData, notes: Note[], language: Language): { html: string; notes: Note[] } => {
  const matched = new Set<string>();
  const parts = page.content.split(/(\[POEM\][\s\S]*?\[\/POEM\])/g).filter(Boolean);
  const html = parts.map((part) => {
    const poem = part.match(/^\[POEM\]([\s\S]*?)\[\/POEM\]$/);
    if (poem) {
      const lines = poem[1].trim().split(/\n/).map((line) => highlightSegment(line, notes, language, matched));
      return `<div class="poem-block">${lines.join('<br />')}</div>`;
    }
    return part
      .split(/\n\s*\n/g)
      .filter((paragraph) => paragraph.trim())
      .map((paragraph) => `<p>${highlightSegment(paragraph.trim(), notes, language, matched)}</p>`)
      .join('\n');
  }).join('\n');
  return { html, notes: notes.filter((note) => matched.has(note.key)) };
};

const normalizeOption = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object' && 'text' in value) return String((value as { text?: string }).text ?? '');
  return String(value ?? '');
};

const exerciseBody = (exercise: Exercise, language: Language): string => {
  if (exercise.type === 'true-false') {
    const labels = language === 'ar' ? ['صحيح', 'خطأ'] : ['TRUE', 'FALSE'];
    return `<div class="answer-row">${labels.map((label) => `<span class="print-option"><i></i>${escapeHtml(label)}</span>`).join('')}</div>`;
  }
  if (exercise.type === 'multiple-choice') {
    return `<div class="answer-row answer-row-mc">${(exercise.options ?? []).map((option, index) => `<span class="print-option"><i></i><b>${String.fromCharCode(65 + index)}</b>${escapeHtml(normalizeOption(option))}</span>`).join('')}</div>`;
  }
  if (exercise.type === 'fill-blanks') {
    return `<div class="fill-text">${escapeHtml(exercise.fillBlanksText || exercise.question || '')}</div><div class="writing-line"></div>`;
  }
  if (exercise.type === 'tap-reveal' || exercise.type === 'reflection') {
    const label = language === 'ar' ? 'اكتب إجابتك:' : 'Write your answer:';
    return `<div class="tap-reveal-print"><span>${escapeHtml(label)}</span><div class="writing-line"></div><div class="writing-line"></div></div>`;
  }
  if (exercise.type === 'sequencing') {
    const items = exercise.sequencingItems ?? [];
    const bank = [...items].reverse();
    const label = language === 'ar' ? 'رتّب الأحداث' : 'Put the events in order';
    return `<div class="sequence-print"><div class="sequence-print-label">${escapeHtml(label)}</div><div class="sequence-print-bank">${bank.map((item, index) => `<div><b>${String.fromCharCode(65 + index)}</b><span>${escapeHtml(item.text)}</span></div>`).join('')}</div><div class="sequence-print-answer">${items.map((_, index) => `<span><b>${index + 1}</b><i></i></span>`).join('')}</div></div>`;
  }
  if (exercise.type === 'matching' && exercise.matchingPairs?.length) {
    const pairs = exercise.matchingPairs;
    const bankLabel = language === 'ar' ? 'المعاني' : 'Answer bank';
    return `<div class="matching-print"><div class="matching-bank"><strong>${escapeHtml(bankLabel)}:</strong>${[...pairs].reverse().map((pair, index) => `<span><b>${String.fromCharCode(65 + index)}</b>${escapeHtml(pair.right)}</span>`).join('')}</div><div class="matching-targets">${pairs.map((pair) => `<div class="matching-target"><strong>${escapeHtml(pair.left)}</strong><div class="matching-lines"><i></i></div></div>`).join('')}</div></div>`;
  }
  if (exercise.type === 'drag-drop' || exercise.type === 'matching') {
    const groups = exercise.dragDropGroups ?? [];
    if (!groups.length) return '<div class="writing-line"></div>';
    const bank = groups.flatMap((group) => group.items);
    const bankLabel = language === 'ar' ? 'الكلمات المتاحة' : 'Word bank';
    return `<div class="matching-print"><div class="matching-bank"><strong>${escapeHtml(bankLabel)}:</strong>${bank.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div><div class="matching-targets">${groups.map((group) => `<div class="matching-target"><strong>${escapeHtml(group.group)}</strong><div class="matching-lines"><i></i><i></i></div></div>`).join('')}</div></div>`;
  }
  return '<div class="writing-line"></div>';
};

const wordNotes = (notes: Note[], language: Language): string => {
  if (!notes.length) return '';
  const label = language === 'ar' ? 'كلمات مهمة' : 'Word Notes';
  const densityClass = notes.length >= 5 ? ' word-notes-dense' : '';
  return `<section class="word-notes${densityClass}"><div class="section-label word-notes-label">${escapeHtml(label)}</div><div class="word-notes-list">${notes.map((note) => `<div class="word-note"><strong>${escapeHtml(note.display)}</strong><span>${escapeHtml(note.definition)}</span></div>`).join('')}</div></section>`;
};

const quickChallenge = (page: PageData, language: Language): string => {
  const exercise = page.exercises?.[0];
  if (!exercise) return '';
  const label = language === 'ar' ? 'تحدٍّ سريع' : 'Quick Challenge';
  const instruction = exercise.instructions || (language === 'ar' ? 'أجب عن السؤال.' : 'Answer the question.');
  return `<aside class="quick-challenge"><div class="section-label quick-label">${escapeHtml(label)}</div><div class="quick-content"><h3>${escapeHtml(exercise.title || label)}</h3><p class="quick-instruction">${escapeHtml(instruction)}</p><p class="quick-question">${escapeHtml(exercise.question || exercise.fillBlanksText || '')}</p>${exerciseBody(exercise, language)}</div></aside>`;
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

const chapterHtml = (
  page: PageData,
  pages: PageData[],
  language: Language,
  imagePath: string,
): string => {
  const previous = pages.filter((candidate) => candidate.type === 'story' && candidate.id < page.id);
  const highlighted = highlightStory(page, chapterNotes(page, previous, pages, language), language);
  const chapterLabel = language === 'ar' ? `الفصل ${page.id}` : `CHAPTER ${page.id}`;
  const side = page.id % 2 === 1 ? 'image-start' : 'image-end';
  return `<article class="golden-chapter${language === 'ar' ? ' golden-chapter-rtl' : ''}" data-chapter="${page.id}"><header class="chapter-header"><div><div class="chapter-eyebrow">${escapeHtml(chapterLabel)}</div><h1>${escapeHtml(page.title)}</h1></div><div class="level-marker">B1</div></header><section class="story-text"><figure class="chapter-image ${side}"><img src="${escapeHtml(imagePath)}" alt="" /></figure>${highlighted.html}</section>${wordNotes(highlighted.notes, language)}${quickChallenge(page, language)}</article>`;
};

const documentHtml = (
  book: BookData,
  ids: number[],
  language: Language,
  imageMap: Map<number, string>,
): string => {
  const selected = ids.map((id) => {
    const page = book.pages.find((candidate) => candidate.id === id && candidate.type === 'story');
    if (!page) throw new Error(`${config.slug} ${language}: chapter ${id} not found.`);
    return page;
  });
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  return `<!doctype html><html lang="${language}" dir="${direction}"><head><meta charset="utf-8" /><title>${escapeHtml(config.runningBook[language])} Print Sample</title><link rel="stylesheet" href="b1-sample.css" /></head><body class="lang-${language}"><div class="running-meta"><span class="running-collection">${escapeHtml(config.collection[language])}</span><span class="running-book">${escapeHtml(config.runningBook[language])}</span></div>${selected.map((page) => chapterHtml(page, book.pages, language, imageMap.get(page.id)!)).join('\n')}</body></html>`;
};

const run = (command: string, args: string[]): void => {
  const result = spawnSync(command, args, { cwd: ROOT, stdio: 'inherit', shell: false });
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed with status ${result.status}`);
};

await rm(OUTPUT, { recursive: true, force: true });
await mkdir(OUTPUT, { recursive: true });
await mkdir(RENDER_DIR, { recursive: true });
await prepareFonts();
await copyFile(path.join(SCRIPT_DIR, 'b1-sample.css'), path.join(OUTPUT, 'b1-sample.css'));

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
  run('pdftoppm', ['-png', '-r', '150', pdfPath, path.join(renderPath, 'page')]);
}

await writeFile(path.join(OUTPUT, 'README.txt'), [
  `B1 print sample: ${config.slug}`,
  `Languages: ${languages.join(', ')}`,
  `Chapter selection: ${process.env.B1_CHAPTER_IDS || 'all'}`,
  '',
  'Renderer: @vivliostyle/cli@11.1.0',
  'Geometry inherits the validated A2 Gold print system.',
  'Story body remains 12.7 pt English / 14 pt Arabic; never shrink below the approved readability floor to force one page.',
  'Long chapters may intentionally continue on a second A4 page.',
  'Word Notes include only terms actually highlighted in story prose.',
  'Quick Challenges are converted to print-native answer areas without exposing correct answers.',
  'Rendered PNGs are written under rendered/en and rendered/ar for visual QA.',
].join('\n'));

console.log(`B1 chapter PDF sample built: ${path.relative(ROOT, OUTPUT)}`);
