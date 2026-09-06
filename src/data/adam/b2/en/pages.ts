import { PageData } from '../../../../types';
import { adamB2FinalReviewExercises } from './exercises';

export const adamB2Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'Introduction',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_1.png?alt=media&token=f2ae6289-f8fa-4606-a89a-d1d8537a4394',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch1.mp3?alt=media&token=0b8932e8-d415-4e1b-846d-5b43c5e6c8a5',
    content: "Adam (pbuh) was the first human being to be created, and the first prophet who served as a guide and example for mankind. We learn his story from the Holy Qur'an. Based on the Holy Qur'an, the creation of Adam (pbuh) is not like the creation of other humans. He was created from clay without parents, as a miraculous sign of Allah's unlimited power. The story of Adam (pbuh) is told in several chapters (surahs) of the Holy Qur'an. These are Surah Baqarah, Surah Al-Imran, Surah A’raf, Surah Hijr, Surah Isra, Surah Kahf, Surah Taha, and Surah Sâd. In these surahs, Satan is portrayed as a rebel against Allah’s command but also as a rival and enemy of Adam (pbuh) rather than Allah.\n\nAdam (pbuh)’s tale (kıssa) is not symbolic or imaginary, but it is an original factual tale with historical correctness and reality from which many lessons and morals we can take. It also includes the Unseen (gaybî), and this makes the story fabulous. The tale provides us a uniquely key and deeply philosophical understanding of life. It clearly appears that human beings' earthly life is the scene of a division and contrast between good and evil as opposed to each other.",
    vocabulary: [
      { word: 'miraculous', definition: 'Occurring through divine or supernatural intervention.' },
      { word: 'fabulous', definition: 'Extraordinary, legendary, or related to a fable/tale.' },
      { word: 'philosophical', definition: 'Relating to the fundamental nature of knowledge, reality, and existence.' }
    ],
    hotspots: [
      { id: 'h1a', x: 30, y: 40, title: 'The First Prophet', description: 'Adam (pbuh) served as the initial guide for all of humanity.' },
      { id: 'h1b', x: 70, y: 60, title: 'Miraculous Creation', description: 'Adam (pbuh) was created from clay as a sign of Allah\'s power.' }
    ],
    animatedWords: ['miraculous', 'fabulous', 'philosophical'],
    exercises: [
      {
        id: 'qc-1',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'How was Adam (pbuh) created?',
        options: ['From light', 'From clay without parents', 'From fire'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  }
];
