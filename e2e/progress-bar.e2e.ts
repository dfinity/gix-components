import { expect, test } from "@playwright/test";

const testUrl = "/components/progress-bar";

test("Should render progress bars", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});
