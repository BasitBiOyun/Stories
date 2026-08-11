import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn, adamA2BookDataAr } from '../../src/data/adam/a2';
import type { BookData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-front-matter');
const IMAGE_DIR = path.join(OUTPUT, 'assets/images');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');
type Language = 'en' | 'ar';

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
  copyFile(path.join(ROOT, 'public/Arakom-Regular.ttf'), path.join(FONT_DIR, 'Arakom-Regular.ttf')),
  copyFile(path.join(ROOT, 'public/Arakom-Bold.ttf'), path.join(FONT_DIR, 'Arakom-Bold.ttf')),
]);
await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-front-matter.css'), path.join(OUTPUT, 'a2-front-matter.css'));

const render = (book: BookData, language: Language): string => {
  const ar = language === 'ar';
  const chapters = book.pages.filter((page) => page.type === 'story' && page.id >= 1 && page.id <= 10);
  const extraIds = [11, 12, 13, 14, 15, 16];
  const extras = extraIds.map((id) => book.pages.find((page) => page.id === id)).filter(Boolean);
  const toc = [
    ...chapters.map((page) => ({ number: page.id, title: page.title, sub: ar ? 'القصة • كلمات مهمة • تحدٍّ سريع' : 'Story • Word Notes • Quick Challenge' })),
    ...extras.map((page) => ({
      number: page!.id,
      title: page!.title,
      sub: page!.id === 11 ? (ar ? '٨ أسئلة للمراجعة' : '8 reinforcement questions')
        : page!.id === 12 ? (ar ? 'مطابقة الكلمات والمعاني' : 'Key-word matching')
        : page!.id === 13 ? (ar ? 'ترتيب • مطابقة • تأمل • ٨ أسئلة مراجعة' : 'Sequence • matching • reflection • 8-question Review Challenge')
        : page!.id === 16 ? (ar ? '١٠ أسئلة عن القصة كاملة • ٥ + ٥' : '10 whole-story questions • 5 + 5 in print')
        : (ar ? 'مفردات مختارة للمراجعة' : 'Selected vocabulary for whole-book review'),
    })),
  ];

  const howCards = ar ? [
    ['١. انظر أولاً', 'انظر إلى عنوان الفصل والصورة قبل القراءة، وتوقع موضوع الفصل.'],
    ['٢. اقرأ واستمع', 'استمع إلى السرد واتبع النص. أعد الجزء الصعب فقط عند الحاجة.'],
    ['٣. استخدم الكلمات المهمة', 'راجع الكلمات المحددة في سياقها، ثم اقرأ الجملة مرة أخرى.'],
    ['٤. جرّب التحدي السريع', 'استخدمه للتعلم. إذا لم تكن متأكدًا، عد إلى الفصل وابحث عن الدليل.'],
    ['٥. راجع', 'يساعدك تحدي المراجعة المكوّن من ٨ أسئلة على تذكر أهم معلومات القصة.'],
    ['٦. أكمل القصة كلها', 'راجع عناوين الفصول ثم جرّب التحدي النهائي المكوّن من ١٠ أسئلة.'],
  ] : [
    ['1. Look first', 'Use the chapter title and image to predict the topic before you read.'],
    ['2. Read and listen', 'Follow the narration and text together. Replay only the part that feels difficult.'],
    ['3. Use Word Notes', 'Check the underlined words in context. Definitions are kept short and A2-friendly.'],
    ['4. Try the Quick Challenge', 'Use it as learning practice. If you are unsure, return to the chapter and find evidence.'],
    ['5. Review', 'The 8-question Review Challenge helps you rebuild important information after reading.'],
    ['6. Finish the whole story', 'The 10-question Final Challenge checks whole-story recall without trick wording.'],
  ];

  return `<!doctype html><html lang="${language}" dir="${ar ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"/><title>Adam A2 Front Matter</title><link rel="stylesheet" href="a2-front-matter.css"/></head><body class="lang-${language}">
<section class="cover">
  <div class="cover-copy"><div class="kicker">${ar ? 'قصص الأنبياء' : 'STORIES OF THE PROPHETS'}</div><h1>${ar ? 'قصة<br/>النبي آدم' : 'The Story of<br/>Prophet Adam'}</h1><p>${ar ? 'كتاب متدرّج للقراءة والاستماع والمفردات والتفكير والمراجعة.' : 'A graded reader for reading, listening, vocabulary, reflection, and evidence-based review.'}</p><span class="badge">${ar ? 'المستوى A2 • GOLD MASTER' : 'CEFR A2 • GOLD MASTER'}</span></div>
  <figure class="cover-art"><img src="assets/images/cover.png" alt=""/></figure>
  <div class="cover-footer"><span>${ar ? 'النسخة العربية' : 'English edition'}</span><span>${ar ? 'اقرأ • استمع • فكّر • تدرّب' : 'READ • LISTEN • THINK • PRACTICE'}</span></div>
</section>
<article class="front-page"><header class="header"><div><p class="eyebrow">${ar ? 'كتاب الطالب' : 'STUDENT BOOK'}</p><h1>${ar ? 'المحتويات' : 'Contents'}</h1></div><div class="level">A2</div></header><section class="contents">${toc.map((item) => `<div class="toc-row"><span class="toc-num">${item.number}</span><div><span class="toc-title">${escapeHtml(item.title)}</span><span class="toc-sub">${escapeHtml(item.sub)}</span></div></div>`).join('')}</section></article>
<article class="front-page"><header class="header"><div><p class="eyebrow">${ar ? 'كيف تستخدم هذا الكتاب' : 'HOW TO USE THIS BOOK'}</p><h1>${ar ? 'تعلّم من القصة' : 'Learn from the Story'}</h1></div><div class="level">A2</div></header><div class="how-grid">${howCards.map(([title, text]) => `<section class="card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></section>`).join('')}</div><div class="cycle">${ar ? 'اقرأ ← جرّب ← تحقّق ← أعد القراءة ← جرّب مرة أخرى.' : 'Read → Try → Check → Reread → Try again. Wrong answers are part of the learning cycle.'}</div></article>
</body></html>`;
};

await writeFile(path.join(OUTPUT, 'adam-a2-en-front-matter.html'), render(adamA2BookDataEn, 'en'));
await writeFile(path.join(OUTPUT, 'adam-a2-ar-front-matter.html'), render(adamA2BookDataAr, 'ar'));
