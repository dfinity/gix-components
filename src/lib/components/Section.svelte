<script lang="ts">
  export let testId: string | undefined = undefined;
</script>

<div class="container" data-tid={testId}>
  <div class="title-wrapper">
    <slot name="title" />
    <slot name="end" />
  </div>
  <slot name="description" />
  <!-- We add the extra div to make sure that the `gap` applied in this parent doesn't apply to all the slot children. -->
  <div><slot /></div>
</div>

<style lang="scss">
  .container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--padding-3x);
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
