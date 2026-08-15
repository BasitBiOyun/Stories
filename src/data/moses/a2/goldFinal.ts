import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { applyA2HighlightStandard, type A2HighlightStandardConfig } from '../../a2HighlightStandard';
import { applyA2ArabicDefinitionStandard } from '../../a2ArabicDefinitionStandard';
import { mosesA2HighlightDefinitionsAr } from './highlightDefinitionsAr';
import { mosesA2GoldConfig, mosesA2PagesGoldAr as basePagesAr, mosesA2PagesGoldEn as basePagesEn } from './gold';
import { buildA2SelfStudyGuide, buildA2StudentGuideMetadata, buildA2StudentGuideSections, buildA2StudentGuideText, buildA2TeacherGuide, buildA2TeacherGuideMetadata } from '../../a2GoldFactory';

type VocabularyReplacement = { word: string; definition?: string };
type VocabularyOverrides = Record<number, Record<string, VocabularyReplacement>>;

const applyVocabularyOverrides = (
  pages: typeof basePagesEn,
  overrides: VocabularyOverrides,
) => pages.map((page) => {
  const replacements = overrides[page.id];
  if (!replacements || !page.vocabulary) return page;
  return {
    ...page,
    vocabulary: page.vocabulary.map((entry) => {
      const replacement = replacements[entry.word];
      return replacement ? { ...entry, ...replacement } : entry;
    }),
  };
});

const removeVocabularyTargets = (
  pages: typeof basePagesEn,
  removals: Record<number, string[]>,
) => pages.map((page) => {
  const removed = removals[page.id];
  if (!removed?.length || !page.vocabulary) return page;
  const removedSet = new Set(removed.map((word) => word.toLowerCase().trim()));
  return {
    ...page,
    vocabulary: page.vocabulary.filter((entry) => !removedSet.has(entry.word.toLowerCase().trim())),
  };
});

const removeAnimatedTargets = (
  pages: typeof basePagesEn,
  removals: Record<number, string[]>,
) => pages.map((page) => {
  const removed = removals[page.id];
  if (!removed?.length || !page.animatedWords) return page;
  const removedSet = new Set(removed.map((word) => word.toLowerCase().trim()));
  return {
    ...page,
    animatedWords: page.animatedWords.filter((word) => !removedSet.has(word.toLowerCase().trim())),
  };
});

const correctedBasePagesEn = removeAnimatedTargets(removeVocabularyTargets(applyVocabularyOverrides(basePagesEn, {
  6: {
    mistake: { word: 'upset', definition: 'Very sad or worried because something bad happened.' },
  },
  7: {
    escape: { word: 'escaped', definition: 'Got away from danger.' },
    'escape from': { word: 'thirsty', definition: 'Needing or wanting water.' },
  },
  14: {
    prepare: { word: 'prepared', definition: 'Got ready for something.' },
  },
}), {
  11: ['power'],
  12: ['armpit'],
}), {
  4: ['queen'],
  6: ['mistake', 'accident'],
});

const correctedBasePagesAr = applyVocabularyOverrides(basePagesAr, {
  1: {
    'رَسُول': { word: 'رَسُولًا' },
    'ظَالِم': { word: 'ظَالِمًا' },
    'حَاكِم': { word: 'حَاكِمًا' },
    'يُؤْمِن': { word: 'يُؤْمِنْ' },
  },
  2: {
    'حُلْم': { word: 'حُلْمًا' },
    'مُسْتَبِدّ': { word: 'المُسْتَبِدِّينَ' },
  },
  3: {
    'تَابُوت': { word: 'تَابُوتًا' },
    'يَحْفَظُ': { word: 'سَيَحْفَظُهُ' },
  },
  5: {
    'حَافِظ': { word: 'الْحَافِظِينَ' },
  },
  9: {
    'غَرِيب': { word: 'غَرِيبًا' },
    'عَمَل': { word: 'عَمَلًا' },
  },
  10: {
    'عَصَا': { word: 'عَصَاكَ' },
  },
  11: {
    'نَبِيّ': { word: 'نَبِيًّا' },
    'عَرْش': { word: 'عَرْشِهِ' },
  },
  12: {
    'مُعْجِزَة': { word: 'آيَاتِ', definition: 'عَلَامَاتٌ أَعْطَاهَا اللهُ لِمُوسَى لِتُظْهِرَ قُدْرَتَهُ.' },
  },
  13: {
    'مُتَكَبِّر': { word: 'مُتَكَبِّرًا' },
  },
  14: {
    'قَافِلَة': { word: 'قَافِلَتُهُمْ' },
    'جَيْش': { word: 'جَيْشَهُ' },
  },
  16: {
    'دُرُوس': { word: 'دُرُوسًا' },
  },
});

