import type { Exercise, PageData, TeacherGuideSection } from '../types';

export type B2GoldLanguage = 'en' | 'ar';

export interface B2GoldPageConfig {
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
}

type VocabularyEntry = NonNullable<PageData['vocabulary']>[number];

type BankItem = {
  chapterId: number;
  exercise: Exercise;
};

const normalize = (value: string): string => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/\p{M}/gu, '')
  .replace(/[^\p{L}\p{N}]+/gu, ' ')
  .trim();

const cleanSentence = (value: string): string => value
  .replace(/\s+/g, ' ')
  .trim()
  .replace(/[.!?؟]+$/, '');

const copy = (language: B2GoldLanguage) => language === 'ar'
  ? {
      choose: 'اختر أفضل إجابة بالاعتماد على الدليل الوارد في الفصل.',
      trueFalse: 'حدد صحة العبارة بالاعتماد على النص، ثم ارجع إلى الدليل عند الحاجة.',
      correct: 'صحيح. الإجابة مدعومة بدليل من النص.',
      retry: 'ارجع إلى الفقرة ذات الصلة، وحدد الدليل، ثم حاول مرة أخرى.',
      knowledge: 'راجع الأدلة والأسباب والمقارنات ونقاط التحول في القصة.',
      review: 'اربط الأدلة بالأسباب والاختيارات والنتائج قبل التحدي النهائي.',
      final: 'أجب عن عشرة أسئلة موضوعية تغطي القصة كاملة وتعتمد على النص.',
      vocabulary: 'طابق عشر كلمات أو عبارات مهمة بمعانيها في سياق القصة.',
      glossary1: 'مفردات B2 مختارة من النصف الأول من القصة.',
      glossary2: 'مفردات B2 مختارة من النصف الثاني من القصة.',
      reviewTitle: 'تحدي المراجعة — B2',
      finalTitle: 'التحدي النهائي — B2',
      fallbackTitle: 'دليل وتحليل من الفصل',
      fallbackQuestionPrefix: 'وفقاً للفصل، هل العبارة الآتية مدعومة بالنص؟',
    }
  : {
      choose: 'Choose the best answer. Use evidence from the chapter.',
      trueFalse: 'Decide whether the statement is supported by the chapter, then return to the evidence if needed.',
      correct: 'Correct. The answer is supported by evidence from the text.',
      retry: 'Return to the relevant paragraph, identify the evidence, and try again.',
      knowledge: 'Review evidence, causes, comparisons, and turning points across the story.',
      review: 'Connect evidence, causes, choices, and consequences before the Final Challenge.',
      final: 'Complete ten objective questions covering the whole story and grounded in the text.',
      vocabulary: 'Match ten useful B2 words or phrases from the story with their meanings.',
      glossary1: 'Selected B2 vocabulary from the first half of the story.',
      glossary2: 'Selected B2 vocabulary from the second half of the story.',
      reviewTitle: 'B2 Review Challenge',
      finalTitle: 'B2 Final Challenge',
      fallbackTitle: 'Evidence and Analysis',
      fallbackQuestionPrefix: 'According to the chapter, is this statement supported by the text?',
    };

const isObjective = (exercise: Exercise): boolean =>
  Boolean(exercise.question?.trim())
  && (exercise.type === 'multiple-choice' || exercise.type === 'true-false');

const b2Score = (exercise: Exercise): number => {
  const haystack = `${exercise.title || ''} ${exercise.instructions || ''} ${exercise.question || ''}`.toLowerCase();
  let score = isObjective(exercise) ? 4 : 0;
  for (const marker of [
    'why', 'how', 'infer', 'inference', 'evidence', 'cause', 'result', 'effect', 'compare', 'contrast',
    'evaluate', 'evaluation', 'relationship', 'suggest', 'reveal', 'interpret', 'significance', 'purpose',
    'لماذا', 'كيف', 'دليل', 'سبب', 'نتيجة', 'قارن', 'مقارنة', 'استنتج', 'يدل', 'يكشف', 'تفسير', 'أهمية',
  ]) {
    if (haystack.includes(marker)) score += 2;
  }
  if (exercise.explanation?.trim()) score += 2;
  if ((exercise.feedback?.incorrect?.trim().length ?? 0) >= 20) score += 2;
  return score;
};

