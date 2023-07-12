import MenuButton from "$lib/components/MenuButton.svelte";
import { layoutMenuOpen } from "$lib/stores/layout.store";
import { fireEvent, render, type RenderResult } from "@testing-library/svelte";
import { get } from "svelte/store";
import en from "../mocks/i18n.mock";

describe("MenuButton", () => {
  const toggleMenu = async ({ getByTestId }: RenderResult<MenuButton>) => {
    const button = getByTestId("menu-toggle") as HTMLButtonElement;
    await fireEvent.click(button);
  };

  it("should open the menu", async () => {
    const renderResult = render(MenuButton);

    await toggleMenu(renderResult);

    expect(get(layoutMenuOpen)).toEqual(true);
  });

  it("should close the menu", async () => {
    layoutMenuOpen.set(false);

    const renderResult = render(MenuButton);

    await toggleMenu(renderResult);
    expect(get(layoutMenuOpen)).toEqual(true);

    await toggleMenu(renderResult);
    expect(get(layoutMenuOpen)).toEqual(false);
  });

  const testA11y = ({ label, open }: { label: string; open: boolean }) => {
    layoutMenuOpen.set(open);

    const { getByTestId } = render(MenuButton);
    const button = getByTestId("menu-toggle") as HTMLButtonElement;
    expect(button.getAttribute("aria-label")).toEqual(label);
  };

  it("should render an aria label to open the menu", () =>
    testA11y({ label: en.core.menu, open: false }));

  it("should render an aria label to close the menu", () =>
    testA11y({ label: en.core.close, open: true }));
});
