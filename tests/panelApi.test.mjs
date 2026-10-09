import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync, createSign } from 'node:crypto';
import { createPanelApi, revertChange, verifyFirebaseToken } from '../deploy/panelApi.mjs';
import { createFakeRepo, createFakeStorage } from '../deploy/panel/fakes.mjs';
import { readFileSync } from 'node:fs';

const PROJECT = 'test-project';
const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
const certs = async () => ({ key1: publicKey.export({ type: 'spki', format: 'pem' }) });
const now = Date.UTC(2026, 9, 8, 12);

const sign = (claims, header = { alg: 'RS256', kid: 'key1' }) => {
  const part = value => Buffer.from(JSON.stringify(value)).toString('base64url');
  const body = `${part(header)}.${part(claims)}`;
  return `${body}.${createSign('RSA-SHA256').update(body).sign(privateKey).toString('base64url')}`;
};
const claims = (extra = {}) => ({
  aud: PROJECT,
  iss: `https://securetoken.google.com/${PROJECT}`,
  sub: 'uid-1',
  iat: now / 1000 - 60,
  exp: now / 1000 + 3600,
  email: 'Editor@Example.com',
  email_verified: true,
  ...extra,
});
const check = token => verifyFirebaseToken(token, PROJECT, certs, now);

test('a valid Firebase token gives its verified address', async () => {
  assert.equal(await check(sign(claims())), 'editor@example.com');
});

test('tokens for another project, expired, unverified, unsigned or tampered are refused', async () => {
  assert.equal(await check(sign(claims({ aud: 'other' }))), null);
  assert.equal(await check(sign(claims({ iss: 'https://securetoken.google.com/other' }))), null);
  assert.equal(await check(sign(claims({ exp: now / 1000 - 1 }))), null);
  assert.equal(await check(sign(claims({ email_verified: false }))), null);
  assert.equal(await check(sign(claims(), { alg: 'none', kid: 'key1' })), null);
  assert.equal(await check(sign(claims(), { alg: 'RS256', kid: 'unknown' })), null);
  const [header, , signature] = sign(claims()).split('.');
  const forged = Buffer.from(JSON.stringify(claims({ email: 'admin@example.com' }))).toString('base64url');
  assert.equal(await check(`${header}.${forged}.${signature}`), null);
  assert.equal(await check('not-a-token'), null);
});

// --- the API, against the in-memory GitHub and Storage stand-ins ---------------------------

const TEAM = JSON.stringify({
  'admin@example.com': { role: 'admin', name: 'Ayşe Admin' },
  'editor@example.com': 'editor',
  'tr@example.com': 'translator',
  'view@example.com': 'viewer',
});
const BOOK = 'src/content/books/mecca-a2-en.json';
const BOOK_AR = 'src/content/books/mecca-a2-ar.json';
const onDisk = path => JSON.parse(readFileSync(path, 'utf8'));

const call = async (api, method, path, { as, body } = {}) => {
  const listeners = {};
  const req = {
    method,
    url: path,
    headers: as ? { authorization: `Bearer ${as}` } : {},
    on: (event, fn) => {
      listeners[event] = fn;
      if (event === 'end')
        queueMicrotask(() => {
          if (body !== undefined) listeners.data?.(Buffer.from(JSON.stringify(body)));
          listeners.end();
        });
    },
    destroy: () => {},
  };
  const result = {};
  const res = {
    writeHead: status => {
      result.status = status;
    },
    end: text => {
      result.body = text ? JSON.parse(text) : null;
    },
  };
  assert.equal(await api.handle(req, res, path.split('?')[0]), true);
  return result;
};

const setup = ({ env = { PANEL_TEAM: TEAM }, checks = () => 'passed', publicPaths = [] } = {}) => {
  const repo = createFakeRepo({ checks: sha => checks(sha) });
  const storage = createFakeStorage({ publicPaths });
  const api = createPanelApi(env, { verify: async token => token, repo, storage });
  return { api, repo, storage };
};

