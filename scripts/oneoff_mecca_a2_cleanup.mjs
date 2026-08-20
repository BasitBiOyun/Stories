import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const rel = p => path.join(root, p);

function propName(node) {
  if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) return node.text;
  return null;
}

function transformFile(filePath, { removeObjectKeys = [], removeImports = [] } = {}) {
  const abs = rel(filePath);
  const original = fs.readFileSync(abs, 'utf8');
  const source = ts.createSourceFile(filePath, original, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const removeKeys = new Set(removeObjectKeys);
  const removeImportSet = new Set(removeImports);

  const result = ts.transform(source, [context => {
    const visit = node => {
      if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier) && removeImportSet.has(node.moduleSpecifier.text)) {
        return undefined;
      }
      if (ts.isObjectLiteralExpression(node)) {
        const kept = node.properties.filter(property => {
          if (!('name' in property) || !property.name) return true;
          return !removeKeys.has(propName(property.name));
        });
        return ts.factory.updateObjectLiteralExpression(
          node,
          kept.map(property => ts.visitEachChild(property, visit, context)),
        );
      }
      return ts.visitEachChild(node, visit, context);
    };
    return node => ts.visitNode(node, visit);
  }]);

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const output = printer.printFile(result.transformed[0]);
  result.dispose();
  fs.writeFileSync(abs, output.endsWith('\n') ? output : `${output}\n`);
}

for (const file of ['src/data/mecca/a2/en/pages.ts', 'src/data/mecca/a2/ar/pages.ts']) {
  transformFile(file, {
    removeObjectKeys: ['exercises', 'syncPoints', 'vocabularyPairs'],
    removeImports: ['./exercises'],
  });
}

for (const file of ['src/data/mecca/a2/en/teacherGuide.ts', 'src/data/mecca/a2/ar/teacherGuide.ts']) {
  transformFile(file, { removeObjectKeys: ['extraResources'] });
}

