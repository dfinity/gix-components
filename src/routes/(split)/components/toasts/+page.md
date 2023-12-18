<script lang="ts">
    import { toastsStore } from "$lib/stores/toasts.store";
    import BottomSheet from "$lib/components/BottomSheet.svelte";
    import IconMeter from "$lib/icons/IconMeter.svelte";

    const show = () => toastsStore.show({
        text: "An information",
        level: "info"
    });

    const error = () => toastsStore.show({
        text: "An error",
        level: "error"
    });

    const errorTop = () => toastsStore.show({
        text: "An error",
        level: "error",
        position: "top",
    });

    const warn = () => toastsStore.show({
        text: "A warning",
        level: "warn"
    });

    const success = () => toastsStore.show({
        text: "A successful message",
        level: "success"
    });

    const spinner = () => toastsStore.show({
        text: "An information",
        level: "info",
        spinner: true
    });

    const duration = () => toastsStore.show({
        text: "An information",
        level: "info",
        duration: 3000
    });

    const message = () => toastsStore.show({
        text: "An information",
        level: "custom",
        position: "top",
        title: "An important message",
        overflow: "truncate",
        icon: IconMeter,
        theme: "inverted",
    });    

    const multiline = () => toastsStore.show({
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        level: "info",
        duration: 3000
    });

    const title = () => toastsStore.show({
        title: "A title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        level: "info",
        duration: 3000
    });
</script>

# Toasts

A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on bottom of the dapp's content, and can be dismissed.

```javascript
<Toasts />
```

## Usage

The `<Toasts />` component should be provided once - per `position` for your dapp. Commonly added to your root layout.

Showing or hiding messages happen through the use of a `toastsStore`:

```typescript
toastsStore.show({
  text: "Hello World",
  level: "info",
});
```

## Properties

A toast message can be created with following properties.

| Property   | Description                                                                                                  | Type                                     | Mandatory |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------- |
| `id`       | A unique ID to identify the toast.                                                                           | `symbol`                                 |           |
| `title`    | A title that can be displayed before the text.                                                               | `string`                                 |           |
| `text`     | The text to display.                                                                                         | `string`                                 | ✅        |
| `level`    | How important the toast is?                                                                                  | `info` or `success` or `warn` or `error` | ✅        |
| `spinner`  | Display a spinner instead of an icon that represents the `level`. The spinner inherits the `level` color.    | `boolean`                                |           |
| `duration` | A timeout (in milliseconds) after which the toast automatically disappear.                                   | `number`                                 |           |
| `position` | The position of the toast. A related `<Toasts />` component should be declared in order to use the position. | `bottom` or `top`                        |           |
| `overflow` | By default, a text content of a toast is scrollbable. This option truncate or clamp the text and title.      | `scroll` or `truncate` or `clamp`        |           |
| `icon`     | A custom icon to be displayed before the text of the toast.                                                  | `ComponentType`                          |           |

## Showcase

<BottomSheet>
    <div style="padding: var(--padding-2x)">
        <!-- A placeholder to display the toast being presented above the bottom sheet on small devices -->
    </div>
</BottomSheet>

<div data-tid="showcase">
<p>Bottom toasts:</p>

<div style="padding: var(--padding-2x); display: flex; flex-wrap: wrap; gap: var(--padding);">
    <button class="primary small" on:click={show} data-tid="toast-info">Info</button>

    <button class="success small" on:click={success} data-tid="toast-success">Success</button>

    <button class="danger small" on:click={error} data-tid="toast-error">Error</button>

    <button class="danger small" on:click={errorTop} data-tid="toast-error-top">Error (Top)</button>

    <button class="secondary small" on:click={warn} data-tid="toast-warn">Warn</button>

    <button class="primary small" on:click={spinner}>Info and spinner</button>

    <button class="primary small" on:click={duration}>Info and auto fade after 3s</button>

    <button class="primary small" on:click={multiline}>Multi-line message</button>

    <button class="primary small" on:click={title}>With a title</button>

</div>

<p>Top end toasts:</p>

<div style="padding: var(--padding-2x); display: flex; flex-wrap: wrap; gap: var(--padding);">
    <button class="primary small" on:click={message} data-tid="toast-message">Message</button>
</div>
</div>
