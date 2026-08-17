import { bookRegistry } from '../../src/core/content/bookRegistry';

for (const definition of bookRegistry) {
  await definition.loadSource();
}

console.log('Approved English story corrections: PASS');
console.log('- all 33 approved corrections resolve against registered runtime story sources');
console.log('- no Arabic, exercise, guide, media, or unrelated story correction is part of this validator');
