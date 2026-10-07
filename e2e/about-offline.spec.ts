import { test, expect } from '@playwright/test';
import { chapterHeading, enterLibrary, openPage, isPhone } from './helpers';

test('About has a Privacy tab with the privacy notice', async ({ page }) => {
  await enterLibrary(page);
  await page.goto('/');
  if (isPhone(page)) {
    await page
      .getByRole('button', { name: /Settings/ })
      .last()
      .click();
    await page.getByRole('button', { name: /About/ }).first().click();
  } else {
    await page.getByRole('button', { name: 'About & Sources' }).click();
  }
  await page
    .getByRole('tab', { name: 'Privacy' })
    .or(page.getByRole('button', { name: 'Privacy', exact: true }))
    .first()
    .click();
  await expect(page.getByText('Privacy notice')).toBeVisible();
  await expect(page.getByText('Accessibility statement')).toBeVisible();
});

test('a chapter that was opened once still opens offline', async ({ page, context }) => {
  await enterLibrary(page);
  await openPage(page, 'mecca/a2/1');
  await page.evaluate(() => navigator.serviceWorker.ready);
  // Reload once so the service worker controls the page and caches the shell.
  await page.reload();
  await expect(chapterHeading(page, 'Bilal Ibn Rabah’s Place in Islam')).toBeVisible();
  await page.waitForFunction(() => !!navigator.serviceWorker.controller);
  await context.setOffline(true);
  await page.reload();
  await expect(chapterHeading(page, 'Bilal Ibn Rabah’s Place in Islam')).toBeVisible();
  await page.getByRole('button', { name: 'Table of Contents' }).first().click();
  await page.getByRole('button', { name: '2 The Age of Ignorance' }).click();
  await expect(chapterHeading(page, 'The Age of Ignorance')).toBeVisible();
  await context.setOffline(false);
});
