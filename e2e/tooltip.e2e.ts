import { expect, test } from "@playwright/test";

const testUrl = "/components/tooltip";

test("Should render tooltip", async ({ page }) => {
  await page.goto(testUrl);
  await page.setViewportSize({ width: 400, height: 720 });

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(showcase.getByTestId("tooltip-component").nth(1).locator(".tooltip")).not.toBeVisible();
  showcase.locator("button.secondary").nth(1).hover();
  await expect(showcase.getByTestId("tooltip-component").nth(1).locator(".tooltip")).toBeVisible();

  await expect(page).toHaveScreenshot();
});
