/**
 * @jest-environment jsdom
 */

import Menu from "$lib/components/Menu.svelte";
import { layoutMenuOpen } from "$lib/stores/layout.store";
import { render } from "@testing-library/svelte";
import MenuTest from "./MenuTest.svelte";

describe("Menu", () => {
  it("should be displayed open", async () => {
    layoutMenuOpen.set(true);

    const { getByTestId } = render(Menu);

    expect(getByTestId("menu-inner")).toHaveClass("open");
  });

  it("should be displayed closed", () => {
    layoutMenuOpen.set(false);

    const { getByTestId } = render(Menu);

    expect(getByTestId("menu-inner")).not.toHaveClass("open");
  });

  it("should render slotted content", () => {
    const { getByTestId } = render(MenuTest);

    expect(getByTestId("menu-test-slot")).not.toBeNull();
  });
});
