<script lang="ts">
  import { COMPONENT_ROUTES } from "$docs/constants/docs.constants";
  import Card from "$lib/components/Card.svelte";
</script>

<h1>Components</h1>

<p>
  The UI elements that you can inject into your project either by using the
  components.
</p>

<div class="card-grid">
  {#each COMPONENT_ROUTES as { path, title, description }, index (index)}
    <Card href={path}>
      <h2 slot="start" class="title">{title}</h2>

      <p>
        {description}
      </p>
    </Card>
  {/each}
</div>
