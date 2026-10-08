import { createVerify } from 'node:crypto';

/**
 * The team side of the content panel.
 *
 * Who may work in the panel is a short list kept outside the repository, in the PANEL_TEAM
 * environment variable: {"name@example.com": "admin", "other@example.com": "editor", ...}.
 * People sign in with their Google account through Firebase; the server checks the signed
 * Firebase ID token itself, so nobody can claim an address they do not own.
 *
 * Nothing is written to the live app directly. A saved change becomes a proposal: a branch and a
 * pull request on GitHub, named after the person who made it, which runs the same tests and rule
 * checks as any other change. Only an admin approves (merges) or rejects (closes) a proposal, so
 * GitHub keeps the full record of who changed what and who published it.
 */

export const ROLES = {
  admin: { label: 'Admin', propose: 'all', approve: true },
  editor: { label: 'Editor', propose: 'all', approve: false },
  teacher: { label: 'Teacher (story text)', propose: 'all', approve: false },
  translator: { label: 'Translator', propose: 'translations', approve: false },
  viewer: { label: 'Read only', propose: 'none', approve: false },
};

const EDITION = /^[a-z][a-zA-Z]*-(a1|a2|b1|b2|c1)-([a-z]{2})$/;
const BRANCH_PREFIX = 'panel/';
const BODY_LIMIT = 8 * 1024 * 1024;

const readTeam = raw => {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    const team = new Map();
    for (const [email, role] of Object.entries(parsed)) {
      if (ROLES[role]) team.set(email.trim().toLowerCase(), role);
    }
    return team.size > 0 ? team : null;
  } catch {
    console.error('[Panel] PANEL_TEAM is not valid JSON; the team panel stays closed.');
    return null;
  }
};

export const mayPropose = (role, edition) => {
  const rule = ROLES[role]?.propose;
  if (rule === 'all') return true;
  if (rule === 'translations') return !edition.endsWith('-en');
  return false;
};

// --- Firebase ID token check ----------------------------------------------------------------

const CERTS_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
let certCache = { certs: null, until: 0 };

const fetchGoogleCerts = async () => {
  if (certCache.certs && Date.now() < certCache.until) return certCache.certs;
  const response = await fetch(CERTS_URL);
  if (!response.ok) throw new Error(`certificates answered ${response.status}`);
  const maxAge = Number(/max-age=(\d+)/.exec(response.headers.get('cache-control') || '')?.[1] || 3600);
  certCache = { certs: await response.json(), until: Date.now() + maxAge * 1000 };
  return certCache.certs;
};

const decodePart = part => JSON.parse(Buffer.from(part, 'base64url').toString('utf8'));

/** Returns the verified e-mail address in a Firebase ID token, or null. */
export const verifyFirebaseToken = async (token, projectId, getCerts = fetchGoogleCerts, now = Date.now()) => {
  const parts = String(token || '').split('.');
  if (parts.length !== 3) return null;
  let header;
  let claims;
  try {
    header = decodePart(parts[0]);
    claims = decodePart(parts[1]);
  } catch {
    return null;
  }
  if (header.alg !== 'RS256' || !header.kid) return null;
  const cert = (await getCerts())[header.kid];
  if (!cert) return null;
  const verifier = createVerify('RSA-SHA256');
  verifier.update(`${parts[0]}.${parts[1]}`);
  if (!verifier.verify(cert, Buffer.from(parts[2], 'base64url'))) return null;

  const seconds = Math.floor(now / 1000);
  if (claims.aud !== projectId) return null;
  if (claims.iss !== `https://securetoken.google.com/${projectId}`) return null;
  if (!claims.sub || typeof claims.exp !== 'number' || claims.exp <= seconds) return null;
  if (typeof claims.iat !== 'number' || claims.iat > seconds + 300) return null;
  if (!claims.email || claims.email_verified !== true) return null;
  return String(claims.email).toLowerCase();
};

// --- GitHub ---------------------------------------------------------------------------------

