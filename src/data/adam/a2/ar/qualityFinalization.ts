import type { PageData, TeacherGuideSection } from '../../../../types';
import { adamA2PagesArForLearning } from './learningMaterials';
import { adamA2TeacherGuideAr } from './teacherGuide';
import { adamA2HotspotsGoldAr } from '../hotspotsGold';
import { getAdamA2ChapterHighlights } from '../highlights';

/**
 * الطبقة النهائية للمحتوى العربي المشتق في Adam A2.
 * النص الأصلي، العناوين، الصور، الصوت وبيانات المزامنة لا تتغير هنا.
 * أهداف التظليل القصصي تأتي حصرا من ../highlights.ts حتى لا توجد قائمة عربية مستقلة.
 */

const glossaryArPart1: NonNullable<PageData['vocabulary']> = [1, 2, 3, 4, 5]
  .flatMap((chapterId) => getAdamA2ChapterHighlights(chapterId, 'ar'));
const glossaryArPart2: NonNullable<PageData['vocabulary']> = [6, 7, 8, 9, 10]
  .flatMap((chapterId) => getAdamA2ChapterHighlights(chapterId, 'ar'));

export const adamA2PagesArQualityFinalized: PageData[] = adamA2PagesArForLearning.map((page) => {
  if (page.type === 'story' && page.id >= 1 && page.id <= 10) {
    const hotspots = page.hotspots?.map((hotspot) => {
      const replacement = adamA2HotspotsGoldAr[hotspot.id];
      return replacement ? { ...hotspot, ...replacement } : hotspot;
    });
    return {
      ...page,
      vocabulary: getAdamA2ChapterHighlights(page.id, 'ar'),
      animatedWords: undefined,
      hotspots,
    };
  }

  if (page.id === 14) {
    return {
      ...page,
      content: 'جَمِيعُ الْكَلِمَاتِ الْمُظَلَّلَةِ فِي الْفُصُولِ ١–٥ لِمُرَاجَعَةِ الْكِتَابِ.',
      vocabulary: glossaryArPart1
    };
  }

  if (page.id === 15) {
    return {
      ...page,
      content: 'جَمِيعُ الْكَلِمَاتِ الْمُظَلَّلَةِ فِي الْفُصُولِ ٦–١٠ لِمُرَاجَعَةِ الْكِتَابِ.',
      vocabulary: glossaryArPart2
    };
  }

  return page;
});

export const adamA2TeacherGuideArQualityFinalized: TeacherGuideSection[] = adamA2TeacherGuideAr.map((section) => ({
  ...section,
  extraResources: undefined
}));
