<script lang="ts">
    import KeyValuePairInfo from "$lib/components/KeyValuePairInfo.svelte";
</script>

# Key Value Info

As [KeyValuePair](/components/key-value), this component renders a value and a label but, in addition, also displays a related information that is per default hidden and can be displayed by a click on an information icon.

```javascript
<KeyValuePairInfo>
  <svelte:fragment slot="key">How many apples?</svelte:fragment>
  <span slot="value" class="value">
    8
  </span>
  <svelte:fragment slot="info">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia
    turpis mi, a facilisis risus elementum eu.
  </svelte:fragment>
</KeyValuePairInfo>
```

## Properties

| Property         | Description                                                     | Type                     | Default     |
| ---------------- | --------------------------------------------------------------- | ------------------------ | ----------- |
| `testId`         | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined`  | `undefined` |
| `alignIconRight` | When true the info icon will be rendered on the right side.     | `boolean` or `undefined` | `false`     |

## Slots

| Slot name | Description                     |
| --------- | ------------------------------- |
| `key`     | The key that defines the value. |
| `value`   | The value.                      |
| `info`    | The collapsed information.      |

## Showcase

### Default

<KeyValuePairInfo>
  <svelte:fragment slot="key">How many apples?</svelte:fragment>
  <span slot="value" class="value">8</span>
  <svelte:fragment slot="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu.</svelte:fragment>
</KeyValuePairInfo>

### alignIconRight

<KeyValuePairInfo alignIconRight>
  <svelte:fragment slot="key">How many apples?</svelte:fragment>
  <span slot="value" class="value">8</span>
  <svelte:fragment slot="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu.</svelte:fragment>
</KeyValuePairInfo>

<br>

<KeyValuePairInfo alignIconRight>
  <svelte:fragment slot="key">Demo container ID</svelte:fragment>
  <span slot="value" class="value">tcszx-rqbbb-aaaaa-aabyq-cai</span>
  <svelte:fragment slot="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu.</svelte:fragment>
</KeyValuePairInfo>
