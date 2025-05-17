import type {
  OnEventCallback,
  OnMouseEventHandler,
} from "$lib/types/event-modifiers";

export const stopPropagation = (fn: OnEventCallback): OnMouseEventHandler => {
  return async (
    $event?: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
  ) => {
    $event?.stopPropagation();
    await fn();
  };
};
