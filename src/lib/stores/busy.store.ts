import type { BusyState } from "$lib/types/busy";
import { nonNullish } from "@dfinity/utils";
import { derived, writable, type Readable } from "svelte/store";

/**
 * Store that reflects the app busy state.
 * Is used to show the busy-screen that locks the UI.
 */
const initBusyStore = () => {
  const { subscribe, update } = writable<Array<BusyState>>([]);

  return {
    subscribe,
    /**
     * Show the busy-screen if not visible
     */
    startBusy({ initiator: newInitiator, text }: BusyState) {
      update((state) => [
        ...state.filter(({ initiator }) => newInitiator !== initiator),
        { initiator: newInitiator, text },
      ]);
    },

    /**
     * Hide the busy-screen if no other initiators are done
     */
    stopBusy(initiatorToRemove: BusyState["initiator"]) {
      update((state) =>
        state.filter(({ initiator }) => initiator !== initiatorToRemove)
      );
    },
  };
};

export const busyStore = initBusyStore();

export const { startBusy, stopBusy } = busyStore;

export const busy: Readable<boolean> = derived(
  busyStore,
  ($busyStore) => $busyStore.length > 0
);

// Returns the newest message that was added to the store
export const busyMessage: Readable<string | undefined> = derived(
  busyStore,
  ($busyStore) =>
    $busyStore.reverse().find(({ text }) => nonNullish(text))?.text
);
