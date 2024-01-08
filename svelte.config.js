import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
    }),
  ],

  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter(),
    alias: {
      $docs: "./src/docs",
    },
    serviceWorker: {
      register: false,
    },
  },
};

export default config;
