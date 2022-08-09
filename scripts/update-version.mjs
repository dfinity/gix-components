import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const updateVersion = () => {
  const packagePath = join(process.cwd(), "package", "package.json");

  if (!existsSync(packagePath)) {
    console.log(`Target ${packagePath} does not exist.`);
    return;
  }

  const packageJson = JSON.parse(readFileSync(packagePath, "utf-8"));
  packageJson.version = `${packageJson.version}-next-${new Date()
    .toISOString()
    .slice(0, 16)}`;
  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2), "utf-8");
};

updateVersion();
