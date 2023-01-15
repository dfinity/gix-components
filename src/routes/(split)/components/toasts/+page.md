<script lang="ts">
    import { toastsStore } from "$lib/stores/toasts.store";
    import BottomSheet from "$lib/components/BottomSheet.svelte";

    const show = () => toastsStore.show({
        text: "An information",
        level: "info"
    });

    const error = () => toastsStore.show({
        text: "An error",
        level: "error"
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
</script>

# Toasts

A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on bottom of the dapp's content, and can be dismissed.

```html
<Toasts />
```

## Usage

The `<Toasts />` component should be provided once for your dapp. Commonly added to your root layout.

Showing or hiding messages happen through the use of a `toastsStore`:

```typescript
toastsStore.show({
  text: "Hello World",
  level: "info",
});
```

## Properties

A toast message can be created with following properties.

| Property   | Description                                                                                               | Type                                     | Mandatory |
| ---------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------- |
| `text`     | The text to display.                                                                                      | `string`                                 | ✅        |
| `level`    | How important the toast is?                                                                               | `info` or `success` or `warn` or `error` | ✅        |
| `spinner`  | Display a spinner instead of an icon that represents the `level`. The spinner inherits the `level` color. | `boolean`                                |           |
| `duration` | A timeout (in milliseconds) after which the toast automatically disappear.                                | `number`                                 |           |

## Showcase

<BottomSheet>
    <div style="padding: var(--padding-2x)">
        <button class="primary small" on:click={show}>Info</button>

        <button class="success small" on:click={success}>Success</button>

        <button class="danger small" on:click={error}>Error</button>

        <button class="secondary small" on:click={warn}>Warn</button>

        <button class="primary small" on:click={spinner}>Info and spinner</button>

        <button class="primary small" on:click={duration}>Info and auto fade after 3s</button>
    </div>

</BottomSheet>
