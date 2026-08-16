import { applyA2ArabicDefinitionStandard } from '../../a2ArabicDefinitionStandard';
import {
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuideMetadata,
} from '../../a2BookSupport';
import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { applyA2HighlightStandard, type A2HighlightStandardConfig } from '../../a2HighlightStandard';
import { abrahamA2HighlightDefinitionsAr } from './highlightDefinitionsAr';
import {
  abrahamA2GoldConfig,
  abrahamA2PagesGoldAr as basePagesAr,
  abrahamA2PagesGoldEn as rawBasePagesEn,
} from './gold';

const basePagesEn = rawBasePagesEn.map((page) => {
  if (page.type !== 'story') return page;

  // The current reader no longer uses the old timestamp-following prototype.
  const { timedChunks: _timedChunks, syncPoints: _syncPoints, ...pageWithoutLegacySync } = page;
  const withVocabularyFix = pageWithoutLegacySync.id === 5
    ? {
        ...pageWithoutLegacySync,
        vocabulary: pageWithoutLegacySync.vocabulary?.map((entry) =>
          entry.word.toLowerCase() === 'heals'
            ? { ...entry, definition: 'Makes someone healthy again.' }
            : entry
        ),
      }
    : pageWithoutLegacySync;

  if (!withVocabularyFix.animatedWords) return withVocabularyFix;
  if (withVocabularyFix.id === 3) return { ...withVocabularyFix, animatedWords: withVocabularyFix.animatedWords.filter((word) => word !== 'sets') };
  if (withVocabularyFix.id === 7) return { ...withVocabularyFix, animatedWords: withVocabularyFix.animatedWords.filter((word) => word !== 'crazy') };
  if (withVocabularyFix.id === 9) return { ...withVocabularyFix, animatedWords: withVocabularyFix.animatedWords.filter((word) => word !== 'rude') };
  if (withVocabularyFix.id === 10) return { ...withVocabularyFix, animatedWords: withVocabularyFix.animatedWords.filter((word) => word !== 'rise') };
  return withVocabularyFix;
});

const vocabularyGoldEn = applyA2VocabularyGold({
  pages: basePagesEn,
  storyIds: abrahamA2GoldConfig.storyIds,
  vocabularyPageId: abrahamA2GoldConfig.vocabularyPageId,
  language: 'en',
  chapterAdditions: {
    6: [{ word: 'axe', definition: 'A heavy tool used for cutting or breaking things.' }],
    8: [{ word: 'trusted', definition: 'Believed that Allah would protect and help him.' }],
    10: [{ word: 'west', definition: 'The direction where the sun sets.' }],
  },
});

const vocabularyGoldAr = applyA2VocabularyGold({
  pages: basePagesAr,
  storyIds: abrahamA2GoldConfig.storyIds,
  vocabularyPageId: abrahamA2GoldConfig.vocabularyPageId,
  language: 'ar',
  chapterAdditions: {
    6: [{ word: 'فَأْس', definition: 'أَدَاةٌ ثَقِيلَةٌ تُسْتَعْمَلُ لِلْقَطْعِ أَوِ التَّكْسِيرِ.' }],
  },
});

