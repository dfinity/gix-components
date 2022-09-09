<script lang="ts">
  import { layoutBottomOffset } from "$lib/stores/layout.store";

  export let sticky = false;
  let innerWidth = 0;

  // The media query breakpoint to stick the menu is xlarge 1300px
  $: sticky = innerWidth > 1300;
</script>

<svelte:window bind:innerWidth />

<slot name="header" />

<div class="split-pane">
  <slot name="menu" />
  <div
    class="content"
    style={`--layout-bottom-offset: ${$layoutBottomOffset}px`}
  >
    <div class="scrollable-content"><slot /></div>
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .split-pane {
    position: absolute;
    top: calc(var(--header-offset, 0px) + var(--header-height));
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-flow: row nowrap;
  }

  .content {
    position: relative;
    width: 100%;

    // If a bottom sheet is displayed the content pane height should be updated accordingly
    // This to avoid the content to be presented behind the bottom sheet and
    // to display a scrollbar that ends before the bottom sheet.
    padding-bottom: var(--layout-bottom-offset, 0);

    @include media.min-width(large) {
      padding-bottom: 0;
    }
  }

  .scrollable-content {
    height: 100%;

    overflow-x: hidden;
    overflow-y: auto;
  }

  @include media.min-width(xlarge) {
    :global(header [role="toolbar"]) {
      padding-left: var(--menu-width);
    }
  }
</style>
