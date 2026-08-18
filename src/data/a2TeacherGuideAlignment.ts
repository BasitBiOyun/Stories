import type { TeacherGuideMetadata } from '../types';
import type { BlueprintLanguage } from './learningBlueprint';

export type A2AlignmentStory = 'abraham' | 'moses' | 'mecca' | 'yunusEmre';

type AlignmentCopy = {
  alignmentNote: string;
  skillsFocus: NonNullable<TeacherGuideMetadata['skillsFocus']>;
  grammarApproach: string;
  vocabularyApproach: string;
  valuesFocus: string[];
};

type StoryAlignment = Record<BlueprintLanguage, AlignmentCopy>;

const alignments: Record<A2AlignmentStory, StoryAlignment> = {
  abraham: {
    en: {
      alignmentNote: 'TYMM alignment is used as a transparent curriculum map rather than as generic decoration: YDAB2 is the primary reading/meaning skill; YDAB1 supports the narrated story; YDAB3 and YDAB4 support short evidence-based speaking and writing. YDDB1 follows the grammar that actually appears across the fourteen chapters, YDDB2 follows story vocabulary in context, and YDDB3 is practised through each chapter’s pronunciation focus.',
      skillsFocus: {
        listening: 'TYMM YDAB1 supporting + CEFR A2: listen for the sequence and key details in Abraham’s observations, conversations, journeys, challenges, and turning points already grounded in the written story.',
        reading: 'TYMM YDAB2 primary + CEFR A2: understand the narrative, locate evidence, follow Abraham’s reasoning, compare what created objects can and cannot do, and connect clear causes, decisions, and results.',
        speaking: 'TYMM YDAB3 supporting: give one or two clear A2 sentences to explain a story-supported reason, comparison, decision, or conclusion.',
        writing: 'TYMM YDAB4 supporting: write short evidence-based A2 sentences for sequence, cause/result, comparison, a simple conclusion, or transfer.',
      },
      grammarApproach: 'TYMM YDDB1 supporting: grammar follows the chapter language rather than a detached grammar list—Simple Past for events; could/could not and can/cannot for ability and powerlessness; because/so/but and when for relationships; comparatives where Abraham compares what he observes; First Conditional only where it appears naturally in the prayer; then change, decision, place-description, and will forms in later chapters.',
      vocabularyApproach: 'TYMM YDDB2 supporting: teach vocabulary through the exact narrative job it performs. The curated whole-book set—worship, Creator, arrogant, miracle, journey, unique—is reinforced through chapter evidence instead of isolated definition memorisation.',
      valuesFocus: ['Seeking truth through careful observation', 'Questioning unsupported claims respectfully', 'Courage without arrogance', 'Trust and patience in difficulty', 'Sincerity and gratitude', 'Using evidence before accepting a claim'],
    },
    ar: {
      alignmentNote: 'تُستخدم مواءمة TYMM بوصفها خريطة منهجية واضحة لا زخرفة عامة: YDAB2 هو محور القراءة وبناء المعنى، وYDAB1 يدعم الاستماع إلى السرد، وYDAB3 وYDAB4 يدعمان الكلام والكتابة القصيرين القائمين على الدليل. ويتبع YDDB1 التراكيب الموجودة فعلًا في الفصول الأربعة عشر، ويتبع YDDB2 مفردات القصة في السياق، ويظهر YDDB3 في تركيز النطق الخاص بكل فصل.',
      skillsFocus: {
        listening: 'TYMM YDAB1 داعم + CEFR A2: الاستماع لتسلسل الأحداث والتفاصيل الأساسية في ملاحظات إبراهيم وحواراته ورحلاته وتحدياته ونقاط التحول الموثقة في النص.',
        reading: 'TYMM YDAB2 أساسي + CEFR A2: فهم السرد وتحديد الدليل وتتبع تفكير إبراهيم ومقارنة ما تستطيع المخلوقات فعله وما لا تستطيع وربط الأسباب والقرارات والنتائج الواضحة.',
        speaking: 'TYMM YDAB3 داعم: تقديم جملة أو جملتين واضحتين بمستوى A2 لشرح سبب أو مقارنة أو قرار أو استنتاج تدعمه القصة.',
        writing: 'TYMM YDAB4 داعم: كتابة جمل A2 قصيرة قائمة على الدليل للتسلسل أو السبب والنتيجة أو المقارنة أو الاستنتاج البسيط أو النقل.',
      },
      grammarApproach: 'TYMM YDDB1 داعم: تتبع القواعد لغة الفصول نفسها—الماضي البسيط للأحداث، وcould/could not وcan/cannot للاستطاعة والعجز، وbecause/so/but وwhen للعلاقات، والمقارنة عندما يقارن إبراهيم ما يراه، والشرط الأول فقط حيث يظهر طبيعيًا في الدعاء، ثم تراكيب التغير والقرار ووصف المكان وwill في الفصول اللاحقة.',
      vocabularyApproach: 'TYMM YDDB2 داعم: تُدرَّس المفردات من خلال وظيفتها في السرد. وتُراجع المجموعة المنتقاة للكتاب داخل الدليل والسياق بدل حفظ التعريفات منفصلة.',
      valuesFocus: ['البحث عن الحقيقة بالملاحظة', 'مراجعة الادعاءات بلا تقليد أعمى', 'الشجاعة دون تكبر', 'الثقة والصبر في الشدة', 'الإخلاص والامتنان', 'الاعتماد على الدليل قبل قبول الادعاء'],
    },
  },
  moses: {
    en: {
      alignmentNote: 'TYMM alignment follows the actual sixteen-chapter learning path: YDAB2 is primary for narrative meaning and evidence; YDAB1 supports listening to the same sequence; YDAB3 and YDAB4 support short explanations and comparisons. YDDB1 is tied to the grammar used in the Moses chapters, YDDB2 to the story’s key vocabulary, and YDDB3 to chapter pronunciation work.',
      skillsFocus: {
        listening: 'TYMM YDAB1 supporting + CEFR A2: listen for the main event, sequence, reassurance, warning, request, and response in the same scenes learners have read.',
        reading: 'TYMM YDAB2 primary + CEFR A2: follow a long narrative, locate evidence, connect simple causes/results, compare responses, and track change from danger or injustice toward guidance, help, and safety.',
        speaking: 'TYMM YDAB3 supporting: give one or two short A2 sentences to explain a reason, compare two responses, or retell a turning point accurately.',
        writing: 'TYMM YDAB4 supporting: write short evidence-based sentences for sequence, cause/result, comparison, reassurance, decision, or reflection.',
      },
      grammarApproach: 'TYMM YDDB1 supporting: use Simple Past for the narrative; Past Progressive with Simple Past only where the story supports background + event; could/could not for past ability or possibility; because/so for cause and result; clear comparisons; must for obligation; will for intention, promise, or reassurance; and Wh-questions for reason and place.',
      vocabularyApproach: 'TYMM YDDB2 supporting: vocabulary is learned through the story’s moral and narrative functions. The curated set—cruel, protect, forgive, guided, arrogant, safely—recycles oppression, protection, repentance, guidance, pride, and safe rescue across the book.',
      valuesFocus: ['Fair use of power', 'Trust in difficult situations', 'Learning and seeking forgiveness after a mistake', 'Helping people in need', 'Responding to truth without arrogance', 'Human dignity and freedom'],
    },
    ar: {
      alignmentNote: 'تتبع مواءمة TYMM مسار التعلم الحقيقي في الفصول الستة عشر: YDAB2 هو المحور لفهم السرد والدليل، وYDAB1 يدعم الاستماع إلى التسلسل نفسه، وYDAB3 وYDAB4 يدعمان الشرح والمقارنة القصيرين. ويرتبط YDDB1 بتراكيب فصول موسى، وYDDB2 بمفردات القصة الأساسية، وYDDB3 بتدريب النطق في كل فصل.',
      skillsFocus: {
        listening: 'TYMM YDAB1 داعم + CEFR A2: الاستماع للحدث الرئيس والتسلسل والطمأنة والتحذير والطلب والرد في المشاهد نفسها التي قرأها المتعلم.',
        reading: 'TYMM YDAB2 أساسي + CEFR A2: تتبع السرد الطويل وتحديد الدليل وربط الأسباب والنتائج البسيطة ومقارنة الردود وتتبع الانتقال من الخطر أو الظلم إلى الهداية والمساعدة والأمان.',
        speaking: 'TYMM YDAB3 داعم: تقديم جملة أو جملتين قصيرتين بمستوى A2 لشرح سبب أو مقارنة ردين أو إعادة سرد نقطة تحول بدقة.',
        writing: 'TYMM YDAB4 داعم: كتابة جمل قصيرة قائمة على الدليل للتسلسل أو السبب والنتيجة أو المقارنة أو الطمأنة أو القرار أو التأمل.',
      },
      grammarApproach: 'TYMM YDDB1 داعم: الماضي البسيط للسرد، والماضي المستمر مع الماضي البسيط فقط عندما يدعم النص خلفية + حدثًا، وcould/could not للقدرة أو الإمكان في الماضي، وbecause/so للسبب والنتيجة، والمقارنات الواضحة، وmust للإلزام، وwill للنية أو الوعد أو الطمأنة، وأسئلة Wh للسبب والمكان.',
      vocabularyApproach: 'TYMM YDDB2 داعم: تُتعلم المفردات من خلال وظيفتها الأخلاقية والسردية. وتعيد المجموعة المنتقاة ربط الظلم والحماية والتوبة والهداية والكبر والنجاة الآمنة عبر الكتاب.',
      valuesFocus: ['الاستخدام العادل للسلطة', 'الثقة في المواقف الصعبة', 'التعلم وطلب المغفرة بعد الخطأ', 'مساعدة المحتاج', 'الاستجابة للحق دون تكبر', 'كرامة الإنسان وحريته'],
    },
  },
  mecca: {
    en: {
      alignmentNote: 'TYMM alignment is tied to the thirteen-chapter social-history arc rather than copied from a prophet-story template: YDAB2 focuses on understanding conditions, choices, pressure, change, and equality; YDAB1 supports narration; YDAB3/4 support short evidence-based responses. YDDB1 follows the grammar used to describe past society and change, YDDB2 follows social-history vocabulary, and YDDB3 remains chapter-specific.',
      skillsFocus: {
        listening: 'TYMM YDAB1 supporting + CEFR A2: listen for changes in social position, choices under pressure, requests, refusals, and important before/after contrasts.',
        reading: 'TYMM YDAB2 primary + CEFR A2: understand short social-history narrative, locate evidence, follow sequence, compare status and treatment, and connect simple causes, choices, consequences, freedom, and equality.',
        speaking: 'TYMM YDAB3 supporting: give one or two clear A2 sentences to describe a social contrast, a choice, a change, or why a chapter event matters.',
        writing: 'TYMM YDAB4 supporting: write short text-supported A2 sentences for past conditions, cause/contrast, sequence, choice, change, or equality.',
      },
      grammarApproach: 'TYMM YDDB1 supporting: grammar follows the social-history story—Simple Past and there was/were for past conditions; comparatives for social contrasts; had to/must for obligation; decided to/refused to for choices; because/but/so and sequence linkers; First Conditional only where it appears in Chapter 8; became/was now for change of state; and simple equality/conclusion language in the final chapters.',
      vocabularyApproach: 'TYMM YDDB2 supporting: select vocabulary that unlocks the social meaning of the book—status, slavery and freedom, pressure and choice, dignity, equality, and change—then recycle it through evidence rather than detached memorisation.',
      valuesFocus: ['Human dignity', 'Equality across social status and origin', 'Freedom of conscience and choice', 'Courage under pressure', 'Kindness toward the powerless', 'Social responsibility and justice'],
    },
    ar: {
      alignmentNote: 'ترتبط مواءمة TYMM بمسار التاريخ الاجتماعي في الفصول الثلاثة عشر ولا تُنسخ من قالب قصص الأنبياء: يركز YDAB2 على فهم الظروف والاختيارات والضغط والتغير والمساواة، ويدعم YDAB1 السرد، ويدعم YDAB3/4 الاستجابات القصيرة القائمة على الدليل. ويتبع YDDB1 لغة وصف المجتمع الماضي والتغير، ويتبع YDDB2 مفردات التاريخ الاجتماعي، ويبقى YDDB3 خاصًا بكل فصل.',
      skillsFocus: {
        listening: 'TYMM YDAB1 داعم + CEFR A2: الاستماع للتغيرات في المكانة الاجتماعية والاختيارات تحت الضغط والطلبات والرفض والمقارنات المهمة بين قبل وبعد.',
        reading: 'TYMM YDAB2 أساسي + CEFR A2: فهم سرد تاريخي اجتماعي قصير وتحديد الدليل وتتبع التسلسل ومقارنة المكانة والمعاملة وربط الأسباب والاختيارات والنتائج والحرية والمساواة.',
        speaking: 'TYMM YDAB3 داعم: تقديم جملة أو جملتين واضحتين بمستوى A2 لوصف مقارنة اجتماعية أو اختيار أو تغير أو سبب أهمية حدث في الفصل.',
        writing: 'TYMM YDAB4 داعم: كتابة جمل قصيرة مدعومة بالنص عن ظروف الماضي أو السبب والمقارنة أو التسلسل أو الاختيار أو التغير أو المساواة.',
      },
      grammarApproach: 'TYMM YDDB1 داعم: تتبع القواعد قصة التاريخ الاجتماعي—الماضي البسيط وthere was/were لظروف الماضي، والمقارنة للفروق الاجتماعية، وhad to/must للإلزام، وdecided to/refused to للاختيار، وbecause/but/so وروابط التسلسل، والشرط الأول فقط حيث يظهر في الفصل 8، وbecame/was now لتغير الحال، ولغة بسيطة للمساواة والخلاصة في الفصول الأخيرة.',
      vocabularyApproach: 'TYMM YDDB2 داعم: تُختار المفردات التي تفتح المعنى الاجتماعي للكتاب—المكانة والعبودية والحرية والضغط والاختيار والكرامة والمساواة والتغير—ثم يعاد استخدامها من خلال الدليل لا الحفظ المنفصل.',
      valuesFocus: ['الكرامة الإنسانية', 'المساواة بغض النظر عن المكانة والأصل', 'حرية الضمير والاختيار', 'الشجاعة تحت الضغط', 'الرفق بالمستضعفين', 'المسؤولية والعدالة الاجتماعية'],
    },
  },
  yunusEmre: {
    en: {
      alignmentNote: 'TYMM alignment follows the eight-chapter biography-and-values structure: YDAB2 is used to understand biography, service, discipline, simple symbolic meaning, nature, and daily-life lessons; YDAB1 supports narration; YDAB3/4 support short expression. YDDB1 follows only the A2 language that the chapters genuinely support, YDDB2 follows meaning-bearing vocabulary, and YDDB3 is handled in chapter pronunciation work.',
      skillsFocus: {
        listening: 'TYMM YDAB1 supporting + CEFR A2: listen for biographical sequence, repeated habits, service tasks, simple explanations, and final advice already established in the written story.',
        reading: 'TYMM YDAB2 primary + CEFR A2: understand short biography and narrative, locate evidence, follow sequence, connect a visible action with one simple text-supported meaning, and identify clear lessons from nature and daily work.',
        speaking: 'TYMM YDAB3 supporting: give one or two clear A2 sentences to explain a value, a simple cause/result, or the text-supported meaning of an action.',
        writing: 'TYMM YDAB4 supporting: write short evidence-based A2 sentences for biography, reason, comparison, simple meaning, advice, or transfer.',
      },
      grammarApproach: 'TYMM YDDB1 supporting: target only chapter-supported A2 language—Simple Past for biography; because for cause; tried to and simple comparisons; will and never where they express willingness or repeated negative behaviour; can/cannot; simple if clauses; could not for past inability; and should/must for clear advice. More abstract symbolic language is treated as meaning, not as a higher-level grammar target.',
      vocabularyApproach: 'TYMM YDDB2 supporting: vocabulary is selected for biography, service, discipline, honesty, inner training, nature, and meaningful daily work. Learners meet each word in the sentence that gives it its story meaning before reusing it.',
      valuesFocus: ['Humility through service', 'Discipline and self-control', 'Honesty and straight conduct', 'Learning from nature', 'Careful and meaningful work', 'Simple language used to reach and help people'],
    },
    ar: {
      alignmentNote: 'تتبع مواءمة TYMM بنية السيرة والقيم في الفصول الثمانية: يُستخدم YDAB2 لفهم السيرة والخدمة والانضباط والمعنى الرمزي البسيط والطبيعة ودروس الحياة اليومية، ويدعم YDAB1 السرد، ويدعم YDAB3/4 التعبير القصير. ويتبع YDDB1 فقط لغة A2 التي تدعمها الفصول فعلًا، ويتبع YDDB2 المفردات الحاملة للمعنى، ويظهر YDDB3 في تدريب النطق في الفصول.',
      skillsFocus: {
        listening: 'TYMM YDAB1 داعم + CEFR A2: الاستماع لتسلسل السيرة والعادات المتكررة ومهام الخدمة والتفسيرات البسيطة والنصيحة الأخيرة المثبتة في النص.',
        reading: 'TYMM YDAB2 أساسي + CEFR A2: فهم سيرة وسرد قصيرين وتحديد الدليل وتتبع التسلسل وربط فعل ظاهر بمعنى واحد بسيط يدعمه النص وتحديد الدروس الواضحة من الطبيعة والعمل اليومي.',
        speaking: 'TYMM YDAB3 داعم: تقديم جملة أو جملتين واضحتين بمستوى A2 لشرح قيمة أو سبب ونتيجة بسيطين أو معنى فعل تدعمه القصة.',
        writing: 'TYMM YDAB4 داعم: كتابة جمل A2 قصيرة قائمة على الدليل للسيرة أو السبب أو المقارنة أو المعنى البسيط أو النصيحة أو النقل.',
      },
      grammarApproach: 'TYMM YDDB1 داعم: تُستهدف فقط لغة A2 التي تدعمها الفصول—الماضي البسيط للسيرة، وbecause للسبب، وtried to والمقارنات البسيطة، وwill وnever حيث يعبران عن الاستعداد أو السلوك المنفي المتكرر، وcan/cannot، وجمل if البسيطة، وcould not لعدم الاستطاعة في الماضي، وshould/must للنصيحة الواضحة. أما الرمزية الأكثر تجريدًا فتعالج بوصفها معنى لا هدفًا نحويًا أعلى.',
      vocabularyApproach: 'TYMM YDDB2 داعم: تُختار المفردات للسيرة والخدمة والانضباط والصدق وتدريب النفس والطبيعة والعمل اليومي الهادف، ويلتقي المتعلم بكل كلمة أولًا داخل الجملة التي تمنحها معناها في القصة.',
      valuesFocus: ['التواضع من خلال الخدمة', 'الانضباط وضبط النفس', 'الصدق والاستقامة', 'التعلم من الطبيعة', 'إتقان العمل الهادف', 'استخدام اللغة البسيطة للوصول إلى الناس ونفعهم'],
    },
  },
};

export const finalizeA2TeacherGuideAlignment = (
  metadata: TeacherGuideMetadata,
  story: A2AlignmentStory,
  language: BlueprintLanguage,
): TeacherGuideMetadata => {
  const profile = alignments[story][language];
  return {
    ...metadata,
    purpose: [metadata.purpose, profile.alignmentNote].filter(Boolean).join(' '),
    approachDesc: [metadata.approachDesc, profile.alignmentNote].filter(Boolean).join(' '),
    skillsFocus: profile.skillsFocus,
    grammarApproach: profile.grammarApproach,
    vocabularyApproach: profile.vocabularyApproach,
    valuesFocus: profile.valuesFocus,
  };
};
