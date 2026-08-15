import type { Exercise, Level, PageData, QuizQuestion, TeacherGuideSection } from '../types';
import { highlightPhraseMatches, highlightPhraseOccurs, normalizeHighlightText } from '../lib/highlightTextMatch';
import { buildLearningGuides } from './learningGuideSystem';

export type LearningLanguage = 'en' | 'ar';
export type LearningExerciseType = 'multiple-choice' | 'true-false' | 'matching' | 'fill-blanks' | 'tap-reveal';

export interface LearningSystemConfig {
  level: Level;
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
  knowledgeCount?: number;
  vocabularyCount?: number;
  reviewCount?: number;
  finalCount?: number;
}

export interface LearningSystemResult {
  englishPages: PageData[];
  arabicPages: PageData[];
  englishTeacherGuide: TeacherGuideSection[];
  arabicTeacherGuide: TeacherGuideSection[];
  englishSelfStudyGuide: TeacherGuideSection[];
  arabicSelfStudyGuide: TeacherGuideSection[];
}

type AnchorKind = 'h' | 'v' | 'q';

type LearningAnchor = {
  key: string;
  kind: AnchorKind;
  chapterId: number;
  sourceIndex: number;
  english: Exercise;
  arabic: Exercise;
};

type ExercisePair = {
  key: string;
  kind: AnchorKind;
  chapterId: number;
  sourceIndex: number;
  english: Exercise;
  arabic: Exercise;
};

type SourceFact = { prompt: string; answer: string };

const QUICK_VARIANTS: LearningExerciseType[] = [
  'tap-reveal',
  'fill-blanks',
  'matching',
  'multiple-choice',
  'true-false',
];

const defaultCounts = (config: LearningSystemConfig) => ({
  knowledge: config.knowledgeCount ?? 8,
  vocabulary: config.vocabularyCount ?? (config.level === 'A2' ? 6 : 10),
  review: config.reviewCount ?? 8,
  final: config.finalCount ?? 10,
});

const label = (chapterId: number, language: LearningLanguage): string =>
  language === 'ar' ? `الفصل ${chapterId}` : `Chapter ${chapterId}`;

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

const rotate = <T,>(items: T[], offset: number): T[] => {
  if (!items.length) return [];
  const normalized = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(normalized), ...items.slice(0, normalized)];
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (count <= 0) return [];
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

const storyPage = (pages: PageData[], chapterId: number): PageData | undefined =>
  pages.find((page) => page.type === 'story' && page.id === chapterId);

const requirePage = (pages: PageData[], id: number, language: string): PageData => {
  const page = pages.find((item) => item.id === id);
  if (!page) throw new Error(`[Learning System] ${language} page ${id} is missing.`);
  return page;
};

const answerShape = (exercise: Exercise): string => {
  if (typeof exercise.correctAnswer === 'number') return 'number';
  if (typeof exercise.correctAnswer === 'boolean') return 'boolean';
  if (typeof exercise.correctAnswer === 'string') return 'string';
  if (exercise.correctAnswer && typeof exercise.correctAnswer === 'object') return 'object';
  return String(exercise.correctAnswer);
};

const validateAuthoredPair = (english: Exercise, arabic: Exercise, chapterId: number): void => {
  if (english.type !== arabic.type) {
    throw new Error(`[Learning System] Chapter ${chapterId} authored fallback types differ.`);
  }
  if ((english.options?.length || 0) !== (arabic.options?.length || 0)) {
    throw new Error(`[Learning System] Chapter ${chapterId} authored fallback option counts differ.`);
  }
  if (answerShape(english) !== answerShape(arabic)) {
    throw new Error(`[Learning System] Chapter ${chapterId} authored fallback answer shapes differ.`);
  }
  if (
    (typeof english.correctAnswer === 'number' || typeof english.correctAnswer === 'boolean')
    && english.correctAnswer !== arabic.correctAnswer
  ) {
    throw new Error(`[Learning System] Chapter ${chapterId} authored fallback correct answers differ.`);
  }
};

const validateSourceParity = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: LearningSystemConfig,
): void => {
  config.storyIds.forEach((chapterId) => {
    const english = storyPage(englishPages, chapterId);
    const arabic = storyPage(arabicPages, chapterId);
    if (!english || !arabic) throw new Error(`[Learning System] Chapter ${chapterId} is missing in one language.`);

    const enHotspots = english.hotspots ?? [];
    const arHotspots = arabic.hotspots ?? [];
    if (enHotspots.length !== arHotspots.length) {
      throw new Error(`[Learning System] Chapter ${chapterId} hotspot counts differ: EN=${enHotspots.length}, AR=${arHotspots.length}.`);
    }
    enHotspots.forEach((hotspot, index) => {
      if (hotspot.id !== arHotspots[index]?.id) {
        throw new Error(`[Learning System] Chapter ${chapterId} hotspot ${index + 1} source IDs differ.`);
      }
    });

    const enVocabulary = english.vocabulary ?? [];
    const arVocabulary = arabic.vocabulary ?? [];
    if (enVocabulary.length !== arVocabulary.length) {
      throw new Error(`[Learning System] Chapter ${chapterId} Word Notes counts differ: EN=${enVocabulary.length}, AR=${arVocabulary.length}.`);
    }

    if (!enHotspots.length && !enVocabulary.length) {
      const enQuick = english.exercises?.[0];
      const arQuick = arabic.exercises?.[0];
      if (!enQuick || !arQuick) {
        throw new Error(`[Learning System] Chapter ${chapterId} has no hotspot, Word Note, or paired authored fallback.`);
      }
      validateAuthoredPair(enQuick, arQuick, chapterId);
    }
  });

  [
    config.knowledgeCheckPageId,
    config.vocabularyPageId,
    config.reviewPageId,
    ...config.glossaryPageIds,
    config.finalChallengePageId,
  ].filter((id): id is number => typeof id === 'number').forEach((id) => {
    requirePage(englishPages, id, 'English');
    requirePage(arabicPages, id, 'Arabic');
  });
};

