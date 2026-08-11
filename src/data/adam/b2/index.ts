import { BookData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import {
  adamB2PagesGoldEn,
  adamB2TeacherGuideGoldEn,
  adamB2SelfStudyGuideGoldEn,
  adamB2StudentGuideTextGoldEn,
  adamB2StudentGuideSectionsGoldEn,
  adamB2TeacherGuideMetadataGoldEn,
  adamB2StudentGuideMetadataGoldEn,
} from './gold';
import {
  adamB2PagesGoldAr,
  adamB2TeacherGuideGoldAr,
  adamB2SelfStudyGuideGoldAr,
  adamB2StudentGuideTextGoldAr,
  adamB2StudentGuideSectionsGoldAr,
  adamB2TeacherGuideMetadataGoldAr,
  adamB2StudentGuideMetadataGoldAr,
} from './goldAr';

const adamB2TitleOverridesEn = {
  2: { h2a: 'Humble Material', h2b: 'Different Lands' },
  3: { h3a: 'Representative', h3b: 'Knowledge' },
  4: { h5a: 'Knowledge', h5b: 'Fire and Clay' },
  5: { h5a: 'Respect and Admiration', h5b: 'Origin' },
  7: { h7a: 'Satan Whispered', h7b: 'The Tree' },
  8: { h8a: 'Unclad', h8b: 'Forgiveness' },
  11: { h11a: 'Life on Earth', h11b: 'Struggle' },
} as const;

const adamB2TitleOverridesAr = {
  2: { h2a: 'مادة بسيطة', h2b: 'اختلاف ألوانهم' },
  3: { h3a: 'الخليفة', h3b: 'الأسماء كلها' },
} as const;

const adamB2PagesLockedEn = applyB2StoryLanguageLock(adamB2PagesGoldEn, {
  language: 'en',
  titleOverrides: adamB2TitleOverridesEn,
  maxUniqueHighlights: 10,
});

const adamB2PagesLockedAr = applyB2StoryLanguageLock(adamB2PagesGoldAr, {
  language: 'ar',
  titleOverrides: adamB2TitleOverridesAr,
  maxUniqueHighlights: 10,
});

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: adamB2PagesLockedEn,
  teacherGuide: adamB2TeacherGuideGoldEn,
  selfStudyGuide: adamB2SelfStudyGuideGoldEn,
  studentGuideText: adamB2StudentGuideTextGoldEn,
  studentGuideSections: adamB2StudentGuideSectionsGoldEn,
  teacherGuideMetadata: adamB2TeacherGuideMetadataGoldEn,
  studentGuideMetadata: adamB2StudentGuideMetadataGoldEn
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: adamB2PagesLockedAr,
  teacherGuide: adamB2TeacherGuideGoldAr,
  selfStudyGuide: adamB2SelfStudyGuideGoldAr,
  studentGuideText: adamB2StudentGuideTextGoldAr,
  studentGuideSections: adamB2StudentGuideSectionsGoldAr,
  teacherGuideMetadata: adamB2TeacherGuideMetadataGoldAr,
  studentGuideMetadata: adamB2StudentGuideMetadataGoldAr
};
