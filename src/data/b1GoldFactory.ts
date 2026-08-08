import type { Exercise, PageData, TeacherGuideSection } from '../types';
import { fallbackDefinitions } from './fallbackVocab';

export type B1GoldLanguage = 'en' | 'ar';

export interface B1GoldPageConfig {
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
}

interface BankItem {
  exercise: Exercise;
  chapterId: number;
}

type VocabularyEntry = NonNullable<PageData['vocabulary']>[number];

const normalizeQuestion = (value: string): string => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^a-z0-9\u0600-\u06ff]+/g, ' ')
  .trim();

const normalizeVocabKey = (value: string): string => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/\p{M}/gu, '')
  .replace(/[^\p{L}\p{N}]+/gu, ' ')
  .trim();

const cleanSentence = (value: string): string => value
  .replace(/\s+/g, ' ')
  .trim()
  .replace(/[.!?]+$/, '');

const isObjective = (exercise: Exercise): boolean =>
  Boolean(exercise.question?.trim())
  && (exercise.type === 'multiple-choice' || exercise.type === 'true-false');

const languageText = (language: B1GoldLanguage) => language === 'ar'
  ? {
      reviewTitle: 'مراجعة B1',
      choose: 'اختر أفضل إجابة. استخدم دليلاً من النص.',
      trueFalse: 'حدد هل العبارة صحيحة أم خاطئة. ارجع إلى النص عند الحاجة.',
      correct: 'صحيح. استخدمت معلومة من القصة.',
      retry: 'ارجع إلى الفصل، وابحث عن الدليل، ثم حاول مرة أخرى.',
      knowledge: 'راجع أهم الأسباب والنتائج والاختيارات والأحداث في القصة.',
      review: 'اربط بين الأحداث والأسباب والنتائج والشخصيات قبل التحدي النهائي.',
      final: 'أكمل عشرة أسئلة موضوعية تغطي القصة كلها.',
      vocabulary: 'صِل عشر كلمات أو عبارات مهمة من القصة بمعانيها.',
      glossary1: 'مفردات B1 مختارة من النصف الأول من القصة.',
      glossary2: 'مفردات B1 مختارة من النصف الثاني من القصة.',
      fallbackTitle: 'دليل من الفصل',
      fallbackQuestionPrefix: 'وفقاً للفصل، هل العبارة الآتية صحيحة؟',
    }
  : {
      reviewTitle: 'B1 Review',
      choose: 'Choose the best answer. Use evidence from the story.',
      trueFalse: 'Decide if the statement is true or false. Return to the text if needed.',
      correct: 'Correct. You used information from the story.',
      retry: 'Go back to the chapter, find the evidence, and try again.',
      knowledge: 'Review important causes, results, choices, and events across the story.',
      review: 'Connect events, causes, results, and character choices before the Final Challenge.',
      final: 'Complete ten objective questions covering the whole story.',
      vocabulary: 'Match ten useful B1 words or phrases from the story with their meanings.',
      glossary1: 'Selected B1 vocabulary from the first half of the story.',
      glossary2: 'Selected B1 vocabulary from the second half of the story.',
      fallbackTitle: 'Evidence from the Chapter',
      fallbackQuestionPrefix: 'According to the chapter, is this statement true?',
    };

const b1Score = (exercise: Exercise): number => {
  const haystack = `${exercise.title || ''} ${exercise.instructions || ''} ${exercise.question || ''}`.toLowerCase();
  let score = isObjective(exercise) ? 4 : 0;
  for (const marker of ['why', 'how', 'reason', 'cause', 'result', 'effect', 'because', 'compare', 'contrast', 'purpose', 'message', 'show', 'reveal', 'important']) {
    if (haystack.includes(marker)) score += 2;
  }
  if (exercise.explanation?.trim()) score += 2;
  if (exercise.feedback?.incorrect?.trim()) score += 1;
  return score;
};

const enrichExercise = (
  exercise: Exercise,
  page: PageData,
  language: B1GoldLanguage,
): Exercise => {
  const copy = { ...exercise };
  const text = languageText(language);
  const evidence = copy.explanation?.trim()
    || page.hotspots?.[0]?.description?.trim()
    || cleanSentence(page.content.split(/\n\s*\n/)[0] || page.content);

  return {
    ...copy,
    title: copy.title || text.reviewTitle,
    instructions: copy.instructions || (
      copy.type === 'true-false' ? text.trueFalse : text.choose
    ),
    explanation: copy.explanation?.trim() || evidence,
    feedback: {
      correct: copy.feedback?.correct?.trim() || text.correct,
      incorrect: copy.feedback?.incorrect?.trim() || text.retry,
    },
  };
};

const fallbackQuickChallenge = (page: PageData, language: B1GoldLanguage): Exercise => {
  const text = languageText(language);
  const source = cleanSentence(
    page.hotspots?.[0]?.description
      || page.content.split(/\n\s*\n/)[0]
      || page.title,
  );

  return {
    id: `b1-gold-ch${page.id}-evidence`,
    type: 'true-false',
    title: text.fallbackTitle,
    instructions: text.trueFalse,
    question: `${text.fallbackQuestionPrefix} ${source}`,
    correctAnswer: true,
    explanation: source,
    feedback: {
      correct: text.correct,
      incorrect: text.retry,
    },
  };
};

