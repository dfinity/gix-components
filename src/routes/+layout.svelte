<script lang="ts">
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import IconGIX from "$docs/icons/IconGIX.svelte";
  import Layout from "$lib/components/Layout.svelte";
  import Toasts from "$lib/components/Toasts.svelte";
  import "$lib/styles/global.scss";
  import "$docs/styles/docs-global.scss";
  // eslint-disable-next-line import/no-relative-parent-imports
  import "../../node_modules/prismjs/themes/prism-tomorrow.css";
</script>

<div class="maintenance-banner" role="status">
  <span>
    <strong>Maintenance mode.</strong> GIX Components receives critical fixes only
    — no new features. Not recommended for new projects.
  </span>
</div>

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
  .maintenance-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--padding);

    padding: var(--padding) var(--padding-2x);

    background: var(--warning-emphasis, #b8860b);
    color: var(--warning-emphasis-contrast, #ffffff);

    text-align: center;
    font-size: var(--font-size-small);
    line-height: var(--line-height-standard);

    strong {
      font-weight: var(--font-weight-bold);
    }
  }

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
