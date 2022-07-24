<script lang="ts">
  import SplitPane from "$lib/components/SplitPane.svelte";
  import Menu from "$lib/components/Menu.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import MenuButton from "$lib/components/MenuButton.svelte";

  let sticky: boolean;
  let open: boolean;

  let showBack: boolean;
  $: showBack = $$slots.back !== undefined;
</script>

<SplitPane bind:sticky>
  <header slot="header">
    <Toolbar>
      <svelte:fragment slot="start">
        {#if showBack}
          <slot name="back" />
        {:else}
          <MenuButton bind:open />
        {/if}
      </svelte:fragment>

      <slot name="title" />
    </Toolbar>
  </header>

  <Menu slot="menu" bind:open {sticky}>
    <slot name="menu-items" />
  </Menu>

  <main>
    <slot />
  </main>
</SplitPane>
