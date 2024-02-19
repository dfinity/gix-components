<script>
  import Tooltip from "$lib/components/Tooltip.svelte";

  export let text = "text";
</script>

<Tooltip id="tid" {text}>
  <p>content</p>
</Tooltip>
