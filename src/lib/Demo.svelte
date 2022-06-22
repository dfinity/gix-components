<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let color = "";

  const dispatch = createEventDispatcher();

  const demo = () => dispatch("nnsDemo");
</script>

<button on:click={demo} style="background: {color}">Hello I'm a button</button>
