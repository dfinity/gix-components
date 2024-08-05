<div class="toolbar" role="toolbar">
  <slot name="start" />

  <div class="main">
    <slot />
  </div>

  <slot name="end" />
</div>

<style lang="scss">
  @use "../styles/mixins/display";

  .toolbar {
    position: absolute;

    color: var(--toolbar-color, var(--body-color));

    --actions-width: 15%;
    --main-width: calc(100% - (2 * var(--actions-width)));

    display: grid;
    grid-template-columns: var(--actions-width) var(--main-width) var(
        --actions-width
      );

    justify-content: center;
    align-items: center;

    // enable scrolling
    pointer-events: var(--toolbar-pointer-events, none);

    --tooltip-width: fit-content;

    padding: var(--toolbar-padding);

    @include display.inset;

    // buttons
    :global(button),
    :global(.tooltip-wrapper) {
      pointer-events: all;
    }
  }

  .main {
    grid-column: 2 / 3;

    display: flex;
    justify-content: center;
    align-items: stretch;

    justify-self: center;

    max-width: 100%;

    gap: var(--padding);
  }
</style>
