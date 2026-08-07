import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import type { Exercise, PageData } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-final-review');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');

type Language = 'en' | 'ar';

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const findReview = (pages: PageData[]): PageData => {
  const page = pages.find((item) => item.id === 13 && item.type === 'exercises');
  if (!page) throw new Error('Adam A2 Final Review page not found.');
  return page;
};

const findExercise = (page: PageData, type: string): Exercise => {
  const exercise = page.exercises?.find((item) => item.type === type);
  if (!exercise) throw new Error(`Final Review exercise ${type} not found.`);
  return exercise;
};

const renderPageHeader = (title: string, subtitle: string, eyebrow: string, continuation = ''): string => `
<header class="review-header">
  <div>
    <div class="review-eyebrow">${escapeHtml(eyebrow)}</div>
    <h1>${escapeHtml(title)}${continuation ? `<span>${escapeHtml(continuation)}</span>` : ''}</h1>
    <p>${escapeHtml(subtitle)}</p>
  </div>
  <div class="level-marker">A2</div>
</header>`;

const sequenceOrder = [3, 0, 4, 1, 2];

const renderSkillsPage = (page: PageData, language: Language): string => {
  const isArabic = language === 'ar';
  const sequencing = findExercise(page, 'sequencing');
  const grouping = findExercise(page, 'drag-drop');
  const sequenceItems = sequenceOrder
    .map((index) => sequencing.sequencingItems?.[index])
    .filter(Boolean);
  const groups = grouping.dragDropGroups ?? [];
  const bank: string[] = [];
  const maxItems = Math.max(0, ...groups.map((group) => group.items.length));
  for (let i = 0; i < maxItems; i++) {
    groups.forEach((group) => {
      if (group.items[i]) bank.push(group.items[i]);
    });
  }

  return `<article class="review-page${isArabic ? ' review-rtl' : ''}">
    ${renderPageHeader(
      page.title,
      page.content,
      isArabic ? 'المراجعة النهائية' : 'FINAL REVIEW',
      isArabic ? ' • ١' : ' • 1',
    )}

    <section class="review-block sequencing-block">
      <div class="block-kicker">${escapeHtml(isArabic ? '١ • رتب الأحداث' : '1 • PUT IT IN ORDER')}</div>
      <h2>${escapeHtml(sequencing.title || '')}</h2>
      <p class="instruction">${escapeHtml(sequencing.instructions || '')}</p>
      <div class="sequence-list">
        ${sequenceItems.map((item, index) => `<div class="sequence-row">
          <span class="sequence-id">${isArabic ? ['أ','ب','ج','د','هـ'][index] : String.fromCharCode(65 + index)}</span>
          <span>${escapeHtml(item?.text || '')}</span>
          <i></i>
        </div>`).join('\n')}
      </div>
      <div class="sequence-answer-line">
        <strong>${escapeHtml(isArabic ? 'الترتيب الصحيح:' : 'My order:')}</strong>
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </section>

    <section class="review-block behavior-block">
      <div class="block-kicker">${escapeHtml(isArabic ? '٢ • صنف السلوك' : '2 • SORT THE BEHAVIOR')}</div>
      <h2>${escapeHtml(grouping.title || '')}</h2>
      <p class="instruction">${escapeHtml(grouping.instructions || '')}</p>
      <div class="behavior-bank">${bank.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
      <div class="behavior-targets">
        ${groups.map((group) => `<div class="behavior-target"><strong>${escapeHtml(group.group)}</strong><i></i><i></i><i></i></div>`).join('')}
      </div>
    </section>
  </article>`;
};

