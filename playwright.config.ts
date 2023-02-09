import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run build && npm run preview",
    port: 4173,
  },
  testDir: "e2e",
  testMatch:['**/*.spec.ts'],
  use: {
    testIdAttribute: "data-tid",
  },
};

export default config;
