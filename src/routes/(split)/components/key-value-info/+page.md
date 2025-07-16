<script lang="ts">
    import KeyValuePairInfo from "$lib/components/KeyValuePairInfo.svelte";
</script>

# Key Value Info

As [KeyValuePair](/components/key-value), this component renders a value and a label but, in addition, also displays a related information that is per default hidden and can be displayed by a click on an information icon.

```javascript
<KeyValuePairInfo>
    {#snippet key()}How many apples?{/snippet}
    {#snippet value()}8{/snippet}
    {#snippet info()}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia
        turpis mi, a facilisis risus elementum eu.
    {/snippet}
</KeyValuePairInfo>
```

## Properties

| Property         | Description                                                     | Type                     | Default     |
| ---------------- | --------------------------------------------------------------- | ------------------------ | ----------- |
| `testId`         | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined`  | `undefined` |
| `alignIconRight` | When true the info icon will be rendered on the right side.     | `boolean` or `undefined` | `false`     |

## Snippets

| Snippet | Description                     |
|---------| ------------------------------- |
| `key`   | The key that defines the value. |
| `value` | The value.                      |
| `info`  | The collapsed information.      |

## Showcase

### Default

<KeyValuePairInfo>
  {#snippet key()}How many apples?{/snippet}
  {#snippet value()}8{/snippet}
  {#snippet info()}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu.{/snippet}
</KeyValuePairInfo>

### alignIconRight

<KeyValuePairInfo alignIconRight>
  {#snippet key()}How many apples?{/snippet}
  {#snippet value()}8{/snippet}
  {#snippet info()}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu.{/snippet}
</KeyValuePairInfo>

<br>

<KeyValuePairInfo alignIconRight>
  {#snippet key()}Demo container ID{/snippet}
  {#snippet value()}tcszx-rqbbb-aaaaa-aabyq-cai{/snippet}
  {#snippet info()}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu.{/snippet}
</KeyValuePairInfo>
