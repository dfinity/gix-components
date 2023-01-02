<script lang="ts">
  import SplitContent from "$lib/components/SplitContent.svelte";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
</script>

<SplitContent>
  <header slot="header-start">Title</header>

  <div slot="start">ABCD</div>

  <HeaderTitle slot="header-end-title">GIX Components</HeaderTitle>

  <DocsAccountMenu slot="header-end-toolbar-end" />

  <main slot="end">
    <slot />
  </main>
</SplitContent>
