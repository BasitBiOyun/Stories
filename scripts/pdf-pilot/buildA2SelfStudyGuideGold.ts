import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2BookDataEn } from '../../src/data/adam/a2';
import type { StudentGuideSection, TeacherGuideSection } from '../../src/types';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/a2-self-study-guide-gold');
const FONT_DIR = path.join(OUTPUT, 'assets/fonts');

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const inlineMarkdown = (value: string): string => escapeHtml(value)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/`(.+?)`/g, '<code>$1</code>');

const markdownToHtml = (source: string): string => {
  const lines = source.trim().split(/\r?\n/);
  const out: string[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const closeList = () => {
    if (listType) out.push(`</${listType}>`);
    listType = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }
    if (line.startsWith('### ')) { closeList(); out.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`); continue; }
    if (line.startsWith('## ')) { closeList(); out.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`); continue; }
    if (line.startsWith('# ')) { closeList(); out.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`); continue; }
    const ordered = line.match(/^(\d+)\.\s+(.+)$/);
    if (ordered) {
      if (listType !== 'ol') { closeList(); out.push('<ol>'); listType = 'ol'; }
      out.push(`<li>${inlineMarkdown(ordered[2])}</li>`);
      continue;
    }
    if (line.startsWith('- ')) {
      if (listType !== 'ul') { closeList(); out.push('<ul>'); listType = 'ul'; }
      out.push(`<li>${inlineMarkdown(line.slice(2))}</li>`);
      continue;
    }
    closeList();
    out.push(`<p>${inlineMarkdown(line)}</p>`);
  }
  closeList();
  return out.join('\n');
};

const list = (items: string[] | undefined): string => items?.length
  ? `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
  : '';

const renderCover = (): string => `
<section class="guide-cover">
  <div class="cover-kicker">STORIES OF THE PROPHETS • INDEPENDENT LEARNING RESOURCE</div>
  <h1 class="cover-title">Self-Study Guide<br/>The Story of Prophet Adam</h1>
  <p class="cover-subtitle">A practical A2 routine for reading, listening, Word Notes, Quick Challenges, rereading, and whole-book review.</p>
  <span class="cover-badge">CEFR A2 • GOLD MASTER</span>
  <div class="cover-footer"><span>English edition</span><span>Adam • A2</span></div>
</section>`;

const renderQuickStart = (sections: StudentGuideSection[]): string => {
  const chapterPages = adamA2BookDataEn.pages.filter((page) => page.type === 'story' && page.id >= 1 && page.id <= 10);
  return `<article class="self-page">
    <header class="guide-header"><div><p class="eyebrow">Independent learning map</p><h1>Your A2 Study Routine</h1><p class="chapter-meta">Use the same short cycle in every chapter.</p></div><div class="level-marker">A2</div></header>
    <div class="self-intro">Do not try to memorise everything at once. Use the narration, text, highlighted words, and feedback together. A wrong answer is a signal to reread a small part of the chapter and try again.</div>
    <div class="study-cycle"><span>Read</span><i>→</i><span>Try</span><i>→</i><span>Check</span><i>→</i><span>Reread</span><i>→</i><span>Try again</span></div>
    <div class="self-section-grid">
      ${sections.map((section) => `<section class="card self-section"><h3>${escapeHtml(section.title)}</h3><p>${escapeHtml(section.text)}</p>${list(section.points)}</section>`).join('\n')}
    </div>
    <section class="section-block" style="margin-top:5mm"><h3>Whole-book tracker</h3>
      <table class="tracker"><thead><tr><th>Chapter</th><th>Read + listened</th><th>Word Notes</th><th>Quick Challenge + evidence check</th></tr></thead><tbody>
        ${chapterPages.map((page) => `<tr><td>${page.id}. ${escapeHtml(page.title)}</td><td><span class="check-box"></span></td><td><span class="check-box"></span></td><td><span class="check-box"></span></td></tr>`).join('')}
      </tbody></table>
    </section>
  </article>`;
};

const renderChapter = (section: TeacherGuideSection, index: number): string => `
<article class="self-chapter">
  <header class="guide-header">
    <div><p class="eyebrow">Chapter ${index + 1} • self-study routine</p><h2>${escapeHtml(section.chapter.replace(/^Chapter\s+\d+:\s*/, ''))}</h2><p class="chapter-meta">Suggested study time: ${escapeHtml(section.timing)}</p></div>
    <div class="level-marker">A2</div>
  </header>

  <section class="card sage"><h3>What you should be able to do</h3>${list(section.objectives)}</section>
  <section class="lesson-plan" style="margin-top:4mm"><h3>Do this in order</h3><p>${escapeHtml(section.lessonPlan)}</p></section>

  <div class="two-col" style="margin-top:4mm">
    <section class="card cream"><h3>Support</h3><p>${escapeHtml(section.differentiation.strugglingLearners)}</p></section>
    <section class="card blue"><h3>Extension</h3><p>${escapeHtml(section.differentiation.fastFinishers)}</p></section>
  </div>

  <div class="two-col" style="margin-top:4mm">
    <section class="card"><h3>Notice the language</h3><p>${escapeHtml(section.grammarFocus || 'Focus first on meaning; notice useful language in the chapter after you understand it.')}</p></section>
    <section class="card"><h3>Listen and say</h3><p>${escapeHtml(section.pronunciationFocus || 'Replay difficult words and repeat them clearly after the narration.')}</p></section>
  </div>

  <section class="card rose" style="margin-top:4mm"><h3>Self-check questions</h3>${list(section.discussionPoints)}</section>
  <section class="card" style="margin-top:4mm"><h3>Use feedback well</h3>${list(section.interactiveTips)}${section.assessmentTools?.exitTicket?.length ? `<h4 style="margin-top:2.5mm">Before you finish</h4>${list(section.assessmentTools.exitTicket)}` : ''}</section>
</article>`;

const renderFullGuide = (): string => {
  const text = adamA2BookDataEn.studentGuideText ?? '';
  return `<article class="self-full-guide">
    <header class="guide-header"><div><p class="eyebrow">Reference section</p><h1>Full Self-Study Guide</h1><p class="chapter-meta">Keep this section for review when you need help with your study routine.</p></div><div class="level-marker">A2</div></header>
    <div class="markdown">${markdownToHtml(text)}</div>
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
await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'a2-guide-gold.css'), path.join(OUTPUT, 'a2-guide-gold.css'));

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" /><title>Adam A2 Self-Study Guide Gold Master</title><link rel="stylesheet" href="a2-guide-gold.css" /></head><body>
${renderCover()}
${renderQuickStart(adamA2BookDataEn.studentGuideSections ?? [])}
${adamA2BookDataEn.selfStudyGuide.map(renderChapter).join('\n')}
${renderFullGuide()}
</body></html>`;

await writeFile(path.join(OUTPUT, 'adam-a2-en-self-study-guide.html'), html);
await writeFile(path.join(OUTPUT, 'README.txt'), [
  'Adam A2 English Self-Study Guide Gold Master.',
  'Uses the finalized chapter-aligned independent-study material from adamA2BookDataEn.',
  'Includes a quick-start routine, whole-book tracker, 10 chapter routines, support/extension routes, self-checks, and the full study guide.',
  'No canonical story, chapter, image, audio, or synchronization field is modified.',
].join('\n'));