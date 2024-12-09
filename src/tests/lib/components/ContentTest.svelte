<script lang="ts">
  import Content from "$lib/components/Content.svelte";
</script>

<Content>
  <div data-tid="content-test-slot"></div>
  <div data-tid="content-test-title-slot" slot="title"></div>
  <div data-tid="content-test-toolbar-end-slot" slot="toolbar-end"></div>
</Content>
