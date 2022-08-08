<script>
  import CardGrid from "$lib/components/CardGrid.svelte";
  import Card from "$lib/components/Card.svelte";
  import { goto } from "$app/navigation";
</script>

<h1>GIX Components</h1>

<p>A UI kit developed by the GIX team.</p>

<CardGrid>
  <Card role="link" on:click={() => goto("/start")}>
    <h2 class="title" slot="start">Getting Started</h2>

    <p>
      Installation, theming, etc. all information you need to integrate <code
        >gix-components</code
      > to your dapp.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/components")}>
    <h2 class="title" slot="start">Components</h2>

    <p>
      Browse all user interface components that can be used in your <a
        href="https://svelte.dev/"
        rel="external noopener noreferrer"
        target="_blank">Svelte</a
      > project.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/resources")}>
    <h2 class="title" slot="start">Resources</h2>

    <p>Useful resources and links.</p>
  </Card>
</CardGrid>
