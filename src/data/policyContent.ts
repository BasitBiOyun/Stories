// Privacy notice and accessibility statement, shown in the "Privacy" tab of About & Sources.
// Keep them true to the code: update this file whenever the app starts storing or sending
// anything new (accounts, recordings, analytics) or when accessibility testing changes.

export interface PolicySection {
  id: string;
  title: { en: string; ar: string };
  intro?: { en: string; ar: string };
  points: { en: string; ar: string }[];
}

export const policyUpdated = { en: 'Last updated: 7 October 2026', ar: 'آخر تحديث: 7 أكتوبر 2026' };

export const policySections: PolicySection[] = [
  {
    id: 'privacy',
    title: { en: 'Privacy notice', ar: 'بيان الخصوصية' },
    intro: {
      en: 'You can use the whole library without an account. The app does not collect personal data.',
      ar: 'يمكنك استخدام المكتبة كلها دون حساب. التطبيق لا يجمع أي بيانات شخصية.',
    },
    points: [
      {
        en: 'There is no sign-up. The app never asks for your name, e-mail address or phone number.',
        ar: 'لا يوجد تسجيل. لا يطلب التطبيق اسمك أو بريدك الإلكتروني أو رقم هاتفك.',
      },
      {
        en: 'Nothing you do in the app is sent to us. There are no ads, no analytics and no tracking.',
        ar: 'لا يُرسَل إلينا شيء مما تفعله في التطبيق. لا إعلانات ولا تحليلات ولا تتبّع.',
      },
      {
        en: 'Your reading progress, scores, My words, settings and the name you type on a result card are saved only in this browser on this device. Nobody else can see them. Clearing the browser’s site data deletes them.',
        ar: 'تقدّمك في القراءة ونتائجك وكلماتي وإعداداتك والاسم الذي تكتبه على بطاقة النتيجة تُحفَظ في هذا المتصفح على هذا الجهاز فقط. لا يراها أحد غيرك. ومسح بيانات الموقع من المتصفح يحذفها.',
      },
      {
        en: 'The app runs on Google Cloud, and its pictures and audio come from Google Firebase Storage. Like every website, these servers see your device’s internet address when files load. We do not keep or use it.',
        ar: 'يعمل التطبيق على خوادم Google Cloud، وتأتي صوره وتسجيلاته الصوتية من Google Firebase Storage. وكما في كل موقع، ترى هذه الخوادم عنوان الإنترنت لجهازك عند تحميل الملفات. نحن لا نحتفظ به ولا نستخدمه.',
      },
      {
        en: 'The introduction film on the About page is loaded from YouTube in its privacy-enhanced mode (youtube-nocookie.com). The dyslexia-friendly font, when you turn it on, is loaded from jsDelivr.',
        ar: 'يُحمَّل الفيلم التعريفي في صفحة «عن المشروع» من يوتيوب في وضع الخصوصية المحسّن (youtube-nocookie.com). ويُحمَّل خط عُسر القراءة من jsDelivr عند تفعيله.',
      },
      {
        en: 'The read-aloud button in the glossary uses your browser’s own voice. Some browsers use an online voice service for this.',
        ar: 'زر القراءة بصوت عالٍ في المعجم يستخدم صوت متصفحك نفسه. وبعض المتصفحات تستعين بخدمة صوت على الإنترنت لذلك.',
      },
      {
        en: 'If accounts are added in the future, this notice will be updated before they are switched on.',
        ar: 'إذا أُضيفت الحسابات في المستقبل، فسيُحدَّث هذا البيان قبل تفعيلها.',
      },
    ],
  },
  {
    id: 'accessibility',
    title: { en: 'Accessibility statement', ar: 'بيان إمكانية الوصول' },
    intro: {
      en: 'Our goal is WCAG 2.1 level AA. Today the app partly meets it.',
      ar: 'هدفنا هو المستوى AA من إرشادات WCAG 2.1. والتطبيق اليوم يحقّقه جزئيًا.',
    },
    points: [
      {
        en: 'Already in place: the stories come with audio narration, text size can be changed, a dyslexia-friendly font can be turned on, and reduced motion is respected.',
        ar: 'المتوفّر الآن: القصص مصحوبة بتسجيل صوتي، ويمكن تغيير حجم النص، وتفعيل خط مناسب لعُسر القراءة، ويُراعى خيار تقليل الحركة.',
      },
      {
        en: 'Text contrast on the main screens meets the 4.5:1 rule, buttons on phones have 44-pixel touch areas, and Arabic pages read from right to left.',
        ar: 'تباين النص في الشاشات الرئيسية يحقّق نسبة 4.5:1، وللأزرار على الهواتف مساحة لمس قدرها 44 بكسلًا، وتُعرَض الصفحات العربية من اليمين إلى اليسار.',
      },
      {
        en: 'Known gaps: the app has not yet been tested with screen readers (VoiceOver, TalkBack, NVDA), and some map games and matching activities need touch or a mouse.',
        ar: 'النواقص المعروفة: لم يُختبَر التطبيق بعدُ بقارئات الشاشة (VoiceOver وTalkBack وNVDA)، وبعض ألعاب الخرائط وأنشطة المطابقة تحتاج إلى اللمس أو الفأرة.',
      },
      {
        en: 'If something in the app does not work for you, please tell your teacher or the project team so it can be fixed.',
        ar: 'إذا لم يعمل شيء في التطبيق كما ينبغي لك، فأخبر معلّمك أو فريق المشروع لإصلاحه.',
      },
    ],
  },
];
