import type { OnEventCallback } from "$lib/types/event-modifiers";
import type { MouseEventHandler } from "svelte/elements";

export const stopPropagation = <T extends EventTarget>(
  fn: OnEventCallback,
): MouseEventHandler<T> => {
  return async ($event?: MouseEvent & { currentTarget: EventTarget & T }) => {
    $event?.stopPropagation();
    await fn();
  };
};
