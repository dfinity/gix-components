<script lang="ts">
  import { sanitize } from "$lib/utils/html.utils";
  import { onMount } from "svelte";

  export let text: string | undefined = undefined;

  // force to rerender after SSR
  let mounted = false;
  onMount(async () => (mounted = true));
</script>

{#if mounted && text !== undefined}
  {@html sanitize(text)}
{/if}
