import assert from 'node:assert/strict';
import { mosesB2BookDataEn } from '../../src/data/moses/b2';
import { mosesB2QuestionSpecs } from '../../src/data/moses/b2/goldLearning';

const sections = mosesB2BookDataEn.studentGuideSections ?? [];
assert.ok(sections.length > 0, 'Moses B2 EN: structured Self-Study sections are missing.');

const serialized = sections
  .flatMap((section) => [section.title, section.text, ...(section.points ?? [])])
  .join('\n');

assert.ok(!/\b20 chapters\b/i.test(serialized), 'Moses B2 EN: structured Self-Study UI still references 20 chapters.');
assert.ok(/\b24 chapters\b/i.test(serialized), 'Moses B2 EN: structured Self-Study UI does not reference the canonical 24 chapters.');

assert.equal(mosesB2BookDataEn.teacherGuide.length, 24, 'Moses B2 EN: final Teacher Guide must contain 24 canonical sections.');
assert.equal(mosesB2BookDataEn.selfStudyGuide.length, 24, 'Moses B2 EN: final Self-Study Guide must contain 24 canonical sections.');

for (const spec of mosesB2QuestionSpecs) {
  const teacher = mosesB2BookDataEn.teacherGuide[spec.chapterId - 1];
  const selfStudy = mosesB2BookDataEn.selfStudyGuide[spec.chapterId - 1];
  assert.ok(teacher, `Moses B2 EN: Teacher Guide chapter ${spec.chapterId} missing.`);
  assert.ok(selfStudy, `Moses B2 EN: Self-Study chapter ${spec.chapterId} missing.`);
  assert.ok(
    teacher.pedagogy.includes(spec.title),
    `Moses B2 EN Teacher Guide chapter ${spec.chapterId}: pedagogy is not aligned to the Gold evidence focus “${spec.title}”.`,
  );
  assert.equal(
    teacher.discussionPoints[0],
    spec.question,
    `Moses B2 EN Teacher Guide chapter ${spec.chapterId}: central question drifted from the Gold Quick Challenge.`,
  );
  assert.ok(
    selfStudy.lessonPlan.includes(spec.question),
    `Moses B2 EN Self-Study chapter ${spec.chapterId}: independent routine does not use the Gold evidence question.`,
  );
  assert.equal(teacher.extraResources, undefined, `Moses B2 EN Teacher Guide chapter ${spec.chapterId}: unsupported resource claim remains.`);
  assert.equal(selfStudy.extraResources, undefined, `Moses B2 EN Self-Study chapter ${spec.chapterId}: unsupported resource claim remains.`);
}

console.log('Moses B2 guide alignment: PASS');
console.log('- legacy 20-chapter structured UI copy removed');
console.log('- canonical 24-chapter review copy present');
console.log('- Teacher Guide and Self-Study sections follow the same chapter evidence focus as the Gold Quick Challenges');
