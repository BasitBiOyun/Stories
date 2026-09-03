import type { BookData, TeacherGuideMetadata, TeacherGuideSection } from '../types';
import type { BookPair } from '../core/content/contracts';

const ADAM_B2_EN_PRONUNCIATION: Record<number, string> = {
  1: 'Use the chapter audio to chunk source frames such as “Based on…” / “According to…” and corrective contrasts such as “not … but …”. Stress the source holder and the contrasted idea so attribution and reframing remain audible.',
  2: 'Rehearse one source-qualified sentence and one evidence-to-conclusion sentence from the audio. Pause before conclusion markers and stress the evidence noun that licenses the conclusion.',
  3: 'Contrast the spoken force of “means”, “points to” and “could mean”. Keep “could” unstressed enough to preserve caution, and chunk purpose/necessity phrases as complete meaning units.',
  4: 'Use contrastive stress with “however”, “not … but rather …” and “both”. Rehearse a complementarity sentence so the two functions sound balanced rather than oppositional.',
  5: 'Chunk clarification frames such as “that is / in other words”, then use a short pause before “on the other hand / however”. Stress the criterion being challenged, not the person or group.',
  6: 'Use the audio to distinguish command, prohibition and firm future intention. Rehearse repeated future declarations with parallel rhythm so determination is heard without turning the lines into dramatic performance.',
  7: 'Practise condition and possibility with “if / might”, then rehearse “as soon as …” as one time-linking chunk. Keep possibility intonation distinct from a certain prediction.',
  8: 'Rehearse the chapter’s questions with their discourse function in mind, then practise source-boundary phrases such as “not described / only mentioned / according to …” with a clear pause before the attributed interpretation.',
  9: 'Practise “unless …” with a short pause before the consequence and give clear sentence stress to “must” when it expresses obligation. Contrast possibility language with responsibility language.',
  10: 'Use the audio to compare named and impersonal reporting frames such as “X said”, “it is reported” and “it is said”. Keep the reporting frame attached prosodically to the claim it qualifies.',
  11: 'Rehearse “no sooner … than …” as a two-part time frame and repeated “had to” with steady rhythm. Give extra stress to priority markers such as “above all”.',
  12: 'Practise “while” for analytical contrast, passive outcome clauses for information focus, and source-limit phrases such as “according to … / we do not know …” with deliberate, non-dramatic pacing.',
  13: 'Rehearse concession with “although / however”, then condition–consequence phrasing with a clear clause boundary. Keep “may / can” audibly weaker than certainty language.',
  14: 'Use calm pacing for the sensitive scene. Rehearse layered negation, passive result focus and purpose phrases, stressing consequence and learning rather than violent action.',
  15: 'Chunk the metadiscursive frame “What is essentially being described/shown here …” before the interpretation that follows. Use balanced stress in the final character contrast.',
  16: 'Practise reported-source frames and future-from-past “would” without over-stressing the transmitted detail. Use parallel rhythm for repeated guidance actions and contrast-to-unity statements.',
  17: 'Rehearse scope and exception with clear stress on “except”, then practise concession/reframing and cause-versus-appearance language. End the synthesis with genuine open-question intonation rather than a rhetorical answer.',
};

const ADAM_B2_AR_PRONUNCIATION: Record<number, string> = {
  1: 'استخدم صوت الفصل لتقسيم عبارات الإسناد مثل «وفقًا لـ…» والمقابلة مثل «ليس… بل…» إلى وحدات معنى. أبرز صاحب المصدر والعنصر المقابَل حتى يسمع الفرق بين الإسناد والتفسير.',
  2: 'درّب جملة مصدرية مقيدة ثم جملة تنتقل من الدليل إلى النتيجة. اجعل وقفة قصيرة قبل أداة النتيجة وأبرز الكلمة التي يقوم عليها الاستنتاج.',
  3: 'قابل صوتيًا بين «يعني» و«يشير إلى» و«يمكن فهمه على أنه». خفف النبر في صيغة الاحتمال، واقرأ تراكيب الغاية والضرورة كوحدات متصلة.',
  4: 'استعمل نبرًا تقابليًا مع «ومع ذلك» و«ليس… بل…» وإيقاعًا متوازنًا عند عرض وظيفتين متكاملتين حتى لا تبدوا متعارضتين.',
  5: 'قسّم عبارات التوضيح مثل «أي/بمعنى» ثم اجعل وقفة قبل «من جهة أخرى/ولكن». أبرز المعيار الذي يجري نقده لا الشخص أو الجماعة.',
  6: 'ميّز في الصوت بين الأمر والنهي والعزم المستقبلي المؤكد. درّب العبارات المتوازية بإيقاع واضح من غير تحويل التهديد إلى أداء درامي.',
  7: 'درّب الشرط والاحتمال في «لو/لعل»، ثم اقرأ «ما إن… حتى…» كوحدة زمنية مترابطة. حافظ على فرق مسموع بين الاحتمال والنتيجة المؤكدة.',
  8: 'اقرأ الاستفهامات بحسب وظيفتها الخطابية، ثم درّب عبارات حدود المصدر مثل «لم يذكر/إنما ورد/يرى…» مع وقفة واضحة قبل التفسير المنسوب.',
  9: 'قسّم تركيب «إن لم…» قبل النتيجة، وأبرز «يجب أن» عند التعبير عن المسؤولية. قابل بين إمكان الخطأ والواجب بعده.',
  10: 'استخدم الصوت للمقارنة بين «قال فلان» و«روي أن» و«يقال إن». اجعل عبارة الإسناد متصلة بالادعاء الذي تقيده حتى لا يتحول الخبر المنقول إلى تقرير مباشر.',
  11: 'درّب «ما إن… حتى…» كإطار زمني ثنائي، وكرّر «كان عليه أن» بإيقاع ثابت. أبرز عبارات الأولوية مثل «فوق كل ذلك».',
  12: 'درّب «بينما» للمقابلة، وصيغ المبني للمجهول لإبراز النتيجة، وعبارات حدود المصدر مثل «بحسب…/لا نعرف…» بإيقاع هادئ ودقيق.',
  13: 'اقرأ الاستدراك ثم الشرط والعاقبة مع وقفة عند حد الجملة الشرطية. اجعل «قد» أضعف نبرًا من صيغ الجزم حتى يبقى الاحتمال احتمالًا.',
  14: 'حافظ على إيقاع هادئ في المشهد الحساس. درّب النفي المتراكم والمبني للمجهول وعبارات الغاية مع إبراز العاقبة والتعلم لا الفعل العنيف.',
  15: 'قسّم إطار التفسير «ما يوصف/يُعرض هنا في الحقيقة…» قبل التفسير الذي يليه، ثم استخدم نبرًا متوازنًا في المقابلة بين الشخصيات.',
  16: 'درّب عبارات الرواية والمستقبل من منظور الماضي من غير مبالغة في نبر التفاصيل المنقولة. استخدم إيقاعًا متوازيًا لأفعال الإرشاد والاستمرار.',
  17: 'أبرز «إلا» عند ضبط نطاق الحكم، ثم درّب الاستدراك وإعادة التركيز والسبب مقابل المظهر. اختم السؤال المفتوح بتنغيم سؤال حقيقي لا جواب ضمني.',
};

