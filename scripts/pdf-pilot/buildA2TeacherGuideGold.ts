import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn } from '../../src/data/adam/a2';
import type { Exercise, TeacherGuideSection } from '../../src/types';
import { guideIconSvg, type GuidePdfIcon } from './phosphorGuideSvg';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-teacher-guide-gold');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const list = (items: string[] | undefined, className = ''): string => {
  if (!items?.length) return '';
  return `<ul${className ? ` class="${className}"` : ''}>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
};

const iconHeading = (title: string, icon: GuidePdfIcon): string =>
  `<h3 class="icon-heading">${guideIconSvg(icon, title)}<span>${escapeHtml(title)}</span></h3>`;

const renderCard = (title: string, body: string, className = '', icon?: GuidePdfIcon): string =>
  `<section class="card ${className}">${icon ? iconHeading(title, icon) : `<h3>${escapeHtml(title)}</h3>`}${body}</section>`;

const renderLessonSteps = (value: string): string => {
  const chunks = value.split(/(?=\d+[–-]\d+\s*min:)/g).map((item) => item.trim()).filter(Boolean);
  if (chunks.length <= 1) return `<p>${escapeHtml(value)}</p>`;
  return `<div class="lesson-step-list">${chunks.map((chunk) => {
    const match = chunk.match(/^(\d+[–-]\d+\s*min):\s*(.*)$/s);
    if (!match) return `<div class="lesson-step"><div class="lesson-step-copy">${escapeHtml(chunk)}</div></div>`;
    return `<div class="lesson-step"><div class="lesson-step-time">${escapeHtml(match[1])}</div><div class="lesson-step-copy">${escapeHtml(match[2])}</div></div>`;
  }).join('')}</div>`;
};

const formatAnswer = (exercise: Exercise): string => {
  if (exercise.type === 'multiple-choice' && typeof exercise.correctAnswer === 'number') {
    const option = exercise.options?.[exercise.correctAnswer];
    return option === undefined ? String(exercise.correctAnswer) : `${String.fromCharCode(65 + exercise.correctAnswer)}. ${option}`;
  }
  if (exercise.type === 'true-false' && typeof exercise.correctAnswer === 'boolean') return exercise.correctAnswer ? 'True' : 'False';
  if (typeof exercise.correctAnswer === 'string' || typeof exercise.correctAnswer === 'number') return String(exercise.correctAnswer);
  if (Array.isArray(exercise.correctAnswer)) return exercise.correctAnswer.join(' → ');
  if (exercise.correctAnswer && typeof exercise.correctAnswer === 'object') {
    return Object.entries(exercise.correctAnswer)
      .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : String(value)}`)
      .join(' | ');
  }
  return exercise.type === 'reflection' ? 'Open response' : 'See activity evidence';
};

const renderCover = (): string => `
<section class="guide-cover">
  <div class="cover-kicker">STORIES OF THE PROPHETS • PROFESSIONAL TEACHER RESOURCE</div>
  <h1 class="cover-title">Teacher Guide<br/>The Story of Prophet Adam</h1>
  <p class="cover-subtitle">A2 teaching-first reading, listening, vocabulary, reflection, differentiation, and assessment guide.</p>
  <span class="cover-badge">CEFR A2 • GOLD MASTER</span>
  <div class="cover-footer"><span>English edition</span><span>Adam • A2</span></div>
</section>`;

