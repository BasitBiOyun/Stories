import type { BookData, PageData } from '../../../types';
import { withPlacesLayer } from '../../../features/historical-entities';
import { applyChapterExtras } from '../../../lib/chapterExtras';
import { mosesB2ChapterExtrasEn } from './en/chapterExtras';
import { mosesB2GroupTasksEn } from './en/groupTasks';
import { mosesB2ChapterExtrasAr } from './ar/chapterExtras';
import { mosesB2GroupTasksAr } from './ar/groupTasks';
import { mosesB2Pages } from './en/pages';
import { mosesB2PagesAr } from './ar/pages';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { mosesB2StoryMapLayout } from './storyMap';
import { mosesB2StoryMapCopyEn } from './en/storyMap';
import { mosesB2StoryMapCopyAr } from './ar/storyMap';

// Interactive map page, placed after the last chapter: the story is read without a break, then the whole journey is seen on the map.
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 24;

const withMapPage = (pages: PageData[], mapPage: PageData): PageData[] =>
  pages.flatMap(page => (page.id === MAP_AFTER_CHAPTER ? [page, mapPage] : [page]));

const mapPageEn: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'Moses’ Journey',
  subtitle: 'Map · Chapters 1–24',
  content: '',
  map: buildStoryMap(mosesB2StoryMapLayout, mosesB2StoryMapCopyEn, 'Moses B2 EN'),
};

const mapPageAr: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'رِحْلَةُ مُوسَى عَلَيْهِ السَّلَامُ',
  subtitle: 'خَريطَة · مِنَ الفَصْلِ 1 إِلى الفَصْلِ 24',
  content: '',
  map: buildStoryMap(mosesB2StoryMapLayout, mosesB2StoryMapCopyAr, 'Moses B2 AR'),
};

export const mosesB2BookDataEn:BookData={id:'moses-b2-en',title:'Stories of the Prophets: Moses (B2)',level:'B2',baseFontSize:13,pages:applyChapterExtras(withPlacesLayer(withMapPage(mosesB2Pages,mapPageEn), 'moses-b2', 'en'), { ...mosesB2ChapterExtrasEn, groupTasks: mosesB2GroupTasksEn }),teacherGuide: [],selfStudyGuide: []};
export const mosesB2BookDataAr:BookData={id:'moses-b2-ar',title:'قصص الأنبياء: موسى عليه السلام (B2)',level:'B2',baseFontSize:14,pages:applyChapterExtras(withPlacesLayer(withMapPage(mosesB2PagesAr,mapPageAr), 'moses-b2', 'ar'), { ...mosesB2ChapterExtrasAr, groupTasks: mosesB2GroupTasksAr }),teacherGuide: [],selfStudyGuide: []};
export const mosesB2BookData=mosesB2BookDataEn;
