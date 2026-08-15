import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { applyA2HighlightStandard, type A2HighlightStandardConfig } from '../../a2HighlightStandard';
import { applyA2ArabicDefinitionStandard } from '../../a2ArabicDefinitionStandard';
import {
  applyA2GoldPages,
  buildA2SelfStudyGuide,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuide,
  buildA2TeacherGuideMetadata,
} from '../../a2GoldFactory';
import { meccaA2Pages } from './en/pages';
import { meccaA2PagesAr } from './ar/pages';
import { meccaA2HighlightDefinitionsAr } from './highlightDefinitionsAr';
import { meccaA2GoldConfig, meccaA2HotspotsGoldAr, meccaA2HotspotsGoldEn } from './gold';

const canonicalEnForLearning = meccaA2Pages.map((page) => {
  if (page.id === 14 && page.type === 'quiz') {
    return {
      ...page,
      exercises: (page.exercises ?? []).map((exercise) => exercise.id === 'q6'
        ? {
            ...exercise,
            explanation: 'The story says the Prophet (pbuh) chose Bilal to call people to prayer, and Bilal gave the first Adhan.',
          }
        : exercise),
    };
  }

  if (page.type !== 'story') return page;

  if (page.id === 1) {
    return {
      ...page,
      // Bilal is the subject of the whole book, not an A2 learning target. The
      // Arabic chapter also expresses "became a Muslim" with إسلامه rather than
      // a matching noun. Use the genuinely bilingual and useful target "free".
      animatedWords: (page.animatedWords ?? []).filter((word) => !['Bilal', 'Muslim'].includes(word)),
    };
  }

  if (page.id === 2) {
    return {
      ...page,
      vocabulary: (page.vocabulary ?? []).map((entry) => entry.word === 'ignorance'
        ? { word: 'Jahiliyyah', definition: 'The period before Islam, when ignorance and idol worship were common.' }
        : entry),
      animatedWords: (page.animatedWords ?? []).filter((word) => word !== 'Jahiliyyah'),
    };
  }

  if (page.id === 5) {
    return {
      ...page,
      // Arabic uses عبد (slave), already taught in Chapter 1, where English says
      // servant. Keep the reader count aligned by using the already-visible and
      // semantically matching Prophet target instead.
      vocabulary: (page.vocabulary ?? []).map((entry) => entry.word === 'servant'
        ? { word: 'Prophet', definition: 'A messenger chosen by Allah to guide people.' }
        : entry),
      animatedWords: (page.animatedWords ?? []).filter((word) => word !== 'Prophet'),
    };
  }

  if (page.id === 7) {
    return {
      ...page,
      vocabulary: (page.vocabulary ?? []).map((entry) => entry.word === 'accepted'
        ? { word: 'accepted Islam', definition: 'Chose to believe in Allah and follow Islam.' }
        : entry),
      animatedWords: (page.animatedWords ?? []).filter((word) => word !== 'accepted Islam'),
    };
  }

  if (page.id === 8) {
    return {
      ...page,
      exercises: [{
        id: 'ex8-1-gold',
        type: 'multiple-choice' as const,
        title: 'Allah Is One',
        instructions: 'Choose the correct answer.',
        question: 'What did Bilal say when Umayya tried to make him worship idols?',
        options: ['Allah is One, Allah is One', 'I will worship the idols', 'I want money'],
        correctAnswer: 0,
        explanation: 'The chapter says Bilal refused to worship the idols and said, “Allah is One, Allah is One.”',
        feedback: {
          correct: 'Correct. Bilal stayed firm and said that Allah is One.',
          incorrect: 'Go back to the last sentence of the chapter and try again.',
        },
      }],
    };
  }

  return page;
});

const canonicalArForLearning = meccaA2PagesAr.map((page) => page.id === 8
  ? {
      ...page,
      exercises: [{
        id: 'ex8-1-gold-ar',
        type: 'multiple-choice' as const,
        title: 'الله واحد',
        instructions: 'اختر الإجابة الصحيحة.',
        question: 'ماذا قال بلال عندما حاول أمية إجباره على عبادة الأصنام؟',
        options: ['الله واحد، الله واحد', 'سأعبد الأصنام', 'أريد المال'],
        correctAnswer: 0,
        explanation: 'يقول الفصل إن بلالا رفض عبادة الأصنام وقال: «الله واحد، الله واحد».',
        feedback: {
          correct: 'صحيح. ثبت بلال على إيمانه وقال إن الله واحد.',
          incorrect: 'ارجع إلى آخر جملة في الفصل ثم حاول مرة أخرى.',
        },
      }],
    }
  : page);

