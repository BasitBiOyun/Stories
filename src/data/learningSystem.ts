import type { Exercise, Level, PageData, QuizQuestion, TeacherGuideSection } from '../types';
import { highlightPhraseMatches, highlightPhraseOccurs, normalizeHighlightText } from '../lib/highlightTextMatch';
import { buildLearningGuides } from './learningGuideSystem';
import { getLearningLevelPolicy, type LearningExerciseVariant } from './learningLevelPolicy';

export type LearningLanguage = 'en' | 'ar';

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

type Kind = 'h' | 'v';
type Fact = { prompt: string; answer: string };
type Anchor = {
  key: string;
  kind: Kind;
  chapterId: number;
  sourceIndex: number;
  english: Exercise;
  arabic: Exercise;
  englishFact: Fact;
  arabicFact: Fact;
};

const chapterLabel = (id: number, language: LearningLanguage) => language === 'ar' ? `الفصل ${id}` : `Chapter ${id}`;
const storyPage = (pages: PageData[], id: number) => pages.find(page => page.type === 'story' && page.id === id);
const requirePage = (pages: PageData[], id: number, language: string) => {
  const page = pages.find(candidate => candidate.id === id);
  if (!page) throw new Error(`[Learning System] ${language} page ${id} is missing.`);
  return page;
};
const rotate = <T,>(items: T[], offset: number): T[] => {
  if (!items.length) return [];
  const index = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(index), ...items.slice(0, index)];
};
const unique = (values: string[]) => {
  const seen = new Set<string>();
  return values.filter(value => {
    const key = value.trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};
const insertAt = <T,>(items: T[], item: T, index: number) => {
  const result = [...items];
  result.splice(index, 0, item);
  return result;
};
const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (items.length <= count) return items.slice();
  if (count <= 1) return count ? [items[0]] : [];
  const result: T[] = [];
  const used = new Set<number>();
  for (let i = 0; i < count; i += 1) {
    let index = Math.round(i * (items.length - 1) / (count - 1));
    while (used.has(index) && index + 1 < items.length) index += 1;
    used.add(index);
    result.push(items[index]);
  }
  return result;
};
const stageCounts = (config: LearningSystemConfig) => {
  const policy = getLearningLevelPolicy(config.level);
  return {
    knowledge: config.knowledgeCount ?? policy.knowledgeCount,
    vocabulary: config.vocabularyCount ?? policy.vocabularyCount,
    review: config.reviewCount ?? policy.reviewCount,
    final: config.finalCount ?? policy.finalCount,
  };
};

const normalizedTokens = (value: string, language: LearningLanguage) =>
  new Set(normalizeHighlightText(value, language).split(' ').filter(token => token.length > 2));
const tooClose = (left: string, right: string, language: LearningLanguage) => {
  const a = normalizeHighlightText(left, language);
  const b = normalizeHighlightText(right, language);
  if (!a || !b) return false;
  if (a === b) return true;
  if (a.length >= 20 && b.length >= 20 && (a.includes(b) || b.includes(a))) return true;
  const leftTokens = normalizedTokens(left, language);
  const rightTokens = normalizedTokens(right, language);
  if (leftTokens.size < 4 || rightTokens.size < 4) return false;
  const intersection = [...leftTokens].filter(token => rightTokens.has(token)).length;
  return intersection / new Set([...leftTokens, ...rightTokens]).size >= 0.95;
};
const safeDistractors = (correct: string, pool: string[], language: LearningLanguage) =>
  unique(pool).filter(candidate => !tooClose(candidate, correct, language)).slice(0, 2);

const isReviewTitle = (title: string) => /review|مراجعة|المراجعة/i.test(title);
const sortById = (pages: PageData[]) => [...pages].sort((left, right) => left.id - right.id);

/** Infer the common page-role contract; book-specific page IDs are not required by the engine. */
export const inferLearningSystemConfig = (pages: PageData[], level: Level): LearningSystemConfig => {
  const stories = sortById(pages.filter(page => page.type === 'story'));
  if (!stories.length) throw new Error('[Learning System] No story chapters found.');
  const storyIds = stories.map(page => page.id);
  const maxStoryId = Math.max(...storyIds);
  const support = sortById(pages.filter(page => page.id > maxStoryId && page.type !== 'story'));
  const knowledge = support.find(page => page.type === 'quiz');
  const vocabulary = support.find(page => page.type === 'vocabulary-match');
  const glossaries = support.filter(page => page.type === 'glossary');
  const finalChallenge = support.find(page => page.type === 'final-challenge');
  const review = support.find(page => isReviewTitle(page.title) && page.id !== finalChallenge?.id)
    ?? support.find(page => ['exercises', 'game', 'sequencing'].includes(page.type) && page.id !== finalChallenge?.id);

  if (!knowledge) throw new Error(`[Learning System] ${level} book has no Knowledge Check page.`);
  if (!review) throw new Error(`[Learning System] ${level} book has no Review page.`);
  if (!finalChallenge) throw new Error(`[Learning System] ${level} book has no Final Challenge page.`);
  if (glossaries.length < 2) throw new Error(`[Learning System] ${level} book must contain two glossary pages.`);

  return {
    level,
    storyIds,
    knowledgeCheckPageId: knowledge.id,
    vocabularyPageId: vocabulary?.id,
    reviewPageId: review.id,
    glossaryPageIds: [glossaries[0].id, glossaries[1].id],
    finalChallengePageId: finalChallenge.id,
  };
};

const validateSources = (englishPages: PageData[], arabicPages: PageData[], config: LearningSystemConfig) => {
  for (const id of config.storyIds) {
    const english = storyPage(englishPages, id);
    const arabic = storyPage(arabicPages, id);
    if (!english || !arabic) throw new Error(`[Learning System] Chapter ${id} is missing in one language.`);

    const englishHotspots = english.hotspots ?? [];
    const arabicHotspots = arabic.hotspots ?? [];
    if (englishHotspots.length !== arabicHotspots.length) {
      throw new Error(`[Learning System] Chapter ${id} paired hotspot counts differ: EN=${englishHotspots.length}, AR=${arabicHotspots.length}.`);
    }
    englishHotspots.forEach((hotspot, index) => {
      const arabicHotspot = arabicHotspots[index];
      if (hotspot.id !== arabicHotspot?.id) throw new Error(`[Learning System] Chapter ${id} hotspot ${index + 1} IDs differ.`);
      if (!hotspot.title.trim() || !hotspot.description.trim() || !arabicHotspot.title.trim() || !arabicHotspot.description.trim()) {
        throw new Error(`[Learning System] Chapter ${id} hotspot ${index + 1} is incomplete.`);
      }
    });

    const englishVocabulary = english.vocabulary ?? [];
    const arabicVocabulary = arabic.vocabulary ?? [];
    if (englishVocabulary.length !== arabicVocabulary.length) {
      throw new Error(`[Learning System] Chapter ${id} Word Notes counts differ: EN=${englishVocabulary.length}, AR=${arabicVocabulary.length}.`);
    }
    englishVocabulary.forEach((entry, index) => {
      const arabicEntry = arabicVocabulary[index];
      if (!entry.word.trim() || !entry.definition.trim() || !arabicEntry?.word.trim() || !arabicEntry.definition.trim()) {
        throw new Error(`[Learning System] Chapter ${id} Word Note ${index + 1} is incomplete.`);
      }
    });
    if (!englishHotspots.length && !englishVocabulary.length) {
      throw new Error(`[Learning System] Chapter ${id} has no reviewed paired hotspot or Word Notes source.`);
    }
  }

  [config.knowledgeCheckPageId, config.vocabularyPageId, config.reviewPageId, ...config.glossaryPageIds, config.finalChallengePageId]
    .filter((id): id is number => typeof id === 'number')
    .forEach(id => {
      requirePage(englishPages, id, 'English');
      requirePage(arabicPages, id, 'Arabic');
    });
};

const questionForFact = (page: PageData, fact: Fact, language: LearningLanguage, kind: Kind, level: Level) => {
  const mode = getLearningLevelPolicy(level).questionMode;
  const label = chapterLabel(page.id, language);
  if (kind === 'v') {
    if (language === 'ar') {
      if (mode === 'direct') return `ما معنى «${fact.prompt}» في ${label}؟`;
      if (mode === 'relationship') return `أي معنى يناسب استعمال «${fact.prompt}» في سياق ${label}؟`;
      return `أي معنى يفسر استعمال «${fact.prompt}» في ${label} بأدق صورة؟`;
    }
    if (mode === 'direct') return `What does “${fact.prompt}” mean in ${label}?`;
    if (mode === 'relationship') return `Which meaning best fits the use of “${fact.prompt}” in ${label}?`;
    return `Which meaning most precisely explains how “${fact.prompt}” is used in ${label}?`;
  }
  if (language === 'ar') {
    if (mode === 'direct') return `أي معلومة ترتبط بـ «${fact.prompt}» في ${label}؟`;
    if (mode === 'relationship') return `أي تفصيل من ${label} يشرح فكرة «${fact.prompt}» بصورة أفضل؟`;
    return `أي تفصيل يمثل أقوى دليل نصي في ${label} على فكرة «${fact.prompt}»؟`;
  }
  if (mode === 'direct') return `Which detail matches “${fact.prompt}” in ${label}?`;
  if (mode === 'relationship') return `Which detail from ${label} best explains the idea “${fact.prompt}”?`;
  return `Which detail is the strongest textual evidence in ${label} for the idea “${fact.prompt}”?`;
};

const baseExercise = (
  page: PageData,
  fact: Fact,
  wrongPool: string[],
  index: number,
  language: LearningLanguage,
  kind: Kind,
  level: Level,
): Exercise | null => {
  const distractors = safeDistractors(fact.answer, wrongPool, language);
  if (distractors.length < 2) return null;
  const correctAnswer = (page.id + index + (kind === 'v' ? 1 : 0)) % 3;
  const evidenceMode = getLearningLevelPolicy(level).questionMode === 'evidence';
  return {
    id: `learning-${level.toLowerCase()}-${kind}-${page.id}-${index}`,
    type: 'multiple-choice',
    title: language === 'ar' ? (evidenceMode ? 'اختيار الدليل' : 'دليل من الفصل') : (evidenceMode ? 'Evidence Check' : 'Chapter Evidence'),
    instructions: language === 'ar'
      ? (level === 'A2' ? 'اختر الإجابة المدعومة بنص الفصل.' : 'اختر الإجابة التي يدعمها نص الفصل بصورة أفضل.')
      : (level === 'A2' ? 'Choose the answer supported by the chapter.' : 'Choose the answer best supported by the chapter evidence.'),
    question: questionForFact(page, fact, language, kind, level),
    options: insertAt(distractors, fact.answer, correctAnswer),
    correctAnswer,
    explanation: fact.answer,
    feedback: {
      correct: language === 'ar' ? 'صحيح. الإجابة مدعومة بالفصل.' : 'Correct. The answer is supported by the chapter.',
      incorrect: language === 'ar'
        ? `ارجع إلى ${chapterLabel(page.id, language)} وحدد الدليل قبل المحاولة مرة أخرى.`
        : `Return to ${chapterLabel(page.id, language)}, identify the evidence, and try again.`,
    },
  };
};

const buildAnchors = (englishPages: PageData[], arabicPages: PageData[], config: LearningSystemConfig): Anchor[] => {
  const englishHotspotPool = englishPages.flatMap(page => (page.hotspots ?? []).map(item => item.description));
  const arabicHotspotPool = arabicPages.flatMap(page => (page.hotspots ?? []).map(item => item.description));
  const englishDefinitionPool = englishPages.flatMap(page => (page.vocabulary ?? []).map(item => item.definition));
  const arabicDefinitionPool = arabicPages.flatMap(page => (page.vocabulary ?? []).map(item => item.definition));
  const byChapter = new Map<number, Anchor[]>();

  for (const id of config.storyIds) {
    const english = storyPage(englishPages, id)!;
    const arabic = storyPage(arabicPages, id)!;
    const anchors: Anchor[] = [];

    (english.hotspots ?? []).forEach((hotspot, index) => {
      const arabicHotspot = arabic.hotspots?.[index];
      if (!arabicHotspot) return;
      const englishFact = { prompt: hotspot.title, answer: hotspot.description };
      const arabicFact = { prompt: arabicHotspot.title, answer: arabicHotspot.description };
      const englishExercise = baseExercise(english, englishFact, englishHotspotPool, index, 'en', 'h', config.level);
      const arabicExercise = baseExercise(arabic, arabicFact, arabicHotspotPool, index, 'ar', 'h', config.level);
      if (englishExercise && arabicExercise) {
        anchors.push({
          key: `h:${id}:${hotspot.id}`,
          kind: 'h', chapterId: id, sourceIndex: index,
          english: englishExercise, arabic: arabicExercise, englishFact, arabicFact,
        });
      }
    });

    (english.vocabulary ?? []).forEach((entry, index) => {
      const arabicEntry = arabic.vocabulary?.[index];
      if (!arabicEntry) return;
      const englishFact = { prompt: entry.word, answer: entry.definition };
      const arabicFact = { prompt: arabicEntry.word, answer: arabicEntry.definition };
      const englishExercise = baseExercise(english, englishFact, englishDefinitionPool, index, 'en', 'v', config.level);
      const arabicExercise = baseExercise(arabic, arabicFact, arabicDefinitionPool, index, 'ar', 'v', config.level);
      if (englishExercise && arabicExercise) {
        anchors.push({
          key: `v:${id}:${index}`,
          kind: 'v', chapterId: id, sourceIndex: index,
          english: englishExercise, arabic: arabicExercise, englishFact, arabicFact,
        });
      }
    });

    if (!anchors.length) throw new Error(`[Learning System] No safe paired learning source for Chapter ${id}.`);
    byChapter.set(id, anchors);
  }

  const output: Anchor[] = [];
  const maxSlots = Math.max(...config.storyIds.map(id => byChapter.get(id)?.length ?? 0));
  for (let slot = 0; slot < maxSlots; slot += 1) {
    config.storyIds.forEach(id => {
      const anchor = byChapter.get(id)?.[slot];
      if (anchor) output.push(anchor);
    });
  }
  return output;
};

const chapterSentences = (text: string) => text
  .replace(/\[POEM\][\s\S]*?\[\/POEM\]/g, ' ')
  .split(/(?<=[.!?؟])\s+|\n+/u)
  .map(sentence => sentence.trim())
  .filter(sentence => sentence.length >= 20 && !/^KEY WORDS:/i.test(sentence));
const sentenceWith = (text: string, phrase: string, language: LearningLanguage) =>
  chapterSentences(text).find(sentence => highlightPhraseOccurs(sentence, phrase, language));
const blankSentence = (sentence: string, phrase: string, language: LearningLanguage): { text: string; answer: string } | null => {
  if (sentence.includes(phrase)) return { text: sentence.replace(phrase, '[blank]'), answer: phrase };
  const length = normalizeHighlightText(phrase, language).split(' ').filter(Boolean).length;
  if (!length) return null;
  const tokens = sentence.split(/\s+/);
  for (let index = 0; index <= tokens.length - length; index += 1) {
    const candidate = tokens.slice(index, index + length).join(' ');
    if (!highlightPhraseMatches(candidate, phrase, language)) continue;
    const lead = tokens[index].match(/^[^\p{L}\p{N}]*/u)?.[0] ?? '';
    const tail = tokens[index + length - 1].match(/[^\p{L}\p{N}]*$/u)?.[0] ?? '';
    const answer = candidate.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
    tokens.splice(index, length, `${lead}[blank]${tail}`);
    return { text: tokens.join(' '), answer: answer || phrase };
  }
  return null;
};
const factFor = (anchor: Anchor, language: LearningLanguage) => language === 'ar' ? anchor.arabicFact : anchor.englishFact;
const pageFor = (pages: PageData[], anchor: Anchor) => storyPage(pages, anchor.chapterId)!;

const tapExercise = (anchor: Anchor, page: PageData, language: LearningLanguage, level: Level): Exercise => {
  const fact = factFor(anchor, language);
  const evidenceMode = getLearningLevelPolicy(level).questionMode === 'evidence';
  return {
    id: `learning-${level.toLowerCase()}-tap-${page.id}-${anchor.sourceIndex}`,
    type: 'tap-reveal',
    title: language === 'ar' ? 'فكّر ثم اكشف' : 'Think, Then Reveal',
    instructions: language === 'ar'
      ? (evidenceMode ? 'حدّد الدليل أولاً، ثم اكشف الإجابة وقارنها بالفصل.' : 'فكّر أولاً ثم اكشف الإجابة وقارنها بالفصل.')
      : (evidenceMode ? 'Identify the evidence first, then reveal and compare with the chapter.' : 'Think first, then reveal the answer and compare it with the chapter.'),
    question: language === 'ar'
      ? `ماذا يقول ${chapterLabel(page.id, language)} عن «${fact.prompt}»؟`
      : `What does ${chapterLabel(page.id, language)} say about “${fact.prompt}”?`,
    correctAnswer: fact.answer,
    explanation: fact.answer,
    tapRevealItems: [{ question: fact.prompt, answer: fact.answer }],
    feedback: { correct: language === 'ar' ? 'جيد. قارن إجابتك بالنص.' : 'Good. Compare your answer with the text.', incorrect: language === 'ar' ? 'ارجع إلى الفصل ثم حاول مرة أخرى.' : 'Return to the chapter and try again.' },
  };
};

const fillExercise = (anchor: Anchor, page: PageData, language: LearningLanguage, level: Level): Exercise | null => {
  if (anchor.kind !== 'v') return null;
  const vocabulary = page.vocabulary?.[anchor.sourceIndex];
  if (!vocabulary) return null;
  const sentence = sentenceWith(page.content || '', vocabulary.word, language);
  if (!sentence) return null;
  const blanked = blankSentence(sentence, vocabulary.word, language);
  if (!blanked) return null;
  return {
    id: `learning-${level.toLowerCase()}-fill-${page.id}-${anchor.sourceIndex}`,
    type: 'fill-blanks',
    title: language === 'ar' ? 'أكمل من الفصل' : 'Complete from the Chapter',
    instructions: language === 'ar'
      ? (level === 'A2' ? 'استخدم كلمة من ملاحظات المفردات.' : 'أكمل الجملة بالكلمة أو العبارة التي يستعملها الفصل.')
      : (level === 'A2' ? 'Use a Word Notes word.' : 'Complete the sentence with the word or phrase used in the chapter.'),
    question: language === 'ar' ? 'ما الكلمة أو العبارة الناقصة؟' : 'Which word or phrase is missing?',
    fillBlanksText: blanked.text,
    correctAnswer: blanked.answer,
    explanation: `${vocabulary.word}: ${vocabulary.definition}`,
    feedback: { correct: language === 'ar' ? 'صحيح.' : 'Correct.', incorrect: language === 'ar' ? 'راجع الفصل وملاحظات المفردات.' : 'Check the chapter and Word Notes.' },
  };
};

const matchingExercise = (anchor: Anchor, page: PageData, language: LearningLanguage, level: Level): Exercise | null => {
  const hotspotPairs = (page.hotspots ?? []).map(item => ({ left: item.title, right: item.description }));
  const vocabularyPairs = (page.vocabulary ?? []).map(item => ({ left: item.word, right: item.definition }));
  const ordered = anchor.kind === 'h'
    ? [...rotate(hotspotPairs, anchor.sourceIndex), ...vocabularyPairs]
    : [...rotate(vocabularyPairs, anchor.sourceIndex), ...hotspotPairs];
  const targetCount = level === 'A2' ? 3 : 4;
  const seen = new Set<string>();
  const pairs = ordered.filter(pair => {
    const key = normalizeHighlightText(pair.left, language);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, targetCount);
  if (pairs.length < 3) return null;
  return {
    id: `learning-${level.toLowerCase()}-match-${page.id}-${anchor.sourceIndex}`,
    type: 'matching',
    title: language === 'ar' ? 'صل المعلومات' : 'Match the Information',
    instructions: language === 'ar'
      ? (level === 'A2' ? 'صل كل كلمة أو فكرة بالمعلومة أو المعنى الصحيح.' : 'صل كل كلمة أو فكرة بالدليل أو المعنى الصحيح من الفصل.')
      : (level === 'A2' ? 'Match each key word or idea with its correct detail or meaning.' : 'Match each key word or idea with the correct chapter detail or meaning.'),
    question: language === 'ar' ? 'صل كل عنصر بالإجابة الصحيحة.' : 'Match each item with the correct answer.',
    matchingPairs: pairs,
    correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])),
    explanation: language === 'ar' ? 'جميع الأزواج مأخوذة من هذا الفصل.' : 'All pairs come from this chapter.',
    feedback: { correct: language === 'ar' ? 'صحيح.' : 'Correct.', incorrect: language === 'ar' ? 'راجع الفصل ثم حاول مرة أخرى.' : 'Check the chapter and try again.' },
  };
};

