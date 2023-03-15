import { chromium, expect, test, type Page } from "@playwright/test";

const testUrl = "/components/qr-code-reader";

test("QR code page has expected h1", async ({ page }) => {
  await page.goto(testUrl);
  await expect(page.locator("h1")).toHaveText("QR Code Reader");
});

const testQRCode = async (page: Page) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  const modal = page.getByTestId("qr-code-modal");
  await modal.click();

  // Wait for video
  await page.waitForTimeout(2000);

  await expect(page).toHaveScreenshot();
};

test("Read QR throws error because user block camera", async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext({
    permissions: [],
  });

  const page = await context.newPage();

  await testQRCode(page);
});

test("Read QR throws error because camera stream fails", async () => {
  const browser = await chromium.launch({
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--use-file-for-fake-video-capture=./empty/stream/error", // leads to error: Requested device not found
    ],
  });

  const context = await browser.newContext({
    permissions: ["camera"],
  });

  const page = await context.newPage();

  await testQRCode(page);
});

test("Read QR code value with camera", async () => {
  const browser = await chromium.launch({
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--use-file-for-fake-video-capture=./samples/qrcode.y4m",
    ],
  });

  const context = await browser.newContext({
    permissions: ["camera"],
  });

  const page = await context.newPage();
  await testQRCode(page);
});
