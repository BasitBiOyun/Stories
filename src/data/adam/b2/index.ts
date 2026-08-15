import { BookData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
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
import { adamB2ReviewedHighlightPairs } from './highlightPairs';

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

const adamB2SourceTitleOverridesEn = {
  4: { h5b: 'power of knowledge' },
  6: { h6a: 'the Garden', h6b: 'point of no return' },
  9: { h9a: 'left Paradise' },
  10: { h10b: 'descending upon Earth' },
  13: { h13b: 'rebellious attitude' },
  14: { h13a: 'tragic end' },
  15: { h14b: 'daily bread' },
  16: { h15a: 'his successor' },
  17: { h18b: 'worldly life' },
} as const;

const adamB2SourceDescriptionOverridesEn = {
  17: {
    h18b: 'In fact, all the events that Adam (pbuh) and Eve experienced are like a summary of the adventures of their descendants in worldly life.',
  },
} as const;

export const adamB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(adamB2PagesGoldEn, {
  language: 'en',
  titleOverrides: adamB2TitleOverridesEn,
  maxUniqueHighlights: 10,
});

export const adamB2PagesBeforeHotspotSourceLockAr = applyB2StoryLanguageLock(adamB2PagesGoldAr, {
  language: 'ar',
  titleOverrides: adamB2TitleOverridesAr,
  maxUniqueHighlights: 10,
});

const adamB2PagesLockedEn = applyHotspotSourceLock(adamB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: adamB2SourceTitleOverridesEn,
  descriptionOverrides: adamB2SourceDescriptionOverridesEn,
});

const adamB2PagesLockedAr = applyHotspotSourceLock(adamB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

const adamB2HighlightStandard = applyB2HighlightStandard(adamB2PagesLockedEn, adamB2PagesLockedAr, {
  storyKey: 'Adam',
  storyIds: Array.from({ length: 17 }, (_, index) => index + 1),
  glossaryPageIds: [20, 21],
  explicitTargets: resolveB2ReviewedPairs(
    adamB2PagesLockedEn,
    adamB2PagesLockedAr,
    'Adam',
    adamB2ReviewedHighlightPairs,
  ),
});

export const adamB2HighlightTargets = adamB2HighlightStandard.targets;
const adamB2PagesFinalEn = adamB2HighlightStandard.englishPages;
const adamB2PagesFinalAr = adamB2HighlightStandard.arabicPages;

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: adamB2PagesFinalEn,
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
  pages: adamB2PagesFinalAr,
  teacherGuide: adamB2TeacherGuideGoldAr,
  selfStudyGuide: adamB2SelfStudyGuideGoldAr,
  studentGuideText: adamB2StudentGuideTextGoldAr,
  studentGuideSections: adamB2StudentGuideSectionsGoldAr,
  teacherGuideMetadata: adamB2TeacherGuideMetadataGoldAr,
  studentGuideMetadata: adamB2StudentGuideMetadataGoldAr
};