const enrichExercise = (exercise: Exercise, page: PageData, language: B2GoldLanguage): Exercise => {
  const text = copy(language);
  const evidence = exercise.explanation?.trim()
    || page.hotspots?.[0]?.description?.trim()
    || cleanSentence(page.content.split(/\n\s*\n/)[0] || page.content);

  return {
    ...exercise,
    title: exercise.title || text.fallbackTitle,
    instructions: exercise.instructions || (exercise.type === 'true-false' ? text.trueFalse : text.choose),
    explanation: exercise.explanation?.trim() || evidence,
    feedback: {
      correct: exercise.feedback?.correct?.trim() || text.correct,
      incorrect: (exercise.feedback?.incorrect?.trim().length ?? 0) >= 20
        ? exercise.feedback!.incorrect
        : text.retry,
    },
  };
};

const fallbackQuickChallenge = (page: PageData, language: B2GoldLanguage): Exercise => {
  const text = copy(language);
  const evidence = cleanSentence(page.hotspots?.[0]?.description || page.content.split(/\n\s*\n/)[0] || page.title);
  return {
    id: `b2-gold-ch${page.id}-evidence`,
    type: 'true-false',
    title: text.fallbackTitle,
    instructions: text.trueFalse,
    question: `${text.fallbackQuestionPrefix} ${evidence}`,
    correctAnswer: true,
    explanation: evidence,
    feedback: { correct: text.correct, incorrect: text.retry },
  };
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

const uniqueVocabulary = (entries: VocabularyEntry[]): VocabularyEntry[] => {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    const key = normalize(entry.word);
    if (!key || seen.has(key) || !entry.definition?.trim()) return false;
    seen.add(key);
    return true;
  });
};

const vocabularyMap = (pages: PageData[]): Map<string, VocabularyEntry> => {
  const map = new Map<string, VocabularyEntry>();
  for (const page of pages) {
    for (const entry of page.vocabulary || []) {
      const key = normalize(entry.word);
      if (key && entry.definition?.trim() && !map.has(key)) map.set(key, entry);
    }
  }
  return map;
};

const normalizeChapterVocabulary = (page: PageData, definitions: Map<string, VocabularyEntry>): VocabularyEntry[] => {
  const current = uniqueVocabulary([...(page.vocabulary || [])]);
  const additions: VocabularyEntry[] = [];

  for (const word of page.animatedWords || []) {
    const key = normalize(word);
    if (!key || current.some((entry) => normalize(entry.word) === key)) continue;
    const found = definitions.get(key);
    if (found) additions.push({ word, definition: found.definition });
  }

  if (current.length + additions.length < 4) {
    const content = ` ${normalize(page.content)} `;
    const candidates = [...definitions.entries()]
      .filter(([key]) => key.length >= 4 && content.includes(` ${key} `))
      .sort((a, b) => b[0].length - a[0].length);
    for (const [key, found] of candidates) {
      if ([...current, ...additions].some((entry) => normalize(entry.word) === key)) continue;
      additions.push(found);
      if (current.length + additions.length >= 4) break;
    }
  }

  return uniqueVocabulary([...current, ...additions]).slice(0, 7);
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (items.length < count) throw new Error(`B2 Gold requires at least ${count} source items; found ${items.length}.`);
  if (items.length === count) return items.slice();
  const result: T[] = [];
  const used = new Set<number>();
  for (let index = 0; index < count; index += 1) {
    let sourceIndex = Math.round(index * (items.length - 1) / (count - 1));
    while (used.has(sourceIndex) && sourceIndex + 1 < items.length) sourceIndex += 1;
    used.add(sourceIndex);
    result.push(items[sourceIndex]);
  }
  return result;
};

const rotateArray = <T,>(items: T[], shift: number): T[] => {
  if (!items.length) return [];
  const normalized = ((shift % items.length) + items.length) % items.length;
  return [...items.slice(normalized), ...items.slice(0, normalized)];
};

const cloneObjective = (item: BankItem, id: string, language: B2GoldLanguage): Exercise => {
  const text = copy(language);
  const source = item.exercise;
  return rotateObjectiveOptions({
    ...source,
    id,
    instructions: source.type === 'true-false' ? text.trueFalse : text.choose,
    explanation: source.explanation?.trim() || text.retry,
    feedback: {
      correct: source.feedback?.correct?.trim() || text.correct,
      incorrect: (source.feedback?.incorrect?.trim().length ?? 0) >= 20 ? source.feedback!.incorrect : text.retry,
    },
  });
};

