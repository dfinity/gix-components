/**
 * In Svelte 5 the events do not have modifiers anymore.
 * This module contains wrapper functions of event modifiers for Svelte 5.
 *
 * Documentation: https://svelte.dev/docs/svelte/v5-migration-guide#Event-changes-Event-modifiers
 */

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