const replaceArabicPedagogyTerms = (value: string): string => value
  .replaceAll('Language Focus', 'التركيز اللغوي')
  .replaceAll('Quick Challenge', 'التحدي السريع')
  .replaceAll('Tap & Reveal', 'نشاط الكشف بعد المحاولة')
  .replaceAll('Türkiye Yüzyılı Maarif Modeli', 'نموذج قرن تركيا التعليمي');

const deepReplaceArabicTerms = <T>(value: T): T => {
  if (typeof value === 'string') return replaceArabicPedagogyTerms(value) as T;
  if (Array.isArray(value)) return value.map(item => deepReplaceArabicTerms(item)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, deepReplaceArabicTerms(item)]),
    ) as T;
  }
  return value;
};

const isAdamB2 = (book: BookData): boolean => {
  if (book.level !== 'B2') return false;
  return `${book.id} ${book.title}`.toLowerCase().includes('adam') || book.title.includes('آدم');
};

const polishBook = (book: BookData, isArabic: boolean): BookData => {
  if (!isAdamB2(book)) return book;

  const pronunciation = isArabic ? ADAM_B2_AR_PRONUNCIATION : ADAM_B2_EN_PRONUNCIATION;
  const teacherGuide: TeacherGuideSection[] = book.teacherGuide.map((section, index) => ({
    ...section,
    pronunciationFocus: pronunciation[index + 1] ?? section.pronunciationFocus,
  }));

  const metadata: TeacherGuideMetadata | undefined = book.teacherGuideMetadata
    ? {
        ...book.teacherGuideMetadata,
        assessmentEvidence: isArabic
          ? 'التحديات السريعة، تحديد الدليل وضبط المصدر ودرجة اليقين، مهام التركيز اللغوي، إنتاج B2 المترابط، تذاكر الخروج، فحص المعرفة، مراجعة اللغة B2، تحدي المفردات والتحدي النهائي.'
          : 'Chapter Quick Challenges, evidence/source/stance checks, Language Focus performance, connected B2 production, exit tickets, Knowledge Check, B2 Language Review, Vocabulary Challenge and Final Challenge.',
        assessmentOverview: {
          formative: isArabic
            ? ['التحدي السريع', 'فحص الدليل والمصدر ودرجة اليقين', 'التدريب والإنتاج في التركيز اللغوي', 'ادعاء–دليل–تفسير', 'إنتاج شفهي/كتابي B2 مترابط', 'تذكرة خروج', 'فحص المعرفة', 'مراجعة اللغة B2', 'تحدي المفردات']
            : ['Quick Challenge', 'Evidence/source/stance checks', 'Language Focus guided practice and production', 'Claim-evidence-explanation', 'Connected B2 speaking/writing transfer', 'Exit ticket', 'Knowledge Check', 'B2 Language Review', 'Vocabulary Challenge'],
          summative: [isArabic ? 'التحدي النهائي' : 'Final Challenge'],
        },
      }
    : book.teacherGuideMetadata;

  const polished = { ...book, teacherGuide, teacherGuideMetadata: metadata };
  return isArabic ? deepReplaceArabicTerms(polished) : polished;
};

export const polishReviewedB2TeacherGuide = (pair: BookPair): BookPair => ({
  en: polishBook(pair.en, false),
  ar: polishBook(pair.ar, true),
});
