<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { notEmptyString } from "@dfinity/utils";
  import { translateTooltip } from "$lib/utils/tooltip.utils";

  export let id: string;
  export let testId = "tooltip-component";
  export let text: string | undefined = undefined;
  export let noWrap = false;
  export let top = false;
  export let center = false;

  let tooltipComponent: HTMLDivElement | undefined = undefined;
  let target: HTMLDivElement | undefined = undefined;
  let targetIsHovered = false;
  let tooltipTransformX = 0;
  let tooltipTransformY = 0;
  let tooltipStyle: string | undefined = undefined;

  $: tooltipStyle = `--tooltip-transform-x: ${tooltipTransformX}px; --tooltip-transform-y: ${tooltipTransformY}px;`;

  const setPosition = () => {
    // The debounce might effectively happen after the component has been destroyed, this is particularly the case in unit tests.
    // That is why we are using a guard to avoid to perform any logic in case the Tooltip does not exist anymore.
    if (destroyed) {
      return;
    }

    if (!notEmptyString(text)) {
      return;
    }

    if (tooltipComponent === undefined || target === undefined) {
      // Do nothing, we need the elements to be rendered in order to get their size and position to fix the tooltip
      return;
    }

    const container = document.body;

    const { clientWidth, offsetWidth } = container;
    const scrollbarWidth = offsetWidth - clientWidth;

    const { x, y } = translateTooltip({
      containerRect: container.getBoundingClientRect(),
      targetRect: target.getBoundingClientRect(),
      tooltipRect: tooltipComponent.getBoundingClientRect(),
      scrollbarWidth,
      top,
      center,
    });

    // The calculation is based on the current position so the returned
    // transform should be added to the existing one.
    tooltipTransformX += x;
    tooltipTransformY += y;
  };

  const onMouseEnter = () => {
    setPosition();
    targetIsHovered = true;
  };

  const onMouseLeave = () => {
    targetIsHovered = false;
  };

  onMount(async () => {
    // Move tooltip to the body to avoid it being cut off by overflow: hidden.
    document.body.appendChild(tooltipComponent);
  });

  let destroyed = false;
  onDestroy(() => {
    destroyed = true;
    // Remove tooltip from the document body where it was placed in onMount.
    tooltipComponent?.remove();
  });
</script>

<div class="tooltip-wrapper" data-tid={testId}>
  <!-- The relevant element passed as the slot should have an appropriate role if necessary.  -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="tooltip-target"
    aria-describedby={id}
    bind:this={target}
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
  >
    <slot />
  </div>
  <div
    class="tooltip"
    role="tooltip"
    {id}
    class:noWrap
    class:top
    class:not-rendered={!notEmptyString(text)}
    class:visible={targetIsHovered}
    bind:this={tooltipComponent}
    style={tooltipStyle}
  >
    {text}
  </div>
</div>

<style lang="scss">
  .tooltip-wrapper {
    position: relative;
    display: var(--tooltip-display, block);
    width: var(--tooltip-width);
  }

  .tooltip {
    z-index: var(--tooltip-z-index);

    position: absolute;
    display: inline-block;

    transform: translate(
      var(--tooltip-transform-x, 0),
      var(--tooltip-transform-y, 0)
    );

    opacity: 0;
    visibility: hidden;
    transition:
      opacity 150ms,
      visibility 150ms;

    padding: 4px 6px;
    border-radius: 4px;

    font-size: var(--font-size-small);

    background: var(--card-background-contrast);
    color: var(--card-background);

    // limit width
    white-space: pre-wrap;
    max-width: 240px;
    width: max-content;
    overflow-wrap: break-word;

    &.noWrap {
      white-space: nowrap;
    }

    pointer-events: none;

    &.not-rendered {
      display: none;
    }

    &.visible {
      opacity: 1;
      visibility: initial;
    }
  }

  .tooltip-target {
    height: 100%;
  }
</style>
