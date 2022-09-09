<script lang="ts">
  import { layoutBottomOffset } from "../stores/layout.store";
  import { onDestroy } from "svelte";

  onDestroy(() => ($layoutBottomOffset = 0));
</script>

<div
  role="dialog"
  data-tid="bottom-sheet"
  bind:clientHeight={$layoutBottomOffset}
>
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

    z-index: var(--z-index);

    @include media.min-width(large) {
      position: relative;

      background: transparent;
      box-shadow: none;

      z-index: auto;
    }
  }
</style>
