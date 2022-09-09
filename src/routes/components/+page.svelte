<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { goto } from "$app/navigation";
</script>

<h1>Components</h1>

<p>
  The UI elements that you can inject into your project either by using the
  components.
</p>

<div class="card-grid">
  <Card role="link" on:click={() => goto("/components/layout")}>
    <h2 class="title" slot="start">Layout</h2>

    <p>Header, menu and footer. The structure of your dapp.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/header-title")}>
    <h2 class="title" slot="start">Header Title</h2>

    <p>An opinionated title for the dapp.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/card")}>
    <h2 class="title" slot="start">Card</h2>

    <p>
      Cards are surfaces that display content and optionally actions on a single
      topic.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/components/infinite-scroll")}>
    <h2 class="title" slot="start">Infinite Scroll</h2>

    <p>Calls an action when the user scrolls a specified distance in a list.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/skeleton-text")}>
    <h2 class="title" slot="start">Skeleton Text</h2>

    <p>A component for rendering placeholder content.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/bottom-sheet")}>
    <h2 class="title" slot="start">Bottom Sheet</h2>

    <p>
      A dialog containing supplementary content anchored to the bottom of the
      screen.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/components/spinner")}>
    <h2 class="title" slot="start">Spinner</h2>

    <p>
      A spinner component is used to indicate users that their action is being
      processed.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/components/toasts")}>
    <h2 class="title" slot="start">Toasts</h2>

    <p>
      Toasts are non-disruptive messages that appear in the interface to provide
      quick, at-a-glance feedback on the outcome of an action.
    </p>
  </Card>
</div>

<p>TODO docs:</p>

<ul>
  <li>
    Back, menu, menubutton, menuitem, splitpane (maybe, included in layout)
  </li>
  <li>Toolbar (maybe, included in layout)</li>
  <li>Backdrop (maybe, included in overlays)</li>
</ul>
