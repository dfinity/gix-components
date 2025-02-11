import { initThemeStore, themeStore } from "$lib";
import { Theme } from "$lib/types/theme";
import * as envUtils from "$lib/utils/env.utils";
import * as themeUtils from "$lib/utils/theme.utils";
import { THEME_ATTRIBUTE } from "$lib/utils/theme.utils";
import { get } from "svelte/store";

describe("theme-store", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
    vi.resetAllMocks();

    window.document.documentElement.removeAttribute(THEME_ATTRIBUTE);

    vi.spyOn(envUtils, "isNode").mockReturnValue(false);
  });

  it("should initialise with the no theme if the theme is not set", () => {
    expect(get(themeStore)).toBeUndefined();
  });

  it.each(Object.values(Theme))(
    "should initialise with the current '%s' theme",
    (theme) => {
      window.document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);

      const spy = vi.spyOn(themeUtils, "initTheme");

      const mockThemeStore = initThemeStore();

      expect(get(mockThemeStore)).toBe(theme);
      expect(spy).toHaveBeenCalledOnce();
    },
  );

  it("should apply and store the selected theme", () => {
    const spy = vi.spyOn(themeUtils, "applyTheme");

    themeStore.select(Theme.LIGHT);

    expect(get(themeStore)).toBe(Theme.LIGHT);
    expect(spy).toHaveBeenCalledWith({ theme: Theme.LIGHT, preserve: true });
    expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toBe(
      Theme.LIGHT,
    );

    themeStore.select(Theme.DARK);

    expect(get(themeStore)).toBe(Theme.DARK);
    expect(spy).toHaveBeenCalledWith({ theme: Theme.DARK, preserve: true });
    expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toBe(
      Theme.DARK,
    );

    // Just to double-check, we set it to light once more
    themeStore.select(Theme.LIGHT);

    expect(get(themeStore)).toBe(Theme.LIGHT);
    expect(spy).toHaveBeenCalledWith({ theme: Theme.LIGHT, preserve: true });
    expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toBe(
      Theme.LIGHT,
    );
  });

  it("should refresh to the current theme", () => {
    const spy = vi.spyOn(themeUtils, "applyTheme");

    // We first set the store, then we mock that the attribute may be changed in a different way
    themeStore.select(Theme.LIGHT);
    expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toBe(
      Theme.LIGHT,
    );
    window.document.documentElement.setAttribute(THEME_ATTRIBUTE, Theme.DARK);

    themeStore.refresh();

    expect(get(themeStore)).toBe(Theme.DARK);
    expect(spy).toHaveBeenCalledWith({ theme: Theme.DARK, preserve: true });
  });

  it("should handle gracefully when the theme is not set", () => {
    window.document.documentElement.removeAttribute(THEME_ATTRIBUTE);

    const mockThemeStore = initThemeStore();

    expect(get(mockThemeStore)).toBe(Theme.DARK);
  });

  it("should handle gracefully when the theme is not correctly set", () => {
    window.document.documentElement.setAttribute(
      THEME_ATTRIBUTE,
      "invalid-theme",
    );

    const mockThemeStore = initThemeStore();

    expect(get(mockThemeStore)).toBe(Theme.DARK);
  });
});
