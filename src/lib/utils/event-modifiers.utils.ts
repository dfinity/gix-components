/**
 * In Svelte 5, event modifiers are no longer part of the framework.
 * This module contains wrapper functions that replicate modifier behavior for Svelte 5.
 *
 * @see {@link https://svelte.dev/docs/svelte/v5-migration-guide#Event-changes-Event-modifiers}
 */

import type { OnEventCallback, OnEventParam } from "$lib/types/event-modifiers";
import type { MouseEventHandler } from "svelte/elements";

/**
 * A wrapper function to stop event propagation of a mouse event before executing a callback function.
 *
 * @param {OnEventCallback<T extends EventTarget> | null | undefined} fn - The function to be executed after stopping the event propagation. It can be a synchronous or asynchronous function, or null or undefined to skip the execution of the callback function and only stop the propagation of the event.
 *
 * @returns {MouseEventHandler<T extends EventTarget>} - A function that takes an event and stop its propagation, before executing the provided function.
 */
export const stopPropagation =
  <T extends EventTarget>(
    fn: OnEventCallback<T> | null | undefined,
  ): MouseEventHandler<T> =>
  async ($event: OnEventParam<T>) => {
    $event?.stopPropagation();
    await fn?.($event);
  };

/**
 * A wrapper function to prevent the default action of a mouse event before executing a callback function.
 *
 * @param {OnEventCallback<T extends EventTarget> | null | undefined} fn - The function to be executed after preventing the default action. It can be a synchronous or asynchronous function, or null or undefined to skip the execution of the callback function and only prevent the default action.
 *
 * @returns {MouseEventHandler<T extends EventTarget>} - A function that takes an event and prevents its default action, before executing the provided function.
 */
export const preventDefault =
  <T extends EventTarget>(
    fn: OnEventCallback<T> | null | undefined,
  ): MouseEventHandler<T> =>
  async ($event: OnEventParam<T>) => {
    $event?.preventDefault();
    await fn?.($event);
  };