const vocabularyGoldEn = applyA2VocabularyGold({ pages: correctedBasePagesEn, storyIds: mosesA2GoldConfig.storyIds, vocabularyPageId: 18, language: 'en' });
const vocabularyGoldAr = applyA2VocabularyGold({ pages: correctedBasePagesAr, storyIds: mosesA2GoldConfig.storyIds, vocabularyPageId: 18, language: 'ar' });

export const mosesA2HighlightConfig: A2HighlightStandardConfig = {
  storyKey: 'Moses',
  storyIds: mosesA2GoldConfig.storyIds,
  glossaryPageIds: mosesA2GoldConfig.glossaryPageIds,
  arabicOverrides: {
    1: {
      Messenger: { word: 'رَسُولًا' },
      cruel: { word: 'ظَالِمًا' },
      ruler: { word: 'حَاكِمًا' },
      believe: { word: 'يُؤْمِنْ' },
      Egypt: { word: 'مِصْرَ' },
      Pharaoh: { word: 'فِرْعَوْنُ' },
      Allah: { word: 'اللهِ' },
    },
    2: {
      dream: { word: 'حُلْمًا' },
      magicians: { word: 'السَّحَرَةَ' },
      heartless: { word: 'عَدِيمِي الرَّحْمَةِ' },
      despotic: { word: 'المُسْتَبِدِّينَ' },
      fire: { word: 'نارًا' },
      soldiers: { word: 'جُنودِهِ' },
    },
    3: {
      basket: { word: 'تَابُوتًا' },
      protect: { word: 'سَيَحْفَظُهُ' },
      worried: { word: 'قَلِقَةً' },
      'carried it away': { word: 'فَحَمَلَهُ' },
      'River Nile': { word: 'نَهْرِ النِّيلِ' },
    },
    4: {
      palace: { word: 'قَصْرِ' },
      'kind-hearted': { word: 'رَحِيمَةً' },
      nurse: { word: 'مُرْضِعَةٍ' },
      love: { word: 'حُبًّا' },
    },
    5: {
      protector: { word: 'الْحَافِظِينَ' },
      safe: { word: 'آمِنٍ' },
      weak: { word: 'الضُّعَفَاءِ' },
      'take care of': { word: 'لِتَرْعَى' },
      mother: { word: 'أُمِّهِ' },
      bazaar: { word: 'السُّوقِ' },
    },
    6: {
      upset: { word: 'بِحُزْنٍ شَدِيدٍ' },
      forgive: { word: 'فَاغْفِرْ لِي' },
      accidentally: { word: 'عَنْ غَيْرِ قَصْدٍ' },
      'run away': { word: 'اُخْرُجْ مِنَ الْمَدِينَةِ' },
      dua: { word: 'فَدَعَا اللهَ' },
    },
    7: {
      escaped: { word: 'هَرَبَ' },
      guided: { word: 'هَدَاهُ' },
      well: { word: 'بِئْرًا' },
      penalty: { word: 'عُقُوبَةَ' },
      thirsty: { word: 'عَطْشَانَ' },
      Midian: { word: 'مَدْيَنَ' },
      shepherds: { word: 'رُعَاةً' },
    },
    8: {
      sisters: { word: 'الْفَتَاتَيْنِ' },
      turn: { word: 'دَوْرَنَا' },
      early: { word: 'مُبَكِّرًا' },
      help: { word: 'الْمُسَاعَدَةِ' },
      sheep: { word: 'غَنَمَهُمَا' },
    },
    9: {
      stranger: { word: 'غَرِيبًا' },
      job: { word: 'عَمَلًا' },
      married: { word: 'تَزَوَّجَ' },
      'Şuayb': { word: 'شُعَيْبًا' },
    },
    10: {
      silence: { word: 'الصَّمْتِ' },
      'walking stick': { word: 'عَصَاكَ' },
      hillside: { word: 'سَفْحِ التَّلِّ' },
      'put down': { word: 'أَلْقِ' },
      mountain: { word: 'الْجَبَلَ' },
      fire: { word: 'نَارًا' },
      voice: { word: 'نِدَاءً' },
      snake: { word: 'ثُعْبَانٍ' },
    },
    11: {
      signs: { word: 'آيَاتٌ' },
      prophet: { word: 'نَبِيًّا' },
      throne: { word: 'عَرْشِهِ' },
      'take out': { word: 'أَخْرِجْهَا' },
      shining: { word: 'مُضِيئَةٌ' },
      Harun: { word: 'هَارُونَ' },
    },
    12: {
      miracles: { word: 'آيَاتِ' },
      universe: { word: 'الْعَالَمِينَ' },
      magic: { word: 'سِحْرٍ' },
      threw: { word: 'أَلْقَاهَا' },
      'laugh at': { word: 'سَخِرَ' },
      snake: { word: 'ثُعْبَانٍ' },
      shining: { word: 'لَامِعَةً' },
    },
    13: {
      ropes: { word: 'حِبَالًا' },
      huge: { word: 'ضَخْمٍ' },
      arrogant: { word: 'مُتَكَبِّرًا' },
      magicians: { word: 'السَّحَرَةَ' },
      believe: { word: 'نُؤْمِنُ' },
    },
    14: {
      journey: { word: 'الرِّحْلَةِ' },
      secret: { word: 'سِرِّيَّةِ' },
      caravan: { word: 'قَافِلَتُهُمْ' },
      'going away': { word: 'سَنُغَادِرُ' },
      prepared: { word: 'أَعَدَّ' },
      night: { word: 'اللَّيْلِ' },
    },
    15: {
      panicked: { word: 'فَخَافَ' },
      parted: { word: 'فَانْشَقَّ' },
      safely: { word: 'بِأَمَانٍ' },
      'calm down': { word: 'اِهْدَؤُوا' },
      caught: { word: 'لَحِقَ بِهِمْ' },
      sea: { word: 'الْبَحْرُ' },
    },
    16: {
      midway: { word: 'مُنْتَصَفِ' },
      lessons: { word: 'دُرُوسًا' },
      power: { word: 'الْقُدْرَةِ' },
    },
  },
};

