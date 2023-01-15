<script>
  import Card from "$lib/components/Card.svelte";
  import { goto } from "$app/navigation";
</script>

<h1>GIX Components</h1>

<p>A UI kit developed by the GIX team.</p>

<div class="card-grid">
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
      Browse all user interface components that can be used in your project.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/utility-classes")}>
    <h2 class="title" slot="start">Utility Classes</h2>

    <p>
      A collection of utility classes to make the content of your dapp shine.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/styling")}>
    <h2 class="title" slot="start">Styling</h2>

    <p>Information and guidelines regarding global styling.</p>
  </Card>

  <Card role="link" on:click={() => goto("/icons")}>
    <h2 class="title" slot="start">Icons</h2>

    <p>
      Draw attention to important information with any icons provided by the
      design kit.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/resources")}>
    <h2 class="title" slot="start">Resources</h2>

    <p>Useful resources and links.</p>
  </Card>
</div>
