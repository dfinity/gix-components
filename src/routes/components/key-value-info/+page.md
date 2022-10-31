<script lang="ts">
    import KeyValueInfo from "$lib/components/KeyValueInfo.svelte";
</script>

# Key Value

As [KeyValuePair](/components/key-value), this component renders a value and a label but, in addition, also displays a related information that is per default hidden and can be displayed by a click on an information icon.

```html
<KeyValuePairInfo>
  <svelte:fragment slot="key">How many apples?</svelte:fragment>
  <span slot="value" class="value">8</span>
  <svelte:fragment slot="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu.</svelte:fragment>
</KeyValuePairInfo>
```

## Properties

| Property       | Description                                                                               | Type                                | Default     |
| -------------- | ----------------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `testId`       | Add a `data-tid` attribute to the DOM, useful for test purpose.                           | `string` or `undefined`             | `undefined` |


## Slots

| Slot name | Description                     |
|-----------|---------------------------------|
| `key`     | The key that defines the value. |
| `value`   | The value.                      |
| `info`    | The collapsed information.      |

## Showcase

<KeyValuePairInfo>
  <svelte:fragment slot="key">How many apples?</svelte:fragment>
  <span slot="value" class="value">8</span>
  <svelte:fragment slot="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu.</svelte:fragment>
</KeyValuePairInfo>