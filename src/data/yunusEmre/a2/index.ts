import { BookData } from '../../../types';
import { yunusA2Pages } from './en/pages';
import { yunusA2TeacherGuide, yunusA2TeacherGuideMetadata } from './en/teacherGuide';
import { yunusA2SelfStudyGuide, yunusA2StudentGuideSections, yunusA2StudentGuideText, yunusA2StudentGuideMetadata } from './en/selfStudyGuide';

import { yunusEmreA2PagesAr } from './ar/pages';
import { yunusEmreA2TeacherGuideAr, yunusEmreA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreA2SelfStudyGuideAr, yunusEmreA2StudentGuideSectionsAr, yunusEmreA2StudentGuideTextAr, yunusEmreA2StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Stories of the Prophets: Yunus Emre (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: yunusA2Pages,
  teacherGuide: yunusA2TeacherGuide,
  teacherGuideMetadata: yunusA2TeacherGuideMetadata,
  selfStudyGuide: yunusA2SelfStudyGuide,
  studentGuideSections: yunusA2StudentGuideSections,
  studentGuideText: yunusA2StudentGuideText,
  studentGuideMetadata: yunusA2StudentGuideMetadata,
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'قصص الأنبياء: يونس إمره (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: yunusEmreA2PagesAr.length > 0 ? yunusEmreA2PagesAr : yunusA2Pages,
  teacherGuide: yunusEmreA2TeacherGuideAr.length > 0 ? yunusEmreA2TeacherGuideAr : yunusA2TeacherGuide,
  teacherGuideMetadata: yunusEmreA2TeacherGuideMetadataAr.targetLearners ? yunusEmreA2TeacherGuideMetadataAr : yunusA2TeacherGuideMetadata,
  selfStudyGuide: yunusEmreA2SelfStudyGuideAr.length > 0 ? yunusEmreA2SelfStudyGuideAr : yunusA2SelfStudyGuide,
  studentGuideSections: yunusEmreA2StudentGuideSectionsAr.length > 0 ? yunusEmreA2StudentGuideSectionsAr : yunusA2StudentGuideSections,
  studentGuideText: yunusEmreA2StudentGuideTextAr || yunusA2StudentGuideText,
  studentGuideMetadata: yunusEmreA2StudentGuideMetadataAr.whoIsThisFor ? yunusEmreA2StudentGuideMetadataAr : yunusA2StudentGuideMetadata,
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
