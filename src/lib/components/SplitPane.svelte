<div class="split-pane">
  <slot name="menu" />
  <slot />
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
      padding-top: var(--header-offset, 0px);

      :global(header) {
        position: absolute;
      }
    }
  }

  // END: sticky header
</style>