const hotspotExercise = (
  page: PageData,
  sourceIndex: number,
  allStoryPages: PageData[],
  language: LearningLanguage,
): Exercise | null => {
  const hotspot = page.hotspots?.[sourceIndex];
  if (!hotspot) return null;
  const distractors = uniqueStrings([
    ...(page.hotspots ?? []).filter((_, index) => index !== sourceIndex).map((item) => item.description),
    ...allStoryPages.filter((item) => item.id !== page.id).flatMap((item) => (item.hotspots ?? []).map((entry) => entry.description)),
  ]).filter((value) => value !== hotspot.description).slice(0, 2);
  if (distractors.length < 2) return null;
  const correctIndex = (page.id + sourceIndex) % 3;
  return {
    id: `learning-h-${page.id}-${sourceIndex}`,
    type: 'multiple-choice',
    title: language === 'ar' ? 'تفصيل من الفصل' : 'Chapter Detail',
    instructions: language === 'ar' ? 'اختر المعلومة الموجودة في هذا الفصل.' : 'Choose the detail stated in this chapter.',
    question: language === 'ar'
      ? `أي معلومة ترتبط بـ «${hotspot.title}» في ${label(page.id, language)}؟`
      : `Which detail matches “${hotspot.title}” in ${label(page.id, language)}?`,
    options: insertAt(distractors, hotspot.description, correctIndex),
    correctAnswer: correctIndex,
    explanation: hotspot.description,
    feedback: {
      correct: language === 'ar' ? 'صحيح. هذه المعلومة موجودة في الفصل.' : 'Correct. This detail is stated in the chapter.',
      incorrect: language === 'ar'
        ? `ارجع إلى ${label(page.id, language)} وابحث عن المعلومة المرتبطة بهذه الفكرة.`
        : `Return to ${label(page.id, language)} and find the detail connected to this idea.`,
    },
  };
};

const vocabularyExercise = (
  page: PageData,
  sourceIndex: number,
  allStoryPages: PageData[],
  language: LearningLanguage,
): Exercise | null => {
  const entry = page.vocabulary?.[sourceIndex];
  if (!entry) return null;
  const distractors = uniqueStrings([
    ...(page.vocabulary ?? []).filter((_, index) => index !== sourceIndex).map((item) => item.definition),
    ...allStoryPages.filter((item) => item.id !== page.id).flatMap((item) => (item.vocabulary ?? []).map((item) => item.definition)),
  ]).filter((value) => value !== entry.definition).slice(0, 2);
  if (distractors.length < 2) return null;
  const correctIndex = (page.id + sourceIndex + 1) % 3;
  return {
    id: `learning-v-${page.id}-${sourceIndex}`,
    type: 'multiple-choice',
    title: language === 'ar' ? 'معنى الكلمة' : 'Word Meaning',
    instructions: language === 'ar' ? 'اختر المعنى المستخدم في الفصل.' : 'Choose the meaning used in the chapter.',
    question: language === 'ar'
      ? `ما معنى «${entry.word}» في ${label(page.id, language)}؟`
      : `What does “${entry.word}” mean in ${label(page.id, language)}?`,
    options: insertAt(distractors, entry.definition, correctIndex),
    correctAnswer: correctIndex,
    explanation: `${entry.word}: ${entry.definition}`,
    feedback: {
      correct: language === 'ar' ? 'صحيح. هذا هو معنى الكلمة في ملاحظات المفردات.' : 'Correct. This is the Word Notes meaning.',
      incorrect: language === 'ar'
        ? `راجع ملاحظات المفردات في ${label(page.id, language)} ثم حاول مرة أخرى.`
        : `Check the Word Notes in ${label(page.id, language)} and try again.`,
    },
  };
};

const buildAnchors = (
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  storyIds: number[],
): LearningAnchor[] => {
  const byChapter = new Map<number, LearningAnchor[]>();

  storyIds.forEach((chapterId) => {
    const en = storyPage(englishStoryPages, chapterId);
    const ar = storyPage(arabicStoryPages, chapterId);
    if (!en || !ar) return;
    const chapterAnchors: LearningAnchor[] = [];

    (en.hotspots ?? []).forEach((_, sourceIndex) => {
      const english = hotspotExercise(en, sourceIndex, englishStoryPages, 'en');
      const arabic = hotspotExercise(ar, sourceIndex, arabicStoryPages, 'ar');
      if (english && arabic) chapterAnchors.push({ key: `h:${chapterId}:${sourceIndex}`, kind: 'h', chapterId, sourceIndex, english, arabic });
    });

    (en.vocabulary ?? []).forEach((_, sourceIndex) => {
      const english = vocabularyExercise(en, sourceIndex, englishStoryPages, 'en');
      const arabic = vocabularyExercise(ar, sourceIndex, arabicStoryPages, 'ar');
      if (english && arabic) chapterAnchors.push({ key: `v:${chapterId}:${sourceIndex}`, kind: 'v', chapterId, sourceIndex, english, arabic });
    });

    const enQuick = en.exercises?.[0];
    const arQuick = ar.exercises?.[0];
    if (enQuick && arQuick) {
      validateAuthoredPair(enQuick, arQuick, chapterId);
      chapterAnchors.push({ key: `q:${chapterId}:0`, kind: 'q', chapterId, sourceIndex: 0, english: enQuick, arabic: arQuick });
    }

    if (!chapterAnchors.length) throw new Error(`[Learning System] No paired learning source for Chapter ${chapterId}.`);
    byChapter.set(chapterId, chapterAnchors);
  });

  const output: LearningAnchor[] = [];
  const max = Math.max(0, ...storyIds.map((id) => byChapter.get(id)?.length ?? 0));
  for (let slot = 0; slot < max; slot += 1) {
    storyIds.forEach((chapterId) => {
      const anchor = byChapter.get(chapterId)?.[slot];
      if (anchor) output.push(anchor);
    });
  }
  return output;
};

