<script lang="ts">
  import SplitPane from "../lib/components/SplitPane.svelte";
  import Menu from "../lib/components/Menu.svelte";
  import Toolbar from "../lib/components/Toolbar.svelte";
  import MenuButton from "../lib/components/MenuButton.svelte"

  let sticky: boolean;
  let open: boolean;
</script>

<SplitPane bind:sticky>
  <header slot="header">
    <Toolbar>
      <MenuButton slot="start" bind:open />
      <h4>Gix Components</h4>
    </Toolbar>
  </header>

  <Menu slot="menu" bind:open {sticky} />

  <main>
    <h1>Hello World 👋</h1>
  </main>
</SplitPane>

<style lang="scss" global>
  @import "../lib/styles/global.scss";
</style>
