<script lang="ts">
    import ProgressBar from "$lib/components/ProgressBar.svelte";
</script>

# Progress Bar

This component renders a native `progress HTML element to display an indicator showing the completion progress of a task.

```javascript
<ProgressBar max="{10}" value="{2}" />
```

We can render multiple progress colors using the `segments` array instead.

```javascript
<ProgressBar
  max={100}
  segments={[
    { value: 10, color: "salmon" },
    { value: 25, color: "cornflowerblue" },
  ]}
/>
```

**IMPORTANT: The `segments` prop takes precedence over `value` and `color`.**

Note that the color in `segment` can be anything that will work in `linear-gradient`. For example, we can use CSS variables: `var(--primary)`.

## Properties

| Property   | Description                                                                  | Type                                               | Default     |
| ---------- | ---------------------------------------------------------------------------- | -------------------------------------------------- | ----------- |
| `max`      | The maximum value of the progress element.                                   | `number`                                           | `1`         |
| `value`    | The current value, progression, to display.                                  | `number`                                           | `0`         |
| `color`    | A style for the bar.                                                         | `"primary"` or `"warning"`                         | `"primary"` |
| `segments` | A list of progress segments. Each with a value and color. The order matters. | `{ value: number, color: string}[]` or `undefined` | `undefined` |
| `testId`   | Id for testing purposes                                                      | `string` or `undefined`                            | `undefined` |

## Showcase

<div class="card-grid" data-tid="showcase">
    <ProgressBar max={10} value={2} />

    <ProgressBar max={100} value={44} color="warning" />

    <ProgressBar max={10000} value={44} color="warning" />

    <ProgressBar max={100} segments={[{ value: 10, color: "salmon" }, { value: 25, color: "cornflowerblue" }, { value: 50, color: "orchid" }]} />

</div>
