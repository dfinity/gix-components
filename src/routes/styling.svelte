<script lang="ts">
  import Card from "../lib/components/Card.svelte";
  import { goto } from "$app/navigation";
</script>

<h1>Styling</h1>

<p>
  Global styles and guidelines that you can use in addition to the components to
  make your project shine and to display the content in a friendly manner that
  matches well the pre-defined layout of the kit.
</p>

<div class="card-grid">
  <Card role="link" on:click={() => goto("/styling/theming")}>
    <h2 class="title" slot="start">Theming</h2>

    <p>Dark and light theme.</p>
  </Card>

  <Card role="link" on:click={() => goto("/styling/text-opacity")}>
    <h2 class="title" slot="start">Text Opacity</h2>

    <p>Emphasize the importance of text blocks.</p>
  </Card>

  <Card role="link" on:click={() => goto("/styling/grids")}>
    <h2 class="title" slot="start">Grids</h2>

    <p>
      Various grid styles - based on a 12 columns system - to spread content.
    </p>
  </Card>
</div>
