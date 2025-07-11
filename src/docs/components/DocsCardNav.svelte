<script lang="ts">
  import { page } from "$app/stores";
  import Card from "$lib/components/Card.svelte";

  export let url: string;

  let routeId = "";
  $: routeId = ($page.route.id ?? "").replace("/(split)", "");
</script>

<Card
  href={url}
  selected={routeId === url}
  theme={routeId !== url ? "transparent" : undefined}
>
  <span class="title"><slot /></span>
</Card>
