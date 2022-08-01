<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import DocsMenu from "$docs/components/DocsMenu.svelte";
</script>

<Layout>
  <h4 slot="title">Gix Components</h4>

  <DocsMenu slot="menu-items" on:click />

  <slot />
</Layout>

<style lang="scss" global>
  @import "../lib/styles/global.scss";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global.scss";

  // Custom sizes for docs

  main {
    & > h2, & > .grid {
      margin-top: var(--padding-4x);
    }

    & > h3,
    & > ul {
      margin-top: var(--padding-3x);
    }

    table,
    pre[class*="language-"] {
      margin: var(--padding-3x) 0;
    }
  }

  a {
    font-size: inherit;
    text-decoration: underline;

    &:focus,
    &:hover {
      color: var(--primary);
    }
  }

  p code {
    font-size: var(--font-size-small);
    background: #2d2d2d;
    padding: var(--padding-0_5x);
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }
</style>