const trueFalseExercise = (anchor: Anchor, page: PageData, language: LearningLanguage, level: Level): Exercise => {
  const fact = factFor(anchor, language);
  const positive = (page.id + anchor.sourceIndex) % 2 === 0;
  return {
    id: `learning-${level.toLowerCase()}-tf-${page.id}-${anchor.sourceIndex}`,
    type: 'true-false',
    title: language === 'ar' ? 'صحيح أم خطأ' : 'True or False',
    instructions: language === 'ar' ? 'تحقق من العبارة بالدليل الموجود في الفصل.' : 'Verify the statement against the chapter evidence.',
    question: language === 'ar'
      ? `صحيح أم خطأ: ${positive ? 'يذكر' : 'لا يذكر'} ${chapterLabel(page.id, language)} هذه المعلومة: ${fact.answer}`
      : `True or false: ${chapterLabel(page.id, language)} ${positive ? 'gives' : 'does not give'} this detail: ${fact.answer}`,
    correctAnswer: positive,
    explanation: fact.answer,
    feedback: { correct: language === 'ar' ? 'صحيح.' : 'Correct.', incorrect: language === 'ar' ? 'ارجع إلى الفصل وتحقق من الدليل.' : 'Return to the chapter and verify the evidence.' },
  };
};

const variant = (anchor: Anchor, pages: PageData[], language: LearningLanguage, type: LearningExerciseVariant, level: Level): Exercise | null => {
  const page = pageFor(pages, anchor);
  if (type === 'multiple-choice') return language === 'ar' ? anchor.arabic : anchor.english;
  if (type === 'tap-reveal') return tapExercise(anchor, page, language, level);
  if (type === 'fill-blanks') return fillExercise(anchor, page, language, level);
  if (type === 'matching') return matchingExercise(anchor, page, language, level);
  return trueFalseExercise(anchor, page, language, level);
};
const pairVariant = (anchor: Anchor, englishPages: PageData[], arabicPages: PageData[], type: LearningExerciseVariant, level: Level): Anchor => {
  const english = variant(anchor, englishPages, 'en', type, level);
  const arabic = variant(anchor, arabicPages, 'ar', type, level);
  return english && arabic && english.type === arabic.type ? { ...anchor, english, arabic } : anchor;
};
const select = (anchors: Anchor[], count: number, used: Set<string>, offset: number) => {
  const pool = rotate(anchors, offset).filter(anchor => !used.has(anchor.key));
  if (pool.length < count) throw new Error(`[Learning System] Needs ${count} unused anchors but only ${pool.length} remain. Add reviewed hotspot/Word Notes sources.`);
  const selected = pickEvenly(pool, count);
  selected.forEach(anchor => used.add(anchor.key));
  return selected;
};
const stagePairs = (anchors: Anchor[], englishPages: PageData[], arabicPages: PageData[], level: Level, offset: number) => {
  const policy = getLearningLevelPolicy(level);
  let vocabularyIndex = 0;
  let hotspotIndex = 0;
  return anchors.map(anchor => {
    const pattern = anchor.kind === 'v' ? policy.vocabularyPattern : policy.hotspotPattern;
    const index = anchor.kind === 'v' ? vocabularyIndex++ : hotspotIndex++;
    return pairVariant(anchor, englishPages, arabicPages, pattern[(index + offset) % pattern.length], level);
  });
};

