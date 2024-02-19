<script lang="ts">
  import Tooltip from "$lib/components/Tooltip.svelte";
  import Checkbox from "$lib/components/Checkbox.svelte";
  import Input from "$lib/components/Input.svelte";

  let overflowHidden = true;
  let showShowcase = true;
  let tooltipText = "This button is disabled because of a long and complicated explanation that doesn't fit in the margin of this webpage.";

  const rerender = async () => {
    showShowcase = false;
    await new Promise((resolve) => setTimeout(() => {
      showShowcase = true;
    }, 0));
  };

  const toggleOverflowHidden = async () => {
    overflowHidden = !overflowHidden;

    // We need to rerender the showcase for the tooltip to rediscover its
    // overflow:hidden ancestor.
    rerender();
  };
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

| Property | Description                                                     | Type      | Default               |
| -------- | --------------------------------------------------------------- | --------- | --------------------- |
| `id`     | Used to link the target to the tooltip via `aria-describedby`   | `string`  |                       |
| `testId` | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string`  | `"tooltip-component"` |
| `text`   | The text displayed in the tooltip.                              | `string`  | `""`                  |
| `noWrap` | Whether to prevent the tooltip text from taking mulitple lines. | `boolean` | `false`               |
| `top`    | Whether to prevent the tooltip text from taking mulitple lines. | `boolean` | `false`               |
| `center` | Whether to ignore overflow logic an just center align instead.  | `boolean` | `false`               |

## Slots

| Slot name    | Description                |
| ------------ | -------------------------- |
| Default slot | The target of the tooltip. |

## Showcase

The tooltips will appear when the buttons are hovered or tapped.

<div class="checkbox">
  <Checkbox checked={overflowHidden} on:nnsChange={toggleOverflowHidden}>
    Apply <code>overflow: hidden</code> to the block below
  </Checkbox>
</div>

<div class="text-input">
  <div>Tooltip text:</div>
  <Input inputType="text" bind:value={tooltipText} on:blur={rerender} />
</div>

{#if showShowcase}

  <div class="tooltip-target-container" class:overflowHidden data-tid="showcase">
    <div class="row">
      <Tooltip
        id="example-button"
        text={tooltipText}
      >
        <button class="secondary" disabled>Disabled</button>
      </Tooltip>
      <Tooltip
        id="example-button"
        text={tooltipText}
      >
        <button class="secondary" disabled>Disabled</button>
      </Tooltip>
      <Tooltip
        id="example-button"
        text={tooltipText}
      >
        <button class="secondary" disabled>Disabled</button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip
        id="example-button"
        top={true}
        text={tooltipText}
      >
        <button class="secondary" disabled>Disabled</button>
      </Tooltip>
      <Tooltip
        id="example-button"
        top={true}
        text={tooltipText}
      >
        <button class="secondary" disabled>Disabled</button>
      </Tooltip>
      <Tooltip
        id="example-button"
        top={true}
        text={tooltipText}
      >
        <button class="secondary" disabled>Disabled</button>
      </Tooltip>
    </div>
  </div>
{/if}

<style lang="scss">
  @use "../../../../lib/styles/mixins/media";

  .checkbox {
    --checkbox-label-order: 1;
  }

  .text-input {
    margin-bottom: var(--padding);
  }

  .tooltip-target-container {
    background-color: var(--card-background);
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .overflowHidden {
    overflow: hidden;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }
</style>
