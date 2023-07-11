import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";
import type { UserConfig } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(
  (): UserConfig => ({
    plugins: [sveltekit()],
    resolve: {
      alias: [
        {
          find: "$lib",
          replacement: resolve(__dirname, "src/lib"),
        },
        {
          find: "$routes",
          replacement: resolve(__dirname, "src/routes"),
        },
        {
          find: "$tests",
          replacement: resolve(__dirname, "src/tests"),
        },
        {
          find: "$docs",
          replacement: resolve(__dirname, "src/docs"),
        },
        // vitest issue https://github.com/vitest-dev/vitest/issues/2834#issuecomment-1425371719
        {
          find: /svelte\/ssr.mjs/,
          replacement: "svelte/index.mjs",
        },
      ],
    },
    test: {
      environment: "jsdom",
      globals: true,
      watch: false,
      setupFiles: ["./vitest.setup.ts"],
      // Vitest issue: https://github.com/vitest-dev/vitest/issues/2834#issuecomment-1439576110
      alias: [{ find: /^svelte$/, replacement: "svelte/internal" }],
    },
  })
);
