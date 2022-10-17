<script lang="ts">
  import { Color } from "../types/color";

  export let color: Color = Color.PRIMARY;
  export let tagName: "span" | "h3" | "li" = "span";
</script>

<svelte:element this={tagName} data-tid="tag" class={`${color ?? ""} tag`}
  ><slot /></svelte:element
>

<style lang="scss">
  @use "../styles/mixins/media";

  .tag {
    padding: calc(var(--padding-0_5x) / 2) var(--padding);

    // Default color: Color.PRIMARY
    --badge-color: var(--primary);

    color: var(--badge-color);
    border: 1px solid var(--badge-color);
    border-radius: var(--border-radius-5x);

    height: fit-content;

    &.warning {
      --badge-color: var(--warning-emphasis);
    }

    &.success {
      --badge-color: var(--positive-emphasis);
    }

    &.error {
      --badge-color: var(--negative-emphasis);
    }
  }
</style>
