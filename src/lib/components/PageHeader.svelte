<script lang="ts">
  export let testId: string | undefined = undefined;

  let hasHeader: boolean;
  $: hasHeader = $$slots.start !== undefined || $$slots.end !== undefined;
</script>

<div class="container" data-tid={testId}>
  {#if hasHeader}
    <div class="header">
      <slot name="start" />
      <slot name="end" />
    </div>
  {/if}
  <div class="content">
    <slot name="title" />
    <slot name="subtitle" />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--padding-4x);
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: var(--padding);
    justify-content: center;
    align-items: center;

    @include media.min-width(medium) {
      justify-content: space-between;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--padding);
  }
</style>
