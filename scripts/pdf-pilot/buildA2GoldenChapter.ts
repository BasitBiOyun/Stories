import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import {
  fallbackDefinitions,
  arabicAnimatedDefinitions,
} from '../../src/data/fallbackVocab';
import type { Exercise, PageData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-golden-chapter');
const ASSETS = path.join(OUTPUT, 'assets');
const IMAGE_DIR = path.join(ASSETS, 'images');
const FONT_DIR = path.join(ASSETS, 'fonts');
const CHAPTER_IDS = [1, 2] as const;

type Language = 'en' | 'ar';
type HighlightNote = {
  key: string;
  declared: string;
  display: string;
  definition: string;
};

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const cleanToken = (value: string): string => value
  .replace(/[.,!?;:\"'“”‘’`()]/g, '')
  .toLowerCase()
  .trim();

const normalizeArabic = (text: string): string => text
  .replace(/[\u064B-\u0652]/g, '')
  .replace(/[أإآ]/g, 'ا')
  .replace(/ة/g, 'ه')
  .replace(/ى/g, 'ي');

const canonicalKey = (value: string, language: Language): string => {
  const clean = cleanToken(value);
  return language === 'ar' ? normalizeArabic(clean) : clean;
};

const englishVariants = (value: string): string[] => {
  const clean = cleanToken(value);
  if (!clean || clean.includes(' ')) return [clean];

  const variants = new Set([clean, `${clean}s`, `${clean}es`]);
  if (clean.endsWith('y')) variants.add(`${clean.slice(0, -1)}ies`);
  return [...variants].filter(Boolean);
};

const buildBookVocabularyMap = (pages: PageData[], language: Language): Map<string, string> => {
  const map = new Map<string, string>();
  pages.forEach((page) => {
    page.vocabulary?.forEach((entry) => {
      const clean = cleanToken(entry.word);
      map.set(clean, entry.definition);
      if (language === 'ar') {
        const norm = normalizeArabic(clean);
        map.set(norm, entry.definition);
        map.set(normalizeArabic(clean.replace(/^ال/, '')), entry.definition);
      }
    });
  });
  return map;
};

const resolveEnglishDefinition = (text: string, bookMap: Map<string, string>): string | null => {
  const clean = cleanToken(text);
  if (bookMap.has(clean)) return bookMap.get(clean)!;

  let singular = clean;
  if (clean.endsWith('ies')) singular = `${clean.slice(0, -3)}y`;
  else if (clean.endsWith('es')) singular = clean.slice(0, -2);
  else if (clean.endsWith('s')) singular = clean.slice(0, -1);
  if (bookMap.has(singular)) return bookMap.get(singular)!;

  for (const [key, definition] of bookMap.entries()) {
    if (clean.startsWith(key) && clean.length <= key.length + 3) return definition;
    if (key.startsWith(clean) && key.length <= clean.length + 3) return definition;
  }

  const fallbackMap = new Map(
    Object.entries(fallbackDefinitions).map(([key, value]) => [key.toLowerCase().trim(), String(value)]),
  );
  if (fallbackMap.has(clean)) return fallbackMap.get(clean)!;
  if (fallbackMap.has(singular)) return fallbackMap.get(singular)!;

  for (const [key, definition] of fallbackMap.entries()) {
    if (clean.startsWith(key) && clean.length <= key.length + 3) return definition;
    if (key.startsWith(clean) && key.length <= clean.length + 3) return definition;
  }
  return null;
};

const resolveArabicDefinition = (text: string, bookMap: Map<string, string>): string | null => {
  const clean = cleanToken(text);
  const norm = normalizeArabic(clean);
  const stripped = normalizeArabic(clean.replace(/^ال/, ''));

  if (bookMap.has(norm)) return bookMap.get(norm)!;
  if (bookMap.has(stripped)) return bookMap.get(stripped)!;
  if (bookMap.has(clean)) return bookMap.get(clean)!;

  for (const [key, definition] of bookMap.entries()) {
    const keyNorm = normalizeArabic(key);
    const keyStripped = normalizeArabic(key.replace(/^ال/, ''));
    if ((norm.startsWith(keyNorm) || norm.startsWith(keyStripped)) && norm.length <= keyNorm.length + 3) return definition;
    if ((keyNorm.startsWith(norm) || keyStripped.startsWith(norm)) && keyNorm.length <= norm.length + 3) return definition;
  }

  const fallbackMap = new Map<string, string>();
  Object.entries(arabicAnimatedDefinitions).forEach(([key, value]) => {
    const cleanKey = key.toLowerCase().trim();
    fallbackMap.set(cleanKey, String(value));
    fallbackMap.set(normalizeArabic(cleanKey), String(value));
    fallbackMap.set(normalizeArabic(cleanKey.replace(/^ال/, '')), String(value));
  });

  if (fallbackMap.has(norm)) return fallbackMap.get(norm)!;
  if (fallbackMap.has(stripped)) return fallbackMap.get(stripped)!;
  if (fallbackMap.has(clean)) return fallbackMap.get(clean)!;

  for (const [key, definition] of fallbackMap.entries()) {
    const keyNorm = normalizeArabic(key);
    if (norm.startsWith(keyNorm) && norm.length <= keyNorm.length + 3) return definition;
    if (keyNorm.startsWith(norm) && keyNorm.length <= norm.length + 3) return definition;
  }
  return null;
};

const collectDeclaredHighlights = (
  page: PageData,
  previousPages: PageData[],
  language: Language,
  bookMap: Map<string, string>,
): HighlightNote[] => {
  const seenBefore = new Set<string>();
  previousPages.forEach((prevPage) => {
    prevPage.animatedWords?.forEach((word) => seenBefore.add(canonicalKey(word, language)));
    prevPage.vocabulary?.forEach((entry) => seenBefore.add(canonicalKey(entry.word, language)));
  });

  const notes = new Map<string, HighlightNote>();
  const vocabDefinitionMap = new Map<string, string>();
  page.vocabulary?.forEach((entry) => {
    vocabDefinitionMap.set(canonicalKey(entry.word, language), entry.definition);
  });

  const declared = [
    ...(page.vocabulary ?? []).map((entry) => entry.word),
    ...(page.animatedWords ?? []),
  ];

  declared.forEach((word) => {
    const key = canonicalKey(word, language);
    if (!key || seenBefore.has(key) || notes.has(key)) return;

    const definition = vocabDefinitionMap.get(key)
      ?? (language === 'ar'
        ? resolveArabicDefinition(word, bookMap)
        : resolveEnglishDefinition(word, bookMap));

    if (!definition) {
      throw new Error(`Missing ${language} definition for highlighted word: ${word}`);
    }

    notes.set(key, {
      key,
      declared: word,
      display: word,
      definition,
    });
  });

  return [...notes.values()];
};

const buildVariantLookup = (notes: HighlightNote[], language: Language): Map<string, HighlightNote> => {
  const lookup = new Map<string, HighlightNote>();
  notes.forEach((note) => {
    const variants = language === 'ar' ? [cleanToken(note.declared)] : englishVariants(note.declared);
    variants.forEach((variant) => {
      if (variant) lookup.set(language === 'ar' ? normalizeArabic(variant) : variant, note);
    });
  });
  return lookup;
};

const highlightStory = (
  page: PageData,
  notes: HighlightNote[],
  language: Language,
): { html: string; matchedNotes: HighlightNote[] } => {
  const lookup = buildVariantLookup(notes, language);
  const variants = [...new Set([...lookup.keys()].filter(Boolean))].sort((a, b) => b.length - a.length);
  const matched = new Set<string>();

  if (!variants.length) {
    return {
      html: page.content.split(/\n\s*\n/g).map((paragraph) => `<p>${escapeHtml(paragraph.trim())}</p>`).join('\n'),
      matchedNotes: [],
    };
  }

  const regexSource = variants.map(escapeRegExp).join('|');
  const regex = language === 'en'
    ? new RegExp(`\\b(?:${regexSource})\\b`, 'giu')
    : new RegExp(`(?:${regexSource})`, 'giu');

  const renderParagraph = (paragraph: string): string => {
    let cursor = 0;
    let output = '';
    regex.lastIndex = 0;

    for (const match of paragraph.matchAll(regex)) {
      const raw = match[0];
      const index = match.index ?? 0;
      const key = language === 'ar' ? normalizeArabic(cleanToken(raw)) : cleanToken(raw);
      const note = lookup.get(key);

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
  };

  const html = page.content
    .split(/\n\s*\n/g)
    .filter((paragraph) => paragraph.trim().length > 0)
    .map((paragraph) => renderParagraph(paragraph.trim()))
    .join('\n');

  const unmatched = notes.filter((note) => !matched.has(note.key));
  if (unmatched.length) {
    throw new Error(`Declared highlighted words not found in ${language} chapter ${page.id}: ${unmatched.map((note) => note.declared).join(', ')}`);
  }

  return {
    html,
    matchedNotes: notes.filter((note) => matched.has(note.key)),
  };
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

  if (exercise.type === 'fill-blanks') {
    return `<div class="fill-text">${escapeHtml(exercise.fillBlanksText || exercise.question || '')}</div><div class="writing-line"></div>`;
  }

  return '<div class="writing-line"></div>';
};

const renderWordNotes = (notes: HighlightNote[], language: Language): string => {
  if (!notes.length) return '';
  const title = language === 'ar' ? 'كلمات مهمة' : 'Word Notes';
  return `<section class="word-notes">
    <div class="section-label word-notes-label">${escapeHtml(title)}</div>
    <div class="word-notes-list">
      ${notes.map((note) => `<div class="word-note"><strong>${escapeHtml(note.display)}</strong><span>${escapeHtml(note.definition)}</span></div>`).join('')}
    </div>
  </section>`;
};

const renderQuickChallenge = (page: PageData, language: Language): string => {
  const exercise = page.exercises?.[0];
  if (!exercise) return '';
  const label = language === 'ar' ? 'تحدٍّ سريع' : 'Quick Challenge';
  const fallbackInstruction = language === 'ar' ? 'أجب عن السؤال.' : 'Answer the question.';

  return `<aside class="quick-challenge">
    <div class="section-label quick-label">${escapeHtml(label)}</div>
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

const prepareAssets = async (pages: PageData[]): Promise<Map<number, string>> => {
  await mkdir(IMAGE_DIR, { recursive: true });
  await mkdir(FONT_DIR, { recursive: true });

  const imageMap = new Map<number, string>();
  for (const id of CHAPTER_IDS) {
    const page = pages.find((item) => item.id === id && item.type === 'story');
    if (!page?.image) throw new Error(`Missing image for chapter ${id}`);
    const imageName = `chapter-${String(id).padStart(2, '0')}.png`;
    await download(page.image, path.join(IMAGE_DIR, imageName));
    imageMap.set(id, `assets/images/${imageName}`);
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

const findChapter = (pages: PageData[], id: number): PageData => {
  const page = pages.find((item) => item.id === id && item.type === 'story');
  if (!page) throw new Error(`Adam A2 chapter ${id} not found.`);
  return page;
};

const renderChapter = (
  language: Language,
  page: PageData,
  allPages: PageData[],
  previousPages: PageData[],
  imagePath: string,
): string => {
  const isArabic = language === 'ar';
  const bookMap = buildBookVocabularyMap(allPages, language);
  const declaredNotes = collectDeclaredHighlights(page, previousPages, language, bookMap);
  const highlighted = highlightStory(page, declaredNotes, language);
  const chapterLabel = isArabic ? `الفصل ${page.id}` : `CHAPTER ${page.id}`;
  const imageSideClass = page.id % 2 === 1 ? 'image-start' : 'image-end';

  return `<article class="golden-chapter${isArabic ? ' golden-chapter-rtl' : ''}" data-chapter="${page.id}">
    <header class="chapter-header">
      <div class="chapter-heading-copy">
        <div class="chapter-eyebrow">${escapeHtml(chapterLabel)}</div>
        <h1>${escapeHtml(page.title)}</h1>
      </div>
      <div class="level-marker">A2</div>
    </header>

    <section class="story-text">
      <figure class="chapter-image ${imageSideClass}">
        <img src="${escapeHtml(imagePath)}" alt="" />
      </figure>
      ${highlighted.html}
    </section>

    ${renderWordNotes(highlighted.matchedNotes, language)}
    ${renderQuickChallenge(page, language)}
  </article>`;
};

const renderHtml = (
  language: Language,
  pages: PageData[],
  imageMap: Map<number, string>,
): string => {
  const selected = CHAPTER_IDS.map((id) => findChapter(pages, id));
  const isArabic = language === 'ar';

  return `<!doctype html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Adam A2 Chapters 1–2 — Print Sample</title>
  <link rel="stylesheet" href="a2-golden.css" />
</head>
<body class="lang-${language}">
  ${selected.map((page, index) => {
    const imagePath = imageMap.get(page.id);
    if (!imagePath) throw new Error(`Missing prepared image for chapter ${page.id}`);
    const previousPages = pages.filter((candidate) => candidate.type === 'story' && candidate.id < page.id);
    return renderChapter(language, page, pages, previousPages, imagePath);
  }).join('\n')}
</body>
</html>`;
};

const main = async (): Promise<void> => {
  await mkdir(OUTPUT, { recursive: true });
  const imageMap = await prepareAssets(adamA2Pages);

  await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-golden.css'), path.join(OUTPUT, 'a2-golden.css'));
  await writeFile(path.join(OUTPUT, 'adam-a2-en-golden.html'), renderHtml('en', adamA2Pages, imageMap));
  await writeFile(path.join(OUTPUT, 'adam-a2-ar-golden.html'), renderHtml('ar', adamA2PagesAr, imageMap));
  await writeFile(path.join(OUTPUT, 'README.txt'), [
    'A2 Golden Chapter Print Sample',
    'Source: Adam A2 Chapters 1 and 2, English and Arabic repository data.',
    'Images retain the application 4:5 aspect ratio.',
    'Story text is a single reading flow; it is never split into columns.',
    'Highlighted words are underlined only and every actually underlined item is repeated in Word Notes with the same definition source used by the application.',
    'Word Notes and Quick Challenge remain in normal document flow and move down automatically as story text grows.',
    'No story, image reference, audio, synchronization, exercise, or vocabulary source content is modified.',
  ].join('\n'));
};

await main();
