import type { Exercise } from '../types';

/**
 * The technical checks every exercise must pass before a deploy (they protect rendering and
 * scoring, not teaching quality). The build runs them over every book
 * (scripts/validation/validateExerciseStructure.ts) and the content panel runs the same ones
 * while someone edits, in Turkish, so a broken exercise is seen before it is saved.
 */
export interface StructureProblem {
  en: string;
  tr: string;
}

const duplicates = (values: readonly string[]): string[] => {
  const seen = new Set<string>();
  const repeated = new Set<string>();
  values.forEach(value => {
    const key = value.trim();
    if (seen.has(key)) repeated.add(key);
    seen.add(key);
  });
  return [...repeated];
};

export const checkExerciseStructure = (exercise: Exercise, where: string): StructureProblem[] => {
  const errors: StructureProblem[] = [];
  const at = `${where} ${exercise.id}`;
  const add = (en: string, tr: string) => errors.push({ en: `${at}: ${en}`, tr });

  switch (exercise.type) {
    case 'matching': {
      const pairs = exercise.matchingPairs ?? [];
      if (pairs.length < 2) add('matching needs at least 2 pairs', 'En az 2 çift gerekiyor.');
      const repeatedLeft = duplicates(pairs.map(pair => pair.left));
      const repeatedRight = duplicates(pairs.map(pair => pair.right));
      if (repeatedLeft.length) add(`repeated left item(s) ${JSON.stringify(repeatedLeft)}`, `Solda aynı madde iki kez var: ${repeatedLeft.join(', ')}`);
      if (repeatedRight.length) add(`repeated right item(s) ${JSON.stringify(repeatedRight)} make the matching impossible to complete`, `Sağda aynı madde iki kez var: ${repeatedRight.join(', ')}`);
      break;
    }
    case 'multiple-choice': {
      const options = exercise.options ?? [];
      if (options.length < 2) add('multiple-choice needs at least 2 options', 'En az 2 seçenek gerekiyor.');
      if (!Number.isInteger(exercise.correctAnswer) || exercise.correctAnswer < 0 || exercise.correctAnswer >= options.length) {
        add('correctAnswer is not a valid option index', 'Doğru seçenek işaretlenmemiş.');
      }
      const repeated = duplicates(options);
      if (repeated.length) add(`repeated option(s) ${JSON.stringify(repeated)}`, `Aynı seçenek iki kez var: ${repeated.join(', ')}`);
      break;
    }
    case 'drag-drop': {
      const groups = exercise.dragDropGroups ?? [];
      const answer = (exercise.correctAnswer ?? {}) as Record<string, string[]>;
      if (groups.length < 2) add('drag-drop needs at least 2 groups', 'En az 2 grup gerekiyor.');
      const items = groups.flatMap(group => group.items);
      const repeated = duplicates(items);
      if (repeated.length) add(`an item appears in more than one group ${JSON.stringify(repeated)}`, `Aynı madde birden fazla grupta: ${repeated.join(', ')}`);
      groups.forEach(group => {
        const expected = answer[group.group] ?? [];
        if (expected.length !== group.items.length || group.items.some(item => !expected.includes(item))) {
          add(`correctAnswer disagrees with group "${group.group}"`, `"${group.group}" grubunun cevabı maddelerle uyuşmuyor.`);
        }
      });
      break;
    }
    case 'sequencing': {
      const ids = (exercise.sequencingItems ?? []).map(item => item.id);
      const answer = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer.map(String) : [];
      if (ids.length < 2) add('sequencing needs at least 2 items', 'En az 2 olay gerekiyor.');
      if (answer.length !== ids.length || ids.some(id => !answer.includes(id))) {
        add('correctAnswer is not a permutation of the sequencing item ids', 'Doğru sıra olaylarla uyuşmuyor.');
      }
      break;
    }
    case 'fill-blanks': {
      if (!/\[blank\]|_{3,}/.test(exercise.fillBlanksText ?? '')) add('fill-blanks text has no [blank]', 'Metinde [blank] boşluğu yok.');
      const answers = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer : [exercise.correctAnswer];
      if (!answers.length || answers.some(answer => typeof answer !== 'string' || !answer.trim())) {
        add('fill-blanks needs a non-empty expected answer', 'En az bir kabul edilen cevap yazın.');
      }
      break;
    }
    case 'choose-form': {
      const items = exercise.formChoices ?? [];
      if (!items.length) add('choose-form needs formChoices', 'En az bir cümle gerekiyor.');
      items.forEach((item, index) => {
        if ((item.sentence.match(/\[choice\]/g) ?? []).length !== 1) add(`item ${index + 1} needs exactly one [choice]`, `${index + 1}. cümlede tam bir [choice] olmalı.`);
        if (item.options.length < 2) add(`item ${index + 1} needs at least 2 options`, `${index + 1}. cümlede en az 2 seçenek olmalı.`);
        if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.options.length) add(`item ${index + 1} answer is not a valid option index`, `${index + 1}. cümlede doğru seçenek işaretlenmemiş.`);
        if (duplicates(item.options).length) add(`item ${index + 1} repeats an option`, `${index + 1}. cümlede aynı seçenek iki kez var.`);
      });
      break;
    }
    case 'word-bank': {
      const blanks = (exercise.fillBlanksText?.match(/\[blank\]/g) ?? []).length;
      const expected = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer.map(String) : [];
      const bank = [...(exercise.wordBank ?? [])];
      if (!blanks) add('word-bank text has no [blank]', 'Metinde [blank] boşluğu yok.');
      if (expected.length !== blanks) add(`word-bank needs one expected answer per [blank] (${blanks} blanks, ${expected.length} answers)`, `Her boşluğa bir cevap gerekiyor (${blanks} boşluk, ${expected.length} cevap).`);
      expected.forEach(answer => {
        const index = bank.indexOf(answer);
        if (index < 0) add(`expected answer "${answer}" is not available in the word bank`, `"${answer}" cevabı kelime bankasında yok.`);
        else bank.splice(index, 1);
      });
      if (!bank.length) add('word bank needs at least one distractor', 'Bankada en az bir fazladan (yanlış) kelime olmalı.');
      break;
    }
    case 'error-correction': {
      const items = exercise.errorItems ?? [];
      if (!items.length) add('error-correction needs errorItems', 'En az bir hatalı cümle gerekiyor.');
      items.forEach((item, index) => {
        if (!item.error || !item.sentence.includes(item.error)) add(`item ${index + 1} error text is not in its sentence`, `${index + 1}. cümlede "hatalı kısım" cümlede birebir geçmiyor.`);
        if (item.options.length < 2) add(`item ${index + 1} needs at least 2 correction options`, `${index + 1}. cümlede en az 2 düzeltme seçeneği olmalı.`);
        if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.options.length) add(`item ${index + 1} answer is not a valid option index`, `${index + 1}. cümlede doğru düzeltme işaretlenmemiş.`);
        if (item.options[item.answer] === item.error) add(`item ${index + 1} correction is identical to the error`, `${index + 1}. cümlede doğru düzeltme hatanın aynısı.`);
      });
      break;
    }
    case 'sentence-building': {
      const chunks = exercise.sentenceChunks ?? [];
      if (chunks.length < 3) add('sentence-building needs at least 3 chunks', 'En az 3 parça gerekiyor.');
      if (Array.isArray(exercise.correctAnswer)) {
        exercise.correctAnswer.forEach((order: unknown, index: number) => {
          if (!Array.isArray(order) || [...order].sort().join('\u0000') !== [...chunks].sort().join('\u0000')) {
            add(`alternative order ${index + 1} does not use exactly the authored chunks`, `${index + 1}. başka sıra, parçaların aynısını kullanmıyor.`);
          }
        });
      }
      break;
    }
    case 'transformation': {
      const items = exercise.transformItems ?? [];
      if (!items.length) add('transformation needs transformItems', 'En az bir cümle gerekiyor.');
      items.forEach((item, index) => {
        if ((item.frame.match(/\[blank\]/g) ?? []).length !== 1) add(`item ${index + 1} frame needs exactly one [blank]`, `${index + 1}. yeni cümlede tam bir [blank] olmalı.`);
        if (!item.answers.length || item.answers.some(answer => !answer.trim())) add(`item ${index + 1} needs accepted answers`, `${index + 1}. cümle için kabul edilen cevap yazın.`);
      });
      break;
    }
    default:
      break;
  }

  return errors;
};
