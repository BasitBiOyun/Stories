import { BookData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import {
  meccaB2PagesGoldEn,
  meccaB2TeacherGuideGoldEn,
  meccaB2TeacherGuideMetadataGoldEn,
  meccaB2SelfStudyGuideGoldEn,
  meccaB2StudentGuideSectionsGoldEn,
  meccaB2StudentGuideTextGoldEn,
  meccaB2StudentGuideMetadataGoldEn,
} from './gold';
import {
  meccaB2PagesGoldAr,
  meccaB2TeacherGuideGoldAr,
  meccaB2TeacherGuideMetadataGoldAr,
  meccaB2SelfStudyGuideGoldAr,
  meccaB2StudentGuideSectionsGoldAr,
  meccaB2StudentGuideTextGoldAr,
  meccaB2StudentGuideMetadataGoldAr,
} from './goldAr';

export const meccaB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(meccaB2PagesGoldEn, {
  language: 'en',
  maxUniqueHighlights: 10,
});

export const meccaB2PagesBeforeHotspotSourceLockAr = applyB2StoryLanguageLock(meccaB2PagesGoldAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const meccaB2PagesLockedEn = applyHotspotSourceLock(meccaB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
});

const meccaB2PagesLockedAr = applyHotspotSourceLock(meccaB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Stories of the Prophets: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: meccaB2PagesLockedEn,
  teacherGuide: meccaB2TeacherGuideGoldEn,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataGoldEn,
  selfStudyGuide: meccaB2SelfStudyGuideGoldEn,
  studentGuideSections: meccaB2StudentGuideSectionsGoldEn,
  studentGuideText: meccaB2StudentGuideTextGoldEn,
  studentGuideMetadata: meccaB2StudentGuideMetadataGoldEn,
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: meccaB2PagesLockedAr,
  teacherGuide: meccaB2TeacherGuideGoldAr,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataGoldAr,
  selfStudyGuide: meccaB2SelfStudyGuideGoldAr,
  studentGuideSections: meccaB2StudentGuideSectionsGoldAr,
  studentGuideText: meccaB2StudentGuideTextGoldAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataGoldAr,
};

export const meccaB2BookData = meccaB2BookDataEn;
