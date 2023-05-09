<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { goto } from "$app/navigation";
</script>

<h1>Utility Classes</h1>

<p>
  A collection of (CSS) utility classes that you can use - in addition to the
  components - to make your project shine and to display the content in a
  friendly manner that matches well the pre-defined layout of the kit.
</p>

<div class="card-grid">
  <Card role="link" on:click={() => goto("/utility-classes/text-opacity")}>
    <h2 class="title" slot="start">Text Opacity</h2>

    <p>Emphasize the importance of text blocks.</p>
  </Card>

  <Card role="link" on:click={() => goto("/utility-classes/grids")}>
    <h2 class="title" slot="start">Grids</h2>

    <p>
      Various grid styles - based on a 12 columns system - to spread content.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/utility-classes/cells")}>
    <h2 class="title" slot="start">Cells</h2>

    <p>Some pre-defined utilities to set spaces for grid's cells.</p>
  </Card>

  <Card role="link" on:click={() => goto("/utility-classes/buttons")}>
    <h2 class="title" slot="start">Buttons</h2>

    <p>All styles that can be applied to buttons.</p>
  </Card>

  <Card role="link" on:click={() => goto("/utility-classes/numbers")}>
    <h2 class="title" slot="start">Numbers</h2>

    <p>Format figures for display purpose.</p>
  </Card>
</div>
