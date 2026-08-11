import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn, adamA2BookDataAr } from '../../src/data/adam/a2';
import type { BookData, Exercise } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-answer-key');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');
type Language = 'en' | 'ar';

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const optionLetter = (index: number, language: Language): string => {
  const letters = language === 'ar' ? ['أ','ب','ج','د'] : ['A','B','C','D'];
  return letters[index] ?? String(index + 1);
};

const formatAnswer = (exercise: Exercise, language: Language): string => {
  if (exercise.type === 'multiple-choice' && typeof exercise.correctAnswer === 'number') {
    const option = exercise.options?.[exercise.correctAnswer];
    return option === undefined ? String(exercise.correctAnswer) : `${optionLetter(exercise.correctAnswer, language)}. ${option}`;
  }
  if (exercise.type === 'true-false' && typeof exercise.correctAnswer === 'boolean') {
    return language === 'ar' ? (exercise.correctAnswer ? 'صحيح' : 'خطأ') : (exercise.correctAnswer ? 'True' : 'False');
  }
  if (typeof exercise.correctAnswer === 'string' || typeof exercise.correctAnswer === 'number') return String(exercise.correctAnswer);
  if (Array.isArray(exercise.correctAnswer)) return exercise.correctAnswer.join(' → ');
  if (exercise.correctAnswer && typeof exercise.correctAnswer === 'object') {
    return Object.entries(exercise.correctAnswer).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : String(value)}`).join(' | ');
  }
  return language === 'ar' ? 'إجابة مفتوحة' : (exercise.type === 'reflection' ? 'Open response' : 'Use source activity evidence');
};

const render = (book: BookData, language: Language): string => {
  const ar = language === 'ar';
  const storyPages = book.pages.filter((page) => page.type === 'story' && page.id >= 1 && page.id <= 10);
  const quickRows = storyPages.map((page) => {
    const exercise = page.exercises?.[0];
    return exercise ? `<tr><td>${page.id}</td><td>${escapeHtml(exercise.question || exercise.title || '')}</td><td>${escapeHtml(formatAnswer(exercise, language))}</td></tr>` : '';
  }).join('');
  const knowledge = book.pages.find((page) => page.id === 11)?.exercises ?? [];
  const review = book.pages.find((page) => page.id === 13)?.exercises?.find((exercise) => exercise.type === 'quiz-game');
  const reviewRows = (review?.quizQuestions ?? []).map((question, index) => {
    const answer = question.options.find((option) => option.isCorrect)?.text ?? (ar ? 'راجع المصدر' : 'Check source');
    return `<tr><td>${index + 1}</td><td>${escapeHtml(question.question)}</td><td>${escapeHtml(answer)}</td></tr>`;
  }).join('');
  const finalChallenge = book.pages.find((page) => page.id === 16)?.exercises ?? [];
  const exerciseRows = (exercises: Exercise[]): string => exercises.map((exercise, index) => `<tr><td>${index + 1}</td><td>${escapeHtml(exercise.question || exercise.title || '')}</td><td>${escapeHtml(formatAnswer(exercise, language))}</td></tr>`).join('');

  const labels = ar ? {
    eyebrow1: 'مرجع كتاب الطالب', title1: 'مفتاح الإجابات',
    note: 'استخدم مفتاح الإجابات بعد محاولة حل النشاط. إذا كانت إجابتك خاطئة، عد إلى الفصل وابحث عن الدليل ثم حاول مرة أخرى.',
    quick: 'التحديات السريعة للفصول', knowledge: 'اختبار المعرفة - ٨ أسئلة',
    eyebrow2: 'مراجعة القصة كاملة', title2: 'إجابات التحديات',
    review: 'تحدي المراجعة - ٨ أسئلة', final: 'التحدي النهائي - ١٠ أسئلة',
    chapter: 'الفصل', question: 'السؤال', answer: 'الإجابة',
    reflection: 'أسئلة التأمل إجاباتها مفتوحة. يجب أن ترتبط الإجابة بفكرة أو معلومة من القصة.'
  } : {
    eyebrow1: 'STUDENT BOOK REFERENCE', title1: 'Answer Key',
    note: 'Use the key after attempting the task. For wrong answers, return to the relevant chapter and find the evidence before trying again.',
    quick: 'Chapter Quick Challenges', knowledge: 'Knowledge Check - 8 questions',
    eyebrow2: 'WHOLE-BOOK REVIEW', title2: 'Challenge Answers',
    review: 'Review Challenge - 8 questions', final: 'Final Challenge - 10 questions',
    chapter: 'Chapter', question: 'Question', answer: 'Answer',
    reflection: 'Reflection tasks are open responses. A useful response should connect to an idea or detail in the story rather than being marked against one fixed answer.'
  };

  const tableHead = (first: string): string => `<thead><tr><th>${escapeHtml(first)}</th><th>${escapeHtml(labels.question)}</th><th>${escapeHtml(labels.answer)}</th></tr></thead>`;
  return `<!doctype html><html lang="${language}" dir="${ar ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"/><title>Adam A2 Answer Key</title><link rel="stylesheet" href="a2-answer-key.css"/></head><body class="lang-${language}">
  <article class="answer-page${ar ? ' answer-rtl' : ''}"><header class="header"><div><p class="eyebrow">${labels.eyebrow1}</p><h1>${labels.title1}</h1></div><div class="level">A2</div></header><div class="note">${labels.note}</div><h2>${labels.quick}</h2><table>${tableHead(labels.chapter)}<tbody>${quickRows}</tbody></table><h2>${labels.knowledge}</h2><table>${tableHead('#')}<tbody>${exerciseRows(knowledge)}</tbody></table></article>
  <article class="answer-page${ar ? ' answer-rtl' : ''}"><header class="header"><div><p class="eyebrow">${labels.eyebrow2}</p><h1>${labels.title2}</h1></div><div class="level">A2</div></header><h2>${labels.review}</h2><table>${tableHead('#')}<tbody>${reviewRows}</tbody></table><h2>${labels.final}</h2><table>${tableHead('#')}<tbody>${exerciseRows(finalChallenge)}</tbody></table><p class="small">${labels.reflection}</p></article>
  </body></html>`;
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
await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-answer-key.css'), path.join(OUTPUT, 'a2-answer-key.css'));
await writeFile(path.join(OUTPUT, 'adam-a2-en-answer-key.html'), render(adamA2BookDataEn, 'en'));
await writeFile(path.join(OUTPUT, 'adam-a2-ar-answer-key.html'), render(adamA2BookDataAr, 'ar'));
