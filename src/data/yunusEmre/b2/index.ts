import type { BookData, PageData } from '../../../types';
import { withPlacesLayer } from '../../../features/historical-entities';
import { applyChapterExtras } from '../../../lib/chapterExtras';
import { yunusEmreB2ChapterExtrasEn } from './en/chapterExtras';
import { yunusEmreB2GroupTasksEn } from './en/groupTasks';
import { yunusEmreB2ChapterExtrasAr } from './ar/chapterExtras';
import { yunusEmreB2GroupTasksAr } from './ar/groupTasks';

import { yunusB2Pages } from './en/pages';
import { yunusEmreB2PagesAr } from './ar/pages';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { yunusB2StoryMapLayout } from './storyMap';
import { yunusB2StoryMapCopyEn } from './en/storyMap';
import { yunusB2StoryMapCopyAr } from './ar/storyMap';

// Interactive map page, placed after the last chapter (before the References page): the story is read without a break, then the whole journey is seen on the map.
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 13;

const withMapPage = (pages: PageData[], mapPage: PageData): PageData[] =>
  pages.flatMap(page => (page.id === MAP_AFTER_CHAPTER ? [page, mapPage] : [page]));

const mapPageEn: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'Anatolia in Yunus Emre’s Time',
  subtitle: 'Map · 1240–1320',
  content: '',
  map: buildStoryMap(yunusB2StoryMapLayout, yunusB2StoryMapCopyEn, 'Yunus Emre B2 EN'),
};

const mapPageAr: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'الأَنَاضُولُ في زَمَنِ يُونُسَ إِمْرَه',
  subtitle: 'خَرِيطَة · مِنْ عامِ 1240 إِلى عامِ 1320',
  content: '',
  map: buildStoryMap(yunusB2StoryMapLayout, yunusB2StoryMapCopyAr, 'Yunus Emre B2 AR'),
};

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Yunus Emre: History, Poetry, and Moral Thought (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: applyChapterExtras(withPlacesLayer(withMapPage(yunusB2Pages, mapPageEn), 'yunusEmre-b2', 'en'), { ...yunusEmreB2ChapterExtrasEn, groupTasks: yunusEmreB2GroupTasksEn }),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'يونس إمره: التاريخ والشعر والفكر الأخلاقي (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: applyChapterExtras(withPlacesLayer(withMapPage(yunusEmreB2PagesAr, mapPageAr), 'yunusEmre-b2', 'ar'), { ...yunusEmreB2ChapterExtrasAr, groupTasks: yunusEmreB2GroupTasksAr }),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
