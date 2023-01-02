<script lang="ts">
  import Toolbar from "$lib/components/Toolbar.svelte";
  import MenuButton from "$lib/components/MenuButton.svelte";
  import Back from "$lib/components/Back.svelte";

  export let back = false;
</script>

<header>
  <Toolbar>
    <svelte:fragment slot="start">
      {#if back}
        <Back slot="back" on:nnsBack />
      {:else}
        <MenuButton />
      {/if}
    </svelte:fragment>

    <slot name="title" />

    <slot name="toolbar-end" slot="end" />
  </Toolbar>
</header>
