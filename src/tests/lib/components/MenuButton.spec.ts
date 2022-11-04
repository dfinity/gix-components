/**
 * @jest-environment jsdom
 */

import { fireEvent, render, type RenderResult } from "@testing-library/svelte";
import MenuButtonTest from "./MenuButtonTest.svelte";
import en from "../mocks/i18n.mock";

describe("MenuButton", () => {
  const toggleMenu = async ({ getByTestId }: RenderResult<MenuButtonTest>) => {
    const button = getByTestId("menu-toggle") as HTMLButtonElement;
    await fireEvent.click(button);
  };

  it("should open the menu", async () => {
    const spyOpen = jest.fn();

    const renderResult = render(MenuButtonTest, { props: { spy: spyOpen } });

    await toggleMenu(renderResult);

    expect(spyOpen).toBeCalledWith(true);
  });

  it("should close the menu", async () => {
    const spyOpen = jest.fn();

    const renderResult = render(MenuButtonTest, { props: { spy: spyOpen } });

    await toggleMenu(renderResult);
    expect(spyOpen).toBeCalledWith(true);

    await toggleMenu(renderResult);
    expect(spyOpen).toBeCalledWith(false);
  });

  const testA11y = ({ label, open }: { label: string; open: boolean }) => {
    const { getByTestId } = render(MenuButtonTest, {
      props: { spy: jest.fn(), open },
    });
    const button = getByTestId("menu-toggle") as HTMLButtonElement;
    expect(button.getAttribute("aria-label")).toEqual(label);
  };

  it("should render an aria label to open the menu", () =>
    testA11y({ label: en.core.menu, open: false }));

  it("should render an aria label to close the menu", () =>
    testA11y({ label: en.core.close, open: true }));
});
