<script lang="ts">
    import KeyValuePair from "$lib/components/KeyValuePair.svelte";
</script>

# Key Value

Often a value needs to be displayed with a predecessor related label.

```javascript
<KeyValuePair>
    {#snippet key()}How many apples?{/snippet}
    {#snippet value()}8{/snippet}
</KeyValuePair>
```

## Properties

| Property | Description                                                     | Type                    | Default     |
| -------- | --------------------------------------------------------------- | ----------------------- | ----------- |
| `testId` | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined` | `undefined` |

## Snippets

| Snippet | Description                     |
| ------- | ------------------------------- |
| `key`   | The key that defines the value. |
| `value` | The value.                      |

## Showcase

<KeyValuePair>
    {#snippet key()}How many apples?{/snippet}
    {#snippet value()}8{/snippet}
</KeyValuePair>
