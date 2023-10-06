import { expect, test } from "@playwright/test";

const testUrl = "/components/tag";

test("Should render tags", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});