const legacyFiles = [
  'src/data/mecca/a2/gold.ts',
  'src/data/mecca/a2/goldFinal.ts',
  'src/data/mecca/a2/goldGuides.ts',
  'src/data/mecca/a2/goldLearningBlueprint.ts',
  'src/data/mecca/a2/highlightDefinitionsAr.ts',
  'src/data/mecca/a2/learningBlueprint.ts',
  'src/data/mecca/a2/studentGuideText.ts',
];
for (const file of legacyFiles) {
  const abs = rel(file);
  if (fs.existsSync(abs)) fs.rmSync(abs);
}
const blueprintDir = rel('src/data/mecca/a2/blueprint');
if (fs.existsSync(blueprintDir)) fs.rmSync(blueprintDir, { recursive: true, force: true });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const enPages = fs.readFileSync(rel('src/data/mecca/a2/en/pages.ts'), 'utf8');
const arPages = fs.readFileSync(rel('src/data/mecca/a2/ar/pages.ts'), 'utf8');
for (const [label, text] of [['EN pages', enPages], ['AR pages', arPages]]) {
  assert(!/\bexercises\s*:/.test(text), `${label} still contains embedded exercises`);
  assert(!/\bsyncPoints\s*:/.test(text), `${label} still contains syncPoints`);
  assert(!/\bvocabularyPairs\s*:/.test(text), `${label} still contains vocabularyPairs`);
  assert(!/from ['"]\.\/exercises['"]/.test(text), `${label} still imports exercises`);
}

const enEx = fs.readFileSync(rel('src/data/mecca/a2/en/exercises.ts'), 'utf8');
const arEx = fs.readFileSync(rel('src/data/mecca/a2/ar/exercises.ts'), 'utf8');
const count = (text, token) => (text.match(new RegExp(token, 'g')) ?? []).length;
assert(count(enEx, "id: 'mecca-a2-quick-") === 13, 'EN Quick Challenge count is not 13');
assert(count(arEx, "id: 'mecca-a2-ar-quick-") === 13, 'AR Quick Challenge count is not 13');
assert(count(enEx, "id: 'mecca-a2-kc-") === 8, 'EN Knowledge Check count is not 8');
assert(count(arEx, "id: 'mecca-a2-ar-kc-") === 8, 'AR Knowledge Check count is not 8');
assert(count(enEx, "id: 'mecca-a2-final-") === 10, 'EN Final Challenge count is not 10');
assert(count(arEx, "id: 'mecca-a2-ar-final-") === 10, 'AR Final Challenge count is not 10');
assert(count(enEx, "type: 'tap-reveal'") === 1, 'EN Tap & Reveal count must be exactly 1');
assert(count(arEx, "type: 'tap-reveal'") === 1, 'AR Tap & Reveal count must be exactly 1');

for (const file of [
  'src/data/mecca/a2/en/teacherGuide.ts',
  'src/data/mecca/a2/ar/teacherGuide.ts',
  'src/data/mecca/a2/en/selfStudyGuide.ts',
  'src/data/mecca/a2/ar/selfStudyGuide.ts',
]) {
  const text = fs.readFileSync(rel(file), 'utf8');
  assert(count(text, 'chapter:') === 13, `${file} does not contain 13 chapter-specific sections`);
}

const index = fs.readFileSync(rel('src/data/mecca/a2/index.ts'), 'utf8');
assert(index.includes("from './en/exercises'"), 'Direct EN exercises are not wired');
assert(index.includes("from './ar/exercises'"), 'Direct AR exercises are not wired');
assert(index.includes('meccaA2FinalChallengeExercisesAr'), 'AR Final Challenge is not wired');
assert(!/gold|Blueprint|runA2BlueprintSystem/.test(index), 'Legacy Gold/Blueprint dependency remains in Mecca A2 index');

for (const file of legacyFiles) assert(!fs.existsSync(rel(file)), `Legacy file remains: ${file}`);
assert(!fs.existsSync(blueprintDir), 'Legacy blueprint directory remains');

const trackerPath = rel('docs/BOOK_QA_PROGRESS.md');
let tracker = fs.readFileSync(trackerPath, 'utf8');
const replacement = "7. Mecca A2 — COMPLETE\n   - Completion: all 13 EN/AR story chapters manually reviewed and preserved as canonical prose; direct EN/AR architecture complete with language-local `pages.ts`, `exercises.ts`, `teacherGuide.ts`, and `selfStudyGuide.ts` plus direct `index.ts`; EN/AR learning layer complete with exactly 13 chapter Quick Challenges and one Tap & Reveal per language, 8-question Knowledge Check, 6 unique A2 vocabulary pairs, four-part Retrieval Review (Sequencing, Matching, Reflection, independent 8-question Quiz Game), and 10-item Final Challenge using the locked 3 MC / 2 T-F / 2 Matching / 2 Fill Blanks / 1 Sequencing distribution; assessment layers use separate evidence and avoid repeated micro-facts; EN/AR Teacher Guides and Self-Study Guides contain 13 chapter-specific sections grounded in supplied story/audio/hotspots, with unsupported worksheet references removed; both `pages.ts` files physically cleaned of embedded legacy exercise, vocabulary-match, and placeholder sync payloads while retaining story/media/Word Notes/hotspots/page shells; `index.ts` now directly assembles manual learning content and guide metadata; registry already preserves prepared learning (`true`); obsolete Mecca-A2 Gold/Blueprint/duplicate support files and full `blueprint/` directory removed. Typecheck/build evidence is recorded only if the one-off cleanup workflow succeeds.\n";
const pattern = /7\. Mecca A2 — IN_PROGRESS\n(?:   - .*\n)?/;
assert(pattern.test(tracker), 'Tracker does not show Mecca A2 IN_PROGRESS');
tracker = tracker.replace(pattern, replacement);
fs.writeFileSync(trackerPath, tracker);

console.log('Mecca A2 cleanup and static completion checks passed.');