const sourceFact = (anchor: LearningAnchor, page: PageData): SourceFact | null => {
  if (anchor.kind === 'h') {
    const hotspot = page.hotspots?.[anchor.sourceIndex];
    return hotspot ? { prompt: hotspot.title, answer: hotspot.description } : null;
  }
  if (anchor.kind === 'v') {
    const entry = page.vocabulary?.[anchor.sourceIndex];
    return entry ? { prompt: entry.word, answer: entry.definition } : null;
  }
  return null;
};

const findSentenceWithPhrase = (content: string, phrase: string, language: LearningLanguage): string | null => {
  const sentences = content.match(/[^.!?؟\n]+[.!?؟]?/g)?.map((item) => item.trim()).filter(Boolean) ?? [];
  return sentences.find((sentence) => highlightPhraseOccurs(sentence, phrase, language)) ?? null;
};

const blankPhraseInSentence = (sentence: string, phrase: string, language: LearningLanguage): string | null => {
  if (sentence.includes(phrase)) return sentence.replace(phrase, '[blank]');
  const phraseTokenCount = normalizeHighlightText(phrase, language).split(' ').filter(Boolean).length;
  if (!phraseTokenCount) return null;
  const tokens = sentence.split(/\s+/);
  for (let index = 0; index <= tokens.length - phraseTokenCount; index += 1) {
    const candidate = tokens.slice(index, index + phraseTokenCount).join(' ');
    if (!highlightPhraseMatches(candidate, phrase, language)) continue;
    const first = tokens[index];
    const last = tokens[index + phraseTokenCount - 1];
    const leading = first.match(/^[^\p{L}\p{N}]*/u)?.[0] ?? '';
    const trailing = last.match(/[^\p{L}\p{N}]*$/u)?.[0] ?? '';
    tokens.splice(index, phraseTokenCount, `${leading}[blank]${trailing}`);
    return tokens.join(' ');
  }
  return null;
};

const matchingPairs = (anchor: LearningAnchor, page: PageData): { left: string; right: string }[] => {
  const hotspotPairs = (page.hotspots ?? []).map((item) => ({ left: item.title, right: item.description }));
  const vocabularyPairs = (page.vocabulary ?? []).map((item) => ({ left: item.word, right: item.definition }));
  const preferred = anchor.kind === 'h' ? hotspotPairs : vocabularyPairs;
  const secondary = anchor.kind === 'h' ? vocabularyPairs : hotspotPairs;
  const ordered = [...rotate(preferred, anchor.sourceIndex), ...secondary];
  const seen = new Set<string>();
  const result: { left: string; right: string }[] = [];
  for (const pair of ordered) {
    const key = pair.left.trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(pair);
    if (result.length === 3) break;
  }
  return result;
};

const tapReveal = (anchor: LearningAnchor, page: PageData, language: LearningLanguage): Exercise | null => {
  const source = sourceFact(anchor, page);
  if (!source) return null;
  return {
    id: `learning-tap-${page.id}-${anchor.sourceIndex}`,
    type: 'tap-reveal',
    title: language === 'ar' ? 'فكّر ثم اكشف' : 'Think, Then Reveal',
    instructions: language === 'ar' ? 'فكّر في الإجابة أولًا، ثم اكشفها وقارنها بالفصل.' : 'Think first, then reveal the answer and compare it with the chapter.',
    question: language === 'ar' ? `ماذا يقول ${label(page.id, language)} عن «${source.prompt}»؟` : `What does ${label(page.id, language)} say about “${source.prompt}”?`,
    correctAnswer: source.answer,
    explanation: source.answer,
    feedback: {
      correct: language === 'ar' ? 'جيد. قارن إجابتك بمعلومة الفصل.' : 'Good. Compare your answer with the chapter detail.',
      incorrect: language === 'ar' ? 'ارجع إلى الفصل واقرأ المعلومة مرة أخرى.' : 'Return to the chapter and read the detail again.',
    },
    tapRevealItems: [{ question: source.prompt, answer: source.answer }],
  };
};

