import type { PageData } from '../../../../types';
import { meccaB2Pages as lockedPages } from './storySource';

const cleanPage = (page: PageData): PageData => {
  const clean: PageData = { ...page };
  delete clean.exercises;
  delete clean.sequencingItems;
  delete clean.vocabularyPairs;
  delete clean.syncPoints;
  delete clean.timedChunks;
  return clean;
};

export const meccaB2Pages: PageData[] = lockedPages.map(cleanPage);
