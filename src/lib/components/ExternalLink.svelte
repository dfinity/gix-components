<script lang="ts">
  import IconNorthEast from "$lib/icons/IconNorthEast.svelte";

  export let href: string;
  export let alt = "";
</script>

<a {href} rel="external noopener noreferrer" target="_blank" title={alt}>
  <slot />
  <IconNorthEast size="16px" />
</a>

<style lang="scss">
  a {
    text-decoration: none;

    :global(svg) {
      margin-left: var(--padding);
      vertical-align: bottom;
    }
  }
</style>
