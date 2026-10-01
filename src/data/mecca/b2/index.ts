import type { BookData, PageData } from '../../../types';

import { meccaB2Pages } from './en/pages';

import { meccaB2PagesAr } from './ar/pages';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { meccaB2StoryMapLayout } from './storyMap';
import { meccaB2StoryMapCopyEn } from './en/storyMap';
import { meccaB2StoryMapCopyAr } from './ar/storyMap';

// Interactive map page, placed right after chapter 6 (the empires, the seas and the trade block of chapters 1–6).
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 6;

const withMapPage = (pages: PageData[], mapPage: PageData): PageData[] =>
  pages.flatMap(page => (page.id === MAP_AFTER_CHAPTER ? [page, mapPage] : [page]));

const mapPageEn: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'Mecca at the Crossroads',
  subtitle: 'Map · Chapters 1–6',
  content: '',
  map: buildStoryMap(meccaB2StoryMapLayout, meccaB2StoryMapCopyEn, 'Mecca B2 EN'),
};

const mapPageAr: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'مَكَّةُ عِنْدَ مُلْتَقى الطُّرُقِ',
  subtitle: 'خَريطَة · الفُصولُ مِنْ 1 إِلى 6',
  content: '',
  map: buildStoryMap(meccaB2StoryMapLayout, meccaB2StoryMapCopyAr, 'Mecca B2 AR'),
};

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Islamic History & Civilization: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: withMapPage(meccaB2Pages, mapPageEn),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: withMapPage(meccaB2PagesAr, mapPageAr),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const meccaB2BookData = meccaB2BookDataEn;
