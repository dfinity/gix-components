<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import { page } from "$app/stores";
  import { goto, afterNavigate } from "$app/navigation";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";

  let navHistory: { from: URL | null; to: URL }[] = [];
  let back = false;

  const goBack = async (defaultRoute = "/") =>
    navHistory.length === 1
      ? goto(defaultRoute, { replaceState: true })
      : history.back();

  afterNavigate((navigation) => (navHistory = [navigation, ...navHistory]));

  $: back = ($page.routeId ?? "").includes("/");
</script>

<Layout {back} on:nnsBack={async () => await goBack()}>
  <HeaderTitle slot="title">GIX Components</HeaderTitle>

  <DocsMenu slot="menu-items" on:click />

  <main>
    <slot />
  </main>
</Layout>

<style lang="scss" global>
  @import "../lib/styles/global.scss";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global.scss";
</style>
