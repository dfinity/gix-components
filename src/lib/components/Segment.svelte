<script lang="ts">
  import { writable } from "svelte/store";
  import type { SegmentContext, SelectedSegment } from "$lib/types/segment";
  import { SEGMENT_CONTEXT_KEY } from "$lib/types/segment";
  import { setContext } from "svelte";
  import { isNullish, nonNullish } from "@dfinity/utils";

  export let selectedSegmentId: symbol | undefined = undefined;

  const store = writable<SelectedSegment>({
    id: selectedSegmentId,
    element: undefined,
  });

  setContext<SegmentContext>(SEGMENT_CONTEXT_KEY, {
    store,
  });

  $: $store, (() => (selectedSegmentId = $store.id))();

  let indicator:
    | {
        left: number;
        width: number;
      }
    | undefined = undefined;

  let segment: HTMLElement | undefined | null;

  let selectedElement: HTMLElement | undefined | null;
  $: selectedElement =
    $store.element ?? segment?.querySelector(".segment-button");

  export const initIndicator = () => {
    if (isNullish(selectedElement)) {
      indicator = undefined;
      return;
    }

    const { parentElement } = selectedElement;

    if (isNullish(parentElement)) {
      indicator = undefined;
      return;
    }

    const { left: parentClientLeft } = parentElement.getBoundingClientRect();
    const { left: currentClientLeft, width: currentClientWidth } =
      selectedElement.getBoundingClientRect();

    indicator = {
      left: currentClientLeft - parentClientLeft,
      width: currentClientWidth,
    };
  };

  $: selectedElement, (() => initIndicator())();

  // TODO: support adding segmebt buttons dynamically
  let segmentsCount = 0;
  $: segment,
    (() =>
      (segmentsCount =
        segment?.querySelectorAll(".segment-button").length ?? 0))();
</script>

<svelte:window on:resize={initIndicator} />

<div
  bind:this={segment}
  class="segment"
  style={`--segments: ${segmentsCount}; ${
    nonNullish(indicator)
      ? `--position: ${indicator.left}px; --width: ${indicator.width}px`
      : ""
  }`}
>
  {#if nonNullish(indicator)}
    <div class="indicator">
      <div class="indicator-background" />
    </div>
  {/if}

  <slot />
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .segment {
    --segment-gap: var(--padding-0_5x);
    --segment-padding: var(--padding-0_5x);

    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    align-items: center;

    background: var(--input-background);
    color: var(--input-background-contrast);

    padding: var(--segment-padding);
    gap: var(--segment-gap);

    border-radius: var(--border-radius);
    overflow: hidden;

    width: 100%;

    @include media.min-width(medium) {
      width: var(--segment-min-width, var(--segment-width, fit-content));
      --segment-min-width: calc(var(--segment-button-width) * var(--segments));
    }

    position: relative;
  }

  .indicator {
    top: calc(
      var(--segment-padding) + 1px
    ); // 1px to compensate translate3d -1px
    left: var(--segment-padding);
    transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left center;
    position: absolute;
    box-sizing: border-box;
    will-change: transform, opacity;
    pointer-events: none;
    transform: translate3d(
      calc(var(--position, 0) - var(--padding-0_5x)),
      -1px,
      0
    );

    // Calculate the width of the indicator:
    // (100% - [left and right segment paddings] + [all gaps between buttons]) / [number of segments]
    width: calc(
      (
          100% -
            (
              2 * var(--segment-padding) + var(--segment-gap) *
                (var(--segments) - 1)
            )
        ) / var(--segments)
    );
    height: calc(100% - var(--segment-padding) * 2);
    border-radius: var(--border-radius);
    background: var(--button-primary);
  }
</style>