const renderOverview = (): string => {
  const meta = adamA2BookDataEn.teacherGuideMetadata;
  const before = meta?.readingFramework?.before ?? '';
  const during = meta?.readingFramework?.during ?? '';
  const after = meta?.readingFramework?.after ?? '';
  return `<article class="teacher-page">
    <header class="guide-header"><div><p class="eyebrow">Gold-master teaching framework</p><h1>How to Use This Guide</h1><p class="chapter-meta">${escapeHtml(meta?.targetAudience || 'CEFR A2 learners')}</p></div><div class="level-marker">A2</div></header>
    <div class="overview-grid">
      ${renderCard('Purpose', `<p>${escapeHtml(meta?.purpose || '')}</p>`, 'cream', 'target')}
      ${renderCard('Teaching approach', `<p>${escapeHtml(meta?.approachDesc || '')}</p>`, 'sage', 'lightbulb')}
      ${renderCard('Before reading', `<p>${escapeHtml(before)}</p>`, 'blue', 'eye')}
      ${renderCard('During reading', `<p>${escapeHtml(during)}</p>`, 'cream', 'book')}
      ${renderCard('After reading', `<p>${escapeHtml(after)}</p>`, 'sage', 'check')}
      ${renderCard('Assessment evidence', `<p>${escapeHtml(meta?.assessmentEvidence || '')}</p>`, 'blue', 'check')}
    </div>
    <section class="section-block" style="margin-top:5mm">${iconHeading('Core classroom principles', 'users')}${list(meta?.classroomManagement)}</section>
    <div class="two-col">
      ${renderCard('Values focus', `<div class="tag-list">${(meta?.valuesFocus ?? []).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('')}</div>`, '', 'heart')}
      ${renderCard('Language focus', `<div class="tag-list">${(meta?.languageFocus ?? []).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('')}</div>`, '', 'book')}
    </div>
    ${meta?.sensitiveNotes ? `<section class="card rose" style="margin-top:4mm">${iconHeading(meta.sensitiveNotes.title, 'heart')}${list(meta.sensitiveNotes.notes)}</section>` : ''}
  </article>`;
};

const renderChapter = (section: TeacherGuideSection, index: number): string => `
<article class="teacher-chapter">
  <header class="guide-header">
    <div><p class="eyebrow">Chapter ${index + 1} • classroom plan</p><h2>${escapeHtml(section.chapter.replace(/^Chapter\s+\d+:\s*/, ''))}</h2><p class="chapter-meta">Recommended time: ${escapeHtml(section.timing)}</p></div>
    <div class="level-marker">A2</div>
  </header>

  <div class="two-col">
    <section class="card cream">${iconHeading('Measurable objectives', 'target')}${list(section.objectives, 'objectives')}</section>
    <section class="card sage">${iconHeading('Pedagogical purpose', 'lightbulb')}<p>${escapeHtml(section.pedagogy)}</p></section>
  </div>

  <section class="lesson-plan" style="margin-top:4mm">${iconHeading('Lesson sequence', 'clock')}${renderLessonSteps(section.lessonPlan)}</section>

  <div class="two-col" style="margin-top:4mm">
    ${renderCard('Grammar in context', `<p>${escapeHtml(section.grammarFocus || 'Use grammar only as it supports comprehension.')}</p>`, 'blue', 'book')}
    ${renderCard('Pronunciation focus', `<p>${escapeHtml(section.pronunciationFocus || 'Model key chapter vocabulary clearly.')}</p>`, 'blue', 'headphones')}
  </div>

  <div class="two-col" style="margin-top:4mm">
    <section class="card">${iconHeading('Discussion and evidence questions', 'chat')}${list(section.discussionPoints)}</section>
    <section class="card">${iconHeading('Differentiation', 'users')}<h4>Support</h4><p>${escapeHtml(section.differentiation.strugglingLearners)}</p><h4 style="margin-top:2.5mm">Extension</h4><p>${escapeHtml(section.differentiation.fastFinishers)}</p></section>
  </div>

  <div class="two-col" style="margin-top:4mm">
    <section class="card sage">${iconHeading('Interactive teaching tips', 'lightbulb')}${list(section.interactiveTips)}</section>
    <section class="card cream">${iconHeading('Assessment evidence', 'check')}${section.assessmentTools?.rubric?.length ? `<h4>Look for</h4>${list(section.assessmentTools.rubric)}` : ''}${section.assessmentTools?.exitTicket?.length ? `<h4 style="margin-top:2.5mm">Exit ticket</h4>${list(section.assessmentTools.exitTicket)}` : ''}</section>
  </div>

  ${(section.kinestheticActivities?.length || section.globalCitizenship?.length) ? `<div class="two-col" style="margin-top:4mm">
    <section class="card blue">${iconHeading('No-print activity', 'users')}${list(section.kinestheticActivities)}</section>
    <section class="card rose">${iconHeading('Values reflection', 'heart')}${list(section.globalCitizenship)}</section>
  </div>` : ''}
</article>`;

