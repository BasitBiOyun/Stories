import type { Exercise, PageData, QuizQuestion } from '../types';
import type { A2GoldLanguage, A2GoldPageConfig } from './a2GoldFactory';
import { sanitizeA2PlaceholderMedia } from './a2PlaceholderMedia';

interface ParallelLearningResult {
  englishPages: PageData[];
  arabicPages: PageData[];
}

interface ParallelAnchor {
  key: string;
  chapterId: number;
  english: Exercise;
  arabic: Exercise;
}

interface ParallelExercisePair {
  key: string;
  chapterId: number;
  english: Exercise;
  arabic: Exercise;
}

type VariedExerciseType = 'multiple-choice' | 'true-false' | 'matching' | 'fill-blanks' | 'tap-reveal';
type AnchorKind = 'h' | 'v';

const QUICK_VARIANTS: VariedExerciseType[] = [
  'tap-reveal',
  'fill-blanks',
  'matching',
  'multiple-choice',
  'true-false',
];

const insertAt = <T,>(items: T[], item: T, index: number): T[] => {
  const output = [...items];
  output.splice(Math.max(0, Math.min(index, output.length)), 0, item);
  return output;
};

const uniqueStrings = (values: string[]): string[] => {
  const seen = new Set<string>();
  return values.filter((value) => {
    const key = value.trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const chapterLabel = (chapterId: number, language: A2GoldLanguage): string =>
  language === 'ar' ? `الفصل ${chapterId}` : `Chapter ${chapterId}`;

const buildHotspotExercise = (
  page: PageData,
  hotspotIndex: number,
  allStoryPages: PageData[],
  language: A2GoldLanguage,
): Exercise | null => {
  const hotspot = page.hotspots?.[hotspotIndex];
  if (!hotspot) return null;

  const distractors = uniqueStrings([
    ...(page.hotspots || [])
      .filter((_, index) => index !== hotspotIndex)
      .map((item) => item.description),
    ...allStoryPages
      .filter((item) => item.id !== page.id)
      .flatMap((item) => (item.hotspots || []).map((entry) => entry.description)),
  ]).filter((value) => value !== hotspot.description).slice(0, 2);

  if (distractors.length < 2) return null;

  const correctIndex = (page.id + hotspotIndex) % 3;
  const options = insertAt(distractors, hotspot.description, correctIndex);

  return {
    id: `parallel-hotspot-${page.id}-${hotspotIndex}`,
    type: 'multiple-choice',
    title: language === 'ar' ? 'تفصيل من الفصل' : 'Chapter Detail',
    instructions: language === 'ar' ? 'اختر المعلومة الموجودة في هذا الفصل.' : 'Choose the detail stated in this chapter.',
    question: language === 'ar'
      ? `أي معلومة ترتبط بـ «${hotspot.title}» في ${chapterLabel(page.id, language)}؟`
      : `Which detail matches “${hotspot.title}” in ${chapterLabel(page.id, language)}?`,
    options,
    correctAnswer: correctIndex,
    explanation: hotspot.description,
    feedback: {
      correct: language === 'ar' ? 'صحيح. هذه المعلومة موجودة في الفصل.' : 'Correct. This detail is stated in the chapter.',
      incorrect: language === 'ar'
        ? `ارجع إلى ${chapterLabel(page.id, language)} وابحث عن المعلومة المرتبطة بهذا العنوان.`
        : `Go back to ${chapterLabel(page.id, language)} and find the detail connected to this heading.`,
    },
  };
};

const buildVocabularyExercise = (
  page: PageData,
  vocabularyIndex: number,
  allStoryPages: PageData[],
  language: A2GoldLanguage,
): Exercise | null => {
  const entry = page.vocabulary?.[vocabularyIndex];
  if (!entry) return null;

  const distractors = uniqueStrings([
    ...(page.vocabulary || [])
      .filter((_, index) => index !== vocabularyIndex)
      .map((item) => item.definition),
    ...allStoryPages
      .filter((item) => item.id !== page.id)
      .flatMap((item) => (item.vocabulary || []).map((vocabulary) => vocabulary.definition)),
  ]).filter((value) => value !== entry.definition).slice(0, 2);

  if (distractors.length < 2) return null;

  const correctIndex = (page.id + vocabularyIndex + 1) % 3;
  const options = insertAt(distractors, entry.definition, correctIndex);

  return {
    id: `parallel-vocabulary-${page.id}-${vocabularyIndex}`,
    type: 'multiple-choice',
    title: language === 'ar' ? 'معنى الكلمة' : 'Word Meaning',
    instructions: language === 'ar' ? 'اختر المعنى المستخدم في الفصل.' : 'Choose the meaning used in the chapter.',
    question: language === 'ar'
      ? `ما معنى «${entry.word}» في ${chapterLabel(page.id, language)}؟`
      : `What does “${entry.word}” mean in ${chapterLabel(page.id, language)}?`,
    options,
    correctAnswer: correctIndex,
    explanation: `${entry.word}: ${entry.definition}`,
    feedback: {
      correct: language === 'ar' ? 'صحيح. هذا هو معنى الكلمة في Word Notes.' : 'Correct. This is the Word Notes meaning.',
      incorrect: language === 'ar'
        ? `راجع Word Notes في ${chapterLabel(page.id, language)} ثم حاول مرة أخرى.`
        : `Check the Word Notes in ${chapterLabel(page.id, language)} and try again.`,
    },
  };
};

const storyPagesFor = (pages: PageData[], storyIds: number[]): PageData[] =>
  storyIds
    .map((id) => pages.find((page) => page.id === id))
    .filter((page): page is PageData => Boolean(page));

const buildParallelAnchors = (
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  storyIds: number[],
): ParallelAnchor[] => {
  const byChapter = new Map<number, ParallelAnchor[]>();

  storyIds.forEach((chapterId) => {
    const englishPage = englishStoryPages.find((page) => page.id === chapterId);
    const arabicPage = arabicStoryPages.find((page) => page.id === chapterId);
    if (!englishPage || !arabicPage) return;

    const chapterAnchors: ParallelAnchor[] = [];
    const hotspotCount = Math.min(englishPage.hotspots?.length || 0, arabicPage.hotspots?.length || 0);
    const vocabularyCount = Math.min(englishPage.vocabulary?.length || 0, arabicPage.vocabulary?.length || 0);
    const maxSlots = Math.max(hotspotCount, vocabularyCount);

    for (let index = 0; index < maxSlots; index += 1) {
      if (index < hotspotCount) {
        const english = buildHotspotExercise(englishPage, index, englishStoryPages, 'en');
        const arabic = buildHotspotExercise(arabicPage, index, arabicStoryPages, 'ar');
        if (english && arabic) chapterAnchors.push({ key: `h:${chapterId}:${index}`, chapterId, english, arabic });
      }

      if (index < vocabularyCount) {
        const english = buildVocabularyExercise(englishPage, index, englishStoryPages, 'en');
        const arabic = buildVocabularyExercise(arabicPage, index, arabicStoryPages, 'ar');
        if (english && arabic) chapterAnchors.push({ key: `v:${chapterId}:${index}`, chapterId, english, arabic });
      }
    }

    byChapter.set(chapterId, chapterAnchors);
  });

  const output: ParallelAnchor[] = [];
  const maxChapterAnchors = Math.max(0, ...storyIds.map((id) => byChapter.get(id)?.length || 0));
  for (let slot = 0; slot < maxChapterAnchors; slot += 1) {
    storyIds.forEach((chapterId) => {
      const anchor = byChapter.get(chapterId)?.[slot];
      if (anchor) output.push(anchor);
    });
  }
  return output;
};

const parseAnchorKey = (key: string): { kind: AnchorKind; chapterId: number; sourceIndex: number } | null => {
  const [kind, chapter, source] = key.split(':');
  if ((kind !== 'h' && kind !== 'v') || !Number.isFinite(Number(chapter)) || !Number.isFinite(Number(source))) return null;
  return { kind, chapterId: Number(chapter), sourceIndex: Number(source) };
};

const rotate = <T,>(items: T[], offset: number): T[] => {
  if (!items.length) return [];
  const normalized = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(normalized), ...items.slice(0, normalized)];
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (items.length <= count) return items.slice();
  if (count === 1) return [items[0]];
  const selected: T[] = [];
  const used = new Set<number>();
  for (let index = 0; index < count; index += 1) {
    let sourceIndex = Math.round(index * (items.length - 1) / (count - 1));
    while (used.has(sourceIndex) && sourceIndex + 1 < items.length) sourceIndex += 1;
    used.add(sourceIndex);
    selected.push(items[sourceIndex]);
  }
  return selected;
};

const selectStage = (
  anchors: ParallelAnchor[],
  count: number,
  usedKeys: Set<string>,
  offset: number,
): ParallelAnchor[] => {
  const available = rotate(anchors, offset).filter((anchor) => !usedKeys.has(anchor.key));
  const selected = pickEvenly(available, count);
  selected.forEach((anchor) => usedKeys.add(anchor.key));
  return selected;
};

const cloneStageExercise = (exercise: Exercise, id: string, title: string): Exercise => ({ ...exercise, id, title });

const findSentenceWithPhrase = (content: string, phrase: string): string | null => {
  const phraseIndex = content.indexOf(phrase);
  if (phraseIndex < 0) return null;

  const before = content.slice(0, phraseIndex);
  const after = content.slice(phraseIndex + phrase.length);
  const boundary = /[.!?؟\n]/g;
  let start = 0;
  let match: RegExpExecArray | null;
  while ((match = boundary.exec(before)) !== null) start = match.index + match[0].length;

  const afterBoundary = after.search(/[.!?؟\n]/);
  const end = afterBoundary >= 0
    ? phraseIndex + phrase.length + afterBoundary + 1
    : content.length;
  return content.slice(start, end).trim();
};

const collectMatchingPairs = (
  kind: AnchorKind,
  chapterId: number,
  sourceIndex: number,
  storyPages: PageData[],
): { left: string; right: string }[] => {
  const chapter = storyPages.find((page) => page.id === chapterId);
  if (!chapter) return [];
  const orderedPages = [chapter, ...storyPages.filter((page) => page.id !== chapterId)];
  const pairs: { left: string; right: string }[] = [];
  const seen = new Set<string>();

  orderedPages.forEach((page, pageOrder) => {
    const raw = kind === 'h'
      ? (page.hotspots || []).map((item) => ({ left: item.title, right: item.description }))
      : (page.vocabulary || []).map((item) => ({ left: item.word, right: item.definition }));
    const ordered = pageOrder === 0 ? rotate(raw, sourceIndex) : raw;
    ordered.forEach((pair) => {
      if (pairs.length >= 3) return;
      const key = pair.left.trim();
      if (!key || seen.has(key)) return;
      seen.add(key);
      pairs.push(pair);
    });
  });

  return pairs.slice(0, 3);
};

const buildTapRevealVariant = (
  kind: AnchorKind,
  page: PageData,
  sourceIndex: number,
  language: A2GoldLanguage,
): Exercise | null => {
  const source = kind === 'h'
    ? page.hotspots?.[sourceIndex]
      ? { prompt: page.hotspots[sourceIndex].title, answer: page.hotspots[sourceIndex].description }
      : null
    : page.vocabulary?.[sourceIndex]
      ? { prompt: page.vocabulary[sourceIndex].word, answer: page.vocabulary[sourceIndex].definition }
      : null;
  if (!source) return null;

  return {
    id: `parallel-tap-${page.id}-${sourceIndex}`,
    type: 'tap-reveal',
    title: language === 'ar' ? 'فكّر ثم اكشف' : 'Think, Then Reveal',
    instructions: language === 'ar' ? 'فكّر في الإجابة أولًا، ثم اكشفها وقارنها بالفصل.' : 'Think of the answer first, then reveal it and compare it with the chapter.',
    question: language === 'ar'
      ? `ماذا يقول ${chapterLabel(page.id, language)} عن «${source.prompt}»؟`
      : `What does ${chapterLabel(page.id, language)} say about “${source.prompt}”?`,
    correctAnswer: source.answer,
    explanation: source.answer,
    feedback: {
      correct: language === 'ar' ? 'جيد. قارن إجابتك بمعلومة الفصل.' : 'Good. Compare your answer with the chapter detail.',
      incorrect: language === 'ar' ? 'ارجع إلى الفصل واقرأ المعلومة مرة أخرى.' : 'Return to the chapter and read the detail once more.',
    },
    tapRevealItems: [{ question: source.prompt, answer: source.answer }],
  };
};

const buildFillBlankVariant = (
  kind: AnchorKind,
  page: PageData,
  sourceIndex: number,
  language: A2GoldLanguage,
): Exercise | null => {
  if (kind !== 'v') return null;
  const entry = page.vocabulary?.[sourceIndex];
  if (!entry) return null;
  const sentence = findSentenceWithPhrase(page.content || '', entry.word);
  if (!sentence || !sentence.includes(entry.word)) return null;

  return {
    id: `parallel-fill-${page.id}-${sourceIndex}`,
    type: 'fill-blanks',
    title: language === 'ar' ? 'أكمل من الفصل' : 'Complete from the Chapter',
    instructions: language === 'ar' ? 'استخدم كلمة من Word Notes لإكمال الجملة كما وردت في الفصل.' : 'Use a Word Notes word to complete the sentence as it appears in the chapter.',
    question: language === 'ar' ? 'ما الكلمة الناقصة؟' : 'Which word is missing?',
    fillBlanksText: sentence.replace(entry.word, '[blank]'),
    correctAnswer: entry.word,
    explanation: `${entry.word}: ${entry.definition}`,
    feedback: {
      correct: language === 'ar' ? 'صحيح. هذه الكلمة موجودة في جملة الفصل.' : 'Correct. This word appears in the chapter sentence.',
      incorrect: language === 'ar' ? `راجع Word Notes في ${chapterLabel(page.id, language)}.` : `Check the Word Notes in ${chapterLabel(page.id, language)}.`,
    },
  };
};

const buildMatchingVariant = (
  kind: AnchorKind,
  page: PageData,
  sourceIndex: number,
  storyPages: PageData[],
  language: A2GoldLanguage,
): Exercise | null => {
  const pairs = collectMatchingPairs(kind, page.id, sourceIndex, storyPages);
  if (pairs.length < 3) return null;
  const correctAnswer = Object.fromEntries(pairs.map((pair) => [pair.left, pair.right]));

  return {
    id: `parallel-match-${page.id}-${sourceIndex}`,
    type: 'matching',
    title: language === 'ar' ? 'صل المعلومات' : 'Match the Information',
    instructions: language === 'ar'
      ? (kind === 'v' ? 'صل الكلمات بمعانيها في Word Notes.' : 'صل عناوين الفصول بالمعلومات الصحيحة.')
      : (kind === 'v' ? 'Match the Word Notes words with their meanings.' : 'Match the chapter headings with the correct details.'),
    question: language === 'ar' ? 'صل كل عنصر بالإجابة الصحيحة.' : 'Match each item with the correct answer.',
    matchingPairs: pairs,
    correctAnswer,
    explanation: language === 'ar' ? 'جميع الأزواج مأخوذة من الفصول وWord Notes.' : 'All pairs come from the story chapters and Word Notes.',
    feedback: {
      correct: language === 'ar' ? 'صحيح. أكملت المطابقة.' : 'Correct. You completed the matching task.',
      incorrect: language === 'ar' ? 'راجع الفصول أو Word Notes ثم حاول مرة أخرى.' : 'Check the chapters or Word Notes and try again.',
    },
  };
};

const buildTrueFalseVariant = (
  kind: AnchorKind,
  page: PageData,
  sourceIndex: number,
  storyPages: PageData[],
  language: A2GoldLanguage,
): Exercise | null => {
  const isCorrect = (page.id + sourceIndex) % 2 === 0;
  let prompt = '';
  let correctDetail = '';
  let falseDetail = '';

  if (kind === 'h') {
    const source = page.hotspots?.[sourceIndex];
    if (!source) return null;
    correctDetail = source.description;
    falseDetail = storyPages
      .flatMap((item) => item.hotspots || [])
      .find((item) => item.description !== correctDetail)?.description || '';
    prompt = source.title;
  } else {
    const source = page.vocabulary?.[sourceIndex];
    if (!source) return null;
    correctDetail = source.definition;
    falseDetail = storyPages
      .flatMap((item) => item.vocabulary || [])
      .find((item) => item.definition !== correctDetail)?.definition || '';
    prompt = source.word;
  }

  if (!falseDetail) return null;
  const shownDetail = isCorrect ? correctDetail : falseDetail;
  return {
    id: `parallel-tf-${page.id}-${sourceIndex}`,
    type: 'true-false',
    title: language === 'ar' ? 'صحيح أم خطأ' : 'True or False',
    instructions: language === 'ar' ? 'حدد هل العبارة توافق معلومات الفصل.' : 'Decide whether the statement matches the chapter information.',
    question: language === 'ar'
      ? `في ${chapterLabel(page.id, language)}، ترتبط «${prompt}» بهذه المعلومة: ${shownDetail}`
      : `In ${chapterLabel(page.id, language)}, “${prompt}” is connected with this detail: ${shownDetail}`,
    correctAnswer: isCorrect,
    explanation: correctDetail,
    feedback: {
      correct: language === 'ar' ? 'صحيح. قارنت العبارة بمعلومة الفصل.' : 'Correct. You compared the statement with the chapter detail.',
      incorrect: language === 'ar' ? 'ارجع إلى الفصل وابحث عن المعلومة الصحيحة.' : 'Return to the chapter and find the correct detail.',
    },
  };
};

const buildVariantExercise = (
  anchor: ParallelAnchor,
  storyPages: PageData[],
  language: A2GoldLanguage,
  desiredType: VariedExerciseType,
): Exercise | null => {
  const parsed = parseAnchorKey(anchor.key);
  if (!parsed) return null;
  const page = storyPages.find((item) => item.id === parsed.chapterId);
  if (!page) return null;

  if (desiredType === 'multiple-choice') return language === 'ar' ? anchor.arabic : anchor.english;
  if (desiredType === 'tap-reveal') return buildTapRevealVariant(parsed.kind, page, parsed.sourceIndex, language);
  if (desiredType === 'fill-blanks') return buildFillBlankVariant(parsed.kind, page, parsed.sourceIndex, language);
  if (desiredType === 'matching') return buildMatchingVariant(parsed.kind, page, parsed.sourceIndex, storyPages, language);
  return buildTrueFalseVariant(parsed.kind, page, parsed.sourceIndex, storyPages, language);
};

const buildVariantPair = (
  anchor: ParallelAnchor,
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  desiredType: VariedExerciseType,
): ParallelExercisePair => {
  const english = buildVariantExercise(anchor, englishStoryPages, 'en', desiredType);
  const arabic = buildVariantExercise(anchor, arabicStoryPages, 'ar', desiredType);
  if (!english || !arabic || english.type !== arabic.type) {
    return { key: anchor.key, chapterId: anchor.chapterId, english: anchor.english, arabic: anchor.arabic };
  }
  return { key: anchor.key, chapterId: anchor.chapterId, english, arabic };
};

const buildStagePairs = (
  anchors: ParallelAnchor[],
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  offset = 0,
): ParallelExercisePair[] => {
  let vocabularySeen = 0;
  let hotspotSeen = 0;
  const vocabularyTypes: VariedExerciseType[] = ['fill-blanks', 'matching', 'tap-reveal', 'multiple-choice', 'true-false'];
  const hotspotTypes: VariedExerciseType[] = ['tap-reveal', 'matching', 'true-false', 'multiple-choice'];

  return anchors.map((anchor) => {
    const parsed = parseAnchorKey(anchor.key);
    if (!parsed) return { key: anchor.key, chapterId: anchor.chapterId, english: anchor.english, arabic: anchor.arabic };
    const desired = parsed.kind === 'v'
      ? vocabularyTypes[(vocabularySeen++ + offset) % vocabularyTypes.length]
      : hotspotTypes[(hotspotSeen++ + offset) % hotspotTypes.length];
    return buildVariantPair(anchor, englishStoryPages, arabicStoryPages, desired);
  });
};

const toQuizQuestion = (exercise: Exercise, chapterId: number, language: A2GoldLanguage): QuizQuestion => {
  const correctIndex = typeof exercise.correctAnswer === 'number' ? exercise.correctAnswer : 0;
  return {
    question: exercise.question || '',
    options: (exercise.options || []).map((text, index) => ({ text, isCorrect: index === correctIndex })),
    hint: language === 'ar'
      ? `ارجع إلى ${chapterLabel(chapterId, language)} وابحث عن الدليل.`
      : `Go back to ${chapterLabel(chapterId, language)} and find the evidence.`,
  };
};

const buildReviewQuiz = (anchors: ParallelAnchor[], language: A2GoldLanguage): Exercise => ({
  id: 'parallel-review-quiz',
  type: 'quiz-game',
  title: language === 'ar' ? 'تحدي المراجعة' : 'Review Challenge',
  instructions: language === 'ar'
    ? 'أجب عن ثمانية أسئلة من الفصول. إذا أخطأت، ارجع إلى الفصل ثم حاول مرة أخرى.'
    : 'Answer eight chapter-based questions. If you make a mistake, go back to the chapter and try again.',
  question: language === 'ar' ? 'هل تتذكر المعلومات والكلمات الأساسية؟' : 'Can you remember the key facts and words?',
  correctAnswer: null,
  explanation: language === 'ar'
    ? 'كل سؤال مبني على معلومة أو كلمة موجودة في فصول الكتاب.'
    : 'Every question comes from a fact or word in the story chapters.',
  feedback: {
    correct: language === 'ar' ? 'جيد. استخدمت معلومات الفصل.' : 'Good. You used the chapter information.',
    incorrect: language === 'ar' ? 'ارجع إلى الفصل وابحث عن الدليل ثم حاول مرة أخرى.' : 'Go back to the chapter, find the evidence, and try again.',
  },
  hints: language === 'ar'
    ? ['استخدم رقم الفصل في التلميح.', 'ابحث عن العنوان أو Word Notes.', 'اقرأ الدليل ثم حاول مرة أخرى.']
    : ['Use the chapter number in the hint.', 'Look for the heading or Word Notes.', 'Read the evidence and try again.'],
  quizQuestions: anchors.map((anchor) => toQuizQuestion(language === 'ar' ? anchor.arabic : anchor.english, anchor.chapterId, language)),
});

const buildVocabularyPairs = (
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  storyIds: number[],
): { english: NonNullable<PageData['vocabularyPairs']>; arabic: NonNullable<PageData['vocabularyPairs']> } => {
  const candidates: Array<{
    english: { word: string; meaning: string };
    arabic: { word: string; meaning: string };
  }> = [];

  storyIds.forEach((chapterId) => {
    const englishPage = englishStoryPages.find((page) => page.id === chapterId);
    const arabicPage = arabicStoryPages.find((page) => page.id === chapterId);
    if (!englishPage || !arabicPage) return;
    const count = Math.min(englishPage.vocabulary?.length || 0, arabicPage.vocabulary?.length || 0);
    for (let index = 0; index < count; index += 1) {
      const english = englishPage.vocabulary?.[index];
      const arabic = arabicPage.vocabulary?.[index];
      if (!english || !arabic) continue;
      candidates.push({
        english: { word: english.word, meaning: english.definition },
        arabic: { word: arabic.word, meaning: arabic.definition },
      });
    }
  });

  const selected = pickEvenly(candidates, 6);
  return {
    english: selected.map((item) => item.english),
    arabic: selected.map((item) => item.arabic),
  };
};

const stripDemoStorySync = (page: PageData): PageData => {
  if (page.type !== 'story' || !page.timedChunks?.length) return page;
  const demo = page.timedChunks.length === 1
    && page.timedChunks[0].start === 0
    && page.timedChunks[0].end <= 5
    && /(placeholder|تجريبي)/i.test(page.timedChunks[0].text || '');
  if (!demo) return page;
  const { timedChunks: _timedChunks, syncPoints: _syncPoints, ...withoutDemoSync } = page;
  return withoutDemoSync;
};

const applyLanguagePages = ({
  pages,
  storyIds,
  knowledgeCheckPageId,
  vocabularyPageId,
  reviewPageId,
  finalChallengePageId,
  quickPairs,
  knowledgePairs,
  reviewAnchors,
  finalPairs,
  vocabularyPairs,
  language,
}: {
  pages: PageData[];
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId: number;
  reviewPageId: number;
  finalChallengePageId: number;
  quickPairs: Map<number, ParallelExercisePair>;
  knowledgePairs: ParallelExercisePair[];
  reviewAnchors: ParallelAnchor[];
  finalPairs: ParallelExercisePair[];
  vocabularyPairs: NonNullable<PageData['vocabularyPairs']>;
  language: A2GoldLanguage;
}): PageData[] => {
  const staged = pages.map((rawPage) => {
    const page = stripDemoStorySync(rawPage);

    if (storyIds.includes(page.id)) {
      const pair = quickPairs.get(page.id);
      if (!pair) return page;
      const source = language === 'ar' ? pair.arabic : pair.english;
      return {
        ...page,
        exercises: [cloneStageExercise(source, `parallel-quick-${page.id}`, language === 'ar' ? 'تحدي سريع' : 'Quick Challenge')],
      };
    }

    if (page.id === knowledgeCheckPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'راجع ثماني معلومات وكلمات بأنواع مختلفة من الأنشطة. ارجع إلى الفصل عندما تحتاج إلى مساعدة.'
          : 'Review eight facts and words through different activity types. Return to the chapter whenever you need help.',
        exercises: knowledgePairs.map((pair, index) => cloneStageExercise(
          language === 'ar' ? pair.arabic : pair.english,
          `parallel-kc-${index + 1}`,
          language === 'ar' ? `تحقق من الفهم ${index + 1}` : `Knowledge Check ${index + 1}`,
        )),
      };
    }

    if (page.id === vocabularyPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'صل ست كلمات مختارة من فصول الكتاب بمعانيها.'
          : 'Match six selected words from the story chapters with their meanings.',
        vocabularyPairs,
      };
    }

    if (page.id === reviewPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'أكمل تحدي مراجعة سريعًا من ثمانية أسئلة مبنية على الفصول.'
          : 'Complete a fast eight-question Review Challenge built from the story chapters.',
        exercises: [buildReviewQuiz(reviewAnchors, language)],
      };
    }

    if (page.id === finalChallengePageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'اختبر تذكرك للقصة في عشرة أنشطة متنوعة مبنية على الفصول.'
          : 'Check what you remember in ten varied activities built from the story chapters.',
        exercises: finalPairs.map((pair, index) => cloneStageExercise(
          language === 'ar' ? pair.arabic : pair.english,
          `parallel-final-${index + 1}`,
          language === 'ar' ? `التحدي النهائي ${index + 1}` : `Final Challenge ${index + 1}`,
        )),
      };
    }

    return page;
  });

  return sanitizeA2PlaceholderMedia(staged);
};

