import http from 'node:http';
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { brotliCompressSync, gzipSync, constants as zlibConstants } from 'node:zlib';

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

// Text files go out compressed (about a quarter of their size), which matters most on slow
// school networks. Files never change inside one revision, so each is compressed once and kept.
const compressible = new Set(['.html', '.js', '.css', '.json', '.svg', '.ttf']);
const compressedCache = new Map();
const compressed = (filePath, encoding) => {
  const key = `${encoding}:${filePath}`;
  let body = compressedCache.get(key);
  if (!body) {
    const raw = readFileSync(filePath);
    body = encoding === 'br'
      ? brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 6, [zlibConstants.BROTLI_PARAM_SIZE_HINT]: raw.length } })
      : gzipSync(raw, { level: 6 });
    compressedCache.set(key, body);
  }
  return body;
};

const sendFile = (req, res, filePath) => {
  const ext = extname(filePath).toLowerCase();
  const headers = {
    'Content-Type': contentTypes[ext] || 'application/octet-stream',
    // PDFs keep their names when they are rebuilt, so they are only cached for an hour.
    'Cache-Control': ext === '.html' ? 'no-cache' : ext === '.pdf' ? 'public, max-age=3600' : 'public, max-age=31536000, immutable',
    'X-Content-Type-Options': 'nosniff',
    'X-Stories-Git-Sha': gitSha,
    'X-Stories-Revision': revision,
  };
  if (compressible.has(ext)) {
    const accepted = String(req.headers['accept-encoding'] || '');
    const encoding = /\bbr\b/.test(accepted) ? 'br' : /\bgzip\b/.test(accepted) ? 'gzip' : null;
    headers.Vary = 'Accept-Encoding';
    if (encoding) {
      const body = compressed(filePath, encoding);
      res.writeHead(200, { ...headers, 'Content-Encoding': encoding, 'Content-Length': body.length });
      res.end(req.method === 'HEAD' ? undefined : body);
      return;
    }
  }
  res.writeHead(200, headers);
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

// Word timings for the reader's "follow along" marker live next to the chapter audio in
// Firebase Storage. Storage downloads carry no CORS header, so the app reads them here,
// on its own origin.
const storageBucket = 'gen-lang-client-0373200489.firebasestorage.app';
const sendAudioTimings = async (res, storagePath) => {
  try {
    const upstream = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodeURIComponent(storagePath)}?alt=media`,
    );
    if (!upstream.ok) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=60' });
      res.end('Timings not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' });
    res.end(Buffer.from(await upstream.arrayBuffer()));
  } catch {
    res.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end('Timings unavailable');
  }
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

  if (urlPath.startsWith('/audio-timings/')) {
    const storagePath = urlPath.slice('/audio-timings/'.length);
    if (!storagePath.endsWith('.timings.json') || storagePath.split('/').includes('..')) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    sendAudioTimings(res, storagePath);
    return;
  }

  const safePath = normalize(urlPath).replace(/^([.][.][/\\])+/, '');
  let filePath = join(root, safePath === '/' ? 'index.html' : safePath);

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    return sendFile(req, res, filePath);
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
    return sendFile(req, res, filePath);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Stories app listening on port ${port} (${gitRef}@${gitSha}, revision ${revision})`);
});
