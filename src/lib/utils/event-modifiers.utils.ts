/**
 * In Svelte 5, event modifiers are no longer part of the framework.
 * This module contains wrapper functions that replicate modifier behavior for Svelte 5.
 *
 * @see {@link https://svelte.dev/docs/svelte/v5-migration-guide#Event-changes-Event-modifiers}
 */

import type { OnEventCallback, OnEventParam } from "$lib/types/event-modifiers";
import type { EventHandler } from "svelte/elements";

/**
 * A wrapper function to stop event propagation of a mouse event before executing a callback function.
 *
 * @param {OnEventCallback<E extends Event = Event, T extends EventTarget = EventTarget>} fn - The function to be executed after stopping the event propagation. It can be a synchronous or asynchronous function.
 *
 * @returns {EventHandler<E extends Event = Event, T extends EventTarget = EventTarget>} - A function that takes an event and stop its propagation, before executing the provided function.
 */
export const stopPropagation =
  <E extends Event = Event, T extends EventTarget = EventTarget>(
    fn: OnEventCallback<E, T>,
  ): EventHandler<E, T> =>
  async ($event: OnEventParam<E, T>) => {
    $event?.stopPropagation();
    await fn($event);
  };

/**
 * A wrapper function to prevent the default action of a mouse event before executing a callback function.
 *
 * @param {OnEventCallback<E extends Event = Event, T extends EventTarget = EventTarget>} fn - The function to be executed after preventing the default action. It can be a synchronous or asynchronous function.
 *
 * @returns {EventHandler<E extends Event = Event, T extends EventTarget = EventTarget>} - A function that takes an event and prevents its default action, before executing the provided function.
 */
export const preventDefault =
  <E extends Event = Event, T extends EventTarget = EventTarget>(
    fn: OnEventCallback<E, T>,
  ): EventHandler<E, T> =>
  async ($event: OnEventParam<E, T>) => {
    $event?.preventDefault();
    await fn($event);
  };
