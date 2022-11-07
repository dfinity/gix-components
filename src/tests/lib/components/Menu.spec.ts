/**
 * @jest-environment jsdom
 */

import Menu from "$lib/components/Menu.svelte";
import { render } from "@testing-library/svelte";
import MenuTest from "./MenuTest.svelte";

describe("Menu", () => {
  it("should be displayed open on small devices", async () => {
    const { getByTestId } = render(Menu, {
      props: {
        open: true,
      },
    });

    expect(getByTestId("menu-inner")).toHaveClass("open");
  });

  it("should inherit default behavior", () => {
    const { getByTestId } = render(Menu, {
      props: {
        open: false,
      },
    });

    expect(getByTestId("menu-inner")).not.toHaveClass("open");
  });

  it("should render slotted content", () => {
    const { getByTestId } = render(MenuTest);

    expect(getByTestId("menu-test-slot")).not.toBeNull();
  });
});
