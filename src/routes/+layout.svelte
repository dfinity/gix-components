<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import Toasts from "$lib/components/Toasts.svelte";
  import { onMount } from "svelte";
  import { initAnalytics } from "$docs/services/analytics.services";

  onMount(initAnalytics);
</script>

<Layout>
  <DocsMenu slot="menu-items" on:click />

  <slot />
</Layout>

<Toasts />
<Toasts position="top" />

<style lang="scss" global>
  @import "the-new-css-reset/css/reset.css";
  @import "../lib/styles/global";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global";
</style>
