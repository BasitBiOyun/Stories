// Reads the content JSON from disk (the browser build reads it through Vite instead).
import '../lib/nodeContent';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Level, PageData } from '../../src/types';
import { checkEnglishPage } from '../../src/content/rules';

/**
 * The house rules (src/content/rules.ts) over every English book. A book that breaks one of them
 * does not ship; the content panel shows the same rules while someone is typing.
 */
const booksDir = `${resolve(dirname(fileURLToPath(import.meta.url)), '../..')}/src/content/books`;
const findings: { file: string; where: string; rule: string; detail: string }[] = [];

for (const file of readdirSync(booksDir).sort()) {
  if (!file.endsWith('-en.json')) continue;
  const data = JSON.parse(readFileSync(`${booksDir}/${file}`, 'utf8')) as { level: Level; book: { pages: PageData[] } };
  for (const page of data.book.pages) {
    findings.push(...checkEnglishPage(page, data.level).map(finding => ({ file, ...finding })));
  }
}

if (findings.length > 0) {
  console.error(`\n[Content rules] ${findings.length} problem(s):`);
  const byRule = new Map<string, number>();
  for (const finding of findings) byRule.set(finding.rule, (byRule.get(finding.rule) ?? 0) + 1);
  for (const [rule, count] of byRule) console.error(` ${count} × ${rule}`);
  console.error('');
  const shown = process.argv.includes('--all') ? findings : findings.slice(0, 40);
  for (const finding of shown) console.error(` - ${finding.file} ${finding.where} [${finding.rule}] ${finding.detail}`);
  if (shown.length < findings.length) console.error(` ... and ${findings.length - shown.length} more (run with --all to list them).`);
  process.exit(1);
}
console.log('Every English book keeps the house rules.');
