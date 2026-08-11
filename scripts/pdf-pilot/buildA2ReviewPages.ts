import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn, adamA2BookDataAr } from '../../src/data/adam/a2';
import type { Exercise, PageData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-review-pages');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');

type Language = 'en' | 'ar';

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const findPage = (pages: PageData[], id: number): PageData => {
  const page = pages.find((item) => item.id === id);
  if (!page) throw new Error(`Adam A2 page ${id} not found.`);
  return page;
};

const normalizeOption = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object' && 'text' in value) return String((value as { text?: string }).text ?? '');
  return String(value ?? '');
};

const optionLetters = (language: Language): string[] => language === 'ar'
  ? ['أ', 'ب', 'ج', 'د']
  : ['A', 'B', 'C', 'D'];

const renderKnowledgeControls = (exercise: Exercise, language: Language): string => {
  const isArabic = language === 'ar';
  const letters = optionLetters(language);

  if (exercise.type === 'true-false') {
    const labels = isArabic ? ['صحيح', 'خطأ'] : ['TRUE', 'FALSE'];
    return `<div class="knowledge-options knowledge-options-tf">${labels.map((label, index) => `<span class="knowledge-option"><b>${escapeHtml(letters[index])}</b><span>${escapeHtml(label)}</span></span>`).join('')}</div>`;
  }

  if (exercise.type === 'multiple-choice') {
    return `<div class="knowledge-options">${(exercise.options ?? []).map((option, index) => `<span class="knowledge-option"><b>${escapeHtml(letters[index] ?? String(index + 1))}</b><span>${escapeHtml(normalizeOption(option))}</span></span>`).join('')}</div>`;
  }

  return '<div class="knowledge-writing-line"></div>';
};

const renderKnowledgeCheck = (page: PageData, language: Language): string => {
  const isArabic = language === 'ar';
  const eyebrow = isArabic ? 'مراجعة الفهم' : 'CHECK YOUR UNDERSTANDING';
  const hint = isArabic
    ? 'أجب عن كل سؤال. إذا لم تكن متأكدًا، عد إلى القصة وابحث عن الدليل.'
    : 'Answer each question. If you are unsure, return to the story and find the evidence.';
  const exercises = page.exercises ?? [];
  const arabicNumbers = ['١','٢','٣','٤','٥','٦','٧','٨','٩','١٠'];

  return `<article class="assessment-page knowledge-page${isArabic ? ' assessment-rtl' : ''}">
    <header class="assessment-header">
      <div>
        <div class="assessment-eyebrow">${escapeHtml(eyebrow)}</div>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.content)}</p>
      </div>
      <div class="level-marker">A2</div>
    </header>

    <aside class="student-direction">${escapeHtml(hint)}</aside>

    <section class="knowledge-list${exercises.length >= 8 ? ' knowledge-list-eight' : ''}">
      ${exercises.map((exercise, index) => `<div class="knowledge-item">
        <div class="question-number">${isArabic ? arabicNumbers[index] ?? String(index + 1) : String(index + 1)}</div>
        <div class="knowledge-copy">
          <div class="question-copy">${escapeHtml(exercise.question || exercise.instructions || '')}</div>
          ${renderKnowledgeControls(exercise, language)}
        </div>
      </div>`).join('\n')}
    </section>

    <footer class="assessment-footer-note">${escapeHtml(isArabic ? 'بعد الانتهاء، ارجع إلى الفصول التي احتجت فيها إلى مساعدة.' : 'After you finish, revisit any chapter where you needed help.')}</footer>
  </article>`;
};

const meaningPermutation = [3, 0, 5, 2, 1, 4];

const renderVocabularyChallenge = (page: PageData, language: Language): string => {
  const isArabic = language === 'ar';
  const eyebrow = isArabic ? 'تدريب المفردات' : 'VOCABULARY PRACTICE';
  const wordHeading = isArabic ? 'الكلمات' : 'Words';
  const meaningHeading = isArabic ? 'المعاني' : 'Meanings';
  const instruction = isArabic
    ? 'اكتب حرف المعنى الصحيح في المربع بجانب كل كلمة.'
    : 'Write the letter of the correct meaning in the box beside each word.';
  const pairs = page.vocabularyPairs ?? [];
  const shuffledMeanings = meaningPermutation.map((index) => pairs[index]).filter(Boolean);
  const wordLabels = isArabic ? ['١','٢','٣','٤','٥','٦'] : ['1','2','3','4','5','6'];
  const meaningLabels = isArabic ? ['أ','ب','ج','د','هـ','و'] : ['A','B','C','D','E','F'];

  return `<article class="assessment-page vocabulary-page${isArabic ? ' assessment-rtl' : ''}">
    <header class="assessment-header">
      <div>
        <div class="assessment-eyebrow">${escapeHtml(eyebrow)}</div>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.content)}</p>
      </div>
      <div class="level-marker">A2</div>
    </header>

    <aside class="student-direction">${escapeHtml(instruction)}</aside>

    <section class="matching-sheet">
      <div class="matching-column word-column">
        <h2>${escapeHtml(wordHeading)}</h2>
        ${pairs.map((pair, index) => `<div class="matching-row word-row">
          <span class="match-label">${escapeHtml(wordLabels[index] ?? String(index + 1))}</span>
          <strong>${escapeHtml(pair.word)}</strong>
          <span class="answer-cell"></span>
        </div>`).join('\n')}
      </div>

      <div class="matching-column meaning-column">
        <h2>${escapeHtml(meaningHeading)}</h2>
        ${shuffledMeanings.map((pair, index) => `<div class="matching-row meaning-row">
          <span class="match-label">${escapeHtml(meaningLabels[index] ?? String.fromCharCode(65 + index))}</span>
          <span>${escapeHtml(pair.meaning)}</span>
        </div>`).join('\n')}
      </div>
    </section>

    <section class="mini-reflection">
      <strong>${escapeHtml(isArabic ? 'كلمة أريد أن أتذكرها:' : 'One word I want to remember:')}</strong>
      <span></span>
    </section>
  </article>`;
};

const renderDocument = (pages: PageData[], language: Language): string => {
  const knowledge = findPage(pages, 11);
  const vocabulary = findPage(pages, 12);
  const isArabic = language === 'ar';

  return `<!doctype html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head><meta charset="utf-8" /><title>Adam A2 Review Pages</title><link rel="stylesheet" href="a2-review.css" /></head>
<body class="lang-${language}">${renderKnowledgeCheck(knowledge, language)}${renderVocabularyChallenge(vocabulary, language)}</body>
</html>`;
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

await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-review.css'), path.join(OUTPUT, 'a2-review.css'));
await writeFile(path.join(OUTPUT, 'adam-a2-en-review.html'), renderDocument(adamA2BookDataEn.pages, 'en'));
await writeFile(path.join(OUTPUT, 'adam-a2-ar-review.html'), renderDocument(adamA2BookDataAr.pages, 'ar'));
