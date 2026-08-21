import type { Exercise } from '../../../../types';

const feedback = {
  correct: 'Correct. The answer is supported by the story evidence.',
  incorrect: 'Not yet. Return to the named chapter evidence and try again.',
};

const mc = (id: string, question: string, options: string[], correctAnswer: number, explanation: string): Exercise => ({
  id,
  type: 'multiple-choice',
  title: 'Knowledge Check',
  instructions: 'Choose the best evidence-based answer.',
  question,
  options,
  correctAnswer,
  explanation,
  feedback,
});

export const yunusB2ManualKnowledgeCheckExercises: Exercise[] = [
  mc(
    'yu-b2-mk1',
    'Which moral principle is explicitly included in the opening description of Sûfî conduct?',
    [
      'Responding to evil with kindness and not attaching importance to wealth, status, or fame.',
      'Seeking public status as proof of spiritual progress.',
      'Avoiding generosity so that worldly possessions remain secure.',
    ],
    0,
    'Chapter 1 explicitly includes responding to evil with kindness and avoiding attachment to worldly wealth, status, and fame among the moral principles it lists.',
  ),
  mc(
    'yu-b2-mk2',
    'According to the widely accepted view reported in Chapter 2, which dates are given for Yunus Emre’s life?',
    [
      '1240–41 to 1320–21.',
      '1220–1237.',
      '1237–1246.',
    ],
    0,
    'The chapter qualifies the dates with “the widely accepted view” and then gives 1240–41 for his birth and 1320–21 for his death.',
  ),
  mc(
    'yu-b2-mk3',
    'What concrete achievement is attributed to Alaeddin I during the strong Seljuk period described in Chapter 3?',
    [
      'He established a navy in the Mediterranean and Black Seas.',
      'He founded the Ilkhanate Empire in Iran.',
      'He led the Babai uprising in 1240.',
    ],
    0,
    'Chapter 3 states that Alaeddin I expanded the country’s borders and established a navy in the Mediterranean and Black Seas.',
  ),
  mc(
    'yu-b2-mk4',
    'How does Chapter 4 identify the relationship between Baba İshak and Baba İlyas?',
    [
      'Baba İshak is described as a follower of Baba İlyas.',
      'Baba İlyas is described as a Seljuk sultan under Baba İshak.',
      'They are presented as Mongol commanders at Kösedağ.',
    ],
    0,
    'The chapter says the 1240 rebellion was led by Baba İshak, who was a follower of Baba İlyas.',
  ),
  mc(
    'yu-b2-mk5',
    'What geographical detail does Chapter 5 give for the Battle of Kösedağ?',
    [
      'It took place about 80 km northeast of Sivas.',
      'It took place on the Mediterranean coast.',
      'It took place inside Erzurum in late 1242.',
    ],
    0,
    'The story places Kösedağ about 80 km northeast of Sivas; the Erzurum attack is a separate earlier event.',
  ),
  mc(
    'yu-b2-mk6',
    'How is the Ottoman state described during the period of fragmented Anatolian principalities in Chapter 6?',
    [
      'It was still a small principality.',
      'It already ruled all of Anatolia.',
      'It had become the administrative centre of the Ilkhanate.',
    ],
    0,
    'Chapter 6 explicitly notes that the Ottoman state was still a small principality at that time.',
  ),
  mc(
    'yu-b2-mk7',
    'Which foundations does Chapter 7 explicitly name for Yunus Emre’s understanding of Sûfîsm?',
    [
      'The Qur’an, the Sunnah, and the thoughts and experiences of earlier Muslim Sûfîs.',
      'Only the political practices of the Seljuk court.',
      'Only the oral traditions of nomadic tribes.',
    ],
    0,
    'The chapter names the Qur’an and Sunnah together with the thoughts and experiences of Muslim Sûfîs who lived before Yunus.',
  ),
  mc(
    'yu-b2-mk8',
    'In the three-part account of intellect completed across Chapters 10–11, what is the role of universal intellect?',
    [
      'It guides a person to behave with piety.',
      'It explains only how to sustain worldly life.',
      'It removes the need for the heart in the path to salvation.',
    ],
    0,
    'Chapter 11 states that universal intellect guides a person toward pious conduct; practical reason is the form associated with understanding and sustaining worldly life.',
  ),
];
