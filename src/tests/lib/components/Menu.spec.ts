import Menu from "$lib/components/Menu.svelte";
import { layoutMenuOpen } from "$lib/stores/layout.store";
import { render } from "@testing-library/svelte";
import MenuTest from "./MenuTest.svelte";

describe("Menu", () => {
  it("should be displayed open", async () => {
    layoutMenuOpen.set(true);

    const { getByRole } = render(Menu);

    expect(getByRole("menu")).toHaveClass("open");
  });

  it("should be displayed closed", () => {
    layoutMenuOpen.set(false);

    const { getByRole } = render(Menu);

    expect(getByRole("menu")).not.toHaveClass("open");
  });

  it("should render slotted content", () => {
    const { getByTestId } = render(MenuTest);

    expect(getByTestId("menu-test-slot")).not.toBeNull();
  });
});
