import { test, expect, type Page } from '@playwright/test';
import { enterLibrary, isPhone, openPage, trackErrors } from './helpers';

const openQuick = async (page: Page) => {
  if (isPhone(page)) await page.getByRole('region', { name: 'Quick Challenge' }).getByRole('button', { name: 'Start Exercise' }).click();
  else await page.getByRole('button', { name: /Quick Challenge/ }).click();
};
const feedback = (page: Page) =>
  page
    .getByRole('status')
    .filter({ hasText: /Correct|Not quite|first try|try/i })
    .first();

test.describe('chapter activities', () => {
  test.beforeEach(async ({ page }) => {
    await enterLibrary(page);
    await openPage(page, 'mecca/a2/1');
  });

  test('Quick Challenge: right answer gives "correct on the first try" and an explanation', async ({ page }) => {
    await openQuick(page);
    const dialog = page.getByRole('dialog', { name: 'Quick Challenge' });
    await dialog.getByRole('button', { name: /^A He gave the Adhan/ }).click();
    await expect(dialog.getByText('Correct on the first try.')).toBeVisible();
    await expect(dialog.getByText('Explanation')).toBeVisible();
    await expect(dialog.getByRole('button', { name: /Next activity/ })).toBeVisible();
  });

  test('Quick Challenge: a wrong answer can be tried again', async ({ page }) => {
    await openQuick(page);
    const dialog = page.getByRole('dialog', { name: 'Quick Challenge' });
    await dialog.getByRole('button', { name: /^B He went to live in Damascus/ }).click();
    await expect(dialog.getByText(/Not quite/i).first()).toBeVisible();
  });

  test('Language Focus opens its first task', async ({ page }) => {
    if (isPhone(page)) {
      // Phones expand the list of tasks first, then open one.
      const section = page.getByRole('region', { name: 'Language Focus' });
      await section.getByRole('button').first().click();
      await section.getByRole('button', { name: /^1 Fact or Belief/ }).click();
    } else {
      await page.getByRole('button', { name: /Language Focus/ }).click();
    }
    await expect(page.getByRole('heading', { name: /Fact or Belief/ }).first()).toBeVisible();
  });

  test('I can: the self-check takes an answer', async ({ page }) => {
    if (!isPhone(page)) await page.getByRole('button', { name: /I can/ }).click();
    const item = page.getByRole('listitem').filter({ hasText: 'I can say who Bilal was.' }).filter({ visible: true }).first();
    const yes = item.getByRole('button', { name: 'Yes' });
    await yes.scrollIntoViewIfNeeded();
    await yes.click();
    await expect(yes).toHaveAttribute('aria-pressed', 'true');
  });
});

test.describe('book-end pages', () => {
  test.beforeEach(async ({ page }) => {
    await enterLibrary(page);
  });

  test('journey map lists the places and opens one', async ({ page }) => {
    test.slow(); // the map draws itself, its places and its time tour before it answers a tap
    await openPage(page, 'mecca/a2/14');
    if (!isPhone(page)) await expect(page.getByRole('heading', { name: 'Bilal’s World' })).toBeVisible();
    const place = page.getByRole('button', { name: '3. Abyssinia', exact: true });
    // The map sets up its own zoom and panning first; a tap that lands during that is ignored.
    await expect(async () => {
      await place.click();
      await expect(place).toHaveAttribute('aria-pressed', 'true', { timeout: 2000 });
    }).toPass({ timeout: 20_000 });
    await expect(page.locator('main').first()).toContainText(/Explored 1 ?\/ ?5/);
  });

  test('a journey map with a year slider shows the age line', async ({ page }) => {
    // The age sentences come from the book file with a {years} slot; a missing one used to crash the page.
    const errors = trackErrors(page);
    await openPage(page, 'yunusEmre/a2/9');
    await expect(page.locator('main').first()).toContainText(/Yunus Emre is about \d+ years? old\./);
    expect(errors).toEqual([]);
  });

  test('Knowledge Check: an answer is marked and counted', async ({ page }) => {
    await openPage(page, 'mecca/a2/15');
    await expect(page.getByRole('heading', { name: 'Knowledge Check' })).toBeVisible();
    await page.getByRole('button', { name: /^A Islam made him a free and great man/ }).click();
    await expect(page.getByText(/Answered 1\/8/)).toBeVisible();
  });

  test('Master Glossary: search narrows the list', async ({ page }) => {
    await openPage(page, 'mecca/a2/16');
    await page.getByRole('textbox', { name: /Search for a word/ }).fill('openly');
    await expect(page.getByText('In a way that is not hidden.').first()).toBeVisible();
    await expect(page.getByText('Fair treatment for people.')).toHaveCount(0);
  });

  test('Places & People: a filter shows only that group', async ({ page }) => {
    await openPage(page, 'mecca/a2/17');
    await page.getByRole('button', { name: 'People and rulers · 2' }).click();
    await expect(page.getByRole('heading', { name: /^Mecca/, level: 4 })).toHaveCount(0);
  });

  test('Vocabulary Challenge: matching every pair unlocks the next step', async ({ page }) => {
    await openPage(page, 'mecca/a2/18');
    const pairs: [string, string][] = [
      ['Justice', 'Fair treatment for people.'],
      ['Patient', 'Calm when you must wait or when life is hard.'],
      ['Freedom', 'The state of not being a slave or prisoner.'],
      ['Refused', 'Said no; did not agree to do something.'],
      ['Rescued', 'Saved from danger.'],
      ['Beloved', 'Loved very much.'],
    ];
    for (const [word, meaning] of pairs) {
      // Phones show one word at a time and move on by themselves.
      if (isPhone(page)) {
        const current = await page
          .locator('main p')
          .filter({ hasText: /^(Justice|Patient|Freedom|Refused|Rescued|Beloved)$/ })
          .first()
          .innerText();
        await page.getByRole('button', { name: pairs.find(p => p[0] === current)![1], exact: true }).click();
        continue;
      }
      await page.getByRole('button', { name: word, exact: true }).click();
      await page.getByRole('button', { name: meaning, exact: true }).click();
    }
    const done = page.getByRole('button', { name: "I've matched them!" });
    await expect(done).toBeEnabled();
    await done.click();
    await expect(page.getByRole('button', { name: 'In the Story' })).toBeEnabled();
  });

  test('Language Review: a sentence can be put in a group', async ({ page }) => {
    await openPage(page, 'mecca/a2/19');
    await expect(page.getByRole('heading', { name: 'Language Review' })).toBeVisible();
    if (isPhone(page)) {
      await expect(page.getByText('1 / 6')).toBeVisible();
      await page.getByRole('button', { name: /One time/ }).click();
      await expect(page.getByText('2 / 6')).toBeVisible();
      return;
    }
    await page.getByRole('button', { name: 'Umayya was always very unkind to Bilal.' }).click();
    await page.getByRole('button', { name: /Again and again/ }).click();
    await expect(page.getByRole('button', { name: 'Umayya was always very unkind to Bilal.' })).toBeVisible();
  });

  test('Final Challenge starts and gives feedback on an answer', async ({ page }) => {
    await openPage(page, 'mecca/a2/20');
    await page.getByRole('button', { name: 'Start the Challenge' }).click();
    const options = page.locator('main').getByRole('button', { name: /^[A-D] / });
    await expect(options.first()).toBeVisible();
    await options.first().click();
    const check = page.getByRole('button', { name: /^Check/ });
    if (await check.isVisible().catch(() => false)) await check.click();
    await expect(feedback(page)).toBeVisible();
  });
});
