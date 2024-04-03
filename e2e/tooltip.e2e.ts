import { expect, test } from "@playwright/test";

const testUrl = "/components/tooltip";

test("Should render tooltip", async ({ page }) => {
  await page.goto(testUrl);
  await page.setViewportSize({ width: 400, height: 720 });

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(
    showcase.getByTestId("tooltip-component").nth(2).locator(".tooltip"),
  ).not.toBeVisible();

  showcase.locator("button.secondary").nth(2).hover();

  await expect(page.locator(".tooltip").nth(2)).toBeVisible();

  await expect(page).toHaveScreenshot();
});
