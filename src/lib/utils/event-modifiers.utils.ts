// In Svelte 5 the events do not have modifiers anymore.
// This module contains wrapper functions of event modifiers for Svelte 5.
// Documentation: https://svelte.dev/docs/svelte/v5-migration-guide#Event-changes-Event-modifiers

import type { OnEventCallback } from "$lib/types/event-modifiers";
import type { MouseEventHandler } from "svelte/elements";

/**
 * A wrapper function to stop event propagation of a mouse event before executing a callback function.
 *
 * @param {OnEventCallback} fn - The function to be executed after stopping the event propagation. It can be a synchronous or asynchronous function.
 *
 * @returns {MouseEventHandler<T extends EventTarget> | undefined | null} - A function that takes an event and stop its propagation, before executing the provided function.
 */
export const stopPropagation = <T extends EventTarget>(
  fn: OnEventCallback,
): MouseEventHandler<T> | undefined | null => {
  return async ($event?: MouseEvent & { currentTarget: EventTarget & T }) => {
    $event?.stopPropagation();
    await fn();
  };
};
