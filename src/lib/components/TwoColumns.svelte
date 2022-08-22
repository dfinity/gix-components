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
  @use "../styles/mixins/grid";

  .wrapper {
    @include grid.wrapper;

    @include media.min-width(large) {
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