const fillBlank = (anchor: LearningAnchor, page: PageData, language: LearningLanguage): Exercise | null => {
  if (anchor.kind !== 'v') return null;
  const entry = page.vocabulary?.[anchor.sourceIndex];
  if (!entry) return null;
  const sentence = findSentenceWithPhrase(page.content ?? '', entry.word, language);
  if (!sentence) return null;
  const fillBlanksText = blankPhraseInSentence(sentence, entry.word, language);
  if (!fillBlanksText?.includes('[blank]')) return null;
  return {
    id: `learning-fill-${page.id}-${anchor.sourceIndex}`,
    type: 'fill-blanks',
    title: language === 'ar' ? 'أكمل من الفصل' : 'Complete from the Chapter',
    instructions: language === 'ar' ? 'استخدم كلمة من ملاحظات المفردات لإكمال الجملة كما وردت في الفصل.' : 'Use a Word Notes word to complete the sentence as it appears in the chapter.',
    question: language === 'ar' ? 'ما الكلمة الناقصة؟' : 'Which word is missing?',
    fillBlanksText,
    correctAnswer: entry.word,
    explanation: `${entry.word}: ${entry.definition}`,
    feedback: {
      correct: language === 'ar' ? 'صحيح. هذه الكلمة موجودة في جملة الفصل.' : 'Correct. This word appears in the chapter sentence.',
      incorrect: language === 'ar' ? `راجع ملاحظات المفردات في ${label(page.id, language)}.` : `Check the Word Notes in ${label(page.id, language)}.`,
    },
  };
};

const matching = (anchor: LearningAnchor, page: PageData, language: LearningLanguage): Exercise | null => {
  if (anchor.kind === 'q') return null;
  const pairs = matchingPairs(anchor, page);
  if (pairs.length < 3) return null;
  return {
    id: `learning-match-${page.id}-${anchor.sourceIndex}`,
    type: 'matching',
    title: language === 'ar' ? 'صل المعلومات' : 'Match the Information',
    instructions: language === 'ar' ? 'صل كل كلمة أو فكرة من هذا الفصل بالمعلومة أو المعنى الصحيح.' : 'Match each key word or idea from this chapter with its correct detail or meaning.',
    question: language === 'ar' ? 'صل كل عنصر بالإجابة الصحيحة.' : 'Match each item with the correct answer.',
    matchingPairs: pairs,
    correctAnswer: Object.fromEntries(pairs.map((pair) => [pair.left, pair.right])),
    explanation: language === 'ar' ? `جميع الأزواج مأخوذة من ${label(page.id, language)} وملاحظات المفردات الخاصة به.` : `All pairs come from ${label(page.id, language)} and its Word Notes.`,
    feedback: {
      correct: language === 'ar' ? 'صحيح. أكملت المطابقة.' : 'Correct. You completed the matching task.',
      incorrect: language === 'ar' ? `راجع ${label(page.id, language)} وملاحظات المفردات ثم حاول مرة أخرى.` : `Check ${label(page.id, language)} and its Word Notes, then try again.`,
    },
  };
};

const trueFalse = (anchor: LearningAnchor, page: PageData, language: LearningLanguage): Exercise | null => {
  const source = sourceFact(anchor, page);
  if (!source) return null;
  const positive = (page.id + anchor.sourceIndex) % 2 === 0;
  return {
    id: `learning-tf-${page.id}-${anchor.sourceIndex}`,
    type: 'true-false',
    title: language === 'ar' ? 'صحيح أم خطأ' : 'True or False',
    instructions: language === 'ar' ? 'قارن العبارة بالمعلومة الموجودة في الفصل.' : 'Compare the statement with the chapter information.',
    question: language === 'ar'
      ? positive
        ? `يذكر ${label(page.id, language)} هذه المعلومة عن «${source.prompt}»: ${source.answer}`
        : `لا يذكر ${label(page.id, language)} هذه المعلومة عن «${source.prompt}»: ${source.answer}`
      : positive
        ? `${label(page.id, language)} gives this detail about “${source.prompt}”: ${source.answer}`
        : `${label(page.id, language)} does not give this detail about “${source.prompt}”: ${source.answer}`,
    correctAnswer: positive,
    explanation: source.answer,
    feedback: {
      correct: language === 'ar' ? 'صحيح. قارنت العبارة بمعلومة الفصل.' : 'Correct. You compared the statement with the chapter detail.',
      incorrect: language === 'ar' ? 'ارجع إلى الفصل واقرأ المعلومة نفسها.' : 'Return to the chapter and read the exact detail again.',
    },
  };
};

const variant = (
  anchor: LearningAnchor,
  storyPages: PageData[],
  language: LearningLanguage,
  desired: LearningExerciseType,
): Exercise | null => {
  const page = storyPage(storyPages, anchor.chapterId);
  if (!page) return null;
  if (anchor.kind === 'q') return language === 'ar' ? anchor.arabic : anchor.english;
  if (desired === 'multiple-choice') return language === 'ar' ? anchor.arabic : anchor.english;
  if (desired === 'tap-reveal') return tapReveal(anchor, page, language);
  if (desired === 'fill-blanks') return fillBlank(anchor, page, language);
  if (desired === 'matching') return matching(anchor, page, language);
  return trueFalse(anchor, page, language);
};

const pairVariant = (
  anchor: LearningAnchor,
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  desired: LearningExerciseType,
): ExercisePair => {
  const english = variant(anchor, englishStoryPages, 'en', desired);
  const arabic = variant(anchor, arabicStoryPages, 'ar', desired);
  if (!english || !arabic || english.type !== arabic.type) {
    return { ...anchor };
  }
  return { ...anchor, english, arabic };
};

