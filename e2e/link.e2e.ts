import { expect, test } from "@playwright/test";

const testUrl = "/utility-classes/links";

test("Should render link as buttons", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});
