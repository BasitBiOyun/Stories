import type { Exercise } from '../../../../types';

const mc = (id: string, question: string, options: string[], answer: number, explanation: string): Exercise => ({
  id,
  type: 'multiple-choice',
  question,
  options,
  correctAnswer: answer,
  explanation,
  feedback: {
    correct: 'Correct. Your answer matches the story evidence.',
    incorrect: 'Return to the relevant chapter and compare the choices with the text.',
  },
});

export const meccaB1KnowledgeCheckExercises: Exercise[] = [
  mc('kc-1', 'What political condition shaped Arabian society before Islam?', ['There was no central government, so tribes formed the basis of society.', 'A single emperor directly governed every tribe.', 'Merchant councils had already replaced tribes across Arabia.'], 0, 'Chapter 1 states that Arabia had no central government and that tribes were the basis of society.'),
  mc('kc-2', 'Which event marks the end of the Jahiliyyah period in Chapter 2?', ['The first Quranic revelation beginning in 610 CE', 'The arrival of the Jurhumites in Mecca', 'The start of the sacred months'], 0, 'The chapter says the era ended when the first revelation of the Quran began in 610 CE.'),
  mc('kc-3', 'What did Ishmael learn from the Jurhumites after they settled in Mecca?', ['Arabic', 'Byzantine law', 'Caravan accounting'], 0, 'Chapter 3 explicitly says Ishmael learned Arabic from the Jurhumites.'),
  mc('kc-4', 'Which sequence of political control is supported by Chapter 4?', ['Khuza’a defeated Jurhum, and Quraysh later took control in the 5th century.', 'Quraysh defeated Byzantium before Jurhum arrived.', 'Jurhum replaced Quraysh after Islam began.'], 0, 'The chapter describes Khuza’a taking control from Jurhum and Quraysh taking over later in the 5th century.'),
  mc('kc-5', 'Which set contains only trade fairs named in Chapter 6?', ['Ukaz, Majannah and Dhul-Majaz', 'Safa, Marwa and Arafat', 'Byzantium, Yemen and Iraq'], 0, 'Ukaz, Majannah and Dhul-Majaz are the three fairs named in the chapter.'),
  mc('kc-6', 'What public role did poetry play in Chapter 9?', ['It preserved tribal history, praised tribes and criticized enemies.', 'It replaced trade agreements between tribes.', 'It was used mainly to calculate debts.'], 0, 'The chapter compares poets to the media because poetry carried memory, praise and criticism.'),
  mc('kc-7', 'Which detail shows the scale of idol worship described in Chapter 10?', ['There were 360 idols, including Lat, Manat and Uzza.', 'Only three idols existed in all of Arabia.', 'Idols were kept only outside Mecca.'], 0, 'Chapter 10 states that there were 360 idols and names Lat, Manat and Uzza among them.'),
  mc('kc-8', 'How long does Chapter 11 say Prophet Muhammad taught in Mecca?', ['13 years', '5 years', '25 years'], 0, 'The chapter says Prophet Muhammad taught in Mecca for 13 years.'),
];