const basePagesEn = applyA2GoldPages({
  canonicalPages: canonicalEnForLearning,
  hotspotMap: meccaA2HotspotsGoldEn,
  config: meccaA2GoldConfig,
  language: 'en',
});

const basePagesAr = applyA2GoldPages({
  canonicalPages: canonicalArForLearning,
  hotspotMap: meccaA2HotspotsGoldAr,
  config: meccaA2GoldConfig,
  language: 'ar',
});

const vocabularyGoldEn = applyA2VocabularyGold({
  pages: basePagesEn,
  storyIds: meccaA2GoldConfig.storyIds,
  vocabularyPageId: 15,
  language: 'en',
  chapterAdditions: {
    1: [{ word: 'free', definition: 'Not a slave; able to live without being owned by another person.' }],
  },
});

const vocabularyGoldAr = applyA2VocabularyGold({
  pages: basePagesAr,
  storyIds: meccaA2GoldConfig.storyIds,
  vocabularyPageId: 15,
  language: 'ar',
});

export const meccaA2HighlightConfig: A2HighlightStandardConfig = {
  storyKey: 'Mecca',
  storyIds: meccaA2GoldConfig.storyIds,
  glossaryPageIds: meccaA2GoldConfig.glossaryPageIds,
  arabicOverrides: {
    1: {
      openly: { word: 'جَهَرُوا' },
      Adhan: { word: 'الْأَذَانَ' },
      slave: { word: 'عَبْدًا' },
      valuable: { word: 'قِيمَةً' },
      free: { word: 'حُرًّا' },
    },
    2: {
      Jahiliyyah: { word: 'الْجاهِلِيَّةِ' },
      idol: { word: 'الْأَصْنامَ' },
      justice: { word: 'عَدَالَةٌ' },
      luxury: { word: 'رَفاهِيَّةٍ' },
      faiz: { word: 'فَيْضًا' },
      'lent money': { word: 'يُقْرِضُونَ' },
    },
    3: {
      system: { word: 'النِّظَامِ' },
      'slave market': { word: 'أَسْوَاقُ الْعَبِيدِ' },
      Abyssinia: { word: 'الْحَبَشَةِ' },
      master: { word: 'سَيِّدُهُ' },
      enemy: { word: 'أَعْدَاءِ' },
      poor: { word: 'الْفَقِيرُ' },
      rich: { word: 'الْغَنِيُّ' },
      Umayya: { word: 'أُمَيَّةُ' },
    },
    4: {
      hatred: { word: 'حِقْدِهِ' },
      rude: { word: 'غَلِيظًا' },
      camel: { word: 'جِمَالَ' },
      harsh: { word: 'قَاسِيًا' },
      patient: { word: 'صَبُورًا' },
      'hot sun': { word: 'حَرِّ الشَّمْسِ' },
    },
    5: {
      obedient: { word: 'مُطِيعًا' },
      Prophet: { word: 'نَبِيٍّ' },
      freedom: { word: 'حُرِّيَّتِهِ' },
      fair: { word: 'عَادِلِينَ' },
      equal: { word: 'مُتَسَاوِينَ' },
    },
    6: {
      Creator: { word: 'الْخَالِقِ' },
      secretly: { word: 'سِرًّا' },
      'hidden path': { word: 'طَرِيقٍ خَفِيٍّ' },
      knocked: { word: 'طَرَقَ' },
      kind: { word: 'لَطِيفًا' },
      'Abu Bakr': { word: 'أَبَا بَكْرٍ' },
    },
    7: {
      partner: { word: 'شَرِيكٌ' },
      equals: { word: 'مَثِيلٌ' },
      supported: { word: 'أَيَّدَ' },
      truth: { word: 'الْحَقُّ' },
      'accepted Islam': { word: 'دَخَلَ فِي الْإِسْلامِ' },
    },
    8: {
      angrily: { word: 'بِغَضَبٍ' },
      refused: { word: 'رَفَضَ' },
      rope: { word: 'الْحِبَالَ' },
      whipped: { word: 'جَلَدَ' },
      'Allah is One': { word: 'اللَّهُ وَاحِدٌ' },
      locked: { word: 'حَبَسَ' },
      'speak well of': { word: 'تَكَلَّمْتَ بِخَيْرٍ' },
      'burning rock': { word: 'صَخْرَةً كَبِيرَةً حَارَّةً' },
    },
    9: {
      pain: { word: 'يَتَأَلَّمُ' },
      'right away': { word: 'فَوْرًا' },
      sell: { word: 'يَبِيعَهُ' },
      price: { word: 'ثَمَنٍ' },
      crime: { word: 'جَرِيمَةٌ' },
    },
    10: {
      agreed: { word: 'وافَقَ' },
      gold: { word: 'الذَّهَبِ' },
      difficulty: { word: 'بِصُعُوبَةٍ' },
      rescued: { word: 'أَنْقَذَهُ' },
      freely: { word: 'بِحُرِّيَّةٍ' },
      'free man': { word: 'رَجُلٌ حُرٌّ' },
    },
    11: {
      beloved: { word: 'أَحَبِّ' },
      respected: { word: 'أَكْرَمِ' },
      hardship: { word: 'الصُّعُوبَةِ' },
      Hijrah: { word: 'الْهِجْرَةِ' },
      fearlessly: { word: 'بِلا خَوْفٍ' },
      hurt: { word: 'آذَاهُ' },
      shouted: { word: 'يَصْرُخُ' },
    },
    12: {
      morning: { word: 'صَباحٍ' },
      pleased: { word: 'فَرِحَ' },
      speech: { word: 'خُطْبَتَهُ' },
      disrespect: { word: 'عَدَمُ احْتِرامِهِمْ' },
      prayer: { word: 'الصَّلاةُ' },
      'Farewell Sermon': { word: 'خُطْبَةَ الْوَداعِ' },
    },
    13: {
      'skin color': { word: 'لَوْنِ الْبَشَرَةِ' },
      nationality: { word: 'الْجِنْسِيَّةِ' },
      allowed: { word: 'سَمَحَ' },
      Damascus: { word: 'دِمَشْقَ' },
      matters: { word: 'الْمُهِمُّ' },
      actions: { word: 'أَعْمَالًا' },
    },
  },
};

