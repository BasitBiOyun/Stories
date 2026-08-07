import type { PageData, TeacherGuideSection } from '../../../../types';
import { adamA2PagesArForLearning } from './learningMaterials';
import { adamA2TeacherGuideAr } from './teacherGuide';
import { adamA2HotspotsGoldAr } from '../hotspotsGold';

/**
 * الطبقة النهائية للمحتوى العربي المشتق في Adam A2.
 * النص الأصلي، العناوين، الصور، الصوت وبيانات المزامنة لا تتغير هنا.
 * تتم مراجعة نص النقاط التفاعلية فقط مع الحفاظ على المعرّفات والإحداثيات.
 */

const chapterVocabularyAr: Record<number, NonNullable<PageData['vocabulary']>> = {
  1: [
    { word: 'نبي', definition: 'شخص يرسله الله إلى الناس.' },
    { word: 'التراب', definition: 'الأرض الجافة التي نراها على سطح الأرض.' },
    { word: 'الفضول', definition: 'الرغبة في معرفة شيء جديد.' },
    { word: 'خليفة', definition: 'شخص مسؤول عن أمر أو مكان.' },
    { word: 'أحفاد', definition: 'أولاد الأبناء أو من يأتي بعدهم في العائلة.' }
  ],
  2: [
    { word: 'العلم', definition: 'ما يعرفه الإنسان ويفهمه.' },
    { word: 'التفكير', definition: 'استعمال العقل للفهم أو الاختيار.' },
    { word: 'الاحترام', definition: 'معاملة شخص بطريقة جيدة وتقدير مكانته.' },
    { word: 'تكريم', definition: 'إظهار التقدير لشخص.' },
    { word: 'ذكاء', definition: 'القدرة على الفهم والتعلم.' }
  ],
  3: [
    { word: 'متكبر', definition: 'يظن أنه أفضل أو أهم من الآخرين.' },
    { word: 'الطين', definition: 'تراب لين فيه ماء ويمكن تشكيله.' },
    { word: 'نافع', definition: 'مفيد ويعطي فائدة.' },
    { word: 'قيمة', definition: 'أهمية الشيء أو الشخص.' },
    { word: 'أصل', definition: 'المكان أو المادة التي بدأ منها الشيء.' }
  ],
  4: [
    { word: 'غاضب', definition: 'يشعر بغضب شديد.' },
    { word: 'حذر', definition: 'ينتبه حتى لا يحدث شيء سيئ.' },
    { word: 'الوحدة', definition: 'الشعور بأنك وحدك.' },
    { word: 'تحذير', definition: 'كلام يخبرك أن تنتبه من شيء.' },
    { word: 'الجنة', definition: 'المكان الذي عاش فيه آدم وحواء في هذا الفصل.' }
  ],
  5: [
    { word: 'كذب', definition: 'كلام غير صحيح.' },
    { word: 'تحذير', definition: 'كلام يخبرك أن تنتبه من شيء.' },
    { word: 'خطأ', definition: 'شيء تفعله وهو غير صحيح.' },
    { word: 'المغفرة', definition: 'أن يغفر الله الخطأ.' },
    { word: 'ندم', definition: 'الحزن بسبب شيء خطأ فعلته.' }
  ],
  6: [
    { word: 'الزروع', definition: 'نباتات يزرعها الناس للطعام.' },
    { word: 'تربية', definition: 'العناية بالحيوانات أو الأطفال حتى يكبروا.' },
    { word: 'الطبيعة', definition: 'الأرض والنباتات والحيوانات وما حولنا.' },
    { word: 'الضعفاء', definition: 'أشخاص يحتاجون إلى المساعدة.' },
    { word: 'يدبّران', definition: 'ينظمان الأمور ويعتنيان بها.' }
  ],
  7: [
    { word: 'رسول', definition: 'شخص يرسله الله ليعلّم الناس.' },
    { word: 'صادقين', definition: 'يقولون الحقيقة ولا يكذبون.' },
    { word: 'الخير', definition: 'الأفعال الجيدة.' },
    { word: 'الشر', definition: 'الأفعال السيئة.' },
    { word: 'السكينة', definition: 'الهدوء والراحة.' }
  ],
  8: [
    { word: 'راعٍ', definition: 'شخص يعتني بالغنم.' },
    { word: 'مزارع', definition: 'شخص يعمل في الأرض ويزرع النباتات.' },
    { word: 'حسود', definition: 'يحزن أو يغضب بسبب ما عند شخص آخر.' },
    { word: 'قربان', definition: 'شيء يُقدَّم لله.' },
    { word: 'محصول', definition: 'ما يجمعه المزارع من النباتات التي زرعها.' }
  ],
  9: [
    { word: 'الغضب', definition: 'شعور قوي عندما يكون الإنسان منزعجا جدا.' },
    { word: 'يؤذي', definition: 'يسبب ضررا أو ألما لشخص.' },
    { word: 'يضطرب', definition: 'يشعر بخوف وقلق شديد.' },
    { word: 'غراب', definition: 'طائر أسود.' },
    { word: 'يحفر', definition: 'يصنع حفرة في الأرض.' },
    { word: 'يدفن', definition: 'يضع شيئا في حفرة ثم يغطيه بالتراب.' }
  ],
  10: [
    { word: 'الحسد', definition: 'الشعور بالضيق بسبب ما عند شخص آخر.' },
    { word: 'يسيطر', definition: 'يتحكم في شيء ولا يتركه يتحكم فيه.' },
    { word: 'أحفاده', definition: 'أولاد أولاده ومن يأتي بعدهم في العائلة.' },
    { word: 'العالم', definition: 'كل البلاد والأماكن التي يعيش فيها الناس.' },
    { word: 'حسن الخلق', definition: 'معاملة الناس بطريقة جيدة.' },
    { word: 'اللطف', definition: 'معاملة الآخرين برفق وخير.' }
  ]
};

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
    return { ...page, vocabulary: chapterVocabularyAr[page.id], hotspots };
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