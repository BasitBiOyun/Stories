type AuditBook = {
  label: string;
  modulePath: string;
};

const books: AuditBook[] = [
  { label: 'Adam A2', modulePath: '../../src/data/adam/a2/index.ts' },
  { label: 'Abraham A2', modulePath: '../../src/data/abraham/a2/index.ts' },
  { label: 'Moses A2', modulePath: '../../src/data/moses/a2/index.ts' },
  { label: 'Mecca A2', modulePath: '../../src/data/mecca/a2/index.ts' },
  { label: 'Yunus Emre A2', modulePath: '../../src/data/yunusEmre/a2/index.ts' },
];

const failures: string[] = [];

for (const book of books) {
  try {
    await import(new URL(book.modulePath, import.meta.url).href);
    console.log(`[A2 highlight aggregate] PASS ${book.label}`);
  } catch (error) {
    const message = error instanceof Error ? (error.stack || error.message) : String(error);
    failures.push(`${book.label}: ${message}`);
    console.error(`[A2 highlight aggregate] FAIL ${book.label}`);
    console.error(message);
  }
}

if (failures.length) {
  console.error(`\nA2 highlight aggregate: ${failures.length}/${books.length} book(s) failed.`);
  process.exitCode = 1;
} else {
  console.log(`A2 highlight aggregate: PASS ${books.length}/${books.length} books.`);
}
