import { Menu } from "$lib/types/menu";
import { applyMenu, MENU_ATTRIBUTE } from "$lib/utils/menu.utils";

describe("menu-utils", () => {
  it("should apply menu to root html element", () => {
    applyMenu({ menu: Menu.COLLAPSED });

    const { documentElement } = document;

    expect(documentElement).toHaveAttribute(MENU_ATTRIBUTE);
    expect(documentElement.getAttribute(MENU_ATTRIBUTE)).toContain(
      `${Menu.COLLAPSED}`,
    );
  });
});
