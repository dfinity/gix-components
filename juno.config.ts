import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      production: "nbyi7-6aaaa-aaaal-acjtq-cai",
    },
    source: "build",
    predeploy: ["npm run build"],
  },
});
