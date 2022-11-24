<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import { page } from "$app/stores";
  import { goto, afterNavigate } from "$app/navigation";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import Toasts from "$lib/components/Toasts.svelte";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
  import type { Navigation } from "@sveltejs/kit";
  import Content from "$lib/components/Content.svelte";

  let navHistory: Navigation[] = [];
  let back = false;

  const goBack = async (defaultRoute = "/") =>
    navHistory.length === 1
      ? goto(defaultRoute, { replaceState: true })
      : history.back();

  afterNavigate((navigation) => (navHistory = [navigation, ...navHistory]));

  $: back =
    ($page.routeId ?? "").split("/").filter((match) => match !== "").length > 1;
</script>

<Layout>
  <DocsMenu slot="menu-items" on:click />

  <Content {back} on:nnsBack={async () => await goBack()} layout="page">
    <HeaderTitle slot="title">GIX Components</HeaderTitle>

    <DocsAccountMenu slot="toolbar-end" />

    <main>
      <slot />
    </main>
  </Content>
</Layout>

<Toasts />

<style lang="scss" global>
  @import "../lib/styles/global.scss";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global.scss";
</style>
