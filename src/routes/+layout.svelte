<script lang="ts">
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import Layout from "$lib/components/Layout.svelte";
  import Toasts from "$lib/components/Toasts.svelte";
  import "$lib/styles/global.scss";
  import "$docs/styles/docs-global.scss";
  import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  import IconGIX from "$docs/icons/IconGIX.svelte";
</script>

<Layout>
  <DocsMenu slot="menu-items" on:click />

  <div slot="menu-logo" class="logo">
    <IconGIX />
    <span>GIX Components</span>
  </div>

  <slot />
</Layout>

<Toasts maxVisible={3} />
<Toasts position="top" />

<style lang="scss">
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--padding-0_5x);

    padding: var(--padding-2x) 0 0;

    // Avoid text glitch on menu close|open
    min-width: 125px;
  }
</style>
