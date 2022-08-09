<script lang="ts">
  import type { SlugIcon } from "../types/slug";

  export let icon: SlugIcon;

  let name: string;
  let svg: string;
  $: ({ name, svg } = icon);
</script>

<article>
  {@html svg}
  <span>{name}</span>
</article>

<style lang="scss">
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :global(svg) {
      width: 36px;
      height: 36px;
      margin: var(--padding);
    }
  }

  span {
    font-size: var(--font-size-ultra-small);
    margin: var(--padding-0_5x) 0;
  }
</style>
