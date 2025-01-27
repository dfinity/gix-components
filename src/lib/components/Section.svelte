<script lang="ts">
  export let testId: string | undefined = undefined;

  let noDescription = false;
  $: noDescription = $$slots.description === undefined;
  let noTitle = false;
  $: noTitle = $$slots.title === undefined && $$slots.end === undefined;
</script>

<div class="container" data-tid={testId}>
  <div class="section-title" class:noTitle class:noDescription>
    <slot name="title" />
    <slot name="end" />
  </div>
  <slot name="description" />
  <div class="content-wrapper" class:noDescription><slot /></div>
</div>

<style lang="scss">
  .container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .section-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(.noDescription):not(.noTitle) {
      margin-bottom: var(--padding);
    }
  }

  .content-wrapper {
    margin-top: var(--padding-3x);

    &.noDescription {
      margin-top: var(--padding-2x);
    }
  }
</style>
