/* eslint-disable no-console */
import { readFile } from "fs/promises";

const logMissing = true;

const UNKNOWN = "❌";

const oldDarkFilename = "./a-dark.scss";
const oldLightFilename = "./a-light.scss";
const primitivesFilename = "src/lib/styles/global/colors.scss";
const darkFilename = "src/lib/styles/themes/dark.scss";
const lightFilename = "src/lib/styles/themes/light.scss";
const nightFilename = "src/lib/styles/themes/night.scss";
const componentsFilename = "src/lib/styles/themes/components.scss";

const cssVarCssVarPattern = /^\s*--([^:]+):\s*((\d+, \d+, \d+)|var\(--(.*)\));/;
const cssVarSassVarPattern = /^\s*--([^:]+):\s*#\{(.*)};/;
const cssVarRgbValuePattern = /^\s*\$([^:]+):\s*#(.*);/;

// check for color values (#FFFFFF, #FFFFFF20 or " 255, 255, 255")
const isColorValue = (value) =>
  value.match(/^#([0-9a-fA-F]{3}){1,2}$/) || value.match(/^\d+, \d+, \d+$/);
const sortMap = (map) =>
  new Map(
    [...map.entries()].sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
  );

/**
  Sample input:
    key: label-color
    value: text-color
    mapA:
      neutral-50: #ffffff;
    mapB:
      --label-color: var(--text-color);
      --text-color: var(--neutral-50);
  Returns: #ffffff
 */
const recursiveSearch = (key, value, mapA, mapB) =>
  mapB.get(value) ??
  (mapA.get(value)
    ? recursiveSearch(key, mapA.get(value), mapA, mapB)
    : isColorValue(value)
      ? value
      : `${UNKNOWN} ${value}`);

async function readFileIntoMap(filePath, pattern, log = false) {
  log && console.log(`Reading file: ${filePath}`);
  const data = await readFile(filePath, { encoding: "utf8" });
  const lines = data.split("\n");
  const map = new Map();
  log && console.log("The following lines are ignored:");
  for (let line of lines) {
    line = line.trim();
    if (line === "" || line.startsWith("//")) {
      continue;
    }
    const match = line.match(pattern);
    if (!match) {
      log && console.log(line);
      continue;
    }
    const key = match[1];
    let value = match[2];

    // Clean --var
    if (value.startsWith("var(--")) {
      value = value.substring(6, value.length - 1);
    }

    // Clean to-rgb($blue-accent)
    if (value.startsWith("to-rgb(")) {
      value = value.substring(7, value.length - 1);
    }

    // Clean $pink-300
    if (value.startsWith("$")) {
      value = value.substring(1);
    }

    map.set(key, value);
  }
  log && console.log();
  return map;
}

const primitiveMap = await readFileIntoMap(
  primitivesFilename,
  cssVarRgbValuePattern,
);
const componentsMap = await readFileIntoMap(
  componentsFilename,
  cssVarCssVarPattern,
);

// Read the old dark and light themes
const oldDarkMap = await readFileIntoMap(oldDarkFilename, cssVarCssVarPattern);
const oldLightMap = await readFileIntoMap(
  oldLightFilename,
  cssVarCssVarPattern,
);
// Extend the old light with missing values from the old dark. Because the old light only overrides the old dark.
for (const [key, value] of oldDarkMap) {
  if (!oldLightMap.has(key)) {
    oldLightMap.set(key, value);
  }
}
if (oldLightMap.size !== oldDarkMap.size) {
  throw new Error(
    "The old light theme is missing some values from the old dark theme.",
  );
}

/**************************
 * Find missing variables *
 **************************/

logMissing &&
  console.log(
    "Existing in old dark but not in new dark:",
    sortMap(
      new Map([...oldDarkMap].filter(([key]) => !componentsMap.has(key))),
    ),
  );
logMissing &&
  console.log(
    "Existing in old light but not in new light:",
    sortMap(
      new Map([...oldLightMap].filter(([key]) => !componentsMap.has(key))),
    ),
  );
logMissing &&
  console.log(
    "Existing in new components but not in old dark:",
    sortMap(
      new Map([...componentsMap].filter(([key]) => !oldDarkMap.has(key))),
    ),
  );
logMissing &&
  console.log(
    "Existing in new components but not in old light:",
    sortMap(
      new Map([...componentsMap].filter(([key]) => !oldLightMap.has(key))),
    ),
  );

/**************************
 * Unknown old variables *
 **************************/

const oldLightColors = new Map(
  [...oldLightMap].map(([key, value]) => [
    key,
    recursiveSearch(key, value, oldLightMap, primitiveMap),
  ]),
);
const unknownLightColors = [...oldLightColors].filter(([, value]) =>
  value.includes(UNKNOWN),
);
unknownLightColors.length > 0 &&
  console.log(
    `\nPrimitives that used in old Light theme, but not found in new (${unknownLightColors.length}):`,
    sortMap(unknownLightColors),
  );

const oldDarkColors = new Map(
  [...oldDarkMap].map(([key, value]) => [
    key,
    recursiveSearch(key, value, oldDarkMap, primitiveMap),
  ]),
);
const unknownDarkColors = [...oldDarkColors].filter(([, value]) =>
  value.includes(UNKNOWN),
);
console.log(
  `\nPrimitives that used in old Dark theme, but not found in new (${unknownDarkColors.length}):`,
  sortMap(unknownDarkColors),
);

const newDarkMap = new Map(
  [...componentsMap].map(([key, value]) => [
    key,
    nightMap.get(value) ?? nightMap.get(componentsMap.get(value)),
  ]),
);
const newLightMap = new Map(
  [...componentsMap].map(([key, value]) => [
    key,
    lightMap.get(value) ?? lightMap.get(componentsMap.get(value)),
  ]),
);

// console.log(oldLightColors);

// console.log("\n\n\nNew Dark Theme:");
// for (const [componentName, themeName] of componentsMap) {
//   const themeValue = nightMap.get(themeName);
//   console.log(`--${componentName}: var(--${themeValue});`);
// }
