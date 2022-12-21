<script lang="ts">
  import { layoutMenuOpen } from "$lib/stores/layout.store";
  import Backdrop from "$lib/components/Backdrop.svelte";
</script>

{#if $layoutMenuOpen}
  <Backdrop on:nnsClose={() => layoutMenuOpen.set(false)} />
{/if}
