import { spawnSync } from 'node:child_process';

const checksOnly = process.argv.includes('--checks-only') || process.argv.includes('--no-build');

const baseChecks = [
  { id: 'A2_BLUEPRINTS', label: 'A2 blueprint validation', command: 'npm', args: ['run', 'validate:a2'] },
  { id: 'B1_BLUEPRINTS', label: 'B1 blueprint validation', command: 'npm', args: ['run', 'validate:b1'] },
  { id: 'B2_BLUEPRINTS', label: 'B2 blueprint validation', command: 'npm', args: ['run', 'validate:b2'] },
  { id: 'STORY_CORRECTIONS', label: 'Approved story corrections', command: 'npm', args: ['run', 'validate:story-corrections'] },
  { id: 'TYPECHECK', label: 'TypeScript typecheck', command: 'npm', args: ['run', 'typecheck', '--', '--pretty', 'false'] },
];

const checks = checksOnly
  ? baseChecks
  : [
      ...baseChecks,
      { id: 'VITE_BUILD', label: 'Vite production build', command: 'npm', args: ['run', 'build'] },
      { id: 'BUNDLE_BUDGET', label: 'Initial JavaScript bundle budget', command: 'npm', args: ['run', 'validate:bundle'], dependsOn: 'VITE_BUILD' },
    ];

const cleanOutput = (value = '') => value
  .replace(/\u001b\[[0-9;]*m/g, '')
  .replace(/\r/g, '')
  .trim();

const formatSeconds = (milliseconds) => `${(milliseconds / 1000).toFixed(1)}s`;
const results = [];

console.log('============================================================');
console.log(checksOnly ? 'STORIES QUALITY CHECKS — AGGREGATE MODE' : 'STORIES DEPLOY CHECKS — AGGREGATE MODE');
console.log('All independent checks will run. Failure is reported only at the end.');
console.log('============================================================');

for (const check of checks) {
  if (check.dependsOn) {
    const dependency = results.find(result => result.id === check.dependsOn);
    if (!dependency || dependency.status !== 'PASS') {
      results.push({ ...check, status: 'SKIP', code: null, durationMs: 0, output: `Skipped because ${check.dependsOn} did not pass.` });
      console.log(`[SKIP] ${check.label} — prerequisite ${check.dependsOn} failed.`);
      continue;
    }
  }

  console.log(`\n>>> RUN ${check.id}: ${check.label}`);
  const startedAt = Date.now();
  const child = spawnSync(check.command, check.args, {
    cwd: process.cwd(),
    encoding: 'utf8',
    env: { ...process.env, CI: process.env.CI || '1', FORCE_COLOR: '0', NO_COLOR: '1' },
    maxBuffer: 64 * 1024 * 1024,
  });
  const durationMs = Date.now() - startedAt;
  const output = cleanOutput(`${child.stdout || ''}\n${child.stderr || ''}`);
  const code = typeof child.status === 'number' ? child.status : 1;
  const status = code === 0 ? 'PASS' : 'FAIL';

  results.push({ ...check, status, code, durationMs, output });
  console.log(`[${status}] ${check.label} (${formatSeconds(durationMs)})`);
}

const failures = results.filter(result => result.status === 'FAIL');
const skips = results.filter(result => result.status === 'SKIP');
const passes = results.filter(result => result.status === 'PASS');

console.log('\n============================================================');
console.log('=== STORIES DEPLOY QUALITY REPORT ===');
console.log(`RESULT: ${failures.length ? 'FAIL' : 'PASS'}`);
console.log(`PASS: ${passes.length} | FAIL: ${failures.length} | SKIP: ${skips.length}`);
console.log('============================================================');

for (const result of results) {
  const suffix = result.status === 'PASS' ? ` (${formatSeconds(result.durationMs)})` : '';
  console.log(`[${result.status}] ${result.id} — ${result.label}${suffix}`);
}

if (failures.length) {
  console.log('\n============================================================');
  console.log('ALL FAILING CHECK OUTPUTS');
  console.log('Fix every section below before the next deploy attempt.');
  console.log('============================================================');

  for (const failure of failures) {
    console.log(`\n----- BEGIN FAILURE ${failure.id}: ${failure.label} -----`);
    console.log(failure.output || '(No stdout/stderr was produced.)');
    console.log(`----- END FAILURE ${failure.id} (exit ${failure.code}) -----`);
  }

  if (skips.length) {
    console.log('\n----- SKIPPED DEPENDENT CHECKS -----');
    for (const skipped of skips) console.log(`[SKIP] ${skipped.id}: ${skipped.output}`);
  }

  console.log('\n=== END STORIES DEPLOY QUALITY REPORT ===');
  process.exit(1);
}

console.log('\nAll requested checks passed.');
console.log('=== END STORIES DEPLOY QUALITY REPORT ===');
