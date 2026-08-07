import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import { fallbackDefinitions, arabicAnimatedDefinitions } from '../../src/data/fallbackVocab';
import type { Exercise, PageData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-chapter-sample');
const IMAGE_DIR = path.join(OUTPUT, 'assets/images');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');
const CHAPTER_IDS = [1, 2] as const;

type Language = 'en' | 'ar';
type Note = { key: string; declared: string; display: string; definition: string };

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

const makeBookDefinitionMap = (pages: PageData[], language: Language): Map<string, string> => {
  const map = new Map<string, string>();
  pages.forEach((page) => page.vocabulary?.forEach((entry) => map.set(keyOf(entry.word, language), entry.definition)));
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
  const currentVocab = new Map((page.vocabulary ?? []).map((entry) => [keyOf(entry.word, language), entry.definition]));
  const notes = new Map<string, Note>();

  const declared = [
    ...(page.vocabulary ?? []).map((entry) => entry.word),
    ...(page.animatedWords ?? []),
  ];

  declared.forEach((word) => {
    const key = keyOf(word, language);
    if (!key || seen.has(key) || notes.has(key)) return;
    const definition = currentVocab.get(key) ?? bookDefinitions.get(key) ?? fallback.get(key);
    if (!definition) throw new Error(`Missing ${language} definition for highlighted word: ${word}`);
    notes.set(key, { key, declared: word, display: word, definition });
  });

  return [...notes.values()];
};

const highlightStory = (page: PageData, notes: Note[], language: Language): { html: string; notes: Note[] } => {
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
  if (!patterns.length) {
    return {
      html: page.content.split(/\n\s*\n/g).filter(Boolean).map((p) => `<p>${escapeHtml(p.trim())}</p>`).join('\n'),
      notes: [],
    };
  }

  const regex = language === 'en'
    ? new RegExp(`\\b(?:${patterns.map(escapeRegExp).join('|')})\\b`, 'giu')
    : new RegExp(`(?:${patterns.map(escapeRegExp).join('|')})`, 'gu');

  const matched = new Set<string>();
  const paragraphs = page.content.split(/\n\s*\n/g).filter((p) => p.trim().length > 0);

  const html = paragraphs.map((paragraph) => {
    let cursor = 0;
    let output = '';
    regex.lastIndex = 0;

    for (const match of paragraph.matchAll(regex)) {
      const raw = match[0];
      const index = match.index ?? 0;
      const noteKey = language === 'ar' ? keyOf(raw, language) : clean(raw);
      const note = variantToNote.get(noteKey);

      output += escapeHtml(paragraph.slice(cursor, index));
      if (note && !matched.has(note.key)) {
        matched.add(note.key);
        note.display = raw;
        output += `<span class="vocab-highlight">${escapeHtml(raw)}</span>`;
      } else {
        output += escapeHtml(raw);
      }
      cursor = index + raw.length;
    }

    output += escapeHtml(paragraph.slice(cursor));
    return `<p>${output}</p>`;
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
  return '<div class="writing-line"></div>';
};

const wordNotes = (notes: Note[], language: Language): string => {
  if (!notes.length) return '';
  const label = language === 'ar' ? 'كلمات مهمة' : 'Word Notes';
  return `<section class="word-notes">
    <div class="section-label word-notes-label">${escapeHtml(label)}</div>
    <div class="word-notes-list">
      ${notes.map((note) => `<div class="word-note"><strong>${escapeHtml(note.display)}</strong><span>${escapeHtml(note.definition)}</span></div>`).join('')}
    </div>
  </section>`;
};

const quickChallenge = (page: PageData, language: Language): string => {
  const exercise = page.exercises?.[0];
  if (!exercise) return '';
  const label = language === 'ar' ? 'تحدٍّ سريع' : 'Quick Challenge';
  const instruction = exercise.instructions || (language === 'ar' ? 'أجب عن السؤال.' : 'Answer the question.');
  return `<aside class="quick-challenge">
    <div class="section-label quick-label">${escapeHtml(label)}</div>
    <div class="quick-content">
      <h3>${escapeHtml(exercise.title || label)}</h3>
      <p class="quick-instruction">${escapeHtml(instruction)}</p>
      <p class="quick-question">${escapeHtml(exercise.question || exercise.fillBlanksText || '')}</p>
      ${exerciseBody(exercise, language)}
    </div>
  </aside>`;
};

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

const prepareAssets = async (pages: PageData[]): Promise<Map<number, string>> => {
  await mkdir(IMAGE_DIR, { recursive: true });
  await mkdir(FONT_DIR, { recursive: true });
  const imageMap = new Map<number, string>();

  for (const id of CHAPTER_IDS) {
    const page = pages.find((item) => item.id === id && item.type === 'story');
    if (!page?.image) throw new Error(`Missing chapter ${id} image`);
    const name = `chapter-${String(id).padStart(2, '0')}.png`;
    await download(page.image, path.join(IMAGE_DIR, name));
    imageMap.set(id, `assets/images/${name}`);
  }

  const poppins = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
  await Promise.all([
    download(`${poppins}/Poppins-Regular.ttf`, path.join(FONT_DIR, 'Poppins-Regular.ttf')),
    download(`${poppins}/Poppins-SemiBold.ttf`, path.join(FONT_DIR, 'Poppins-SemiBold.ttf')),
    download(`${poppins}/Poppins-Bold.ttf`, path.join(FONT_DIR, 'Poppins-Bold.ttf')),
    copyFile(path.join(ROOT, 'public/Arakom-Regular.ttf'), path.join(FONT_DIR, 'Arakom-Regular.ttf')),
    copyFile(path.join(ROOT, 'public/Arakom-Bold.ttf'), path.join(FONT_DIR, 'Arakom-Bold.ttf')),
  ]);
  return imageMap;
};

const findChapter = (pages: PageData[], id: number): PageData => {
  const page = pages.find((item) => item.id === id && item.type === 'story');
  if (!page) throw new Error(`Adam A2 chapter ${id} not found`);
  return page;
};

const chapterHtml = (page: PageData, pages: PageData[], language: Language, imagePath: string): string => {
  const previous = pages.filter((candidate) => candidate.type === 'story' && candidate.id < page.id);
  const highlighted = highlightStory(page, chapterNotes(page, previous, pages, language), language);
  const chapterLabel = language === 'ar' ? `الفصل ${page.id}` : `CHAPTER ${page.id}`;
  const side = page.id % 2 === 1 ? 'image-start' : 'image-end';

  return `<article class="golden-chapter${language === 'ar' ? ' golden-chapter-rtl' : ''}">
    <header class="chapter-header">
      <div><div class="chapter-eyebrow">${escapeHtml(chapterLabel)}</div><h1>${escapeHtml(page.title)}</h1></div>
      <div class="level-marker">A2</div>
    </header>
    <section class="story-text">
      <figure class="chapter-image ${side}"><img src="${escapeHtml(imagePath)}" alt="" /></figure>
      ${highlighted.html}
    </section>
    ${wordNotes(highlighted.notes, language)}
    ${quickChallenge(page, language)}
  </article>`;
};

const documentHtml = (pages: PageData[], language: Language, imageMap: Map<number, string>): string => {
  const selected = CHAPTER_IDS.map((id) => findChapter(pages, id));
  return `<!doctype html>
<html lang="${language}" dir="${language === 'ar' ? 'rtl' : 'ltr'}">
<head><meta charset="utf-8" /><title>Adam A2 Chapter Sample</title><link rel="stylesheet" href="a2-sample.css" /></head>
<body class="lang-${language}">
${selected.map((page) => chapterHtml(page, pages, language, imageMap.get(page.id)!)).join('\n')}
</body></html>`;
};

await mkdir(OUTPUT, { recursive: true });
const images = await prepareAssets(adamA2Pages);
await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-sample.css'), path.join(OUTPUT, 'a2-sample.css'));
await writeFile(path.join(OUTPUT, 'adam-a2-en.html'), documentHtml(adamA2Pages, 'en', images));
await writeFile(path.join(OUTPUT, 'adam-a2-ar.html'), documentHtml(adamA2PagesAr, 'ar', images));
await writeFile(path.join(OUTPUT, 'README.txt'), [
  'Adam A2 Chapters 1-2 Vivliostyle sample.',
  'All chapter text, image references, vocabulary, animated/highlighted words and Quick Challenge content come from current application data.',
  'Only words actually underlined in the chapter text appear in Word Notes.',
  'Images are rendered at an exact 4:5 box.',
  'Word Notes and Quick Challenge are normal-flow blocks and move automatically after the story text.',
].join('\n'));
