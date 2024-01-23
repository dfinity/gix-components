<script lang="ts">
  import Card from "$lib/components/Card.svelte";
</script>

<h1>Utility Classes</h1>

<p>
  A collection of (CSS) utility classes that you can use - in addition to the
  components - to make your project shine and to display the content in a
  friendly manner that matches well the pre-defined layout of the kit.
</p>

<div class="card-grid">
  <Card href="/utility-classes/text">
    <h2 class="title" slot="start">Text</h2>

    <p>Emphasize the importance of text blocks.</p>
  </Card>

  <Card href="/utility-classes/grids">
    <h2 class="title" slot="start">Grids</h2>

    <p>
      Various grid styles - based on a 12 columns system - to spread content.
    </p>
  </Card>

  <Card href="/utility-classes/cells">
    <h2 class="title" slot="start">Cells</h2>

    <p>Some pre-defined utilities to set spaces for grid's cells.</p>
  </Card>

  <Card href="/utility-classes/buttons">
    <h2 class="title" slot="start">Buttons</h2>

    <p>All styles that can be applied to buttons.</p>
  </Card>

  <Card href="/utility-classes/links">
    <h2 class="title" slot="start">Links</h2>

    <p>Styles that can be applied to the anchor tag.</p>
  </Card>

  <Card href="/utility-classes/numbers">
    <h2 class="title" slot="start">Numbers</h2>

    <p>Format figures for display purpose.</p>
  </Card>

  <Card href="/utility-classes/tag">
    <h2 class="title" slot="start">Tag</h2>

    <p>Tag styles.</p>
  </Card>
</div>
