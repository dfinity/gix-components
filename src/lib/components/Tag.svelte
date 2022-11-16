<script lang="ts">
  export let tagName: "span" | "h3" | "li" = "span";
</script>

<svelte:element this={tagName} data-tid="tag" class="tag"
  ><slot /></svelte:element
>

<style lang="scss">
  .tag {
    padding: calc(var(--padding-0_5x) / 2) var(--padding);

    --tag-default-color: var(--value-color);

    color: var(--tag-color, var(--tag-default-color));
    border: 1px solid var(--tag-color, var(--tag-default-color));
    border-radius: var(--border-radius-5x);

    height: fit-content;
  }
</style>
