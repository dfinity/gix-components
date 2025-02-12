import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import { resolve } from "path";
import type { UserConfig } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(
  (): UserConfig => ({
    plugins: [sveltekit(), svelteTesting()],
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
    },
  }),
);
