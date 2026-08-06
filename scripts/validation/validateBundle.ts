import { gzipSync } from 'node:zlib';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

interface ManifestEntry {
  file: string;
  isEntry?: boolean;
}

const manifestPath = resolve('dist/.vite/manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as Record<string, ManifestEntry>;
const entries = Object.values(manifest).filter(entry => entry.isEntry);

if (entries.length === 0) {
  throw new Error('No initial JavaScript entry was found in the Vite manifest.');
}

const rawLimit = Number(process.env.INITIAL_JS_RAW_LIMIT_KB ?? 950) * 1024;
const gzipLimit = Number(process.env.INITIAL_JS_GZIP_LIMIT_KB ?? 300) * 1024;

let totalRaw = 0;
let totalGzip = 0;

for (const entry of entries) {
  const bytes = readFileSync(resolve('dist', entry.file));
  totalRaw += bytes.byteLength;
  totalGzip += gzipSync(bytes).byteLength;
}

const formatKb = (bytes: number): string => `${(bytes / 1024).toFixed(1)} kB`;
console.log(`Initial JavaScript: ${formatKb(totalRaw)} raw / ${formatKb(totalGzip)} gzip.`);
console.log(`Budget: ${formatKb(rawLimit)} raw / ${formatKb(gzipLimit)} gzip.`);

if (totalRaw > rawLimit || totalGzip > gzipLimit) {
  throw new Error('Initial JavaScript bundle exceeds the configured performance budget.');
}
