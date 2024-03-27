<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { page } from "$app/stores";

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