/** The book with its first chapter's title changed. */
const retitled = (title, path = BOOK) => {
  const book = onDisk(path);
  const chapter = book.book.pages.find(page => page.type === 'story');
  chapter.title = title;
  return book;
};

test('without a team list the panel API does not exist', async () => {
  const { api } = setup({ env: {} });
  assert.equal(api.enabled, false);
  assert.equal((await call(api, 'GET', '/panel-api/config')).status, 404);
});

test('only people on the team list are let in', async () => {
  const { api } = setup();
  assert.equal((await call(api, 'GET', '/panel-api/me')).status, 401);
  assert.equal((await call(api, 'GET', '/panel-api/me', { as: 'stranger@example.com' })).status, 401);
  const me = await call(api, 'GET', '/panel-api/me', { as: 'editor@example.com' });
  assert.deepEqual([me.status, me.body.role, me.body.approve], [200, 'editor', false]);
  const admin = await call(api, 'GET', '/panel-api/me', { as: 'admin@example.com' });
  assert.deepEqual([admin.body.name, admin.body.approve], ['Ayşe Admin', true]);
});

test('saving puts the change in the person’s own basket, not on the preview', async () => {
  const { api, repo } = setup();
  const saved = await call(api, 'POST', '/panel-api/basket/save', {
    as: 'editor@example.com',
    body: { files: [{ path: BOOK, json: retitled('A New Title') }], message: 'Bölüm 1 başlığı' },
  });
  assert.equal(saved.status, 200);
  assert.deepEqual(saved.body.files, [{ path: BOOK, status: 'modified' }]);
  assert.ok(saved.body.number, 'a pull request holds the basket');
  assert.match(saved.body.branch, /^panel\/sepet-[a-f0-9]{12}$/);
  // The editor reads their own version; the preview and other people still see the old one.
  const mine = await call(api, 'GET', `/panel-api/file?path=${encodeURIComponent(BOOK)}`, { as: 'editor@example.com' });
  assert.equal(mine.body.from, 'basket');
  assert.match(mine.body.text, /A New Title/);
  assert.doesNotMatch(await repo.readFile('preview', BOOK), /A New Title/);
  const other = await call(api, 'GET', `/panel-api/file?path=${encodeURIComponent(BOOK)}`, { as: 'admin@example.com' });
  assert.equal(other.body.from, 'preview');
  // The file keeps the repository's own format (one-space indent, final newline).
  const text = await repo.readFile(saved.body.branch, BOOK);
  assert.ok(text.startsWith('{\n "') && text.endsWith('}\n'));
  // A second save adds to the same basket.
  const again = await call(api, 'POST', '/panel-api/basket/save', {
    as: 'editor@example.com',
    body: { files: [{ path: BOOK, json: retitled('Another Title') }], message: 'yine' },
  });
  assert.equal(again.body.number, saved.body.number);
  assert.equal(again.body.commits.length, 2);
});

test('roles limit what may be saved, and broken or foreign files are refused', async () => {
  const { api } = setup();
  const save = (as, path, json) => call(api, 'POST', '/panel-api/basket/save', { as, body: { files: [{ path, json }], message: 'x' } });
  assert.equal((await save('view@example.com', BOOK, retitled('x'))).status, 403);
  assert.equal((await save('tr@example.com', BOOK, retitled('x'))).status, 403);
  assert.equal((await save('tr@example.com', BOOK_AR, retitled('عنوان', BOOK_AR))).status, 200);
  assert.equal((await save('editor@example.com', '../../etc/passwd', {})).status, 400);
  assert.equal((await save('editor@example.com', 'deploy/server.mjs', {})).status, 400);
  assert.equal((await save('editor@example.com', 'src/content/books/mecca-b1-en.json', retitled('x'))).status, 400);
  const empty = { ...onDisk(BOOK), book: { pages: [] } };
  assert.equal((await save('editor@example.com', BOOK, empty)).status, 400);
  const tts = onDisk('tts/requests.json');
  const doubled = { ...tts, requests: [...tts.requests, tts.requests[0]] };
  assert.equal((await save('editor@example.com', 'tts/requests.json', doubled)).status, 400);
});

