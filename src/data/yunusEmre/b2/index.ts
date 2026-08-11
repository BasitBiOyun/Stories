import { BookData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { yunusB2PagesGoldFinalEn, yunusB2PagesGoldFinalAr } from './goldAttribution';
import {
  yunusB2TeacherGuideGoldEn,
  yunusB2TeacherGuideMetadataGoldEn,
  yunusB2SelfStudyGuideGoldEn,
  yunusB2StudentGuideSectionsGoldEn,
  yunusB2StudentGuideTextGoldEn,
  yunusB2StudentGuideMetadataGoldEn,
} from './gold';
import {
  yunusB2TeacherGuideGoldAr,
  yunusB2TeacherGuideMetadataGoldAr,
  yunusB2SelfStudyGuideGoldAr,
  yunusB2StudentGuideSectionsGoldAr,
  yunusB2StudentGuideTextGoldAr,
  yunusB2StudentGuideMetadataGoldAr,
} from './goldAr';

export const yunusB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(yunusB2PagesGoldFinalEn, {
  language: 'en',
  blockedHighlights: [
    'relates to',
    'adhere to',
    'coincided with',
    'cope with',
    'upside down',
  ],
  titleOverrides: {
    1: { 'h1-1': 'Old Anatolian Turkish', 'h1-2': 'Sûfî' },
    2: { 'h2-1': 'Historical accounts' },
    3: { 'h3-1': 'fine arts', 'h3-2': 'hard times' },
    4: { 'h4-1': 'Mongol invasion', 'h4-2': 'Turkmen rebelled' },
  },
  maxUniqueHighlights: 10,
});

export const yunusB2PagesBeforeHotspotSourceLockAr = applyB2StoryLanguageLock(yunusB2PagesGoldFinalAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const yunusB2PagesLockedEn = applyHotspotSourceLock(yunusB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
});

const yunusB2PagesLockedAr = applyHotspotSourceLock(yunusB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Stories of the Prophets: Yunus Emre (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: yunusB2PagesLockedEn,
  teacherGuide: yunusB2TeacherGuideGoldEn,
  teacherGuideMetadata: yunusB2TeacherGuideMetadataGoldEn,
  selfStudyGuide: yunusB2SelfStudyGuideGoldEn,
  studentGuideSections: yunusB2StudentGuideSectionsGoldEn,
  studentGuideText: yunusB2StudentGuideTextGoldEn,
  studentGuideMetadata: yunusB2StudentGuideMetadataGoldEn,
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'قصص الأنبياء: يونس إمره (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: yunusB2PagesLockedAr,
  teacherGuide: yunusB2TeacherGuideGoldAr,
  teacherGuideMetadata: yunusB2TeacherGuideMetadataGoldAr,
  selfStudyGuide: yunusB2SelfStudyGuideGoldAr,
  studentGuideSections: yunusB2StudentGuideSectionsGoldAr,
  studentGuideText: yunusB2StudentGuideTextGoldAr,
  studentGuideMetadata: yunusB2StudentGuideMetadataGoldAr,
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
