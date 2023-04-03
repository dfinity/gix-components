/**
 * @jest-environment jsdom
 */

import MenuBackground from "$lib/components/MenuBackground.svelte";
import { themeStore } from "$lib/stores/theme.store";
import { Theme } from "$lib/types/theme";
import { render } from "@testing-library/svelte";

describe("MenuBackground", () => {
  it("should not render background image", () => {
    const { getByTestId } = render(MenuBackground);
    expect(() => getByTestId("menu-background")).toThrow();
  });

  it("should render background image when theme is set", () => {
    themeStore.select(Theme.DARK);

    const { getByTestId } = render(MenuBackground);
    expect(getByTestId("menu-background")).not.toBeNull();
  });
});
