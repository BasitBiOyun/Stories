import { defineLearningBlueprint, type BlueprintVocabularyTarget } from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../a2BlueprintAuthoring';
import { meccaA2HighlightTargets } from './goldFinal';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (meccaA2HighlightTargets[chapterId] ?? []).map((target) => ({
    id: `mecca-a2-ch${chapterId}-${target.id}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));

export const meccaA2LearningBlueprint = defineLearningBlueprint({
  id: 'mecca-a2',
  version: '1.0.0',
  storyId: 'mecca',
  level: 'A2',
  status: 'pedagogy-reviewed',
  chapters: [
    {
      chapterId: 1,
      objectives: [L('Identify Bilal’s early place in Islam.', 'يحدد مكانة بلال المبكرة في الإسلام.'), L('Explain the lesson about human value in Bilal’s story.', 'يشرح درس قيمة الإنسان في قصة بلال.')],
      evidencePoints: [
        { id: 'mecca-a2-c1-adhan', focus: 'direct', claim: L('Bilal was the first person to read the Adhan in the history of Islam.', 'كان بلال أول من أقام الأذان في تاريخ الإسلام.'), evidence: L('the first person to read the Adhan', 'أَوَّلَ مَنْ أَقَامَ الْأَذَانَ') },
        { id: 'mecca-a2-c1-slavery', focus: 'direct', claim: L('Bilal was born into slavery.', 'ولد بلال في العبودية.'), evidence: L('Bilal was born into slavery', 'فَوُلِدَ بِلَالٌ فِي الْعُبُودِيَّةِ') },
        { id: 'mecca-a2-c1-value', focus: 'theme', claim: L('Skin color or being a slave does not make a person less valuable.', 'لون البشرة أو العبودية لا تجعل الإنسان أقل قيمة.'), evidence: L('does not make a person less valuable', 'لَا يَجْعَلُ الْإِنْسَانَ أَقَلَّ قِيمَةً') },
      ],
      vocabularyTargets: vocabularyTargetsFor(1),
      assessmentItems: [
        { id: 'mecca-a2-c1-quick', learningPointId: 'mecca-a2-c1-adhan', eligibleStages: ['quick'], exercise: tf(L('Bilal was the first person to give the Adhan in Islamic history.', 'كان بلال أول من أقام الأذان في تاريخ الإسلام.'), true, L('The chapter states this directly.', 'يذكر الفصل ذلك مباشرة.')) },
        { id: 'mecca-a2-c1-knowledge', learningPointId: 'mecca-a2-c1-slavery', eligibleStages: ['knowledge'], exercise: mc(L('What does the chapter say about Bilal’s birth?', 'ماذا يقول الفصل عن ولادة بلال؟'), { en: ['He was born into slavery', 'He was born as a king', 'He was born in Medina'], ar: ['ولد في العبودية', 'ولد ملكًا', 'ولد في المدينة'] }, 0, L('Both of Bilal’s parents were slaves, so he was born into slavery.', 'كان والداه من العبيد، لذلك ولد في العبودية.')) },
        { id: 'mecca-a2-c1-final', learningPointId: 'mecca-a2-c1-value', eligibleStages: ['final'], exercise: fill(L('Complete the lesson at the end of Chapter 1.', 'أكمل الدرس في نهاية الفصل الأول.'), L('Skin color does not make a person less [blank].', 'لون البشرة لا يجعل الإنسان أقل [blank].'), L('valuable', 'قِيمَةً'), L('The chapter says skin color or slavery does not reduce a person’s value.', 'يقول الفصل إن لون البشرة أو العبودية لا يقللان من قيمة الإنسان.')) },
      ],
      ...guideBundle({ focus: L('Bilal’s early place in Islam and the value of every person', 'مكانة بلال المبكرة وقيمة كل إنسان'), primaryQuestion: L('What special first is connected with Bilal?', 'ما الأمر الأول المميز المرتبط ببلال؟'), secondQuestion: L('What lesson does the chapter teach about skin color and slavery?', 'ما الدرس الذي يقدمه الفصل عن لون البشرة والعبودية؟'), grammar: L('Practise was/were for past facts.', 'تدرّب على الجملة الاسمية والفعل كان لوصف حقائق الماضي.'), pronunciation: L('Practise Bilal, Adhan, slave, valuable, and free.', 'تدرّب على نطق بِلَال، الْأَذَان، عَبْدًا، قِيمَةً، وحُرًّا.'), fast: L('Write three short facts about Bilal from this chapter.', 'اكتب ثلاث حقائق قصيرة عن بلال من هذا الفصل.'), support: L('Use: “Bilal was ___.” / “His story teaches ___.”', 'استخدم: «كان بلال ___.» / «تعلمنا قصته ___.»') }),
    },
    {
      chapterId: 2,
      objectives: [L('Describe social problems in Jahiliyyah.', 'يصف مشكلات المجتمع في الجاهلية.'), L('Explain the gap between rich and poor people.', 'يشرح الفجوة بين الأغنياء والفقراء.')],
      evidencePoints: [
        { id: 'mecca-a2-c2-idols', focus: 'direct', claim: L('Many people left true belief and worshipped idols.', 'ترك كثير من الناس الإيمان الحق وعبدوا الأصنام.'), evidence: L('left the true belief and worshipped idols', 'تَرَكُوا الْإِيمانَ الْحَقَّ وَعَبَدُوا الْأَصْنامَ') },
        { id: 'mecca-a2-c2-gap', focus: 'comparison', claim: L('There was a big gap between rich and poor people.', 'كانت هناك فجوة كبيرة بين الأغنياء والفقراء.'), evidence: L('a big gap between rich and poor people', 'فَجْوَةٌ كَبِيرَةٌ بَيْنَ الْأَغْنِياءِ وَالْفُقَراءِ') },
        { id: 'mecca-a2-c2-faiz', focus: 'cause-result', claim: L('Unfair extra money made the rich richer and the poor poorer.', 'المال الإضافي الظالم زاد عدم المساواة.'), evidence: L('the rich became richer and the poor became poorer', 'مَالًا إِضافِيًّا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'mecca-a2-c2-quick', learningPointId: 'mecca-a2-c2-gap', eligibleStages: ['quick'], exercise: matching(L('Match each group with the life described in the chapter.', 'صل كل مجموعة بالحياة التي وصفها الفصل.'), { en: [['Rich people', 'lived in luxury'], ['Poor people', 'lived in need']], ar: [['الأغنياء', 'عاشوا في رفاهية'], ['الفقراء', 'عاشوا في حاجة']] }, L('The chapter contrasts luxury for the rich with need for many poor people.', 'يقارن الفصل بين رفاهية الأغنياء وحاجة كثير من الفقراء.')) },
        { id: 'mecca-a2-c2-review', learningPointId: 'mecca-a2-c2-idols', eligibleStages: ['review'], exercise: tf(L('Many people in Jahiliyyah worshipped idols.', 'عبد كثير من الناس الأصنام في الجاهلية.'), true, L('The chapter says many people left true belief and worshipped idols.', 'يذكر الفصل أن كثيرًا من الناس تركوا الإيمان الحق وعبدوا الأصنام.')) },
        { id: 'mecca-a2-c2-final', learningPointId: 'mecca-a2-c2-faiz', eligibleStages: ['final'], exercise: mc(L('What happened when poor people had to return unfair extra money?', 'ما نتيجة طلب مال إضافي ظالم من الفقراء؟'), { en: ['The rich became richer and the poor became poorer', 'Everyone became equally rich', 'Business stopped in Mecca'], ar: ['زاد الغني غنى والفقير فقرًا', 'أصبح الجميع أغنياء بالتساوي', 'توقفت التجارة في مكة'] }, 0, L('The chapter links unfair extra money with a wider rich-poor gap.', 'يربط الفصل المال الإضافي الظالم باتساع الفجوة بين الغني والفقير.')) },
      ],
      ...guideBundle({ focus: L('Jahiliyyah, idol worship, and social inequality', 'الجاهلية وعبادة الأصنام وعدم المساواة'), primaryQuestion: L('How were rich and poor lives different?', 'كيف اختلفت حياة الأغنياء والفقراء؟'), secondQuestion: L('Which unfair money practice is described?', 'ما الممارسة المالية غير العادلة المذكورة؟'), grammar: L('Practise there was / there were.', 'تدرّب على كان هناك / كانت هناك.'), pronunciation: L('Practise Jahiliyyah, justice, luxury, poor, rich, and faiz.', 'تدرّب على نطق الْجاهِلِيَّة، عَدَالَة، رَفاهِيَّة، الْفُقَراء، الْأَغْنِياء، وفَيْضًا.'), fast: L('Write two contrasts between rich and poor life.', 'اكتب مقارنتين بين حياة الأغنياء والفقراء.'), support: L('Use: “Rich people ___, but poor people ___.”', 'استخدم: «كان الأغنياء ___، لكن الفقراء ___.»') }),
    },
    {
      chapterId: 3,
      objectives: [L('Identify the place of slave markets in Mecca.', 'يحدد مكان أسواق العبيد في مكة.'), L('Identify Umayya and his attitude toward Islam.', 'يحدد أمية وموقفه من الإسلام.')],
      evidencePoints: [
        { id: 'mecca-a2-c3-market', focus: 'direct', claim: L('Mecca was a center for buying and selling slaves.', 'كانت مكة مركزًا لبيع العبيد وشرائهم.'), evidence: L('Mecca was a center for buying and selling slaves', 'مَكَّةُ مَرْكَزًا لِبَيْعِهِمْ') },
        { id: 'mecca-a2-c3-umayya', focus: 'direct', claim: L('Umayya was Bilal’s master and a powerful leader in Mecca.', 'كان أمية سيد بلال ومن أقوى رؤساء مكة.'), evidence: L('His master was Umayya b. Halef', 'كَانَ أُمَيَّةُ سَيِّدَ بِلَالٍ') },
        { id: 'mecca-a2-c3-enemy', focus: 'character-action', claim: L('Umayya became a major enemy of Islam and wanted the message to stop.', 'صار أمية عدوًا للإسلام وأراد وقف الرسالة.'), evidence: L('became a major enemy of Islam', 'أَعْدَاءِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'mecca-a2-c3-quick', learningPointId: 'mecca-a2-c3-market', eligibleStages: ['quick'], exercise: tf(L('Mecca was a center for buying and selling slaves.', 'كانت مكة مركزًا لبيع العبيد وشرائهم.'), true, L('This fact is stated directly in the chapter.', 'هذه المعلومة مذكورة مباشرة في الفصل.')) },
        { id: 'mecca-a2-c3-knowledge', learningPointId: 'mecca-a2-c3-umayya', eligibleStages: ['knowledge'], exercise: mc(L('Who was Bilal’s master?', 'من كان سيد بلال؟'), { en: ['Umayya b. Halef', 'Abu Bakr', 'Taptuk Emre'], ar: ['أمية بن خلف', 'أبو بكر', 'تابتوك إمره'] }, 0, L('The chapter names Umayya b. Halef as Bilal’s master.', 'يسمي الفصل أمية بن خلف سيدًا لبلال.')) },
        { id: 'mecca-a2-c3-review', learningPointId: 'mecca-a2-c3-enemy', eligibleStages: ['review'], exercise: tf(L('Umayya wanted the message of Islam to stop.', 'أراد أمية أن تتوقف رسالة الإسلام.'), true, L('The chapter says he became an enemy of Islam and wanted the message to stop.', 'يذكر الفصل أنه عادى الإسلام وأراد وقف الرسالة.')) },
      ],
      ...guideBundle({ focus: L('slave markets and Umayya’s power in Mecca', 'أسواق العبيد وقوة أمية في مكة'), primaryQuestion: L('What was Mecca a center for?', 'لأي تجارة كانت مكة مركزًا؟'), secondQuestion: L('Who was Umayya?', 'من كان أمية؟'), grammar: L('Practise simple past for historical facts.', 'تدرّب على الماضي لعرض الحقائق التاريخية.'), pronunciation: L('Practise slave market, Abyssinia, master, enemy, and Umayya.', 'تدرّب على نطق أَسْوَاقُ الْعَبِيد، الْحَبَشَة، سَيِّدُهُ، أَعْدَاء، وأُمَيَّة.'), fast: L('Write three facts about Mecca and Umayya.', 'اكتب ثلاث حقائق عن مكة وأمية.'), support: L('Use: “Mecca was ___.” / “Umayya was ___.”', 'استخدم: «كانت مكة ___.» / «كان أمية ___.»') }),
    },
    {
      chapterId: 4,
      objectives: [L('Describe Bilal’s hard daily work.', 'يصف عمل بلال اليومي الشاق.'), L('Identify how Umayya’s family treated Bilal.', 'يحدد كيف عاملت أسرة أمية بلالًا.')],
      evidencePoints: [
        { id: 'mecca-a2-c4-camels', focus: 'direct', claim: L('Bilal looked after camels under the hot sun all day.', 'كان بلال يرعى الجمال تحت حر الشمس طوال اليوم.'), evidence: L('looked after his master’s camels', 'يَرْعَى جِمَالَ سَيِّدِهِ') },
        { id: 'mecca-a2-c4-respect', focus: 'character-action', claim: L('The family did not respect Bilal as a person.', 'لم تحترم الأسرة بلالًا كإنسان.'), evidence: L('They did not respect him as a person', 'لَمْ يَحْتَرِمُوهُ كَإِنْسَانٍ') },
        { id: 'mecca-a2-c4-patient', focus: 'theme', claim: L('Bilal had to be patient and work hard every day.', 'كان على بلال أن يكون صبورًا ويعمل بجد كل يوم.'), evidence: L('be patient and work hard every day', 'يَكُونَ صَبُورًا وَيَعْمَلَ بِجِدٍّ كُلَّ يَوْمٍ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'mecca-a2-c4-quick', learningPointId: 'mecca-a2-c4-camels', eligibleStages: ['quick'], exercise: mc(L('What did Bilal do during the day?', 'ماذا كان بلال يفعل في النهار؟'), { en: ['He looked after camels under the hot sun', 'He ruled Mecca', 'He sold gold'], ar: ['كان يرعى الجمال تحت الشمس الحارة', 'كان يحكم مكة', 'كان يبيع الذهب'] }, 0, L('Bilal worked with his master’s camels in the desert all day.', 'كان بلال يرعى جمال سيده في الصحراء طوال اليوم.')) },
        { id: 'mecca-a2-c4-review', learningPointId: 'mecca-a2-c4-respect', eligibleStages: ['review'], exercise: tf(L('Umayya’s family respected Bilal as a person.', 'كانت أسرة أمية تحترم بلالًا كإنسان.'), false, L('The chapter says they were rude and did not respect him as a person.', 'يقول الفصل إنهم كانوا غلاظًا ولم يحترموه كإنسان.')) },
        { id: 'mecca-a2-c4-final', learningPointId: 'mecca-a2-c4-patient', eligibleStages: ['final'], exercise: fill(L('Complete the sentence about Bilal’s response to his hard life.', 'أكمل الجملة عن تعامل بلال مع حياته الشاقة.'), L('Bilal had to be [blank] and work hard every day.', 'كان على بلال أن يكون [blank] ويعمل بجد كل يوم.'), L('patient', 'صَبُورًا'), L('The chapter says Bilal had to be patient and work hard.', 'يذكر الفصل أن على بلال أن يكون صبورًا ويعمل بجد.')) },
      ],
      ...guideBundle({ focus: L('Bilal’s daily work, disrespect, and patience', 'عمل بلال اليومي وعدم الاحترام وصبره'), primaryQuestion: L('What work did Bilal do?', 'ما العمل الذي كان بلال يقوم به؟'), secondQuestion: L('How did the family treat him?', 'كيف عاملته الأسرة؟'), grammar: L('Practise had to for obligation.', 'تدرّب على كان عليه أن للتعبير عن الالتزام.'), pronunciation: L('Practise hatred, rude, camel, harsh, patient, and hot sun.', 'تدرّب على نطق حِقْد، غَلِيظ، جِمَال، قَاسٍ، صَبُور، وحَرِّ الشَّمْس.'), fast: L('Write a short morning-evening routine for Bilal.', 'اكتب روتينًا قصيرًا لبلال في النهار والمساء.'), support: L('Use: “During the day ___.” / “In the evening ___.”', 'استخدم: «في النهار ___.» / «في المساء ___.»') }),
    },
    {
      chapterId: 5,
      objectives: [L('Identify the new message Bilal heard.', 'يحدد الرسالة الجديدة التي سمعها بلال.'), L('Recall the teaching about fairness and equality.', 'يتذكر التعليم عن العدل والمساواة.')],
      evidencePoints: [
        { id: 'mecca-a2-c5-freedom', focus: 'direct', claim: L('Bilal had no money to pay for his freedom.', 'لم يكن لدى بلال مال ليدفع ثمن حريته.'), evidence: L('no money to pay for his freedom', 'مَالٌ لِيَدْفَعَ ثَمَنَ حُرِّيَّتِهِ') },
        { id: 'mecca-a2-c5-worship', focus: 'theme', claim: L('The Prophet told everyone to worship only Allah.', 'دعا النبي الجميع إلى عبادة الله وحده.'), evidence: L('worship only Allah', 'عِبَادَةِ اللهِ وَحْدَهُ') },
        { id: 'mecca-a2-c5-equal', focus: 'theme', claim: L('The Prophet taught that people must be fair and equal.', 'علم النبي أن الناس يجب أن يكونوا عادلين ومتساوين.'), evidence: L('people must be fair and equal', 'النَّاسَ يَجِبُ أَنْ يَكُونُوا عَادِلِينَ وَمُتَسَاوِينَ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'mecca-a2-c5-quick', learningPointId: 'mecca-a2-c5-worship', eligibleStages: ['quick'], exercise: tf(L('The new message told people to worship only Allah.', 'دعت الرسالة الجديدة الناس إلى عبادة الله وحده.'), true, L('This is one of the central statements in the chapter.', 'هذه من الرسائل الأساسية في الفصل.')) },
        { id: 'mecca-a2-c5-knowledge', learningPointId: 'mecca-a2-c5-freedom', eligibleStages: ['knowledge'], exercise: mc(L('Why did Bilal think he would remain a slave?', 'لماذا ظن بلال أنه سيبقى عبدًا؟'), { en: ['He had no money to pay for his freedom', 'He wanted to remain with Umayya', 'He owned many camels'], ar: ['لم يكن لديه مال ليدفع ثمن حريته', 'كان يريد البقاء مع أمية', 'كان يملك جمالًا كثيرة'] }, 0, L('The chapter says Bilal had no money to buy his freedom.', 'يقول الفصل إن بلالًا لم يكن لديه مال ليدفع ثمن حريته.')) },
        { id: 'mecca-a2-c5-final', learningPointId: 'mecca-a2-c5-equal', eligibleStages: ['final'], exercise: matching(L('Match the new message with its teaching.', 'صل الرسالة الجديدة بتعليمها.'), { en: [['People', 'must be fair and equal'], ['Worship', 'only Allah']], ar: [['الناس', 'يجب أن يكونوا عادلين ومتساوين'], ['العبادة', 'لله وحده']] }, L('The chapter joins worship of Allah with fairness and equality.', 'يجمع الفصل بين عبادة الله والعدل والمساواة.')) },
      ],
      ...guideBundle({ focus: L('freedom, worship of Allah, fairness, and equality', 'الحرية وعبادة الله والعدل والمساواة'), primaryQuestion: L('What new message did Bilal hear?', 'ما الرسالة الجديدة التي سمعها بلال؟'), secondQuestion: L('What did the Prophet teach about people?', 'ماذا علّم النبي عن الناس؟'), grammar: L('Practise must for a simple rule.', 'تدرّب على يجب أن للتعبير عن القاعدة.'), pronunciation: L('Practise obedient, freedom, Prophet, fair, and equal.', 'تدرّب على نطق مُطِيع، حُرِّيَّة، نَبِي، عَادِلِين، ومُتَسَاوِين.'), fast: L('Write two teachings from the chapter in your own A2 sentences.', 'اكتب تعليمين من الفصل بجملتين بسيطتين.'), support: L('Use: “People must ___.” / “People must not ___.”', 'استخدم: «يجب على الناس أن ___.»') }),
    },
    {
      chapterId: 6,
      objectives: [L('Follow Bilal’s secret visit to Abu Bakr.', 'يتتبع زيارة بلال السرية لأبي بكر.'), L('Identify why Bilal went there.', 'يحدد سبب ذهاب بلال إليه.')],
      evidencePoints: [
        { id: 'mecca-a2-c6-secret', focus: 'sequence', claim: L('Bilal left secretly and used a hidden path.', 'خرج بلال سرًا ومشى في طريق خفي.'), evidence: L('left his room secretly and walked on a hidden path', 'خَرَجَ مِنْ غُرْفَتِهِ سِرًّا وَمَشَى فِي طَرِيقٍ خَفِيٍّ') },
        { id: 'mecca-a2-c6-questions', focus: 'motivation', claim: L('Bilal asked many questions about the new religion.', 'سأل بلال أسئلة كثيرة عن الدين الجديد.'), evidence: L('ask many questions about the new religion', 'يَسْأَلُ أَسْئِلَةً كَثِيرَةً عَنِ الدِّينِ الْجَدِيدِ') },
        { id: 'mecca-a2-c6-kind', focus: 'character-action', claim: L('Abu Bakr was known for being kind to slaves.', 'كان أبو بكر معروفًا بطيبته مع العبيد.'), evidence: L('very nice to slaves', 'طَيِّبًا جِدًّا مَعَ الْعَبِيدِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(6),
      assessmentItems: [
        { id: 'mecca-a2-c6-quick', learningPointId: 'mecca-a2-c6-secret', eligibleStages: ['quick'], exercise: tap(L('How did Bilal travel to Abu Bakr’s house without being seen?', 'كيف ذهب بلال إلى بيت أبي بكر دون أن يراه أحد؟'), L('He left secretly and used a hidden path.', 'خرج سرًا وسلك طريقًا خفيًا.'), L('The chapter describes a secret night journey on a hidden path.', 'يصف الفصل رحلة ليلية سرية في طريق خفي.')) },
        { id: 'mecca-a2-c6-knowledge', learningPointId: 'mecca-a2-c6-questions', eligibleStages: ['knowledge'], exercise: mc(L('What did Bilal do after entering Abu Bakr’s house?', 'ماذا فعل بلال بعد دخول بيت أبي بكر؟'), { en: ['He asked many questions about the new religion', 'He went to sleep', 'He sold camels'], ar: ['سأل أسئلة كثيرة عن الدين الجديد', 'ذهب لينام', 'باع الجمال'] }, 0, L('Bilal wanted to learn, so he asked many questions.', 'أراد بلال أن يتعلم، فسأل أسئلة كثيرة.')) },
        { id: 'mecca-a2-c6-review', learningPointId: 'mecca-a2-c6-kind', eligibleStages: ['review'], exercise: tf(L('Abu Bakr was known for being kind to slaves.', 'كان أبو بكر معروفًا بطيبته مع العبيد.'), true, L('The chapter states that everybody knew this about him.', 'يذكر الفصل أن الجميع كانوا يعرفون ذلك عنه.')) },
      ],
      ...guideBundle({ focus: L('Bilal’s secret search for answers and Abu Bakr’s kindness', 'بحث بلال السري عن الإجابات وطيبة أبي بكر'), primaryQuestion: L('Why did Bilal visit Abu Bakr?', 'لماذا زار بلال أبا بكر؟'), secondQuestion: L('How did he avoid being seen?', 'كيف تجنب أن يراه الناس؟'), grammar: L('Practise decided to + verb.', 'تدرّب على قرر أن + فعل.'), pronunciation: L('Practise Creator, secretly, hidden path, knocked, and kind.', 'تدرّب على نطق الْخَالِق، سِرًّا، طَرِيقٍ خَفِي، طَرَقَ، ولَطِيفًا.'), fast: L('Retell the visit in four short steps.', 'أعد سرد الزيارة في أربع خطوات قصيرة.'), support: L('Use: “First Bilal ___, then he ___.”', 'استخدم: «أولًا ___، ثم ___.»') }),
    },
    {
      chapterId: 7,
      objectives: [L('Identify the central belief Abu Bakr explained.', 'يحدد العقيدة الأساسية التي شرحها أبو بكر.'), L('Explain why Bilal accepted Islam despite expected difficulty.', 'يشرح لماذا قبل بلال الإسلام رغم توقع الصعوبة.')],
      evidencePoints: [
        { id: 'mecca-a2-c7-one', focus: 'theme', claim: L('Islam says there is no god but Allah and Allah has no partners or equals.', 'الإسلام يقول لا إله إلا الله وليس لله شريك أو مثيل.'), evidence: L('there is no god but Allah', 'لا إِلَهَ إِلا اللهُ') },
        { id: 'mecca-a2-c7-difficult', focus: 'inference', claim: L('Bilal knew life would be difficult after becoming a Muslim.', 'عرف بلال أن الحياة ستكون صعبة بعد أن يصبح مسلمًا.'), evidence: L('life would be difficult after becoming a Muslim', 'الْحَياةَ سَتَكُونُ صَعْبَةً بَعْدَ أَنْ يُصْبِحَ مُسْلِمًا') },
        { id: 'mecca-a2-c7-accepted', focus: 'turning-point', claim: L('Bilal accepted Islam because he knew the religion of Allah was the truth.', 'دخل بلال في الإسلام لأنه عرف أن دين الله هو الحق.'), evidence: L('In the end, he accepted Islam', 'فِي النِّهايةِ، دَخَلَ فِي الْإِسْلامِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'mecca-a2-c7-quick', learningPointId: 'mecca-a2-c7-accepted', eligibleStages: ['quick'], exercise: fill(L('Complete Bilal’s decision at the end of the chapter.', 'أكمل قرار بلال في نهاية الفصل.'), L('In the end, Bilal accepted [blank].', 'وفي النهاية، دخل بلال في [blank].'), L('Islam', 'الْإِسْلامِ'), L('The chapter ends with Bilal accepting Islam.', 'ينتهي الفصل بدخول بلال في الإسلام.')) },
        { id: 'mecca-a2-c7-review', learningPointId: 'mecca-a2-c7-difficult', eligibleStages: ['review'], exercise: tf(L('Bilal expected life to be easy after becoming a Muslim.', 'توقع بلال أن تكون حياته سهلة بعد الإسلام.'), false, L('He knew life would be difficult.', 'كان يعرف أن الحياة ستكون صعبة.')) },
        { id: 'mecca-a2-c7-final', learningPointId: 'mecca-a2-c7-one', eligibleStages: ['final'], exercise: mc(L('Which belief did Abu Bakr explain to Bilal?', 'ما العقيدة التي شرحها أبو بكر لبلال؟'), { en: ['There is no god but Allah and He has no partners or equals', 'Rich masters are equal to Allah', 'Every idol has equal power'], ar: ['لا إله إلا الله وليس له شريك أو مثيل', 'السادة الأغنياء يساوون الله', 'كل صنم له القوة نفسها'] }, 0, L('The chapter begins with this statement about Allah.', 'يبدأ الفصل بهذه العبارة عن الله.')) },
      ],
      ...guideBundle({ focus: L('tawhid, Bilal’s difficult choice, and accepting Islam', 'التوحيد واختيار بلال الصعب ودخوله في الإسلام'), primaryQuestion: L('What did Abu Bakr tell Bilal about Allah?', 'ماذا أخبر أبو بكر بلالًا عن الله؟'), secondQuestion: L('What did Bilal choose even though life could become difficult?', 'ماذا اختار بلال رغم أن الحياة قد تصبح صعبة؟'), grammar: L('Practise would for an expected future from the past.', 'لاحظ التعبير عن المستقبل المتوقع من الماضي.'), pronunciation: L('Practise partner, equal, supported, truth, and accepted Islam.', 'تدرّب على نطق شَرِيك، مَثِيل، أَيَّدَ، الْحَق، ودَخَلَ فِي الْإِسْلام.'), fast: L('Write one sentence for Bilal’s fear and one for his decision.', 'اكتب جملة عن خوف بلال وجملة عن قراره.'), support: L('Use: “Bilal knew ___, but he ___.”', 'استخدم: «عرف بلال ___، لكنه ___.»') }),
    },
    {
      chapterId: 8,
      objectives: [L('Describe Umayya’s pressure on Bilal.', 'يصف ضغط أمية على بلال.'), L('Identify Bilal’s repeated statement of faith.', 'يحدد العبارة التي كررها بلال في ثباته.')],
      evidencePoints: [
        { id: 'mecca-a2-c8-refused', focus: 'character-action', claim: L('Bilal refused to worship the idols.', 'رفض بلال عبادة الأصنام.'), evidence: L('Bilal refused', 'بِلالًا رَفَضَ') },
        { id: 'mecca-a2-c8-rock', focus: 'direct', claim: L('Umayya placed a huge burning rock on Bilal’s chest.', 'وضع أمية صخرة كبيرة حارة على صدر بلال.'), evidence: L('a huge burning rock on his chest', 'صَخْرَةً كَبِيرَةً حَارَّةً عَلَى صَدْرِهِ') },
        { id: 'mecca-a2-c8-one', focus: 'theme', claim: L('Bilal kept saying “Allah is One.”', 'ظل بلال يقول «الله واحد».'), evidence: L('Allah is One, Allah is One', 'اللَّهُ وَاحِدٌ، اللَّهُ وَاحِدٌ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'mecca-a2-c8-quick', learningPointId: 'mecca-a2-c8-one', eligibleStages: ['quick'], exercise: mc(L('What did Bilal keep saying?', 'ماذا ظل بلال يقول؟'), { en: ['Allah is One', 'Umayya is right', 'I will worship the idols'], ar: ['الله واحد', 'أمية على حق', 'سأعبد الأصنام'] }, 0, L('The last line repeats Bilal’s statement.', 'تكرر الجملة الأخيرة قول بلال.')) },
        { id: 'mecca-a2-c8-knowledge', learningPointId: 'mecca-a2-c8-refused', eligibleStages: ['knowledge'], exercise: tf(L('Bilal agreed to worship the idols when Umayya forced him.', 'وافق بلال على عبادة الأصنام عندما أجبره أمية.'), false, L('The chapter says Bilal refused.', 'يقول الفصل إن بلال رفض.')) },
        { id: 'mecca-a2-c8-final', learningPointId: 'mecca-a2-c8-rock', eligibleStages: ['final'], exercise: fill(L('Complete the detail about Umayya’s punishment.', 'أكمل التفصيل عن عقاب أمية.'), L('Umayya put a huge burning [blank] on Bilal’s chest.', 'وضع أمية [blank] كبيرة حارة على صدر بلال.'), L('rock', 'صَخْرَةً'), L('The chapter says a huge burning rock was put on his chest.', 'يذكر الفصل أن صخرة كبيرة حارة وُضعت على صدره.')) },
      ],
      ...guideBundle({ focus: L('pressure, refusal, and Bilal’s statement that Allah is One', 'الضغط والرفض وقول بلال إن الله واحد'), primaryQuestion: L('What did Umayya try to force Bilal to do?', 'ماذا حاول أمية إجبار بلال على فعله؟'), secondQuestion: L('What did Bilal keep saying?', 'ماذا ظل بلال يقول؟'), grammar: L('Practise refused to + verb.', 'تدرّب على رفض أن + فعل.'), pronunciation: L('Practise refused, rope, whipped, locked, and Allah is One.', 'تدرّب على نطق رَفَضَ، الْحِبَال، جَلَدَ، حَبَسَ، واللَّهُ وَاحِد.'), fast: L('Write a two-sentence contrast between Umayya’s demand and Bilal’s answer.', 'اكتب جملتين تقارنان طلب أمية بجواب بلال.'), support: L('Use: “Umayya wanted ___, but Bilal ___.”', 'استخدم: «أراد أمية ___، لكن بلال ___.»') }),
    },
    {
      chapterId: 9,
      objectives: [L('Follow Abu Bakr’s response when he heard Bilal was being hurt.', 'يتتبع استجابة أبي بكر عندما سمع بتعذيب بلال.'), L('Identify the question Abu Bakr asked about Bilal’s belief.', 'يحدد السؤال الذي طرحه أبو بكر عن إيمان بلال.')],
      evidencePoints: [
        { id: 'mecca-a2-c9-arrived', focus: 'character-action', claim: L('Abu Bakr went to Umayya right away.', 'ذهب أبو بكر إلى أمية فورًا.'), evidence: L('went to see Umayya right away', 'ذَهَبَ إِلَيْهِ فَوْرًا') },
        { id: 'mecca-a2-c9-sell', focus: 'character-action', claim: L('Abu Bakr asked Umayya to sell Bilal to him.', 'طلب أبو بكر من أمية أن يبيعه بلالًا.'), evidence: L('asked Umayya to sell Bilal to him', 'طَلَبَ مِنْ أُمَيَّةَ أَنْ يَبِيعَهُ بِلالًا') },
        { id: 'mecca-a2-c9-crime', focus: 'theme', claim: L('Abu Bakr asked whether believing in the one true Allah was a crime.', 'سأل أبو بكر هل الإيمان بالله الواحد الحق جريمة.'), evidence: L('Is it a crime to believe in the one true Allah?', 'هَلِ الْإِيمانُ بِاللهِ الْواحِدِ الْحَقِّ جَرِيمَةٌ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'mecca-a2-c9-quick', learningPointId: 'mecca-a2-c9-arrived', eligibleStages: ['quick'], exercise: tf(L('Abu Bakr went to see Umayya immediately after hearing about Bilal.', 'ذهب أبو بكر إلى أمية فورًا بعد سماعه عن بلال.'), true, L('The text says he went right away.', 'يقول النص إنه ذهب فورًا.')) },
        { id: 'mecca-a2-c9-knowledge', learningPointId: 'mecca-a2-c9-sell', eligibleStages: ['knowledge'], exercise: mc(L('What did Abu Bakr ask Umayya to do?', 'ماذا طلب أبو بكر من أمية؟'), { en: ['Sell Bilal to him', 'Send Bilal to Medina', 'Give Bilal more work'], ar: ['أن يبيعه بلالًا', 'أن يرسل بلالًا إلى المدينة', 'أن يعطي بلالًا عملًا أكثر'] }, 0, L('Abu Bakr asked more than once to buy Bilal.', 'طلب أبو بكر أكثر من مرة أن يشتري بلالًا.')) },
        { id: 'mecca-a2-c9-review', learningPointId: 'mecca-a2-c9-crime', eligibleStages: ['review'], exercise: tf(L('Abu Bakr asked if belief in the one true Allah was a crime.', 'سأل أبو بكر هل الإيمان بالله الواحد الحق جريمة.'), true, L('This question appears directly in the chapter.', 'هذا السؤال مذكور مباشرة في الفصل.')) },
      ],
      ...guideBundle({ focus: L('Abu Bakr’s quick response and his attempt to buy Bilal', 'استجابة أبي بكر السريعة ومحاولته شراء بلال'), primaryQuestion: L('What did Abu Bakr ask Umayya to do?', 'ماذا طلب أبو بكر من أمية؟'), secondQuestion: L('What question did Abu Bakr ask about Bilal’s belief?', 'ما السؤال الذي طرحه أبو بكر عن إيمان بلال؟'), grammar: L('Practise asked + person + to + verb.', 'تدرّب على طلب من شخص أن يفعل شيئًا.'), pronunciation: L('Practise pain, right away, sell, price, and crime.', 'تدرّب على نطق يَتَأَلَّم، فَوْرًا، يَبِيعَهُ، ثَمَن، وجَرِيمَة.'), fast: L('Retell Abu Bakr’s actions in three steps.', 'أعد سرد أفعال أبي بكر في ثلاث خطوات.'), support: L('Use: “Abu Bakr heard ___, so he ___.”', 'استخدم: «سمع أبو بكر ___، لذلك ___.»') }),
    },
    {
      chapterId: 10,
      objectives: [L('Follow how Bilal became free.', 'يتتبع كيف أصبح بلال حرًا.'), L('Identify Abu Bakr’s decision after buying Bilal.', 'يحدد قرار أبي بكر بعد شراء بلال.')],
      evidencePoints: [
        { id: 'mecca-a2-c10-price', focus: 'direct', claim: L('Umayya agreed to sell Bilal for five pieces of gold.', 'وافق أمية على بيع بلال بخمس قطع من الذهب.'), evidence: L('five pieces of gold', 'الذَّهَبِ') },
        { id: 'mecca-a2-c10-free', focus: 'turning-point', claim: L('Abu Bakr told Bilal he was now a free man.', 'قال أبو بكر لبلال إنه الآن رجل حر.'), evidence: L('now a free man and no longer a slave', 'رَجُلٌ حُرٌّ') },
        { id: 'mecca-a2-c10-freed', focus: 'character-action', claim: L('Abu Bakr did not keep Bilal as a slave; he freed him.', 'لم يحتفظ أبو بكر ببلال عبدًا بل أعتقه.'), evidence: L('He freed him', 'أَنْقَذَهُ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'mecca-a2-c10-quick', learningPointId: 'mecca-a2-c10-free', eligibleStages: ['quick'], exercise: fill(L('Complete what Abu Bakr told Bilal.', 'أكمل ما قاله أبو بكر لبلال.'), L('Bilal was now a free [blank].', 'أصبح بلال الآن رجلًا [blank].'), L('man', 'حُرًّا'), L('Abu Bakr told Bilal he was a free man.', 'قال أبو بكر لبلال إنه رجل حر.')) },
        { id: 'mecca-a2-c10-review', learningPointId: 'mecca-a2-c10-price', eligibleStages: ['review'], exercise: tf(L('Umayya agreed to sell Bilal for five pieces of gold.', 'وافق أمية على بيع بلال بخمس قطع من الذهب.'), true, L('The first paragraph gives this price.', 'تذكر الفقرة الأولى هذا الثمن.')) },
        { id: 'mecca-a2-c10-final', learningPointId: 'mecca-a2-c10-freed', eligibleStages: ['final'], exercise: mc(L('What did Abu Bakr do after buying Bilal?', 'ماذا فعل أبو بكر بعد شراء بلال؟'), { en: ['He freed him', 'He kept him as a slave', 'He returned him to Umayya'], ar: ['أعتقه', 'أبقاه عبدًا', 'أعاده إلى أمية'] }, 0, L('The chapter explicitly says Abu Bakr freed Bilal.', 'يذكر الفصل أن أبا بكر أعتق بلالًا.')) },
      ],
      ...guideBundle({ focus: L('the price, rescue, and Bilal’s freedom', 'الثمن والإنقاذ وحرية بلال'), primaryQuestion: L('What price did Umayya accept?', 'ما الثمن الذي وافق عليه أمية؟'), secondQuestion: L('What did Abu Bakr do after buying Bilal?', 'ماذا فعل أبو بكر بعد شراء بلال؟'), grammar: L('Practise became / was now for change of state.', 'تدرّب على أصبح / صار لوصف التغير.'), pronunciation: L('Practise agreed, gold, difficulty, rescued, freely, and free man.', 'تدرّب على نطق وافَقَ، الذَّهَب، بِصُعُوبَة، أَنْقَذَهُ، بِحُرِّيَّة، ورَجُلٌ حُرّ.'), fast: L('Write a three-sentence before-and-after description of Bilal.', 'اكتب ثلاث جمل تصف بلالًا قبل الحرية وبعدها.'), support: L('Use: “Before ___.” / “After Abu Bakr bought him ___.”', 'استخدم: «قبل ذلك ___.» / «بعد أن اشتراه أبو بكر ___.»') }),
    },
    {
      chapterId: 11,
      objectives: [L('Follow the Hijrah setting and Bilal’s new role.', 'يتتبع سياق الهجرة ودور بلال الجديد.'), L('Identify why Bilal was chosen for the Adhan.', 'يحدد لماذا اختير بلال للأذان.')],
      evidencePoints: [
        { id: 'mecca-a2-c11-medina', focus: 'sequence', claim: L('The Muslims moved to Medina after hardship in Mecca.', 'هاجر المسلمون إلى المدينة بعد مشقة مكة.'), evidence: L('move to Medina', 'الْهِجْرَةِ إِلَى الْمَدِينَةِ') },
        { id: 'mecca-a2-c11-chosen', focus: 'turning-point', claim: L('The Prophet chose Bilal to call people to prayer.', 'اختار الرسول بلالًا لينادي الناس إلى الصلاة.'), evidence: L('He chose Bilal', 'فَاخْتَارَ بِلَالًا') },
        { id: 'mecca-a2-c11-brave', focus: 'cause-result', claim: L('Bilal’s brave faith made the first Adhan fitting for him.', 'جعل ثبات بلال وشجاعته الأذان الأول مناسبًا له.'), evidence: L('Bilal was a very brave man', 'بِلا خَوْفٍ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'mecca-a2-c11-quick', learningPointId: 'mecca-a2-c11-chosen', eligibleStages: ['quick'], exercise: tap(L('Who did the Prophet choose to call people to prayer?', 'من اختار الرسول لينادي الناس إلى الصلاة؟'), L('Bilal.', 'بلالًا.'), L('The chapter says the Prophet chose Bilal.', 'يقول الفصل إن الرسول اختار بلالًا.')) },
        { id: 'mecca-a2-c11-knowledge', learningPointId: 'mecca-a2-c11-medina', eligibleStages: ['knowledge'], exercise: mc(L('Where were Muslims told to move after years of hardship in Mecca?', 'إلى أين أُمر المسلمون بالهجرة بعد سنوات من المشقة في مكة؟'), { en: ['Medina', 'Babylon', 'Midian'], ar: ['المدينة', 'بابل', 'مدين'] }, 0, L('The Prophet told the Muslims to move to Medina.', 'أمر الرسول المسلمين بالهجرة إلى المدينة.')) },
        { id: 'mecca-a2-c11-final', learningPointId: 'mecca-a2-c11-brave', eligibleStages: ['final'], exercise: mc(L('Which quality does the chapter emphasize before Bilal gives the first Adhan?', 'ما الصفة التي يؤكدها الفصل قبل أذان بلال الأول؟'), { en: ['His bravery', 'His wealth', 'His royal family'], ar: ['شجاعته وثباته', 'ثراؤه', 'أسرته الملكية'] }, 0, L('The chapter calls Bilal a very brave man and recalls his fearless declaration of faith.', 'يصف الفصل بلالًا بالشجاعة ويذكر ثباته بلا خوف.')) },
      ],
      ...guideBundle({ focus: L('Hijrah, Medina, bravery, and the first Adhan', 'الهجرة والمدينة والشجاعة والأذان الأول'), primaryQuestion: L('Who was chosen to call people to prayer?', 'من اختير لينادي الناس إلى الصلاة؟'), secondQuestion: L('What earlier quality of Bilal does the chapter connect with this role?', 'ما الصفة السابقة لبلال التي يربطها الفصل بهذا الدور؟'), grammar: L('Practise chose + object + to + verb.', 'تدرّب على اختار شخصًا ليفعل شيئًا.'), pronunciation: L('Practise beloved, respected, hardship, Hijrah, fearlessly, and Adhan.', 'تدرّب على نطق أَحَبّ، أَكْرَم، الصُّعُوبَة، الْهِجْرَة، بِلا خَوْف، والْأَذَان.'), fast: L('Write a short sequence: hardship → Hijrah → first Adhan.', 'اكتب تسلسلًا قصيرًا: المشقة ← الهجرة ← الأذان الأول.'), support: L('Use: “After the Hijrah, the Prophet chose ___.”', 'استخدم: «بعد الهجرة اختار الرسول ___.»') }),
    },
    {
      chapterId: 12,
      objectives: [L('Identify the morning Adhan phrase in the story.', 'يحدد عبارة أذان الصباح في القصة.'), L('Recall the equality teaching in the Farewell Sermon section.', 'يتذكر تعليم المساواة في قسم خطبة الوداع.')],
      evidencePoints: [
        { id: 'mecca-a2-c12-morning', focus: 'direct', claim: L('Bilal used to begin the morning call to prayer very early.', 'كان بلال يبدأ أذان الصباح مبكرًا جدًا.'), evidence: L('morning call to prayer very early', 'أَذانَ الصَّباحِ') },
        { id: 'mecca-a2-c12-prayer', focus: 'direct', claim: L('Bilal added the words “Prayer is better than sleep.”', 'أضاف بلال معنى «الصلاة خير من النوم».'), evidence: L('Prayer is better than sleep', 'الصَّلاةُ') },
        { id: 'mecca-a2-c12-equal', focus: 'theme', claim: L('The Prophet taught that all people are equal and no skin color is better than another.', 'علم النبي أن الناس متساوون ولا لون بشرة أفضل من آخر.'), evidence: L('all people are equal', 'خُطْبَةَ الْوَداعِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'mecca-a2-c12-quick', learningPointId: 'mecca-a2-c12-prayer', eligibleStages: ['quick'], exercise: fill(L('Complete the meaning of the phrase Bilal added.', 'أكمل معنى العبارة التي أضافها بلال.'), L('Prayer is better than [blank].', 'الصلاة خير من [blank].'), L('sleep', 'النوم'), L('The chapter gives this meaning directly.', 'يعطي الفصل هذا المعنى مباشرة.')) },
        { id: 'mecca-a2-c12-knowledge', learningPointId: 'mecca-a2-c12-morning', eligibleStages: ['knowledge'], exercise: tf(L('Bilal began the morning call to prayer very early.', 'كان بلال يبدأ أذان الصباح مبكرًا جدًا.'), true, L('This appears in the first sentence of the chapter.', 'تظهر هذه المعلومة في أول جملة من الفصل.')) },
        { id: 'mecca-a2-c12-final', learningPointId: 'mecca-a2-c12-equal', eligibleStages: ['final'], exercise: mc(L('Which equality lesson appears in this chapter?', 'ما درس المساواة الوارد في هذا الفصل؟'), { en: ['All people are equal and no skin color is better than another', 'Only rich people are equal', 'People from Mecca are better than everyone'], ar: ['كل الناس متساوون ولا لون أفضل من آخر', 'الأغنياء فقط متساوون', 'أهل مكة أفضل من الجميع'] }, 0, L('The chapter connects the Farewell Sermon with equality and rejection of skin-color prejudice.', 'يربط الفصل خطبة الوداع بالمساواة ورفض التمييز بسبب لون البشرة.')) },
      ],
      ...guideBundle({ focus: L('the morning Adhan and the equality message', 'أذان الصباح ورسالة المساواة'), primaryQuestion: L('What phrase did Bilal add?', 'ما العبارة التي أضافها بلال؟'), secondQuestion: L('What did the Prophet teach about skin color?', 'ماذا علّم النبي عن لون البشرة؟'), grammar: L('Practise used to for a repeated past action.', 'تدرّب على التعبير عن العادة الماضية.'), pronunciation: L('Practise morning, pleased, prayer, speech, disrespect, and Farewell Sermon.', 'تدرّب على نطق صَبَاح، فَرِحَ، الصَّلاة، خُطْبَة، عَدَمُ احْتِرَام، وخُطْبَةَ الْوَدَاع.'), fast: L('Write two short sentences linking the Adhan and equality sections.', 'اكتب جملتين قصيرتين تربطان الأذان وقسم المساواة.'), support: L('Use: “Bilal added ___.” / “The Prophet taught ___.”', 'استخدم: «أضاف بلال ___.» / «علّم النبي ___.»') }),
    },
    {
      chapterId: 13,
      objectives: [L('State the final equality lesson in Bilal’s story.', 'يذكر درس المساواة النهائي في قصة بلال.'), L('Identify what the chapter says truly matters.', 'يحدد ما يقول الفصل إنه المهم حقًا.')],
      evidencePoints: [
        { id: 'mecca-a2-c13-equal', focus: 'theme', claim: L('Bilal’s story shows that everyone is equal in Islam.', 'تبين قصة بلال أن الجميع سواء في الإسلام.'), evidence: L('in Islam, everyone is equal', 'الْجَمِيعَ سَوَاءٌ فِي الْإِسْلَامِ') },
        { id: 'mecca-a2-c13-damascus', focus: 'sequence', claim: L('Bilal later went to Damascus.', 'ذهب بلال فيما بعد إلى دمشق.'), evidence: L('Damascus', 'دِمَشْقَ') },
        { id: 'mecca-a2-c13-heart', focus: 'theme', claim: L('What matters is the heart and good actions.', 'المهم هو القلب والأعمال الصالحة.'), evidence: L('What matters is the heart and good actions', 'الْقَلْبُ وَالْأَعْمَالُ الصَّالِحَةُ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(13),
      assessmentItems: [
        { id: 'mecca-a2-c13-quick', learningPointId: 'mecca-a2-c13-heart', eligibleStages: ['quick'], exercise: matching(L('Match the final lesson with what matters.', 'صل الدرس النهائي بما هو مهم.'), { en: [['What matters', 'the heart and good actions'], ['What does not decide value', 'skin color or nationality']], ar: [['المهم', 'القلب والأعمال الصالحة'], ['ما لا يحدد القيمة', 'لون البشرة أو الجنسية']] }, L('The closing chapter focuses on the heart and good actions.', 'يركز الفصل الأخير على القلب والأعمال الصالحة.')) },
        { id: 'mecca-a2-c13-review', learningPointId: 'mecca-a2-c13-damascus', eligibleStages: ['review'], exercise: tf(L('The chapter says Bilal later went to Damascus.', 'يذكر الفصل أن بلالًا ذهب فيما بعد إلى دمشق.'), true, L('Damascus is named in the chapter.', 'تذكر دمشق في الفصل.')) },
        { id: 'mecca-a2-c13-final', learningPointId: 'mecca-a2-c13-equal', eligibleStages: ['final'], exercise: mc(L('What final lesson does Bilal’s story show?', 'ما الدرس النهائي الذي تبينه قصة بلال؟'), { en: ['Everyone is equal in Islam', 'Only powerful people have value', 'Nationality decides a person’s worth'], ar: ['الجميع سواء في الإسلام', 'الأقوياء وحدهم لهم قيمة', 'الجنسية تحدد قيمة الإنسان'] }, 0, L('The chapter states that everyone is equal in Islam.', 'يذكر الفصل أن الجميع سواء في الإسلام.')) },
      ],
      ...guideBundle({ focus: L('equality, Bilal’s later life, and the importance of heart and actions', 'المساواة وحياة بلال اللاحقة وأهمية القلب والأعمال'), primaryQuestion: L('What does Bilal’s story show about equality?', 'ماذا تبين قصة بلال عن المساواة؟'), secondQuestion: L('What does the chapter say really matters?', 'ما الذي يقول الفصل إنه المهم حقًا؟'), grammar: L('Practise what matters is ... for a simple concluding statement.', 'تدرّب على «المهم هو...» لكتابة خلاصة.'), pronunciation: L('Practise skin color, nationality, Damascus, matters, and actions.', 'تدرّب على نطق لَوْنِ الْبَشَرَة، الْجِنْسِيَّة، دِمَشْق، الْمُهِمّ، وأَعْمَال.'), fast: L('Write a three-sentence closing summary of Bilal’s story.', 'اكتب خلاصة من ثلاث جمل لقصة بلال.'), support: L('Use: “Everyone is ___.” / “What matters is ___.”', 'استخدم: «الجميع ___.» / «المهم هو ___.»') }),
    },
  ],
  wholeBook: {
    knowledgeCheck: { title: L('Knowledge Check: Bilal ibn Rabah', 'اختبار المعرفة: بلال بن رباح'), content: L('Answer eight different questions from the story. Each learning point is used once.', 'أجب عن ثمانية أسئلة مختلفة من القصة. تُستخدم كل نقطة تعلم مرة واحدة.') },
    vocabularyChallenge: { title: L('Vocabulary Challenge', 'تحدي المفردات'), content: L('Match six reviewed Word Notes with their meanings.', 'صل ست كلمات مراجعة من ملاحظات المفردات بمعانيها.') },
    review: { title: L('Review Challenge', 'تحدي المراجعة'), content: L('Review eight different story ideas without repeating the other stages.', 'راجع ثماني أفكار مختلفة دون تكرار المراحل الأخرى.') },
    finalChallenge: { title: L('Final Challenge: Bilal ibn Rabah', 'التحدي النهائي: بلال بن رباح'), content: L('Complete ten scored activities from across the story. Tap-Reveal is not used here.', 'أكمل عشرة أنشطة مقيمة من أنحاء القصة. لا يستخدم الكشف بالنقر هنا.') },
    glossary: [
      { title: L('Master Glossary - Part 1', 'القاموس الشامل - الجزء الأول'), content: L('Reviewed Word Notes from Chapters 1–7.', 'ملاحظات المفردات المراجعة من الفصول 1–7.') },
      { title: L('Master Glossary - Part 2', 'القاموس الشامل - الجزء الثاني'), content: L('Reviewed Word Notes from Chapters 8–13.', 'ملاحظات المفردات المراجعة من الفصول 8–13.') },
    ],
  },
});