const selectStage = (
  anchors: LearningAnchor[],
  count: number,
  usedKeys: Set<string>,
  offset: number,
): LearningAnchor[] => {
  const ordered = rotate(anchors, offset).filter((anchor) => !usedKeys.has(anchor.key));
  const primary = ordered.filter((anchor) => anchor.kind !== 'q');
  const fallback = ordered.filter((anchor) => anchor.kind === 'q');
  const pool = primary.length >= count ? primary : [...primary, ...fallback];
  if (pool.length < count) {
    throw new Error(`[Learning System] Needs ${count} unused source anchors but only ${pool.length} remain.`);
  }
  const selected = pickEvenly(pool, count);
  selected.forEach((anchor) => usedKeys.add(anchor.key));
  return selected;
};

const stagePairs = (
  anchors: LearningAnchor[],
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  offset: number,
): ExercisePair[] => {
  let vocabularySeen = 0;
  let hotspotSeen = 0;
  const vocabularyTypes: LearningExerciseType[] = ['fill-blanks', 'matching', 'tap-reveal', 'multiple-choice', 'true-false'];
  const hotspotTypes: LearningExerciseType[] = ['tap-reveal', 'matching', 'true-false', 'multiple-choice'];
  return anchors.map((anchor) => {
    if (anchor.kind === 'q') return { ...anchor };
    const desired = anchor.kind === 'v'
      ? vocabularyTypes[(vocabularySeen++ + offset) % vocabularyTypes.length]
      : hotspotTypes[(hotspotSeen++ + offset) % hotspotTypes.length];
    return pairVariant(anchor, englishStoryPages, arabicStoryPages, desired);
  });
};

const toQuizQuestion = (exercise: Exercise, chapterId: number, language: LearningLanguage): QuizQuestion => {
  if (exercise.type === 'true-false' && typeof exercise.correctAnswer === 'boolean') {
    return {
      question: exercise.question ?? '',
      options: language === 'ar'
        ? [{ text: 'صحيح', isCorrect: exercise.correctAnswer }, { text: 'خطأ', isCorrect: !exercise.correctAnswer }]
        : [{ text: 'True', isCorrect: exercise.correctAnswer }, { text: 'False', isCorrect: !exercise.correctAnswer }],
      hint: language === 'ar' ? `ارجع إلى ${label(chapterId, language)} وابحث عن الدليل.` : `Return to ${label(chapterId, language)} and find the evidence.`,
    };
  }
  const correctIndex = typeof exercise.correctAnswer === 'number' ? exercise.correctAnswer : 0;
  return {
    question: exercise.question ?? '',
    options: (exercise.options ?? []).map((text, index) => ({ text, isCorrect: index === correctIndex })),
    hint: language === 'ar' ? `ارجع إلى ${label(chapterId, language)} وابحث عن الدليل.` : `Return to ${label(chapterId, language)} and find the evidence.`,
  };
};

const reviewQuiz = (anchors: LearningAnchor[], language: LearningLanguage, level: Level): Exercise => ({
  id: `learning-${level.toLowerCase()}-review`,
  type: 'quiz-game',
  title: language === 'ar' ? 'تحدي المراجعة' : 'Review Challenge',
  instructions: language === 'ar' ? 'أجب عن الأسئلة ثم ارجع إلى الفصل إذا أخطأت.' : 'Answer the questions and return to the chapter after a mistake.',
  question: language === 'ar' ? 'هل تستطيع ربط كل إجابة بدليل من الفصل؟' : 'Can you connect each answer with chapter evidence?',
  correctAnswer: null,
  explanation: language === 'ar' ? 'كل سؤال مبني على معلومة أو كلمة موجودة في فصول الكتاب.' : 'Every question comes from a fact or word in the story chapters.',
  feedback: {
    correct: language === 'ar' ? 'جيد. استخدمت معلومات الفصل.' : 'Good. You used the chapter information.',
    incorrect: language === 'ar' ? 'ارجع إلى الفصل وابحث عن الدليل ثم حاول مرة أخرى.' : 'Return to the chapter, find the evidence, and try again.',
  },
  quizQuestions: anchors.map((anchor) => toQuizQuestion(language === 'ar' ? anchor.arabic : anchor.english, anchor.chapterId, language)),
});

const vocabularyPairs = (
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  storyIds: number[],
  count: number,
) => {
  const candidates: Array<{ english: { word: string; meaning: string }; arabic: { word: string; meaning: string } }> = [];
  storyIds.forEach((chapterId) => {
    const en = storyPage(englishStoryPages, chapterId);
    const ar = storyPage(arabicStoryPages, chapterId);
    if (!en || !ar) return;
    (en.vocabulary ?? []).forEach((entry, index) => {
      const arabic = ar.vocabulary?.[index];
      if (!arabic) return;
      candidates.push({
        english: { word: entry.word, meaning: entry.definition },
        arabic: { word: arabic.word, meaning: arabic.definition },
      });
    });
  });
  if (candidates.length < count) {
    throw new Error(`[Learning System] Vocabulary Challenge needs ${count} paired Word Notes but only ${candidates.length} exist.`);
  }
  const selected = pickEvenly(candidates, count);
  return { english: selected.map((item) => item.english), arabic: selected.map((item) => item.arabic) };
};

const cleanArabicText = (value: string): string => value
  .replace(/وفقًا لـالفصل/g, 'وفقًا لما ورد في الفصل')
  .replace(/Word Notes/g, 'ملاحظات المفردات')
  .replace(/Quick Challenge/g, 'التحدي السريع');

