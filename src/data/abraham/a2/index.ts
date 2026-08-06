import { BookData } from '../../../types';
import { abrahamA2PagesEn } from './en/pages';
import { abrahamA2TeacherGuideEn, abrahamA2TeacherGuideMetadataEn } from './en/teacherGuide';
import { abrahamA2SelfStudyGuideEn, abrahamA2StudentGuideTextEn } from './en/selfStudyGuide';

import { abrahamA2PagesAr } from './ar/pages';
import { abrahamA2TeacherGuideAr, abrahamA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamA2SelfStudyGuideAr, abrahamA2StudentGuideTextAr } from './ar/selfStudyGuide';

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en',
  title: 'Stories of the Prophets: Abraham (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: abrahamA2PagesEn,
  teacherGuide: abrahamA2TeacherGuideEn,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataEn,
  selfStudyGuide: abrahamA2SelfStudyGuideEn,
  studentGuideText: abrahamA2StudentGuideTextEn,
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام)',
  level: 'A2',
  baseFontSize: 14,
  pages: abrahamA2PagesAr,
  teacherGuide: abrahamA2TeacherGuideAr,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataAr,
  selfStudyGuide: abrahamA2SelfStudyGuideAr,
  studentGuideText: abrahamA2StudentGuideTextAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
