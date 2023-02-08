<script lang="ts">
  import { writable } from "svelte/store";
  import type { SegmentContext, SelectedSegment } from "$lib/types/segment";
  import { SEGMENT_CONTEXT_KEY } from "$lib/types/segment";
  import { setContext } from "svelte";

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
    if (selectedElement === undefined || selectedElement === null) {
      indicator = undefined;
      return;
    }

    const { parentElement } = selectedElement;

    if (parentElement === null) {
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

    let segmentsCount = 0;
    $: segment, (() => segmentsCount = segment?.querySelectorAll(".segment-button").length ?? 0)();
</script>

<div
  bind:this={segment}
  class="segment"
  style={`--segments: ${segmentsCount}; ${
    indicator !== undefined
      ? `--position: ${indicator.left}px; --width: ${indicator.width}px`
      : ""
  }`}
>
  <div class="indicator">
    <div class="indicator-background" />
  </div>

  <slot />
</div>

<style lang="scss">
  .segment {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    align-items: center;

    background: var(--overlay-background);
    color: var(--overlay-background-contrast);

    padding: var(--padding) var(--padding-2x);
    gap: var(--padding-2x);

    border-radius: var(--border-radius);
    overflow: hidden;

    width: fit-content;

    position: relative;
  }

  .indicator {
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
    width: calc((100% - (var(--segments) * var(--padding-2x))) / var(--segments));
    padding: var(--padding-2x) 0 var(--padding);
    border-radius: var(--border-radius);
    box-shadow: var(--interaction-box-shadow);
    background: var(--segment-selected-background);
  }
</style>
