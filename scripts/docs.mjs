#!/usr/bin/env node

import { generateDocumentation } from "tsdoc-markdown";

const utilsInputFiles = ["./src/lib/utils/event-modifiers.utils.ts"];

const buildOptions = {
  repo: { url: "https://github.com/dfinity/gix-components" },
};

const markdownOptions = {
  headingLevel: "##",
  emoji: null,
};

generateDocumentation({
  inputFiles: utilsInputFiles,
  outputFile: "./src/routes/(page)/utility-functions/+page.md",
  markdownOptions,
  buildOptions: { ...buildOptions, explore: true },
});
