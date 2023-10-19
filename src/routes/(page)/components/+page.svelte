<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { COMPONENT_ROUTES } from "$docs/constants/docs.constants";
</script>

<h1>Components</h1>

<p>
  The UI elements that you can inject into your project either by using the
  components.
</p>

<div class="card-grid">
  {#each COMPONENT_ROUTES as { path, title, description }}
    <Card href={path}>
      <h2 class="title" slot="start">{title}</h2>

      <p>
        {description}
      </p>
    </Card>
  {/each}
</div>
