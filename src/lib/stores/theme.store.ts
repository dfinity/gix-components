import type { Theme } from "$lib/types/theme";
import { applyTheme, getCurrentTheme, initTheme } from "$lib/utils/theme.utils";
import { nonNullish } from "@dfinity/utils";
import { writable } from "svelte/store";

export const initThemeStore = () => {
  const { subscribe, set } = writable<Theme | undefined>(initTheme());

  const setTheme = (theme: Theme | undefined) => {
    if (nonNullish(theme)) {
      applyTheme({ theme, preserve: true });
    }
    set(theme);
  };

  return {
    subscribe,

    select: (theme: Theme) => setTheme(theme),

    reset: () => setTheme(getCurrentTheme()),
  };
};

export const themeStore = initThemeStore();
