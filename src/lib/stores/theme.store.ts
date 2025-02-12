import type { Theme } from "$lib/types/theme";
import { applyTheme, initTheme } from "$lib/utils/theme.utils";
import { writable, type Readable } from "svelte/store";

export type ThemeStoreData = Theme | undefined;

export interface ThemeStore extends Readable<ThemeStoreData> {
  select: (theme: Theme) => void;
}

const initialTheme: ThemeStoreData = initTheme();

export const initThemeStore = (): ThemeStore => {
  const { subscribe, set } = writable<ThemeStoreData>(initialTheme);

  return {
    subscribe,

    select: (theme: Theme) => {
      applyTheme({ theme, preserve: true });
      set(theme);
    },
  };
};

export const themeStore = initThemeStore();
