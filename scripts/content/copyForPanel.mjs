// The content panel reads the book files over the network, so they are copied next to it.
// The server only sends /content/ to the preview link or to a signed-in team member.
import { cpSync, mkdirSync } from 'node:fs';

mkdirSync('dist/content', { recursive: true });
cpSync('src/content/books', 'dist/content', { recursive: true });
console.log('[panel] book files copied to dist/content');
