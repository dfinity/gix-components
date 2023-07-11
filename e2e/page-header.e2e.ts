import { expect, test } from "@playwright/test";

const testUrl = "/components/page-header";

test("Page header screenshot test", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});
