<script lang="ts">
  import { layoutBottomOffset } from "$lib/stores/layout.store";
  import Backdrop from "$lib/components/Backdrop.svelte";

  export let open = false;
</script>

<div class="split-pane">
  <slot name="menu" />
  <div
    class="content"
    style={`--layout-bottom-offset: ${$layoutBottomOffset}px`}
  >
    <slot name="header" />

    <div class="scrollable-content" class:open>
      <Backdrop on:nnsClose={() => (open = false)} />

      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/display";
  @use "../styles/mixins/interaction";

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

    // On small screen the menu pushes the content
    min-width: 100vw;

    @include media.min-width(xlarge) {
      min-width: auto;
    }
  }

  .scrollable-content {
    height: 100%;

    overflow-x: hidden;
    overflow-y: scroll;
  }

  // Reusing the component <Backdrop> but animated and displayed with CSS only for UX performance reason
  .scrollable-content {
    & > :global(div.backdrop) {
      opacity: 0;
      visibility: hidden;

      transition: opacity var(--animation-time-short);
    }

    // On smaller screen the menu is open on demand
    &.open > :global(div.backdrop) {
      opacity: 1;
      visibility: visible;
    }

    // On xlarge screen the menu is sticky so we do not display a backdrop even if .open is set
    @include media.min-width(xlarge) {
      &.open > :global(div.backdrop) {
        opacity: 0;
        visibility: hidden;

        @include interaction.none;
      }
    }
  }

  // BEGIN: On small devices the header is sticky

  .split-pane {
    --split-pane-content-top-offset: calc(
      var(--header-offset, 0px) + var(--header-height)
    );
    padding-top: var(--split-pane-content-top-offset);

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
        padding-top: var(--split-pane-content-top-offset);
      }
    }
  }

  // END: sticky header
</style>
