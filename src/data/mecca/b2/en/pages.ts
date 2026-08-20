import type { PageData } from '../../../../types';
import { meccaB2Pages as lockedPages } from './storySource';

const cleanPage = (page: PageData): PageData => {
  const {
    exercises: _exercises,
    sequencingItems: _sequencingItems,
    vocabularyPairs: _vocabularyPairs,
    syncPoints: _syncPoints,
    timedChunks: _timedChunks,
    ...clean
  } = page;
  return clean as PageData;
};

export const meccaB2Pages: PageData[] = lockedPages.map(cleanPage);
