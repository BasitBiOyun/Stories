import type { Level } from '../types';
import type { CollectionId, StoryId } from '../core/content/contracts';
import catalog from './bookCatalog.json';

export interface BookCatalogEntry {
  storyId: StoryId;
  level: Level;
  collection: CollectionId;
}

/** Which editions exist. Adding a book or a level is a line of data, not code. */
export const bookCatalog = catalog.editions as readonly BookCatalogEntry[];
