import { expect, test } from "@playwright/test";

const testUrl = "/components/checkbox";

test("Checkbox page has expected h1", async ({ page }) => {
  await page.goto(testUrl);
  await expect(page.locator("h1")).toHaveText("Checkbox");
});

test("Should display default behavior", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});

test("Should display default behavior even if box-sizing is set as border-box", async ({ page }) => {
  await page.goto(testUrl);

  const checkbox = page.getByTestId("checkbox-2");
  expect(checkbox).not.toBeNull();

  await checkbox.evaluate(() => {
    document.querySelectorAll('input').forEach(checkbox => {
      checkbox.style.boxSizing = 'content-box';
    });
  });

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});

