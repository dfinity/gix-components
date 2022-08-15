<script lang="ts">
  import Card from "../lib/components/Card.svelte";
  import { goto } from "$app/navigation";
</script>

<h1>Components</h1>

<p>
  The UI elements that you can inject into your project either by using the
  components or through styles.
</p>

<div class="grid">
  <Card role="link" on:click={() => goto("/components/layout")}>
    <h2 class="title" slot="start">Layout</h2>

    <p>Header, menu and footer. The structure of your dapp.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/grid")}>
    <h2 class="title" slot="start">Grid</h2>

    <p>A grid based columns container to spread content.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/infinite-scroll")}>
    <h2 class="title" slot="start">Infinite scroll</h2>

    <p>Calls an action when the user scrolls a specified distance in a list.</p>
  </Card>
</div>

<p>TODO docs:</p>

<ul>
  <li>Card</li>
  <li>
    Back, menu, menubutton, menuitem, splitpane (maybe, included in layout)
  </li>
  <li>Toolbar (maybe, included in layout)</li>
  <li>Backdrop (maybe, included in overlays)</li>
</ul>
