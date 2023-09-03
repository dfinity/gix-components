<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import Toasts from "$lib/components/Toasts.svelte";
  import { onMount } from "svelte";
  import { initOrbiter } from "@junobuild/analytics";

  onMount(async () =>
    await initOrbiter({
      satelliteId: "nbyi7-6aaaa-aaaal-acjtq-cai",
      orbiterId: "3iier-sqaaa-aaaal-aczaa-cai",
    }),
  );
</script>

<Layout>
  <DocsMenu slot="menu-items" on:click />

  <slot />
</Layout>

<Toasts />
<Toasts position="top" />

<style lang="scss" global>
  @import "../lib/styles/global";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global";
</style>
