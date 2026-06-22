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
  // Headless Chromium renders text with a ~1px sub-pixel anti-aliasing jitter
  // that varies run-to-run, touching every glyph edge and amounting to ~2% of a
  // text-heavy page — enough to fail the default zero-tolerance screenshot
  // comparison without any visual change. A 1px shift produces fully different
  // edge pixels, so `threshold` (per-pixel) cannot absorb it; allow a small
  // ratio of differing pixels instead. Real regressions (a stuck spinner, a
  // missing/recoloured component, a layout shift) move well past this.
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
