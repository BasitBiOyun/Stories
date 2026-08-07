import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn } from '../../src/data/adam/a2';
import type { Exercise } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-answer-key');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const formatAnswer = (exercise: Exercise): string => {
  if (exercise.type === 'multiple-choice' && typeof exercise.correctAnswer === 'number') {
    const option = exercise.options?.[exercise.correctAnswer];
    return option === undefined ? String(exercise.correctAnswer) : `${String.fromCharCode(65 + exercise.correctAnswer)}. ${option}`;
  }
  if (exercise.type === 'true-false' && typeof exercise.correctAnswer === 'boolean') return exercise.correctAnswer ? 'True' : 'False';
  if (typeof exercise.correctAnswer === 'string' || typeof exercise.correctAnswer === 'number') return String(exercise.correctAnswer);
  if (Array.isArray(exercise.correctAnswer)) return exercise.correctAnswer.join(' → ');
  if (exercise.correctAnswer && typeof exercise.correctAnswer === 'object') {
    return Object.entries(exercise.correctAnswer).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : String(value)}`).join(' | ');
  }
  return exercise.type === 'reflection' ? 'Open response' : 'Use source activity evidence';
};

const rowsFromExercises = (exercises: Exercise[]): string => exercises.map((exercise, index) => `<tr><td>${index + 1}</td><td>${escapeHtml(exercise.question || exercise.title || '')}</td><td>${escapeHtml(formatAnswer(exercise))}</td></tr>`).join('');

const storyPages = adamA2BookDataEn.pages.filter((page) => page.type === 'story' && page.id >= 1 && page.id <= 10);
const quickRows = storyPages.map((page) => {
  const exercise = page.exercises?.[0];
  return exercise ? `<tr><td>${page.id}</td><td>${escapeHtml(exercise.question || exercise.title || '')}</td><td>${escapeHtml(formatAnswer(exercise))}</td></tr>` : '';
}).join('');
const knowledge = adamA2BookDataEn.pages.find((page) => page.id === 11)?.exercises ?? [];
const review = adamA2BookDataEn.pages.find((page) => page.id === 13)?.exercises?.find((exercise) => exercise.type === 'quiz-game');
const reviewRows = (review?.quizQuestions ?? []).map((question, index) => `<tr><td>${index + 1}</td><td>${escapeHtml(question.question)}</td><td>${escapeHtml(question.options.find((option) => option.isCorrect)?.text ?? 'Check source')}</td></tr>`).join('');
const finalChallenge = adamA2BookDataEn.pages.find((page) => page.id === 16)?.exercises ?? [];

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><title>Adam A2 Answer Key</title><link rel="stylesheet" href="a2-answer-key.css"/></head><body>
<article class="answer-page"><header class="header"><div><p class="eyebrow">STUDENT BOOK REFERENCE</p><h1>Answer Key</h1></div><div class="level">A2</div></header><div class="note">Use the key after attempting the task. For wrong answers, return to the relevant chapter and find the evidence before trying again.</div><h2>Chapter Quick Challenges</h2><table><thead><tr><th>Chapter</th><th>Prompt</th><th>Answer</th></tr></thead><tbody>${quickRows}</tbody></table><h2>Knowledge Check - 8 questions</h2><table><thead><tr><th>#</th><th>Question</th><th>Answer</th></tr></thead><tbody>${rowsFromExercises(knowledge)}</tbody></table></article>
<article class="answer-page"><header class="header"><div><p class="eyebrow">WHOLE-BOOK REVIEW</p><h1>Challenge Answers</h1></div><div class="level">A2</div></header><h2>Review Challenge - 8 questions</h2><table><thead><tr><th>#</th><th>Question</th><th>Answer</th></tr></thead><tbody>${reviewRows}</tbody></table><h2>Final Challenge - 10 questions</h2><table><thead><tr><th>#</th><th>Question</th><th>Answer</th></tr></thead><tbody>${rowsFromExercises(finalChallenge)}</tbody></table><p class="small">Reflection tasks are open responses. A useful response should connect to an idea or detail in the story rather than being marked against one fixed answer.</p></article>
</body></html>`;

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
]);
await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-answer-key.css'), path.join(OUTPUT, 'a2-answer-key.css'));
await writeFile(path.join(OUTPUT, 'adam-a2-en-answer-key.html'), html);
await writeFile(path.join(OUTPUT, 'README.txt'), 'Adam A2 English student answer key generated from finalized BookData. No answers are invented by the PDF layer.\n');