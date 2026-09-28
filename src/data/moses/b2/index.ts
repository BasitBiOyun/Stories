import type { BookData } from '../../../types';
import { mosesB2Pages } from './en/pages';
import { mosesB2PagesAr } from './ar/pages';

export const mosesB2BookDataEn:BookData={id:'moses-b2-en',title:'Stories of the Prophets: Moses (B2)',level:'B2',baseFontSize:13,pages:mosesB2Pages,teacherGuide: [],selfStudyGuide: []};
export const mosesB2BookDataAr:BookData={id:'moses-b2-ar',title:'قصص الأنبياء: موسى (عليه السلام) (B2)',level:'B2',baseFontSize:14,pages:mosesB2PagesAr,teacherGuide: [],selfStudyGuide: []};
export const mosesB2BookData=mosesB2BookDataEn;
