<script lang="ts">
  import SplitPane from "$lib/components/SplitPane.svelte";
</script>

<SplitPane>
  <div data-tid="split-pane-test-slot" />
  <div data-tid="split-pane-test-menu-slot" slot="menu" />
</SplitPane>
