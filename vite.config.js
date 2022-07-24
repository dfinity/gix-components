import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $docs: resolve("./src/docs"),
      $lib: resolve("./src/lib"),
    },
  },
};

export default config;
