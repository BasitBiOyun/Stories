// Lets the Node scripts (validators, audits) read the content JSON from disk.
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setContentReader } from '../../src/content/contentSource';

const contentDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../src/content');

setContentReader(async (kind, name) => JSON.parse(await readFile(`${contentDir}/${kind}/${name}.json`, 'utf8')));