const selected = applyA2HighlightStandard(vocabularyGoldEn, vocabularyGoldAr, meccaA2HighlightConfig);
const standardized = applyA2ArabicDefinitionStandard(selected, meccaA2HighlightDefinitionsAr, meccaA2HighlightConfig);

export const meccaA2HighlightTargets = standardized.targets;
export const meccaA2PagesFinalEn = standardized.englishPages;
export const meccaA2PagesFinalAr = standardized.arabicPages;

export const meccaA2TeacherGuideFinalEn = buildA2TeacherGuide(meccaA2PagesFinalEn, meccaA2GoldConfig.storyIds, 'en');
export const meccaA2TeacherGuideFinalAr = buildA2TeacherGuide(meccaA2PagesFinalAr, meccaA2GoldConfig.storyIds, 'ar');
export const meccaA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(meccaA2PagesFinalEn, meccaA2GoldConfig.storyIds, 'en');
export const meccaA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(meccaA2PagesFinalAr, meccaA2GoldConfig.storyIds, 'ar');
export const meccaA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Bilal ibn Rabah and Mecca', meccaA2GoldConfig.storyIds.length, 'en');
export const meccaA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('بلال بن رباح ومكة', meccaA2GoldConfig.storyIds.length, 'ar');
export const meccaA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const meccaA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const meccaA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Bilal ibn Rabah and Mecca', 'en');
export const meccaA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('بلال بن رباح ومكة', 'ar');
export const meccaA2StudentGuideTextFinalEn = buildA2StudentGuideText('Bilal ibn Rabah and Mecca', 'en');
export const meccaA2StudentGuideTextFinalAr = buildA2StudentGuideText('بلال بن رباح ومكة', 'ar');
