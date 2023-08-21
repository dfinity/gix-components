import type { Menu } from "$lib/types/menu";
import { applyMenu, initMenu } from "$lib/utils/menu.utils";
import { writable } from "svelte/store";

const initialMenu: Menu | undefined = initMenu();

export const initMenuStore = () => {
  const { subscribe, set } = writable<Menu | undefined>(initialMenu);

  return {
    subscribe,

    select: (menu: Menu) => {
      applyMenu({ menu, preserve: true });
      set(menu);
    },
  };
};

export const menuStore = initMenuStore();
