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

const glossaryArPart1: NonNullable<PageData['vocabulary']> = [
  { word: 'نبي', definition: 'شخص يرسله الله إلى الناس.' },
  { word: 'التراب', definition: 'الأرض الجافة على سطح الأرض.' },
  { word: 'الفضول', definition: 'الرغبة في معرفة شيء جديد.' },
  { word: 'العلم', definition: 'ما يعرفه الإنسان ويفهمه.' },
  { word: 'الاحترام', definition: 'تقدير شخص ومعاملته بطريقة جيدة.' },
  { word: 'متكبر', definition: 'يظن أنه أفضل من الآخرين.' },
  { word: 'الطين', definition: 'تراب لين فيه ماء.' },
  { word: 'نافع', definition: 'مفيد.' },
  { word: 'الوحدة', definition: 'الشعور بأنك وحدك.' },
  { word: 'تحذير', definition: 'كلام يخبرك أن تنتبه من شيء.' },
  { word: 'خطأ', definition: 'شيء تفعله وهو غير صحيح.' },
  { word: 'المغفرة', definition: 'أن يغفر الله الخطأ.' }
];

const glossaryArPart2: NonNullable<PageData['vocabulary']> = [
  { word: 'الزروع', definition: 'نباتات يزرعها الناس للطعام.' },
  { word: 'الطبيعة', definition: 'الأرض والنباتات والحيوانات وما حولنا.' },
  { word: 'رسول', definition: 'شخص يرسله الله ليعلّم الناس.' },
  { word: 'صادقين', definition: 'يقولون الحقيقة.' },
  { word: 'راعٍ', definition: 'شخص يعتني بالغنم.' },
  { word: 'مزارع', definition: 'شخص يعمل في الأرض ويزرع النباتات.' },
  { word: 'قربان', definition: 'شيء يُقدَّم لله.' },
  { word: 'حسود', definition: 'يشعر بالسوء بسبب ما عند شخص آخر.' },
  { word: 'غراب', definition: 'طائر أسود.' },
  { word: 'يحفر', definition: 'يصنع حفرة في الأرض.' },
  { word: 'الحسد', definition: 'الشعور بالضيق بسبب ما عند شخص آخر.' },
  { word: 'اللطف', definition: 'معاملة الآخرين برفق وخير.' }
];

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
      content: 'مفردات أساسية مختارة من الفصول 1–5 للمراجعة الكاملة.',
      vocabulary: glossaryArPart1
    };
  }

  if (page.id === 15) {
    return {
      ...page,
      content: 'مفردات أساسية مختارة من الفصول 6–10 للمراجعة الكاملة.',
      vocabulary: glossaryArPart2
    };
  }

  return page;
});

export const adamA2TeacherGuideArQualityFinalized: TeacherGuideSection[] = adamA2TeacherGuideAr.map((section) => ({
  ...section,
  // لا ندّعي وجود أوراق عمل منفصلة ما لم تكن موجودة فعلا في المشروع.
  extraResources: undefined
}));