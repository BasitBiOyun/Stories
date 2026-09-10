import type { BookData, TeacherGuideMetadata } from '../types';
import type { BookPair } from '../core/content/contracts';

type GuideLanguage = 'en' | 'ar';

const TYMM_VALUES = [
  { code: 'D1', tr: 'Adalet', en: 'Justice', ar: 'العدل' },
  { code: 'D2', tr: 'Aile Bütünlüğü', en: 'Family Integrity', ar: 'تماسك الأسرة' },
  { code: 'D3', tr: 'Çalışkanlık', en: 'Diligence', ar: 'الاجتهاد' },
  { code: 'D4', tr: 'Dostluk', en: 'Friendship', ar: 'الصداقة' },
  { code: 'D5', tr: 'Duyarlılık', en: 'Sensitivity', ar: 'الحساسية' },
  { code: 'D6', tr: 'Dürüstlük', en: 'Honesty', ar: 'الصدق' },
  { code: 'D7', tr: 'Estetik', en: 'Aesthetics', ar: 'الجماليات' },
  { code: 'D8', tr: 'Mahremiyet', en: 'Privacy', ar: 'الخصوصية' },
  { code: 'D9', tr: 'Merhamet', en: 'Compassion', ar: 'الرحمة' },
  { code: 'D10', tr: 'Mütevazılık', en: 'Humility', ar: 'التواضع' },
  { code: 'D11', tr: 'Özgürlük', en: 'Freedom', ar: 'الحرية' },
  { code: 'D12', tr: 'Sabır', en: 'Patience', ar: 'الصبر' },
  { code: 'D13', tr: 'Sağlıklı Yaşam', en: 'Healthy Living', ar: 'الحياة الصحية' },
  { code: 'D14', tr: 'Saygı', en: 'Respect', ar: 'الاحترام' },
  { code: 'D15', tr: 'Sevgi', en: 'Love', ar: 'المحبة' },
  { code: 'D16', tr: 'Sorumluluk', en: 'Responsibility', ar: 'المسؤولية' },
  { code: 'D17', tr: 'Tasarruf', en: 'Thrift', ar: 'التوفير' },
  { code: 'D18', tr: 'Temizlik', en: 'Cleanliness', ar: 'النظافة' },
  { code: 'D19', tr: 'Vatanseverlik', en: 'Patriotism', ar: 'حب الوطن' },
  { code: 'D20', tr: 'Yardımseverlik', en: 'Helpfulness', ar: 'مساعدة الآخرين' },
] as const;

const TYMM_PROSE_URLS = [
  'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri',
  'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi',
] as const;

const stripTymmUrlFromProse = (text: string): string => {
  let result = text;
  for (const url of TYMM_PROSE_URLS) {
    if (result.trim() !== url) result = result.replaceAll(url, '');
  }
  return result
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\s+([.,;:!?،؛])/g, '$1')
    .trim();
};

const localizeValueString = (text: string, language: GuideLanguage): string => {
  let result = text;
  for (const value of TYMM_VALUES) {
    const target = language === 'ar' ? value.ar : value.en;
    result = result.replace(new RegExp(`${value.code}\\s+${value.tr}`, 'g'), `${value.code} ${target}`);
  }
  return stripTymmUrlFromProse(result);
};

const localizeDeep = <T,>(value: T, language: GuideLanguage): T => {
  if (typeof value === 'string') return localizeValueString(value, language) as T;
  if (Array.isArray(value)) return value.map(item => localizeDeep(item, language)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, localizeDeep(item, language)]),
    ) as T;
  }
  return value;
};

