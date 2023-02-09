import { expect, test } from "@playwright/test";

test("QR code page has expected h1", async ({ page }) => {
  await page.goto("/components/qr-code");
  await expect(page.locator("h1")).toHaveText("QR Code");
});

test("QR code renders https://nns.ic0.app", async ({ page }) => {
  await page.goto("/components/qr-code");

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});
