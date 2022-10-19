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

  <Card role="link" on:click={() => goto("/components/modal")}>
    <h2 class="title" slot="start">Modal</h2>

    <p>
      Modal component is used to display content that temporarily blocks
      interactions with the main view of an application.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/components/wizard-modal")}>
    <h2 class="title" slot="start">Wizard Modal</h2>

    <p>
      A particular type of Modal component used to present several steps in form
      of a wizard.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/components/input")}>
    <h2 class="title" slot="start">Input</h2>

    <p>A styled input field where the user can enter data.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/input-range")}>
    <h2 class="title" slot="start">Input Range</h2>

    <p>
      An input of type range to let the user specify a numeric value which must
      be no less than a given value, and no more than another given value.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/components/popover")}>
    <h2 class="title" slot="start">Popover</h2>
    <p>
      A popover is a floating container that is rendered over the content next
      to an anchor — commonly a button — which initiates its display.
    </p>
  </Card>

  <Card role="link" on:click={() => goto("/components/toggle")}>
    <h2 class="title" slot="start">Toggle</h2>
    <p>Toggles are switches that change the state of a single option.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/theme-toggle")}>
    <h2 class="title" slot="start">Theme Toggle</h2>
    <p>An opinionated theme toggle.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/dropdown")}>
    <h2 class="title" slot="start">Dropdown</h2>
    <p>Dropdown displays a list of selectable options for a user.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/progress-bar")}>
    <h2 class="title" slot="start">Progress Bar</h2>
    <p>An indicator showing the completion progress of a task.</p>
  </Card>

  <Card role="link" on:click={() => goto("/components/tag")}>
    <h2 class="title" slot="start">Tag</h2>
    <p>
      Tags are used to inform users of the status of an object or of an action
      that’s been taken.
    </p>
  </Card>
</div>
