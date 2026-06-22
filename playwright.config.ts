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
  // Headless Chromium occasionally nudges text glyphs ~1px between runs, which
  // touches every line on a text-heavy page (~2% of pixels) with no visual
  // change — enough to fail the default zero-tolerance screenshot comparison.
  // Font-rendering launch flags (hinting/LCD/subpixel) were tried and changed
  // nothing (Linux headless already rasterises text grayscale), so a small
  // diff-pixel tolerance is the reliable guard. Real regressions (a stuck
  // spinner, a missing/recoloured component, a layout shift) move well past it.
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
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
};

export default config;