const quizQuestion = (exercise: Exercise, chapterId: number, language: LearningLanguage): QuizQuestion => {
  if (exercise.type === 'true-false' && typeof exercise.correctAnswer === 'boolean') {
    return {
      question: exercise.question || '',
      options: language === 'ar'
        ? [{ text: 'صحيح', isCorrect: exercise.correctAnswer }, { text: 'خطأ', isCorrect: !exercise.correctAnswer }]
        : [{ text: 'True', isCorrect: exercise.correctAnswer }, { text: 'False', isCorrect: !exercise.correctAnswer }],
      hint: language === 'ar' ? `ارجع إلى ${chapterLabel(chapterId, language)}.` : `Return to ${chapterLabel(chapterId, language)}.`,
    };
  }
  const correctAnswer = typeof exercise.correctAnswer === 'number' ? exercise.correctAnswer : 0;
  return {
    question: exercise.question || '',
    options: (exercise.options ?? []).map((text, index) => ({ text, isCorrect: index === correctAnswer })),
    hint: language === 'ar' ? `ارجع إلى ${chapterLabel(chapterId, language)}.` : `Return to ${chapterLabel(chapterId, language)}.`,
  };
};
const reviewExercise = (anchors: Anchor[], language: LearningLanguage, level: Level): Exercise => ({
  id: `learning-${level.toLowerCase()}-review`, type: 'quiz-game',
  title: language === 'ar' ? 'تحدي المراجعة' : `${level} Review Challenge`,
  instructions: language === 'ar' ? 'أجب عن كل سؤال، ثم ارجع إلى الفصل عند الخطأ.' : 'Answer each question and return to the chapter after a mistake.',
  question: language === 'ar' ? 'هل تستطيع ربط كل إجابة بدليل من الفصل؟' : 'Can you connect each answer with chapter evidence?',
  correctAnswer: null,
  explanation: language === 'ar' ? 'كل سؤال مبني على أحد الفصول.' : 'Every question is chapter-based.',
  feedback: { correct: language === 'ar' ? 'جيد.' : 'Good.', incorrect: language === 'ar' ? 'ارجع إلى الفصل.' : 'Return to the chapter.' },
  quizQuestions: anchors.map(anchor => quizQuestion(language === 'ar' ? anchor.arabic : anchor.english, anchor.chapterId, language)),
});

