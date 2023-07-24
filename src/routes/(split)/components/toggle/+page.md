<script lang="ts">
    import Toggle from "$lib/components/Toggle.svelte";
    import { toastsStore } from "$lib/stores/toasts.store";

    const toggle = ({ detail }: CustomEvent<boolean>) => toastsStore.show({
        text: `Toggle state ${detail}`,
        level: "info"
    });
</script>

# Toggle

Toggle switch gives control over a feature or option that can be turned on or off. If a physical switch would work for the action, a toggle is probably the best component to use.

```javascript
<script lang="ts">
  let checked: boolean;
</script>

<Toggle bind:checked />
```

## Properties

| Property    | Description                                                                                         | Type      | Default |
| ----------- | --------------------------------------------------------------------------------------------------- | --------- | ------- |
| `checked`   | Bind the `checked` attribute of the HTML input of type `checkbox` that is rendered by the component | `boolean` |         |
| `ariaLabel` | An accessible label for the toggler                                                                 | `string`  |         |

## Events

| Event       | Description                                              | Detail                 |
| ----------- | -------------------------------------------------------- | ---------------------- |
| `nnsToggle` | Triggered each time the state of the toggle is changing. | `CustomEvent<boolean>` |

## Showcase

<Toggle
    on:nnsToggle={toggle}
    ariaLabel="Showcase toggle"
    checked={false}
/>
