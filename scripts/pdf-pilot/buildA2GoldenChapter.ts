import { copyFile, cp, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import './buildA2ChapterSample.ts';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SOURCE = path.join(ROOT, 'artifacts/a2-chapter-sample');
const TARGET = path.join(ROOT, 'artifacts/a2-golden-chapter');

await mkdir(TARGET, { recursive: true });
await cp(SOURCE, TARGET, { recursive: true });
await copyFile(path.join(SOURCE, 'adam-a2-en.html'), path.join(TARGET, 'adam-a2-en-golden.html'));
await copyFile(path.join(SOURCE, 'adam-a2-ar.html'), path.join(TARGET, 'adam-a2-ar-golden.html'));
