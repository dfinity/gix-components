<script lang="ts">
  import Collapsible from "$lib/components/Collapsible.svelte";

  export let props = {};
</script>

<Collapsible {...props} on:nnsToggle>
  <h3 slot="header">Jack</h3>
  Sparrow
</Collapsible>
