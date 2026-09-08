import type { BookData } from '../../../types';

import { meccaB2Pages, meccaB2TeacherGuideMetadataPolished } from './en/pages';
import { meccaB2TeacherGuide } from './en/teacherGuide';
import { meccaB2SelfStudyGuide, meccaB2StudentGuideMetadata } from './en/selfStudyGuide';

import { meccaB2PagesAr, meccaB2TeacherGuideMetadataArPolished } from './ar/pages';
import { meccaB2TeacherGuideAr } from './ar/teacherGuide';
import { meccaB2SelfStudyGuideAr, meccaB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Islamic History & Civilization: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: meccaB2Pages,
  teacherGuide: meccaB2TeacherGuide,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataPolished,
  selfStudyGuide: meccaB2SelfStudyGuide,
  studentGuideMetadata: meccaB2StudentGuideMetadata,
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: meccaB2PagesAr,
  teacherGuide: meccaB2TeacherGuideAr,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataArPolished,
  selfStudyGuide: meccaB2SelfStudyGuideAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataAr,
};

export const meccaB2BookData = meccaB2BookDataEn;