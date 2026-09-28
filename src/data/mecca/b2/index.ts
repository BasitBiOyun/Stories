import type { BookData } from '../../../types';

import { meccaB2Pages } from './en/pages';

import { meccaB2PagesAr } from './ar/pages';

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Islamic History & Civilization: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: meccaB2Pages,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: meccaB2PagesAr,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const meccaB2BookData = meccaB2BookDataEn;
