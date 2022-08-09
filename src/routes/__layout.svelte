<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import Back from "$lib/components/Back.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let back = false;

  const goBack = async (defaultRoute = "/") => {
    const { referrer } = document;
    return goto(referrer.length > 0 ? referrer : defaultRoute);
  };

  $: back = ($page.routeId ?? "").includes("/");
</script>

<Layout {back}>
  <Back slot="back" on:nnsBack={async () => await goBack()} />

  <h4 slot="title">GIX Components</h4>

  <DocsMenu slot="menu-items" on:click />

  <slot />
</Layout>

<style lang="scss" global>
  @import "../lib/styles/global.scss";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global.scss";
</style>