const cleanArabicExercise = (exercise: Exercise): Exercise => ({
  ...exercise,
  title: exercise.title ? cleanArabicText(exercise.title) : exercise.title,
  instructions: exercise.instructions ? cleanArabicText(exercise.instructions) : exercise.instructions,
  question: exercise.question ? cleanArabicText(exercise.question) : exercise.question,
  explanation: exercise.explanation ? cleanArabicText(exercise.explanation) : exercise.explanation,
  feedback: {
    correct: cleanArabicText(exercise.feedback.correct ?? ''),
    incorrect: cleanArabicText(exercise.feedback.incorrect ?? ''),
  },
  matchingPairs: exercise.matchingPairs?.map((pair) => ({ left: cleanArabicText(pair.left), right: cleanArabicText(pair.right) })),
  tapRevealItems: exercise.tapRevealItems?.map((item) => ({ question: cleanArabicText(item.question), answer: cleanArabicText(item.answer) })),
  quizQuestions: exercise.quizQuestions?.map((question) => ({
    ...question,
    question: cleanArabicText(question.question),
    hint: cleanArabicText(question.hint),
    options: question.options.map((option) => ({ ...option, text: cleanArabicText(option.text) })),
  })),
});

const stripDemoSync = (page: PageData): PageData => {
  if (page.type !== 'story' || !page.timedChunks?.length) return page;
  const demo = page.timedChunks.length === 1
    && page.timedChunks[0].start === 0
    && page.timedChunks[0].end <= 5
    && /(placeholder|تجريبي)/i.test(page.timedChunks[0].text ?? '');
  if (!demo) return page;
  const { timedChunks: _timedChunks, syncPoints: _syncPoints, ...clean } = page;
  return clean;
};

const sanitizeMedia = (pages: PageData[]): PageData[] => {
  const fallbackImage = pages.find((page) => page.type === 'story' && page.image && !page.image.startsWith('https://picsum.photos/'))?.image ?? '';
  return pages.map((page) => {
    const image = page.image?.startsWith('https://picsum.photos/') ? fallbackImage : page.image;
    const audioUrl = page.audioUrl?.includes('soundhelix.com/examples/mp3/') ? '' : page.audioUrl;
    return image === page.image && audioUrl === page.audioUrl ? page : { ...page, image, audioUrl };
  });
};

const clone = (exercise: Exercise, id: string, title: string): Exercise => ({ ...exercise, id, title });

const applyPages = ({
  pages,
  config,
  quickPairs,
  knowledgePairs,
  reviewAnchors,
  finalPairs,
  vocabPairs,
  language,
}: {
  pages: PageData[];
  config: LearningSystemConfig;
  quickPairs: Map<number, ExercisePair>;
  knowledgePairs: ExercisePair[];
  reviewAnchors: LearningAnchor[];
  finalPairs: ExercisePair[];
  vocabPairs: NonNullable<PageData['vocabularyPairs']>;
  language: LearningLanguage;
}): PageData[] => {
  const counts = defaultCounts(config);
  const staged = pages.map((raw) => {
    const page = stripDemoSync(raw);
    if (config.storyIds.includes(page.id)) {
      const pair = quickPairs.get(page.id);
      if (!pair) return page;
      const exercise = language === 'ar' ? pair.arabic : pair.english;
      return { ...page, exercises: [clone(exercise, `learning-${config.level.toLowerCase()}-quick-${page.id}`, language === 'ar' ? 'تحدي سريع' : 'Quick Challenge')] };
    }
    if (page.id === config.knowledgeCheckPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? `راجع ${counts.knowledge} معلومات وكلمات بأنواع مختلفة من الأنشطة، وارجع إلى الفصل عند الحاجة.`
          : `Review ${counts.knowledge} facts and words through varied activities, returning to the chapter when needed.`,
        exercises: knowledgePairs.map((pair, index) => clone(
          language === 'ar' ? pair.arabic : pair.english,
          `learning-${config.level.toLowerCase()}-knowledge-${index + 1}`,
          language === 'ar' ? `تحقق من الفهم ${index + 1}` : `${config.level} Knowledge Check ${index + 1}`,
        )),
      };
    }
    if (config.vocabularyPageId && page.id === config.vocabularyPageId) {
      return {
        ...page,
        content: language === 'ar' ? `صل ${counts.vocabulary} كلمات مختارة من الفصول بمعانيها.` : `Match ${counts.vocabulary} selected chapter words with their meanings.`,
        vocabularyPairs: vocabPairs,
      };
    }
    if (page.id === config.reviewPageId) {
      return {
        ...page,
        title: language === 'ar' ? 'تحدي المراجعة' : `${config.level} Review Challenge`,
        content: language === 'ar' ? `أكمل مراجعة من ${counts.review} أسئلة مبنية على الفصول.` : `Complete a ${counts.review}-question review built from the story chapters.`,
        exercises: [reviewQuiz(reviewAnchors, language, config.level)],
      };
    }
    if (page.id === config.finalChallengePageId) {
      return {
        ...page,
        title: language === 'ar' ? 'التحدي النهائي' : `${config.level} Final Challenge`,
        content: language === 'ar' ? `اختبر فهمك في ${counts.final} أنشطة متنوعة مبنية على الفصول.` : `Check your understanding in ${counts.final} varied activities built from the story chapters.`,
        exercises: finalPairs.map((pair, index) => clone(
          language === 'ar' ? pair.arabic : pair.english,
          `learning-${config.level.toLowerCase()}-final-${index + 1}`,
          language === 'ar' ? `التحدي النهائي ${index + 1}` : `${config.level} Final Challenge ${index + 1}`,
        )),
      };
    }
    return page;
  });
  const cleaned = language === 'ar'
    ? staged.map((page) => ({
        ...page,
        content: page.type === 'story' ? page.content : cleanArabicText(page.content ?? ''),
        exercises: page.exercises?.map(cleanArabicExercise),
      }))
    : staged;
  return sanitizeMedia(cleaned);
};

