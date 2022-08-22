<script lang="ts">
  import TwoColumns from "$lib/components/TwoColumns.svelte";
</script>

<TwoColumns>
  <div data-tid="two-columns-test-start-slot" slot="start" />
  <div data-tid="two-columns-test-end-slot" slot="end" />
</TwoColumns>