const selectGlossary = (storyPages: PageData[], start: number, end: number, count: number): VocabularyEntry[] => {
  const preferred = storyPages.slice(start, end).flatMap((page) => page.vocabulary || []);
  const all = storyPages.flatMap((page) => page.vocabulary || []);
  return uniqueVocabulary([...preferred, ...all]).slice(0, count);
};

export const applyB2GoldPages = ({
  canonicalPages,
  config,
  language,
  quickChallengeOverrides = {},
}: {
  canonicalPages: PageData[];
  config: B2GoldPageConfig;
  language: B2GoldLanguage;
  quickChallengeOverrides?: Record<number, Exercise>;
}): PageData[] => {
  const definitions = vocabularyMap(canonicalPages);

  const storyPages = config.storyIds.map((id) => {
    const page = canonicalPages.find((candidate) => candidate.id === id && candidate.type === 'story');
    if (!page) throw new Error(`B2 Gold: story page ${id} is missing.`);
    const candidates = [...(page.exercises || [])].sort((a, b) => b2Score(b) - b2Score(a));
    const chosen = quickChallengeOverrides[id] || candidates[0] || fallbackQuickChallenge(page, language);
    const challenge = rotateObjectiveOptions(enrichExercise(chosen, page, language));
    return {
      ...page,
      vocabulary: normalizeChapterVocabulary(page, definitions),
      exercises: [challenge],
    };
  });

  const bank: BankItem[] = [];
  const seen = new Set<string>();
  for (const page of storyPages) {
    const challenge = page.exercises?.[0] || fallbackQuickChallenge(page, language);
    if (!isObjective(challenge)) continue;
    const key = normalize(challenge.question || '');
    if (!key || seen.has(key)) continue;
    seen.add(key);
    bank.push({ chapterId: page.id, exercise: challenge });
  }

  if (bank.length < 10) throw new Error(`B2 Gold requires at least 10 chapter-grounded objective questions; found ${bank.length}.`);

  const knowledge = pickEvenly(bank, 8);
  const review = pickEvenly(rotateArray(bank, Math.max(1, Math.floor(bank.length / 3))), 8);
  const finalChallenge = pickEvenly(rotateArray(bank, Math.max(1, Math.floor(bank.length / 2))), 10);
  const midpoint = Math.ceil(storyPages.length / 2);
  const glossary1 = selectGlossary(storyPages, 0, midpoint, 18);
  const glossary2 = selectGlossary(storyPages, midpoint, storyPages.length, 18);
  const vocabularyPairs = uniqueVocabulary(storyPages.flatMap((page) => page.vocabulary || []))
    .slice(0, 10)
    .map((entry) => ({ word: entry.word, meaning: entry.definition }));
  const text = copy(language);
  const storyById = new Map(storyPages.map((page) => [page.id, page]));

  return canonicalPages.map((page) => {
    const story = storyById.get(page.id);
    if (story) return story;

    if (page.id === config.knowledgeCheckPageId) {
      return { ...page, content: text.knowledge, exercises: knowledge.map((item, index) => cloneObjective(item, `b2-gold-k${index + 1}`, language)) };
    }
    if (config.vocabularyPageId && page.id === config.vocabularyPageId) {
      return { ...page, content: text.vocabulary, vocabularyPairs };
    }
    if (page.id === config.reviewPageId) {
      return { ...page, title: text.reviewTitle, content: text.review, exercises: review.map((item, index) => cloneObjective(item, `b2-gold-r${index + 1}`, language)) };
    }
    if (page.id === config.glossaryPageIds[0]) return { ...page, content: text.glossary1, vocabulary: glossary1 };
    if (page.id === config.glossaryPageIds[1]) return { ...page, content: text.glossary2, vocabulary: glossary2 };
    if (page.id === config.finalChallengePageId) {
      return { ...page, title: text.finalTitle, content: text.final, exercises: finalChallenge.map((item, index) => cloneObjective(item, `b2-gold-f${index + 1}`, language)) };
    }
    return page;
  });
};

export const sanitizeB2TeacherGuide = (sections: TeacherGuideSection[]): TeacherGuideSection[] =>
  sections.map((section) => ({ ...section, extraResources: undefined }));
