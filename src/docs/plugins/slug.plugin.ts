import type { Slug } from "$docs/types/slug";
import { readdirSync, readFileSync } from "fs";
import { parse } from "path";
import type { SlugIcon } from "$docs/types/slug";

export const listIcons = (): SlugIcon[] => {
  const slugs = listIconSlugs();

  return slugs
    .map(({ slug }) => ({
      name: slug,
      svg: readFileSync(`src/lib/icons/${slug}.svelte`, {
        encoding: "utf8",
      })
        .match(/<svg.*svg\W*>/s)?.[0]
        .replace("height={size}", "")
        .replace("width={size}", ""),
    }))
    .filter(({ svg }) => svg !== undefined) as SlugIcon[];
};

const listIconSlugs = (): Slug[] => {
  return readdirSync(`src/lib/icons`)
    .filter((fileName) => /.+\.svelte$/.test(fileName))
    .map((fileName) => ({
      slug: parse(fileName).name,
    }));
};
