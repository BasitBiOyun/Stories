import { expect, type Page } from '@playwright/test';

export type Role = 'student' | 'teacher' | 'self';

/** Opens the app as someone who already entered the access code, picked a role and saw the reader tour. */
export async function enterLibrary(page: Page, opts: { role?: Role; language?: 'en' | 'ar'; tour?: boolean } = {}) {
  const { role = 'student', language = 'en', tour = false } = opts;
  await page.addInitScript(
    ([r, l, t]) => {
      // The YouTube frame on the About page blocks storage; only seed our own origin.
      if (window.top !== window) return;
      try {
        localStorage.setItem('app_access_code', 'stories_enar');
        localStorage.setItem('app_user_role', r);
        localStorage.setItem('app_language', l);
        if (!t) localStorage.setItem('app_reader_tour_done', '1');
      } catch {
        /* storage blocked */
      }
    },
    [role, language, tour ? '1' : ''] as const,
  );
}

/** Collects uncaught page errors so a test can assert the page stayed healthy. */
export function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));
  return errors;
}

export async function openPage(page: Page, route: string) {
  await page.goto(`/#/${route}`);
  await expect(page.locator('main').first()).toBeVisible();
}

export const isPhone = (page: Page) => (page.viewportSize()?.width ?? 1280) < 640;

/** The chapter title inside the page (phones repeat it in the top bar). */
export const chapterHeading = (page: Page, name: string) =>
  page.locator('main').first().getByRole('heading', { name, exact: true }).first();
