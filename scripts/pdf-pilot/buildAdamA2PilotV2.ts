import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2FinalReviewExercises } from '../../src/data/adam/a2/en/exercises';
import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import { adamA2FinalReviewExercisesAr } from '../../src/data/adam/a2/ar/exercises';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUTPUT = path.join(ROOT, 'artifacts/pdf-pilot-v2');
const ASSETS = path.join(OUTPUT, 'assets');
const IMAGE_DIR = path.join(ASSETS, 'images');
const FONT_DIR = path.join(ASSETS, 'fonts');
const IMAGE_CHAPTERS = [1, 2, 5, 6, 8] as const;

type Language = 'en' | 'ar';
type AnyPage = Record<string, any>;
type AnyExercise = Record<string, any>;

const labels = {
  en: {
    collection: 'STORIES OF THE PROPHETS',
    title: 'The Story of Prophet Adam',
    subtitle: 'A graded reader for reading, thinking and learning',
    coverFeature: 'READ • LISTEN • THINK • PRACTICE',
    chapter: 'CHAPTER',
    highlighted: 'Highlighted Words',
    highlightedHint: 'Notice these words in the story. Their meanings are shown here.',
    quick: 'Quick Challenge',
    practice: 'Practice Lab',
    practiceIntro: 'Three print-friendly activities using the current Adam A2 exercise data.',
    vocabulary: 'Vocabulary & Glossary',
    vocabularyIntro: 'Match key words, then review their meanings in context.',
    finalReview: 'Final Review',
    finalReviewIntro: 'Review the whole story before the Final Challenge.',
    finalChallenge: 'Final Challenge',
    finalChallengeIntro: 'Choose one answer for each question.',
    continued: 'continued',
    answerKey: 'Answer Key',
    answerKeyIntro: 'Current answers shown for layout review.',
    trueLabel: 'TRUE',
    falseLabel: 'FALSE',
    writeAnswer: 'Write your answer:',
    matchingHint: 'Write or draw lines to match the items.',
    reflectionHint: 'There is no single correct personal answer. Use an idea from the story.',
    word: 'WORD',
    meaning: 'MEANING',
    currentContentNote: 'Layout pilot using the current repository content. Content-quality revisions are handled separately.',
  },
  ar: {
    collection: 'قِصَصُ الْأَنْبِيَاءِ',
    title: 'قِصَّةُ النَّبِيِّ آدَمَ',
    subtitle: 'قِرَاءَةٌ مُتَدَرِّجَةٌ لِلْفَهْمِ وَالتَّفْكِيرِ وَالتَّعَلُّمِ',
    coverFeature: 'اِقْرَأْ • اِسْتَمِعْ • فَكِّرْ • تَدَرَّبْ',
    chapter: 'الْفَصْلُ',
    highlighted: 'الْكَلِمَاتُ الْمُهِمَّةُ',
    highlightedHint: 'لَاحِظْ هَذِهِ الْكَلِمَاتِ فِي النَّصِّ وَرَاجِعْ مَعَانِيَهَا.',
    quick: 'تَحَدٍّ سَرِيعٌ',
    practice: 'مُخْتَبَرُ التَّدْرِيبِ',
    practiceIntro: 'ثَلَاثَةُ أَنْشِطَةٍ مَطْبُوعَةٍ مِنْ بَيَانَاتِ آدَمَ A2 الْحَالِيَّةِ.',
    vocabulary: 'الْمُفْرَدَاتُ وَالْمُعْجَمُ',
    vocabularyIntro: 'صِلِ الْكَلِمَاتِ بِمَعَانِيهَا، ثُمَّ رَاجِعِ الْمُفْرَدَاتِ فِي السِّيَاقِ.',
    finalReview: 'الْمُرَاجَعَةُ النِّهَائِيَّةُ',
    finalReviewIntro: 'رَاجِعِ الْقِصَّةَ كُلَّهَا قَبْلَ التَّحَدِّي النِّهَائِيِّ.',
    finalChallenge: 'التَّحَدِّي النِّهَائِيُّ',
    finalChallengeIntro: 'اِخْتَرْ إِجَابَةً وَاحِدَةً لِكُلِّ سُؤَالٍ.',
    continued: 'تَابِعٌ',
    answerKey: 'مِفْتَاحُ الْإِجَابَاتِ',
    answerKeyIntro: 'الْإِجَابَاتُ الْحَالِيَّةُ مَعْرُوضَةٌ لِمُرَاجَعَةِ التَّصْمِيمِ.',
    trueLabel: 'صَحِيحٌ',
    falseLabel: 'خَطَأٌ',
    writeAnswer: 'اُكْتُبْ إِجَابَتَكَ:',
    matchingHint: 'اُكْتُبْ أَوِ ارْسُمْ خُطُوطًا لِلْمُطَابَقَةِ.',
    reflectionHint: 'لَا تُوجَدُ إِجَابَةٌ شَخْصِيَّةٌ وَاحِدَةٌ صَحِيحَةٌ. اِسْتَخْدِمْ فِكْرَةً مِنَ الْقِصَّةِ.',
    word: 'الْكَلِمَةُ',
    meaning: 'الْمَعْنَى',
    currentContentNote: 'نَمُوذَجُ تَصْمِيمٍ يَسْتَخْدِمُ الْمُحْتَوَى الْحَالِيَّ فِي الْمُسْتَوْدَعِ. تُنَفَّذُ مُرَاجَعَةُ الْمُحْتَوَى فِي مَسَارٍ مُنْفَصِلٍ.',
  },
} as const;

