import AxeBuilder from '@axe-core/playwright';
import { test, expect, type Page } from '@playwright/test';
import { enterLibrary, isPhone, openPage } from './helpers';

// WCAG 2.1 A/AA is the goal stated in the accessibility statement.
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

async function scan(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
  return results.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help }));
}

const screens: [string, string][] = [
  ['home', ''],
  ['chapter', 'mecca/a2/1'],
  ['journey map', 'mecca/a2/14'],
  ['knowledge check', 'mecca/a2/15'],
  ['master glossary', 'mecca/a2/16'],
  ['places and people', 'mecca/a2/17'],
  ['vocabulary challenge', 'mecca/a2/18'],
  ['language review', 'mecca/a2/19'],
  ['final challenge', 'mecca/a2/20'],
];

for (const [name, route] of screens) {
  test(`${name} has no serious accessibility problems`, async ({ page }) => {
    await enterLibrary(page);
    if (route) {
      await openPage(page, route);
    } else {
      // The phone home screen is a library list with its own bottom tabs, not a <main> page.
      await page.goto('/');
      const home = isPhone(page) ? page.getByRole('navigation', { name: 'Library' }) : page.locator('main').first();
      await expect(home).toBeVisible();
    }
    const violations = (await scan(page)).filter(v => v.impact === 'critical' || v.impact === 'serious');
    expect(violations, JSON.stringify(violations, null, 2)).toEqual([]);
  });
}

test('an Arabic chapter has no serious accessibility problems', async ({ page }) => {
  await enterLibrary(page, { language: 'ar' });
  await openPage(page, 'mecca/a2/1');
  const violations = (await scan(page)).filter(v => v.impact === 'critical' || v.impact === 'serious');
  expect(violations, JSON.stringify(violations, null, 2)).toEqual([]);
});
