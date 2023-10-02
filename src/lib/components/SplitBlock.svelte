<script lang="ts">
</script>

<div class="split-block">
  <div class="start">
    <slot name="start" />
  </div>
  <div class="end">
    <slot name="end" />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .split-block {
    @include media.min-width(large) {
      display: flex;
      flex-direction: row;
      gap: var(--padding-4x);
    }
  }

  .start,
  .end {
    flex: 1;
  }

  // line separator
  .start {
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 1px;
      background: var(--line);
      margin: var(--padding-2x) 0;

      @include media.min-width(large) {
        position: absolute;
        top: 0;
        right: calc(-1 * var(--padding-2x));
        height: 100%;
        width: 1px;
        margin: 0;
      }
    }
  }
</style>
