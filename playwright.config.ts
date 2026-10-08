import { defineConfig, devices } from '@playwright/test';

// End-to-end tests run against the production build served by deploy/server.mjs,
// so they see exactly what Cloud Run serves (headers, hidden-book gate, service worker).
// Build first: `npm run build`, then `npm run test:e2e`.
const port = Number(process.env.E2E_PORT || 4310);
export const baseURL = `http://localhost:${port}`;
export const PREVIEW_KEY = 'e2e-preview-key';

// In the cloud sandbox Chromium is preinstalled; on GitHub Actions `npx playwright install` provides it.
const executablePath = process.env.PW_CHROMIUM_PATH || undefined;

export default defineConfig({
  testDir: './e2e',
  timeout: 45_000,
  expect: { timeout: 10_000, toHaveScreenshot: { maxDiffPixelRatio: 0.02, animations: 'disabled' } },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  // GitHub's runner draws text a little differently from the cloud sandbox, so each keeps its own
  // screenshots: e2e/__screenshots__/ci/ is recorded on GitHub (run the Tests workflow by hand
  // with "update screenshots" and commit its screenshots-ci download), the folders beside it
  // locally with `npm run test:e2e:update`.
  snapshotPathTemplate: `{testDir}/__screenshots__/${process.env.CI ? 'ci/' : ''}{projectName}/{arg}{ext}`,
  use: {
    baseURL,
    trace: 'retain-on-failure',
    launchOptions: { executablePath },
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 }, launchOptions: { executablePath } } },
    { name: 'phone', use: { ...devices['Pixel 7'], launchOptions: { executablePath } } },
  ],
  webServer: {
    command: 'node deploy/server.mjs',
    url: `${baseURL}/`,
    reuseExistingServer: !process.env.CI,
    env: { PORT: String(port), PREVIEW_KEY },
    timeout: 30_000,
  },
});
