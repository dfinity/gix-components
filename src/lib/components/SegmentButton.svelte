<script lang="ts">
  import { getContext } from "svelte";
  import { SEGMENT_CONTEXT_KEY, type SegmentContext } from "$lib/types/segment";
  import { nonNullish } from "@dfinity/utils";

  export let testId: string | undefined = undefined;
  export let segmentId: symbol;

  const { store } = getContext<SegmentContext>(SEGMENT_CONTEXT_KEY);

  const onClick = () =>
    store.set({
      id: segmentId,
      element,
    });

  let element: HTMLDivElement | undefined;

  let selected = false;
  $: selected = $store.id === segmentId;

  // Update the store with initially selected element as soon as it is available
  $: if (selected && $store.element !== element && nonNullish(element)) {
    store.set({
      id: segmentId,
      element,
    });
  }
</script>

<div bind:this={element} class="segment-button" data-tid={testId}>
  <button
    on:click={onClick}
    role="tab"
    class:selected
    data-tid="segment-button"
  >
    <slot />
  </button>
</div>

<style lang="scss">
  @use "../styles/mixins/text";

  .segment-button {
    padding: var(--padding-0_25x);
    transform: translate3d(0, 0, 0);
  }

  button {
    width: 100%;
    padding: var(--padding-0_5x) var(--padding-1_5x);

    @include text.truncate;
    transition: color var(--animation-time-normal);

    &.selected {
      color: var(--primary-contrast);
    }
  }
</style>
