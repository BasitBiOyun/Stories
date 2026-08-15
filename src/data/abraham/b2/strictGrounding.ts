import type { Exercise, PageData } from '../../../types';

type Language = 'en' | 'ar';

type Spec = {
  question: string;
  explanation: string;
};

const specs: Record<Language, Record<number, Spec>> = {
  en: {
    2: {
      question: 'The chapter says human beings are capable of discovering Hanifism because the existence of Allah can be found through reasoning.',
      explanation: 'Chapter 2 directly says that human beings are capable of discovering Hanifism and that the existence of Allah can be found through reasoning.',
    },
    3: {
      question: 'At the beginning of Prophet Muhammad’s mission, the chapter says the hanîfs in the Hijaz stayed away from idolatry and its practices.',
      explanation: 'Chapter 3 directly states that the group who called themselves hanîfs stayed away from idolatry and its practices.',
    },
    6: {
      question: 'As a child, Abraham was astonished when his father said he made statues of gods, and Abraham spontaneously rejected the idea.',
      explanation: 'Chapter 6 states that Abraham was astonished and spontaneously rejected the idea after learning that his father made statues of gods.',
    },
    11: {
      question: 'In the quoted argument, Abraham says that he does not fear the partners his people assign to Allah.',
      explanation: 'Chapter 11 quotes Abraham saying, “I do not fear partners you assign to Him,” while challenging his people’s argument.',
    },
    12: {
      question: 'Abraham told his father and his people that the statues they worshipped could not hear, see, or protect them.',
      explanation: 'Chapter 12 presents Abraham rejecting idol worship and asking his father and people to reconsider statues that could not hear, see, or protect them.',
    },
    13: {
      question: 'Abraham spoke kindly to his father and asked why he worshipped something that could neither hear, see, nor benefit him.',
      explanation: 'Chapter 13 directly describes Abraham speaking wisely and kindly to his father before quoting this question.',
    },
    25: {
      question: 'Sarah thought she could not have a child, so she suggested that Abraham marry Hajar.',
      explanation: 'Chapter 25 directly connects Sarah’s belief that she could not have a child with her suggestion that Abraham marry Hajar.',
    },
    26: {
      question: 'The chapter says Allah later gave Abraham another son from Sarah, and that son was Isaac.',
      explanation: 'Chapter 26 directly states that Allah gave Abraham another son from Sarah and names him Isaac.',
    },
    29: {
      question: 'Hajar ran between Safa and Marwa seven times looking for signs of water or help, and the chapter says her effort was later symbolized by Muslims in Hajj.',
      explanation: 'Chapter 29 states that Hajar ran between the two hills seven times looking for water or help and connects her effort with Hajj.',
    },
  },
  ar: {
    2: {
      question: 'يقول الفصل إن الإنسان قادر على اكتشاف الحنيفية لأن وجود الله يمكن الوصول إليه عن طريق التفكير.',
      explanation: 'يذكر الفصل الثاني مباشرة أن الإنسان قادر على اكتشاف الحنيفية وأن وجود الله يمكن الوصول إليه عن طريق التفكير.',
    },
    3: {
      question: 'يقول الفصل إن الحنفاء في الحجاز في بداية بعثة النبي محمد ابتعدوا عن الوثنية وممارساتها.',
      explanation: 'يذكر الفصل الثالث أن الجماعة التي كانت تسمّي نفسها الحنفاء ابتعدت عن الوثنية وممارساتها.',
    },
    6: {
      question: 'عندما عرف إبراهيم في طفولته أن والده يصنع تماثيل للآلهة، اندهش ورفض الفكرة تلقائيًا.',
      explanation: 'يذكر الفصل السادس أن إبراهيم اندهش ورفض الفكرة تلقائيًا عندما عرف أن والده يصنع تماثيل للآلهة.',
    },
    11: {
      question: 'في الحوار الوارد في الفصل، يقول إبراهيم إنه لا يخاف الشركاء الذين يجعلهم قومه لله.',
      explanation: 'ينقل الفصل الحادي عشر قول إبراهيم إنه لا يخاف الشركاء الذين يجعلهم قومه لله وهو يجادلهم.',
    },
    12: {
      question: 'قال إبراهيم لأبيه وقومه إن التماثيل التي يعبدونها لا تسمع ولا ترى ولا تحميهم.',
      explanation: 'يعرض الفصل الثاني عشر رفض إبراهيم لعبادة الأصنام ودعوته أباه وقومه إلى إعادة النظر في عبادة تماثيل لا تسمع ولا ترى ولا تحمي.',
    },
    13: {
      question: 'خاطب إبراهيم أباه بلطف وسأله لماذا يعبد ما لا يسمع ولا يرى ولا ينفعه.',
      explanation: 'يصف الفصل الثالث عشر إبراهيم وهو يخاطب أباه بحكمة ولطف ثم ينقل هذا السؤال مباشرة.',
    },
    25: {
      question: 'ظنت سارة أنها لا تستطيع الإنجاب، ولذلك اقترحت على إبراهيم أن يتزوج هاجر.',
      explanation: 'يربط الفصل الخامس والعشرون مباشرة بين ظن سارة أنها لا تستطيع الإنجاب واقتراحها أن يتزوج إبراهيم هاجر.',
    },
    26: {
      question: 'يقول الفصل إن الله رزق إبراهيم بعد ذلك ابنًا آخر من سارة، وكان اسمه إسحاق.',
      explanation: 'يذكر الفصل السادس والعشرون مباشرة أن الله رزق إبراهيم ابنًا آخر من سارة ويسميه إسحاق.',
    },
    29: {
      question: 'سعت هاجر بين الصفا والمروة سبع مرات تبحث عن الماء أو المساعدة، ويربط الفصل سعيها بالحج.',
      explanation: 'يذكر الفصل التاسع والعشرون أنها سعت بين الجبلين سبع مرات بحثًا عن الماء أو المساعدة ويربط جهدها بالحج.',
    },
  },
};

const groundedExercise = (chapterId: number, language: Language, spec: Spec): Exercise => ({
  id: `abraham-b2-strict-${chapterId}-${language}`,
  type: 'true-false',
  title: language === 'ar' ? 'دليل مباشر من الفصل' : 'Direct Chapter Evidence',
  instructions: language === 'ar'
    ? 'حدّد هل العبارة مدعومة مباشرة بالفصل.'
    : 'Decide whether the statement is directly supported by the chapter.',
  question: spec.question,
  correctAnswer: true,
  explanation: spec.explanation,
  feedback: {
    correct: language === 'ar' ? `صحيح. ${spec.explanation}` : `Correct. ${spec.explanation}`,
    incorrect: language === 'ar'
      ? 'ارجع إلى الفصل وحدد الجملة ذات الصلة ثم حاول مرة أخرى.'
      : 'Return to the relevant sentence in the chapter and try again.',
  },
});

export const groundRemainingAbrahamB2Challenges = (pages: PageData[], language: Language): PageData[] => pages.map((page) => {
  if (page.type !== 'story') return page;
  const spec = specs[language][page.id];
  if (!spec) return page;
  return {
    ...page,
    exercises: [groundedExercise(page.id, language, spec), ...(page.exercises ?? []).slice(1)],
  };
});
