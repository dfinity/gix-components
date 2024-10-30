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
      background-color: var(--statuses_success-surface);
      color: var(--statuses_success);
    }

    &.warning {
      background-color: var(--statuses_warning--surface);
      color: var(--statuses_warning);
    }

    &.error {
      background-color: var(--statuses_error-surface);
      color: var(--statuses_error);
    }
  }
</style>
