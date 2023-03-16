import { expect, test } from "@playwright/test";

const testUrl = "/components/qr-code-generator";

test("QR code page has expected h1", async ({ page }) => {
  await page.goto(testUrl);
  await expect(page.locator("h1")).toHaveText("QR Code Generator");
});

test("QR code renders https://nns.ic0.app", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});

test("QR code renders https://identity.ic0.app", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  const toggle = page.getByTestId("qr-code-toggle");
  await toggle.click();

  await page.waitForTimeout(250);

  await expect(page).toHaveScreenshot();
});
