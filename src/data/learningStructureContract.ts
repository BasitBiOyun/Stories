import type { BookData, Level, PageData } from '../types';
import { getLearningLevelPolicy } from './learningLevelPolicy';

export const LEARNING_BOOK_STRUCTURE_STANDARD = {
  hotspotsPerStory: 2,
  quickChallengesPerStory: 1,
  minimumGlossaryPages: 1,
} as const;

export interface LearningBookStructureConfig {
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId: number;
  reviewPageId: number;
  glossaryPageIds: number[];
  finalChallengePageId: number;
}

export interface LearningStructureIssue {
  bookId: string;
  pageId?: number;
  code: string;
  message: string;
}

const pageById = (book: BookData, id: number): PageData | undefined => book.pages.find(page => page.id === id);

const issue = (
  book: BookData,
  code: string,
  message: string,
  pageId?: number,
): LearningStructureIssue => ({ bookId: book.id, pageId, code, message });

export const validateLearningBookStructure = (
  book: BookData,
  config: LearningBookStructureConfig,
): LearningStructureIssue[] => {
  const issues: LearningStructureIssue[] = [];
  const policy = getLearningLevelPolicy(book.level as Level);

  config.storyIds.forEach(chapterId => {
    const page = pageById(book, chapterId);
    if (!page || page.type !== 'story') {
      issues.push(issue(book, 'STORY_PAGE_MISSING', `Chapter ${chapterId} must be a story page.`, chapterId));
      return;
    }

    const hotspotCount = page.hotspots?.length ?? 0;
    if (hotspotCount !== LEARNING_BOOK_STRUCTURE_STANDARD.hotspotsPerStory) {
      issues.push(issue(
        book,
        'HOTSPOT_COUNT',
        `Chapter ${chapterId} must have exactly ${LEARNING_BOOK_STRUCTURE_STANDARD.hotspotsPerStory} hotspots; found ${hotspotCount}.`,
        chapterId,
      ));
    }

    if (page.hotspots) {
      const ids = new Set(page.hotspots.map(hotspot => hotspot.id));
      if (ids.size !== page.hotspots.length) {
        issues.push(issue(book, 'HOTSPOT_ID_DUPLICATE', `Chapter ${chapterId} hotspot IDs must be unique.`, chapterId));
      }
      page.hotspots.forEach(hotspot => {
        if (hotspot.x < 0 || hotspot.x > 100 || hotspot.y < 0 || hotspot.y > 100) {
          issues.push(issue(book, 'HOTSPOT_POSITION', `Hotspot ${hotspot.id} must stay inside the image (0–100%).`, chapterId));
        }
      });
    }

    const quickCount = page.exercises?.length ?? 0;
    if (quickCount !== LEARNING_BOOK_STRUCTURE_STANDARD.quickChallengesPerStory) {
      issues.push(issue(
        book,
        'QUICK_CHALLENGE_COUNT',
        `Chapter ${chapterId} must have exactly one Quick Challenge; found ${quickCount}.`,
        chapterId,
      ));
    }
  });

  const knowledge = pageById(book, config.knowledgeCheckPageId);
  if (!knowledge || knowledge.type !== 'quiz') {
    issues.push(issue(book, 'KNOWLEDGE_PAGE', 'Knowledge Check must remain a quiz page.', config.knowledgeCheckPageId));
  } else if ((knowledge.exercises?.length ?? 0) !== policy.knowledgeCount) {
    issues.push(issue(
      book,
      'KNOWLEDGE_COUNT',
      `Knowledge Check must contain exactly ${policy.knowledgeCount} questions; found ${knowledge.exercises?.length ?? 0}.`,
      knowledge.id,
    ));
  }

  const vocabulary = pageById(book, config.vocabularyPageId);
  if (!vocabulary || vocabulary.type !== 'vocabulary-match') {
    issues.push(issue(book, 'VOCABULARY_PAGE', 'Vocabulary Challenge must remain a vocabulary-match page.', config.vocabularyPageId));
  } else {
    const vocabularyPairs = vocabulary.vocabularyPairs ?? [];
    if (vocabularyPairs.length !== policy.vocabularyCount) {
      issues.push(issue(
        book,
        'VOCABULARY_COUNT',
        `Vocabulary Challenge must contain exactly ${policy.vocabularyCount} target words; found ${vocabularyPairs.length}.`,
        vocabulary.id,
      ));
    }

    const contextualCount = vocabularyPairs.filter(pair => Boolean(pair.context?.trim())).length;
    if (contextualCount < policy.vocabularyContextCount) {
      issues.push(issue(
        book,
        'VOCABULARY_CONTEXT_COUNT',
        `Vocabulary Challenge needs at least ${policy.vocabularyContextCount} story-grounded context items; found ${contextualCount}.`,
        vocabulary.id,
      ));
    }
  }

  const review = pageById(book, config.reviewPageId);
  if (!review || review.type !== 'exercises') {
    issues.push(issue(book, 'LANGUAGE_REVIEW_PAGE', 'Language Review must remain an exercises page.', config.reviewPageId));
  } else if (!(review.exercises?.length)) {
    issues.push(issue(book, 'LANGUAGE_REVIEW_EMPTY', 'Language Review must contain reviewed language tasks.', review.id));
  }

  if (config.glossaryPageIds.length < LEARNING_BOOK_STRUCTURE_STANDARD.minimumGlossaryPages) {
    issues.push(issue(
      book,
      'GLOSSARY_PAGE_COUNT',
      `Book config must contain at least ${LEARNING_BOOK_STRUCTURE_STANDARD.minimumGlossaryPages} Master Glossary page; found ${config.glossaryPageIds.length}.`,
    ));
  }

  config.glossaryPageIds.forEach(glossaryId => {
    const glossary = pageById(book, glossaryId);
    if (!glossary || glossary.type !== 'glossary') {
      issues.push(issue(book, 'GLOSSARY_PAGE', 'Master Glossary page is missing or has the wrong page type.', glossaryId));
    } else if (!(glossary.vocabulary?.length)) {
      issues.push(issue(book, 'GLOSSARY_EMPTY', 'Master Glossary page must contain vocabulary.', glossaryId));
    }
  });

  const pageIndex = (id: number) => book.pages.findIndex(page => page.id === id);
  const knowledgeIndex = pageIndex(config.knowledgeCheckPageId);
  const vocabularyIndex = pageIndex(config.vocabularyPageId);
  const reviewIndex = pageIndex(config.reviewPageId);
  const finalIndex = pageIndex(config.finalChallengePageId);
  const glossaryIndexes = config.glossaryPageIds
    .map(pageIndex)
    .filter(index => index >= 0);
  const firstGlossaryIndex = glossaryIndexes.length ? Math.min(...glossaryIndexes) : -1;
  const lastGlossaryIndex = glossaryIndexes.length ? Math.max(...glossaryIndexes) : -1;

  if (
    knowledgeIndex >= 0 &&
    firstGlossaryIndex >= 0 &&
    lastGlossaryIndex >= 0 &&
    vocabularyIndex >= 0 &&
    reviewIndex >= 0 &&
    finalIndex >= 0 &&
    !(
      knowledgeIndex < firstGlossaryIndex &&
      lastGlossaryIndex < vocabularyIndex &&
      vocabularyIndex < reviewIndex &&
      reviewIndex < finalIndex
    )
  ) {
    issues.push(issue(
      book,
      'LEARNING_PAGE_ORDER',
      'Whole-book learning flow must be Knowledge Check → Master Glossary → Vocabulary Challenge → Language Review → Final Challenge.',
    ));
  }

  const finalChallenge = pageById(book, config.finalChallengePageId);
  if (!finalChallenge || finalChallenge.type !== 'final-challenge') {
    issues.push(issue(book, 'FINAL_CHALLENGE_PAGE', 'Final Challenge must remain a final-challenge page.', config.finalChallengePageId));
  } else if ((finalChallenge.exercises?.length ?? 0) !== policy.finalCount) {
    issues.push(issue(
      book,
      'FINAL_CHALLENGE_COUNT',
      `Final Challenge must contain exactly ${policy.finalCount} questions; found ${finalChallenge.exercises?.length ?? 0}.`,
      finalChallenge.id,
    ));
  }

  return issues;
};
