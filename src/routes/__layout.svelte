<script lang="ts">
    import Layout from "$lib/components/Layout.svelte";
    import DocsMenu from "$docs/components/DocsMenu.svelte";
</script>

<Layout>
    <h4 slot="title">Gix Components</h4>

    <DocsMenu slot="menu-items" />

    <slot />
</Layout>

<style lang="scss" global>
  @import "../lib/styles/global.scss";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global.scss";
</style>
