import type { PageData } from '../../../types';
import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { meccaB1Pages } from './en/pages';
import { meccaB1TeacherGuide } from './en/teacherGuide';
import { meccaB1PagesAr } from './ar/pages';
import { meccaB1TeacherGuideAr } from './ar/teacherGuide';

export const meccaB1GoldConfig: B1GoldPageConfig = {
  storyIds: Array.from({ length: 15 }, (_, index) => index + 1),
  knowledgeCheckPageId: 16,
  reviewPageId: 17,
  glossaryPageIds: [18, 19],
  finalChallengePageId: 20,
};

type HotspotCopy = { title: string; description: string };

const hotspotOverridesEn: Record<string, HotspotCopy> = {
  'h13-1': {
    title: 'Bilal’s Steadfast Faith',
    description: 'The chapter presents Bilal as one of the first believers who faced severe pressure from his enslaver but did not give up his faith.',
  },
  'h14-1': {
    title: 'Hardship During the Boycott',
    description: 'The boycott caused severe hunger and hardship for Muslims and the people who supported them.',
  },
};

const hotspotOverridesAr: Record<string, HotspotCopy> = {
  'h13-1': {
    title: 'ثَبَاتُ بِلالٍ عَلَى إِيمَانِهِ',
    description: 'يُقَدِّمُ الْفَصْلُ بِلالًا كَوَاحِدٍ مِنْ أَوَّلِ الْمُؤْمِنِينَ الَّذِينَ وَاجَهُوا ضَغْطًا شَدِيدًا مِنْ مُسْتَعْبِدِيهِمْ، لَكِنَّهُ لَمْ يَتْرُكْ إِيمَانَهُ.',
  },
  'h14-1': {
    title: 'مَشَقَّةُ الْحِصَارِ',
    description: 'سَبَّبَ الْحِصَارُ جُوعًا شَدِيدًا وَمَشَقَّةً لِلْمُسْلِمِينَ وَلِمَنْ سَانَدَهُمْ.',
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

export const meccaB1PagesGoldEn = applyHotspotOverrides(applyB1GoldPages({
  canonicalPages: meccaB1Pages,
  config: meccaB1GoldConfig,
  language: 'en',
}), hotspotOverridesEn);

export const meccaB1PagesGoldAr = applyHotspotOverrides(applyB1GoldPages({
  canonicalPages: meccaB1PagesAr,
  config: meccaB1GoldConfig,
  language: 'ar',
}), hotspotOverridesAr);

export const meccaB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(meccaB1TeacherGuide);
export const meccaB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(meccaB1TeacherGuideAr);
