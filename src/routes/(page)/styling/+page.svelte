<script lang="ts">
  import Card from "$lib/components/Card.svelte";
</script>

<h1>Styling</h1>

<p>Information and guidelines regarding the global styling.</p>

<div class="card-grid">
  <Card href="/styling/usage">
    <h2 slot="start" class="title">Usage</h2>

    <p>Setup the global style of the kit.</p>
  </Card>

  <Card href="/styling/theming">
    <h2 slot="start" class="title">Theming</h2>

    <p>Dark and light themes.</p>
  </Card>

  <Card href="/styling/menu">
    <h2 slot="start" class="title">Menu</h2>

    <p>Expanded and collapsed menu.</p>
  </Card>

  <Card href="/styling/fonts">
    <h2 slot="start" class="title">Fonts</h2>

    <p>License and installation of the fonts in your project.</p>
  </Card>

  <Card href="/styling/breakpoints">
    <h2 slot="start" class="title">Breakpoints</h2>

    <p>Viewport's breakpoints which make the styles adaptive.</p>
  </Card>
</div>
