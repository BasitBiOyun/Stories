import { BookData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import {
  abrahamB2PagesGoldEn,
  abrahamB2TeacherGuideGoldEn,
  abrahamB2TeacherGuideMetadataGoldEn,
  abrahamB2StudentGuideMetadataGoldEn,
  abrahamB2StudentGuideSectionsGoldEn,
  abrahamB2StudentGuideTextGoldEn,
  abrahamB2SelfStudyGuideGoldEn,
} from './gold';
import {
  abrahamB2PagesGoldAr,
  abrahamB2TeacherGuideGoldAr,
  abrahamB2TeacherGuideMetadataGoldAr,
  abrahamB2StudentGuideMetadataGoldAr,
  abrahamB2StudentGuideSectionsGoldAr,
  abrahamB2StudentGuideTextGoldAr,
  abrahamB2SelfStudyGuideGoldAr,
} from './goldAr';

export const abrahamB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(abrahamB2PagesGoldEn, {
  language: 'en',
  maxUniqueHighlights: 10,
});

export const abrahamB2PagesBeforeHotspotSourceLockAr = applyB2StoryLanguageLock(abrahamB2PagesGoldAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const abrahamB2PagesLockedEn = applyHotspotSourceLock(abrahamB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
});

const abrahamB2PagesLockedAr = applyHotspotSourceLock(abrahamB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: abrahamB2PagesLockedEn,
  teacherGuide: abrahamB2TeacherGuideGoldEn,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataGoldEn,
  studentGuideMetadata: abrahamB2StudentGuideMetadataGoldEn,
  studentGuideSections: abrahamB2StudentGuideSectionsGoldEn,
  selfStudyGuide: abrahamB2SelfStudyGuideGoldEn,
  studentGuideText: abrahamB2StudentGuideTextGoldEn
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (ع)',
  level: 'B2',
  baseFontSize: 14,
  pages: abrahamB2PagesLockedAr,
  teacherGuide: abrahamB2TeacherGuideGoldAr,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataGoldAr,
  studentGuideMetadata: abrahamB2StudentGuideMetadataGoldAr,
  studentGuideSections: abrahamB2StudentGuideSectionsGoldAr,
  selfStudyGuide: abrahamB2SelfStudyGuideGoldAr,
  studentGuideText: abrahamB2StudentGuideTextGoldAr
};