const buildVocabularyPairs = (englishPages: PageData[], arabicPages: PageData[], storyIds: number[], count: number) => {
  const pairs: Array<{ english: { word: string; meaning: string }; arabic: { word: string; meaning: string } }> = [];
  storyIds.forEach(id => {
    const english = storyPage(englishPages, id)!;
    const arabic = storyPage(arabicPages, id)!;
    (english.vocabulary ?? []).forEach((entry, index) => {
      const arabicEntry = arabic.vocabulary?.[index];
      if (arabicEntry) pairs.push({
        english: { word: entry.word, meaning: entry.definition },
        arabic: { word: arabicEntry.word, meaning: arabicEntry.definition },
      });
    });
  });
  if (pairs.length < count) throw new Error(`[Learning System] Vocabulary Challenge needs ${count} paired Word Notes but only ${pairs.length} exist.`);
  const selected = pickEvenly(pairs, count);
  return { english: selected.map(pair => pair.english), arabic: selected.map(pair => pair.arabic) };
};

const cleanArabic = (value: string) => value
  .replace(/وفقًا لـالفصل/g, 'وفقًا لما ورد في الفصل')
  .replace(/Word Notes/gi, 'ملاحظات المفردات')
  .replace(/Quick Challenge/gi, 'التحدي السريع')
  .replace(/Review Challenge/gi, 'تحدي المراجعة')
  .replace(/Final Challenge/gi, 'التحدي النهائي')
  .replace(/Knowledge Check/gi, 'اختبار الفهم');
