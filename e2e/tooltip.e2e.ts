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

  const secondTarget = showcase.locator(".tooltip-target").nth(2);
  const secondButton = await secondTarget.locator("button");
  await secondButton.hover();

  const tooltipId = await secondTarget.getAttribute("aria-describedby");
  const tooltip = await page.locator(`[id="${tooltipId}"]`);
  await expect(tooltip).toBeVisible();

  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.05,
  });
});
