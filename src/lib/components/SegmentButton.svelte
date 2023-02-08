<script lang="ts">
    import {getContext} from "svelte";
    import {SEGMENT_CONTEXT_KEY, type SegmentContext} from "$lib/types/segment";

    export let segmentId: symbol;

    const { store } = getContext<SegmentContext>(SEGMENT_CONTEXT_KEY);

    const onClick = () => store.set({
        id: segmentId,
        element
    });

    let element: HTMLDivElement | undefined;

    let selected = false;
    $: selected = $store.id === segmentId;
</script>

<div bind:this={element} class="segment-button" class:selected>
    <button on:click={onClick} role="tab">
        <slot />
    </button>
</div>

<style lang="scss">
  @use "../styles/mixins/display";

    .segment-button {
      padding: var(--padding-0_25x);
      transform: translate3d(0, 0, 0);
    }

    .selected {
      .indicator {
        opacity: 1;
        @include display.inset;
      }
    }
</style>