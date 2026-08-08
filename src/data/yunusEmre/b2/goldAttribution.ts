import type { PageData } from '../../../types';
import { yunusB2PagesGoldEn } from './gold';
import { yunusB2PagesGoldAr } from './goldAr';

const needsEnglishAttribution = (word: string): boolean =>
  /vahdet-i vücut|true and only reality|absolute reality|initial unity|multiple existence|intellect|divine love|islamic mysticism|sufism/i.test(word);

const needsArabicAttribution = (word: string): boolean =>
  /وحدة الوجود|الحقيقة|الوجود|العقل|الذهن|الكلي|الجزئي|الحب الإلهي|التصوف/.test(word.normalize('NFKD').replace(/\p{M}/gu, ''));

const frameEnglish = (pages: PageData[]): PageData[] => pages.map((page) => ({
  ...page,
  vocabulary: (page.vocabulary ?? []).map((entry) => needsEnglishAttribution(entry.word) && !/^In the chapter/i.test(entry.definition)
    ? { ...entry, definition: `In the chapter’s presentation of Yunus Emre’s Sûfî thought: ${entry.definition}` }
    : entry),
}));

const frameArabic = (pages: PageData[]): PageData[] => pages.map((page) => ({
  ...page,
  vocabulary: (page.vocabulary ?? []).map((entry) => needsArabicAttribution(entry.word) && !/^في عرض الفصل/.test(entry.definition)
    ? { ...entry, definition: `في عرض الفصل لفكر يونس إمره الصوفي: ${entry.definition}` }
    : entry),
}));

export const yunusB2PagesGoldFinalEn = frameEnglish(yunusB2PagesGoldEn);
export const yunusB2PagesGoldFinalAr = frameArabic(yunusB2PagesGoldAr);
