<script lang="ts">
  export let title: string;
  export let testId: string | undefined = undefined;
</script>

<div class="container" data-tid={testId}>
  <div class="title-wrapper">
    <h3 class="title">{title}</h3>
    <slot name="value" />
  </div>
  <slot name="description" />
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & h3 {
      margin: 0;
    }
  }
</style>
