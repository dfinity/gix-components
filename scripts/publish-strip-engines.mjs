import { existsSync, readFileSync } from "node:fs";
import { cp, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const packagePath = join(process.cwd(), "package.json");
const packageBackupPath = join(process.cwd(), "package.json.backup");

const stripEngines = async () => {
  await cp(packagePath, packageBackupPath);

  console.log("package.json.backup saved");

  const { engines: _, ...rest } = JSON.parse(
    readFileSync(packagePath, "utf-8"),
  );

  await writeFile(packagePath, JSON.stringify(rest, null, 2), "utf-8");

  console.log("Field engines stripped from package.json");
};

const redoEngines = async () => {
  if (!existsSync(packageBackupPath)) {
    console.error("No package.json.backup found");
    process.exit(1);
  }

  await cp(packageBackupPath, packagePath);

  await rm(packageBackupPath);

  console.log("package.json restored");
};

const [action] = process.argv.slice(2);

switch (action) {
  case "strip": {
    await stripEngines();
    break;
  }
  case "redo": {
    await redoEngines();
    break;
  }
  default: {
    console.error("Unknown action.");
    process.exit(1);
  }
}
