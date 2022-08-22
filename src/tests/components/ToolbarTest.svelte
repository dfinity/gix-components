<script lang="ts">
  import Toolbar from "$lib/components/Toolbar.svelte";
</script>

<Toolbar>
  <div data-tid="toolbar-test-start-slot" slot="start" />
  <div data-tid="toolbar-test-slot" />
  <div data-tid="toolbar-test-end-slot" slot="end" />
</Toolbar>
