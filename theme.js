import { readFile } from 'fs/promises';

const darkFilename = 'src/lib/styles/themes/dark.scss';
const lightFilename = 'src/lib/styles/themes/light.scss';
const varPattern = /^\s*(--[^:]+):\s*(.*);/;

async function readFileIntoMap(filePath) {
  console.log(`Reading file: ${filePath}`);
  const data = await readFile(filePath, { encoding: 'utf8' });
  const lines = data.split('\n');
  const map = new Map();
  console.log('The following lines are ignored:');
  for (let line of lines) {
    line = line.trim();
    if (line === '' || line.startsWith('//')) {
      continue;
    }
    const match = line.match(varPattern);
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

function outputLines(lines) {
  for (const line of lines) {
    console.log(line);
  }
  console.log();
}

const darkMap = await readFileIntoMap(darkFilename);
const lightMap = await readFileIntoMap(lightFilename);
const pairMap = new Map();
const darkOnlyKeys = [];
const lightOnlyKeys = [];
const sameKeys = [];

for (const [key, darkValue] of darkMap) {
  const lightValue = lightMap.get(key);
  if (!lightValue) {
    darkOnlyKeys.push(key);
    continue;
  }
  if (darkValue == lightValue) {
    sameKeys.push(`${key}: ${darkValue}`);
    continue;
  }
  const pair = JSON.stringify([darkValue, lightValue]);
  const list = pairMap.get(pair) || [];
  list.push(key);
  pairMap.set(pair, list);
}

for (const [key, lightValue] of lightMap) {
  if (!darkMap.has(key)) {
    lightOnlyKeys.push(key);
  }
}

console.log('The following keys exist in dark but not in light:');
outputLines(darkOnlyKeys);

console.log('The following keys exist in light but not in dark:');
outputLines(lightOnlyKeys);

console.log('The following keys have the same value in dark and light:');
outputLines(sameKeys);

console.log('The following sections each require a unique theme variable:');
console.log();
let section = 1;
for (const [pair, keys] of pairMap) {
  const [darkValue, lightValue] = JSON.parse(pair);
  console.log(`Section ${section++}:`);
  console.log(`The following keys all have dark value '${darkValue}' and light value '${lightValue}':`);
  outputLines(keys);
}
