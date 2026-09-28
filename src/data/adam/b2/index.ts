import type { BookData } from '../../../types';
import { adamB2Pages } from './en/pages';
import { adamB2PagesAr } from './ar/pages';

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: adamB2Pages,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: adamB2PagesAr,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const adamB2BookData = adamB2BookDataEn;
