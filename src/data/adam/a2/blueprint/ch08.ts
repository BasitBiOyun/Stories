import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter08: LearningBlueprintChapter = {
  chapterId: 8,
  objectives: [
    L('Compare Habil and Qabil by their work and character.', 'يقارن بين هابيل وقابيل من حيث العمل والصفات.'),
    L('Recall what each brother offered and how their choices were different.', 'يتذكر ما قدمه كل أخ وكيف اختلف اختيارهما.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c8-jobs', focus: 'comparison',
      claim: L('Habil became a shepherd and Qabil became a farmer.', 'أصبح هابيل راعيًا وأصبح قابيل مزارعًا.'),
      evidence: L('Habil became a shepherd. He kept cows, sheep and other animals. Qabil was a farmer', 'أَصْبَحَ هَابِيلُ رَاعِيًا. كَانَ يُرَبِّي الْأَبْقَارَ، وَالْأَغْنَامَ، وَحَيَوَانَاتٍ أُخْرَى. وَأَصْبَحَ قَابِيلُ مُزَارِعًا'),
    },
    {
      id: 'adam-a2-c8-character', focus: 'comparison',
      claim: L('Habil was kind and gentle, while Qabil was mostly jealous.', 'كان هابيل لطيفًا وطيبًا، أما قابيل فكان حسودًا غالبًا.'),
      evidence: L('Habil was kind, gentle and loved taking care of animals. Qabil was mostly jealous', 'كَانَ هَابِيلُ لَطِيفًا وَطَيِّبًا، وَكَانَ يُحِبُّ الِاعْتِنَاءَ بِالْحَيَوَانَاتِ. أَمَّا قَابِيلُ فَكَانَ حَسُودًا غَالِبًا'),
    },
    {
      id: 'adam-a2-c8-habil-offering', focus: 'character-action',
      claim: L('Habil brought his best and healthiest sheep as his offering.', 'قدم هابيل أفضل وأصح خروف عنده قربانًا.'),
      evidence: L('Habil brought his best and healtiest sheep', 'قَدَّمَ هَابِيلُ أَفْضَلَ وَأَصَحَّ خَرُوفٍ عِنْدَهُ'),
    },
    {
      id: 'adam-a2-c8-qabil-offering', focus: 'character-action',
      claim: L('Qabil brought only a handful of his crops.', 'أحضر قابيل قبضة فقط من محصوله.'),
      evidence: L('Qabil brought just a handful of his crops', 'قَابِيلَ أَحْضَرَ قَبْضَةً فَقَطْ مِنْ مَحْصُولِهِ'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(8),
  assessmentItems: [
    {
      id: 'adam-a2-c8-quick', learningPointId: 'adam-a2-c8-jobs', eligibleStages: ['quick'],
      exercise: matching(
        L('Match each brother with his work.', 'صل كل أخ بعمله.'),
        {
          en: [['Habil', 'shepherd'], ['Qabil', 'farmer']],
          ar: [['هابيل', 'راعٍ'], ['قابيل', 'مزارع']],
        },
        L('Habil became a shepherd and Qabil became a farmer.', 'أصبح هابيل راعيًا وأصبح قابيل مزارعًا.'),
      ),
    },
    {
      id: 'adam-a2-c8-knowledge', learningPointId: 'adam-a2-c8-habil-offering', eligibleStages: ['knowledge'],
      exercise: mc(
        L('What did Habil bring as his offering?', 'ماذا قدم هابيل قربانًا؟'),
        {
          en: ['His best and healthiest sheep', 'A handful of crops', 'A basket of fruit'],
          ar: ['أفضل وأصح خروف عنده', 'قبضة من المحصول', 'سلة من الفاكهة'],
        },
        0,
        L('Habil brought his best and healthiest sheep.', 'قدم هابيل أفضل وأصح خروف عنده.'),
      ),
    },
    {
      id: 'adam-a2-c8-review', learningPointId: 'adam-a2-c8-character', eligibleStages: ['review'],
      exercise: mc(
        L('Which description matches the brothers in the chapter?', 'أي وصف يطابق الأخوين في الفصل؟'),
        {
          en: ['Habil was kind and gentle; Qabil was mostly jealous', 'Habil was jealous; Qabil was gentle', 'Both brothers were described as jealous'],
          ar: ['كان هابيل لطيفًا وطيبًا؛ وكان قابيل حسودًا غالبًا', 'كان هابيل حسودًا؛ وكان قابيل لطيفًا', 'وُصف الأخوان كلاهما بالحسد'],
        },
        0,
        L('The chapter describes Habil as kind and gentle and Qabil as mostly jealous.', 'يصف الفصل هابيل باللطف والطيبة وقابيل بالحسد غالبًا.'),
      ),
    },
    {
      id: 'adam-a2-c8-final', learningPointId: 'adam-a2-c8-qabil-offering', eligibleStages: ['final'],
      exercise: fill(
        L('Complete the detail about Qabil’s offering.', 'أكمل المعلومة عن قربان قابيل.'),
        L('Qabil brought just a handful of his [blank].', 'أَحْضَرَ قَابِيلُ قَبْضَةً فَقَطْ مِنْ [blank].'),
        L('crops', 'مَحْصُولِهِ'),
        L('Qabil brought just a handful of his crops.', 'أحضر قابيل قبضة فقط من محصوله.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('the brothers’ different jobs, characters, and offerings', 'اختلاف عمل الأخوين وصفاتهما وقربانهما'),
    primaryQuestion: L('How were Habil and Qabil different before the disagreement?', 'كيف كان هابيل وقابيل مختلفين قبل الخلاف؟'),
    secondQuestion: L('What did each brother bring as an offering?', 'ماذا قدم كل أخ قربانًا؟'),
    grammar: L('Practise was/became for descriptions and jobs, and but for contrast.', 'تدرّب على «كان/أصبح» للوصف والعمل، وعلى «لكن/أما» لإظهار الاختلاف.'),
    pronunciation: L('Practise shepherd, farmer, offering, gentle, jealous, Habil, and Qabil.', 'تدرّب على نطق رَاعِيًا، مُزَارِعًا، قُرْبَانًا، لَطِيفًا، حَسُودًا، هابيل، وقابيل.'),
    fast: L('Make a two-column comparison with three facts for Habil and three for Qabil.', 'أنشئ مقارنة بعمودين فيها ثلاث معلومات عن هابيل وثلاث عن قابيل.'),
    support: L('Use: “Habil was ___ and became a ___.” / “Qabil was ___ and became a ___.”', 'استخدم: «كان هابيل ___ وأصبح ___.» / «كان قابيل ___ وأصبح ___.»'),
  }),
};
