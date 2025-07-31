<script lang="ts">
  import Card from "$lib/components/Card.svelte";
</script>

<h1>GIX Components</h1>

<p>A UI kit developed by the GIX team.</p>

<div class="card-grid">
  <Card href="/start">
    <h2 slot="start" class="title">Getting Started</h2>

    <p>
      Installation, theming, etc. all information you need to integrate <code
        >gix-components</code
      > to your dapp.
    </p>
  </Card>

  <Card href="/components">
    <h2 slot="start" class="title">Components</h2>

    <p>
      Browse all user interface components that can be used in your project.
    </p>
  </Card>

  <Card href="/utility-classes">
    <h2 slot="start" class="title">Utility Classes</h2>

    <p>
      A collection of utility classes to make the content of your dapp shine.
    </p>
  </Card>

  <Card href="/styling">
    <h2 slot="start" class="title">Styling</h2>

    <p>Information and guidelines regarding global styling.</p>
  </Card>

  <Card href="/icons">
    <h2 slot="start" class="title">Icons</h2>

    <p>
      Draw attention to important information with any icons provided by the
      design kit.
    </p>
  </Card>

  <Card href="/resources">
    <h2 slot="start" class="title">Resources</h2>

    <p>Useful resources and links.</p>
  </Card>
</div>
