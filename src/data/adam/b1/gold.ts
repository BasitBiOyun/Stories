import type { PageData } from '../../../types';
import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { adamB1Pages } from './en/pages';
import { adamB1TeacherGuide } from './en/teacherGuide';
import { adamB1PagesAr } from './ar/pages';
import { adamB1TeacherGuideAr } from './ar/teacherGuide';

export const adamB1GoldConfig: B1GoldPageConfig = {
  storyIds: Array.from({ length: 12 }, (_, index) => index + 1),
  knowledgeCheckPageId: 13,
  reviewPageId: 14,
  glossaryPageIds: [15, 16],
  finalChallengePageId: 17,
};

type HotspotCopy = { title: string; description: string };

const hotspotOverridesEn: Record<string, HotspotCopy> = {
  h1: {
    title: 'Created from Soil',
    description: 'The chapter says Allah created Adam (pbuh) from soil and gave him great value as the first human.',
  },
  h2: {
    title: 'Knowledge and Responsibility',
    description: 'The chapter says Allah would place a human on earth and later gave Adam (pbuh) life and knowledge.',
  },
  'h2-1': {
    title: 'Knowledge and Intellect',
    description: 'The chapter says Allah gave Adam (pbuh) life, intellect, and knowledge so that he could learn and understand.',
  },
  'h2-2': {
    title: 'The Angels’ Respect',
    description: 'The chapter connects the angels’ respect for Adam (pbuh) with the life and knowledge Allah gave him.',
  },
  'h5-2': {
    title: 'The Warning',
    description: 'Allah asked Adam (pbuh) and Eve not to go near one tree, while Iblis tried to make them forget this warning.',
  },
  'h7-2': {
    title: 'Life on Earth',
    description: 'After Allah pardoned Adam (pbuh) and Eve, the chapter says they were sent to live on earth and were given what they needed for their responsibility there.',
  },
};

const hotspotOverridesAr: Record<string, HotspotCopy> = {
  h1: {
    title: 'خُلِقَ مِنَ التُّرَاب',
    description: 'يَذْكُرُ الْفَصْلُ أَنَّ اللهَ خَلَقَ آدَمَ (عَلَيْهِ السَّلَامُ) مِنَ التُّرَابِ وَأَكْرَمَهُ كَأَوَّلِ إِنْسَانٍ.',
  },
  h2: {
    title: 'الْعِلْمُ وَالْمَسْؤُولِيَّة',
    description: 'يَذْكُرُ الْفَصْلُ أَنَّ اللهَ سَيَجْعَلُ إِنْسَانًا فِي الْأَرْضِ، ثُمَّ مَنَحَ آدَمَ (عَلَيْهِ السَّلَامُ) الْحَيَاةَ وَالْعِلْمَ.',
  },
  'h2-1': {
    title: 'الْعِلْمُ وَالْعَقْل',
    description: 'يَذْكُرُ الْفَصْلُ أَنَّ اللهَ مَنَحَ آدَمَ (عَلَيْهِ السَّلَامُ) الْحَيَاةَ وَالْعَقْلَ وَالْعِلْمَ لِيَتَعَلَّمَ وَيَفْهَمَ.',
  },
  'h2-2': {
    title: 'احْتِرَامُ الْمَلَائِكَة',
    description: 'يَرْبِطُ الْفَصْلُ احْتِرَامَ الْمَلَائِكَةِ لِآدَمَ (عَلَيْهِ السَّلَامُ) بِمَا مَنَحَهُ اللهُ مِنْ حَيَاةٍ وَعِلْمٍ.',
  },
  'h5-2': {
    title: 'التَّحْذِير',
    description: 'طَلَبَ اللهُ مِنْ آدَمَ (عَلَيْهِ السَّلَامُ) وَحَوَّاءَ أَلَّا يَقْرَبَا شَجَرَةً وَاحِدَةً، وَحَاوَلَ إِبْلِيسُ أَنْ يُنْسِيَهُمَا هَذَا التَّحْذِيرَ.',
  },
  'h7-2': {
    title: 'الْحَيَاةُ عَلَى الْأَرْض',
    description: 'بَعْدَ أَنْ غَفَرَ اللهُ لِآدَمَ (عَلَيْهِ السَّلَامُ) وَحَوَّاءَ، يَذْكُرُ الْفَصْلُ أَنَّهُمَا أُرْسِلَا لِلْعَيْشِ فِي الْأَرْضِ وَأُعْطِيَا مَا يَحْتَاجَانِ إِلَيْهِ لِمَسْؤُولِيَّتِهِمَا فِيهَا.',
  },
};

const applyHotspotOverrides = (pages: PageData[], overrides: Record<string, HotspotCopy>): PageData[] =>
  pages.map((page) => ({
    ...page,
    hotspots: page.hotspots?.map((hotspot) => {
      const replacement = overrides[hotspot.id];
      return replacement ? { ...hotspot, ...replacement } : hotspot;
    }),
  }));

export const adamB1PagesGoldEn = applyHotspotOverrides(applyB1GoldPages({
  canonicalPages: adamB1Pages,
  config: adamB1GoldConfig,
  language: 'en',
}), hotspotOverridesEn);

export const adamB1PagesGoldAr = applyHotspotOverrides(applyB1GoldPages({
  canonicalPages: adamB1PagesAr,
  config: adamB1GoldConfig,
  language: 'ar',
}), hotspotOverridesAr);

export const adamB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(adamB1TeacherGuide);
export const adamB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(adamB1TeacherGuideAr);
