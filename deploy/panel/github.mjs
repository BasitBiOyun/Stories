/**
 * The panel's view of the GitHub repository. Content lives in Git, so every change made in the
 * panel is a commit on a "basket" branch, and publishing is merging that branch into the preview
 * branch. Only the few operations the panel needs are here, each in plain words.
 */

const API = 'https://api.github.com';

export const createGithubRepo = (token, repo, fetchImpl = fetch) => {
  const request = async (method, path, body, { raw = false, allow404 = false } = {}) => {
    const response = await fetchImpl(`${API}/repos/${repo}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: raw ? 'application/vnd.github.raw+json' : 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'stories-content-panel',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (allow404 && response.status === 404) return null;
    const text = await response.text();
    if (!response.ok) {
      let message = '';
      try {
        message = JSON.parse(text).message ?? '';
      } catch {
        message = text.slice(0, 200);
      }
      const error = new Error(`GitHub ${method} ${path} answered ${response.status}: ${message}`);
      error.status = response.status;
      throw error;
    }
    if (raw) return text;
    return text ? JSON.parse(text) : null;
  };

  const branchSha = async branch => {
    const ref = await request('GET', `/git/ref/heads/${encodeURIComponent(branch)}`, null, { allow404: true });
    return ref?.object?.sha ?? null;
  };

  return {
    kind: 'github',

    /** The text of a file on a branch or commit, or null when it does not exist there. */
    readFile: (ref, path) => request('GET', `/contents/${path}?ref=${encodeURIComponent(ref)}`, null, { raw: true, allow404: true }),

    branchSha,

    /** A picture on a branch or commit, as base64, or null when it is not there. */
    readBase64: async (ref, path) => {
      const file = await request('GET', `/contents/${path}?ref=${encodeURIComponent(ref)}`, null, { allow404: true });
      if (!file) return null;
      if (file.content) return file.content.replace(/\s/g, '');
      // Over 1 MB the contents API leaves the content out; the blob still has it.
      return (await request('GET', `/git/blobs/${file.sha}`)).content.replace(/\s/g, '');
    },

    /** The blob of a file on a branch, or null when it is not there. */
    fileSha: async (ref, path) => (await request('GET', `/contents/${path}?ref=${encodeURIComponent(ref)}`, null, { allow404: true }))?.sha ?? null,

    createBranch: async (branch, fromSha) => {
      await request('POST', '/git/refs', { ref: `refs/heads/${branch}`, sha: fromSha });
    },

    deleteBranch: async branch => {
      await request('DELETE', `/git/refs/heads/${encodeURIComponent(branch)}`).catch(() => undefined);
    },

    /**
     * One commit that writes (or, with text null, removes) several files at once, so a change and
     * the narration request it needs always travel together.
     */
    commitFiles: async (branch, files, message) => {
      const head = await branchSha(branch);
      if (!head) throw Object.assign(new Error(`branch ${branch} is missing`), { status: 404 });
      const commit = await request('GET', `/git/commits/${head}`);
      const tree = [];
      for (const file of files) {
        if (file.text === null) {
          tree.push({ path: file.path, mode: '100644', type: 'blob', sha: null });
          continue;
        }
        if (file.sha) {
          // An existing blob (a picture put back as it was).
          tree.push({ path: file.path, mode: '100644', type: 'blob', sha: file.sha });
          continue;
        }
        const blob = await request('POST', '/git/blobs', { content: file.text, encoding: file.encoding ?? 'utf-8' });
        tree.push({ path: file.path, mode: '100644', type: 'blob', sha: blob.sha });
      }
      const newTree = await request('POST', '/git/trees', { base_tree: commit.tree.sha, tree });
      const created = await request('POST', '/git/commits', { message, tree: newTree.sha, parents: [head] });
      await request('PATCH', `/git/refs/heads/${encodeURIComponent(branch)}`, { sha: created.sha });
      return created.sha;
    },

    /** Files and commits on `head` that are not on `base`. */
    compare: async (base, head) => {
      const result = await request('GET', `/compare/${encodeURIComponent(base)}...${encodeURIComponent(head)}`);
      return {
        aheadBy: result.ahead_by,
        behindBy: result.behind_by,
        files: (result.files ?? []).map(file => ({ path: file.filename, status: file.status })),
        commits: (result.commits ?? []).map(commit => ({ sha: commit.sha, message: commit.commit.message, date: commit.commit.author?.date })),
        mergeBase: result.merge_base_commit?.sha ?? null,
      };
    },

    listPulls: async base => {
      const pulls = await request('GET', `/pulls?state=open&base=${encodeURIComponent(base)}&per_page=100`);
      return pulls.map(pull => ({
        number: pull.number,
        title: pull.title,
        body: pull.body ?? '',
        branch: pull.head.ref,
        headSha: pull.head.sha,
        createdAt: pull.created_at,
        updatedAt: pull.updated_at,
        url: pull.html_url,
        draft: Boolean(pull.draft),
      }));
    },

    getPull: async number => {
      const pull = await request('GET', `/pulls/${number}`, null, { allow404: true });
      if (!pull) return null;
      return {
        number: pull.number,
        title: pull.title,
        body: pull.body ?? '',
        branch: pull.head.ref,
        headSha: pull.head.sha,
        base: pull.base.ref,
        state: pull.state,
        merged: Boolean(pull.merged),
        mergeable: pull.mergeable,
        url: pull.html_url,
      };
    },

    createPull: async ({ title, head, base, body }) => {
      const pull = await request('POST', '/pulls', { title, head, base, body });
      return { number: pull.number, url: pull.html_url };
    },

    updatePull: async (number, fields) => {
      await request('PATCH', `/pulls/${number}`, fields);
    },

    mergePull: async (number, { title, message, method = 'squash' }) => {
      const result = await request('PUT', `/pulls/${number}/merge`, { merge_method: method, commit_title: title, commit_message: message });
      return result.sha;
    },

    /** A comment on a pull request (the new-book writer reads these as requests). */
    comment: async (number, body) => {
      await request('POST', `/issues/${number}/comments`, { body });
    },

    /** Moves a branch to a commit, creating the branch when it does not exist yet. */
    moveBranch: async (branch, sha) => {
      const current = await branchSha(branch);
      if (current) await request('PATCH', `/git/refs/heads/${encodeURIComponent(branch)}`, { sha, force: false });
      else await request('POST', '/git/refs', { ref: `refs/heads/${branch}`, sha });
    },

    /** Merges the base branch into a branch, so a basket that fell behind can still be merged. */
    updateBranch: async number => {
      await request('PUT', `/pulls/${number}/update-branch`, {});
    },

    /** The result of the `checks` job (.github/workflows/tests.yml) on a commit. */
    checkState: async sha => {
      const runs = await request('GET', `/commits/${sha}/check-runs?check_name=checks`);
      const run = runs.check_runs?.[0];
      if (!run) return 'missing';
      if (run.status !== 'completed') return 'running';
      return run.conclusion === 'success' ? 'passed' : 'failed';
    },

    /** Recent commits on a branch, newest first, optionally only those that touched a path. */
    listCommits: async (branch, { path, perPage = 40 } = {}) => {
      const query = `sha=${encodeURIComponent(branch)}&per_page=${perPage}${path ? `&path=${encodeURIComponent(path)}` : ''}`;
      const commits = await request('GET', `/commits?${query}`);
      return commits.map(commit => ({
        sha: commit.sha,
        message: commit.commit.message,
        date: commit.commit.committer?.date ?? commit.commit.author?.date,
        parents: commit.parents.map(parent => parent.sha),
      }));
    },

    getCommit: async sha => {
      const commit = await request('GET', `/commits/${sha}`, null, { allow404: true });
      if (!commit) return null;
      return {
        sha: commit.sha,
        message: commit.commit.message,
        date: commit.commit.committer?.date,
        parents: commit.parents.map(parent => parent.sha),
        files: (commit.files ?? []).map(file => ({ path: file.filename, status: file.status })),
      };
    },

    /** Runs of a workflow, newest first. */
    listWorkflowRuns: async (workflow, perPage = 10) => {
      const result = await request('GET', `/actions/workflows/${workflow}/runs?per_page=${perPage}`, null, { allow404: true });
      return (result?.workflow_runs ?? []).map(run => ({
        id: run.id,
        branch: run.head_branch,
        status: run.status,
        conclusion: run.conclusion,
        createdAt: run.created_at,
        url: run.html_url,
      }));
    },
  };
};
