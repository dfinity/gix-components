<script lang="ts">
  export let testId: string | undefined = undefined;
</script>

<div class="wrapper" data-tid={testId}>
  <div class="start">
    <slot name="start" />
  </div>
  <div class="end">
    <slot name="end" />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--row-gap);
    width: 100%;

    @include media.min-width(large) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      place-items: stretch;
      column-gap: var(--column-gap);
      min-height: auto;

      .start {
        grid-column-start: 1;
        grid-column-end: 6;
      }

      .end {
        grid-column-start: 7;
        grid-column-end: 13;
      }
    }
  }
</style>
