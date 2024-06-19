<svelte:options accessors />

<script lang="ts">
  import SplitContent from "$lib/components/SplitContent.svelte";

  export let originalComponent: SplitContent;
</script>

<SplitContent bind:this={originalComponent}>
  <div data-tid="content-test-start-slot" slot="start" />
  <div data-tid="content-test-end-slot" slot="end" />
  <div data-tid="content-test-title-slot" slot="title" />
  <div data-tid="content-test-toolbar-end-slot" slot="toolbar-end" />
</SplitContent>
