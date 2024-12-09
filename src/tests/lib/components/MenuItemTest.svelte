<script lang="ts">
  import MenuItem from "$lib/components/MenuItem.svelte";
</script>

<MenuItem href="https://test">
  <div data-tid="menuitem-test-icon" slot="icon"></div>
  <div data-tid="menuitem-test-default"></div>
  <div data-tid="menuitem-test-status-icon" slot="statusIcon"></div>
</MenuItem>
