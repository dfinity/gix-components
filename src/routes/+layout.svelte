<script lang="ts">
    import Layout from "$lib/components/Layout.svelte";
    import DocsMenu from "$docs/components/DocsMenu.svelte";
    import Toasts from "$lib/components/Toasts.svelte";
</script>

<Layout>
    <DocsMenu slot="menu-items" on:click />

    <slot />
</Layout>

<Toasts />

<style lang="scss" global>
  @import "../lib/styles/global";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global";
</style>