import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $docs: resolve("./src/docs"),
    },
  },
  define: {
    "process.env.VITE_BUILD_TIME": JSON.stringify(new Date().toISOString()),
  },
};

export default config;
