<script lang="ts">
  import SplitContent from "$lib/components/SplitContent.svelte";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
  import DocsComponentsNav from "$docs/components/DocsComponentsNav.svelte";
</script>

<SplitContent>
  <DocsComponentsNav slot="start" />

  <HeaderTitle slot="title">GIX Components</HeaderTitle>

  <DocsAccountMenu slot="toolbar-end" />

  <main slot="end">
    <slot />
  </main>
</SplitContent>
