import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, guideBundle, mc, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter09: LearningBlueprintChapter = {
  chapterId: 9,
  objectives: [
    L('Recall Habil’s peaceful response to Qabil and the main sequence that followed.', 'يتذكر رد هابيل المسالم على قابيل وتسلسل الأحداث الرئيس بعد ذلك.'),
    L('Explain what the crow showed Qabil after Habil died.', 'يشرح ما الذي أراه الغراب لقابيل بعد موت هابيل.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c9-threat', focus: 'character-action',
      claim: L('Qabil said he would kill Habil.', 'قال قابيل لهابيل: سأقتلك.'),
      evidence: L('I will kill you', 'سَأَقْتُلُكَ'),
    },
    {
      id: 'adam-a2-c9-habil-response', focus: 'character-action',
      claim: L('Habil said he would not fight back or harm Qabil because Qabil was his brother and he feared Allah.', 'قال هابيل إنه لن يرد على قابيل ولن يؤذيه لأنه أخوه وهو يخاف الله.'),
      evidence: L('I won’t fight back and harm you, you are my brother and I fear Allah', 'لَنْ أَرُدَّ عَلَيْكَ وَلَنْ أُؤْذِيَكَ، أَنْتَ أَخِي وَأَنَا أَخَافُ اللهَ'),
    },
    {
      id: 'adam-a2-c9-death', focus: 'sequence',
      claim: L('Qabil hit Habil with a stone, and Habil died there.', 'ضرب قابيل هابيل بحجر فمات هابيل هناك.'),
      evidence: L('hit him with a stone. Habil died there', 'ضَرَبَهُ بِحَجَرٍ، فَمَاتَ هَابِيلُ هُنَاكَ'),
    },
    {
      id: 'adam-a2-c9-crow', focus: 'sequence',
      claim: L('Allah sent a crow, and its digging showed Qabil how to bury his brother.', 'أرسل الله غرابًا، وعلّم حفره قابيل كيف يدفن أخاه.'),
      evidence: L('Allah sent a crow, it landed on the ground near Qabil and started digging it', 'ثُمَّ أَرْسَلَ اللهُ غُرَابًا. نَزَلَ الْغُرَابُ عَلَى الْأَرْضِ بِجَانِبِ قَابِيلَ وَبَدَأَ يَحْفِرُ التُّرَابَ'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(9),
  assessmentItems: [
    {
      id: 'adam-a2-c9-quick', learningPointId: 'adam-a2-c9-crow', eligibleStages: ['quick'],
      exercise: mc(
        L('What did the crow show Qabil by digging the ground?', 'ماذا علّم الغراب قابيل عندما حفر التراب؟'),
        {
          en: ['How to bury his brother', 'How to grow crops', 'How to care for sheep'],
          ar: ['كيف يدفن أخاه', 'كيف يزرع المحاصيل', 'كيف يعتني بالأغنام'],
        },
        0,
        L('The crow dug the ground and showed Qabil how to bury his brother.', 'حفر الغراب التراب ففهم قابيل كيف يدفن أخاه.'),
      ),
    },
    {
      id: 'adam-a2-c9-knowledge', learningPointId: 'adam-a2-c9-threat', eligibleStages: ['knowledge'],
      exercise: mc(
        L('What did Qabil say to Habil when he was angry?', 'ماذا قال قابيل لهابيل عندما غضب؟'),
        {
          en: ['I will kill you', 'I will help you', 'I will leave the farm'],
          ar: ['سأقتلك', 'سأساعدك', 'سأترك المزرعة'],
        },
        0,
        L('Qabil said to Habil, “I will kill you.”', 'قال قابيل لهابيل: «سأقتلك».'),
      ),
    },
    {
      id: 'adam-a2-c9-review', learningPointId: 'adam-a2-c9-habil-response', eligibleStages: ['review'],
      exercise: tf(
        L('Habil said he would fight back and harm Qabil.', 'قال هابيل إنه سيرد على قابيل ويؤذيه.'),
        false,
        L('Habil said he would not fight back or harm Qabil; Qabil was his brother and he feared Allah.', 'قال هابيل إنه لن يرد على قابيل ولن يؤذيه؛ فهو أخوه وهو يخاف الله.'),
      ),
    },
    {
      id: 'adam-a2-c9-final', learningPointId: 'adam-a2-c9-death', eligibleStages: ['final'],
      exercise: mc(
        L('What happened after Qabil hit Habil with a stone?', 'ماذا حدث بعد أن ضرب قابيل هابيل بحجر؟'),
        {
          en: ['Habil died there', 'Habil became a farmer', 'Qabil left for Paradise'],
          ar: ['مات هابيل هناك', 'أصبح هابيل مزارعًا', 'ذهب قابيل إلى الجنة'],
        },
        0,
        L('The chapter says Habil died there.', 'يقول الفصل إن هابيل مات هناك.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('Habil’s response, the consequence of Qabil’s anger, and the crow’s lesson', 'رد هابيل ونتيجة غضب قابيل والدرس الذي قدمه الغراب'),
    primaryQuestion: L('What did Habil say when Qabil threatened him?', 'ماذا قال هابيل عندما هدده قابيل؟'),
    secondQuestion: L('What did the crow help Qabil understand?', 'ماذا ساعد الغراب قابيل على أن يفهم؟'),
    grammar: L('Notice won’t for refusal and then/soon for event order.', 'لاحظ «لن» للرفض، و«ثم/بعد وقت قصير» لترتيب الأحداث.'),
    pronunciation: L('Practise crow, panic, digging, harm, and anger.', 'تدرّب على نطق غُرَابًا، يَضْطَرِبُ، يَحْفِرُ، أُؤْذِيَكَ، والْغَضَبِ.'),
    fast: L('Retell the chapter in four calm factual steps without adding graphic detail.', 'أعد سرد الفصل في أربع خطوات واقعية وهادئة من دون إضافة تفاصيل عنيفة.'),
    support: L('Use: “Habil said ___.” and “The crow showed Qabil ___.”', 'استخدم: «قال هابيل ___.» و«علّم الغراب قابيل ___.»'),
  }),
};
