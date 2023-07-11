export const isNode = (): boolean =>
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

export const isTest = (): boolean => import.meta.env.MODE === "test";
