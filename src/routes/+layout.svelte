<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import Toasts from "$lib/components/Toasts.svelte";
  import { onMount } from "svelte";
  import { initAnalytics } from "$docs/services/analytics.services";
  import "$lib/styles/global.scss";
  import "$docs/styles/docs-global.scss";
  import "../../node_modules/prismjs/themes/prism-tomorrow.css";

  onMount(initAnalytics);
</script>

<Layout>
  <DocsMenu slot="menu-items" on:click />

  <slot />
</Layout>

<Toasts />
<Toasts position="top" />
