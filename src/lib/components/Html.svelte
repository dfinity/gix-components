<script lang="ts">
  import { sanitize } from "$lib/utils/html.utils";
  import { onMount } from "svelte";
  import { nonNullish } from "@dfinity/utils";

  interface Props {
    text?: string;
  }

  let { text }: Props = $props();

  // force to rerender after SSR
  let mounted = $state(false);
  onMount(async () => (mounted = true));
</script>

{#if mounted && nonNullish(text)}
  <!-- eslint-disable svelte/no-at-html-tags -->
  {@html sanitize(text)}
{/if}
