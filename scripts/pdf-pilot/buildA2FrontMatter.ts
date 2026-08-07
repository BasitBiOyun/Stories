import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn } from '../../src/data/adam/a2';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-front-matter');
const IMAGE_DIR = path.join(OUTPUT, 'assets/images');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

await mkdir(IMAGE_DIR, { recursive: true });
await mkdir(FONT_DIR, { recursive: true });
const firstChapter = adamA2BookDataEn.pages.find((page) => page.id === 1 && page.type === 'story');
if (!firstChapter?.image) throw new Error('Adam A2 chapter 1 cover artwork is missing.');
await download(firstChapter.image, path.join(IMAGE_DIR, 'cover.png'));
const poppins = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
await Promise.all([
  download(`${poppins}/Poppins-Regular.ttf`, path.join(FONT_DIR, 'Poppins-Regular.ttf')),
  download(`${poppins}/Poppins-SemiBold.ttf`, path.join(FONT_DIR, 'Poppins-SemiBold.ttf')),
  download(`${poppins}/Poppins-Bold.ttf`, path.join(FONT_DIR, 'Poppins-Bold.ttf')),
]);
await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-front-matter.css'), path.join(OUTPUT, 'a2-front-matter.css'));

const chapters = adamA2BookDataEn.pages.filter((page) => page.type === 'story' && page.id >= 1 && page.id <= 10);
const toc = [
  ...chapters.map((page) => ({ number: page.id, title: page.title, sub: 'Story • Word Notes • Quick Challenge' })),
  { number: 11, title: 'Knowledge Check', sub: '8 reinforcement questions' },
  { number: 12, title: 'Vocabulary Challenge', sub: 'Key-word matching' },
  { number: 13, title: 'Final Review & Reflection', sub: 'Sequence • matching • reflection • 8-question Review Challenge' },
  { number: 14, title: 'Master Glossary - Part 1', sub: 'Selected vocabulary from Chapters 1–5' },
  { number: 15, title: 'Master Glossary - Part 2', sub: 'Selected vocabulary from Chapters 6–10' },
  { number: 16, title: 'Final Challenge', sub: '10 whole-story questions • 5 + 5 in print' },
];

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><title>Adam A2 Front Matter</title><link rel="stylesheet" href="a2-front-matter.css"/></head><body>
<section class="cover">
  <div class="cover-copy"><div class="kicker">STORIES OF THE PROPHETS</div><h1>The Story of<br/>Prophet Adam</h1><p>A graded reader for reading, listening, vocabulary, reflection, and evidence-based review.</p><span class="badge">CEFR A2 • GOLD MASTER</span></div>
  <figure class="cover-art"><img src="assets/images/cover.png" alt=""/></figure>
  <div class="cover-footer"><span>English edition</span><span>READ • LISTEN • THINK • PRACTICE</span></div>
</section>
<article class="front-page">
  <header class="header"><div><p class="eyebrow">STUDENT BOOK</p><h1>Contents</h1></div><div class="level">A2</div></header>
  <section class="contents">${toc.map((item) => `<div class="toc-row"><span class="toc-num">${item.number}</span><div><span class="toc-title">${escapeHtml(item.title)}</span><span class="toc-sub">${escapeHtml(item.sub)}</span></div></div>`).join('')}</section>
</article>
<article class="front-page">
  <header class="header"><div><p class="eyebrow">HOW TO USE THIS BOOK</p><h1>Learn from the Story</h1></div><div class="level">A2</div></header>
  <div class="how-grid">
    <section class="card"><h3>1. Look first</h3><p>Use the chapter title and image to predict the topic before you read.</p></section>
    <section class="card"><h3>2. Read and listen</h3><p>Follow the narration and text together. Replay only the part that feels difficult.</p></section>
    <section class="card"><h3>3. Use Word Notes</h3><p>Check the underlined words in context. Definitions are kept short and A2-friendly.</p></section>
    <section class="card"><h3>4. Try the Quick Challenge</h3><p>Use it as learning practice. If you are unsure, return to the chapter and find evidence.</p></section>
    <section class="card"><h3>5. Review</h3><p>The 8-question Review Challenge helps you rebuild important information after reading.</p></section>
    <section class="card"><h3>6. Finish the whole story</h3><p>The 10-question Final Challenge checks whole-story recall without trick wording.</p></section>
  </div>
  <div class="cycle">Read → Try → Check → Reread → Try again. Wrong answers are part of the learning cycle.</div>
</article>
</body></html>`;

await writeFile(path.join(OUTPUT, 'adam-a2-en-front-matter.html'), html);
await writeFile(path.join(OUTPUT, 'README.txt'), 'Adam A2 English student-book front matter. Uses the existing chapter 1 image reference without changing canonical content.\n');