const cleanExercise = (exercise: Exercise): Exercise => ({
  ...exercise,
  title: exercise.title ? cleanArabic(exercise.title) : exercise.title,
  instructions: exercise.instructions ? cleanArabic(exercise.instructions) : exercise.instructions,
  question: exercise.question ? cleanArabic(exercise.question) : exercise.question,
  explanation: exercise.explanation ? cleanArabic(exercise.explanation) : exercise.explanation,
  feedback: { correct: cleanArabic(exercise.feedback.correct || ''), incorrect: cleanArabic(exercise.feedback.incorrect || '') },
  matchingPairs: exercise.matchingPairs?.map(pair => ({ left: cleanArabic(pair.left), right: cleanArabic(pair.right) })),
  tapRevealItems: exercise.tapRevealItems?.map(item => ({ question: cleanArabic(item.question), answer: cleanArabic(item.answer) })),
  quizQuestions: exercise.quizQuestions?.map(question => ({ ...question, question: cleanArabic(question.question), hint: cleanArabic(question.hint), options: question.options.map(option => ({ ...option, text: cleanArabic(option.text) })) })),
});
const cloneExercise = (exercise: Exercise, id: string, title: string): Exercise => ({ ...exercise, id, title });

const applyPages = (
  pages: PageData[], config: LearningSystemConfig, quick: Map<number, Anchor>, knowledge: Anchor[], reviewAnchors: Anchor[], finalAnchors: Anchor[], vocabulary: NonNullable<PageData['vocabularyPairs']>, language: LearningLanguage,
) => {
  const counts = stageCounts(config);
  const output = pages.map(page => {
    if (config.storyIds.includes(page.id)) {
      const anchor = quick.get(page.id);
      return anchor ? { ...page, exercises: [cloneExercise(language === 'ar' ? anchor.arabic : anchor.english, `learning-${config.level.toLowerCase()}-quick-${page.id}`, language === 'ar' ? 'تحدي سريع' : 'Quick Challenge')] } : page;
    }
    if (page.id === config.knowledgeCheckPageId) return {
      ...page, type: 'quiz' as const,
      title: language === 'ar' ? `اختبار الفهم — ${config.level}` : `${config.level} Knowledge Check`,
      content: language === 'ar' ? `أكمل ${counts.knowledge} أنشطة مبنية على أدلة من الفصول.` : `Complete ${counts.knowledge} chapter-grounded activities at ${config.level} level.`,
      exercises: knowledge.map((anchor, index) => cloneExercise(language === 'ar' ? anchor.arabic : anchor.english, `learning-${config.level.toLowerCase()}-knowledge-${index + 1}`, language === 'ar' ? `اختبار الفهم ${index + 1}` : `${config.level} Knowledge Check ${index + 1}`)),
    };
    if (config.vocabularyPageId && page.id === config.vocabularyPageId) return {
      ...page, type: 'vocabulary-match' as const,
      title: language === 'ar' ? 'تحدي المفردات' : `${config.level} Vocabulary Challenge`,
      content: language === 'ar' ? `صل ${counts.vocabulary} كلمات أو عبارات من الفصول بمعانيها.` : `Match ${counts.vocabulary} chapter words or phrases with their meanings.`,
      vocabularyPairs: vocabulary,
    };
    if (page.id === config.reviewPageId) return {
      ...page,
      title: language === 'ar' ? 'تحدي المراجعة' : `${config.level} Review Challenge`,
      content: language === 'ar' ? `مراجعة من ${counts.review} أسئلة تربط الإجابة بدليل من الفصول.` : `${counts.review}-question review connecting answers with chapter evidence.`,
      exercises: [reviewExercise(reviewAnchors, language, config.level)],
    };
    if (page.id === config.finalChallengePageId) return {
      ...page, type: 'final-challenge' as const,
      title: language === 'ar' ? 'التحدي النهائي' : `${config.level} Final Challenge`,
      content: language === 'ar' ? `${counts.final} أنشطة نهائية مبنية على الفصول وفق مستوى ${config.level}.` : `${counts.final} final chapter-based activities following the ${config.level} learning policy.`,
      exercises: finalAnchors.map((anchor, index) => cloneExercise(language === 'ar' ? anchor.arabic : anchor.english, `learning-${config.level.toLowerCase()}-final-${index + 1}`, language === 'ar' ? `التحدي النهائي ${index + 1}` : `${config.level} Final Challenge ${index + 1}`)),
    };
    return page;
  });
  return language === 'ar'
    ? output.map(page => ({ ...page, content: page.type === 'story' ? page.content : cleanArabic(page.content || ''), exercises: page.exercises?.map(cleanExercise) }))
    : output;
};

