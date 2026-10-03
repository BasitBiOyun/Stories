import type { BookData, PageData } from '../../../types';
import { withPlacesLayer } from '../../../features/historical-entities';
import { applyChapterExtras } from '../../../lib/chapterExtras';
import { abrahamB2ChapterExtrasEn } from './en/chapterExtras';
import { abrahamB2GroupTasksEn } from './en/groupTasks';
import { abrahamB2ChapterExtrasAr } from './ar/chapterExtras';
import { abrahamB2GroupTasksAr } from './ar/groupTasks';
import { abrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr } from './ar/pages';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { abrahamB2StoryMapLayout } from './storyMap';
import { abrahamB2StoryMapCopyEn } from './en/storyMap';
import { abrahamB2StoryMapCopyAr } from './ar/storyMap';

// Interactive map page, placed right after chapter 4 ("Abraham’s Land and Time", where the birthplace,
// Harran and the dates are discussed) as a preview of the journey. Chapter 5 starts a new scene.
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 4;

const withMapPage = (pages: PageData[], mapPage: PageData): PageData[] =>
  pages.flatMap(page => (page.id === MAP_AFTER_CHAPTER ? [page, mapPage] : [page]));

const mapPageEn: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'Abraham’s Journey',
  subtitle: 'Map · Chapters 4–35',
  content: '',
  map: buildStoryMap(abrahamB2StoryMapLayout, abrahamB2StoryMapCopyEn, 'Abraham B2 EN'),
};

const mapPageAr: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'رِحْلَةُ إِبْراهيمَ عَلَيْهِ السَّلامُ',
  subtitle: 'خَريطَة · الفُصولُ مِنْ 4 إِلى 35',
  content: '',
  map: buildStoryMap(abrahamB2StoryMapLayout, abrahamB2StoryMapCopyAr, 'Abraham B2 AR'),
};

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: applyChapterExtras(withPlacesLayer(withMapPage(abrahamB2Pages, mapPageEn), 'abraham-b2', 'en'), { ...abrahamB2ChapterExtrasEn, groupTasks: abrahamB2GroupTasksEn }),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم عليه السلام (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: applyChapterExtras(withPlacesLayer(withMapPage(abrahamB2PagesAr, mapPageAr), 'abraham-b2', 'ar'), { ...abrahamB2ChapterExtrasAr, groupTasks: abrahamB2GroupTasksAr }),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const abrahamB2BookData = abrahamB2BookDataEn;
