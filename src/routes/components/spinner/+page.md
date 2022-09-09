<script lang="ts">
    import Spinner from "$lib/components/Spinner.svelte";
</script>

# Spinner

Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.

```html
<Spinner />
```

# Styling

The component has a `absolute` positioning. If you would like to include it within your components, you would need to wrap it around a container.

## Properties

| Property | Description                                         | Type                | Default  |
| -------- | --------------------------------------------------- | ------------------- | -------- |
| `inline` | Display the spinner as block or optionnaly inlined. | `boolean`           | `false`  |
| `size`   | The size of the spinner.                            | `small` or `medium` | `medium` |

## Showcase

<div class="card-grid">
    <div>
        <div><Spinner /></div>
        <label class="description">Medium size</label>
    </div>

    <div>
        <div><Spinner size="small" /></div>
        <label class="description">Small size</label>
    </div>

</div>

<style lang="scss">
    .card-grid > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-grid > div > div {
        position: relative;
        display: block;
        height: 80px;
    }
</style>
