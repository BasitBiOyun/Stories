import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const port = Number(process.env.PORT || 8080);
const root = join(process.cwd(), 'dist');
const gitSha = process.env.APP_GIT_SHA || 'unknown';
const gitRef = process.env.APP_GIT_REF || 'unknown';
const revision = process.env.K_REVISION || 'unknown';

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
};

const sendFile = (res, filePath) => {
  const ext = extname(filePath).toLowerCase();
  res.writeHead(200, {
    'Content-Type': contentTypes[ext] || 'application/octet-stream',
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    'X-Content-Type-Options': 'nosniff',
    'X-Stories-Git-Sha': gitSha,
    'X-Stories-Revision': revision,
  });
  createReadStream(filePath).pipe(res);
};

const sendMissingAsset = (res) => {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'X-Stories-Git-Sha': gitSha,
    'X-Stories-Revision': revision,
  });
  res.end('Asset not found');
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

  if (urlPath === '/__version') {
    const payload = JSON.stringify({ gitSha, gitRef, revision });
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Stories-Git-Sha': gitSha,
      'X-Stories-Revision': revision,
    });
    res.end(payload);
    return;
  }

  const safePath = normalize(urlPath).replace(/^([.][.][/\\])+/, '');
  let filePath = join(root, safePath === '/' ? 'index.html' : safePath);

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    return sendFile(res, filePath);
  }

  // Never serve the SPA HTML fallback for a missing hashed Vite asset. A stale
  // browser bundle may request a chunk from the previous Cloud Run revision;
  // returning HTML for that request turns a recoverable 404 into a JS module
  // MIME/fetch failure. Let the client detect the missing chunk and reload.
  if (urlPath.startsWith('/assets/')) {
    return sendMissingAsset(res);
  }

  if (urlPath.startsWith('/pdfs/')) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end('PDF not found');
    return;
  }

  filePath = join(root, 'index.html');
  if (existsSync(filePath)) {
    return sendFile(res, filePath);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Stories app listening on port ${port} (${gitRef}@${gitSha}, revision ${revision})`);
});
