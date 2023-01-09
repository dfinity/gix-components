<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  export let url: string;

  let routeId = "";
  $: routeId = ($page.route.id ?? "").replace("/(split)", "");
</script>

<Card
  role="link"
  on:click={() => goto(url)}
  selected={routeId === url}
  theme={routeId !== url ? "transparent" : undefined}
>
  <span class="title"><slot /></span>
</Card>
