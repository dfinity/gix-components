import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    ...(process.env.VITEST && { conditions: ["browser"] }),
    alias: {
      $docs: resolve("./src/docs"),
    },
  },
  define: {
    "process.env.VITE_BUILD_TIME": JSON.stringify(new Date().toISOString()),
  },
};

export default config;
