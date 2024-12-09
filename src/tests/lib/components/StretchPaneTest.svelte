<script lang="ts">
  import StretchPane from "$lib/components/StretchPane.svelte";
</script>

<StretchPane>
  <div data-tid="stretch-pane-test-slot"></div>
  <div data-tid="stretch-pane-test-menu-slot" slot="menu"></div>
</StretchPane>