const arabicAppendixDefaults = (bookId: string): NonNullable<TeacherGuideMetadata['appendices']> | null => {
  const id = bookId.toLowerCase();

  if (id.includes('moses') || id.includes('musa')) {
    return {
      exitTicket: [
        'درس واحد تعلمته اليوم عن النبي موسى (عليه السلام) هو...',
        'موقف يظهر الشجاعة الآمنة في هذه الدراسة كان...',
        'كلمة من مستوى CEFR A2 أريد الاستمرار في استخدامها من هذا الفصل هي...'
      ],
      miniProject: {
        title: 'ملصق اللطف في مدين',
        desc: 'ارسم أو اكتب عن مشهد مدين حين ساعد النبي موسى (عليه السلام) المرأتين، ثم اكتب ثلاث جمل عربية بسيطة توضح كيف يمكننا إظهار اللطف اليوم.'
      },
      reflectivePrompt: {
        title: 'الثقة بالله في الأوقات الصعبة',
        desc: 'وضعت أم موسى ابنها في تابوت في النيل وهي تثق بحفظ الله. اكتب عن موقف احتجت فيه إلى الثقة والهدوء أثناء صعوبة ما.'
      }
    };
  }

  if (id.includes('abraham') || id.includes('ibrahim')) {
    return {
      exitTicket: [
        'درس واحد تعلمته اليوم عن النبي إبراهيم (عليه السلام) هو...',
        'موقف من الشجاعة في هذه الدراسة كان...',
        'كلمة بسيطة من هذا الفصل أريد استخدامها هي...'
      ],
      miniProject: {
        title: 'لوحة البحث عن الحقيقة',
        desc: 'ارسم تمثيلًا بسيطًا لإبراهيم (عليه السلام) وهو ينظر إلى النجوم والقمر والشمس ويتأمل الخالق، ثم اكتب جملتين عربيتين بسيطتين تشرحان الفكرة.'
      },
      reflectivePrompt: {
        title: 'الصبر والثقة',
        desc: 'وثقت هاجر بالله في الصحراء. اكتب عن موقف احتجت فيه إلى الصبر والأمل والثقة بأن الأمور ستتحسن.'
      }
    };
  }

  if (id.includes('mecca') || id.includes('mekke')) {
    return {
      exitTicket: [
        'درس واحد تعلمته اليوم عن تاريخ مكة أو تحولها هو...',
        'قيمة أخلاقية من خطبة الوداع ما زالت مهمة اليوم هي...',
        'مصطلح أساسي من هذا الفصل أريد تذكره هو...'
      ],
      miniProject: {
        title: 'لفافة الأخوة',
        desc: 'صمم لفافة تمثل قيم خطبة الوداع في المساواة الإنسانية والسلامة، ثم اكتب ثلاث جمل عربية بسيطة توضح كيف تنطبق هذه القيم على المواطنة العالمية.'
      },
      reflectivePrompt: {
        title: 'الاقتصاد الأخلاقي والشخصية',
        desc: 'كان في مكة نشاط تجاري كبير مع تفاوت في رعاية الفقراء والأيتام والأرامل. اكتب عن موقف أدركت فيه أن النجاح الحقيقي يرتبط بمساعدة الآخرين لا بجمع المال فقط.'
      }
    };
  }

  if (id.includes('yunus')) {
    return {
      exitTicket: [
        'درس واحد تعلمته اليوم عن التوحيد أو المحبة في فكر يونس إمره هو...',
        'موقف من الصدق أو التواضع قرأت عنه في هذا الفصل كان...',
        'كلمة أساسية مرتبطة بالأخلاق أريد استخدامها هي...'
      ],
      miniProject: {
        title: 'تكية الطريق المستقيم',
        desc: 'ارسم أو اكتب عن مشهد تكية تابدوك إمره حين كان يونس إمره يحمل قطع الحطب المستقيمة فقط، ثم اكتب ثلاث جمل بالعربية عن أهمية الاستقامة في الأعمال الصغيرة.'
      },
      reflectivePrompt: {
        title: 'حفظ القلب وتهذيبه',
        desc: 'علم يونس إمره أن جرح قلب الإنسان يفسد أثر العمل الحسن. اكتب عن موقف احتجت فيه إلى ضبط الغضب أو الصبر أو الكلام بلطف لحماية مشاعر أحد من حولك.'
      }
    };
  }

  if (id.includes('adam')) {
    return {
      exitTicket: [
        'شيء واحد تعلمته اليوم هو...',
        'كلمة واحدة أريد تذكرها هي...',
        'سؤال واحد لا يزال لدي هو...'
      ],
      miniProject: {
        title: 'فكرة مشروع صغير',
        desc: 'أنشئ قصة مصورة من ثلاث لوحات تظهر خيارًا جيدًا وخطأً واستجابة أفضل، وأضف تعليقات عربية قصيرة.'
      },
      reflectivePrompt: {
        title: 'موجه الكتابة التأملية',
        desc: 'يرتكب الناس أخطاء، لكن يمكنهم التعلم والعودة إلى الطريق الصحيح. اكتب عن موقف تعلمت فيه من خطأ.'
      }
    };
  }

  return null;
};

const withArabicAppendixFallbacks = (
  book: BookData,
  metadata: TeacherGuideMetadata | undefined,
): TeacherGuideMetadata | undefined => {
  const defaults = arabicAppendixDefaults(book.id);
  if (!defaults) return metadata;

  const current = metadata?.appendices;
  return {
    ...(metadata ?? {}),
    appendices: {
      ...defaults,
      ...(current ?? {}),
      miniProject: current?.miniProject ?? defaults.miniProject,
      reflectivePrompt: current?.reflectivePrompt ?? defaults.reflectivePrompt,
      exitTicket: current?.exitTicket?.length ? current.exitTicket : defaults.exitTicket,
    },
  };
};

const localizeBookTeacherGuide = (book: BookData, language: GuideLanguage): BookData => {
  const localizedMetadata = localizeDeep(book.teacherGuideMetadata, language);
  return {
    ...book,
    teacherGuide: localizeDeep(book.teacherGuide, language),
    teacherGuideMetadata: language === 'ar'
      ? withArabicAppendixFallbacks(book, localizedMetadata)
      : localizedMetadata,
  };
};

/**
 * Keeps TYMM D-codes stable while ensuring the visible value name follows the
 * language of the Teacher Guide. It also removes bare TYMM URLs from prose and
 * supplies Arabic appendix fallbacks so the Arabic guide never falls back to
 * English-only project and reflection copy. Story pages, exercises, Language
 * Focus and Self-Study data stay untouched.
 */
export const localizeTeacherGuideTymmValues = (pair: BookPair): BookPair => ({
  en: localizeBookTeacherGuide(pair.en, 'en'),
  ar: localizeBookTeacherGuide(pair.ar, 'ar'),
});
