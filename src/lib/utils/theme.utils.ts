import { Theme } from "../types/theme";
import { enumFromStringExists } from "./enum.utils";

const isNode = (): boolean =>
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

export const THEME_ATTRIBUTE = "theme";
export const LOCALSTORAGE_THEME_KEY = "nnsTheme";

export const initTheme = (): Theme => {
  // Jest NodeJS environment has no document
  if (isNode()) {
    return Theme.DARK;
  }

  const theme: string | null =
    document.documentElement.getAttribute(THEME_ATTRIBUTE);

  const initialTheme: Theme = enumFromStringExists({
    obj: Theme,
    value: theme,
  })
    ? (theme as Theme)
    : Theme.DARK;

  applyTheme({ theme: initialTheme, preserve: false });

  return initialTheme;
};

export const applyTheme = ({
  theme,
  preserve = true,
}: {
  theme: Theme;
  preserve?: boolean;
}) => {
  const { documentElement, head } = document;

  documentElement.setAttribute(THEME_ATTRIBUTE, theme);

  const color: string =
    getComputedStyle(documentElement).getPropertyValue("--theme-color");

  // Update theme-color for mobile devices to customize the display of the page or of the surrounding user interface
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
  head?.children
    ?.namedItem("theme-color")
    ?.setAttribute("content", color.trim());

  if (preserve) {
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, JSON.stringify(theme));
  }
};
