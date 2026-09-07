import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DATA_ROOT = path.join(ROOT, 'src', 'data');
const BOOKS = ['abraham', 'moses', 'mecca', 'yunusEmre'];
const LANGS = ['en', 'ar'];
const ALLOWED = new Set([
  'pages.ts',
  'exercises.ts',
  'selfStudyGuide.ts',
  'teacherGuide.ts',
  'languageFocus.ts',
  'languageFocus2.ts',
  'languageFocus3.ts',
]);
const RECOGNIZED_EXTRA = (name) =>
  name === 'exerciseSystem.ts'
  || name === 'knowledgeCheck.ts'
  || name === 'languageReview.ts'
  || name === 'storySource.ts'
  || name === 'lockedStorySource.ts'
  || /^languageFocus.+\.ts$/.test(name);

const read = (file) => fs.readFileSync(file, 'utf8');
const write = (file, content) => fs.writeFileSync(file, `${content.trim()}\n`, 'utf8');
const exists = (file) => fs.existsSync(file);
const rel = (file) => path.relative(ROOT, file).replaceAll('\\', '/');

const importPattern = /(^|\n)(import\s+[\s\S]*?\s+from\s+['"][^'"]+['"];\s*)/g;

function splitImports(text) {
  const imports = [];
  const body = text.replace(importPattern, (full, prefix, statement) => {
    const match = statement.trim().match(/^import\s+([\s\S]*?)\s+from\s+['"]([^'"]+)['"];$/);
    if (!match) throw new Error(`Could not parse import: ${statement.trim()}`);
    imports.push({ statement: statement.trim(), clause: match[1].trim(), source: match[2] });
    return prefix || '';
  });
  return { imports, body: body.trim() };
}

function parseNamedSpecifiers(clause) {
  const match = clause.match(/\{([\s\S]*)\}/);
  if (!match) return [];
  return match[1]
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((raw) => {
      const isType = raw.startsWith('type ');
      const clean = raw.replace(/^type\s+/, '').trim();
      const alias = clean.split(/\s+as\s+/);
      const imported = alias[0].trim();
      const local = (alias[1] || alias[0]).trim();
      return { imported, local, isType, raw: `${isType ? 'type ' : ''}${imported}${local !== imported ? ` as ${local}` : ''}` };
    });
}

function importLocalNames(imports) {
  const names = new Set();
  for (const item of imports) {
    for (const spec of parseNamedSpecifiers(item.clause)) names.add(spec.local);
    const withoutType = item.clause.replace(/^type\s+/, '').trim();
    if (!withoutType.startsWith('{') && !withoutType.startsWith('*')) {
      const defaultName = withoutType.split(',')[0].trim();
      if (defaultName) names.add(defaultName);
    }
  }
  return names;
}

function exportedNames(text) {
  const names = new Set();
  const re = /(?:^|\n)export\s+(?:declare\s+)?(?:const|let|var|function|class|type|interface|enum)\s+([A-Za-z_$][\w$]*)/g;
  let match;
  while ((match = re.exec(text))) names.add(match[1]);
  return names;
}

function topLevelDeclarations(text) {
  const result = [];
  const re = /^(export\s+)?(?:declare\s+)?(?:const|let|var|function|class|type|interface|enum)\s+([A-Za-z_$][\w$]*)/gm;
  let match;
  while ((match = re.exec(text))) result.push({ name: match[2], exported: Boolean(match[1]) });
  return result;
}

