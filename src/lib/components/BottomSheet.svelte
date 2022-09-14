<script lang="ts">
  import { layoutBottomOffset } from "../stores/layout.store";
  import { onDestroy } from "svelte";

  onDestroy(() => ($layoutBottomOffset = 0));

  // 1024 is the $breakpoint-large size. See also the CSS code of this component. On large screen the bottom sheet is not sticky.
  const updateBottomOffset = () =>
    ($layoutBottomOffset = innerWidth < 1024 ? height : 0);

  let height = 0;
  let innerWidth = 0;
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

    background: var(--background);
    box-shadow: var(--bottom-sheet-box-shadow);

    z-index: var(--bottom-sheet-z-index);

    padding-bottom: env(safe-area-inset-bottom);

    @include media.min-width(large) {
      position: relative;

      background: transparent;
      box-shadow: none;

      z-index: auto;

      padding-bottom: 0;
    }
  }
</style>
