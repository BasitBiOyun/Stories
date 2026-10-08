import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync, createSign } from 'node:crypto';
import { createPanelApi, verifyFirebaseToken } from '../deploy/panelApi.mjs';

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

// --- the API, with a fake sign-in and a fake GitHub --------------------------------------

const TEAM = JSON.stringify({
  'admin@example.com': 'admin',
  'editor@example.com': 'editor',
  'tr@example.com': 'translator',
  'view@example.com': 'viewer',
});
const book = edition => {
  const [, level, language] = /-(a2|b1|b2)-(en|ar)$/.exec(edition);
  return {
    schema: 1,
    storyId: 'mecca',
    level: level.toUpperCase(),
    language,
    collection: 'x',
    book: { pages: [{ id: 'p1', type: 'chapter' }] },
  };
};

const fakeGithub = (checks = { status: 'completed', conclusion: 'success' }) => {
  const calls = [];
  const gh = async (method, path, body) => {
    calls.push({ method, path, body });
    if (path.startsWith('/git/ref/heads/')) return { object: { sha: 'base-sha' } };
    if (path.startsWith('/contents/') && method === 'GET') return { sha: 'file-sha' };
    if (path === '/pulls' && method === 'POST') return { number: 7, html_url: 'https://github.com/x/pull/7' };
    if (path.startsWith('/pulls?'))
      return [
        { number: 7, title: 'Panel: t', html_url: 'u', head: { ref: 'panel/mecca-a2-en-1' }, created_at: 'c', body: 'b' },
        { number: 8, title: 'other', head: { ref: 'feature' } },
      ];
    if (path === '/pulls/7' && method === 'GET')
      return {
        number: 7,
        state: 'open',
        title: 'Panel: t',
        html_url: 'u',
        head: { ref: 'panel/mecca-a2-en-1', sha: 'head-sha' },
        base: { ref: 'preview' },
      };
    if (path.startsWith('/commits/head-sha/check-runs')) return { check_runs: checks ? [checks] : [] };
    if (path === '/pulls/8' && method === 'GET') return { number: 8, state: 'open', head: { ref: 'feature' }, base: { ref: 'preview' } };
    return {};
  };
  return { gh, calls };
};

const call = async (api, method, path, { as, body } = {}) => {
  const listeners = {};
  const req = {
    method,
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
  assert.equal(await api.handle(req, res, path), true);
  return result;
};

const setup = (env = { PANEL_TEAM: TEAM }, checks) => {
  const github = fakeGithub(checks);
  const api = createPanelApi(env, { verify: async token => token, github: github.gh });
  return { api, calls: github.calls };
};

test('without a team list the panel API does not exist', async () => {
  const { api } = setup({});
  assert.equal(api.enabled, false);
  assert.equal((await call(api, 'GET', '/panel-api/config')).status, 404);
});

test('only people on the team list are let in', async () => {
  const { api } = setup();
  assert.equal((await call(api, 'GET', '/panel-api/me')).status, 401);
  assert.equal((await call(api, 'GET', '/panel-api/me', { as: 'stranger@example.com' })).status, 401);
  const me = await call(api, 'GET', '/panel-api/me', { as: 'editor@example.com' });
  assert.deepEqual([me.status, me.body.role, me.body.approve], [200, 'editor', false]);
});

test('an editor’s change becomes a pull request named after them', async () => {
  const { api, calls } = setup();
  const result = await call(api, 'POST', '/panel-api/proposals', {
    as: 'editor@example.com',
    body: { edition: 'mecca-a2-en', file: book('mecca-a2-en'), note: 'typo in chapter 2' },
  });
  assert.equal(result.status, 201);
  assert.equal(result.body.number, 7);
  const put = calls.find(entry => entry.method === 'PUT');
  assert.equal(put.path, '/contents/src/content/books/mecca-a2-en.json');
  assert.match(put.body.branch, /^panel\/mecca-a2-en-/);
  assert.match(put.body.message, /editor@example\.com/);
  assert.equal(calls.find(entry => entry.path === '/pulls' && entry.method === 'POST').body.base, 'preview');
});

test('roles limit what may be proposed', async () => {
  const { api } = setup();
  const send = (as, edition) => call(api, 'POST', '/panel-api/proposals', { as, body: { edition, file: book(edition) } });
  assert.equal((await send('view@example.com', 'mecca-a2-en')).status, 403);
  assert.equal((await send('tr@example.com', 'mecca-a2-en')).status, 403);
  assert.equal((await send('tr@example.com', 'mecca-a2-ar')).status, 201);
});

test('a file for another book or without pages is refused', async () => {
  const { api } = setup();
  const send = body => call(api, 'POST', '/panel-api/proposals', { as: 'editor@example.com', body });
  assert.equal((await send({ edition: '../../etc', file: book('mecca-a2-en') })).status, 400);
  assert.equal((await send({ edition: 'mecca-b1-en', file: book('mecca-a2-en') })).status, 400);
  assert.equal((await send({ edition: 'mecca-a2-en', file: { ...book('mecca-a2-en'), book: { pages: [] } } })).status, 400);
});

test('only an admin approves, and only panel proposals', async () => {
  const { api, calls } = setup();
  assert.equal((await call(api, 'POST', '/panel-api/proposals/7/approve', { as: 'editor@example.com' })).status, 403);
  assert.equal((await call(api, 'POST', '/panel-api/proposals/8/approve', { as: 'admin@example.com' })).status, 404);
  assert.equal((await call(api, 'POST', '/panel-api/proposals/7/approve', { as: 'admin@example.com' })).status, 200);
  const merge = calls.find(entry => entry.path === '/pulls/7/merge');
  assert.match(merge.body.commit_message, /admin@example\.com/);
  assert.equal((await call(api, 'POST', '/panel-api/proposals/7/reject', { as: 'admin@example.com' })).status, 200);
  assert.ok(calls.some(entry => entry.method === 'PATCH' && entry.body.state === 'closed'));
});

test('the proposal list shows only panel proposals', async () => {
  const { api } = setup();
  const list = await call(api, 'GET', '/panel-api/proposals', { as: 'view@example.com' });
  assert.deepEqual(
    list.body.proposals.map(item => item.number),
    [7],
  );
});

test('a proposal is not published while its tests are running or after they failed', async () => {
  for (const checks of [null, { status: 'in_progress' }, { status: 'completed', conclusion: 'failure' }]) {
    const { api, calls } = setup({ PANEL_TEAM: TEAM }, checks);
    const result = await call(api, 'POST', '/panel-api/proposals/7/approve', { as: 'admin@example.com' });
    assert.equal(result.status, 409);
    assert.match(result.body.error, /tests/);
    assert.ok(!calls.some(entry => entry.path === '/pulls/7/merge'));
  }
});
