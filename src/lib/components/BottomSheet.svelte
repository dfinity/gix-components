<script lang="ts">
  import { nonNullish } from "@dfinity/utils";
  import { layoutBottomOffset } from "$lib/stores/layout.store";
  import { onDestroy } from "svelte";
  import { BREAKPOINT_LARGE } from "$lib/constants/constants";

  onDestroy(() => ($layoutBottomOffset = 0));

  // See also the CSS code of this component. On large screen the bottom sheet is not sticky.
  const updateBottomOffset = () => {
    if (nonNullish(innerWidth) && nonNullish(height)) {
      $layoutBottomOffset = innerWidth < BREAKPOINT_LARGE ? height : 0;
    }
  };

  let height: number | undefined = undefined;
  let innerWidth: number | undefined = undefined;
  $: height, innerWidth, updateBottomOffset();
</script>

<svelte:window bind:innerWidth />

<div role="dialog" data-tid="bottom-sheet" bind:clientHeight={height}>
  <slot />
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  div {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background: var(--card-background);
    box-shadow: var(--bottom-sheet-box-shadow);

    z-index: var(--bottom-sheet-z-index);

    padding-bottom: env(safe-area-inset-bottom);

    border-top-left-radius: var(--border-radius-2x);
    border-top-right-radius: var(--border-radius-2x);

    @include media.min-width(large) {
      position: relative;

      background: transparent;
      box-shadow: none;

      z-index: auto;

      padding-bottom: 0;
    }
  }
</style>
