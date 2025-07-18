import type { Slug, SlugIcon } from "$docs/types/slug";
import { nonNullish } from "@dfinity/utils";
import { readFileSync, readdirSync } from "fs";
import { parse } from "path";

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
        .replace("width={size}", "")
        .replace("height={DEFAULT_ICON_SIZE}", "")
        .replace("width={DEFAULT_ICON_SIZE}", ""),
    }))
    .filter(({ svg }) => nonNullish(svg)) as SlugIcon[];
};

const listIconSlugs = (): Slug[] =>
  readdirSync(`src/lib/icons`)
    .filter((fileName) => /.+\.svelte$/.test(fileName))
    .map((fileName) => ({
      slug: parse(fileName).name,
    }));