const validateParallelOutput = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: A2GoldPageConfig,
): void => {
  const vocabularyPageId = config.knowledgeCheckPageId + 1;
  const requirePage = (pages: PageData[], id: number, language: string): PageData => {
    const page = pages.find((item) => item.id === id);
    if (!page) throw new Error(`A2 parallel learning: missing page ${id} in ${language}.`);
    return page;
  };

  const quickTypes = new Set<string>();
  config.storyIds.forEach((id) => {
    const en = requirePage(englishPages, id, 'English');
    const ar = requirePage(arabicPages, id, 'Arabic');
    if ((en.exercises?.length || 0) !== 1 || (ar.exercises?.length || 0) !== 1) {
      throw new Error(`A2 parallel learning: Chapter ${id} must have exactly one Quick Challenge in both languages.`);
    }
    if (en.exercises?.[0].type !== ar.exercises?.[0].type) {
      throw new Error(`A2 parallel learning: Chapter ${id} Quick Challenge types do not match.`);
    }
    if (en.exercises?.[0].type) quickTypes.add(en.exercises[0].type);
  });

  ['matching', 'fill-blanks', 'tap-reveal'].forEach((type) => {
    if (!quickTypes.has(type)) throw new Error(`A2 parallel learning: Quick Challenges must include ${type}.`);
  });

  const englishKnowledge = requirePage(englishPages, config.knowledgeCheckPageId, 'English');
  const arabicKnowledge = requirePage(arabicPages, config.knowledgeCheckPageId, 'Arabic');
  if (englishKnowledge.exercises?.length !== 8 || arabicKnowledge.exercises?.length !== 8) {
    throw new Error('A2 parallel learning: Knowledge Check must contain 8 questions in both languages.');
  }

  const englishVocabulary = requirePage(englishPages, vocabularyPageId, 'English');
  const arabicVocabulary = requirePage(arabicPages, vocabularyPageId, 'Arabic');
  if (englishVocabulary.vocabularyPairs?.length !== 6 || arabicVocabulary.vocabularyPairs?.length !== 6) {
    throw new Error('A2 parallel learning: Vocabulary Challenge must contain 6 pairs in both languages.');
  }

  const englishReview = requirePage(englishPages, config.reviewPageId, 'English').exercises?.[0];
  const arabicReview = requirePage(arabicPages, config.reviewPageId, 'Arabic').exercises?.[0];
  if (englishReview?.type !== 'quiz-game' || arabicReview?.type !== 'quiz-game'
    || englishReview.quizQuestions?.length !== 8 || arabicReview.quizQuestions?.length !== 8) {
    throw new Error('A2 parallel learning: Review Challenge must contain the same 8-question quiz in both languages.');
  }

  const englishFinal = requirePage(englishPages, config.finalChallengePageId, 'English');
  const arabicFinal = requirePage(arabicPages, config.finalChallengePageId, 'Arabic');
  if (englishFinal.exercises?.length !== 10 || arabicFinal.exercises?.length !== 10) {
    throw new Error('A2 parallel learning: Final Challenge must contain 10 questions in both languages.');
  }
};

