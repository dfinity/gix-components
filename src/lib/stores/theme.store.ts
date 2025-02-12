import type { Theme } from "$lib/types/theme";
import { applyTheme, getCurrentTheme, initTheme } from "$lib/utils/theme.utils";
import { nonNullish } from "@dfinity/utils";
import { writable, type Readable } from "svelte/store";

export type ThemeStoreData = Theme | undefined;

export interface ThemeStore extends Readable<ThemeStoreData> {
  select: (theme: Theme) => void;
}

const initialTheme: ThemeStoreData = initTheme();

export const initThemeStore = (): ThemeStore => {
  const { subscribe, set } = writable<ThemeStoreData>(initialTheme);

  const setTheme = (theme: Theme | undefined) => {
    if (nonNullish(theme)) {
      applyTheme({ theme, preserve: true });
    }
    set(theme);
  };

  return {
    subscribe,

    select: (theme: Theme) => setTheme(theme),

    refresh: () => setTheme(getCurrentTheme()),
  };
};

export const themeStore = initThemeStore();
