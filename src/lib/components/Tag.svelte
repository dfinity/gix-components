<script lang="ts">
  export let tagName: "span" | "li" = "span";
  export let intent: "warning" | "success" | "error" | "info" = "info";
  export let size: "medium" | "large" = "medium";
  export let testId = "tag";
</script>

<svelte:element
  this={tagName}
  data-tid={testId}
  class={`tag ${size === "large" ? "tag--large" : ""} ${intent}`}
  ><slot /></svelte:element
>

<style lang="scss">
  .tag {
    // "info" intent is the default
    background-color: var(--tag-background);
    color: var(--tag-text);

    &.success {
      background-color: var(--tag-success-background);
      color: var(--tag-success-text);
    }

    &.warning {
      background-color: var(--tag-warning-background);
      color: var(--tag-warning-text);
    }

    &.error {
      background-color: var(--tag-error-background);
      color: var(--tag-error-text);
    }
  }
</style>
