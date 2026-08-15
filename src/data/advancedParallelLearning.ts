import type { Exercise, PageData, QuizQuestion } from '../types';
import { highlightPhraseMatches, highlightPhraseOccurs, normalizeHighlightText } from '../lib/highlightTextMatch';
import { sanitizeA2PlaceholderMedia } from './a2PlaceholderMedia';

export type AdvancedLevel = 'B1' | 'B2';
export type AdvancedLanguage = 'en' | 'ar';

export interface AdvancedParallelConfig {
  level: AdvancedLevel;
  storyIds: number[];
  knowledgeCheckPageId?: number;
  vocabularyPageId?: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
  knowledgeCount?: number;
  vocabularyCount?: number;
  reviewCount?: number;
  finalCount?: number;
}

interface ParallelResult {
  englishPages: PageData[];
  arabicPages: PageData[];
}

type AnchorKind = 'q' | 'h' | 'v';
type VariedExerciseType = 'multiple-choice' | 'true-false' | 'matching' | 'fill-blanks' | 'tap-reveal';

type ParallelAnchor = {
  key: string;
  kind: AnchorKind;
  chapterId: number;
  sourceIndex: number;
  english: Exercise;
  arabic: Exercise;
};

type ParallelPair = {
  key: string;
  chapterId: number;
  english: Exercise;
  arabic: Exercise;
};

const QUICK_VARIANTS: VariedExerciseType[] = [
  'multiple-choice',
  'fill-blanks',
  'matching',
  'tap-reveal',
  'true-false',
];

const copy = (level: AdvancedLevel, language: AdvancedLanguage) => {
  const isB2 = level === 'B2';
  if (language === 'ar') {
    return {
      quickTitle: isB2 ? 'تحدي الفصل — B2' : 'تحدي سريع — B1',
      knowledgeContent: isB2
        ? 'راجع ثماني نقاط من الأدلة والأسباب والمقارنات والمفردات في أنشطة متنوعة مبنية على الفصول.'
        : 'راجع ثماني معلومات وأسباب ونتائج ومفردات في أنشطة متنوعة مبنية على الفصول.',
      vocabularyContent: `صل عشر كلمات أو عبارات ${level} مختارة من الفصول بمعانيها في Word Notes.`,
      reviewTitle: isB2 ? 'تحدي المراجعة — B2' : 'تحدي المراجعة — B1',
      reviewContent: 'أكمل مراجعة من ثمانية أسئلة مبنية على فصول الكتاب، ثم عد إلى الدليل عند الحاجة.',
      finalContent: isB2
        ? 'أكمل عشرة أنشطة متنوعة تعتمد على أدلة القصة وتحليلها ومفرداتها.'
        : 'أكمل عشرة أنشطة متنوعة تغطي أحداث القصة وأسبابها ونتائجها ومفرداتها.',
      correct: 'صحيح. الإجابة مدعومة بالفصل.',
      retry: 'ارجع إلى الفصل وحدد الدليل ثم حاول مرة أخرى.',
    };
  }
  return {
    quickTitle: isB2 ? 'B2 Chapter Challenge' : 'B1 Quick Challenge',
    knowledgeContent: isB2
      ? 'Review eight pieces of evidence, causes, comparisons, and vocabulary through varied chapter-based activities.'
      : 'Review eight facts, causes, results, and vocabulary items through varied chapter-based activities.',
    vocabularyContent: `Match ten selected ${level} words or phrases from the chapters with their Word Notes meanings.`,
    reviewTitle: isB2 ? 'B2 Review Challenge' : 'B1 Review Challenge',
    reviewContent: 'Complete an eight-question review built from the book chapters, returning to the evidence when needed.',
    finalContent: isB2
      ? 'Complete ten varied activities grounded in the story evidence, analysis, and vocabulary.'
      : 'Complete ten varied activities covering story events, causes, results, and vocabulary.',
    correct: 'Correct. The answer is supported by the chapter.',
    retry: 'Return to the chapter, identify the evidence, and try again.',
  };
};

const chapterLabel = (chapterId: number, language: AdvancedLanguage): string =>
  language === 'ar' ? `الفصل ${chapterId}` : `Chapter ${chapterId}`;

const storyPagesFor = (pages: PageData[], storyIds: number[]): PageData[] =>
  storyIds
    .map((id) => pages.find((page) => page.id === id && page.type === 'story'))
    .filter((page): page is PageData => Boolean(page));