const escapeHtml = (value: unknown): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightParagraph = (text: string, terms: string[]): string => {
  const usable = [...new Set(terms.map((term) => term.trim()).filter((term) => term.length > 1))]
    .sort((a, b) => b.length - a.length);
  if (!usable.length) return escapeHtml(text);
  const pattern = new RegExp(`(${usable.map(escapeRegExp).join('|')})`, 'giu');
  let cursor = 0;
  let output = '';
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    output += escapeHtml(text.slice(cursor, index));
    output += `<mark>${escapeHtml(match[0])}</mark>`;
    cursor = index + match[0].length;
  }
  output += escapeHtml(text.slice(cursor));
  return output;
};

const paragraphize = (page: AnyPage): string => {
  const terms = [
    ...(page.animatedWords ?? []),
    ...(page.vocabulary ?? []).map((item: AnyPage) => String(item.word ?? '')),
  ];
  return String(page.content ?? '')
    .split(/\n\s*\n/g)
    .map((paragraph) => `<p>${highlightParagraph(paragraph.trim(), terms)}</p>`)
    .join('\n');
};

const normalizeOption = (option: unknown): string => {
  if (typeof option === 'string') return option;
  if (option && typeof option === 'object' && 'text' in option) {
    return String((option as { text?: string }).text ?? '');
  }
  return String(option ?? '');
};