function replaceIdentifierOutsideStrings(text, oldName, newName) {
  let out = '';
  let i = 0;
  let state = 'code';
  let quote = '';
  while (i < text.length) {
    const ch = text[i];
    const next = text[i + 1];

    if (state === 'lineComment') {
      out += ch;
      i += 1;
      if (ch === '\n') state = 'code';
      continue;
    }
    if (state === 'blockComment') {
      out += ch;
      i += 1;
      if (ch === '*' && next === '/') {
        out += '/';
        i += 1;
        state = 'code';
      }
      continue;
    }
    if (state === 'string') {
      out += ch;
      i += 1;
      if (ch === '\\' && i < text.length) {
        out += text[i];
        i += 1;
        continue;
      }
      if (ch === quote) state = 'code';
      continue;
    }
    if (state === 'template') {
      out += ch;
      i += 1;
      if (ch === '\\' && i < text.length) {
        out += text[i];
        i += 1;
        continue;
      }
      if (ch === '`') state = 'code';
      continue;
    }

    if (ch === '/' && next === '/') {
      out += '//';
      i += 2;
      state = 'lineComment';
      continue;
    }
    if (ch === '/' && next === '*') {
      out += '/*';
      i += 2;
      state = 'blockComment';
      continue;
    }
    if (ch === '\'' || ch === '"') {
      out += ch;
      i += 1;
      state = 'string';
      quote = ch;
      continue;
    }
    if (ch === '`') {
      out += ch;
      i += 1;
      state = 'template';
      continue;
    }
    if (/[A-Za-z_$]/.test(ch)) {
      let j = i + 1;
      while (j < text.length && /[A-Za-z0-9_$]/.test(text[j])) j += 1;
      const token = text.slice(i, j);
      out += token === oldName ? newName : token;
      i = j;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

function makeBodiesShareScope(modules, importedNames = new Set()) {
  const used = new Set(importedNames);
  const outputs = [];
  let serial = 1;

  for (const module of modules) {
    let body = module.body;
    const declarations = topLevelDeclarations(body);
    for (const declaration of declarations) {
      if (declaration.exported) {
        if (used.has(declaration.name)) {
          throw new Error(`Duplicate exported declaration ${declaration.name} while consolidating ${module.name}`);
        }
        used.add(declaration.name);
        continue;
      }
      if (!used.has(declaration.name)) {
        used.add(declaration.name);
        continue;
      }
      let replacement = `${declaration.name}__consolidated${serial++}`;
      while (used.has(replacement)) replacement = `${declaration.name}__consolidated${serial++}`;
      body = replaceIdentifierOutsideStrings(body, declaration.name, replacement);
      used.add(replacement);
    }
    outputs.push({ ...module, body });
  }
  return outputs;
}

function dedupeImports(imports) {
  const seen = new Set();
  return imports.filter((item) => {
    const key = item.statement;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function preflightLanguageDir(dir) {
  const tsFiles = fs.readdirSync(dir).filter((name) => name.endsWith('.ts'));
  for (const required of ['pages.ts', 'exercises.ts', 'selfStudyGuide.ts', 'teacherGuide.ts', 'languageFocus.ts']) {
    if (!tsFiles.includes(required)) throw new Error(`Missing required ${rel(path.join(dir, required))}`);
  }
  for (const name of tsFiles) {
    if (!ALLOWED.has(name) && !RECOGNIZED_EXTRA(name)) {
      throw new Error(`Unknown B2 extra file; refusing automatic migration: ${rel(path.join(dir, name))}`);
    }
  }
}

function mergePages(dir) {
  const pagesPath = path.join(dir, 'pages.ts');
  const sourceName = ['lockedStorySource.ts', 'storySource.ts'].find((name) => exists(path.join(dir, name)));
  if (!sourceName) return [];

  const sourcePath = path.join(dir, sourceName);
  const current = splitImports(read(pagesPath));
  const source = splitImports(read(sourcePath));
  const sourceImport = current.imports.find((item) => item.source === `./${sourceName.replace(/\.ts$/, '')}`);
  if (!sourceImport) throw new Error(`${rel(pagesPath)} does not import ${sourceName}`);
  const specs = parseNamedSpecifiers(sourceImport.clause);
  if (specs.length !== 1) throw new Error(`Expected one named story-source import in ${rel(pagesPath)}`);
  const { imported, local } = specs[0];
  const sourceAlias = `__consolidated_${imported}_source`;
  const exportPattern = new RegExp(`\\bexport\\s+const\\s+${imported}\\b`);
  if (!exportPattern.test(source.body)) throw new Error(`Could not find exported ${imported} in ${rel(sourcePath)}`);

  let sourceBody = source.body.replace(exportPattern, `const ${sourceAlias}`);
  let wrapperBody = replaceIdentifierOutsideStrings(current.body, local, sourceAlias);
  const keptImports = current.imports.filter((item) => item !== sourceImport);
  const allImports = dedupeImports([...source.imports, ...keptImports]);
  const imported = importLocalNames(allImports);
  const processed = makeBodiesShareScope([
    { name: sourceName, body: sourceBody },
    { name: 'pages.ts wrapper', body: wrapperBody },
  ], imported);

  const output = [
    ...allImports.map((item) => item.statement),
    '',
    `// Consolidated from ${sourceName}; canonical story/media/support content is preserved below.`,
    processed[0].body,
    '',
    '// Runtime page shaping preserved from the previous pages.ts wrapper.',
    processed[1].body,
  ].join('\n');
  write(pagesPath, output);
  return [sourcePath];
}

function mergeExerciseExtras(dir) {
  const exercisesPath = path.join(dir, 'exercises.ts');
  const extras = ['exerciseSystem.ts', 'knowledgeCheck.ts']
    .map((name) => path.join(dir, name))
    .filter(exists);
  if (!extras.length) return [];

  const base = splitImports(read(exercisesPath));
  const modules = [{ name: 'exercises.ts', body: base.body }];
  const keptImports = [...base.imports];

  for (const extraPath of extras) {
    const parsed = splitImports(read(extraPath));
    for (const item of parsed.imports) {
      if (item.source === './exercises') continue;
      if (item.source === './exerciseSystem' || item.source === './knowledgeCheck') {
        throw new Error(`Unexpected dependency ${item.source} in ${rel(extraPath)}`);
      }
      keptImports.push(item);
    }
    modules.push({ name: path.basename(extraPath), body: parsed.body });
  }

  const imports = dedupeImports(keptImports);
  const processed = makeBodiesShareScope(modules, importLocalNames(imports));
  const sections = processed.map((module, index) => index === 0
    ? module.body
    : `// Consolidated from ${module.name}.\n${module.body}`);
  write(exercisesPath, [...imports.map((item) => item.statement), '', ...sections.flatMap((section) => [section, ''])].join('\n'));
  return extras;
}

function languageFocusOrder(name) {
  if (name === 'languageFocus.ts') return 0;
  const plain = name.match(/^languageFocus(\d+)\.ts$/);
  if (plain) return 100 + Number(plain[1]);
  const part = name.match(/^languageFocusPart(\d+)\.ts$/);
  if (part) return 200 + Number(part[1]);
  const chapter = name.match(/^languageFocusChapter(\d+)\.ts$/);
  if (chapter) return 1000 + Number(chapter[1]);
  return 10000;
}

function partitionModules(modules) {
  if (modules.length <= 3) return modules.map((module) => [module]).concat(Array.from({ length: 3 - modules.length }, () => []));
  const groups = [[], [], []];
  const total = modules.reduce((sum, module) => sum + module.body.length, 0);
  let cumulative = 0;
  let group = 0;

  for (let i = 0; i < modules.length; i += 1) {
    const module = modules[i];
    const remainingModules = modules.length - i;
    const remainingGroupsAfterCurrent = 2 - group;
    if (group < 2 && groups[group].length > 0 && remainingModules > remainingGroupsAfterCurrent) {
      const boundary = total * (group + 1) / 3;
      const before = Math.abs(cumulative - boundary);
      const after = Math.abs(cumulative + module.body.length - boundary);
      if (before <= after) group += 1;
    }
    groups[group].push(module);
    cumulative += module.body.length;
  }

  // Ensure all three target files are populated when there are at least three source modules.
  for (let g = 2; g > 0; g -= 1) {
    if (!groups[g].length && groups[g - 1].length > 1) groups[g].unshift(groups[g - 1].pop());
  }
  return groups;
}

function consolidateLanguageFocus(dir) {
  const allNames = fs.readdirSync(dir).filter((name) => /^languageFocus.*\.ts$/.test(name));
  const reviewPath = path.join(dir, 'languageReview.ts');
  const modules = allNames
    .sort((a, b) => languageFocusOrder(a) - languageFocusOrder(b) || a.localeCompare(b))
    .map((name) => {
      const parsed = splitImports(read(path.join(dir, name)));
      const lfImports = parsed.imports.filter((item) => /^\.\/languageFocus/.test(item.source));
      const externalImports = parsed.imports.filter((item) => !/^\.\/languageFocus/.test(item.source));
      return { name, body: parsed.body, lfImports, externalImports };
    });

  if (exists(reviewPath)) {
    const parsed = splitImports(read(reviewPath));
    modules.push({
      name: 'languageReview.ts',
      body: parsed.body,
      lfImports: parsed.imports.filter((item) => /^\.\/languageFocus/.test(item.source)),
      externalImports: parsed.imports.filter((item) => !/^\.\/languageFocus/.test(item.source)),
      forceGroup: 2,
    });
  }

  const regular = modules.filter((module) => !module.forceGroup);
  const groups = partitionModules(regular);
  for (const module of modules.filter((item) => item.forceGroup)) groups[2].push(module);

  const targetNames = ['languageFocus.ts', 'languageFocus2.ts', 'languageFocus3.ts'];
  const moduleGroup = new Map();
  groups.forEach((groupModules, groupIndex) => groupModules.forEach((module) => moduleGroup.set(module.name, groupIndex)));

  const exportMap = new Map();
  for (const module of modules) {
    const groupIndex = moduleGroup.get(module.name);
    if (groupIndex == null) throw new Error(`No target group for ${module.name} in ${rel(dir)}`);
    for (const name of exportedNames(module.body)) {
      if (exportMap.has(name)) throw new Error(`Duplicate language-focus export ${name} in ${rel(dir)}`);
      exportMap.set(name, groupIndex);
    }
  }

  for (let groupIndex = 0; groupIndex < 3; groupIndex += 1) {
    const groupModules = groups[groupIndex];
    const imports = [];
    const crossByTarget = new Map();

    for (const module of groupModules) {
      imports.push(...module.externalImports);
      for (const item of module.lfImports) {
        const specs = parseNamedSpecifiers(item.clause);
        if (!specs.length) throw new Error(`Unsupported language-focus import in ${module.name}: ${item.statement}`);
        for (const spec of specs) {
          const targetGroup = exportMap.get(spec.imported);
          if (targetGroup == null) throw new Error(`Imported language-focus symbol ${spec.imported} has no preserved export in ${rel(dir)}`);
          if (targetGroup === groupIndex) continue;
          const list = crossByTarget.get(targetGroup) || [];
          if (!list.some((existing) => existing.local === spec.local)) list.push(spec);
          crossByTarget.set(targetGroup, list);
        }
      }
    }

    for (const [targetGroup, specs] of [...crossByTarget.entries()].sort((a, b) => a[0] - b[0])) {
      const statement = `import { ${specs.map((spec) => spec.raw).join(', ')} } from './${targetNames[targetGroup].replace(/\.ts$/, '')}';`;
      imports.push({ statement, clause: `{ ${specs.map((spec) => spec.raw).join(', ')} }`, source: `./${targetNames[targetGroup].replace(/\.ts$/, '')}` });
    }

    const cleanImports = dedupeImports(imports);
    const processed = makeBodiesShareScope(groupModules, importLocalNames(cleanImports));
    const content = [
      ...cleanImports.map((item) => item.statement),
      '',
      ...processed.flatMap((module) => [`// Consolidated source: ${module.name}`, module.body, '']),
    ].join('\n');
    write(path.join(dir, targetNames[groupIndex]), content || `// Consolidated language-focus slot ${groupIndex + 1}.`);
  }

  const targetSet = new Set(targetNames);
  const removals = allNames
    .filter((name) => !targetSet.has(name))
    .map((name) => path.join(dir, name));
  if (exists(reviewPath)) removals.push(reviewPath);
  return { removals, exportMap, targetNames };
}

function rewriteIndex(bookDir, languageMaps) {
  const indexPath = path.join(bookDir, 'index.ts');
  let text = read(indexPath);
  text = text.replace(importPattern, (full, prefix, statement) => {
    const trimmed = statement.trim();
    const match = trimmed.match(/^import\s+([\s\S]*?)\s+from\s+['"]([^'"]+)['"];$/);
    if (!match) return full;
    const clause = match[1].trim();
    const source = match[2];
    const langMatch = source.match(/^\.\/(en|ar)\/(.+)$/);
    if (!langMatch) return full;
    const [, lang, base] = langMatch;

    if (base === 'exerciseSystem' || base === 'knowledgeCheck') {
      return `${prefix || ''}import ${clause} from './${lang}/exercises';\n`;
    }

    if (base === 'languageReview' || base.startsWith('languageFocus')) {
      const specs = parseNamedSpecifiers(clause);
      if (!specs.length) throw new Error(`Unsupported index language-focus import: ${trimmed}`);
      const grouped = new Map();
      for (const spec of specs) {
        const groupIndex = languageMaps[lang].exportMap.get(spec.imported);
        if (groupIndex == null) throw new Error(`Index imports ${spec.imported}, but consolidated language-focus files do not export it in ${rel(indexPath)}`);
        const list = grouped.get(groupIndex) || [];
        list.push(spec);
        grouped.set(groupIndex, list);
      }
      const rebuilt = [...grouped.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([groupIndex, groupSpecs]) => {
          const target = languageMaps[lang].targetNames[groupIndex].replace(/\.ts$/, '');
          return `import { ${groupSpecs.map((spec) => spec.raw).join(', ')} } from './${lang}/${target}';`;
        })
        .join('\n');
      return `${prefix || ''}${rebuilt}\n`;
    }

    return full;
  });

  write(indexPath, text);
}

function collectStringIds(text) {
  const ids = new Set();
  const re = /\bid\s*:\s*(['"])([^'"\n]+)\1/g;
  let match;
  while ((match = re.exec(text))) ids.add(match[2]);
  return ids;
}

function unionSets(sets) {
  const result = new Set();
  for (const set of sets) for (const item of set) result.add(item);
  return result;
}

function verifyPreservation(beforeFiles, dir) {
  const beforeExports = unionSets(beforeFiles.map((file) => exportedNames(file.content)));
  const beforeIds = unionSets(beforeFiles.map((file) => collectStringIds(file.content)));
  const afterNames = fs.readdirSync(dir).filter((name) => name.endsWith('.ts'));
  const afterContents = afterNames.map((name) => read(path.join(dir, name)));
  const afterExports = unionSets(afterContents.map(exportedNames));
  const afterIds = unionSets(afterContents.map(collectStringIds));

  for (const name of beforeExports) {
    if (!afterExports.has(name)) throw new Error(`Export lost during consolidation in ${rel(dir)}: ${name}`);
  }
  for (const id of beforeIds) {
    if (!afterIds.has(id)) throw new Error(`Authored id lost during consolidation in ${rel(dir)}: ${id}`);
  }
}

function verifyFinalShape(dir) {
  const tsFiles = fs.readdirSync(dir).filter((name) => name.endsWith('.ts')).sort();
  const expected = [...ALLOWED].sort();
  if (JSON.stringify(tsFiles) !== JSON.stringify(expected)) {
    throw new Error(`Final file shape mismatch in ${rel(dir)}. Found: ${tsFiles.join(', ')}`);
  }
  for (const file of tsFiles) {
    const text = read(path.join(dir, file));
    if (/from\s+['"]\.\/(?:storySource|lockedStorySource|exerciseSystem|knowledgeCheck|languageReview|languageFocusPart4|languageFocusChapter\d+)['"]/.test(text)) {
      throw new Error(`Removed-file import remains in ${rel(path.join(dir, file))}`);
    }
  }
}

// Preflight every target before touching any file.
for (const book of BOOKS) {
  const bookDir = path.join(DATA_ROOT, book, 'b2');
  if (!exists(path.join(bookDir, 'index.ts'))) throw new Error(`Missing ${rel(path.join(bookDir, 'index.ts'))}`);
  for (const lang of LANGS) preflightLanguageDir(path.join(bookDir, lang));
}

for (const book of BOOKS) {
  const bookDir = path.join(DATA_ROOT, book, 'b2');
  const languageMaps = {};
  console.log(`\n=== ${book} B2 ===`);

  for (const lang of LANGS) {
    const dir = path.join(bookDir, lang);
    const beforeNames = fs.readdirSync(dir).filter((name) => name.endsWith('.ts'));
    const beforeFiles = beforeNames.map((name) => ({ name, content: read(path.join(dir, name)) }));
    const removals = [];

    removals.push(...mergePages(dir));
    removals.push(...mergeExerciseExtras(dir));
    const lf = consolidateLanguageFocus(dir);
    removals.push(...lf.removals);
    languageMaps[lang] = lf;

    for (const file of [...new Set(removals)]) {
      if (exists(file)) fs.unlinkSync(file);
    }

    verifyFinalShape(dir);
    verifyPreservation(beforeFiles, dir);
    console.log(`${lang}: ${beforeNames.length} -> 7 language files`);
  }

  rewriteIndex(bookDir, languageMaps);
  const indexText = read(path.join(bookDir, 'index.ts'));
  if (/\/(?:exerciseSystem|knowledgeCheck|languageReview|languageFocusPart4|languageFocusChapter\d+)['"]/.test(indexText)) {
    throw new Error(`Legacy import remains in ${rel(path.join(bookDir, 'index.ts'))}`);
  }
  console.log(`index.ts rewired for ${book} B2`);
}

console.log('\nB2 consolidation completed in working tree. Run typecheck/build before committing.');
