<script lang="ts">
  import { fade } from "svelte/transition";
  import { menuCollapsed } from "$lib";
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";

  export let text: string;
</script>

{#if $menuCollapsed}
  <svg
    fill="currentColor"
    height={DEFAULT_ICON_SIZE}
    viewBox="0 0 24 24"
    width={DEFAULT_ICON_SIZE}
    xmlns="http://www.w3.org/2000/svg"
    in:fade><text x="4" y="20">{text}</text></svg
  >
{/if}

<style lang="scss">
  text {
    font-size: var(--font-size-h3);
    font-weight: bold;
  }
</style>
