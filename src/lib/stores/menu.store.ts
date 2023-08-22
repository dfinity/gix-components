import { Menu } from "$lib/types/menu";
import { applyMenu, initMenu } from "$lib/utils/menu.utils";
import { derived, writable, type Readable } from "svelte/store";

const initialMenu: Menu | undefined = initMenu();

export interface MenuStore extends Readable<Menu | undefined> {
  toggle: () => void;
}

export const initMenuStore = (): MenuStore => {
  const { subscribe, update } = writable<Menu | undefined>(initialMenu);

  return {
    subscribe,

    toggle: () => {
      update((state) => {
        const menu = state === Menu.EXPANDED ? Menu.COLLAPSED : Menu.EXPANDED;

        applyMenu({ menu, preserve: true });
        return menu;
      });
    },
  };
};

export const menuStore = initMenuStore();

export const menuCollapsed = derived(
  menuStore,
  ($menuStore) => $menuStore === Menu.COLLAPSED,
);