const selected = applyA2HighlightStandard(vocabularyGoldEn, vocabularyGoldAr, mosesA2HighlightConfig);
const standardized = applyA2ArabicDefinitionStandard(selected, mosesA2HighlightDefinitionsAr, mosesA2HighlightConfig);

export const mosesA2HighlightTargets = standardized.targets;
export const mosesA2PagesFinalEn = standardized.englishPages;
export const mosesA2PagesFinalAr = standardized.arabicPages;

export const mosesA2TeacherGuideFinalEn = buildA2TeacherGuide(mosesA2PagesFinalEn, mosesA2GoldConfig.storyIds, 'en');
export const mosesA2TeacherGuideFinalAr = buildA2TeacherGuide(mosesA2PagesFinalAr, mosesA2GoldConfig.storyIds, 'ar');
export const mosesA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(mosesA2PagesFinalEn, mosesA2GoldConfig.storyIds, 'en');
export const mosesA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(mosesA2PagesFinalAr, mosesA2GoldConfig.storyIds, 'ar');
export const mosesA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Prophet Moses', mosesA2GoldConfig.storyIds.length, 'en');
export const mosesA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('قصة النبي موسى', mosesA2GoldConfig.storyIds.length, 'ar');
export const mosesA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const mosesA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const mosesA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Prophet Moses', 'en');
export const mosesA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('قصة النبي موسى', 'ar');
export const mosesA2StudentGuideTextFinalEn = buildA2StudentGuideText('Prophet Moses', 'en');
export const mosesA2StudentGuideTextFinalAr = buildA2StudentGuideText('قصة النبي موسى', 'ar');
