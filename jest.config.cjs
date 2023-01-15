module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      { preprocess: "./svelte.config.test.cjs" },
    ],
    "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.spec.json" }],
    "^.+\\.js$": ["ts-jest", { tsconfig: "tsconfig.spec.json" }],
    "\\.(svg|png)$": "<rootDir>/jest-transform.cjs",
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  collectCoverageFrom: ["src/**/*.{ts,tsx,svelte,js,jsx}"],
  testPathIgnorePatterns: ["nns-js"],
  testEnvironmentOptions: {
    url: "https://nns.ic0.app/",
  },
  moduleNameMapper: { "^\\$lib(.*)$": "<rootDir>/src/lib$1" },
};
