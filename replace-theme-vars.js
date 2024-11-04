import { readFile } from "fs/promises";

const darkFilename = "src/lib/styles/themes/dark.scss";
const lightFilename = "src/lib/styles/themes/light.scss";
const nightFilename = "src/lib/styles/themes/night.scss";
const componentsFilename = "src/lib/styles/themes/components.scss";
const cssVarCssVarPattern = /^\s*--([^:]+):\s*var\(--(.*)\);/;
const cssVarSassVarPattern = /^\s*--([^:]+):\s*#\{\$(.*)\};/;

async function readFileIntoMap(filePath, pattern) {
  console.log(`Reading file: ${filePath}`);
  const data = await readFile(filePath, { encoding: "utf8" });
  const lines = data.split("\n");
  const map = new Map();
  console.log("The following lines are ignored:");
  for (let line of lines) {
    line = line.trim();
    if (line === "" || line.startsWith("//")) {
      continue;
    }
    const match = line.match(pattern);
    if (!match) {
      console.log(line);
      continue;
    }
    const key = match[1];
    const value = match[2];
    map.set(key, value);
  }
  console.log();
  return map;
}

const darkMap = await readFileIntoMap(darkFilename, cssVarSassVarPattern);
const lightMap = await readFileIntoMap(lightFilename, cssVarSassVarPattern);
const nightMap = await readFileIntoMap(nightFilename, cssVarSassVarPattern);
const componentsMap = await readFileIntoMap(
  componentsFilename,
  cssVarCssVarPattern,
);

console.log("\n\n\nNew Dark Theme:");
for (const [componentName, themeName] of componentsMap) {
  const themeValue = nightMap.get(themeName);
  console.log(`--${componentName}: var(--${themeValue});`);
}
