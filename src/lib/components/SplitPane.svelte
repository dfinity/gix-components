<script lang="ts">
  import { layoutBottomOffset } from "$lib/stores/layout.store";
</script>

<div class="split-pane">
  <slot name="menu" />
  <div
    class="content"
    style={`--layout-bottom-offset: ${$layoutBottomOffset}px`}
  >
    <slot name="header" />

    <div class="scrollable-content">
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/display";

  .split-pane {
    position: absolute;
    @include display.inset;

    display: flex;
    flex-flow: row nowrap;
  }

  .content {
    position: relative;
    width: 100%;

    overflow: hidden;
    border-radius: var(--border-radius-2x);

    box-sizing: border-box;
    margin: var(--padding);

    // If a bottom sheet is displayed the content pane height should be updated accordingly
    // This to avoid the content to be presented behind the bottom sheet and
    // to display a scrollbar that ends before the bottom sheet.
    padding-bottom: var(--layout-bottom-offset, 0);

    // On small screen the menu pushes the content
    min-width: calc(100vw - var(--padding-2x));

    @include media.min-width(xlarge) {
      min-width: auto;
    }
  }

  .scrollable-content {
    height: 100%;

    overflow-x: hidden;
    overflow-y: scroll;
  }

  // BEGIN: On small devices the header is sticky

  .split-pane {
    padding-top: calc(var(--header-offset, 0px) + var(--header-height));

    :global(header) {
      position: fixed;
      z-index: var(--menu-z-index);
    }

    @include media.min-width(xlarge) {
      padding-top: 0;

      :global(header) {
        position: absolute;
      }

      .content {
        padding-top: var(--header-height);
      }
    }
  }

  // END: sticky header
</style>
