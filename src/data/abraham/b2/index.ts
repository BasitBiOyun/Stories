import type { BookData } from '../../../types';
import { abrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr } from './ar/pages';
import { abrahamB2TeacherGuideEn, abrahamB2TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB2TeacherGuideAr, abrahamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB2SelfStudyGuideEn } from './en/selfStudyGuide';
import { abrahamB2SelfStudyGuideAr } from './ar/selfStudyGuide';

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: abrahamB2Pages,
  teacherGuide: abrahamB2TeacherGuideEn,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadata,
  selfStudyGuide: abrahamB2SelfStudyGuideEn,
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: abrahamB2PagesAr,
  teacherGuide: abrahamB2TeacherGuideAr,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataAr,
  selfStudyGuide: abrahamB2SelfStudyGuideAr,
};

export const abrahamB2BookData = abrahamB2BookDataEn;
