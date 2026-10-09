import { createHash, randomUUID } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Stand-ins for GitHub and Storage, used by the unit tests and by the panel's local demo mode
 * (PANEL_DEMO=1, never on Cloud Run). They keep everything in memory and read the starting
 * files from the checkout on disk, so the whole panel can be tried without touching GitHub.
 */

const shaOf = text => createHash('sha1').update(String(text)).digest('hex');

export const createFakeRepo = ({ root = process.cwd(), base = 'preview', checks = () => 'passed' } = {}) => {
  // Every branch is an overlay over the files on disk: path -> text, or null for a removed file.
  const branches = new Map([[base, { overlay: new Map(), head: shaOf(`root:${base}`) }]]);
  const commits = new Map();
  const commitOrder = [];
  const pulls = new Map();
  const dispatched = [];
  let nextPull = 1;

  const diskFile = path => {
    const full = join(root, path);
    return existsSync(full) ? readFileSync(full, 'utf8') : null;
  };
  // A branch made from another one sees that branch's later changes in every file it has not
  // changed itself, as git does after a merge of the base.
  const fileOn = (branch, path) => {
    const entry = branches.get(branch);
    if (!entry) return null;
    if (entry.overlay.has(path)) return entry.overlay.get(path);
    return entry.parent && branches.has(entry.parent) ? fileOn(entry.parent, path) : diskFile(path);
  };
  const commitSha = sha => [...branches.entries()].find(([, entry]) => entry.head === sha)?.[0];

  const writeCommit = (branch, files, message) => {
    const entry = branches.get(branch);
    const parents = [entry.head];
    // A file given by blob (fileSha) goes back to the base branch's copy.
    const changes = files.map(file => ({ path: file.path, before: fileOn(branch, file.path), after: file.sha ? fileOn(base, file.path) : file.text }));
    for (const file of files) {
      if (file.sha) entry.overlay.delete(file.path);
      else entry.overlay.set(file.path, file.text);
    }
    const sha = shaOf(`${branch}:${message}:${Date.now()}:${Math.random()}`);
    entry.head = sha;
    commits.set(sha, { sha, message, date: new Date().toISOString(), parents, branch, changes });
    commitOrder.unshift(sha);
    // As on GitHub, a push of new-book request files starts the writer (.github/workflows/yeni-kitap.yml).
    const intake = files.filter(file => file.path.startsWith('story-intake/panel/'));
    const byHand = intake.some(file => /\/istek\.md$/.test(file.path) && /^- Yazan: elle/m.test(file.text ?? '')) && !intake.some(file => file.path.includes('/istekler/'));
    if (branch.startsWith('panel/yeni-kitap-') && intake.length > 0 && !byHand)
      dispatched.push({ workflow: 'yeni-kitap.yml', branch, at: new Date().toISOString() });
    return sha;
  };

  const changedPaths = (branch, against = base) => {
    const entry = branches.get(branch);
    return [...entry.overlay.keys()].filter(path => fileOn(branch, path) !== fileOn(against, path));
  };

  const repo = {
    kind: 'fake',
    dispatched,
    readFile: async (ref, path) => {
      const branch = branches.has(ref) ? ref : commitSha(ref);
      if (branch) return fileOn(branch, path);
      const commit = commits.get(ref);
      if (commit) {
        // A past commit: the file as that commit left it, else as on disk.
        for (const sha of commitOrder.slice(commitOrder.indexOf(ref))) {
          const change = commits.get(sha).changes.find(item => item.path === path);
          if (change && commits.get(sha).branch === base) return change.after;
        }
      }
      return diskFile(path);
    },
    branchSha: async branch => branches.get(branch)?.head ?? null,
    // Pictures: what a branch or commit holds, as base64 (a saved picture is kept as base64).
    readBase64: async (ref, path) => {
      const commit = commits.get(ref);
      const change = commit?.changes.find(item => item.path === path);
      if (change) return change.after;
      for (let name = branches.has(ref) ? ref : commitSha(ref); name && branches.has(name); name = branches.get(name).parent) {
        if (branches.get(name).overlay.has(path)) return branches.get(name).overlay.get(path);
      }
      const full = join(root, path);
      return existsSync(full) ? readFileSync(full).toString('base64') : null;
    },
    fileSha: async (ref, path) => (fileOn(branches.has(ref) ? ref : base, path) === null ? null : shaOf(`${ref}:${path}`)),
    createBranch: async (branch, fromSha) => {
      branches.set(branch, { overlay: new Map(), head: fromSha, parent: commitSha(fromSha) ?? base });
    },
    deleteBranch: async branch => {
      branches.delete(branch);
    },
    commitFiles: async (branch, files, message) => {
      if (!branches.has(branch)) throw Object.assign(new Error(`branch ${branch} is missing`), { status: 404 });
      return writeCommit(branch, files, message);
    },
    compare: async (from, head) => {
      if (!branches.has(head)) throw Object.assign(new Error('missing'), { status: 404 });
      const paths = changedPaths(head, from);
      return {
        aheadBy: paths.length,
        behindBy: 0,
        files: paths.map(path => ({ path, status: fileOn(from, path) === null ? 'added' : fileOn(head, path) === null ? 'removed' : 'modified' })),
        commits: commitOrder
          .map(sha => commits.get(sha))
          .filter(commit => commit.branch === head)
          .reverse()
          .map(commit => ({ sha: commit.sha, message: commit.message, date: commit.date })),
        mergeBase: branches.get(from)?.head ?? null,
      };
    },
    listPulls: async on =>
      [...pulls.values()]
        .filter(pull => pull.state === 'open' && pull.base === on)
        .map(pull => ({ ...pull, headSha: branches.get(pull.branch)?.head ?? '' })),
    getPull: async number => {
      const pull = pulls.get(number);
      return pull ? { ...pull, headSha: branches.get(pull.branch)?.head ?? '', mergeable: true } : null;
    },
    createPull: async ({ title, head, base: on, body }) => {
      const number = nextPull++;
      pulls.set(number, { number, title, body, branch: head, base: on, state: 'open', merged: false, draft: false, url: `https://github.com/fake/pull/${number}`, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
      return { number, url: `https://github.com/fake/pull/${number}` };
    },
    updatePull: async (number, fields) => {
      Object.assign(pulls.get(number), fields);
    },
    mergePull: async (number, { title, message }) => {
      const pull = pulls.get(number);
      const files = changedPaths(pull.branch).map(path => ({ path, text: fileOn(pull.branch, path) }));
      const sha = writeCommit(pull.base, files, `${title}\n\n${message}`);
      Object.assign(pull, { state: 'closed', merged: true });
      return sha;
    },
    updateBranch: async () => undefined,
    comments: [],
    comment: async (number, body) => {
      repo.comments.push({ number, body });
    },
    moveBranch: async (branch, sha) => {
      // A copy of the files as they are now (a release does not follow later changes).
      const from = commitSha(sha) ?? base;
      const overlay = new Map();
      for (const entry of [...branches.values()]) for (const path of entry.overlay.keys()) overlay.set(path, fileOn(from, path));
      branches.set(branch, { overlay, head: sha });
    },
    checkState: async sha => checks(sha),
    listCommits: async (branch, { path, perPage = 40 } = {}) =>
      commitOrder
        .map(sha => commits.get(sha))
        .filter(commit => commit.branch === branch && (!path || commit.changes.some(change => change.path.startsWith(path))))
        .slice(0, perPage)
        .map(({ sha, message, date, parents }) => ({ sha, message, date, parents })),
    getCommit: async sha => {
      const commit = commits.get(sha);
      if (!commit) return null;
      return { sha, message: commit.message, date: commit.date, parents: commit.parents, files: commit.changes.map(change => ({ path: change.path, status: 'modified' })) };
    },
    listWorkflowRuns: async () => dispatched.map((run, index) => ({ id: index + 1, branch: run.branch, status: 'in_progress', conclusion: null, createdAt: run.at, url: '' })).reverse(),
  };
  return repo;
};

export const createFakeStorage = ({ publicPaths = [] } = {}) => {
  const objects = new Map();
  return {
    kind: 'fake',
    objects,
    readJson: async path => (objects.has(path) ? JSON.parse(objects.get(path).body.toString('utf8')) : null),
    writeJson: async (path, value) => {
      objects.set(path, { body: Buffer.from(JSON.stringify(value)), contentType: 'application/json', tokens: [] });
    },
    upload: async (path, body, contentType) => {
      const token = randomUUID();
      objects.set(path, { body, contentType, tokens: [token] });
      return { path, url: `https://firebasestorage.googleapis.com/v0/b/fake/o/${encodeURIComponent(path)}?alt=media&token=${token}` };
    },
    replace: async (from, to) => {
      const source = objects.get(from);
      if (!source) throw Object.assign(new Error('missing staged file'), { status: 404 });
      const token = randomUUID();
      const old = objects.get(to)?.tokens ?? [];
      objects.set(to, { ...source, tokens: [token, ...old] });
      return { path: to, url: `https://firebasestorage.googleapis.com/v0/b/fake/o/${encodeURIComponent(to)}?alt=media&token=${token}` };
    },
    list: async prefix => [...objects.keys()].filter(path => path.startsWith(prefix)),
    listFolder: async folder => {
      const prefix = folder.endsWith('/') ? folder : `${folder}/`;
      return [...objects.keys()]
        .filter(path => path.startsWith(prefix) && !path.slice(prefix.length).includes('/'))
        .map(path => ({ path, name: path.slice(prefix.length), url: `https://firebasestorage.googleapis.com/v0/b/demo/o/${encodeURIComponent(path)}?alt=media&token=demo` }));
    },
    remove: async path => {
      objects.delete(path);
    },
    isPrivate: async path => !publicPaths.some(prefix => path.startsWith(prefix)),
  };
};
