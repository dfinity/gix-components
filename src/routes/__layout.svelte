<script lang="ts">
    import Layout from "$lib/components/Layout.svelte";
    import ShowcaseMenu from "$docs/components/DocsMenu.svelte";
</script>

<Layout>
    <h4 slot="title">Gix Components</h4>

    <ShowcaseMenu slot="menu" />

    <slot />
</Layout>

<style lang="scss" global>
  @import "../lib/styles/global.scss";
</style>
