<script lang="ts">
    import {writable} from "svelte/store";
    import type {SegmentContext, SelectedSegment} from "$lib/types/segment";
    import {SEGMENT_CONTEXT_KEY} from "$lib/types/segment";
    import {setContext} from "svelte";

    export let selectedSegmentId: symbol | undefined = undefined;

    const store = writable<SelectedSegment>({
        id: selectedSegmentId,
        element: undefined
    });

    setContext<SegmentContext>(SEGMENT_CONTEXT_KEY, {
        store,
    });

    $: $store, (() => selectedSegmentId = $store.id)();

    let indicator: {
        left: number;
        width: number
    } | undefined = undefined;

    $: $store, (() => {
        if ($store.element === undefined || $store.element === null) {
            indicator = undefined;
            return;
        }

        if ($store.element.parentElement === null) {
            indicator = undefined;
            return;
        }

        const {paddingLeft, paddingRight} = window.getComputedStyle($store.element.parentElement);

        const {left: parentClientLeft} = $store.element.parentElement.getBoundingClientRect();
        const {left: currentClientLeft, width: currentClientWidth} = $store.element.getBoundingClientRect();

        indicator = {
            left: currentClientLeft - parentClientLeft - parseFloat(paddingLeft),
            width: currentClientWidth
        }
    })();
</script>

<div class="segment" style={`${indicator !== undefined ? `--position: ${indicator.left}px; --width: ${indicator.width}px` : ""}`}>
    <div class="indicator">
        <div class="indicator-background"></div>
    </div>

    <slot />
</div>

<style lang="scss">
    .segment {
      display: flex;
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
      transform: translate3d(calc(var(--position, 0) - var(--padding-0_5x)), -1px, 0);
      width: calc(var(--width) + var(--padding));
      padding: var(--padding-2x) 0 var(--padding);
      border-radius: var(--border-radius);
      box-shadow: var(--interaction-box-shadow);
      background: var(--focus-background);
    }
</style>