const github = (token, repo) => async (method, path, body) => {
  const response = await fetch(`https://api.github.com/repos/${repo}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'stories-content-panel',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const error = new Error(`GitHub ${method} ${path} answered ${response.status}: ${data?.message ?? ''}`);
    error.status = response.status;
    throw error;
  }
  return data;
};

// --- HTTP -----------------------------------------------------------------------------------

const sendJson = (res, status, payload) => {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(payload));
};

const readJsonBody = req =>
  new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', chunk => {
      size += chunk.length;
      if (size > BODY_LIMIT) {
        reject(new Error('too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch {
        reject(new Error('not JSON'));
      }
    });
    req.on('error', reject);
  });

const audit = (action, details) => console.log(JSON.stringify({ message: '[Panel] ' + action, ...details }));

/** The edition file must keep its shape; the full rule check runs in the proposal's tests. */
const checkEditionFile = (edition, file) => {
  const [, level, language] = EDITION.exec(edition);
  if (!file || typeof file !== 'object') return 'the file is empty';
  if (file.level?.toLowerCase() !== level || file.language !== language) return 'the file belongs to another edition';
  if (!Array.isArray(file.book?.pages) || file.book.pages.length === 0) return 'the book has no pages';
  return null;
};

export const createPanelApi = (env = process.env, deps = {}) => {
  const team = readTeam(env.PANEL_TEAM);
  const projectId = env.FIREBASE_PROJECT_ID || 'gen-lang-client-0373200489';
  const repo = env.PANEL_REPO || 'kitapkomisyonukonya/Stories';
  const baseBranch = env.PANEL_BASE_BRANCH || 'preview';
  const verify = deps.verify ?? (token => verifyFirebaseToken(token, projectId));
  const gh = deps.github ?? (env.PANEL_GITHUB_TOKEN ? github(env.PANEL_GITHUB_TOKEN, repo) : null);

  const enabled = Boolean(team);

  /** The signed-in team member for a request, or null. */
  const memberFor = async req => {
    if (!team) return null;
    const header = String(req.headers.authorization || '');
    if (!header.startsWith('Bearer ')) return null;
    const email = await verify(header.slice(7)).catch(() => null);
    if (!email || !team.has(email)) return null;
    return { email, role: team.get(email) };
  };

  const listProposals = async () => {
    const pulls = await gh('GET', `/pulls?state=open&base=${encodeURIComponent(baseBranch)}&per_page=50`);
    return pulls
      .filter(pull => pull.head?.ref?.startsWith(BRANCH_PREFIX))
      .map(pull => ({
        number: pull.number,
        title: pull.title,
        url: pull.html_url,
        branch: pull.head.ref,
        createdAt: pull.created_at,
        body: pull.body ?? '',
      }));
  };

  const propose = async (member, { edition, file, note }) => {
    const path = `src/content/books/${edition}.json`;
    const base = await gh('GET', `/git/ref/heads/${encodeURIComponent(baseBranch)}`);
    const current = await gh('GET', `/contents/${path}?ref=${encodeURIComponent(baseBranch)}`);
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\..*/, '').replace('T', '-');
    const branch = `${BRANCH_PREFIX}${edition}-${stamp}`;
    const summary =
      String(note || '')
        .trim()
        .slice(0, 200) || 'text changes';
    await gh('POST', '/git/refs', { ref: `refs/heads/${branch}`, sha: base.object.sha });
    await gh('PUT', `/contents/${path}`, {
      message: `Panel: ${edition}: ${summary}\n\nProposed in the content panel by ${member.email} (${ROLES[member.role].label}).`,
      content: Buffer.from(`${JSON.stringify(file, null, 1)}\n`).toString('base64'),
      sha: current.sha,
      branch,
    });
    const pull = await gh('POST', '/pulls', {
      title: `Panel: ${edition}: ${summary}`,
      head: branch,
      base: baseBranch,
      body: `Proposed in the content panel by **${member.email}** (${ROLES[member.role].label}).\n\n${summary}\n\nThe tests and the house-rule checks run on this proposal. An admin approves or rejects it in the panel.`,
    });
    return { number: pull.number, url: pull.html_url };
  };

  const decide = async (member, number, approve) => {
    const pull = await gh('GET', `/pulls/${number}`);
    if (pull.state !== 'open' || !pull.head?.ref?.startsWith(BRANCH_PREFIX) || pull.base?.ref !== baseBranch) {
      const error = new Error('not an open panel proposal');
      error.status = 404;
      throw error;
    }
    if (approve) {
      // A proposal goes live only when the same tests that guard every deploy have passed on it.
      const runs = await gh('GET', `/commits/${pull.head.sha}/check-runs?check_name=checks`);
      const run = runs.check_runs?.[0];
      if (!run || run.status !== 'completed' || run.conclusion !== 'success') {
        const error = new Error('checks not green');
        error.status = 409;
        error.reason =
          !run || run.status !== 'completed'
            ? 'The tests are still running on this proposal. Try again in a few minutes.'
            : 'The tests failed on this proposal, so it cannot be published. Open it on GitHub to see why.';
        throw error;
      }
      await gh('PUT', `/pulls/${number}/merge`, {
        merge_method: 'squash',
        commit_title: `${pull.title} (#${number})`,
        commit_message: `Approved in the content panel by ${member.email}.`,
      });
    } else {
      await gh('PATCH', `/pulls/${number}`, { state: 'closed' });
    }
    await gh('DELETE', `/git/refs/heads/${pull.head.ref}`).catch(() => undefined);
    return { number, url: pull.html_url };
  };

  /** Handles /panel-api/*. Returns true when the request was answered. */
  const handle = async (req, res, urlPath) => {
    if (!urlPath.startsWith('/panel-api/')) return false;
    if (!enabled) {
      sendJson(res, 404, { error: 'not found' });
      return true;
    }
    const route = urlPath.slice('/panel-api/'.length);

    if (route === 'config' && req.method === 'GET') {
      sendJson(res, 200, {
        roles: Object.fromEntries(Object.entries(ROLES).map(([key, role]) => [key, role.label])),
        proposals: Boolean(gh),
        baseBranch,
      });
      return true;
    }

    const member = await memberFor(req);
    if (!member) {
      sendJson(res, 401, { error: 'Sign in with an address on the team list.' });
      return true;
    }

    try {
      if (route === 'me' && req.method === 'GET') {
        sendJson(res, 200, {
          email: member.email,
          role: member.role,
          label: ROLES[member.role].label,
          approve: ROLES[member.role].approve,
        });
        return true;
      }
      if (!gh) {
        sendJson(res, 503, { error: 'Proposals are not switched on yet (PANEL_GITHUB_TOKEN is missing).' });
        return true;
      }
      if (route === 'proposals' && req.method === 'GET') {
        sendJson(res, 200, { proposals: await listProposals() });
        return true;
      }
      if (route === 'proposals' && req.method === 'POST') {
        const body = await readJsonBody(req);
        const edition = String(body.edition || '');
        if (!EDITION.test(edition)) {
          sendJson(res, 400, { error: 'Unknown book.' });
          return true;
        }
        if (!mayPropose(member.role, edition)) {
          sendJson(res, 403, { error: 'Your role cannot propose changes to this book.' });
          return true;
        }
        const problem = checkEditionFile(edition, body.file);
        if (problem) {
          sendJson(res, 400, { error: `The file was not accepted: ${problem}.` });
          return true;
        }
        const result = await propose(member, { edition, file: body.file, note: body.note });
        audit('proposal opened', { by: member.email, role: member.role, edition, pull: result.number });
        sendJson(res, 201, result);
        return true;
      }
      const decision = /^proposals\/(\d+)\/(approve|reject)$/.exec(route);
      if (decision && req.method === 'POST') {
        if (!ROLES[member.role].approve) {
          sendJson(res, 403, { error: 'Only an admin approves or rejects proposals.' });
          return true;
        }
        const approve = decision[2] === 'approve';
        const result = await decide(member, Number(decision[1]), approve);
        audit(approve ? 'proposal approved' : 'proposal rejected', { by: member.email, pull: result.number });
        sendJson(res, 200, result);
        return true;
      }
      sendJson(res, 404, { error: 'not found' });
    } catch (error) {
      console.error('[Panel]', error.message);
      const status = error.status === 404 ? 404 : error.status === 405 || error.status === 409 ? 409 : 502;
      sendJson(res, status, {
        error:
          error.reason ??
          (status === 409
            ? 'GitHub could not merge this proposal (it may conflict with a newer change).'
            : 'The request could not be completed.'),
      });
    }
    return true;
  };

  return { enabled, handle, memberFor };
};
