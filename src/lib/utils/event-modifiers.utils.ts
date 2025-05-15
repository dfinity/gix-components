import type { GenericCallback } from "$lib/types/functions";

export const stopPropagation = (fn: GenericCallback) => {
  return async (
    event?: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
  ) => {
    event?.stopPropagation();
    await fn();
  };
};