const correctOptionIndex = (question: QuizQuestion): number => question.options.findIndex((option) => option.isCorrect);

const validateExercisePair = (english: Exercise, arabic: Exercise, context: string): void => {
  if (english.type !== arabic.type) throw new Error(`[Learning System] ${context} types differ.`);
  if ((english.options?.length ?? 0) !== (arabic.options?.length ?? 0)) throw new Error(`[Learning System] ${context} option counts differ.`);
  if (typeof english.correctAnswer !== typeof arabic.correctAnswer) throw new Error(`[Learning System] ${context} answer shapes differ.`);
  if (
    (typeof english.correctAnswer === 'number' || typeof english.correctAnswer === 'boolean')
    && english.correctAnswer !== arabic.correctAnswer
  ) throw new Error(`[Learning System] ${context} correct answers differ.`);
  if (english.type === 'matching') {
    const en = english.matchingPairs ?? [];
    const ar = arabic.matchingPairs ?? [];
    if (en.length < 3 || en.length !== ar.length) throw new Error(`[Learning System] ${context} matching structures differ.`);
  }
  if (english.type === 'fill-blanks' && (!english.fillBlanksText?.includes('[blank]') || !arabic.fillBlanksText?.includes('[blank]'))) {
    throw new Error(`[Learning System] ${context} fill-blank structure differs.`);
  }
  if (english.type === 'tap-reveal' && (!(english.tapRevealItems?.length) || english.tapRevealItems.length !== arabic.tapRevealItems?.length)) {
    throw new Error(`[Learning System] ${context} tap-reveal structure differs.`);
  }
};

const normalizedTokens = (value: string, language: LearningLanguage): Set<string> =>
  new Set(normalizeHighlightText(value, language).split(' ').filter((token) => token.length > 2));

const nearDuplicate = (left: string, right: string, language: LearningLanguage): boolean => {
  const a = normalizeHighlightText(left, language);
  const b = normalizeHighlightText(right, language);
  if (!a || !b) return false;
  if (a === b) return true;
  if (a.length >= 16 && b.length >= 16 && (a.includes(b) || b.includes(a))) return true;
  const at = normalizedTokens(left, language);
  const bt = normalizedTokens(right, language);
  if (at.size < 3 || bt.size < 3) return false;
  const intersection = [...at].filter((token) => bt.has(token)).length;
  const union = new Set([...at, ...bt]).size;
  return union > 0 && intersection / union >= 0.85;
};

const validateDistractors = (pages: PageData[], language: LearningLanguage): void => {
  const validateOptions = (options: Array<{ text: string; isCorrect: boolean }>, context: string) => {
    const correct = options.filter((option) => option.isCorrect);
    if (correct.length !== 1) throw new Error(`[Learning System] ${context} must have exactly one correct option.`);
    options.filter((option) => !option.isCorrect).forEach((option) => {
      if (nearDuplicate(option.text, correct[0].text, language)) {
        throw new Error(`[Learning System] ${context} contains a distractor too close to the correct answer.`);
      }
    });
  };
  pages.forEach((page) => page.exercises?.forEach((exercise, exerciseIndex) => {
    if (exercise.type === 'multiple-choice' && exercise.options?.length && typeof exercise.correctAnswer === 'number') {
      validateOptions(exercise.options.map((text, index) => ({ text, isCorrect: index === exercise.correctAnswer })), `Page ${page.id} activity ${exerciseIndex + 1}`);
    }
    exercise.quizQuestions?.forEach((question, questionIndex) => validateOptions(question.options, `Page ${page.id} review ${questionIndex + 1}`));
  }));
};

