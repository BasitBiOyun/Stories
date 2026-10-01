import type { BookData, PageData } from '../../../types';
import { mosesB2Pages } from './en/pages';
import { mosesB2PagesAr } from './ar/pages';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { mosesB2StoryMapLayout } from './storyMap';
import { mosesB2StoryMapCopyEn } from './en/storyMap';
import { mosesB2StoryMapCopyAr } from './ar/storyMap';

// Interactive map page, placed right after chapter 3 (the end of the background block on Egypt, the dates, the Nile and the Delta).
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 3;

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

export const mosesB2BookDataEn:BookData={id:'moses-b2-en',title:'Stories of the Prophets: Moses (B2)',level:'B2',baseFontSize:13,pages:withMapPage(mosesB2Pages,mapPageEn),teacherGuide: [],selfStudyGuide: []};
export const mosesB2BookDataAr:BookData={id:'moses-b2-ar',title:'قصص الأنبياء: موسى عليه السلام (B2)',level:'B2',baseFontSize:14,pages:withMapPage(mosesB2PagesAr,mapPageAr),teacherGuide: [],selfStudyGuide: []};
export const mosesB2BookData=mosesB2BookDataEn;
