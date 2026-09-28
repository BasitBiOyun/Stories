import type { BookData } from '../../../types';

import { yunusB2Pages } from './en/pages';
import { yunusEmreB2PagesAr } from './ar/pages';

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Yunus Emre: History, Poetry, and Moral Thought (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: yunusB2Pages,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'يونس إمره: التاريخ والشعر والفكر الأخلاقي (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: yunusEmreB2PagesAr,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