const answerIndex = (question: QuizQuestion) => question.options.findIndex(option => option.isCorrect);
const validatePair = (english: Exercise, arabic: Exercise, where: string) => {
  if (english.type !== arabic.type) throw new Error(`[Learning System] ${where} types differ.`);
  if ((english.options?.length ?? 0) !== (arabic.options?.length ?? 0)) throw new Error(`[Learning System] ${where} option counts differ.`);
  if (typeof english.correctAnswer !== typeof arabic.correctAnswer) throw new Error(`[Learning System] ${where} answer shapes differ.`);
  if ((typeof english.correctAnswer === 'number' || typeof english.correctAnswer === 'boolean') && english.correctAnswer !== arabic.correctAnswer) throw new Error(`[Learning System] ${where} correct-answer logic differs.`);
  if (english.type === 'matching') {
    const englishCount = english.matchingPairs?.length ?? 0;
    const arabicCount = arabic.matchingPairs?.length ?? 0;
    if (englishCount < 3 || englishCount !== arabicCount) throw new Error(`[Learning System] ${where} matching structure differs.`);
  }
  if (english.type === 'fill-blanks' && (!english.fillBlanksText?.includes('[blank]') || !arabic.fillBlanksText?.includes('[blank]'))) throw new Error(`[Learning System] ${where} fill-blank structure differs.`);
  if (english.type === 'tap-reveal' && (!(english.tapRevealItems?.length) || english.tapRevealItems.length !== arabic.tapRevealItems?.length)) throw new Error(`[Learning System] ${where} tap-reveal structure differs.`);
};
const validateDistractors = (pages: PageData[], language: LearningLanguage) => pages.forEach(page => page.exercises?.forEach((exercise, exerciseIndex) => {
  if (!exercise.id?.startsWith('learning-')) return;
  const check = (options: Array<{ text: string; isCorrect: boolean }>, where: string) => {
    const correct = options.filter(option => option.isCorrect);
    if (correct.length !== 1) throw new Error(`[Learning System] ${where} must have exactly one correct option.`);
    options.filter(option => !option.isCorrect).forEach(option => {
      if (tooClose(option.text, correct[0].text, language)) throw new Error(`[Learning System] ${where} has a distractor too close to the correct answer.`);
    });
  };
  if (exercise.type === 'multiple-choice' && exercise.options && typeof exercise.correctAnswer === 'number') {
    check(exercise.options.map((text, index) => ({ text, isCorrect: index === exercise.correctAnswer })), `Page ${page.id} activity ${exerciseIndex + 1}`);
  }
  exercise.quizQuestions?.forEach((question, index) => check(question.options, `Page ${page.id} review ${index + 1}`));
}));

