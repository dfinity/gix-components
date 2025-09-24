# Utility Functions

A collection of handy JavaScript/TypeScript utility functions you can use alongside the UI kit in your projects.

<!-- TSDOC_START -->

## Functions

- [stopPropagation](#stoppropagation)
- [preventDefault](#preventdefault)

### stopPropagation

A wrapper function to stop event propagation of a mouse event before executing a callback function.

| Function          | Type                                                                              |
| ----------------- | --------------------------------------------------------------------------------- |
| `stopPropagation` | `<T extends EventTarget>(fn: OptionalOnEventCallback<T>) => MouseEventHandler<T>` |

Parameters:

- `fn`: - The function to be executed after stopping the event propagation. It can be a synchronous or asynchronous function, or null or undefined to skip the execution of the callback function and only stop the propagation of the event.

Returns:

Event, T extends EventTarget = EventTarget>} - A function that takes an event and stop its propagation, before executing the provided function.

[Source](https://github.com/dfinity/gix-components/tree/main/src/lib/utils/event-modifiers.utils.ts#L21)

### preventDefault

A wrapper function to prevent the default action of a mouse event before executing a callback function.

| Function         | Type                                                                              |
| ---------------- | --------------------------------------------------------------------------------- |
| `preventDefault` | `<T extends EventTarget>(fn: OptionalOnEventCallback<T>) => MouseEventHandler<T>` |

Parameters:

- `fn`: - The function to be executed after preventing the default action. It can be a synchronous or asynchronous function, or null or undefined to skip the execution of the callback function and only prevent the default action.

Returns:

Event, T extends EventTarget = EventTarget>} - A function that takes an event and prevents its default action, before executing the provided function.

[Source](https://github.com/dfinity/gix-components/tree/main/src/lib/utils/event-modifiers.utils.ts#L37)

<!-- TSDOC_END -->

<style lang="scss">
    ul + p {
        padding: var(--padding) 0;
    }
</style>
