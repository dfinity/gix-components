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
      width: 24px;
      height: 24px;
      margin: var(--padding-0_5x) var(--padding-0_5x) 0;
      color: var(--background-contrast);
    }
  }

  span {
    font-size: var(--font-size-ultra-small);
    margin: var(--padding) 0;
  }
</style>
