const fs = require('fs');

let pageStr = fs.readFileSync('src/data/abraham/b2/en/pages.ts', 'utf8');

const exercisesUpdates = {
  13: { question: 'How did Abraham advise his father against idolatry?', options: ['He used kind words and appealed to fatherly love', 'He shouted at him in front of the people', 'He destroyed his father s workshop immediately'], correctAnswer: 0, explanation: 'He advised his father with wisdom and kindness to avoid making him angry or embarrassed.', type: 'multiple-choice' },
  14: { question: 'Abraham stopped carrying the message of truth after his father threatened to stone him.', correctAnswer: false, explanation: 'His father s harsh behavior did not stop him; he went to the town to debate with the people instead.', type: 'true-false' },
  15: { question: 'How did the people justify their idol worship when Abraham questioned them?', options: ['They admitted the idols were completely useless', 'They argued that their forefathers had worshipped them', 'They claimed the idols communicated with them directly'], correctAnswer: 1, explanation: 'They relied on blind imitation of their ancestors to defend their beliefs.', type: 'multiple-choice' },
  16: { question: 'Which of the following attributes of Allah did Abraham emphasize to contrast with the idols?', options: ['He creates, guides, feeds, and heals', 'He commands them to build grand temples', 'He is visible every night in the sky'], correctAnswer: 0, explanation: 'He emphasized that Allah actively provides life, sustenance, and healing.', type: 'multiple-choice' },
  17: { question: 'The idolaters were willing to give up their beliefs after hearing Abrahams logical arguments.', correctAnswer: false, explanation: 'They would not give up their idol worship despite Abrahams clear logic.', type: 'true-false' },
  18: { question: 'Why did Abraham smash the idols and hang the axe on the biggest one?', options: ['Because he accidentally ruined the temple', 'He wanted to steal precious stones from them', 'To provide practical proof of their helplessness and foolishness'], correctAnswer: 2, explanation: 'It was a planned move to force the people to realize their gods were powerless.', type: 'multiple-choice' },
  19: { question: 'What was the idolaters reaction upon discovering their broken statues?', options: ['They decided to abandon idol worship immediately', 'They realized Abraham was right and thanked him', 'They looked for the culprit and brought Abraham before the people'], correctAnswer: 2, explanation: 'They were shocked and sought to punish the one who destroyed their gods.', type: 'multiple-choice' },
  20: { question: 'When asked if he broke the gods, how did Abraham corner the idolaters?', options: ['He told them to ask the largest idol, forcing them to admit it could not speak', 'He confessed immediately and begged for mercy', 'He blamed it on an earthquake'], correctAnswer: 0, explanation: 'He used their own logic against them by pointing to the largest idol.', type: 'multiple-choice' },
  21: { question: 'What punishment did the tyrant rulers decide upon for Abraham?', options: ['They exiled him to a faraway land', 'They sentenced him to be burned alive in a massive fire', 'They imprisoned him for life'], correctAnswer: 1, explanation: 'They built a massive fire to burn him as revenge for their gods.', type: 'multiple-choice' },
  22: { question: 'What was the miraculous outcome of Abraham being thrown into the fire?', options: ['The fire was extinguished by a sudden rainstorm', 'Allah commanded the fire to become cool and safe for him', 'He escaped the fire by flying away'], correctAnswer: 1, explanation: 'His unshakeable faith in Allah was rewarded when the fire was made cool and safe.', type: 'multiple-choice' },
  23: { question: 'What argument did King Nimrod use to claim he was a god?', options: ['He claimed he could make it rain', 'He claimed he had the power to give life and cause death', 'He claimed he created the stars'], correctAnswer: 1, explanation: 'Nimrod foolishly argued he controlled life and death by sparing or killing his subjects.', type: 'multiple-choice' },
  24: { question: 'Why could Nimrod not answer Abrahams final challenge?', options: ['Because Abraham asked a question in a language he did not know', 'Because he had no control over the sun rising from the East', 'Because he was too angry to speak'], correctAnswer: 1, explanation: 'Abraham challenged him to change the suns course, which only Allah can do.', type: 'multiple-choice' },
  25: { question: 'What led to Hajar becoming Abrahams wife?', options: ['Sarah had no children and offered Hajar to her husband', 'Abraham met Hajar during a journey', 'Nimrod forced him to marry her'], correctAnswer: 0, explanation: 'Sarah offered Hajar to Abraham so that he might have a child.', type: 'multiple-choice' },
  26: { question: 'Allah eventually gave Abraham another son, named Isaac, from his first wife Sarah.', correctAnswer: true, explanation: 'Despite her old age, Sarah was blessed with a son named Isaac.', type: 'true-false' },
  27: { question: 'How did Hajar demonstrate her profound trust in Allah in the barren valley?', options: ['She panicked and tried to run back to Egypt', 'She asked Abraham to stay with them no matter what', 'She surrendered to Allahs will when she learned it was His command'], correctAnswer: 2, explanation: 'Hajar showed advanced Tawakkul (trust) by accepting Allahs command completely.', type: 'multiple-choice' },
  28: { question: 'What happened to the Holy Kaba over time before Abraham was sent to reconstruct it?', options: ['It had been completely preserved by the local people', 'It had been relocated to a different country', 'It had been lost in the distant past'], correctAnswer: 2, explanation: 'The Kaba was lost in the distant past and needed to be reconstructed as the center of monotheism.', type: 'multiple-choice' },
  29: { question: 'What is the lasting significance of Hajar running between the two hills?', options: ['It became a core ritual (Say) for millions of pilgrims during Hajj and Umrah', 'It showed the local tribes how to find water in the desert', 'It was forgotten over time'], correctAnswer: 0, explanation: 'Her desperate search for water became an eternal act of worship in Islam.', type: 'multiple-choice' },
  30: { question: 'How was Zamzam water discovered in the barren valley?', options: ['Abraham dug a deep well before leaving', 'Heavy rain filled the valley with water', 'The angel Gabriel struck the earth, causing the water to well up'], correctAnswer: 2, explanation: 'The angel Gabriel struck the ground beside baby Ishmael, revealing the Zamzam well.', type: 'multiple-choice' },
  31: { question: 'Why did the Jurham tribe decide to settle in the valley of Mecca?', options: ['They wanted to build a large city for trading', 'They were attracted by the presence of birds indicating the Zamzam water', 'They were running away from an enemy'], correctAnswer: 1, explanation: 'They saw birds circling, which meant water was present, and asked Hajar for permission to settle.', type: 'multiple-choice' },
  32: { question: 'How did Abraham and Ishmael react to the dream containing Allahs command?', options: ['They both demonstrated unconditional submission and readiness to obey', 'They tried to find a way to avoid the command completely', 'They argued about the meaning of the dream'], correctAnswer: 0, explanation: 'Both father and son surrendered to the command immediately, proving their deep faith.', type: 'multiple-choice' },
  33: { question: 'What does the replacement of Ishmael with an animal symbolize?', options: ['That Allah desires human sacrifice in certain rare situations', 'That Allah did not actually want Ishmaels death, but tested their obedience', 'That animals are more valuable than humans'], correctAnswer: 1, explanation: 'It symbolizes that Allah rewards complete faith and submission, and does not desire human sacrifice.', type: 'multiple-choice' },
  34: { question: 'What is the theological significance of reconstructing the Kaba?', options: ['It served as the first center of monotheism for humanity to come together and worship Allah', 'It was built mainly so Abraham could live there', 'It was designed as an impregnable fortress'], correctAnswer: 0, explanation: 'The Kaba was established as a universal center to declare the Oneness of Allah.', type: 'multiple-choice' }
};

