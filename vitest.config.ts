import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // TODO: cast until https://github.com/sveltejs/cli/issues/341 is resolved or vitest properly support vite v6
  plugins: [sveltekit() as never, svelteTesting() as never],
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
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    watch: false,
    setupFiles: ["./vitest.setup.ts"],
  },
});