const selectQuickChallenge = (page: PageData, language: B1GoldLanguage): Exercise => {
  const candidates = [...(page.exercises || [])].sort((a, b) => b1Score(b) - b1Score(a));
  const chosen = candidates[0] || fallbackQuickChallenge(page, language);
  return enrichExercise(chosen, page, language);
};

const objectiveFromChallenge = (
  challenge: Exercise,
  page: PageData,
  language: B1GoldLanguage,
): Exercise => {
  if (isObjective(challenge)) return challenge;

  const text = languageText(language);
  const statement = typeof challenge.correctAnswer === 'string' && challenge.correctAnswer.trim()
    ? cleanSentence(challenge.correctAnswer)
    : cleanSentence(
        challenge.explanation
          || page.hotspots?.[0]?.description
          || page.content.split(/\n\s*\n/)[0]
          || page.title,
      );

  return {
    id: `b1-gold-objective-${page.id}`,
    type: 'true-false',
    title: challenge.title || text.fallbackTitle,
    instructions: text.trueFalse,
    question: `${text.fallbackQuestionPrefix} ${statement}`,
    correctAnswer: true,
    explanation: statement,
    feedback: {
      correct: text.correct,
      incorrect: text.retry,
    },
  };
};

const uniqueVocabulary = (entries: VocabularyEntry[]): VocabularyEntry[] => {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    const key = normalizeVocabKey(entry.word);
    if (!key || seen.has(key) || !entry.definition?.trim()) return false;
    seen.add(key);
    return true;
  });
};

const vocabularyDefinitionMap = (pages: PageData[]): Map<string, VocabularyEntry> => {
  const map = new Map<string, VocabularyEntry>();
  for (const page of pages) {
    for (const entry of page.vocabulary || []) {
      const key = normalizeVocabKey(entry.word);
      if (key && entry.definition?.trim() && !map.has(key)) map.set(key, entry);
    }
  }
  for (const [word, definition] of Object.entries(fallbackDefinitions)) {
    const key = normalizeVocabKey(word);
    if (key && definition.trim() && !map.has(key)) map.set(key, { word, definition });
  }
  return map;
};

const normalizeChapterVocabulary = (
  page: PageData,
  definitions: Map<string, VocabularyEntry>,
): VocabularyEntry[] => {
  const current = uniqueVocabulary([...(page.vocabulary || [])]);
  if (current.length >= 4) return current.slice(0, 5);

  const additions: VocabularyEntry[] = [];
  for (const word of page.animatedWords || []) {
    const key = normalizeVocabKey(word);
    if (!key || current.some((entry) => normalizeVocabKey(entry.word) === key)) continue;
    const found = definitions.get(key);
    if (!found) continue;
    additions.push({ word, definition: found.definition });
    if (current.length + additions.length >= 5) break;
  }

  if (current.length + additions.length < 4) {
    const content = ` ${normalizeVocabKey(page.content)} `;
    const candidates = [...definitions.entries()]
      .filter(([key]) => key.length >= 3 && content.includes(` ${key} `))
      .sort((a, b) => b[0].length - a[0].length);

    for (const [key, found] of candidates) {
      if ([...current, ...additions].some((entry) => normalizeVocabKey(entry.word) === key)) continue;
      additions.push({ word: found.word, definition: found.definition });
      if (current.length + additions.length >= 4) break;
    }
  }

  return uniqueVocabulary([...current, ...additions]).slice(0, 5);
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (items.length < count) {
    throw new Error(`B1 Gold requires at least ${count} source items; found ${items.length}.`);
  }
  if (items.length === count) return items.slice();
  const picked: T[] = [];
  const used = new Set<number>();
  for (let index = 0; index < count; index += 1) {
    let sourceIndex = Math.round(index * (items.length - 1) / (count - 1));
    while (used.has(sourceIndex) && sourceIndex + 1 < items.length) sourceIndex += 1;
    used.add(sourceIndex);
    picked.push(items[sourceIndex]);
  }
  return picked;
};

const rotateArray = <T,>(items: T[], shift: number): T[] => {
  if (!items.length) return [];
  const normalized = ((shift % items.length) + items.length) % items.length;
  return [...items.slice(normalized), ...items.slice(0, normalized)];
};

