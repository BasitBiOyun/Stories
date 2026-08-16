import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, guideBundle, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter01: LearningBlueprintChapter = {
  chapterId: 1,
  objectives: [
    L('Identify what Adam was created from and what role the human would have on Earth.', 'يحدد ممَّ خُلق آدم وما المسؤولية التي ستكون للإنسان في الأرض.'),
    L('Recall how the angels waited and why the story connects different soil with different skin colors.', 'يتذكر كيف انتظرت الملائكة وكيف تربط القصة بين التراب المختلف وألوان البشرة المختلفة.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c1-creation',
      focus: 'direct',
      claim: L('Allah created Adam from soil.', 'خلق الله آدم من التراب.'),
      evidence: L('Allah created him from soil', 'خَلَقَهُ اللهُ مِنَ التُّرَابِ'),
    },
    {
      id: 'adam-a2-c1-earth-role',
      focus: 'direct',
      claim: L('Allah said the human would become the ruler on Earth.', 'قال الله إن الإنسان سيكون خليفةً مسؤولًا في الأرض.'),
      evidence: L('The human is going to become the ruler on earth', 'سَيَكُونُ الْإِنْسَانُ خَلِيفَةً (مَسْؤُولًا) فِي الْأَرْضِ'),
    },
    {
      id: 'adam-a2-c1-curiosity',
      focus: 'sequence',
      claim: L('The angels waited with curiosity.', 'انتظرت الملائكة بفضول.'),
      evidence: L('They began waiting with curiosity', 'وَانْتَظَرُوا بِفُضُولٍ'),
    },
    {
      id: 'adam-a2-c1-colors',
      focus: 'cause-result',
      claim: L('The chapter connects soil from different parts of Earth with different human skin colors.', 'يربط الفصل بين التراب من أماكن مختلفة واختلاف ألوان بشرة الناس.'),
      evidence: L('humans have different skin colors', 'لِلنَّاسِ أَلْوَانُ بَشَرَةٍ مُخْتَلِفَةٌ'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(1),
  assessmentItems: [
    {
      id: 'adam-a2-c1-quick', learningPointId: 'adam-a2-c1-creation', eligibleStages: ['quick'],
      exercise: tap(
        L('What was Adam created from?', 'مِمَّ خُلق آدم؟'),
        L('Adam was created from soil.', 'خُلق آدم من التراب.'),
      ),
    },
    {
      id: 'adam-a2-c1-knowledge', learningPointId: 'adam-a2-c1-earth-role', eligibleStages: ['knowledge'],
      exercise: mc(
        L('What did Allah say the human would become on Earth?', 'ماذا قال الله إن الإنسان سيكون في الأرض؟'),
        {
          en: ['The ruler on Earth', 'A shepherd in Paradise', 'An angel in the sky'],
          ar: ['خليفةً مسؤولًا في الأرض', 'راعيًا في الجنة', 'مَلَكًا في السماء'],
        },
        0,
        L('Allah said the human would become the ruler on Earth.', 'قال الله إن الإنسان سيكون خليفةً مسؤولًا في الأرض.'),
      ),
    },
    {
      id: 'adam-a2-c1-review', learningPointId: 'adam-a2-c1-curiosity', eligibleStages: ['review'],
      exercise: tf(
        L('The angels waited with curiosity after hearing that a human would be created.', 'انتظرت الملائكة بفضول بعد أن سمعت أن الله سيخلق إنسانًا.'),
        true,
        L('The chapter says the angels began waiting with curiosity.', 'يقول الفصل إن الملائكة انتظرت بفضول.'),
      ),
    },
    {
      id: 'adam-a2-c1-final', learningPointId: 'adam-a2-c1-colors', eligibleStages: ['final'],
      exercise: mc(
        L('Why does the chapter say humans have different skin colors?', 'لماذا تقول القصة إن للناس ألوان بشرة مختلفة؟'),
        {
          en: ['The soil came from different parts of Earth', 'The angels chose different colors', 'Adam lived for many years'],
          ar: ['جاء التراب من أماكن مختلفة من الأرض', 'اختارت الملائكة ألوانًا مختلفة', 'عاش آدم سنوات طويلة'],
        },
        0,
        L('The chapter links the different soil collected from Earth with different human skin colors.', 'يربط الفصل بين التراب المأخوذ من أماكن مختلفة وبين اختلاف ألوان البشرة.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('Adam’s creation, the human role on Earth, and the chapter’s opening sequence', 'خلق آدم ومسؤولية الإنسان في الأرض وتسلسل بداية القصة'),
    primaryQuestion: L('What two details does the chapter give about Adam’s creation and the human role on Earth?', 'ما المعلومتان اللتان يذكرهما الفصل عن خلق آدم ومسؤولية الإنسان في الأرض؟'),
    secondQuestion: L('What happened after Allah told the angels about the human?', 'ماذا حدث بعد أن أخبر الله الملائكة عن الإنسان؟'),
    grammar: L('Notice past simple for completed events: created, told, collected, shaped.', 'لاحظ أفعال الماضي للأحداث المكتملة: خَلَقَ، قالَ، أَحْضَرَ، صَوَّرَ.'),
    pronunciation: L('Practise messenger, soil, curiosity, and the final sounds in created and shaped.', 'تدرّب على نطق نَبِيٍّ، التُّرَابِ، بِفُضُولٍ، والسَّمَاءَ بوضوح.'),
    fast: L('Write three short sentences in order: creation → the angels → soil from different lands.', 'اكتب ثلاث جمل قصيرة بالترتيب: الخلق ← الملائكة ← التراب من أماكن مختلفة.'),
    support: L('Use the frames: “Allah created Adam from ___.” and “The angels waited with ___.”', 'استخدم الإطارين: «خلق الله آدم من ___.» و«انتظرت الملائكة بـ ___.»'),
  }),
};
