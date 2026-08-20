import type { PageData } from '../../../../types';
import { abrahamB2PagesAr as lockedAbrahamB2PagesAr } from './lockedStorySource';

const refineStorySupport = (page: PageData): PageData => {
  const withoutEnglishFallback = { ...page, audioUrl: '' };

  if (page.id === 1) {
    return {
      ...withoutEnglishFallback,
      hotspots: page.hotspots?.map(hotspot => hotspot.id === 'b2-hs-1-2'
        ? { ...hotspot, description: 'يُقَدَّمُ إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ بَوْصْفِهِ شَخْصِيَّةً أَسَاسِيَّةً فِي الْيَهُودِيَّةِ وَالْمَسِيحِيَّةِ وَالْإِسْلَامِ.' }
        : hotspot),
    };
  }

  if (page.id === 4) {
    return {
      ...withoutEnglishFallback,
      hotspots: page.hotspots?.map(hotspot => hotspot.id === 'b2-hs-4-1'
        ? { ...hotspot, description: 'تُقَدِّمُ الْمَصَادِرُ الْإِسْلَامِيَّةُ آزَرَ عَلَى أَنَّهُ صَانِعُ أَصْنَامِ النُّمْرُودِ.' }
        : hotspot),
    };
  }

  if (page.id === 5) {
    return {
      ...withoutEnglishFallback,
      hotspots: page.hotspots?.map(hotspot => {
        if (hotspot.id === 'b2-hs-5-1') return { ...hotspot, description: 'فِي إِحْدَى الرِّوَايَاتِ، تَنَبَّأَ مُنَجِّمُو النُّمْرُودِ بِطِفْلٍ سَيُهَدِّدُ مُلْكَهُ.' };
        if (hotspot.id === 'b2-hs-5-2') return { ...hotspot, description: 'تَذْكُرُ الْقِصَّةُ أَنَّ آزَرَ أَخْفَى زَوْجَتَهُ الْحَامِلَ فِي كَهْفٍ.' };
        return hotspot;
      }),
    };
  }

  return withoutEnglishFallback;
};

const cleanShell = (page: PageData): PageData => {
  const {
    exercises: _exercises,
    sequencingItems: _sequencingItems,
    vocabularyPairs: _vocabularyPairs,
    ...base
  } = page;

  if (page.id === 36) {
    return {
      ...base,
      type: 'quiz',
      title: 'اختبار المعرفة — B2',
      content: 'اختبر فهمك لقصة النبي إبراهيم عليه السلام كاملة في مستوى B2.',
      image: '',
      audioUrl: '',
      vocabulary: undefined,
      hotspots: undefined,
      animatedWords: undefined,
      syncPoints: undefined,
      timedChunks: undefined,
    };
  }

  if (page.id === 37) {
    return {
      ...base,
      type: 'exercises',
      title: 'مراجعة الاسترجاع — B2',
      content: 'استرجع الأدلة واربط الأفكار واستخدمها من جميع فصول القصة.',
      image: '',
    };
  }

  if (page.id === 38) {
    return {
      ...base,
      type: 'vocabulary-match',
      title: 'تحدي المفردات — B2',
      content: 'صل عشرة مصطلحات أساسية من القصة بمعانيها الدقيقة.',
      image: '',
      vocabulary: undefined,
      animatedWords: undefined,
    };
  }

  if (page.id === 39) {
    return {
      ...base,
      type: 'glossary',
      title: 'مسرد القصة — B2',
      image: '',
    };
  }

  if (page.id === 40) {
    return {
      ...base,
      type: 'final-challenge',
      title: 'التحدي النهائي',
      content: 'أظهر إتقانك للقصة كاملة من خلال التحليل والدليل والمقارنة والتركيب.',
      image: '',
    };
  }

  return page.type === 'story' ? refineStorySupport(base) : base;
};

// نص القصة الأصلي محفوظ دون تغيير في lockedStorySource.ts.
// هذا الملف النشط يعرض القصة والوسائط وWord Notes والنقاط التفاعلية وهياكل الصفحات فقط.
// جميع أنشطة التعلم تُربط من exercises.ts في ../index.ts.
export const abrahamB2PagesAr: PageData[] = lockedAbrahamB2PagesAr.map(cleanShell);
