# Utility Functions

A collection of handy JavaScript/TypeScript utility functions you can use alongside the UI kit in your projects.

<!-- TSDOC_START -->

## Functions

- [stopPropagation](#stoppropagation)

### stopPropagation

A wrapper function to stop event propagation of a mouse event before executing a callback function.

| Function          | Type                                                                   |
| ----------------- | ---------------------------------------------------------------------- |
| `stopPropagation` | `<T extends EventTarget>(fn: OnEventCallback) => MouseEventHandler<T>` |

Parameters:

- `fn`: - The function to be executed after stopping the event propagation. It can be a synchronous or asynchronous function.

[Source](https://github.com/dfinity/gix-components/tree/main/src/lib/utils/event-modifiers.utils.ts#L18)

<!-- TSDOC_END -->
