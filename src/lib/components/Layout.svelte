<script lang="ts">
  import SplitPane from "$lib/components/SplitPane.svelte";
  import Menu from "$lib/components/Menu.svelte";
</script>

<SplitPane>
  <Menu slot="menu">
    <slot name="menu-items" />
  </Menu>

  <slot />
</SplitPane>
