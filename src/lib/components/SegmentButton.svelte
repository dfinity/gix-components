<script lang="ts">
  import { getContext } from "svelte";
  import { SEGMENT_CONTEXT_KEY, type SegmentContext } from "$lib/types/segment";
  import { nonNullish } from "@dfinity/utils";
  import type { Snippet } from "svelte";

  interface Props {
    testId?: string;
    segmentId: symbol;
    children?: Snippet;
  }

  let { testId, segmentId, children }: Props = $props();

  const { store } = getContext<SegmentContext>(SEGMENT_CONTEXT_KEY);

  const onClick = () =>
    store.set({
      id: segmentId,
      element,
    });

  let element = $state<HTMLDivElement | undefined>();

  let selected = $derived($store.id === segmentId);

  // Update the store with the initially selected element as soon as it is available
  $effect(() => {
    if (selected && $store.element !== element && nonNullish(element)) {
      store.set({
        id: segmentId,
        element,
      });
    }
  });
</script>

<div bind:this={element} class="segment-button" data-tid={testId}>
  <button
    onclick={onClick}
    role="tab"
    class:selected
    class:initialised={nonNullish($store.element)}
    disabled={selected}
    data-tid="segment-button"
  >
    {@render children?.()}
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

    &.selected.initialised {
      color: var(--primary-contrast);
    }
  }
</style>
