<script lang="ts">
    import ProgressBar from "$lib/components/ProgressBar.svelte";
</script>

# Progress Bar

This component renders a native `progress HTML element to display an indicator showing the completion progress of a task.

```html
<ProgressBar max="{10}" value="{2}" />
```

## Properties

| Property | Description                                 | Type                   | Default   |
| -------- | ------------------------------------------- | ---------------------- | --------- |
| `max`    | The maximum value of the progress element.  | `number`               | `1`       |
| `value`  | The current value, progression, to display. | `number`               |           |
| `color`  | A style for the bar.                        | `primary` or `warning` | `primary` |

## Showcase

<div class="card-grid">
    <ProgressBar max={10} value={2} />

    <ProgressBar max={100} value={44} color="warning" />

</div>