const renderReflectionPage = (page: PageData, language: Language): string => {
  const isArabic = language === 'ar';
  const reflection = findExercise(page, 'reflection');
  const prompts = reflection.discussionPrompts ?? [];
  const modeNames: Record<string, string> = isArabic
    ? { Individual: 'فردي', Pair: 'ثنائي', Class: 'صفي' }
    : { Individual: 'Individual', Pair: 'Pair', Class: 'Class' };

  return `<article class="review-page${isArabic ? ' review-rtl' : ''}">
    ${renderPageHeader(
      page.title,
      isArabic ? 'فكر، اكتب، ثم شارك أفكارك.' : 'Think, write, then share your ideas.',
      isArabic ? 'التفكير والتأمل' : 'THINK & REFLECT',
      isArabic ? ' • ٢' : ' • 2',
    )}

    <section class="reflection-intro">
      <h2>${escapeHtml(reflection.title || '')}</h2>
      <p>${escapeHtml(reflection.instructions || '')}</p>
    </section>

    <section class="reflection-list">
      ${prompts.map((prompt, index) => `<div class="reflection-item">
        <div class="reflection-meta"><span>${isArabic ? ['١','٢','٣'][index] : index + 1}</span><strong>${escapeHtml(modeNames[prompt.mode] || prompt.mode)}</strong></div>
        <h3>${escapeHtml(prompt.question)}</h3>
        <div class="writing-lines"><i></i><i></i><i></i></div>
      </div>`).join('\n')}
    </section>
  </article>`;
};

const renderQuizQuestion = (question: NonNullable<Exercise['quizQuestions']>[number], number: number, language: Language): string => {
  const isArabic = language === 'ar';
  const options = question.options ?? [];
  return `<div class="quiz-question">
    <div class="quiz-number">${isArabic ? ['١','٢','٣','٤','٥','٦','٧'][number - 1] : number}</div>
    <div class="quiz-copy">
      <h3>${escapeHtml(question.question)}</h3>
      <div class="quiz-options">
        ${options.map((option, index) => `<span><i></i><b>${String.fromCharCode(65 + index)}</b>${escapeHtml(option.text)}</span>`).join('')}
      </div>
    </div>
  </div>`;
};

const renderQuizPages = (page: PageData, language: Language): string => {
  const isArabic = language === 'ar';
  const quiz = findExercise(page, 'quiz-game');
  const questions = quiz.quizQuestions ?? [];
  const chunks = [questions.slice(0, 4), questions.slice(4, 7)];

  return chunks.map((chunk, pageIndex) => `<article class="review-page${isArabic ? ' review-rtl' : ''}">
    ${renderPageHeader(
      quiz.title || page.title,
      pageIndex === 0 ? (quiz.instructions || '') : (isArabic ? 'أكمل الأسئلة الثلاثة الأخيرة.' : 'Complete the final three questions.'),
      isArabic ? 'تحدي المراجعة' : 'REVIEW CHALLENGE',
      isArabic ? ` • ${pageIndex === 0 ? '٣' : '٤'}` : ` • ${pageIndex + 3}`,
    )}

    <section class="quiz-list">
      ${chunk.map((question, index) => renderQuizQuestion(question, pageIndex === 0 ? index + 1 : index + 5, language)).join('\n')}
    </section>

    ${pageIndex === 1 ? `<section class="review-finish"><strong>${escapeHtml(isArabic ? 'أنهيت المراجعة!' : 'Review complete!')}</strong><span>${escapeHtml(isArabic ? 'راجع إجاباتك قبل الانتقال إلى التحدي التالي.' : 'Check your answers before moving on.')}</span></section>` : ''}
  </article>`).join('\n');
};

const renderDocument = (pages: PageData[], language: Language): string => {
  const page = findReview(pages);
  const isArabic = language === 'ar';
  return `<!doctype html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head><meta charset="utf-8" /><title>Adam A2 Final Review</title><link rel="stylesheet" href="a2-final-review.css" /></head>
<body class="lang-${language}">
  ${renderSkillsPage(page, language)}
  ${renderReflectionPage(page, language)}
  ${renderQuizPages(page, language)}
</body>
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

await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-final-review.css'), path.join(OUTPUT, 'a2-final-review.css'));
await writeFile(path.join(OUTPUT, 'adam-a2-en-final-review.html'), renderDocument(adamA2Pages, 'en'));
await writeFile(path.join(OUTPUT, 'adam-a2-ar-final-review.html'), renderDocument(adamA2PagesAr, 'ar'));
await writeFile(path.join(OUTPUT, 'README.txt'), [
  'Adam A2 Final Review print pilot.',
  'All existing Final Review exercises are rendered without exposing correct answers.',
  'Sequencing and grouping source items are deterministically rearranged for meaningful paper tasks.',
  'The seven quiz-game questions are split across two readable A4 pages.',
  'No exercise wording, story content, correct answer, audio, or synchronization source data is modified.',
].join('\n'));
