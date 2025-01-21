import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

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