const uniqueStrings = (values: string[]): string[] => {
  const seen = new Set<string>();
  return values.filter((value) => {
    const key = value.trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const insertAt = <T,>(items: T[], item: T, index: number): T[] => {
  const output = [...items];
  output.splice(Math.max(0, Math.min(index, output.length)), 0, item);
  return output;
};

const rotate = <T,>(items: T[], offset: number): T[] => {
  if (!items.length) return [];
  const normalized = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(normalized), ...items.slice(0, normalized)];
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (count <= 0) return [];
  if (items.length < count) throw new Error(`Advanced parallel learning needs ${count} items; found ${items.length}.`);
  if (items.length === count) return items.slice();
  const output: T[] = [];
  const used = new Set<number>();
  for (let index = 0; index < count; index += 1) {
    let sourceIndex = Math.round(index * (items.length - 1) / (count - 1));
    while (used.has(sourceIndex) && sourceIndex + 1 < items.length) sourceIndex += 1;
    used.add(sourceIndex);
    output.push(items[sourceIndex]);
  }
  return output;
};

const selectStage = (
  anchors: ParallelAnchor[],
  count: number,
  usedKeys: Set<string>,
  offset: number,
): ParallelAnchor[] => {
  if (!count) return [];
  const available = rotate(anchors, offset).filter((anchor) => !usedKeys.has(anchor.key));
  if (available.length < count) {
    throw new Error(`Advanced parallel learning needs ${count} unused anchors but only ${available.length} remain.`);
  }
  const selected = pickEvenly(available, count);
  selected.forEach((anchor) => usedKeys.add(anchor.key));
  return selected;
};

const alignMultipleChoice = (
  exercise: Exercise,
  targetIndex: number,
  language: AdvancedLanguage,
  level: AdvancedLevel,
): Exercise => {
  const labels = copy(level, language);
  if (exercise.type === 'multiple-choice' && exercise.options?.length && typeof exercise.correctAnswer === 'number') {
    const correct = exercise.options[exercise.correctAnswer];
    const distractors = exercise.options.filter((_, index) => index !== exercise.correctAnswer);
    const options = insertAt(distractors, correct, Math.min(targetIndex, distractors.length));
    return {
      ...exercise,
      type: 'multiple-choice',
      options,
      correctAnswer: Math.min(targetIndex, distractors.length),
      feedback: {
        correct: exercise.feedback?.correct?.trim() || labels.correct,
        incorrect: exercise.feedback?.incorrect?.trim() || labels.retry,
      },
    };
  }

  if (exercise.type === 'true-false' && typeof exercise.correctAnswer === 'boolean') {
    const options = language === 'ar' ? ['صحيح', 'خطأ'] : ['True', 'False'];
    const correctText = exercise.correctAnswer ? options[0] : options[1];
    const wrongText = exercise.correctAnswer ? options[1] : options[0];
    const index = Math.min(targetIndex, 1);
    return {
      ...exercise,
      type: 'multiple-choice',
      options: insertAt([wrongText], correctText, index),
      correctAnswer: index,
      feedback: {
        correct: exercise.feedback?.correct?.trim() || labels.correct,
        incorrect: exercise.feedback?.incorrect?.trim() || labels.retry,
      },
    };
  }

  return exercise;
};

const buildHotspotMc = (
  page: PageData,
  hotspotIndex: number,
  storyPages: PageData[],
  language: AdvancedLanguage,
  level: AdvancedLevel,
): Exercise | null => {
  const hotspot = page.hotspots?.[hotspotIndex];
  if (!hotspot) return null;
  const distractors = uniqueStrings([
    ...(page.hotspots || []).filter((_, index) => index !== hotspotIndex).map((item) => item.description),
    ...storyPages.filter((item) => item.id !== page.id).flatMap((item) => (item.hotspots || []).map((entry) => entry.description)),
  ]).filter((value) => value !== hotspot.description).slice(0, 2);
  if (distractors.length < 2) return null;
  const correctIndex = (page.id + hotspotIndex) % 3;
  const labels = copy(level, language);
  return {
    id: `advanced-h-${page.id}-${hotspotIndex}`,
    type: 'multiple-choice',
    title: level === 'B2'
      ? (language === 'ar' ? 'دليل من الفصل' : 'Chapter Evidence')
      : (language === 'ar' ? 'تفصيل من الفصل' : 'Chapter Detail'),
    instructions: language === 'ar' ? 'اختر المعلومة التي يدعمها الفصل.' : 'Choose the detail supported by the chapter.',
    question: language === 'ar'
      ? `أي معلومة ترتبط بـ «${hotspot.title}» في ${chapterLabel(page.id, language)}؟`
      : `Which detail is connected with “${hotspot.title}” in ${chapterLabel(page.id, language)}?`,
    options: insertAt(distractors, hotspot.description, correctIndex),
    correctAnswer: correctIndex,
    explanation: hotspot.description,
    feedback: { correct: labels.correct, incorrect: labels.retry },
  };
};

const buildVocabularyMc = (
  page: PageData,
  vocabularyIndex: number,
  storyPages: PageData[],
  language: AdvancedLanguage,
  level: AdvancedLevel,
): Exercise | null => {
  const entry = page.vocabulary?.[vocabularyIndex];
  if (!entry) return null;
  const distractors = uniqueStrings([
    ...(page.vocabulary || []).filter((_, index) => index !== vocabularyIndex).map((item) => item.definition),
    ...storyPages.filter((item) => item.id !== page.id).flatMap((item) => (item.vocabulary || []).map((item) => item.definition)),
  ]).filter((value) => value !== entry.definition).slice(0, 2);
  if (distractors.length < 2) return null;
  const correctIndex = (page.id + vocabularyIndex + 1) % 3;
  const labels = copy(level, language);
  return {
    id: `advanced-v-${page.id}-${vocabularyIndex}`,
    type: 'multiple-choice',
    title: language === 'ar' ? 'المفردة في السياق' : 'Vocabulary in Context',
    instructions: language === 'ar' ? 'اختر معنى الكلمة كما تستخدمها Word Notes.' : 'Choose the Word Notes meaning used in the chapter.',
    question: language === 'ar'
      ? `ما معنى «${entry.word}» في ${chapterLabel(page.id, language)}؟`
      : `What does “${entry.word}” mean in ${chapterLabel(page.id, language)}?`,
    options: insertAt(distractors, entry.definition, correctIndex),
    correctAnswer: correctIndex,
    explanation: `${entry.word}: ${entry.definition}`,
    feedback: { correct: labels.correct, incorrect: labels.retry },
  };
};

const buildAnchors = (
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  storyIds: number[],
  level: AdvancedLevel,
): ParallelAnchor[] => {
  const perChapter = new Map<number, ParallelAnchor[]>();

  storyIds.forEach((chapterId) => {
    const en = englishStoryPages.find((page) => page.id === chapterId);
    const ar = arabicStoryPages.find((page) => page.id === chapterId);
    if (!en || !ar) throw new Error(`Advanced parallel learning: Chapter ${chapterId} is missing in one language.`);
    const chapterAnchors: ParallelAnchor[] = [];

    const enQuick = en.exercises?.[0];
    const arQuick = ar.exercises?.[0];
    if (enQuick && arQuick) {
      const targetIndex = chapterId % 3;
      const english = alignMultipleChoice(enQuick, targetIndex, 'en', level);
      const arabic = alignMultipleChoice(arQuick, targetIndex, 'ar', level);
      if (english.type === 'multiple-choice' && arabic.type === 'multiple-choice') {
        chapterAnchors.push({ key: `q:${chapterId}:0`, kind: 'q', chapterId, sourceIndex: 0, english, arabic });
      }
    }

    const hotspotCount = Math.min(en.hotspots?.length || 0, ar.hotspots?.length || 0);
    const vocabularyCount = Math.min(en.vocabulary?.length || 0, ar.vocabulary?.length || 0);
    const maxSlots = Math.max(hotspotCount, vocabularyCount);
    for (let index = 0; index < maxSlots; index += 1) {
      if (index < hotspotCount) {
        const english = buildHotspotMc(en, index, englishStoryPages, 'en', level);
        const arabic = buildHotspotMc(ar, index, arabicStoryPages, 'ar', level);
        if (english && arabic) chapterAnchors.push({ key: `h:${chapterId}:${index}`, kind: 'h', chapterId, sourceIndex: index, english, arabic });
      }
      if (index < vocabularyCount) {
        const english = buildVocabularyMc(en, index, englishStoryPages, 'en', level);
        const arabic = buildVocabularyMc(ar, index, arabicStoryPages, 'ar', level);
        if (english && arabic) chapterAnchors.push({ key: `v:${chapterId}:${index}`, kind: 'v', chapterId, sourceIndex: index, english, arabic });
      }
    }

    if (!chapterAnchors.length) throw new Error(`Advanced parallel learning: Chapter ${chapterId} has no paired learning anchors.`);
    perChapter.set(chapterId, chapterAnchors);
  });

  const output: ParallelAnchor[] = [];
  const max = Math.max(...storyIds.map((id) => perChapter.get(id)?.length || 0));
  for (let slot = 0; slot < max; slot += 1) {
    storyIds.forEach((chapterId) => {
      const anchor = perChapter.get(chapterId)?.[slot];
      if (anchor) output.push(anchor);
    });
  }
  return output;
};

const findSentenceWithPhrase = (content: string, phrase: string, language: AdvancedLanguage): string | null => {
  const sentences = content.match(/[^.!?؟\n]+[.!?؟]?/g)?.map((item) => item.trim()).filter(Boolean) || [];
  return sentences.find((sentence) => highlightPhraseOccurs(sentence, phrase, language)) || null;
};

const blankPhraseInSentence = (sentence: string, phrase: string, language: AdvancedLanguage): string | null => {
  if (sentence.includes(phrase)) return sentence.replace(phrase, '[blank]');
  const phraseTokenCount = normalizeHighlightText(phrase, language).split(' ').filter(Boolean).length;
  if (!phraseTokenCount) return null;
  const tokens = sentence.split(/\s+/);
  for (let index = 0; index <= tokens.length - phraseTokenCount; index += 1) {
    const candidate = tokens.slice(index, index + phraseTokenCount).join(' ');
    if (!highlightPhraseMatches(candidate, phrase, language)) continue;
    const first = tokens[index];
    const last = tokens[index + phraseTokenCount - 1];
    const leading = first.match(/^[^\p{L}\p{N}]*/u)?.[0] || '';
    const trailing = last.match(/[^\p{L}\p{N}]*$/u)?.[0] || '';
    tokens.splice(index, phraseTokenCount, `${leading}[blank]${trailing}`);
    return tokens.join(' ');
  }
  return null;
};

const chapterMatchingPairs = (page: PageData, kind: AnchorKind, sourceIndex: number) => {
  const hotspots = (page.hotspots || []).map((item) => ({ left: item.title, right: item.description }));
  const vocabulary = (page.vocabulary || []).map((item) => ({ left: item.word, right: item.definition }));
  const preferred = kind === 'v' ? vocabulary : hotspots;
  const secondary = kind === 'v' ? hotspots : vocabulary;
  const ordered = [...rotate(preferred, sourceIndex), ...secondary];
  const seen = new Set<string>();
  const pairs: { left: string; right: string }[] = [];
  for (const pair of ordered) {
    const key = pair.left.trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    pairs.push(pair);
    if (pairs.length === 3) break;
  }
  return pairs;
};

const buildTapReveal = (
  anchor: ParallelAnchor,
  page: PageData,
  language: AdvancedLanguage,
  level: AdvancedLevel,
): Exercise | null => {
  if (anchor.kind === 'q') return null;
  const source = anchor.kind === 'h'
    ? page.hotspots?.[anchor.sourceIndex]
      ? { prompt: page.hotspots[anchor.sourceIndex].title, answer: page.hotspots[anchor.sourceIndex].description }
      : null
    : page.vocabulary?.[anchor.sourceIndex]
      ? { prompt: page.vocabulary[anchor.sourceIndex].word, answer: page.vocabulary[anchor.sourceIndex].definition }
      : null;
  if (!source) return null;
  const labels = copy(level, language);
  return {
    id: `advanced-tap-${page.id}-${anchor.sourceIndex}`,
    type: 'tap-reveal',
    title: language === 'ar' ? 'فكّر، حدّد الدليل، ثم اكشف' : 'Think, Find Evidence, Then Reveal',
    instructions: language === 'ar'
      ? 'فكّر أولًا وحدد موضع الدليل في الفصل، ثم اكشف الإجابة.'
      : 'Think first and locate the evidence in the chapter, then reveal the answer.',
    question: language === 'ar'
      ? `ماذا يدعم ${chapterLabel(page.id, language)} بشأن «${source.prompt}»؟`
      : `What does ${chapterLabel(page.id, language)} support about “${source.prompt}”?`,
    correctAnswer: source.answer,
    explanation: source.answer,
    feedback: { correct: labels.correct, incorrect: labels.retry },
    tapRevealItems: [{ question: source.prompt, answer: source.answer }],
  };
};

const buildFillBlank = (
  anchor: ParallelAnchor,
  page: PageData,
  language: AdvancedLanguage,
  level: AdvancedLevel,
): Exercise | null => {
  if (anchor.kind !== 'v') return null;
  const entry = page.vocabulary?.[anchor.sourceIndex];
  if (!entry) return null;
  const sentence = findSentenceWithPhrase(page.content || '', entry.word, language);
  if (!sentence) return null;
  const fillBlanksText = blankPhraseInSentence(sentence, entry.word, language);
  if (!fillBlanksText?.includes('[blank]')) return null;
  const labels = copy(level, language);
  return {
    id: `advanced-fill-${page.id}-${anchor.sourceIndex}`,
    type: 'fill-blanks',
    title: language === 'ar' ? 'أكمل من نص الفصل' : 'Complete from the Chapter',
    instructions: language === 'ar' ? 'أكمل الجملة بالكلمة أو العبارة كما تظهر في الفصل.' : 'Complete the sentence with the word or phrase as it appears in the chapter.',
    question: language === 'ar' ? 'ما الكلمة أو العبارة الناقصة؟' : 'Which word or phrase is missing?',
    fillBlanksText,
    correctAnswer: entry.word,
    explanation: `${entry.word}: ${entry.definition}`,
    feedback: { correct: labels.correct, incorrect: labels.retry },
  };
};

const buildMatching = (
  anchor: ParallelAnchor,
  page: PageData,
  language: AdvancedLanguage,
  level: AdvancedLevel,
): Exercise | null => {
  if (anchor.kind === 'q') return null;
  const pairs = chapterMatchingPairs(page, anchor.kind, anchor.sourceIndex);
  if (pairs.length < 3) return null;
  const labels = copy(level, language);
  return {
    id: `advanced-match-${page.id}-${anchor.sourceIndex}`,
    type: 'matching',
    title: language === 'ar' ? 'صل الدليل والمعنى' : 'Match Evidence and Meaning',
    instructions: language === 'ar'
      ? 'صل كل كلمة أو فكرة من هذا الفصل بالدليل أو المعنى الصحيح.'
      : 'Match each key word or idea from this chapter with its correct evidence or meaning.',
    question: language === 'ar' ? 'صل كل عنصر بالإجابة الصحيحة.' : 'Match each item with the correct answer.',
    matchingPairs: pairs,
    correctAnswer: Object.fromEntries(pairs.map((pair) => [pair.left, pair.right])),
    explanation: language === 'ar'
      ? `كل الأزواج مأخوذة من ${chapterLabel(page.id, language)} وWord Notes الخاصة به.`
      : `All pairs come from ${chapterLabel(page.id, language)} and its Word Notes.`,
    feedback: { correct: labels.correct, incorrect: labels.retry },
  };
};

const buildTrueFalse = (
  anchor: ParallelAnchor,
  page: PageData,
  language: AdvancedLanguage,
  level: AdvancedLevel,
): Exercise | null => {
  if (anchor.kind === 'q') return null;
  const source = anchor.kind === 'h'
    ? page.hotspots?.[anchor.sourceIndex]
      ? { prompt: page.hotspots[anchor.sourceIndex].title, answer: page.hotspots[anchor.sourceIndex].description }
      : null
    : page.vocabulary?.[anchor.sourceIndex]
      ? { prompt: page.vocabulary[anchor.sourceIndex].word, answer: page.vocabulary[anchor.sourceIndex].definition }
      : null;
  if (!source) return null;
  const isCorrect = (page.id + anchor.sourceIndex) % 2 === 0;
  const labels = copy(level, language);
  const question = language === 'ar'
    ? (isCorrect
      ? `وفقًا لـ${chapterLabel(page.id, language)}، ترتبط «${source.prompt}» بهذه المعلومة: ${source.answer}`
      : `وفقًا لـ${chapterLabel(page.id, language)}، لا ترتبط «${source.prompt}» بهذه المعلومة: ${source.answer}`)
    : (isCorrect
      ? `According to ${chapterLabel(page.id, language)}, “${source.prompt}” is connected with this detail: ${source.answer}`
      : `According to ${chapterLabel(page.id, language)}, “${source.prompt}” is NOT connected with this detail: ${source.answer}`);
  return {
    id: `advanced-tf-${page.id}-${anchor.sourceIndex}`,
    type: 'true-false',
    title: language === 'ar' ? 'هل يدعم الفصل هذه العبارة؟' : 'Is This Supported?',
    instructions: language === 'ar' ? 'حدد هل العبارة مدعومة بمعلومة الفصل.' : 'Decide whether the statement is supported by the chapter.',
    question,
    correctAnswer: isCorrect,
    explanation: source.answer,
    feedback: { correct: labels.correct, incorrect: labels.retry },
  };
};

const buildVariant = (
  anchor: ParallelAnchor,
  storyPages: PageData[],
  language: AdvancedLanguage,
  level: AdvancedLevel,
  desired: VariedExerciseType,
): Exercise | null => {
  const page = storyPages.find((item) => item.id === anchor.chapterId);
  if (!page) return null;
  if (desired === 'multiple-choice') return language === 'ar' ? anchor.arabic : anchor.english;
  if (desired === 'tap-reveal') return buildTapReveal(anchor, page, language, level);
  if (desired === 'fill-blanks') return buildFillBlank(anchor, page, language, level);
  if (desired === 'matching') return buildMatching(anchor, page, language, level);
  return buildTrueFalse(anchor, page, language, level);
};

const buildVariantPair = (
  anchor: ParallelAnchor,
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  level: AdvancedLevel,
  desired: VariedExerciseType,
): ParallelPair => {
  const english = buildVariant(anchor, englishStoryPages, 'en', level, desired);
  const arabic = buildVariant(anchor, arabicStoryPages, 'ar', level, desired);
  if (!english || !arabic || english.type !== arabic.type) {
    return { key: anchor.key, chapterId: anchor.chapterId, english: anchor.english, arabic: anchor.arabic };
  }
  return { key: anchor.key, chapterId: anchor.chapterId, english, arabic };
};

const buildStagePairs = (
  anchors: ParallelAnchor[],
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  level: AdvancedLevel,
  offset: number,
): ParallelPair[] => {
  let vocabularySeen = 0;
  let hotspotSeen = 0;
  let authoredSeen = 0;
  const vocabularyTypes: VariedExerciseType[] = ['fill-blanks', 'matching', 'tap-reveal', 'multiple-choice', 'true-false'];
  const hotspotTypes: VariedExerciseType[] = ['tap-reveal', 'matching', 'true-false', 'multiple-choice'];
  return anchors.map((anchor) => {
    const desired = anchor.kind === 'v'
      ? vocabularyTypes[(vocabularySeen++ + offset) % vocabularyTypes.length]
      : anchor.kind === 'h'
        ? hotspotTypes[(hotspotSeen++ + offset) % hotspotTypes.length]
        : (authoredSeen++ % 2 === 0 ? 'multiple-choice' : 'multiple-choice');
    return buildVariantPair(anchor, englishStoryPages, arabicStoryPages, level, desired);
  });
};

const quizQuestionFromExercise = (
  exercise: Exercise,
  chapterId: number,
  language: AdvancedLanguage,
): QuizQuestion => {
  if (exercise.type === 'true-false' && typeof exercise.correctAnswer === 'boolean') {
    return {
      question: exercise.question || '',
      options: language === 'ar'
        ? [{ text: 'صحيح', isCorrect: exercise.correctAnswer }, { text: 'خطأ', isCorrect: !exercise.correctAnswer }]
        : [{ text: 'True', isCorrect: exercise.correctAnswer }, { text: 'False', isCorrect: !exercise.correctAnswer }],
      hint: language === 'ar'
        ? `ارجع إلى ${chapterLabel(chapterId, language)} وابحث عن الدليل.`
        : `Return to ${chapterLabel(chapterId, language)} and find the evidence.`,
    };
  }
  const correctIndex = typeof exercise.correctAnswer === 'number' ? exercise.correctAnswer : 0;
  return {
    question: exercise.question || '',
    options: (exercise.options || []).map((text, index) => ({ text, isCorrect: index === correctIndex })),
    hint: language === 'ar'
      ? `ارجع إلى ${chapterLabel(chapterId, language)} وابحث عن الدليل.`
      : `Return to ${chapterLabel(chapterId, language)} and find the evidence.`,
  };
};

const buildReviewQuiz = (
  anchors: ParallelAnchor[],
  language: AdvancedLanguage,
  level: AdvancedLevel,
): Exercise => {
  const labels = copy(level, language);
  return {
    id: `advanced-${level.toLowerCase()}-review`,
    type: 'quiz-game',
    title: labels.reviewTitle,
    instructions: language === 'ar'
      ? 'أجب عن ثمانية أسئلة، ثم ارجع إلى الفصل إذا أخطأت.'
      : 'Answer eight questions, returning to the chapter after a mistake.',
    question: language === 'ar' ? 'هل تستطيع ربط الإجابات بأدلة الفصول؟' : 'Can you connect each answer with chapter evidence?',
    correctAnswer: null,
    explanation: labels.reviewContent,
    feedback: { correct: labels.correct, incorrect: labels.retry },
    quizQuestions: anchors.map((anchor) => quizQuestionFromExercise(
      language === 'ar' ? anchor.arabic : anchor.english,
      anchor.chapterId,
      language,
    )),
  };
};

const buildVocabularyPairs = (
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  storyIds: number[],
  count: number,
) => {
  const candidates: Array<{
    english: { word: string; meaning: string };
    arabic: { word: string; meaning: string };
  }> = [];
  storyIds.forEach((chapterId) => {
    const en = englishStoryPages.find((page) => page.id === chapterId);
    const ar = arabicStoryPages.find((page) => page.id === chapterId);
    if (!en || !ar) return;
    const pairedCount = Math.min(en.vocabulary?.length || 0, ar.vocabulary?.length || 0);
    for (let index = 0; index < pairedCount; index += 1) {
      const english = en.vocabulary?.[index];
      const arabic = ar.vocabulary?.[index];
      if (!english || !arabic) continue;
      candidates.push({
        english: { word: english.word, meaning: english.definition },
        arabic: { word: arabic.word, meaning: arabic.definition },
      });
    }
  });
  const selected = pickEvenly(candidates, count);
  return {
    english: selected.map((item) => item.english),
    arabic: selected.map((item) => item.arabic),
  };
};

const cloneStage = (exercise: Exercise, id: string, title: string): Exercise => ({ ...exercise, id, title });

const applyLanguagePages = ({
  pages,
  config,
  quickPairs,
  knowledgePairs,
  reviewAnchors,
  finalPairs,
  vocabularyPairs,
  language,
}: {
  pages: PageData[];
  config: AdvancedParallelConfig;
  quickPairs: Map<number, ParallelPair>;
  knowledgePairs: ParallelPair[];
  reviewAnchors: ParallelAnchor[];
  finalPairs: ParallelPair[];
  vocabularyPairs: NonNullable<PageData['vocabularyPairs']>;
  language: AdvancedLanguage;
}): PageData[] => {
  const labels = copy(config.level, language);
  const staged = pages.map((page) => {
    if (config.storyIds.includes(page.id)) {
      const pair = quickPairs.get(page.id);
      if (!pair) return page;
      const exercise = language === 'ar' ? pair.arabic : pair.english;
      return {
        ...page,
        exercises: [cloneStage(exercise, `advanced-${config.level.toLowerCase()}-quick-${page.id}`, labels.quickTitle)],
      };
    }

    if (config.knowledgeCheckPageId && page.id === config.knowledgeCheckPageId) {
      return {
        ...page,
        content: labels.knowledgeContent,
        exercises: knowledgePairs.map((pair, index) => cloneStage(
          language === 'ar' ? pair.arabic : pair.english,
          `advanced-${config.level.toLowerCase()}-knowledge-${index + 1}`,
          language === 'ar' ? `تحقق من الفهم ${index + 1}` : `${config.level} Knowledge Check ${index + 1}`,
        )),
      };
    }

    if (config.vocabularyPageId && page.id === config.vocabularyPageId) {
      return { ...page, content: labels.vocabularyContent, vocabularyPairs };
    }

    if (page.id === config.reviewPageId) {
      return {
        ...page,
        title: labels.reviewTitle,
        content: labels.reviewContent,
        exercises: [buildReviewQuiz(reviewAnchors, language, config.level)],
      };
    }

    if (page.id === config.finalChallengePageId) {
      return {
        ...page,
        content: labels.finalContent,
        exercises: finalPairs.map((pair, index) => cloneStage(
          language === 'ar' ? pair.arabic : pair.english,
          `advanced-${config.level.toLowerCase()}-final-${index + 1}`,
          language === 'ar' ? `التحدي النهائي ${index + 1}` : `${config.level} Final Challenge ${index + 1}`,
        )),
      };
    }
    return page;
  });
  return sanitizeA2PlaceholderMedia(staged);
};

const validateExercisePair = (english: Exercise, arabic: Exercise, label: string): void => {
  if (english.type !== arabic.type) throw new Error(`[Advanced bilingual parity] ${label}: exercise types differ.`);
  if ((english.options?.length || 0) !== (arabic.options?.length || 0)) {
    throw new Error(`[Advanced bilingual parity] ${label}: option counts differ.`);
  }
  if (english.type === 'matching') {
    if ((english.matchingPairs?.length || 0) !== 3 || (arabic.matchingPairs?.length || 0) !== 3) {
      throw new Error(`[Advanced bilingual parity] ${label}: matching must contain three pairs in both languages.`);
    }
  }
  if (english.type === 'fill-blanks') {
    if (!english.fillBlanksText?.includes('[blank]') || !arabic.fillBlanksText?.includes('[blank]')) {
      throw new Error(`[Advanced bilingual parity] ${label}: fill-blank source sentence is missing.`);
    }
  }
  if (english.type === 'tap-reveal') {
    if ((english.tapRevealItems?.length || 0) !== (arabic.tapRevealItems?.length || 0) || !(english.tapRevealItems?.length)) {
      throw new Error(`[Advanced bilingual parity] ${label}: tap-reveal structures differ.`);
    }
  }
};

const validateOutput = (output: ParallelResult, config: AdvancedParallelConfig): void => {
  const quickTypes = new Set<string>();
  config.storyIds.forEach((chapterId) => {
    const en = output.englishPages.find((page) => page.id === chapterId)?.exercises?.[0];
    const ar = output.arabicPages.find((page) => page.id === chapterId)?.exercises?.[0];
    if (!en || !ar) throw new Error(`[Advanced bilingual parity] Chapter ${chapterId} Quick Challenge is missing.`);
    validateExercisePair(en, ar, `Chapter ${chapterId} Quick Challenge`);
    quickTypes.add(en.type);
  });
  ['matching', 'fill-blanks', 'tap-reveal'].forEach((type) => {
    if (!quickTypes.has(type)) throw new Error(`[Advanced bilingual parity] Quick Challenges do not include ${type}.`);
  });

  const knowledgeCount = config.knowledgeCheckPageId ? (config.knowledgeCount ?? 8) : 0;
  if (config.knowledgeCheckPageId) {
    const en = output.englishPages.find((page) => page.id === config.knowledgeCheckPageId)?.exercises || [];
    const ar = output.arabicPages.find((page) => page.id === config.knowledgeCheckPageId)?.exercises || [];
    if (en.length !== knowledgeCount || ar.length !== knowledgeCount) {
      throw new Error(`[Advanced bilingual parity] Knowledge Check must contain ${knowledgeCount} activities in both languages.`);
    }
    en.forEach((exercise, index) => validateExercisePair(exercise, ar[index], `Knowledge Check ${index + 1}`));
  }

  if (config.vocabularyPageId) {
    const expected = config.vocabularyCount ?? 10;
    const en = output.englishPages.find((page) => page.id === config.vocabularyPageId)?.vocabularyPairs || [];
    const ar = output.arabicPages.find((page) => page.id === config.vocabularyPageId)?.vocabularyPairs || [];
    if (en.length !== expected || ar.length !== expected) {
      throw new Error(`[Advanced bilingual parity] Vocabulary Challenge must contain ${expected} pairs in both languages.`);
    }
  }

  const reviewExpected = config.reviewCount ?? 8;
  const enReview = output.englishPages.find((page) => page.id === config.reviewPageId)?.exercises?.[0];
  const arReview = output.arabicPages.find((page) => page.id === config.reviewPageId)?.exercises?.[0];
  if (enReview?.type !== 'quiz-game' || arReview?.type !== 'quiz-game'
    || enReview.quizQuestions?.length !== reviewExpected || arReview.quizQuestions?.length !== reviewExpected) {
    throw new Error(`[Advanced bilingual parity] Review Challenge must contain ${reviewExpected} quiz questions in both languages.`);
  }

  const finalExpected = config.finalCount ?? 10;
  const enFinal = output.englishPages.find((page) => page.id === config.finalChallengePageId)?.exercises || [];
  const arFinal = output.arabicPages.find((page) => page.id === config.finalChallengePageId)?.exercises || [];
  if (enFinal.length !== finalExpected || arFinal.length !== finalExpected) {
    throw new Error(`[Advanced bilingual parity] Final Challenge must contain ${finalExpected} activities in both languages.`);
  }
  enFinal.forEach((exercise, index) => validateExercisePair(exercise, arFinal[index], `Final Challenge ${index + 1}`));
};

export const applyValidatedAdvancedParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: AdvancedParallelConfig;
}): ParallelResult => {
  const englishStoryPages = storyPagesFor(englishPages, config.storyIds);
  const arabicStoryPages = storyPagesFor(arabicPages, config.storyIds);
  if (englishStoryPages.length !== config.storyIds.length || arabicStoryPages.length !== config.storyIds.length) {
    throw new Error('[Advanced bilingual parity] One or more story chapters are missing.');
  }

  const anchors = buildAnchors(englishStoryPages, arabicStoryPages, config.storyIds, config.level);
  const quickPairs = new Map<number, ParallelPair>();
  const usedKeys = new Set<string>();

  config.storyIds.forEach((chapterId, index) => {
    const chapterAnchors = anchors.filter((anchor) => anchor.chapterId === chapterId);
    const desired = QUICK_VARIANTS[index % QUICK_VARIANTS.length];
    const preferred = desired === 'multiple-choice'
      ? chapterAnchors.find((anchor) => anchor.kind === 'q') || chapterAnchors[0]
      : desired === 'fill-blanks'
        ? chapterAnchors.find((anchor) => anchor.kind === 'v')
        : chapterAnchors.find((anchor) => anchor.kind === 'h') || chapterAnchors.find((anchor) => anchor.kind === 'v');
    const anchor = preferred || chapterAnchors[0];
    usedKeys.add(anchor.key);
    quickPairs.set(chapterId, buildVariantPair(anchor, englishStoryPages, arabicStoryPages, config.level, desired));
  });

  const knowledgeCount = config.knowledgeCheckPageId ? (config.knowledgeCount ?? 8) : 0;
  const reviewCount = config.reviewCount ?? 8;
  const finalCount = config.finalCount ?? 10;
  const knowledgeAnchors = selectStage(anchors, knowledgeCount, usedKeys, 0);
  const reviewAnchors = selectStage(anchors, reviewCount, usedKeys, Math.floor(anchors.length / 3));
  const finalAnchors = selectStage(anchors, finalCount, usedKeys, Math.floor((anchors.length * 2) / 3));
  const knowledgePairs = buildStagePairs(knowledgeAnchors, englishStoryPages, arabicStoryPages, config.level, 0);
  const finalPairs = buildStagePairs(finalAnchors, englishStoryPages, arabicStoryPages, config.level, 2);
  const vocabularyCount = config.vocabularyPageId ? (config.vocabularyCount ?? 10) : 0;
  const vocabulary = vocabularyCount
    ? buildVocabularyPairs(englishStoryPages, arabicStoryPages, config.storyIds, vocabularyCount)
    : { english: [], arabic: [] };

  const output: ParallelResult = {
    englishPages: applyLanguagePages({
      pages: englishPages,
      config,
      quickPairs,
      knowledgePairs,
      reviewAnchors,
      finalPairs,
      vocabularyPairs: vocabulary.english,
      language: 'en',
    }),
    arabicPages: applyLanguagePages({
      pages: arabicPages,
      config,
      quickPairs,
      knowledgePairs,
      reviewAnchors,
      finalPairs,
      vocabularyPairs: vocabulary.arabic,
      language: 'ar',
    }),
  };

  validateOutput(output, config);
  return output;
};