const rotateObjectiveOptions = (exercise: Exercise): Exercise => {
  if (
    exercise.type !== 'multiple-choice'
    || !exercise.options
    || exercise.options.length < 2
    || typeof exercise.correctAnswer !== 'number'
  ) return exercise;

  const shift = [...exercise.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % exercise.options.length;
  if (!shift) return exercise;

  return {
    ...exercise,
    options: [...exercise.options.slice(-shift), ...exercise.options.slice(0, -shift)],
    correctAnswer: (exercise.correctAnswer + shift) % exercise.options.length,
  };
};

const cloneObjective = (
  item: BankItem,
  id: string,
  language: B1GoldLanguage,
): Exercise => {
  const text = languageText(language);
  const source = item.exercise;
  const clone: Exercise = {
    ...source,
    id,
    title: source.title || text.reviewTitle,
    instructions: source.type === 'true-false' ? text.trueFalse : text.choose,
    explanation: source.explanation?.trim() || text.retry,
    feedback: {
      correct: source.feedback?.correct?.trim() || text.correct,
      incorrect: source.feedback?.incorrect?.trim() || text.retry,
    },
  };
  return rotateObjectiveOptions(clone);
};

const selectGlossary = (
  storyPages: PageData[],
  start: number,
  end: number,
  count: number,
): VocabularyEntry[] => {
  const preferred = storyPages.slice(start, end).flatMap((page) => page.vocabulary || []);
  const all = storyPages.flatMap((page) => page.vocabulary || []);
  return uniqueVocabulary([...preferred, ...all]).slice(0, count);
};

const selectVocabularyPairs = (storyPages: PageData[], count: number): { word: string; meaning: string }[] =>
  uniqueVocabulary(storyPages.flatMap((page) => page.vocabulary || []))
    .slice(0, count)
    .map((entry) => ({ word: entry.word, meaning: entry.definition }));

export const applyB1GoldPages = ({
  canonicalPages,
  config,
  language,
}: {
  canonicalPages: PageData[];
  config: B1GoldPageConfig;
  language: B1GoldLanguage;
}): PageData[] => {
  const definitions = vocabularyDefinitionMap(canonicalPages);

  const storyPages = config.storyIds.map((id) => {
    const page = canonicalPages.find((candidate) => candidate.id === id && candidate.type === 'story');
    if (!page) throw new Error(`B1 Gold: story page ${id} is missing.`);
    const challenge = selectQuickChallenge(page, language);
    return {
      ...page,
      vocabulary: normalizeChapterVocabulary(page, definitions),
      exercises: [challenge],
    };
  });

  const bank: BankItem[] = [];
  const seenQuestions = new Set<string>();
  for (const page of storyPages) {
    const challenge = page.exercises?.[0] || fallbackQuickChallenge(page, language);
    const objective = objectiveFromChallenge(challenge, page, language);
    const key = normalizeQuestion(objective.question || '');
    if (!key || seenQuestions.has(key)) continue;
    seenQuestions.add(key);
    bank.push({ exercise: objective, chapterId: page.id });
  }

  if (bank.length < 10) {
    throw new Error(`B1 Gold requires at least 10 chapter-grounded objective questions; found ${bank.length}.`);
  }

  const knowledgeItems = pickEvenly(bank, 8);
  const reviewItems = pickEvenly(rotateArray(bank, Math.max(1, Math.floor(bank.length / 3))), 8);
  const finalItems = pickEvenly(rotateArray(bank, Math.max(1, Math.floor(bank.length / 2))), 10);
  const midpoint = Math.ceil(storyPages.length / 2);
  const glossary1 = selectGlossary(storyPages, 0, midpoint, 18);
  const glossary2 = selectGlossary(storyPages, midpoint, storyPages.length, 18);
  const vocabPairs = selectVocabularyPairs(storyPages, 10);
  const text = languageText(language);
  const storyById = new Map(storyPages.map((page) => [page.id, page]));

  return canonicalPages.map((page) => {
    const story = storyById.get(page.id);
    if (story) return story;

    if (page.id === config.knowledgeCheckPageId) {
      return {
        ...page,
        content: text.knowledge,
        exercises: knowledgeItems.map((item, index) => cloneObjective(item, `b1-gold-k${index + 1}`, language)),
      };
    }

    if (config.vocabularyPageId && page.id === config.vocabularyPageId) {
      return {
        ...page,
        content: text.vocabulary,
        vocabularyPairs: vocabPairs,
      };
    }

    if (page.id === config.reviewPageId) {
      return {
        ...page,
        title: language === 'ar' ? 'تحدي المراجعة B1' : 'B1 Review Challenge',
        content: text.review,
        exercises: reviewItems.map((item, index) => cloneObjective(item, `b1-gold-r${index + 1}`, language)),
      };
    }

    if (page.id === config.glossaryPageIds[0]) {
      return { ...page, content: text.glossary1, vocabulary: glossary1 };
    }

    if (page.id === config.glossaryPageIds[1]) {
      return { ...page, content: text.glossary2, vocabulary: glossary2 };
    }

    if (page.id === config.finalChallengePageId) {
      return {
        ...page,
        content: text.final,
        exercises: finalItems.map((item, index) => cloneObjective(item, `b1-gold-f${index + 1}`, language)),
      };
    }

    return page;
  });
};

export const sanitizeB1TeacherGuide = (sections: TeacherGuideSection[]): TeacherGuideSection[] =>
  sections.map((section) => ({ ...section, extraResources: undefined }));