const validateOutput = (englishPages: PageData[], arabicPages: PageData[], config: LearningSystemConfig) => {
  const counts = stageCounts(config);
  const generatedTypes = new Set<string>();
  config.storyIds.forEach(id => {
    const english = requirePage(englishPages, id, 'English').exercises?.[0];
    const arabic = requirePage(arabicPages, id, 'Arabic').exercises?.[0];
    if (!english || !arabic) throw new Error(`[Learning System] Chapter ${id} Quick Challenge missing.`);
    validatePair(english, arabic, `Chapter ${id} Quick Challenge`);
    generatedTypes.add(english.type);
  });
  const englishKnowledge = requirePage(englishPages, config.knowledgeCheckPageId, 'English').exercises ?? [];
  const arabicKnowledge = requirePage(arabicPages, config.knowledgeCheckPageId, 'Arabic').exercises ?? [];
  if (englishKnowledge.length !== counts.knowledge || arabicKnowledge.length !== counts.knowledge) throw new Error(`[Learning System] Knowledge Check must contain ${counts.knowledge} activities.`);
  englishKnowledge.forEach((exercise, index) => { validatePair(exercise, arabicKnowledge[index], `Knowledge ${index + 1}`); generatedTypes.add(exercise.type); });
  if (config.vocabularyPageId) {
    const englishVocabulary = requirePage(englishPages, config.vocabularyPageId, 'English').vocabularyPairs ?? [];
    const arabicVocabulary = requirePage(arabicPages, config.vocabularyPageId, 'Arabic').vocabularyPairs ?? [];
    if (englishVocabulary.length !== counts.vocabulary || arabicVocabulary.length !== counts.vocabulary) throw new Error(`[Learning System] Vocabulary Challenge must contain ${counts.vocabulary} pairs.`);
  }
  const englishReview = requirePage(englishPages, config.reviewPageId, 'English').exercises?.[0];
  const arabicReview = requirePage(arabicPages, config.reviewPageId, 'Arabic').exercises?.[0];
  if (englishReview?.type !== 'quiz-game' || arabicReview?.type !== 'quiz-game') throw new Error('[Learning System] Review must use the common quiz-game format.');
  if (englishReview.quizQuestions?.length !== counts.review || arabicReview.quizQuestions?.length !== counts.review) throw new Error(`[Learning System] Review must contain ${counts.review} questions.`);
  englishReview.quizQuestions.forEach((question, index) => {
    const arabicQuestion = arabicReview.quizQuestions?.[index];
    if (!arabicQuestion || question.options.length !== arabicQuestion.options.length || answerIndex(question) !== answerIndex(arabicQuestion)) throw new Error(`[Learning System] Review ${index + 1} EN/AR logic differs.`);
  });
  const englishFinal = requirePage(englishPages, config.finalChallengePageId, 'English').exercises ?? [];
  const arabicFinal = requirePage(arabicPages, config.finalChallengePageId, 'Arabic').exercises ?? [];
  if (englishFinal.length !== counts.final || arabicFinal.length !== counts.final) throw new Error(`[Learning System] Final Challenge must contain ${counts.final} activities.`);
  englishFinal.forEach((exercise, index) => { validatePair(exercise, arabicFinal[index], `Final ${index + 1}`); generatedTypes.add(exercise.type); });
  if (config.storyIds.length >= 5) ['multiple-choice', 'true-false', 'matching', 'fill-blanks', 'tap-reveal'].forEach(type => {
    if (!generatedTypes.has(type)) throw new Error(`[Learning System] ${config.level} output does not include required ${type} variety.`);
  });
  validateDistractors(englishPages, 'en');
  validateDistractors(arabicPages, 'ar');
};

