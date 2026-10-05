import type { GroupTask } from '../../../../types';

/** Group tasks shown at the end of these chapters. */
export const gevherNesibeA2GroupTasksEn: Record<number, GroupTask> = {
  8: {
    type: 'jigsaw',
    title: 'Hospital Experts',
    time: '15 min',
    groupSize: '4',
    roles: [
      { name: 'School Expert', job: 'You read Chapter 5 and teach two facts about how students learned.' },
      { name: 'Teacher Expert', job: 'You read Chapter 6 and teach two facts about the teachers and books.' },
      { name: 'Building Expert', job: 'You read Chapter 7 and teach two facts about the rooms and doors.' },
      { name: 'Mind and Body Expert', job: 'You read Chapter 8 and teach two facts about music and the bathhouse.' },
    ],
    steps: [
      'Each expert reads only one chapter and writes two facts on a card.',
      'Experts take turns. Each one says the facts with “There was …” or “There were …”.',
      'The others listen and ask one question: “Where does it say that?”',
      'Together, choose the most surprising fact.',
    ],
    share: 'Each group tells the class its most surprising fact and the sentence from the book that shows it.',
    solo: 'Read Chapters 5–8 again. Write one fact from each chapter with “There was …” or “There were …”, then check each fact in the book.',
  },
  11: {
    type: 'project',
    title: 'Our Museum Guide',
    time: '20 min',
    groupSize: '3–4',
    roles: [
      { name: 'History Guide', job: 'You tell the story of Gevher Nesibe and her last wish (Chapters 2–3).' },
      { name: 'Building Guide', job: 'You show the Twin Madrasas and their rooms (Chapters 4, 7 and 8).' },
      { name: 'School Guide', job: 'You explain how students learned and what they read (Chapters 5, 6 and 9).' },
      { name: 'Writer', job: 'You write the guide’s title and its last sentence.' },
    ],
    steps: [
      'The building is the Museum of the Seljuk Civilization today. Your group makes a short museum guide for visitors.',
      'Each guide writes two or three short sentences from the book for his or her part.',
      'The Writer adds a title and one sentence about why the hospital is important (Chapter 11).',
      'Check every fact with the book before you share.',
    ],
    share: 'Each group reads its museum guide aloud, like a real guide for visitors.',
    solo: 'Write a short museum guide with five sentences: one about Gevher Nesibe, two about the buildings, one about the students and one about why the hospital is important.',
  },
};
