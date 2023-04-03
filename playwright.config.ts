import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run build && npm run preview",
    port: 4173,
  },
  testDir: "e2e",
  testMatch: ["**/*.e2e.ts"],
  use: {
    testIdAttribute: "data-tid",
    trace: "on",
  },
  projects: [
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
};

export default config;
