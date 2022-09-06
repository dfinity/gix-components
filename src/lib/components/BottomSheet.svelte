<div role="dialog" data-tid="bottom-sheet">
  <slot />
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  div {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    padding: var(--padding-2x);

    background: var(--background);
    box-shadow: var(--bottom-sheet-box-shadow);

    z-index: var(--z-index);

    @include media.min-width(large) {
      position: relative;

      padding: 0;

      background: transparent;
      box-shadow: none;

      z-index: auto;
    }
  }
</style>
