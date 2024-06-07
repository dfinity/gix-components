<script lang="ts">
  import Tooltip from "$lib/components/Tooltip.svelte";

  export let id: string | undefined = undefined;
  export let idPrefix: string | undefined = undefined;
  export let text: string | undefined = undefined;
</script>

<Tooltip {id} {idPrefix} {text}>
  <p>content</p>
</Tooltip>
