<script lang="ts">
  import Backdrop from "$lib/components/Backdrop.svelte";
  import { layoutMenuOpen } from "$lib/stores/layout.store";
</script>

{#if $layoutMenuOpen}
  <Backdrop on:nnsClose={() => layoutMenuOpen.set(false)} />
{/if}
