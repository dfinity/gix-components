/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import Menu from "$lib/components/Menu.svelte";

describe("Menu", () => {
  it("menu should be closed per default", () => {
    const { getByRole } = render(Menu);
    expect(() => getByRole("menu")).toThrow();
  });

  it("menu should be open", () => {
    const { getByRole } = render(Menu, { props: { open: true } });
    expect(getByRole("menu")).toBeInTheDocument();
  });
});
