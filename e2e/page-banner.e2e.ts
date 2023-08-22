import { expect, test } from "@playwright/test";

const testUrl = "/components/page-banner";

test("Should display default behavior", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});
