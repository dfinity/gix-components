import { expect, test } from "@playwright/test";

const testUrl = "/components/external-link";

test("External link page has expected h1", async ({ page }) => {
  await page.goto(testUrl);
  await expect(page.locator("h1")).toHaveText("External Link");
});

test("External link is displayed with an icon", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});
