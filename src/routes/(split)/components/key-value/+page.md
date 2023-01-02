<script lang="ts">
    import KeyValuePair from "$lib/components/KeyValuePair.svelte";
</script>

# Key Value

Often a value needs to be displayed with a predecessor related label.

```html
<KeyValuePair>
  <span slot="key" class="label">How many apples?</span>
  <span slot="value" class="value">8</span>
</KeyValuePair>
```

## Properties

| Property | Description                                                     | Type                    | Default     |
| -------- | --------------------------------------------------------------- | ----------------------- | ----------- |
| `testId` | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined` | `undefined` |

## Slots

| Slot name | Description                     |
| --------- | ------------------------------- |
| `key`     | The key that defines the value. |
| `value`   | The value.                      |

## Showcase

<KeyValuePair>
  <span slot="key" class="label">How many apples?</span>
  <span slot="value" class="value">8</span>
</KeyValuePair>
