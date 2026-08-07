import type { Exercise, PageData } from '../../../../types';
import { adamA2Pages } from './pages';
import { adamA2FinalChallengeExercises, adamA2KnowledgeCheckExercises } from './exercises';

const chapterExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'ex1-reinforce',
      type: 'fill-blanks',
      title: 'Remember the Beginning',
      instructions: 'Complete the key fact from this chapter.',
      question: 'What was Adam (pbuh) created from?',
      fillBlanksText: 'Allah created Adam (pbuh) from [blank].',
      correctAnswer: 'soil',
      explanation: 'The chapter begins by explaining that Allah created Adam (pbuh) from soil.',
      feedback: {
        correct: 'Yes. Soil is the key word to remember from the creation part.',
        incorrect: 'Look again at the first paragraph and find what Adam was created from.'
      }
    }
  ],
  2: [
    {
      id: 'ex2-reinforce',
      type: 'multiple-choice',
      title: 'Knowledge and Respect',
      instructions: 'Choose the idea that the chapter explains.',
      question: 'What helped Adam learn and understand?',
      options: ['Knowledge from Allah', 'Being created from fire', 'Living on Earth first'],
      correctAnswer: 0,
      explanation: 'The chapter says that Allah gave Adam knowledge and taught him to think.',
      feedback: {
        correct: 'Correct. Knowledge explains why Adam could learn and understand.',
        incorrect: 'Reread the first paragraph and find what Allah gave Adam.'
      }
    }
  ],
  3: [
    {
      id: 'ex3-reinforce',
      type: 'matching',
      title: 'Fire, Soil, and Knowledge',
      instructions: 'Match each idea with the person or meaning used in the chapter.',
      question: 'Connect the ideas from the chapter.',
      matchingPairs: [
        { left: 'fire', right: 'Iblis’s origin' },
        { left: 'soil', right: 'Adam’s origin' },
        { left: 'useful knowledge', right: 'helps people do good and stop bad' }
      ],
      correctAnswer: {
        fire: 'Iblis’s origin',
        soil: 'Adam’s origin',
        'useful knowledge': 'helps people do good and stop bad'
      },
      explanation: 'The chapter contrasts origin with useful knowledge and explains why knowledge matters.',
      feedback: {
        correct: 'Good. You connected the three main ideas in the chapter.',
        incorrect: 'Use the sentences about fire, soil, and useful knowledge to rebuild the matches.'
      }
    }
  ],
  4: [
    {
      id: 'ex4-reinforce',
      type: 'tap-reveal',
      title: 'The One Warning',
      instructions: 'Think first, then reveal the answer and compare it with the text.',
      question: 'What was the one warning given to Adam and Eve in Paradise?',
      correctAnswer: 'Do not go near one tree.',
      tapRevealItems: [
        { question: 'The warning', answer: 'Do not go near one tree.' }
      ],
      explanation: 'The chapter ends with one clear warning about one tree.',
      feedback: {
        correct: 'Yes. This is the exact idea to remember from the end of the chapter.',
        incorrect: 'Read the final sentence of the chapter and try again.'
      }
    }
  ],
  5: [
    {
      id: 'ex5-reinforce',
      type: 'sequencing',
      title: 'Lie, Mistake, and Regret',
      instructions: 'Put the events in the order used by the chapter.',
      question: 'What happened first, next, and after that?',
      sequencingItems: [
        { id: '1', text: 'Iblis told Adam and Eve a lie.' },
        { id: '2', text: 'They believed the lie and ate from the tree.' },
        { id: '3', text: 'They felt sad about their action.' },
        { id: '4', text: 'They said sorry and decided not to repeat the mistake.' }
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'The chapter presents a clear sequence from the lie to the mistake and then to regret and learning.',
      feedback: {
        correct: 'Correct. You rebuilt the chapter’s cause-and-result sequence.',
        incorrect: 'Follow the paragraphs in order: lie, action, feeling, then response.'
      }
    }
  ],
  6: [
    {
      id: 'ex6-reinforce',
      type: 'fill-blanks',
      title: 'Life on Earth',
      instructions: 'Complete two examples from this chapter.',
      question: 'What activities does the text mention on Earth?',
      fillBlanksText: 'People could use land to grow [blank] and keep animals.',
      correctAnswer: 'crops',
      explanation: 'The chapter explains responsibilities on Earth and includes growing crops and keeping animals.',
      feedback: {
        correct: 'Correct. Growing crops is one of the examples in this chapter.',
        incorrect: 'Return to the sentence about using land and find the missing word.'
      }
    }
  ],
  7: [
    {
      id: 'ex7-reinforce',
      type: 'multiple-choice',
      title: 'The First Messenger',
      instructions: 'Choose what Adam taught people according to the chapter.',
      question: 'Which idea is part of Adam’s teaching in the text?',
      options: ['Be honest, do good, and remember Allah', 'Collect as much wealth as possible', 'Never help other people'],
      correctAnswer: 0,
      explanation: 'The chapter says that Adam taught people to be honest, do good, stop bad, and remember Allah.',
      feedback: {
        correct: 'Correct. This option repeats the teaching described in the chapter.',
        incorrect: 'Reread the sentence that begins with what Adam started teaching people.'
      }
    }
  ],
  8: [
    {
      id: 'ex8-reinforce',
      type: 'matching',
      title: 'Habil and Qabil',
      instructions: 'Match each brother with information stated in the chapter.',
      question: 'Connect the brothers with their work and description.',
      matchingPairs: [
        { left: 'Habil', right: 'shepherd; kind and gentle' },
        { left: 'Qabil', right: 'farmer; mostly jealous' }
      ],
      correctAnswer: {
        Habil: 'shepherd; kind and gentle',
        Qabil: 'farmer; mostly jealous'
      },
      explanation: 'The first paragraph directly describes both brothers and their work.',
      feedback: {
        correct: 'Correct. You used the information given about both brothers.',
        incorrect: 'Read the first paragraph again and underline each brother’s job and description.'
      }
    }
  ],
  9: [
    {
      id: 'ex9-reinforce',
      type: 'sequencing',
      title: 'What Happened Next?',
      instructions: 'Put these events in story order.',
      question: 'Follow the sequence in the chapter.',
      sequencingItems: [
        { id: '1', text: 'Qabil became very angry with Habil.' },
        { id: '2', text: 'Qabil fought with Habil and Habil died.' },
        { id: '3', text: 'Qabil became sad and panicked.' },
        { id: '4', text: 'A crow came and started digging the ground.' }
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'The chapter moves from anger and harm to panic and then to the crow’s action.',
      feedback: {
        correct: 'Correct. You followed the information in the same order as the text.',
        incorrect: 'Read the two paragraphs in order and notice what happens before the crow arrives.'
      }
    }
  ],
  10: [
    {
      id: 'ex10-reinforce',
      type: 'multiple-choice',
      title: 'The Closing Message',
      instructions: 'Choose the idea stated in the final chapter.',
      question: 'What does the story say Adam’s message continued to teach?',
      options: ['Love and respect Allah and be kind to others', 'Become better than everyone else', 'Avoid learning new things'],
      correctAnswer: 0,
      explanation: 'The final chapter says that the message advises people to love and respect Allah and to be well-behaved and kind to others.',
      feedback: {
        correct: 'Correct. This is one of the final ideas the story asks readers to remember.',
        incorrect: 'Return to the final chapter and find the paragraph about Adam’s children and grandchildren.'
      }
    }
  ]
};

const vocabularyChallengePairs = [
  { word: 'Messenger', meaning: 'A person who carries a message from Allah' },
  { word: 'Arrogant', meaning: 'Thinking you are more important or better than others' },
  { word: 'Regret', meaning: 'Feeling sad about a mistake' },
  { word: 'Shepherd', meaning: 'A person who looks after sheep' },
  { word: 'Offering', meaning: 'Something offered to Allah' },
  { word: 'Jealousy', meaning: 'Feeling unhappy because of what another person has or does' }
];

/**
 * English-only pilot overlay.
 * The canonical page objects remain unchanged; only derived learning fields are replaced.
 * Arabic will be adapted after the English objectives and wording are approved.
 */
export const adamA2PagesForLearning: PageData[] = adamA2Pages.map((page) => {
  if (page.id >= 1 && page.id <= 10) {
    return { ...page, exercises: chapterExercises[page.id] };
  }

  if (page.id === 11) {
    return {
      ...page,
      title: 'Knowledge Check: Adam (pbuh)',
      content: 'Use these questions to recall key information. If you are unsure, return to the story and try again.',
      exercises: adamA2KnowledgeCheckExercises
    };
  }

  if (page.id === 12) {
    return {
      ...page,
      content: 'Match six important words from the story with their simple meanings.',
      vocabularyPairs: vocabularyChallengePairs
    };
  }

  if (page.id === 16) {
    return {
      ...page,
      content: 'Recall ten important ideas from the whole story. Use the chapters when you need help.',
      exercises: adamA2FinalChallengeExercises
    };
  }

  return page;
});
