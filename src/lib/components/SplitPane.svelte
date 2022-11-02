<script lang="ts">
  import { layoutBottomOffset } from "$lib/stores/layout.store";
</script>

<div class="split-pane">
  <slot name="menu" />
  <div
    class="content"
    style={`--layout-bottom-offset: ${$layoutBottomOffset}px`}
  >
    <div class="scrollable-content">
      <slot name="header" />

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

    // If a bottom sheet is displayed the content pane height should be updated accordingly
    // This to avoid the content to be presented behind the bottom sheet and
    // to display a scrollbar that ends before the bottom sheet.
    padding-bottom: var(--layout-bottom-offset, 0);
  }

  .scrollable-content {
    height: 100%;

    overflow-x: hidden;
    overflow-y: scroll;
  }

  // BEGIN: On small devices the header is sticky

  .split-pane {
    padding-top: var(--header-height);

    :global(header) {
      position: fixed;
    }

    @include media.min-width(xlarge) {
      padding-top: 0;

      :global(header) {
        position: absolute;
      }
    }
  }

  // END: sticky header
</style>
