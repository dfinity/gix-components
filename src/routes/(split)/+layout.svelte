<script lang="ts">
  import SplitContent from "$lib/components/SplitContent.svelte";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
  import DocsComponentsNav from "$docs/components/DocsComponentsNav.svelte";
</script>

<SplitContent>
  <DocsComponentsNav slot="start" />

  <DocsAccountMenu slot="toolbar-end" />

  <main slot="end">
    <slot />
  </main>
</SplitContent>
