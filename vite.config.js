import juno from "@junobuild/vite-plugin";
import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), juno()],
  resolve: {
    alias: {
      $docs: resolve("./src/docs"),
    },
  },
  define: {
    "process.env.VITE_BUILD_TIME": JSON.stringify(new Date().toISOString()),
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
};

export default config;
