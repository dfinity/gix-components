<script>
  import Card from "$lib/components/Card.svelte";
</script>

<h1>GIX Components</h1>

<p>A UI kit developed by the GIX team.</p>

<div class="card-grid">
  <Card href="/start">
    <h2 class="title" slot="start">Getting Started</h2>

    <p>
      Installation, theming, etc. all information you need to integrate <code
        >gix-components</code
      > to your dapp.
    </p>
  </Card>

  <Card href="/components">
    <h2 class="title" slot="start">Components</h2>

    <p>
      Browse all user interface components that can be used in your project.
    </p>
  </Card>

  <Card href="/utility-classes">
    <h2 class="title" slot="start">Utility Classes</h2>

    <p>
      A collection of utility classes to make the content of your dapp shine.
    </p>
  </Card>

  <Card href="/styling">
    <h2 class="title" slot="start">Styling</h2>

    <p>Information and guidelines regarding global styling.</p>
  </Card>

  <Card href="/icons">
    <h2 class="title" slot="start">Icons</h2>

    <p>
      Draw attention to important information with any icons provided by the
      design kit.
    </p>
  </Card>

  <Card href="/resources">
    <h2 class="title" slot="start">Resources</h2>

    <p>Useful resources and links.</p>
  </Card>
</div>
