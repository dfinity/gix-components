<script lang="ts">
    import InputRange from "$lib/components/InputRange.svelte";
</script>

# Input Range

The input range component is a wrapper to the HTML input of `type="range"`.

```javascript
<InputRange min="{0}" max="{50}" value="{10}" />
```

## Properties

| Property      | Description                         | Type                        | Default     |
| ------------- | ----------------------------------- | --------------------------- | ----------- |
| `max`         | HTML input `max` field.             | `number`                    |             |
| `min`         | HTML input `min` field.             | `number`                    |             |
| `value`       | HTML input `value` field.           | `number`                    |             |
| `ariaLabel`   | HTML input `aria-label` field.      | `string`                    |             |
| `handleInput` | A callback executed on user inputs. | `() => void` or `undefined` | `undefined` |

## Showcase

<div class="card-grid">
    <InputRange min={0} max={50} value={10} />
</div>
