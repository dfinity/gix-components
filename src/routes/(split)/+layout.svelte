<script lang="ts">
  import SplitContent from "$lib/components/SplitContent.svelte";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
</script>

<SplitContent>
  <div slot="start">ABCD</div>

  <HeaderTitle slot="title">GIX Components</HeaderTitle>

  <DocsAccountMenu slot="toolbar-end" />

  <main slot="end">
    <slot />
  </main>
</SplitContent>
