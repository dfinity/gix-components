import ThemeToggle from "$lib/components/ThemeToggle.svelte";
import IconDarkMode from "$lib/icons/IconDarkMode.svelte";
import IconLightMode from "$lib/icons/IconLightMode.svelte";
import { themeStore } from "$lib/stores/theme.store";
import { Theme } from "$lib/types/theme";
import { fireEvent, render } from "@testing-library/svelte";
import { get } from "svelte/store";
import en from "../mocks/i18n.mock";

describe("ThemeToggle", () => {
  it("should render a toggle button", () => {
    const { container } = render(ThemeToggle);

    const input = container.querySelector("button") as HTMLButtonElement;
    expect(input).not.toBeNull();
  });

  it("should render an accessible toggle button", () => {
    const { container } = render(ThemeToggle);

    const input = container.querySelector("button") as HTMLButtonElement;
    expect(input.getAttribute("aria-label")).toEqual(en.theme.switch_theme);
  });

  it("should switch theme", () => {
    const { container } = render(ThemeToggle);

    const input = container.querySelector("button") as HTMLButtonElement;

    fireEvent.click(input);
    expect(get(themeStore)).toEqual(Theme.LIGHT);

    fireEvent.click(input);
    expect(get(themeStore)).toEqual(Theme.DARK);
  });

  it("should render IconLightMode when theme is dark", () => {
    themeStore.select(Theme.DARK);
    const { container } = render(ThemeToggle);

    const lightModeIcon = container.querySelector("svg");
    expect(lightModeIcon).toBeInstanceOf(SVGSVGElement);
    expect(container.innerHTML).toContain(
      render(IconLightMode).container.innerHTML,
    );
  });

  it("should render IconDarkMode when theme is light", () => {
    themeStore.select(Theme.LIGHT);
    const { container } = render(ThemeToggle);

    const darkModeIcon = container.querySelector("svg");
    expect(darkModeIcon).toBeInstanceOf(SVGSVGElement);
    expect(container.innerHTML).toContain(
      render(IconDarkMode).container.innerHTML,
    );
  });
});
