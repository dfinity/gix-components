<script lang="ts">
  import Card from "$lib/components/Card.svelte";
</script>

<h1>Styling</h1>

<p>Information and guidelines regarding the global styling.</p>

<div class="card-grid">
  <Card href="/styling/usage">
    <h2 class="title" slot="start">Usage</h2>

    <p>Setup the global style of the kit.</p>
  </Card>

  <Card href="/styling/theming">
    <h2 class="title" slot="start">Theming</h2>

    <p>Dark and light themes.</p>
  </Card>

  <Card href="/styling/menu">
    <h2 class="title" slot="start">Menu</h2>

    <p>Expanded and collapsed menu.</p>
  </Card>

  <Card href="/styling/fonts">
    <h2 class="title" slot="start">Fonts</h2>

    <p>License and installation of the fonts in your project.</p>
  </Card>

  <Card href="/styling/breakpoints">
    <h2 class="title" slot="start">Breakpoints</h2>

    <p>Viewport's breakpoints which make the styles adaptive.</p>
  </Card>
</div>