const download = async (url: string, target: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

const ensureAssets = async (pages: AnyPage[]): Promise<Map<number, string>> => {
  await mkdir(IMAGE_DIR, { recursive: true });
  await mkdir(FONT_DIR, { recursive: true });

  const imageMap = new Map<number, string>();
  for (const id of IMAGE_CHAPTERS) {
    const page = pages.find((item) => item.id === id && item.type === 'story');
    if (!page?.image) throw new Error(`Missing image for chapter ${id}`);
    const ext = String(page.image).toLowerCase().includes('.png') ? 'png' : 'jpg';
    const fileName = `chapter-${String(id).padStart(2, '0')}.${ext}`;
    await download(String(page.image), path.join(IMAGE_DIR, fileName));
    imageMap.set(id, `assets/images/${fileName}`);
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

const findStory = (pages: AnyPage[], id: number): AnyPage => {
  const page = pages.find((item) => item.id === id && item.type === 'story');
  if (!page) throw new Error(`Story page ${id} not found`);
  return page;
};

const findPageType = (pages: AnyPage[], type: string): AnyPage => {
  const page = pages.find((item) => item.type === type);
  if (!page) throw new Error(`Page type ${type} not found`);
  return page;
};

const choiceBubble = (text: string, index?: number): string => `<div class="choice-row">
  <span class="choice-marker">${index === undefined ? '' : String.fromCharCode(65 + index)}</span>
  <span>${escapeHtml(text)}</span>
</div>`;

const renderExercise = (exercise: AnyExercise, language: Language, compact = false): string => {
  const l = labels[language];
  const type = String(exercise.type ?? '');
  let body = '';

  if (type === 'true-false') {
    body = `<div class="inline-choices">${choiceBubble(l.trueLabel)}${choiceBubble(l.falseLabel)}</div>`;
  } else if (type === 'multiple-choice') {
    body = `<div class="stacked-choices">${(exercise.options ?? []).map((option: unknown, index: number) => choiceBubble(normalizeOption(option), index)).join('')}</div>`;
  } else if (type === 'fill-blanks') {
    body = `<div class="fill-text">${escapeHtml(exercise.fillBlanksText ?? exercise.question ?? '')}</div><div class="answer-line"><span>${escapeHtml(l.writeAnswer)}</span></div>`;
  } else if (type === 'sequencing') {
    body = `<ol class="sequence-list">${(exercise.sequencingItems ?? []).map((item: AnyPage) => `<li><span class="order-box"></span><span>${escapeHtml(item.text)}</span></li>`).join('')}</ol>`;
  } else if (type === 'drag-drop' || type === 'matching') {
    body = `<div class="group-grid">${(exercise.dragDropGroups ?? []).map((group: AnyPage) => `<section class="group-card"><h4>${escapeHtml(group.group)}</h4><div class="pill-bank">${(group.items ?? []).map((item: string) => `<span>${escapeHtml(item)}</span>`).join('')}</div><div class="write-rule"></div></section>`).join('')}</div><p class="micro-note">${escapeHtml(l.matchingHint)}</p>`;
  } else if (type === 'tap-reveal') {
    body = `<div class="answer-line"><span>${escapeHtml(l.writeAnswer)}</span></div><div class="answer-line"></div>`;
  } else if (type === 'reflection') {
    body = `<div class="reflection-lines"><span></span><span></span><span></span></div><p class="micro-note">${escapeHtml(l.reflectionHint)}</p>`;
  } else {
    body = `<div class="reflection-lines"><span></span><span></span></div>`;
  }

  return `<article class="exercise-card${compact ? ' compact-card' : ''}">
    <div class="exercise-type">${escapeHtml(type.replaceAll('-', ' '))}</div>
    <h3>${escapeHtml(exercise.title ?? '')}</h3>
    ${exercise.instructions ? `<p class="instructions">${escapeHtml(exercise.instructions)}</p>` : ''}
    ${exercise.question && type !== 'fill-blanks' ? `<p class="question">${escapeHtml(exercise.question)}</p>` : ''}
    ${body}
  </article>`;
};

const renderVocabularyBox = (page: AnyPage, language: Language): string => {
  const l = labels[language];
  const words = page.vocabulary ?? [];
  return `<aside class="highlight-box">
    <div class="highlight-heading"><span>✦</span><h3>${escapeHtml(l.highlighted)}</h3></div>
    <p>${escapeHtml(l.highlightedHint)}</p>
    <div class="highlight-list">${words.map((item: AnyPage) => `<div class="highlight-item"><strong>${escapeHtml(item.word)}</strong><span>${escapeHtml(item.definition)}</span></div>`).join('')}</div>
  </aside>`;
};

const renderQuickChallenge = (page: AnyPage, language: Language): string => {
  const exercise = page.exercises?.[0];
  if (!exercise) return '';
  return `<aside class="quick-card">
    <div class="quick-band"><span>✓</span><strong>${escapeHtml(labels[language].quick)}</strong></div>
    <div class="quick-body">${renderExercise(exercise, language, true)}</div>
  </aside>`;
};

const renderCover = (language: Language, imagePath: string): string => {
  const l = labels[language];
  return `<section class="cover-page">
    <div class="cover-frame"></div>
    <div class="cover-kicker">${escapeHtml(l.collection)}</div>
    <div class="cover-image"><img src="${escapeHtml(imagePath)}" alt="" /></div>
    <div class="cover-title-block">
      <span class="cover-level">A2</span>
      <h1>${escapeHtml(l.title)}</h1>
      <p>${escapeHtml(l.subtitle)}</p>
    </div>
    <div class="cover-footer">${escapeHtml(l.coverFeature)}</div>
  </section>`;
};

const renderPageHeader = (title: string, subtitle: string, badge?: string): string => `<header class="page-heading">
  <div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(subtitle)}</p></div>
  ${badge ? `<span class="heading-badge">${escapeHtml(badge)}</span>` : ''}
</header>`;

const renderChapterPage = (page: AnyPage, language: Language, imagePath: string, chapterNo: number): string => {
  const l = labels[language];
  return `<section class="pdf-page chapter-layout">
    ${renderPageHeader(page.title, `${l.chapter} ${chapterNo}`, 'A2')}
    <div class="chapter-hero">
      <figure><img src="${escapeHtml(imagePath)}" alt="" /></figure>
      ${renderVocabularyBox(page, language)}
    </div>
    <section class="story-columns">${paragraphize(page)}</section>
    ${renderQuickChallenge(page, language)}
  </section>`;
};

const renderPracticePage = (pages: AnyPage[], language: Language, imageMap: Map<number, string>): string => {
  const l = labels[language];
  const chosen = [findStory(pages, 2), findStory(pages, 6), findStory(pages, 8)];
  return `<section class="pdf-page practice-layout">
    ${renderPageHeader(l.practice, l.practiceIntro, 'A2')}
    <div class="image-ribbon">${chosen.map((page) => `<img src="${escapeHtml(imageMap.get(page.id) ?? '')}" alt="" />`).join('')}</div>
    <div class="practice-grid">${chosen.map((page) => renderExercise(page.exercises?.[0] ?? {}, language)).join('')}</div>
  </section>`;
};

const renderVocabularyPage = (pages: AnyPage[], language: Language): string => {
  const l = labels[language];
  const challenge = findPageType(pages, 'vocabulary-match');
  const glossaries = pages.filter((page) => page.type === 'glossary');
  const glossaryEntries = glossaries.flatMap((page) => page.vocabulary ?? []).slice(0, 14);
  const pairs = challenge.vocabularyPairs ?? [];
  return `<section class="pdf-page vocabulary-layout">
    ${renderPageHeader(l.vocabulary, l.vocabularyIntro, 'A2')}
    <div class="matching-table">
      <div class="matching-column"><h3>${escapeHtml(l.word)}</h3>${pairs.map((pair: AnyPage, index: number) => `<div class="match-row"><span>${index + 1}</span><strong>${escapeHtml(pair.word)}</strong><i></i></div>`).join('')}</div>
      <div class="matching-column"><h3>${escapeHtml(l.meaning)}</h3>${[...pairs].reverse().map((pair: AnyPage, index: number) => `<div class="match-row"><span>${String.fromCharCode(65 + index)}</span><em>${escapeHtml(pair.meaning)}</em></div>`).join('')}</div>
    </div>
    <div class="glossary-grid">${glossaryEntries.map((item: AnyPage) => `<article><strong>${escapeHtml(item.word)}</strong><p>${escapeHtml(item.definition)}</p></article>`).join('')}</div>
  </section>`;
};

const renderFinalReview = (review: AnyExercise[], language: Language): string => {
  const l = labels[language];
  const items = review.slice(0, 3);
  return `<section class="pdf-page final-review-layout">
    ${renderPageHeader(l.finalReview, l.finalReviewIntro, 'REVIEW')}
    <div class="review-stack">${items.map((exercise) => renderExercise(exercise, language)).join('')}</div>
  </section>`;
};

const getQuizQuestions = (review: AnyExercise[]): AnyPage[] => {
  const quiz = review.find((exercise) => exercise.type === 'quiz-game');
  return quiz?.quizQuestions ?? [];
};

const renderQuizCard = (question: AnyPage, number: number): string => `<article class="quiz-card">
  <div class="quiz-number">${number}</div>
  <div class="quiz-content"><h3>${escapeHtml(question.question)}</h3><div class="quiz-options">${(question.options ?? []).map((option: AnyPage, index: number) => choiceBubble(normalizeOption(option), index)).join('')}</div></div>
</article>`;

const renderFinalChallenge = (questions: AnyPage[], language: Language, start: number, end: number, part: number): string => {
  const l = labels[language];
  const slice = questions.slice(start, end);
  return `<section class="pdf-page final-challenge-layout">
    ${renderPageHeader(`${l.finalChallenge}${part > 1 ? ` - ${l.continued}` : ''}`, l.finalChallengeIntro, `${start + 1}-${start + slice.length}`)}
    <div class="challenge-stack">${slice.map((question, index) => renderQuizCard(question, start + index + 1)).join('')}</div>
  </section>`;
};

const answerText = (exercise: AnyExercise): string => {
  const answer = exercise.correctAnswer;
  if (typeof answer === 'boolean') return answer ? 'True' : 'False';
  if (typeof answer === 'number' && Array.isArray(exercise.options)) return normalizeOption(exercise.options[answer]);
  if (Array.isArray(answer)) return answer.join(' → ');
  if (answer && typeof answer === 'object') {
    return Object.entries(answer).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : String(value)}`).join(' | ');
  }
  return String(answer ?? 'Open response');
};

const renderAnswerKey = (pages: AnyPage[], review: AnyExercise[], language: Language): string => {
  const l = labels[language];
  const quickPages = [findStory(pages, 1), findStory(pages, 5)];
  const practicePages = [findStory(pages, 2), findStory(pages, 6), findStory(pages, 8)];
  const quizQuestions = getQuizQuestions(review);
  const quizAnswers = quizQuestions.map((question, index) => {
    const correctIndex = (question.options ?? []).findIndex((option: AnyPage) => Boolean(option.isCorrect));
    const correct = correctIndex >= 0 ? normalizeOption(question.options[correctIndex]) : '';
    return `<li><strong>${index + 1}.</strong> ${escapeHtml(correct)}</li>`;
  }).join('');

  return `<section class="pdf-page answer-key-layout">
    ${renderPageHeader(l.answerKey, l.answerKeyIntro, 'KEY')}
    <div class="answer-columns">
      <section><h3>${escapeHtml(l.quick)}</h3><ol>${quickPages.map((page) => `<li><strong>${escapeHtml(page.title)}:</strong> ${escapeHtml(answerText(page.exercises?.[0] ?? {}))}</li>`).join('')}</ol></section>
      <section><h3>${escapeHtml(l.practice)}</h3><ol>${practicePages.map((page) => `<li><strong>${escapeHtml(page.title)}:</strong> ${escapeHtml(answerText(page.exercises?.[0] ?? {}))}</li>`).join('')}</ol></section>
      <section><h3>${escapeHtml(l.finalReview)}</h3><ol>${review.slice(0, 2).map((exercise) => `<li><strong>${escapeHtml(exercise.title)}:</strong> ${escapeHtml(answerText(exercise))}</li>`).join('')}</ol></section>
      <section><h3>${escapeHtml(l.finalChallenge)}</h3><ol>${quizAnswers}</ol></section>
    </div>
    <aside class="layout-note">${escapeHtml(l.currentContentNote)}</aside>
  </section>`;
};

const renderDocument = (
  language: Language,
  pages: AnyPage[],
  review: AnyExercise[],
  imageMap: Map<number, string>,
): string => {
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  const chapter1 = findStory(pages, 1);
  const chapter5 = findStory(pages, 5);
  const quizQuestions = getQuizQuestions(review);
  if (!imageMap.get(1) || !imageMap.get(5)) throw new Error('Required pilot images are missing');
  if (quizQuestions.length < 7) throw new Error('Expected current seven-question quiz-game data');

  return `<!doctype html>
<html lang="${language}" dir="${direction}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(labels[language].title)} - PDF Pilot V2</title>
  <link rel="stylesheet" href="pilot-v2.css" />
</head>
<body class="lang-${language}">
  ${renderCover(language, imageMap.get(1)!)}
  ${renderChapterPage(chapter1, language, imageMap.get(1)!, 1)}
  ${renderChapterPage(chapter5, language, imageMap.get(5)!, 5)}
  ${renderPracticePage(pages, language, imageMap)}
  ${renderVocabularyPage(pages, language)}
  ${renderFinalReview(review, language)}
  ${renderFinalChallenge(quizQuestions, language, 0, 4, 1)}
  ${renderFinalChallenge(quizQuestions, language, 4, 7, 2)}
  ${renderAnswerKey(pages, review, language)}
</body>
</html>`;
};

const main = async (): Promise<void> => {
  await mkdir(OUTPUT, { recursive: true });
  const imageMap = await ensureAssets(adamA2Pages as AnyPage[]);
  await copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'pilot-v2.css'), path.join(OUTPUT, 'pilot-v2.css'));
  await writeFile(path.join(OUTPUT, 'adam-a2-en-pilot-v2.html'), renderDocument('en', adamA2Pages as AnyPage[], adamA2FinalReviewExercises as AnyExercise[], imageMap));
  await writeFile(path.join(OUTPUT, 'adam-a2-ar-pilot-v2.html'), renderDocument('ar', adamA2PagesAr as AnyPage[], adamA2FinalReviewExercisesAr as AnyExercise[], imageMap));
  await writeFile(path.join(OUTPUT, 'README.txt'), [
    'Adam A2 publication layout pilot V2',
    'Expected archetypes: cover, two chapter pages, practice, vocabulary/glossary, final review, two final challenge pages, answer key.',
    'Story text, chapter images, vocabulary, exercises and answers are read directly from repository data modules.',
    'No canonical story text, narration, audio reference or synchronization data is modified.',
    'The current seven-question quiz-game is shown only to review pagination and component layout.',
  ].join('\n'));
  console.log(`Expanded pilot HTML written to ${OUTPUT}`);
};

await main();
