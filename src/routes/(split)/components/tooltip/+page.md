<script lang="ts">
    import Tooltip from "$lib/components/Tooltip.svelte";
</script>

# Tooltip

Used to provide extra information, often about why a button is disabled, on
hover or tap over the target element.

```javascript
<Tooltip
  id="example-button"
  text={"This button is disabled because of a long and complicated explanation
  that doesn't fit in the margin of this webpage."}
>
  <button class="secondary" disabled>Disabled</button>
</Tooltip>
```

## Properties

| Property            | Description                                                     | Type      | Default               |
| ------------------- | --------------------------------------------------------------- | --------- | --------------------- |
| `id`                | Used to link the target to the tooltip via `aria-describedby`   | `string`  |                       |
| `testId`            | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string`  | `"tooltip-component"` |
| `text`              | The text displayed in the tooltip.                              | `string`  | `""`                  |
| `noWrap`            | Whether to prevent the tooltip text from taking mulitple lines. | `boolean` | `false`               |
| `top`               | Whether to prevent the tooltip text from taking mulitple lines. | `boolean` | `false`               |
| `center`            | Whether to ignore overflow logic an just center align instead.  | `boolean` | `false`               |
| `containerSelector` | Used to query for the container used to determine overflow.     | `string`  | `"main"`              |

## Slots

| Slot name    | Description                |
| ------------ | -------------------------- |
| Default slot | The target of the tooltip. |

## Showcase

The tooltips will appear when the buttons are hovered or tapped.

<div class="tooltip-target-container" data-tid="showcase">
  <div class="row">
    <Tooltip
      id="example-button"
      containerSelector=".tooltip-target-container"
      text={"This button is disabled because of a long and complicated explanation that doesn't fit in the margin of this webpage."}
    >
      <button class="secondary" disabled>Disabled</button>
    </Tooltip>
    <Tooltip
      id="example-button"
      containerSelector=".tooltip-target-container"
      text={"This button is disabled because of a long and complicated explanation that doesn't fit in the margin of this webpage."}
    >
      <button class="secondary" disabled>Disabled</button>
    </Tooltip>
    <Tooltip
      id="example-button"
      containerSelector=".tooltip-target-container"
      text={"This button is disabled because of a long and complicated explanation that doesn't fit in the margin of this webpage."}
    >
      <button class="secondary" disabled>Disabled</button>
    </Tooltip>
  </div>
  <div class="row">
    <Tooltip
      id="example-button"
      top={true}
      containerSelector=".tooltip-target-container"
      text={"This button is disabled because of a long and complicated explanation that doesn't fit in the margin of this webpage."}
    >
      <button class="secondary" disabled>Disabled</button>
    </Tooltip>
    <Tooltip
      id="example-button"
      top={true}
      containerSelector=".tooltip-target-container"
      text={"This button is disabled because of a long and complicated explanation that doesn't fit in the margin of this webpage."}
    >
      <button class="secondary" disabled>Disabled</button>
    </Tooltip>
    <Tooltip
      id="example-button"
      top={true}
      containerSelector=".tooltip-target-container"
      text={"This button is disabled because of a long and complicated explanation that doesn't fit in the margin of this webpage."}
    >
      <button class="secondary" disabled>Disabled</button>
    </Tooltip>
  </div>
</div>

<style lang="scss">
  @use "../../../../lib/styles/mixins/media";

  .tooltip-target-container {
    background-color: var(--card-background);
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    gap: 100px;
    overflow: hidden;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }
</style>
