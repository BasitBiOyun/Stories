import { randomUUID } from 'node:crypto';

/**
 * The panel's view of Firebase Storage, reached with the Cloud Run service's own Google account
 * (the metadata server hands out its access token), so no key is stored anywhere.
 *
 * Two kinds of things live here:
 * - private panel state (the team list) under panel-state/, which the Storage rules keep closed
 *   to browsers; the panel checks that before it writes anything personal there;
 * - pictures and recordings people upload. An upload first lands in panel-uploads/ and only
 *   replaces the book's own file when an admin approves the change.
 */

const METADATA_TOKEN_URL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token';
const GCS = 'https://storage.googleapis.com';

export const downloadUrl = (bucket, path, token) =>
  `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(path)}?alt=media&token=${token}`;

export const createCloudStorage = (bucket, fetchImpl = fetch) => {
  let cached = { token: null, until: 0 };
  const accessToken = async () => {
    if (cached.token && Date.now() < cached.until) return cached.token;
    const response = await fetchImpl(METADATA_TOKEN_URL, { headers: { 'Metadata-Flavor': 'Google' } });
    if (!response.ok) throw new Error(`the metadata server answered ${response.status}`);
    const data = await response.json();
    cached = { token: data.access_token, until: Date.now() + (Number(data.expires_in) - 60) * 1000 };
    return cached.token;
  };

  const call = async (method, url, { body, headers = {}, allow404 = false } = {}) => {
    const response = await fetchImpl(url, { method, headers: { Authorization: `Bearer ${await accessToken()}`, ...headers }, body });
    if (allow404 && response.status === 404) return null;
    if (!response.ok) {
      const error = new Error(`Storage ${method} answered ${response.status}: ${(await response.text()).slice(0, 200)}`);
      error.status = response.status;
      throw error;
    }
    return response;
  };

  const object = path => `${GCS}/storage/v1/b/${bucket}/o/${encodeURIComponent(path)}`;

  const uploadBody = async (path, body, contentType, tokens) => {
    const boundary = `panel-${randomUUID()}`;
    const meta = { name: path, contentType, metadata: { firebaseStorageDownloadTokens: tokens.join(',') } };
    const payload = Buffer.concat([
      Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n--${boundary}\r\nContent-Type: ${contentType}\r\n\r\n`),
      body,
      Buffer.from(`\r\n--${boundary}--`),
    ]);
    await call('POST', `${GCS}/upload/storage/v1/b/${bucket}/o?uploadType=multipart`, {
      body: payload,
      headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
    });
  };

  return {
    kind: 'cloud',
    readJson: async path => {
      const response = await call('GET', `${object(path)}?alt=media`, { allow404: true });
      return response ? response.json() : null;
    },
    writeJson: async (path, value) => {
      await uploadBody(path, Buffer.from(JSON.stringify(value, null, 1)), 'application/json', [randomUUID()]);
    },
    upload: async (path, body, contentType) => {
      const token = randomUUID();
      await uploadBody(path, body, contentType, [token]);
      return { path, url: downloadUrl(bucket, path, token) };
    },
    /**
     * Copies an approved upload over the book's own file. The file gets a new download token in
     * front of its old ones: the app (which asks Storage for the newest address) shows the new
     * picture at once, and an old address written in a book file keeps working.
     *
     * The old file's other notes stay too. The narration step (scripts/tts) writes the request it
     * made a recording from into them; keeping it means a recording someone uploaded by hand is not
     * read over again by the next build, only when someone asks for a new narration.
     */
    replace: async (from, to) => {
      const existing = await call('GET', object(to), { allow404: true });
      const oldMetadata = existing ? ((await existing.json()).metadata ?? {}) : {};
      const oldTokens = String(oldMetadata.firebaseStorageDownloadTokens ?? '').split(',').filter(Boolean);
      const source = await (await call('GET', object(from))).json();
      const token = randomUUID();
      let rewriteToken = '';
      do {
        const response = await call(
          'POST',
          `${object(from)}/rewriteTo/b/${bucket}/o/${encodeURIComponent(to)}${rewriteToken ? `?rewriteToken=${encodeURIComponent(rewriteToken)}` : ''}`,
          {
            body: JSON.stringify({ contentType: source.contentType, metadata: { ...oldMetadata, firebaseStorageDownloadTokens: [token, ...oldTokens].join(',') } }),
            headers: { 'Content-Type': 'application/json' },
          },
        );
        const result = await response.json();
        rewriteToken = result.done ? '' : result.rewriteToken;
      } while (rewriteToken);
      return { path: to, url: downloadUrl(bucket, to, token) };
    },
    list: async prefix => {
      const names = [];
      let pageToken = '';
      do {
        const response = await call('GET', `${GCS}/storage/v1/b/${bucket}/o?prefix=${encodeURIComponent(prefix)}&fields=items(name),nextPageToken${pageToken ? `&pageToken=${pageToken}` : ''}`);
        const data = await response.json();
        names.push(...(data.items ?? []).map(item => item.name));
        pageToken = data.nextPageToken ?? '';
      } while (pageToken);
      return names;
    },
    /**
     * The files directly inside a folder with the address the app would get for each (its first
     * download token), in one request instead of one per file.
     */
    listFolder: async folder => {
      const prefix = folder.endsWith('/') ? folder : `${folder}/`;
      const files = [];
      let pageToken = '';
      do {
        const response = await call(
          'GET',
          `${GCS}/storage/v1/b/${bucket}/o?prefix=${encodeURIComponent(prefix)}&delimiter=%2F&fields=items(name,metadata/firebaseStorageDownloadTokens),nextPageToken${pageToken ? `&pageToken=${pageToken}` : ''}`,
        );
        const data = await response.json();
        for (const item of data.items ?? []) {
          const token = String(item.metadata?.firebaseStorageDownloadTokens ?? '').split(',')[0];
          files.push({ path: item.name, name: item.name.slice(prefix.length), url: token ? downloadUrl(bucket, item.name, token) : '' });
        }
        pageToken = data.nextPageToken ?? '';
      } while (pageToken);
      return files;
    },
    remove: async path => {
      await call('DELETE', object(path), { allow404: true });
    },
    /**
     * True when a browser without any key cannot read the path: the Storage rules keep the folder
     * closed. Anything personal (the team list) is written only when this is true.
     */
    isPrivate: async path => {
      const response = await fetchImpl(`https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(path)}?alt=media`);
      return response.status === 403 || response.status === 401;
    },
  };
};
