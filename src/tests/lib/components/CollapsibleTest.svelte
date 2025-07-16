<script lang="ts">
  import Collapsible, {
    type CollapsibleProps,
  } from "$lib/components/Collapsible.svelte";

  export let props: Omit<CollapsibleProps, "header" | "children"> = {};
</script>

<Collapsible {...props}>
  {#snippet header()}Jack{/snippet}
  Sparrow
</Collapsible>
