<script lang="ts">
  import { SvelteComponent } from "svelte";

  export let cmp: typeof SvelteComponent;
  export let testId: string;
</script>

<svelte:component this={cmp}>
  <p data-tid={testId}>TEST TITLE</p>
</svelte:component>