test('only an admin publishes, and only after the tests passed', async () => {
  let state = 'running';
  const { api, repo } = setup({ checks: () => state });
  await call(api, 'POST', '/panel-api/basket/save', {
    as: 'editor@example.com',
    body: { files: [{ path: BOOK, json: retitled('Published Title') }], message: 'Bölüm 1 başlığı' },
  });
  const { body: basket } = await call(api, 'GET', '/panel-api/basket', { as: 'editor@example.com' });
  const owner = basket.branch.split('-').pop();
  assert.equal((await call(api, 'POST', `/panel-api/baskets/${owner}/publish`, { as: 'editor@example.com', body: {} })).status, 403);
  const running = await call(api, 'POST', `/panel-api/baskets/${owner}/publish`, { as: 'admin@example.com', body: {} });
  assert.equal(running.status, 409);
  assert.match(running.body.error, /Testler/);
  state = 'failed';
  assert.equal((await call(api, 'POST', `/panel-api/baskets/${owner}/publish`, { as: 'admin@example.com', body: {} })).status, 409);
  assert.doesNotMatch(await repo.readFile('preview', BOOK), /Published Title/);
  state = 'passed';
  const done = await call(api, 'POST', `/panel-api/baskets/${owner}/publish`, { as: 'admin@example.com', body: {} });
  assert.equal(done.status, 200);
  assert.match(await repo.readFile('preview', BOOK), /Published Title/);
  // One commit on the preview for the whole basket, named after what changed and who approved it.
  const history = await call(api, 'GET', '/panel-api/history', { as: 'view@example.com' });
  assert.equal(history.body.commits.length, 1);
  assert.match(history.body.commits[0].message, /Bölüm 1 başlığı/);
  assert.match(history.body.commits[0].message, /Ayşe Admin onayladı/);
  assert.equal((await call(api, 'GET', '/panel-api/baskets', { as: 'admin@example.com' })).body.baskets.length, 0);
});

test('a basket sent back is closed and its owner sees why', async () => {
  const { api } = setup();
  await call(api, 'POST', '/panel-api/basket/save', { as: 'editor@example.com', body: { files: [{ path: BOOK, json: retitled('Nope') }], message: 'x' } });
  const { body: basket } = await call(api, 'GET', '/panel-api/basket', { as: 'editor@example.com' });
  const owner = basket.branch.split('-').pop();
  assert.equal((await call(api, 'POST', `/panel-api/baskets/${owner}/reject`, { as: 'editor@example.com', body: { reason: 'x' } })).status, 403);
  assert.equal((await call(api, 'POST', `/panel-api/baskets/${owner}/reject`, { as: 'admin@example.com', body: { reason: 'Yanlış bölüm' } })).status, 200);
  const after = await call(api, 'GET', '/panel-api/basket', { as: 'editor@example.com' });
  assert.equal(after.body.files.length, 0);
  assert.equal(after.body.rejected.reason, 'Yanlış bölüm');
});

test('pictures wait in the basket and replace the book’s file only when published', async () => {
  const { api, storage } = setup();
  const target = 'Mecca/a2/images/chapter 1.png';
  await storage.upload(target, Buffer.from('old'), 'image/png');
  const oldToken = storage.objects.get(target).tokens[0];
  const refused = await call(api, 'POST', '/panel-api/media/upload', {
    as: 'editor@example.com',
    body: { name: 'x.png', contentType: 'image/png', data: Buffer.from('new').toString('base64'), target: 'panel-state/team.json' },
  });
  assert.equal(refused.status, 400);
  const uploaded = await call(api, 'POST', '/panel-api/media/upload', {
    as: 'editor@example.com',
    body: { name: 'yeni.png', contentType: 'image/png', data: Buffer.from('new').toString('base64'), target, label: 'resim', edition: 'mecca-a2-en', chapter: 1 },
  });
  assert.equal(uploaded.status, 200);
  assert.equal(storage.objects.get(target).body.toString(), 'old', 'nothing changes before publishing');
  const { body: basket } = await call(api, 'GET', '/panel-api/basket', { as: 'editor@example.com' });
  const owner = basket.branch.split('-').pop();
  assert.equal((await call(api, 'POST', `/panel-api/baskets/${owner}/publish`, { as: 'admin@example.com', body: {} })).status, 200);
  const replaced = storage.objects.get(target);
  assert.equal(replaced.body.toString(), 'new');
  assert.ok(replaced.tokens.includes(oldToken), 'old addresses keep working');
  assert.equal([...storage.objects.keys()].filter(path => path.startsWith('panel-uploads/')).length, 0);
});