/**
 * Builds the effective A2 learning layer for English and Arabic with one shared
 * algorithm. Each language reads only its own chapter hotspots, Word Notes and
 * story prose. Source coordinates stay paired, while activity types are varied
 * in the same pattern in both languages.
 */
export const applyA2ParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: A2GoldPageConfig;
}): ParallelLearningResult => {
  const englishStoryPages = storyPagesFor(englishPages, config.storyIds);
  const arabicStoryPages = storyPagesFor(arabicPages, config.storyIds);
  const anchors = buildParallelAnchors(englishStoryPages, arabicStoryPages, config.storyIds);

  if (anchors.length < 26) {
    throw new Error(`A2 parallel learning requires at least 26 paired chapter anchors; found ${anchors.length}.`);
  }

  const quickPairs = new Map<number, ParallelExercisePair>();
  config.storyIds.forEach((chapterId, index) => {
    const chapterAnchors = anchors.filter((anchor) => anchor.chapterId === chapterId);
    if (!chapterAnchors.length) throw new Error(`A2 parallel learning: no paired anchors for Chapter ${chapterId}.`);
    const desiredType = QUICK_VARIANTS[index % QUICK_VARIANTS.length];
    const preferred = desiredType === 'fill-blanks'
      ? chapterAnchors.find((anchor) => anchor.key.startsWith('v:'))
      : desiredType === 'tap-reveal' || desiredType === 'true-false'
        ? chapterAnchors.find((anchor) => anchor.key.startsWith('h:')) || chapterAnchors[0]
        : chapterAnchors[index % chapterAnchors.length];
    quickPairs.set(chapterId, buildVariantPair(preferred || chapterAnchors[0], englishStoryPages, arabicStoryPages, desiredType));
  });

  const usedKeys = new Set<string>();
  const knowledgeAnchors = selectStage(anchors, 8, usedKeys, 0);
  const reviewAnchors = selectStage(anchors, 8, usedKeys, Math.floor(anchors.length / 3));
  const finalAnchors = selectStage(anchors, 10, usedKeys, Math.floor((anchors.length * 2) / 3));
  const knowledgePairs = buildStagePairs(knowledgeAnchors, englishStoryPages, arabicStoryPages, 0);
  const finalPairs = buildStagePairs(finalAnchors, englishStoryPages, arabicStoryPages, 2);
  const vocabulary = buildVocabularyPairs(englishStoryPages, arabicStoryPages, config.storyIds);
  const vocabularyPageId = config.knowledgeCheckPageId + 1;

  const output: ParallelLearningResult = {
    englishPages: applyLanguagePages({
      pages: englishPages,
      storyIds: config.storyIds,
      knowledgeCheckPageId: config.knowledgeCheckPageId,
      vocabularyPageId,
      reviewPageId: config.reviewPageId,
      finalChallengePageId: config.finalChallengePageId,
      quickPairs,
      knowledgePairs,
      reviewAnchors,
      finalPairs,
      vocabularyPairs: vocabulary.english,
      language: 'en',
    }),
    arabicPages: applyLanguagePages({
      pages: arabicPages,
      storyIds: config.storyIds,
      knowledgeCheckPageId: config.knowledgeCheckPageId,
      vocabularyPageId,
      reviewPageId: config.reviewPageId,
      finalChallengePageId: config.finalChallengePageId,
      quickPairs,
      knowledgePairs,
      reviewAnchors,
      finalPairs,
      vocabularyPairs: vocabulary.arabic,
      language: 'ar',
    }),
  };

  validateParallelOutput(output.englishPages, output.arabicPages, config);
  return output;
};