const validateOutput = (englishPages: PageData[], arabicPages: PageData[], config: LearningSystemConfig): void => {
  const counts = defaultCounts(config);
  const quickTypes = new Set<string>();
  config.storyIds.forEach((chapterId) => {
    const en = requirePage(englishPages, chapterId, 'English').exercises?.[0];
    const ar = requirePage(arabicPages, chapterId, 'Arabic').exercises?.[0];
    if (!en || !ar) throw new Error(`[Learning System] Chapter ${chapterId} Quick Challenge is missing.`);
    validateExercisePair(en, ar, `Chapter ${chapterId} Quick Challenge`);
    quickTypes.add(en.type);
  });

  if (config.storyIds.length >= 5) {
    ['matching', 'fill-blanks', 'tap-reveal'].forEach((type) => {
      if (!quickTypes.has(type)) throw new Error(`[Learning System] Quick Challenges do not include ${type}.`);
    });
  }

  const enKnowledge = requirePage(englishPages, config.knowledgeCheckPageId, 'English').exercises ?? [];
  const arKnowledge = requirePage(arabicPages, config.knowledgeCheckPageId, 'Arabic').exercises ?? [];
  if (enKnowledge.length !== counts.knowledge || arKnowledge.length !== counts.knowledge) {
    throw new Error(`[Learning System] Knowledge Check must contain ${counts.knowledge} activities in both languages.`);
  }
  enKnowledge.forEach((exercise, index) => validateExercisePair(exercise, arKnowledge[index], `Knowledge Check ${index + 1}`));

  if (config.vocabularyPageId) {
    const enVocabulary = requirePage(englishPages, config.vocabularyPageId, 'English').vocabularyPairs ?? [];
    const arVocabulary = requirePage(arabicPages, config.vocabularyPageId, 'Arabic').vocabularyPairs ?? [];
    if (enVocabulary.length !== counts.vocabulary || arVocabulary.length !== counts.vocabulary) {
      throw new Error(`[Learning System] Vocabulary Challenge must contain ${counts.vocabulary} pairs in both languages.`);
    }
  }

  const enReview = requirePage(englishPages, config.reviewPageId, 'English').exercises?.[0];
  const arReview = requirePage(arabicPages, config.reviewPageId, 'Arabic').exercises?.[0];
  if (enReview?.type !== 'quiz-game' || arReview?.type !== 'quiz-game'
    || enReview.quizQuestions?.length !== counts.review || arReview.quizQuestions?.length !== counts.review) {
    throw new Error(`[Learning System] Review Challenge must contain ${counts.review} questions in both languages.`);
  }
  enReview.quizQuestions.forEach((question, index) => {
    const arabic = arReview.quizQuestions?.[index];
    if (!arabic || question.options.length !== arabic.options.length || correctOptionIndex(question) !== correctOptionIndex(arabic)) {
      throw new Error(`[Learning System] Review question ${index + 1} logic differs between languages.`);
    }
  });

  const enFinal = requirePage(englishPages, config.finalChallengePageId, 'English').exercises ?? [];
  const arFinal = requirePage(arabicPages, config.finalChallengePageId, 'Arabic').exercises ?? [];
  if (enFinal.length !== counts.final || arFinal.length !== counts.final) {
    throw new Error(`[Learning System] Final Challenge must contain ${counts.final} activities in both languages.`);
  }
  enFinal.forEach((exercise, index) => validateExercisePair(exercise, arFinal[index], `Final Challenge ${index + 1}`));

  validateDistractors(englishPages, 'en');
  validateDistractors(arabicPages, 'ar');
};

const buildGuides = (
  pages: PageData[],
  config: LearningSystemConfig,
  language: LearningLanguage,
): { teacherGuide: TeacherGuideSection[]; selfStudyGuide: TeacherGuideSection[] } =>
  buildLearningGuides({ pages, storyIds: config.storyIds, level: config.level, language });

export const runLearningSystem = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: LearningSystemConfig;
}): LearningSystemResult => {
  validateSourceParity(englishPages, arabicPages, config);

  const englishStoryPages = config.storyIds.map((id) => storyPage(englishPages, id)).filter((page): page is PageData => Boolean(page));
  const arabicStoryPages = config.storyIds.map((id) => storyPage(arabicPages, id)).filter((page): page is PageData => Boolean(page));
  const anchors = buildAnchors(englishStoryPages, arabicStoryPages, config.storyIds);
  const counts = defaultCounts(config);

  const quickPairs = new Map<number, ExercisePair>();
  const usedKeys = new Set<string>();
  config.storyIds.forEach((chapterId, index) => {
    const chapterAnchors = anchors.filter((anchor) => anchor.chapterId === chapterId);
    const primary = chapterAnchors.filter((anchor) => anchor.kind !== 'q');
    const pool = primary.length ? primary : chapterAnchors;
    if (!pool.length) throw new Error(`[Learning System] Chapter ${chapterId} has no learning anchor.`);
    const desired = QUICK_VARIANTS[index % QUICK_VARIANTS.length];
    const preferred = desired === 'fill-blanks'
      ? pool.find((anchor) => anchor.kind === 'v')
      : desired === 'tap-reveal' || desired === 'true-false'
        ? pool.find((anchor) => anchor.kind === 'h') ?? pool[0]
        : pool[index % pool.length];
    const chosen = preferred ?? pool[0];
    usedKeys.add(chosen.key);
    quickPairs.set(chapterId, pairVariant(chosen, englishStoryPages, arabicStoryPages, desired));
  });

  const knowledgeAnchors = selectStage(anchors, counts.knowledge, usedKeys, 0);
  const reviewAnchors = selectStage(anchors, counts.review, usedKeys, Math.floor(anchors.length / 3));
  const finalAnchors = selectStage(anchors, counts.final, usedKeys, Math.floor(anchors.length * 2 / 3));
  const knowledgePairs = stagePairs(knowledgeAnchors, englishStoryPages, arabicStoryPages, 0);
  const finalPairs = stagePairs(finalAnchors, englishStoryPages, arabicStoryPages, 2);
  const vocab = config.vocabularyPageId
    ? vocabularyPairs(englishStoryPages, arabicStoryPages, config.storyIds, counts.vocabulary)
    : { english: [], arabic: [] };

  const output = {
    englishPages: applyPages({
      pages: englishPages,
      config,
      quickPairs,
      knowledgePairs,
      reviewAnchors,
      finalPairs,
      vocabPairs: vocab.english,
      language: 'en',
    }),
    arabicPages: applyPages({
      pages: arabicPages,
      config,
      quickPairs,
      knowledgePairs,
      reviewAnchors,
      finalPairs,
      vocabPairs: vocab.arabic,
      language: 'ar',
    }),
  };

  validateOutput(output.englishPages, output.arabicPages, config);
  const englishGuides = buildGuides(output.englishPages, config, 'en');
  const arabicGuides = buildGuides(output.arabicPages, config, 'ar');

  return {
    ...output,
    englishTeacherGuide: englishGuides.teacherGuide,
    arabicTeacherGuide: arabicGuides.teacherGuide,
    englishSelfStudyGuide: englishGuides.selfStudyGuide,
    arabicSelfStudyGuide: arabicGuides.selfStudyGuide,
  };
};
