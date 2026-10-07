// Reads the content JSON from disk (the browser build reads it through Vite instead).
import '../lib/nodeContent';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Level, PageData } from '../../src/types';
import { checkEnglishPage } from '../../src/content/rules';

/**
 * A plain report of what the library holds today: chapters, words, activities, pictures and
 * narration per edition. `npm run report:content` prints it; it never fails a build, it is the
 * number a person looks at before deciding what to work on next.
 */
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const booksDir = `${root}/src/content/books`;
const guidesDir = `${root}/src/content/guides`;

const words = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

interface Row {
  edition: string;
  level: Level;
  chapters: number;
  words: number;
  activities: number;
  pictures: string;
  narration: string;
  guides: string;
  rules: number;
}

const rows: Row[] = [];
for (const file of readdirSync(booksDir).sort()) {
  if (!file.endsWith('.json')) continue;
  const data = JSON.parse(readFileSync(`${booksDir}/${file}`, 'utf8')) as {
    level: Level; language: 'en' | 'ar'; book: { pages: PageData[] };
  };
  const pages = data.book.pages;
  const chapters = pages.filter(page => page.type === 'story');
  const guide = JSON.parse(readFileSync(`${guidesDir}/${file}`, 'utf8')) as {
    teacherGuide?: { content?: unknown[] }; selfStudyGuide?: { content?: unknown[]; sections?: unknown[] };
  };
  rows.push({
    edition: file.replace('.json', ''),
    level: data.level,
    chapters: chapters.length,
    words: chapters.reduce((total, page) => total + words(page.content ?? ''), 0),
    activities: pages.reduce((total, page) => total + (page.exercises?.length ?? 0) + (page.languageFocusExercises?.length ?? 0), 0),
    pictures: `${chapters.filter(page => page.image).length}/${chapters.length}`,
    narration: `${chapters.filter(page => page.audioUrl).length}/${chapters.length}`,
    guides: `${guide.teacherGuide?.content?.length ?? 0} + ${(guide.selfStudyGuide?.sections?.length ?? guide.selfStudyGuide?.content?.length) ?? 0}`,
    rules: data.language === 'en' ? pages.reduce((total, page) => total + checkEnglishPage(page, data.level).length, 0) : 0,
  });
}

const columns: [keyof Row, string][] = [
  ['edition', 'Edition'], ['chapters', 'Chapters'], ['words', 'Words'], ['activities', 'Activities'],
  ['pictures', 'Pictures'], ['narration', 'Narration'], ['guides', 'Guide parts'], ['rules', 'Rule problems'],
];
const width = (key: keyof Row, title: string) =>
  Math.max(title.length, ...rows.map(row => String(row[key]).length));

console.log(columns.map(([key, title]) => title.padEnd(width(key, title))).join('  '));
console.log(columns.map(([key, title]) => '-'.repeat(width(key, title))).join('  '));
for (const row of rows) {
  console.log(columns.map(([key, title]) => String(row[key]).padEnd(width(key, title))).join('  '));
}

const total = (pick: (row: Row) => number) => rows.reduce((sum, row) => sum + pick(row), 0);
console.log('');
console.log('Pictures and narration are counted from the book file. Some books get their pictures');
console.log('from Storage instead (src/core/storage/storageManifests.ts), and show 0 here.');
console.log('');
console.log(`${rows.length} editions · ${total(row => row.chapters)} chapters · ${total(row => row.words).toLocaleString('en-US')} words · ${total(row => row.activities)} activities`);
const missingNarration = rows.filter(row => !row.narration.startsWith(row.narration.split('/')[1]));
if (missingNarration.length > 0) {
  console.log(`Narration still missing in: ${missingNarration.map(row => `${row.edition} (${row.narration})`).join(', ')}`);
}
