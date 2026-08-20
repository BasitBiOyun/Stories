import type { PageData } from '../../../../types';
import { mosesB2Pages as lockedMosesB2Pages } from './storySource';

/**
 * Runtime page shells for Moses B2 English.
 * Canonical story/media/Word Notes/hotspots are preserved in storySource.ts.
 * Legacy learning payloads are deliberately removed here; exercises.ts is the
 * single active source of learning activities.
 */
const cleanRuntimePage = (page: PageData): PageData => {
  const cleaned: PageData = { ...page };
  delete cleaned.exercises;
  delete cleaned.sequencingItems;
  delete cleaned.vocabularyPairs;
  delete cleaned.syncPoints;
  return cleaned;
};

export const mosesB2Pages: PageData[] = lockedMosesB2Pages.map(cleanRuntimePage);
