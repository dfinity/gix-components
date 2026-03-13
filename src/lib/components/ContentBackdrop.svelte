<script lang="ts">
  import Backdrop from "$lib/components/Backdrop.svelte";
  import { layoutMenuOpen } from "$lib/stores/layout.store";
</script>

{#if $layoutMenuOpen}
  <Backdrop onClose={() => layoutMenuOpen.set(false)} />
{/if}