test('admins manage the team in private storage; founders stay', async () => {
  const { api } = setup();
  const add = (as, body) => call(api, 'POST', '/panel-api/team', { as, body });
  assert.equal((await add('editor@example.com', { email: 'new@example.com', role: 'teacher' })).status, 403);
  assert.equal((await add('admin@example.com', { email: 'not-an-email', role: 'teacher' })).status, 400);
  assert.equal((await add('admin@example.com', { email: 'New@Example.com', name: 'Yeni Hoca', role: 'teacher' })).status, 200);
  const me = await call(api, 'GET', '/panel-api/me', { as: 'new@example.com' });
  assert.deepEqual([me.status, me.body.role, me.body.name], [200, 'teacher', 'Yeni Hoca']);
  assert.equal((await add('admin@example.com', { email: 'admin@example.com', role: 'viewer' })).status, 400);
  assert.equal((await call(api, 'POST', '/panel-api/team/remove', { as: 'admin@example.com', body: { email: 'admin@example.com' } })).status, 400);
  assert.equal((await call(api, 'POST', '/panel-api/team/remove', { as: 'admin@example.com', body: { email: 'new@example.com' } })).status, 200);
  assert.equal((await call(api, 'GET', '/panel-api/me', { as: 'new@example.com' })).status, 401);
});

test('the team list is not written while Storage would show it to anyone', async () => {
  const { api, storage } = setup({ publicPaths: ['panel-state/'] });
  const result = await call(api, 'POST', '/panel-api/team', { as: 'admin@example.com', body: { email: 'new@example.com', role: 'teacher' } });
  assert.equal(result.status, 409);
  assert.equal(storage.objects.size, 0);
});

test('undoing an old change keeps what was changed after it', () => {
  const before = { a: 'one', b: 'two', list: ['x', 'y'] };
  const after = { a: 'ONE', b: 'two', list: ['x', 'Y'] };
  const now = { a: 'ONE', b: 'TWO later', list: ['x', 'Y'], c: 'new' };
  assert.deepEqual(revertChange(before, after, now), { value: { a: 'one', b: 'TWO later', list: ['x', 'y'], c: 'new' }, conflicts: 0 });
  const changedAgain = { ...now, a: 'One, edited again' };
  assert.deepEqual(revertChange(before, after, changedAgain).conflicts, 1);
  assert.equal(revertChange(before, after, changedAgain).value.a, 'One, edited again');
});

test('a published change can be undone through a basket', async () => {
  const { api, repo } = setup();
  await call(api, 'POST', '/panel-api/basket/save', { as: 'editor@example.com', body: { files: [{ path: BOOK, json: retitled('Mistake') }], message: 'x' } });
  const { body: basket } = await call(api, 'GET', '/panel-api/basket', { as: 'editor@example.com' });
  await call(api, 'POST', `/panel-api/baskets/${basket.branch.split('-').pop()}/publish`, { as: 'admin@example.com', body: {} });
  const [commit] = (await call(api, 'GET', '/panel-api/history', { as: 'editor@example.com' })).body.commits;
  const undone = await call(api, 'POST', `/panel-api/history/${commit.sha}/undo`, { as: 'editor@example.com', body: {} });
  assert.equal(undone.status, 200);
  assert.equal(undone.body.conflicts, 0);
  assert.equal(await repo.readFile(undone.body.branch, BOOK), readFileSync(BOOK, 'utf8'));
});

