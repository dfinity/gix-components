<script lang="ts">
  export let tagName: "div" | "li" = "li";
  export let testId: string | undefined = undefined;
</script>

<svelte:element this={tagName} class="container" data-tid={testId}>
  <div class="start-wrapper">
    <div class="icon-wrapper">
      <slot name="icon" />
    </div>
    <slot />
  </div>
  <div>
    <slot name="actions" />
  </div>
</svelte:element>

<style lang="scss">
  @use "../styles/mixins/media";

  .container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: var(--padding-2x);

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
      aspect-ratio: 1 / 1;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
