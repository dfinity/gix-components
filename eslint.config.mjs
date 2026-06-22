import { default as svelteConfig } from "@dfinity/eslint-config-oisy-wallet/svelte";
import { default as vitestConfig } from "@dfinity/eslint-config-oisy-wallet/vitest";

export default [
  ...vitestConfig,
  ...svelteConfig,
  {
    ignores: [
      ".DS_Store",
      "node_modules",
      "/build",
      "/.svelte-kit",
      "/package",
      ".env",
      ".env.*",
      "dist",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
      "/test-results",
      "/playwright-report",
      "/samples",
    ],
  },
  {
    rules: {
      "local-rules/use-option-type-wrapper": ["off"],
      "vitest/expect-expect": ["off"],
    },
  },
  {
    files: ["**/*.svelte"],
    rules: {
      // Svelte reactive declarations (`$:`) reassign `let` bindings, which
      // eslint's static analysis misreads as a useless initial assignment.
      "no-useless-assignment": ["off"],
    },
  },
];
