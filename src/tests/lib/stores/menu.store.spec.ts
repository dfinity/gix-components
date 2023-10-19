import { menuCollapsed, menuStore } from "$lib";
import { Menu } from "$lib/types/menu";
import { get } from "svelte/store";

describe("menu-store", () => {
  it("should derive collapsed", async () => {
    const store = get(menuStore);
    expect(store).toBeUndefined();

    menuStore.toggle();

    const storeExpanded = get(menuStore);
    expect(storeExpanded).toBe(Menu.EXPANDED);

    const derivedCollapsed = get(menuCollapsed);
    expect(derivedCollapsed).toBeFalsy();

    menuStore.toggle();

    const storeCollapsed = get(menuStore);
    expect(storeCollapsed).toBe(Menu.COLLAPSED);

    const derivedCollapsed2 = get(menuCollapsed);
    expect(derivedCollapsed2).toBeTruthy();
  });
});
