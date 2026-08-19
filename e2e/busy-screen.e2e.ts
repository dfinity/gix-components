import { expect, test } from "@playwright/test";

const testUrl = "/components/busy-screen";

test("Should hide spinner", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  const button = page.getByTestId("busy-display");
  await button.click();

  // The showcase shows the busy screen, then auto-dismisses it after 1s
  // (plus a fade-out transition). Rather than racing a fixed timeout, wait for
  // the overlay to appear and then be fully removed from the DOM, so the
  // screenshot always captures the same settled (spinner-hidden) state.
  const busy = page.getByTestId("busy");

  await expect(busy).toBeVisible();
  await expect(busy).toHaveCount(0);

  await expect(page).toHaveScreenshot();
});
