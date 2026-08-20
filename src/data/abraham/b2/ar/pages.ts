import type { PageData } from '../../../../types';
import { abrahamB2PagesAr as lockedAbrahamB2PagesAr } from './lockedStorySource';

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
    };
  }

  if (page.id === 38) {
    return {
      ...base,
      type: 'vocabulary-match',
      title: 'تحدي المفردات — B2',
      content: 'صل عشرة مصطلحات أساسية من القصة بمعانيها الدقيقة.',
      vocabulary: undefined,
      animatedWords: undefined,
    };
  }

  if (page.id === 39) {
    return {
      ...base,
      type: 'glossary',
      title: 'مسرد القصة — B2',
    };
  }

  if (page.id === 40) {
    return {
      ...base,
      type: 'final-challenge',
      title: 'التحدي النهائي',
      content: 'أظهر إتقانك للقصة كاملة من خلال التحليل والدليل والمقارنة والتركيب.',
    };
  }

  return base;
};

// نص القصة الأصلي محفوظ دون تغيير في lockedStorySource.ts.
// هذا الملف النشط يعرض القصة والوسائط وWord Notes والنقاط التفاعلية وهياكل الصفحات فقط.
// جميع أنشطة التعلم تُربط من exercises.ts في ../index.ts.
export const abrahamB2PagesAr: PageData[] = lockedAbrahamB2PagesAr.map(cleanShell);
