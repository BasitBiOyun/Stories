import type { Exercise, PageData } from '../../../types';
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

const adamQuickOverridesEn: Record<number, Exercise> = {
  1: {
    id: 'ex1-1',
    type: 'true-false',
    title: 'The Origin of Humanity',
    instructions: 'Decide whether the statement matches this chapter.',
    question: 'The chapter says Adam (pbuh) was created from soil.',
    correctAnswer: true,
    explanation: 'The opening paragraph directly says that Allah created Adam (pbuh) from soil.',
    feedback: {
      correct: 'Correct. This detail appears directly in the opening paragraph.',
      incorrect: 'Return to the first paragraph and find the sentence that explains what Adam (pbuh) was created from.',
    },
  },
  5: {
    id: 'ex5-1',
    type: 'multiple-choice',
    title: 'The Warning in Paradise',
    instructions: 'Choose the answer stated in the chapter.',
    question: 'What did Allah ask Adam (pbuh) and Eve not to do?',
    options: ['Go near one tree', 'Leave Paradise immediately', 'Stop speaking to each other'],
    correctAnswer: 0,
    explanation: 'The chapter says Allah asked them not to go near one tree.',
    feedback: {
      correct: 'Correct. The chapter gives one clear restriction.',
      incorrect: 'Reread the second paragraph and identify the one thing Allah asked them not to do.',
    },
  },
};

const adamQuickOverridesAr: Record<number, Exercise> = {
  1: {
    id: 'ex1-1-ar',
    type: 'true-false',
    title: 'أَصْلُ الْبَشَرِيَّة',
    instructions: 'حَدِّدْ هَلْ تُطَابِقُ الْعِبَارَةُ مَا يَقُولُهُ هَذَا الْفَصْلُ.',
    question: 'يَذْكُرُ الْفَصْلُ أَنَّ آدَمَ (عَلَيْهِ السَّلَامُ) خُلِقَ مِنَ التُّرَابِ.',
    correctAnswer: true,
    explanation: 'تَذْكُرُ الْفِقْرَةُ الْأُولَى مُبَاشَرَةً أَنَّ اللهَ خَلَقَ آدَمَ (عَلَيْهِ السَّلَامُ) مِنَ التُّرَابِ.',
    feedback: {
      correct: 'صَحِيح. هَذِهِ الْمَعْلُومَةُ مَذْكُورَةٌ مُبَاشَرَةً فِي الْفِقْرَةِ الْأُولَى.',
      incorrect: 'اِرْجِعْ إِلَى الْفِقْرَةِ الْأُولَى وَابْحَثْ عَنِ الْجُمْلَةِ الَّتِي تَذْكُرُ مِمَّ خُلِقَ آدَمُ (عَلَيْهِ السَّلَامُ).',
    },
  },
  5: {
    id: 'ex5-1-ar',
    type: 'multiple-choice',
    title: 'التَّحْذِيرُ فِي الْجَنَّة',
    instructions: 'اِخْتَرِ الْإِجَابَةَ الْمَذْكُورَةَ فِي الْفَصْلِ.',
    question: 'مَاذَا طَلَبَ اللهُ مِنْ آدَمَ (عَلَيْهِ السَّلَامُ) وَحَوَّاءَ أَلَّا يَفْعَلَا؟',
    options: ['أَلَّا يَقْرَبَا شَجَرَةً وَاحِدَةً', 'أَنْ يَتْرُكَا الْجَنَّةَ فَوْرًا', 'أَنْ يَتَوَقَّفَا عَنِ الْحَدِيثِ مَعًا'],
    correctAnswer: 0,
    explanation: 'يَذْكُرُ الْفَصْلُ أَنَّ اللهَ طَلَبَ مِنْهُمَا أَلَّا يَقْرَبَا شَجَرَةً وَاحِدَةً.',
    feedback: {
      correct: 'صَحِيح. يَذْكُرُ الْفَصْلُ تَحْذِيرًا وَاضِحًا وَاحِدًا.',
      incorrect: 'اِرْجِعْ إِلَى الْفِقْرَةِ الثَّانِيَةِ وَحَدِّدِ الشَّيْءَ الْوَاحِدَ الَّذِي طَلَبَ اللهُ مِنْهُمَا أَلَّا يَفْعَلَاهُ.',
    },
  },
};

const prepareAdamSource = (pages: PageData[], overrides: Record<number, Exercise>): PageData[] =>
  pages.map((page) => {
    const exercise = overrides[page.id];
    return exercise ? { ...page, exercises: [exercise] } : page;
  });

const applyHotspotOverrides = (pages: PageData[], overrides: Record<string, HotspotCopy>): PageData[] =>
  pages.map((page) => ({
    ...page,
    hotspots: page.hotspots?.map((hotspot) => {
      const replacement = overrides[hotspot.id];
      return replacement ? { ...hotspot, ...replacement } : hotspot;
    }),
  }));

export const adamB1PagesGoldEn = applyHotspotOverrides(applyB1GoldPages({
  canonicalPages: prepareAdamSource(adamB1Pages, adamQuickOverridesEn),
  config: adamB1GoldConfig,
  language: 'en',
}), hotspotOverridesEn);

export const adamB1PagesGoldAr = applyHotspotOverrides(applyB1GoldPages({
  canonicalPages: prepareAdamSource(adamB1PagesAr, adamQuickOverridesAr),
  config: adamB1GoldConfig,
  language: 'ar',
}), hotspotOverridesAr);

export const adamB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(adamB1TeacherGuide);
export const adamB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(adamB1TeacherGuideAr);
