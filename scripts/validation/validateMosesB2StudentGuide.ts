import assert from 'node:assert/strict';
import { mosesB2BookDataEn } from '../../src/data/moses/b2';

const sections = mosesB2BookDataEn.studentGuideSections ?? [];
assert.ok(sections.length > 0, 'Moses B2 EN: structured Self-Study sections are missing.');

const serialized = sections
  .flatMap((section) => [section.title, section.text, ...(section.points ?? [])])
  .join('\n');

assert.ok(!/\b20 chapters\b/i.test(serialized), 'Moses B2 EN: structured Self-Study UI still references 20 chapters.');
assert.ok(/\b24 chapters\b/i.test(serialized), 'Moses B2 EN: structured Self-Study UI does not reference the canonical 24 chapters.');

console.log('Moses B2 structured Self-Study guide: PASS');
console.log('- legacy 20-chapter UI copy removed');
console.log('- canonical 24-chapter review copy present');
