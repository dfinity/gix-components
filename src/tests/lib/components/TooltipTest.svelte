<script lang="ts">
  import Tooltip from "$lib/components/Tooltip.svelte";

  export let text: string | undefined = undefined;
</script>

<Tooltip id="tid" {text}>
  <p>content</p>
</Tooltip>
