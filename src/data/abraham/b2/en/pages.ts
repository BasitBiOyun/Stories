import type { PageData } from '../../../../types';
import { abrahamB2Pages as lockedAbrahamB2Pages } from './lockedStorySource';

const refineStorySupport = (page: PageData): PageData => {
  if (page.id === 1) {
    return {
      ...page,
      hotspots: page.hotspots?.map(hotspot => hotspot.id === 'b2-hs-1-2'
        ? { ...hotspot, description: 'Abraham is presented as a fundamental figure in Judaism, Christianity, and Islam.' }
        : hotspot),
    };
  }

  if (page.id === 4) {
    return {
      ...page,
      hotspots: page.hotspots?.map(hotspot => hotspot.id === 'b2-hs-4-1'
        ? { ...hotspot, description: "Islamic sources present Azer as Nimrod's idol maker." }
        : hotspot),
    };
  }

  if (page.id === 5) {
    return {
      ...page,
      hotspots: page.hotspots?.map(hotspot => {
        if (hotspot.id === 'b2-hs-5-1') return { ...hotspot, description: "In one report, Nimrod's astrologers predict that a child will threaten his reign." };
        if (hotspot.id === 'b2-hs-5-2') return { ...hotspot, description: 'The chapter reports that Azer hid his pregnant wife in a cave.' };
        return hotspot;
      }),
    };
  }

  if (page.id === 10) {
    return {
      ...page,
      vocabulary: page.vocabulary?.map(item => item.word === 'Bodies'
        ? { ...item, definition: 'Celestial bodies such as stars, planets, the sun, and the moon.' }
        : item),
    };
  }

  return page;
};

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
      image: '',
    };
  }

  if (page.id === 38) {
    return {
      ...base,
      type: 'vocabulary-match',
      title: 'B2 Vocabulary Challenge',
      content: 'Match ten meaning-bearing story terms with their precise meanings.',
      image: '',
      vocabulary: undefined,
      animatedWords: undefined,
    };
  }

  if (page.id === 39) {
    return {
      ...base,
      type: 'glossary',
      title: 'B2 Story Glossary',
      image: '',
    };
  }

  if (page.id === 40) {
    return {
      ...base,
      type: 'final-challenge',
      title: 'Final Challenge',
      content: 'Demonstrate whole-book B2 mastery through analysis, evidence, comparison, and synthesis.',
      image: '',
    };
  }

  return page.type === 'story' ? refineStorySupport(base) : base;
};

// Canonical story prose lives unchanged in lockedStorySource.ts.
// This active file exposes story/media/Word Notes/hotspots/page shells only.
// All authored learning activities are attached from exercises.ts in ../index.ts.
export const abrahamB2Pages: PageData[] = lockedAbrahamB2Pages.map(cleanShell);
