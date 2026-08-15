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

const correctedBasePagesEn = removeVocabularyTargets(applyVocabularyOverrides(basePagesEn, {
  6: {
    mistake: { word: 'upset', definition: 'Very sad or worried because something bad happened.' },
  },
  7: {
    escape: { word: 'escaped', definition: 'Got away from danger.' },
    'escape from': { word: 'thirsty', definition: 'Needing or wanting water.' },
  },
  11: {
    'take out': { word: 'chest', definition: 'The front part of the body below the neck.' },
  },
  12: {
    'laugh at': { word: 'laughed', definition: 'Showed that something was funny.' },
  },
  14: {
    prepare: { word: 'prepared', definition: 'Got ready for something.' },
  },
}), {
  // English says “armpit”, while the locked Arabic prose says جَيْبِهِ (pocket/chest opening).
  // It is therefore not a valid bilingual canonical learning target.
  12: ['armpit'],
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
    11: {
      chest: { word: 'جَيْبِكَ' },
    },
    12: {
      laughed: { word: 'سَخِرَ' },
    },
    14: {
      prepared: { word: 'أَعَدَّ' },
    },
  },
};

const selected = applyA2HighlightStandard(vocabularyGoldEn, vocabularyGoldAr, mosesA2HighlightConfig);
const standardized = applyA2ArabicDefinitionStandard(selected, mosesA2HighlightDefinitionsAr, mosesA2HighlightConfig);

export const mosesA2HighlightTargets = standardized.targets;
export const mosesA2PagesFinalEn = standardized.englishPages;
export const mosesA2PagesFinalAr = standardized.arabicPages;

export const mosesA2TeacherGuideFinalEn = buildA2TeacherGuide(abrahamA2PagesFinalEn as never, [] as never, 'en');
