<script lang="ts">
  import SplitContent from "$lib/components/SplitContent.svelte";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
  import DocsComponentsNav from "$docs/components/DocsComponentsNav.svelte";
</script>

<SplitContent>
  {#snippet start()}<DocsComponentsNav />{/snippet}

  {#snippet toolbarEnd()}<DocsAccountMenu />{/snippet}

  {#snippet end()}
    <main>
      <slot />
    </main>
  {/snippet}
</SplitContent>
