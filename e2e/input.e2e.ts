import { expect, test } from "@playwright/test";

const testUrl = "/components/input";

test("should trim zero", async ({ page }) => {
  await page.goto(testUrl);

  const input = page.getByTestId("amount-decimals");
  await input.fill("0.");

  const output = page.getByTestId("amount-decimals-output");

  await expect(output).toHaveText("0", { timeout: 500 });
});
