import type { BookData } from '../../../types';

import { yunusB2Pages } from './en/pages';
import { yunusEmreB2PagesAr } from './ar/pages';
import { yunusB2TeacherGuide, yunusB2TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB2SelfStudyGuide, yunusB2StudentGuideMetadata } from './en/selfStudyGuide';
import { yunusEmreB2TeacherGuideAr, yunusEmreB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB2SelfStudyGuideAr, yunusEmreB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Yunus Emre: History, Poetry, and Moral Thought (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: yunusB2Pages,
  teacherGuide: yunusB2TeacherGuide,
  teacherGuideMetadata: yunusB2TeacherGuideMetadata,
  selfStudyGuide: yunusB2SelfStudyGuide,
  studentGuideMetadata: yunusB2StudentGuideMetadata,
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'يونس إمره: التاريخ والشعر والفكر الأخلاقي (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: yunusEmreB2PagesAr,
  teacherGuide: yunusEmreB2TeacherGuideAr,
  teacherGuideMetadata: yunusEmreB2TeacherGuideMetadataAr,
  selfStudyGuide: yunusEmreB2SelfStudyGuideAr,
  studentGuideMetadata: yunusEmreB2StudentGuideMetadataAr,
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
