<script lang="ts">
  import { onDestroy } from "svelte";
  import { debounce } from "@dfinity/utils";
  import { translateTooltip } from "$lib/utils/tooltip.utils";

  export let id: string;
  export let testId = "tooltip-component";
  export let text = "";
  export let noWrap = false;
  export let top = false;
  export let center = false;

  let tooltipComponent: HTMLDivElement | undefined = undefined;
  let target: HTMLDivElement | undefined = undefined;
  let innerWidth: number | undefined = undefined;
  let tooltipTransformX: number = 0;
  let tooltipTransformY: number = 0;
  let tooltipStyle: string | undefined = undefined;

  $: tooltipStyle = `--tooltip-transform-x: ${tooltipTransformX}px; --tooltip-transform-y: ${tooltipTransformY}px;`;

  // Finds the first ancestor with hidden horizontal overflow.
  const getOverflowContainer = (element: HTMLElement): HTMLElement => {
    let container = element;

    while (container.parentElement !== null) {
      const style = window.getComputedStyle(container);
      if (style.overflow === "hidden" || style.overflowX === "hidden") {
        return container;
      }
      container = container.parentElement;
    }
    return container;
  };

  const setPosition = debounce(() => {
    // The debounce might effectively happen after the component has been destroyed, this is particularly the case in unit tests.
    // That is why we are using a guard to avoid to perform any logic in case the Tooltip does not exist anymore.
    if (destroyed) {
      return;
    }

    if (tooltipComponent === undefined || target === undefined) {
      // Do nothing, we need the elements to be rendered in order to get their size and position to fix the tooltip
      return;
    }

    let container = getOverflowContainer(tooltipComponent);

    const { clientWidth, offsetWidth } = container;
    const scrollbarWidth = offsetWidth - clientWidth;

    ({ x: tooltipTransformX, y: tooltipTransformY } = translateTooltip({
      containerRect: container.getBoundingClientRect(),
      targetRect: target.getBoundingClientRect(),
      tooltipRect: tooltipComponent.getBoundingClientRect(),
      scrollbarWidth,
      top,
      center,
    }));
  });

  $: innerWidth, tooltipComponent, target, setPosition();

  let destroyed = false;
  onDestroy(() => (destroyed = true));
</script>

<svelte:window bind:innerWidth />

<div class="tooltip-wrapper" data-tid={testId}>
  <div class="tooltip-target" aria-describedby={id} bind:this={target}>
    <slot />
  </div>
  <div
    class="tooltip"
    role="tooltip"
    {id}
    class:noWrap
    class:top
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
    z-index: calc(var(--overlay-z-index) + 1);

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
  }

  .tooltip-target {
    height: 100%;

    &:hover + .tooltip {
      opacity: 1;
      visibility: initial;
    }
  }
</style>
