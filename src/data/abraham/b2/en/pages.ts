import type { PageData } from '../../../../types';
import { abrahamB2Pages as lockedAbrahamB2Pages } from './lockedStorySource';

const cleanShell = (page: PageData): PageData => {
  const {
    exercises: _exercises,
    sequencingItems: _sequencingItems,
    vocabularyPairs: _vocabularyPairs,
    ...base
  } = page;

  if (page.id === 36) {
    return {
      ...base,
      type: 'quiz',
      title: 'B2 Knowledge Check',
      content: 'Check your understanding of the complete Prophet Abraham B2 story.',
      image: '',
      audioUrl: '',
      vocabulary: undefined,
      hotspots: undefined,
      animatedWords: undefined,
      syncPoints: undefined,
      timedChunks: undefined,
    };
  }

  if (page.id === 37) {
    return {
      ...base,
      type: 'exercises',
      title: 'B2 Retrieval Review',
      content: 'Retrieve, reconnect, and use evidence from across the complete story.',
    };
  }

  if (page.id === 38) {
    return {
      ...base,
      type: 'vocabulary-match',
      title: 'B2 Vocabulary Challenge',
      content: 'Match ten meaning-bearing story terms with their precise meanings.',
      vocabulary: undefined,
      animatedWords: undefined,
    };
  }

  if (page.id === 39) {
    return {
      ...base,
      type: 'glossary',
      title: 'B2 Story Glossary',
    };
  }

  if (page.id === 40) {
    return {
      ...base,
      type: 'final-challenge',
      title: 'Final Challenge',
      content: 'Demonstrate whole-book B2 mastery through analysis, evidence, comparison, and synthesis.',
    };
  }

  return base;
};

// Canonical story prose lives unchanged in lockedStorySource.ts.
// This active file exposes story/media/Word Notes/hotspots/page shells only.
// All authored learning activities are attached from exercises.ts in ../index.ts.
export const abrahamB2Pages: PageData[] = lockedAbrahamB2Pages.map(cleanShell);