const renderAnswerKeys = (): string => {
  const storyPages = adamA2BookDataEn.pages.filter((page) => page.type === 'story' && page.id >= 1 && page.id <= 10);
  const knowledge = adamA2BookDataEn.pages.find((page) => page.id === 11)?.exercises ?? [];
  const reviewQuiz = adamA2BookDataEn.pages.find((page) => page.id === 13)?.exercises?.find((exercise) => exercise.type === 'quiz-game');
  const finalChallenge = adamA2BookDataEn.pages.find((page) => page.id === 16)?.exercises ?? [];

  const quickRows = storyPages.map((page) => {
    const exercise = page.exercises?.[0];
    return exercise ? `<tr><td>${page.id}</td><td>${escapeHtml(exercise.title || 'Quick Challenge')}</td><td>${escapeHtml(formatAnswer(exercise))}</td></tr>` : '';
  }).join('');
  const knowledgeRows = knowledge.map((exercise, index) => `<tr><td>${index + 1}</td><td>${escapeHtml(exercise.question || exercise.title || '')}</td><td>${escapeHtml(formatAnswer(exercise))}</td></tr>`).join('');
  const reviewRows = (reviewQuiz?.quizQuestions ?? []).map((question, index) => {
    const correct = question.options.find((option) => option.isCorrect)?.text ?? 'Check source data';
    return `<tr><td>${index + 1}</td><td>${escapeHtml(question.question)}</td><td>${escapeHtml(correct)}</td></tr>`;
  }).join('');
  const finalRows = finalChallenge.map((exercise, index) => `<tr><td>${index + 1}</td><td>${escapeHtml(exercise.question || exercise.title || '')}</td><td>${escapeHtml(formatAnswer(exercise))}</td></tr>`).join('');

  return `<article class="teacher-appendix">
    <header class="guide-header"><div><p class="eyebrow">Teacher appendix</p><h1>Answer & Evidence Key</h1><p class="chapter-meta">Answers come from the same finalized BookData used by the application and print student book.</p></div><div class="level-marker">A2</div></header>
    <section class="section-block"><h3>Chapter Quick Challenges</h3><table class="answer-table"><thead><tr><th>Ch.</th><th>Activity</th><th>Answer</th></tr></thead><tbody>${quickRows}</tbody></table></section>
    <section class="section-block"><h3>Knowledge Check - 8 questions</h3><table class="answer-table"><thead><tr><th>#</th><th>Question</th><th>Answer</th></tr></thead><tbody>${knowledgeRows}</tbody></table></section>
  </article>
  <article class="teacher-appendix">
    <header class="guide-header"><div><p class="eyebrow">Teacher appendix</p><h1>Review & Final Challenge Key</h1></div><div class="level-marker">A2</div></header>
    <section class="section-block"><h3>Review Challenge - 8 questions</h3><table class="answer-table"><thead><tr><th>#</th><th>Question</th><th>Answer</th></tr></thead><tbody>${reviewRows}</tbody></table></section>
    <section class="section-block"><h3>Final Challenge - 10 questions</h3><table class="answer-table"><thead><tr><th>#</th><th>Question</th><th>Answer</th></tr></thead><tbody>${finalRows}</tbody></table></section>
    <p class="small">Open reflections are not assigned a single correct answer. Require a connection to evidence from the story before discussing personal meaning.</p>
  </article>`;
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
]);
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
await copyFile(path.join(scriptDir, 'a2-guide-gold.css'), path.join(OUTPUT, 'a2-guide-gold.css'));
await copyFile(path.join(scriptDir, 'a2-guide-polish.css'), path.join(OUTPUT, 'a2-guide-polish.css'));

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" /><title>Adam A2 Teacher Guide Gold Master</title><link rel="stylesheet" href="a2-guide-gold.css" /><link rel="stylesheet" href="a2-guide-polish.css" /></head><body>
${renderCover()}
${renderOverview()}
${adamA2BookDataEn.teacherGuide.map(renderChapter).join('\n')}
${renderAnswerKeys()}
</body></html>`;

await writeFile(path.join(OUTPUT, 'adam-a2-en-teacher-guide.html'), html);
await writeFile(path.join(OUTPUT, 'README.txt'), [
  'Adam A2 English Teacher Guide Gold Master.',
  'Uses finalized chapter-aligned Teacher Guide data from adamA2BookDataEn.',
  'Objectives use plain numbered rows; lesson sequences use separate timed rows. Decorative circular counters are prohibited.',
  'Distinct Phosphor duotone SVG icons clarify major guide sections and use explicit print-safe colours.',
  'No canonical story, chapter, image, audio, or synchronization field is modified.',
].join('\n'));
