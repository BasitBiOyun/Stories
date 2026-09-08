import type { BookData } from '../../../types';
import { mosesB2Pages } from './en/pages';
import { mosesB2TeacherGuide, mosesB2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB2SelfStudyGuide } from './en/selfStudyGuide';
import { mosesB2PagesAr } from './ar/pages';
import { mosesB2TeacherGuideAr, mosesB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB2SelfStudyGuideAr } from './ar/selfStudyGuide';

export const mosesB2BookDataEn:BookData={id:'moses-b2-en',title:'Stories of the Prophets: Moses (B2)',level:'B2',baseFontSize:13,pages:mosesB2Pages,teacherGuide:mosesB2TeacherGuide,teacherGuideMetadata:mosesB2TeacherGuideMetadata,selfStudyGuide:mosesB2SelfStudyGuide};
export const mosesB2BookDataAr:BookData={id:'moses-b2-ar',title:'قصص الأنبياء: موسى (عليه السلام) (B2)',level:'B2',baseFontSize:14,pages:mosesB2PagesAr,teacherGuide:mosesB2TeacherGuideAr,teacherGuideMetadata:mosesB2TeacherGuideMetadataAr,selfStudyGuide:mosesB2SelfStudyGuideAr};
export const mosesB2BookData=mosesB2BookDataEn;
