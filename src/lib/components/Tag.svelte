<script lang="ts">
  export let tagName: "span" | "h3" | "li" = "span";
  export let intent: "warning" | "success" | "error" | "info" = "info";
  export let size: "medium" | "small" = "medium";
  export let testId = "tag";
</script>

<svelte:element this={tagName} data-tid={testId} class={`tag ${size} ${intent}`}
  ><slot /></svelte:element
>

<style lang="scss">
  .tag {
    border-radius: var(--border-radius-0_5x);
    color: var(--text-description);

    &.medium {
      padding: var(--padding);
    }

    &.small {
      padding: var(--padding-0_5x);
    }

    &.info {
      background-color: var(--elements-divider);
    }

    &.success {
      background-color: var(--positive-emphasis);
    }

    &.warning {
      background-color: var(--warning-emphasis);
    }

    &.error {
      background-color: var(--negative-emphasis);
    }
  }
</style>