test('a new book starts on its own branch with the text, never a Word file', async () => {
  const { api, repo } = setup();
  const text = `# Test\n\n## Chapter 1: One\n\n${'Word '.repeat(80).trim()}`;
  assert.equal((await call(api, 'POST', '/panel-api/new-book', { as: 'view@example.com', body: { storyId: 'test', level: 'A2', text } })).status, 403);
  assert.equal((await call(api, 'POST', '/panel-api/new-book', { as: 'editor@example.com', body: { storyId: 'test', level: 'A2', text: 'short' } })).status, 400);
  const started = await call(api, 'POST', '/panel-api/new-book', { as: 'editor@example.com', body: { storyId: 'testBook', level: 'A2', text, title: 'Test', brief: 'not' } });
  assert.equal(started.status, 200);
  assert.match(started.body.branch, /^panel\/yeni-kitap-testBook-a2-/);
  assert.equal(await repo.readFile(started.body.branch, 'story-intake/panel/testBook-a2/hikaye.md'), `${text}\n`);
  assert.equal(await repo.readFile(started.body.branch, 'story-intake/panel/testBook-a2/hikaye.docx'), null);
  // The push of the text starts the writer on that branch.
  assert.deepEqual(repo.dispatched.map(run => run.branch), [started.body.branch]);

  // Asking for a change adds a request file to the same branch, which starts the writer again.
  const asked = await call(api, 'POST', `/panel-api/new-book/${started.body.number}/ask`, { as: 'editor@example.com', body: { text: 'Make the second question easier.' } });
  assert.equal(asked.status, 200);
  assert.equal(repo.dispatched.length, 2);
  const files = (await repo.compare('preview', started.body.branch)).files.map(file => file.path);
  assert.ok(files.some(path => /^story-intake\/panel\/testBook-a2\/istekler\/.+\.md$/.test(path)));

  // A book written by hand gets only its text: the writer does not start.
  const manual = await call(api, 'POST', '/panel-api/new-book', { as: 'editor@example.com', body: { storyId: 'handBook', level: 'B1', text, mode: 'manual' } });
  assert.equal(manual.status, 200);
  assert.equal(repo.dispatched.length, 2);
});

test('a card picture is replaced through the basket and can be put back', async () => {
  const { api } = setup();
  const path = 'src/features/historical-entities/assets/pictures/mecca/abyssinia.webp';
  const webp = Buffer.concat([Buffer.from('RIFF'), Buffer.alloc(4), Buffer.from('WEBPVP8 '), Buffer.alloc(32, 7)]).toString('base64');
  const save = (as, base64) => call(api, 'POST', '/panel-api/basket/save', { as, body: { files: [{ path, base64 }], message: 'resim' } });
  assert.equal((await save('tr@example.com', webp)).status, 403);
  assert.equal((await save('editor@example.com', Buffer.from('<svg/>').toString('base64'))).status, 400);
  const saved = await save('editor@example.com', webp);
  assert.equal(saved.status, 200);
  assert.ok(saved.body.files.some(file => file.path === path));
  const mine = await call(api, 'GET', `/panel-api/file?path=${encodeURIComponent(path)}`, { as: 'editor@example.com' });
  assert.equal(mine.body.image, `data:image/webp;base64,${webp}`);
  const preview = await call(api, 'GET', `/panel-api/file?path=${encodeURIComponent(path)}&ref=base`, { as: 'editor@example.com' });
  assert.equal(preview.body.image, `data:image/webp;base64,${readFileSync(path).toString('base64')}`);
  const back = await call(api, 'POST', '/panel-api/basket/discard', { as: 'editor@example.com', body: { path } });
  assert.equal(back.status, 200);
  assert.ok(!back.body.files.some(file => file.path === path));
});
