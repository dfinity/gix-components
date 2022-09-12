import { writable } from "svelte/store";
import type { ToastMsg } from "$lib/types/toast";

/**
 * Toast messages.
 *
 * - show: display a message in toast component
 * - hide: remove the toast message with that timestamp or the first one.
 * - reset: empty all toasts
 */
const initToastsStore = () => {
  const { subscribe, update, set } = writable<ToastMsg[]>([]);

  return {
    subscribe,

    show(msg: Omit<ToastMsg, "id">): symbol {
      const id = Symbol("toast");

      update((messages: ToastMsg[]) => {
        return [...messages, { ...msg, id }];
      });

      return id;
    },

    hide(idToHide: symbol) {
      update((messages: ToastMsg[]) =>
        messages.filter(({ id }) => id !== idToHide)
      );
    },

    reset() {
      set([]);
    },
  };
};

export const toastsStore = initToastsStore();
