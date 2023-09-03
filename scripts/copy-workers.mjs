import { cp } from "node:fs";
import { extname } from "node:path";

await cp(
  "node_modules/@junobuild/analytics/dist/workers/",
  "./static/workers",
  {
    recursive: true,
    filter: (source, destination) => extname(source) !== ".map",
  },
  (err) => console.error(err),
);
