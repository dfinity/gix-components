import { Menu } from "$lib/types/menu";
import { applyMenu, initMenu } from "$lib/utils/menu.utils";
import { writable, type Readable } from "svelte/store";

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
        const menu = state === Menu.COLLAPSED ? Menu.EXPANDED : Menu.COLLAPSED;

        applyMenu({ menu, preserve: true });
        return menu;
      });
    },
  };
};

export const menuStore = initMenuStore();