export const runLearningSystem = ({ englishPages, arabicPages, config }: { englishPages: PageData[]; arabicPages: PageData[]; config: LearningSystemConfig }): LearningSystemResult => {
  validateSources(englishPages, arabicPages, config);
  const englishStories = config.storyIds.map(id => storyPage(englishPages, id)!).filter(Boolean);
  const arabicStories = config.storyIds.map(id => storyPage(arabicPages, id)!).filter(Boolean);
  const anchors = buildAnchors(englishStories, arabicStories, config);
  const counts = stageCounts(config);
  const policy = getLearningLevelPolicy(config.level);
  const quick = new Map<number, Anchor>();
  const used = new Set<string>();

  config.storyIds.forEach((id, index) => {
    const chapterAnchors = anchors.filter(anchor => anchor.chapterId === id);
    const type = policy.quickPattern[index % policy.quickPattern.length];
    const preferred = type === 'fill-blanks'
      ? chapterAnchors.find(anchor => anchor.kind === 'v')
      : chapterAnchors.find(anchor => anchor.kind === 'h') ?? chapterAnchors[0];
    const anchor = preferred ?? chapterAnchors[0];
    if (!anchor) throw new Error(`[Learning System] Chapter ${id} has no anchor.`);
    used.add(anchor.key);
    quick.set(id, pairVariant(anchor, englishStories, arabicStories, type, config.level));
  });

  const knowledgeRaw = select(anchors, counts.knowledge, used, 0);
  const reviewRaw = select(anchors, counts.review, used, Math.floor(anchors.length / 3));
  const finalRaw = select(anchors, counts.final, used, Math.floor(anchors.length * 2 / 3));
  const knowledge = stagePairs(knowledgeRaw, englishStories, arabicStories, config.level, 0);
  const review = reviewRaw.map((anchor, index) => pairVariant(anchor, englishStories, arabicStories, index % 2 ? 'true-false' : 'multiple-choice', config.level));
  const final = stagePairs(finalRaw, englishStories, arabicStories, config.level, 2);
  const vocabulary = config.vocabularyPageId
    ? buildVocabularyPairs(englishStories, arabicStories, config.storyIds, counts.vocabulary)
    : { english: [], arabic: [] };

  const englishOutput = applyPages(englishPages, config, quick, knowledge, review, final, vocabulary.english, 'en');
  const arabicOutput = applyPages(arabicPages, config, quick, knowledge, review, final, vocabulary.arabic, 'ar');
  validateOutput(englishOutput, arabicOutput, config);

  const englishGuides = buildLearningGuides({ pages: englishOutput, storyIds: config.storyIds, level: config.level, language: 'en' });
  const arabicGuides = buildLearningGuides({ pages: arabicOutput, storyIds: config.storyIds, level: config.level, language: 'ar' });
  return {
    englishPages: englishOutput,
    arabicPages: arabicOutput,
    englishTeacherGuide: englishGuides.teacherGuide,
    arabicTeacherGuide: arabicGuides.teacherGuide,
    englishSelfStudyGuide: englishGuides.selfStudyGuide,
    arabicSelfStudyGuide: arabicGuides.selfStudyGuide,
  };
};
