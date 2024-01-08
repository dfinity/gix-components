<script lang="ts">
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";
  import { menuCollapsed } from "$lib";
  import { fade } from "svelte/transition";

  export let text: string;
</script>

{#if $menuCollapsed}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={DEFAULT_ICON_SIZE}
    viewBox="0 0 24 24"
    width={DEFAULT_ICON_SIZE}
    fill="currentColor"
    in:fade><text x="4" y="20">{text}</text></svg
  >
{/if}

<style lang="scss">
  text {
    font-size: var(--font-size-h3);
    font-weight: bold;
  }
</style>
