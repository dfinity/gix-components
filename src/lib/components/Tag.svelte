<script lang="ts">
  export let tagName: "span" | "li" = "span";
  export let intent: "warning" | "success" | "error" | "info" = "info";
  export let size: "medium" | "large" = "medium";
  export let testId = "tag";
</script>

<svelte:element this={tagName} data-tid={testId} class={`tag ${size} ${intent}`}
  ><slot /></svelte:element
>

<style lang="scss">
  .tag {
    border-radius: var(--border-radius-0_5x);

    display: flex;
    align-items: center;
    gap: var(--padding-0_5x);
    
    // Force fit-content for `li` tags.
    width: fit-content;
    padding: var(--padding-0_5x) var(--padding);

    &.large {
      font-size: var(--font-size-standard);
    }

    &.medium {
      font-size: var(--font-size-small);
    }

    &.info {
      background-color: var(--elements-divider);
      color: var(--text-description);
    }

    &.success {
      background-color: var(--positive-emphasis);
      color: var(--text-light);
    }

    &.warning {
      background-color: var(--warning-emphasis);
      color: var(--text-text);
    }

    &.error {
      background-color: var(--negative-emphasis);
      color: var(--text-light);
    }
  }

  li.tag {
    display: list-item;
  }
</style>