export const abrahamA2HighlightConfig: A2HighlightStandardConfig = {
  storyKey: 'Abraham',
  storyIds: abrahamA2GoldConfig.storyIds,
  glossaryPageIds: abrahamA2GoldConfig.glossaryPageIds,
  arabicOverrides: {
    1: {
      Messenger: { word: 'رَسُولًا' },
      worship: { word: 'يَعْبُدُونَهُ' },
      Mesopotamia: { word: 'النَّهْرَيْنِ' },
      kingdom: { word: 'مَمْلَكَةِ' },
      silly: { word: 'سَخِيفٌ' },
      special: { word: 'خَاصًّا' },
    },
    2: {
      idol: { word: 'الْأَصْنَامَ' },
      respect: { word: 'الِاحْتِرَامَ' },
      ridiculous: { word: 'سَخِيفًا' },
      presents: { word: 'الْهَدَايَا' },
      'human-like': { word: 'يُشْبِهُ الْإِنْسَانَ' },
    },
    3: {
      Creator: { word: 'الْخَالِقِ' },
      search: { word: 'يَبْحَثُ' },
      disappeared: { word: 'غَابَ' },
      countryside: { word: 'الرِّيفِ' },
      beautiful: { word: 'الْجَمِيلَةِ' },
    },
    4: {
      creation: { word: 'مَخْلُوقًا' },
      prayer: { word: 'دُعَاءَهُ' },
      forehead: { word: 'جَبْهَتَهُ' },
      shining: { word: 'سَاطِعَةً' },
      angry: { word: 'فَغَضِبَ' },
      against: { word: 'ضِدُّ' },
    },
    5: {
      heals: { word: 'يَشْفِينِي' },
      believe: { word: 'أُؤْمِنُ' },
      power: { word: 'قُوَّةً' },
    },
    6: {
      festival: { word: 'عِيدٌ' },
      unbroken: { word: 'سَلِيمًا' },
      axe: { word: 'فَأْسًا' },
      jokingly: { word: 'مَازِحًا' },
      hurried: { word: 'مُسْرِعًا' },
    },
    7: {
      shocked: { word: 'فَصُدِمُوا' },
      displeased: { word: 'فَلَمْ يَرْضَ' },
      protect: { word: 'تَحْمِيَ' },
      harm: { word: 'آذَيْتَ' },
    },
    8: {
      arrogant: { word: 'مُتَكَبِّرِينَ' },
      catapult: { word: 'مَنْجَنِيقٍ' },
      flames: { word: 'اللَّهَبِ' },
      trusted: { word: 'يَثِقُ' },
      dangerous: { word: 'الْخَطَرِ' },
    },
    9: {
      miracle: { word: 'الْمُعْجِزَةُ' },
      amazed: { word: 'دُهِشَ' },
      harmed: { word: 'أَذًى' },
      cool: { word: 'بَارِدَةً' },
    },
    10: {
      slaves: { word: 'عَبْدَيْنِ' },
      ordinary: { word: 'عَادِيًّا' },
      guards: { word: 'حُرَّاسَهُ' },
      west: { word: 'الْمَغْرِبِ' },
      ordered: { word: 'أَمَرَ' },
    },
    11: {
      journey: { word: 'رِحْلَتَهُ' },
      valley: { word: 'وَادٍ' },
      tiring: { word: 'مُتْعِبَةً' },
      lands: { word: 'أَرَاضٍ' },
      arrived: { word: 'وَصَلُوا' },
    },
    12: {
      blessings: { word: 'الْبَرَكَاتِ' },
      fearlessly: { word: 'بِغَيْرِ خَوْفٍ' },
      useless: { word: 'بِلَا فَائِدَةٍ' },
      planner: { word: 'الْمَاكِرِينَ' },
      die: { word: 'نَمُوتُ' },
    },
    13: {
      desert: { word: 'الصَّحْرَاءِ' },
      gift: { word: 'هَدِيَّةً' },
      ground: { word: 'الْأَرْضِ' },
      famous: { word: 'مَشْهُورًا' },
      suddenly: { word: 'فَجْأَةً' },
    },
    14: {
      mission: { word: 'مُهِمَّتُهُ' },
      unique: { word: 'وَاحِدٌ' },
      partner: { word: 'شَرِيكٌ' },
      holy: { word: 'مُقَدَّسٍ' },
      Muslims: { word: 'الْمُسْلِمِينَ' },
    },
  },
};

const selected = applyA2HighlightStandard(vocabularyGoldEn, vocabularyGoldAr, abrahamA2HighlightConfig);
const standardized = applyA2ArabicDefinitionStandard(selected, abrahamA2HighlightDefinitionsAr, abrahamA2HighlightConfig);

export const abrahamA2HighlightTargets = standardized.targets;
export const abrahamA2PagesFinalEn = standardized.englishPages;
export const abrahamA2PagesFinalAr = standardized.arabicPages;

export const abrahamA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Prophet Abraham', abrahamA2GoldConfig.storyIds.length, 'en');
export const abrahamA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('قصة النبي إبراهيم', abrahamA2GoldConfig.storyIds.length, 'ar');
export const abrahamA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const abrahamA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const abrahamA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Prophet Abraham', 'en');
export const abrahamA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('قصة النبي إبراهيم', 'ar');
export const abrahamA2StudentGuideTextFinalEn = buildA2StudentGuideText('Prophet Abraham', 'en');
export const abrahamA2StudentGuideTextFinalAr = buildA2StudentGuideText('قصة النبي إبراهيم', 'ar');
