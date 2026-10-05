import type { BookData } from '../../../types';
import { applyChapterExtras } from '../../../lib/chapterExtras';
import { adamB2ChapterExtrasEn } from './en/chapterExtras';
import { adamB2GroupTasksEn } from './en/groupTasks';
import { adamB2ChapterExtrasAr } from './ar/chapterExtras';
import { adamB2GroupTasksAr } from './ar/groupTasks';
import { adamB2Pages } from './en/pages';
import { adamB2PagesAr } from './ar/pages';

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: applyChapterExtras(adamB2Pages, { ...adamB2ChapterExtrasEn, groupTasks: adamB2GroupTasksEn }),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم عليه السلام',
  level: 'B2',
  baseFontSize: 14,
  pages: applyChapterExtras(adamB2PagesAr, { ...adamB2ChapterExtrasAr, groupTasks: adamB2GroupTasksAr }),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const adamB2BookData = adamB2BookDataEn;
