import type { ToastMsg } from "$lib/types/toast";
import { writable } from "svelte/store";

/**
 * Toast messages.
 *
 * - show: display a message in toast component
 * - hide: remove the toast message with that timestamp or the first one.
 * - update: update the existed toast content.
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

    update({
      id,
      content,
    }: {
      id: symbol;
      content: Partial<Omit<ToastMsg, "id">>;
    }) {
      update((messages: ToastMsg[]) =>
        // use map to preserve order
        messages.map((message) => {
          if (message.id !== id) {
            return message;
          }
          return {
            ...message,
            ...content,
          };
        })
      );
    },

    reset() {
      set([]);
    },
  };
};

export const toastsStore = initToastsStore();
