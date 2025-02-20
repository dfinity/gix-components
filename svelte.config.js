import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import {fileURLToPath} from "node:url";
import {readFileSync} from "node:fs";

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const { version } = JSON.parse(json);

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
    version: {
      name: version
    }
  },
};

export default config;
