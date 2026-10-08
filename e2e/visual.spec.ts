import { test, expect } from '@playwright/test';
import { enterLibrary, isPhone, openPage } from './helpers';

// Screenshot comparison: a change in layout or colour fails the test, so a broken
// phone screen is caught before deploy. Update on purpose with `npm run test:e2e:update`.
// Reduced motion freezes the home covers ring, so the shot is stable.
test.use({ reducedMotion: 'reduce' });

const screens: [string, string][] = [
  ['home', ''],
  ['chapter', 'mecca/a2/1'],
  ['knowledge-check', 'mecca/a2/15'],
  ['master-glossary', 'mecca/a2/16'],
  ['places-people', 'mecca/a2/17'],
  ['vocabulary-challenge', 'mecca/a2/18'],
  ['language-review', 'mecca/a2/19'],
  ['final-challenge', 'mecca/a2/20'],
];

for (const [name, route] of screens) {
  for (const language of ['en', 'ar'] as const) {
    test(`${name} looks the same (${language})`, async ({ page }) => {
      // The same screen everywhere: no pictures or audio from Storage (a loaded picture takes
      // room and a loaded audio file shows its length), and a fixed order for shuffled answers.
      await page.route(/firebasestorage\.googleapis\.com|storage\.googleapis\.com|\/media-image|\/audio-timings\//, route => route.abort());
      await page.addInitScript(() => {
        // An audio file can still load through the media element, so its length is never shown.
        Object.defineProperty(HTMLMediaElement.prototype, 'duration', { get: () => NaN });
        let seed = 20261008;
        Math.random = () => {
          seed = (seed + 0x6d2b79f5) | 0;
          let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
          t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
          return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
      });
      await enterLibrary(page, { language });
      if (route) await openPage(page, route);
      else {
        await page.goto('/');
        await expect(isPhone(page) ? page.getByRole('navigation').first() : page.locator('main').first()).toBeVisible();
      }
      // Pictures come from Storage over the network; hide them so the comparison is about layout.
      await page.addStyleTag({
        content: [
          // Pictures come from Storage over the network, so the comparison is about layout, not photos.
          'img, video, canvas { visibility: hidden !important; }',
          '[style*="background-image"] { background-image: none !important; }',
          '*, *::before, *::after { animation: none !important; transition: none !important; }',
        ].join('\n'),
      });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(600);
      await expect(page).toHaveScreenshot(`${name}-${language}.png`, { fullPage: false, animations: 'disabled', caret: 'hide' });
    });
  }
}
