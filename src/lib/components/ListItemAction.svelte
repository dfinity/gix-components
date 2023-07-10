<div class="container">
  <div class="start-wrapper">
    <div class="icon-wrapper">
      <slot name="icon" />
    </div>
    <slot />
  </div>
  <div class="actions">
    <slot name="actions" />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: var(--padding);

    @include media.min-width(medium) {
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
    }

    width: 100%;
    --item-height: calc(var(--button-min-height) + var(--padding));

    .start-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: var(--padding-2x);

      height: var(--item-height);
    }

    .icon-wrapper {
      width: var(--item-height);
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .actions {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  }
</style>
