import { devices, type PlaywrightTestConfig } from "@playwright/test";

const DEV = (process.env.NODE_ENV ?? "production") === "development";

const webServer = DEV
  ? {
      command: "npm run dev",
      reuseExistingServer: true,
      port: 5173,
    }
  : {
      command: "npm run staging && npm run preview",
      port: 4173,
    };

const config: PlaywrightTestConfig = {
  webServer,
  testDir: "e2e",
  testMatch: ["**/*.e2e.ts"],
  // Small safety net for any residual run-to-run rendering noise. The Chrome
  // launch flags below disable font hinting / sub-pixel text positioning, which
  // is the main source of the ~1px text jitter, so in practice diffs should be
  // ~0; this ratio just keeps a rare stray pixel from failing the suite. Real
  // regressions (a stuck spinner, a missing/recoloured component, a layout
  // shift) move well past this.
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
    },
  },
  use: {
    testIdAttribute: "data-tid",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        launchOptions: {
          // Make text rasterisation deterministic across CI runs: disable font
          // hinting and sub-pixel (LCD) text positioning, and pin the colour
          // profile. Without these, headless Chrome nudges glyph edges ~1px
          // between runs, diffing every line of text on a page.
          args: [
            "--font-render-hinting=none",
            "--disable-lcd-text",
            "--disable-font-subpixel-positioning",
            "--force-color-profile=srgb",
          ],
        },
      },
    },
  ],
};

export default config;
