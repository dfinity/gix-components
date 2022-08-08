<script lang="ts">
  import SplitPane from "$lib/components/SplitPane.svelte";
  import Menu from "$lib/components/Menu.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import MenuButton from "$lib/components/MenuButton.svelte";

  export let back = false;

  let sticky: boolean;
  let open: boolean;
</script>

<SplitPane bind:sticky>
  <header slot="header">
    <Toolbar>
      <svelte:fragment slot="start">
        {#if back}
          <slot name="back" />
        {:else}
          <MenuButton bind:open />
        {/if}
      </svelte:fragment>

      <slot name="title" />

      <slot name="more" slot="end" />
    </Toolbar>
  </header>

  <Menu slot="menu" bind:open {sticky}>
    <slot name="menu-items" />
  </Menu>

  <main>
    <slot />
  </main>
</SplitPane>
