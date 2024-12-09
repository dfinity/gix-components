<script lang="ts">
  import SplitBlock from "$lib/components/SplitBlock.svelte";
</script>

<SplitBlock>
  <div data-tid="content-test-start-slot" slot="start"></div>
  <div data-tid="content-test-end-slot" slot="end"></div>
</SplitBlock>