for (const id in exercisesUpdates) {
  const ex = exercisesUpdates[id];
  const chapterRegex = new RegExp(`("id":\\s*${id},[\\s\\S]*?"exercises":\\s*\\[\\s*\\{[\\s\\S]*?\\}\\s*\\])`, 'g');
  console.log('Replacing chapter ' + id);
  pageStr = pageStr.replace(chapterRegex, (match) => {
    let newExStr = '';
    if (ex.type === 'multiple-choice') {
      newExStr = `
      {
        "id": "b2-ch-ex-${id}",
        "type": "multiple-choice",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "${ex.question}",
        "options": ${JSON.stringify(ex.options)},
        "correctAnswer": ${ex.correctAnswer},
        "explanation": "${ex.explanation}",
        "feedback": {
          "correct": "Correct! ${ex.explanation}",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }`;
    } else {
      newExStr = `
      {
        "id": "b2-ch-ex-${id}",
        "type": "true-false",
        "title": "Comprehension Check",
        "instructions": "Decide if the statement is true or false.",
        "question": "${ex.question}",
        "correctAnswer": ${ex.correctAnswer},
        "explanation": "${ex.explanation}",
        "feedback": {
          "correct": "Correct! ${ex.explanation}",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }`;
    }
    
    return match.replace(/"exercises":\s*\[[\s\S]*?\]/, `"exercises": [${newExStr}\n    ]`);
  });
}

fs.writeFileSync('src/data/abraham/b2/en/pages.ts', pageStr);
console.log('Successfully updated B2 exercises.');
