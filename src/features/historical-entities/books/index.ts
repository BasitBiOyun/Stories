import type { HistoricalEntity } from '../types';
import { IBN_JUBAYR_A2_CHAPTER_ENTITIES, ibnJubayrA2Entities } from './ibnJubayrA2';
import { ABRAHAM_SET } from './abraham';
import { MOSES_SET } from './moses';
import { YUNUS_EMRE_SET } from './yunus';
import { MECCA_SET } from './mecca';
import { GEVHER_NESIBE_SET } from './gevherNesibe';

/** One story's cards and, per book level, the cards each chapter offers. */
export interface EntityBookSet {
  entities: HistoricalEntity[];
  chapters: Record<string, Record<number, string[]>>;
}

export const BOOK_SETS: EntityBookSet[] = [
  { entities: Object.values(ibnJubayrA2Entities), chapters: { 'ibnjubayr-a2': IBN_JUBAYR_A2_CHAPTER_ENTITIES } },
  MECCA_SET,
  ABRAHAM_SET,
  MOSES_SET,
  YUNUS_EMRE_SET,
  GEVHER_NESIBE_SET,
];
